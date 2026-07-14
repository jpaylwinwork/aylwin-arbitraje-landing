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

export const MATERIA_OPTIONS = ["Arbitraje", "Reclamo de ilegalidad"] as const;

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
