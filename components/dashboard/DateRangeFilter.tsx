import Link from "next/link";
import { MATERIA_LABELS, MATERIA_OPTIONS, STATUS_OPTIONS } from "@/lib/dashboard";

const RANGE_OPTIONS = [
  { value: "today", label: "Hoy" },
  { value: "yesterday", label: "Ayer" },
  { value: "7d", label: "Últimos 7 días" },
  { value: "30d", label: "Últimos 30 días" },
] as const;

export default function DateRangeFilter({
  range,
  materia,
  status,
}: {
  range: string;
  materia?: string;
  status?: string;
}) {
  return (
    <form method="get" className="flex flex-wrap items-end gap-4">
      <div>
        <label htmlFor="range" className="block text-xs font-bold uppercase tracking-wide text-muted">
          Período
        </label>
        <select
          id="range"
          name="range"
          defaultValue={range}
          className="mt-1 rounded-md border border-line bg-white px-3 h-10 text-sm"
        >
          {RANGE_OPTIONS.map((r) => (
            <option key={r.value} value={r.value}>
              {r.label}
            </option>
          ))}
        </select>
      </div>
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
              {MATERIA_LABELS[m]}
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
      {(materia || status || range !== "7d") && (
        <Link href="/dashboard" className="h-10 flex items-center text-sm font-bold text-brand-600 hover:text-brand-500">
          Limpiar filtros
        </Link>
      )}
    </form>
  );
}
