import { neon } from "@neondatabase/serverless";
import Link from "next/link";
import StatusSelect from "@/components/dashboard/StatusSelect";
import { MATERIA_OPTIONS, STATUS_OPTIONS, type Lead } from "@/lib/dashboard";

export const dynamic = "force-dynamic";

async function getData(materia: string | undefined, status: string | undefined) {
  const sql = neon(process.env.DATABASE_URL!);

  const leadsPromise = sql.query(
    `SELECT id, created_at, name, email, phone, company, message,
            utm_source, utm_medium, utm_campaign, utm_term, click_id, materia, status
     FROM leads
     WHERE ($1::text IS NULL OR materia = $1)
       AND ($2::text IS NULL OR status = $2)
     ORDER BY created_at DESC
     LIMIT 200`,
    [materia ?? null, status ?? null],
  );
  const totalPromise = sql.query("SELECT COUNT(*)::int AS n FROM leads");
  const weekPromise = sql.query(
    "SELECT COUNT(*)::int AS n FROM leads WHERE created_at >= now() - interval '7 days'",
  );
  const byStatusPromise = sql.query("SELECT status, COUNT(*)::int AS n FROM leads GROUP BY status");
  const byMateriaPromise = sql.query(
    "SELECT materia, COUNT(*)::int AS n FROM leads WHERE materia IS NOT NULL GROUP BY materia",
  );

  const [leadsRes, totalRes, weekRes, byStatusRes, byMateriaRes] = await Promise.all([
    leadsPromise,
    totalPromise,
    weekPromise,
    byStatusPromise,
    byMateriaPromise,
  ]);

  return {
    leads: leadsRes as unknown as Lead[],
    total: (totalRes[0] as { n: number })?.n ?? 0,
    week: (weekRes[0] as { n: number })?.n ?? 0,
    byStatus: byStatusRes as unknown as { status: string; n: number }[],
    byMateria: byMateriaRes as unknown as { materia: string; n: number }[],
  };
}

function fmtDate(iso: string) {
  return new Date(iso).toLocaleString("es-CL", {
    dateStyle: "short",
    timeStyle: "short",
    timeZone: "America/Santiago",
  });
}

export default async function DashboardPage(props: PageProps<"/dashboard">) {
  const params = await props.searchParams;
  const materia = typeof params.materia === "string" && params.materia ? params.materia : undefined;
  const status = typeof params.status === "string" && params.status ? params.status : undefined;

  const { leads, total, week, byStatus, byMateria } = await getData(materia, status);

  return (
    <div className="min-h-full bg-surface text-ink-900">
      <header className="bg-ink-900 py-4">
        <div className="mx-auto max-w-6xl px-5 sm:px-6 flex items-baseline gap-2 text-white">
          <span className="font-serif text-lg font-semibold tracking-wide">AYLWIN MATTA</span>
          <span className="text-[11px] uppercase tracking-[0.2em] text-white/60">Dashboard de leads</span>
        </div>
      </header>

      <main className="mx-auto max-w-6xl px-5 sm:px-6 py-8 sm:py-10">
        {/* Stats */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
          <div className="rounded-xl border border-line bg-white p-5">
            <p className="text-xs font-bold uppercase tracking-wide text-muted">Total leads</p>
            <p className="mt-1 font-serif text-3xl font-semibold text-ink-900">{total}</p>
          </div>
          <div className="rounded-xl border border-line bg-white p-5">
            <p className="text-xs font-bold uppercase tracking-wide text-muted">Últimos 7 días</p>
            <p className="mt-1 font-serif text-3xl font-semibold text-ink-900">{week}</p>
          </div>
          {byMateria.map((m) => (
            <div key={m.materia} className="rounded-xl border border-line bg-white p-5">
              <p className="text-xs font-bold uppercase tracking-wide text-muted">{m.materia}</p>
              <p className="mt-1 font-serif text-3xl font-semibold text-ink-900">{m.n}</p>
            </div>
          ))}
        </div>

        {/* Status breakdown */}
        <div className="mt-4 flex flex-wrap gap-2">
          {STATUS_OPTIONS.map((s) => {
            const count = byStatus.find((b) => b.status === s.value)?.n ?? 0;
            return (
              <span
                key={s.value}
                className="rounded-full border border-line bg-white px-3 py-1 text-xs font-bold text-ink-700"
              >
                {s.label}: {count}
              </span>
            );
          })}
        </div>

        {/* Filters */}
        <form method="get" className="mt-8 flex flex-wrap items-end gap-4">
          <div>
            <label htmlFor="materia" className="block text-xs font-bold uppercase tracking-wide text-muted">
              Materia
            </label>
            <select
              id="materia"
              name="materia"
              defaultValue={materia ?? ""}
              className="mt-1 rounded-md border border-line bg-white px-3 h-10 text-sm"
            >
              <option value="">Todas</option>
              {MATERIA_OPTIONS.map((m) => (
                <option key={m} value={m}>
                  {m}
                </option>
              ))}
            </select>
          </div>
          <div>
            <label htmlFor="status" className="block text-xs font-bold uppercase tracking-wide text-muted">
              Estado
            </label>
            <select
              id="status"
              name="status"
              defaultValue={status ?? ""}
              className="mt-1 rounded-md border border-line bg-white px-3 h-10 text-sm"
            >
              <option value="">Todos</option>
              {STATUS_OPTIONS.map((s) => (
                <option key={s.value} value={s.value}>
                  {s.label}
                </option>
              ))}
            </select>
          </div>
          <button
            type="submit"
            className="h-10 rounded-md bg-ink-700 px-5 text-sm font-bold text-white hover:bg-ink-600 transition-colors"
          >
            Filtrar
          </button>
          {(materia || status) && (
            <Link href="/dashboard" className="h-10 flex items-center text-sm font-bold text-brand-600 hover:text-brand-500">
              Limpiar filtros
            </Link>
          )}
        </form>

        {/* Table */}
        <div className="mt-6 overflow-x-auto rounded-xl border border-line bg-white">
          <table className="w-full text-left text-sm">
            <thead className="bg-panel text-xs font-bold uppercase tracking-wide text-muted">
              <tr>
                <th className="px-4 py-3">Fecha</th>
                <th className="px-4 py-3">Contacto</th>
                <th className="px-4 py-3">Materia</th>
                <th className="px-4 py-3">Mensaje</th>
                <th className="px-4 py-3">Origen</th>
                <th className="px-4 py-3">Ref</th>
                <th className="px-4 py-3">Estado</th>
              </tr>
            </thead>
            <tbody>
              {leads.length === 0 && (
                <tr>
                  <td colSpan={7} className="px-4 py-8 text-center text-muted">
                    No hay leads con estos filtros.
                  </td>
                </tr>
              )}
              {leads.map((lead) => (
                <tr key={lead.id} className="border-t border-line align-top">
                  <td className="px-4 py-3 whitespace-nowrap text-xs text-muted">{fmtDate(lead.created_at)}</td>
                  <td className="px-4 py-3">
                    <p className="font-bold text-ink-900">{lead.name}</p>
                    <p className="text-xs text-muted">{lead.email}</p>
                    {lead.phone && <p className="text-xs text-muted">{lead.phone}</p>}
                    {lead.company && <p className="text-xs text-muted">{lead.company}</p>}
                  </td>
                  <td className="px-4 py-3 whitespace-nowrap">{lead.materia ?? "—"}</td>
                  <td className="px-4 py-3 max-w-xs">
                    <p className="line-clamp-3 text-xs text-ink-700">{lead.message}</p>
                  </td>
                  <td className="px-4 py-3 whitespace-nowrap text-xs text-muted">
                    {lead.utm_source ? `${lead.utm_source}/${lead.utm_medium ?? "-"}` : "orgánico"}
                    {lead.utm_campaign && <div>{lead.utm_campaign}</div>}
                  </td>
                  <td className="px-4 py-3 whitespace-nowrap text-xs text-muted font-mono">
                    {lead.click_id ?? "—"}
                  </td>
                  <td className="px-4 py-3">
                    <StatusSelect id={lead.id} status={lead.status} />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="mt-3 text-xs text-muted">Mostrando hasta 200 leads más recientes.</p>
      </main>
    </div>
  );
}
