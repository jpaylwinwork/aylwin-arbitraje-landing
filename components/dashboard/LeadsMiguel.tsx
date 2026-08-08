import type { LeadMiguel } from "@/lib/dashboard";

// Tabla de consultas entradas por miguelaylwin.com. Hasta ahora estas
// consultas solo existían en Telegram: el dashboard leía únicamente la tabla
// del estudio, así que si el aviso se perdía no quedaba dónde recuperarlas.

function fecha(iso: string): string {
  const d = new Date(iso);
  return Number.isNaN(d.getTime())
    ? iso
    : d.toLocaleString("es-CL", { day: "2-digit", month: "2-digit", hour: "2-digit", minute: "2-digit" });
}

const COLOR_PRIORIDAD: Record<string, string> = {
  urgente: "#a8000d",
  alta: "#c2410c",
};

export default function LeadsMiguel({ leads }: { leads: LeadMiguel[] }) {
  if (leads.length === 0) {
    return (
      <p className="text-sm text-muted">
        Sin consultas de miguelaylwin.com en este período.
      </p>
    );
  }

  return (
    <div className="overflow-x-auto">
      <table className="w-full text-sm">
        <thead>
          <tr className="border-b border-line text-left">
            <th className="py-2 pr-4 font-semibold">Fecha</th>
            <th className="py-2 pr-4 font-semibold">Quién</th>
            <th className="py-2 pr-4 font-semibold">Conflicto</th>
            <th className="py-2 pr-4 font-semibold">Cuantía</th>
            <th className="py-2 pr-4 font-semibold">Estado</th>
            <th className="py-2 font-semibold">Origen</th>
          </tr>
        </thead>
        <tbody>
          {leads.map((l) => (
            <tr key={l.id} className="border-b border-line align-top">
              <td className="py-2 pr-4 whitespace-nowrap">{fecha(l.created_at)}</td>
              <td className="py-2 pr-4">
                <span className="font-medium">{l.nombre}</span>
                {l.empresa ? <span className="block text-muted">{l.empresa}</span> : null}
                <span className="block text-muted">{l.correo}</span>
                {l.telefono ? <span className="block text-muted">{l.telefono}</span> : null}
                {l.prioridad !== "normal" ? (
                  <span
                    className="mt-1 inline-block text-xs font-semibold uppercase tracking-wide"
                    style={{ color: COLOR_PRIORIDAD[l.prioridad] ?? "inherit" }}
                  >
                    {l.urgente ? "Urgente" : "Lead caliente"}
                  </span>
                ) : null}
              </td>
              <td className="py-2 pr-4">
                {l.tipo_conflicto ? (
                  <span className="block font-medium">{l.tipo_conflicto}</span>
                ) : null}
                <span className="block max-w-md text-muted">{l.conflicto}</span>
              </td>
              <td className="py-2 pr-4 whitespace-nowrap">{l.cuantia_tramo ?? "—"}</td>
              <td className="py-2 pr-4">{l.estado_conflicto ?? "—"}</td>
              <td className="py-2 whitespace-nowrap">
                {l.fuente === "landing-ads" ? "Landing Ads" : "Web SEO"}
                {l.click_id ? <span className="block text-muted">{l.click_id}</span> : null}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
