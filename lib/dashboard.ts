import { neon } from "@neondatabase/serverless";

export const STATUS_OPTIONS = [
  { value: "nuevo", label: "Nuevo" },
  { value: "contactado", label: "Contactado" },
  { value: "reunion", label: "Reunión agendada" },
  { value: "convertido", label: "Convertido" },
  { value: "descartado", label: "Descartado" },
] as const;

export type LeadStatus = (typeof STATUS_OPTIONS)[number]["value"];

export const STATUS_LABELS: Record<string, string> = Object.fromEntries(
  STATUS_OPTIONS.map((s) => [s.value, s.label]),
);

// "home" is a synthetic filter value: home-page leads have materia IS NULL in
// Postgres (ContactForm.tsx never sends one), but GTM tags their generate_lead
// event as lead_materia:"home" — this constant + toSqlMateria() keep both
// funnels agreeing on what "home" means.
export const MATERIA_OPTIONS = ["home", "Arbitraje", "Reclamo de ilegalidad"] as const;
export const MATERIA_LABELS: Record<string, string> = {
  home: "Home (orgánico)",
  Arbitraje: "Arbitraje",
  "Reclamo de ilegalidad": "Reclamo de ilegalidad",
};

function toSqlMateria(materia: string | undefined): string | null | undefined {
  if (!materia) return undefined; // no filter
  if (materia === "home") return null; // translates to "materia IS NULL"
  return materia;
}

export type Range = "today" | "yesterday" | "7d" | "30d";

function rangeToSqlBounds(range: Range): { from: string; to: string } {
  // America/Santiago day boundaries, matching the dashboard's display convention
  switch (range) {
    case "today":
      return { from: "date_trunc('day', now() AT TIME ZONE 'America/Santiago')", to: "now()" };
    case "yesterday":
      return {
        from: "date_trunc('day', now() AT TIME ZONE 'America/Santiago') - interval '1 day'",
        to: "date_trunc('day', now() AT TIME ZONE 'America/Santiago')",
      };
    case "30d":
      return { from: "now() - interval '30 days'", to: "now()" };
    case "7d":
    default:
      return { from: "now() - interval '7 days'", to: "now()" };
  }
}

export type Lead = {
  id: number;
  created_at: string;
  name: string;
  email: string;
  phone: string | null;
  company: string | null;
  message: string;
  utm_source: string | null;
  utm_medium: string | null;
  utm_campaign: string | null;
  utm_term: string | null;
  click_id: string | null;
  materia: string | null;
  status: string;
};

const FORWARD_STAGES = ["nuevo", "contactado", "reunion", "convertido"] as const;

export type CommercialFunnel = {
  range: Range;
  total: number;
  stages: { status: string; label: string; count: number; pctOfTotal: number; pctOfPrevious: number | null }[];
  descartado: { count: number; pctOfTotal: number };
};

export async function getCommercialFunnel(range: Range, materia?: string): Promise<CommercialFunnel> {
  const sql = neon(process.env.DATABASE_URL!);
  const { from, to } = rangeToSqlBounds(range);
  const sqlMateria = toSqlMateria(materia);
  const isHomeFilter = materia === "home";

  const rows = (await sql.query(
    `SELECT status, COUNT(*)::int AS n
     FROM leads
     WHERE created_at >= (${from}) AND created_at < (${to})
       AND ($1::boolean IS NOT TRUE OR materia IS NULL)
       AND ($1::boolean IS TRUE OR $2::text IS NULL OR materia = $2)
     GROUP BY status`,
    [isHomeFilter, isHomeFilter ? null : (sqlMateria ?? null)],
  )) as unknown as { status: string; n: number }[];

  const countFor = (status: string) => rows.find((r) => r.status === status)?.n ?? 0;
  const descartadoCount = countFor("descartado");
  const total = rows.reduce((acc, r) => acc + r.n, 0);

  // "reached stage N" = count of leads currently AT or PAST stage N (approximation —
  // leads.status only stores current state, there's no history table)
  let cumulative = 0;
  const stageCounts: number[] = [];
  for (let i = FORWARD_STAGES.length - 1; i >= 0; i--) {
    cumulative += countFor(FORWARD_STAGES[i]);
    stageCounts[i] = cumulative;
  }

  const forwardTotal = total - descartadoCount;
  const stages = FORWARD_STAGES.map((status, i) => ({
    status,
    label: STATUS_LABELS[status],
    count: stageCounts[i],
    pctOfTotal: forwardTotal > 0 ? Math.round((stageCounts[i] / forwardTotal) * 100) : 0,
    pctOfPrevious:
      i === 0 ? null : stageCounts[i - 1] > 0 ? Math.round((stageCounts[i] / stageCounts[i - 1]) * 100) : 0,
  }));

  return {
    range,
    total,
    stages,
    descartado: { count: descartadoCount, pctOfTotal: total > 0 ? Math.round((descartadoCount / total) * 100) : 0 },
  };
}

export async function getLeadsTable(range: Range, materia?: string, status?: string): Promise<Lead[]> {
  const sql = neon(process.env.DATABASE_URL!);
  const { from, to } = rangeToSqlBounds(range);
  const sqlMateria = toSqlMateria(materia);
  const isHomeFilter = materia === "home";

  return (await sql.query(
    `SELECT id, created_at, name, email, phone, company, message,
            utm_source, utm_medium, utm_campaign, utm_term, click_id, materia, status
     FROM leads
     WHERE created_at >= (${from}) AND created_at < (${to})
       AND ($1::boolean IS NOT TRUE OR materia IS NULL)
       AND ($1::boolean IS TRUE OR $2::text IS NULL OR materia = $2)
       AND ($3::text IS NULL OR status = $3)
     ORDER BY created_at DESC
     LIMIT 200`,
    [isHomeFilter, isHomeFilter ? null : (sqlMateria ?? null), status ?? null],
  )) as unknown as Lead[];
}
