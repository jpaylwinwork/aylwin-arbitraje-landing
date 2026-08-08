import StatusSelect from "@/components/dashboard/StatusSelect";
import DateRangeFilter from "@/components/dashboard/DateRangeFilter";
import CommercialFunnel from "@/components/dashboard/CommercialFunnel";
import TrafficFunnel from "@/components/dashboard/TrafficFunnel";
import LeadsMiguel from "@/components/dashboard/LeadsMiguel";
import { getCommercialFunnel, getLeadsTable, getLeadsMiguel, type Range } from "@/lib/dashboard";
import { getTrafficFunnel } from "@/lib/ga4";

export const dynamic = "force-dynamic";

function fmtDate(iso: string) {
  return new Date(iso).toLocaleString("es-CL", {
    dateStyle: "short",
    timeStyle: "short",
    timeZone: "America/Santiago",
  });
}

function parseRange(value: unknown): Range {
  return value === "today" || value === "yesterday" || value === "30d" ? value : "7d";
}

export default async function DashboardPage(props: PageProps<"/dashboard">) {
  const params = await props.searchParams;
  const range = parseRange(params.range);
  const materia = typeof params.materia === "string" && params.materia ? params.materia : undefined;
  const status = typeof params.status === "string" && params.status ? params.status : undefined;

  const [commercial, leads, traffic, leadsMiguel] = await Promise.all([
    getCommercialFunnel(range, materia),
    getLeadsTable(range, materia, status),
    getTrafficFunnel(range, materia).catch(() => null),
    getLeadsMiguel(range),
  ]);

  return (
    <div className="min-h-full bg-surface text-ink-900">
      <header className="bg-ink-900 py-4">
        <div className="mx-auto max-w-6xl px-5 sm:px-6 flex items-baseline gap-2 text-white">
          <span className="font-serif text-lg font-semibold tracking-wide">AYLWIN MATTA</span>
          <span className="text-[11px] uppercase tracking-[0.2em] text-white/60">Dashboard de leads</span>
        </div>
      </header>

      <main className="mx-auto max-w-6xl px-5 sm:px-6 py-8 sm:py-10">
        <DateRangeFilter range={range} materia={materia} status={status} />

        <div className="mt-8 grid grid-cols-1 lg:grid-cols-2 gap-6">
          <TrafficFunnel data={traffic} />
          <CommercialFunnel data={commercial} />
        </div>

        {/* Table */}
        <div className="mt-8 overflow-x-auto rounded-xl border border-line bg-white">
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
                  <td className="px-4 py-3 whitespace-nowrap">{lead.materia ?? "Home"}</td>
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
        <p className="mt-3 text-xs text-muted">Mostrando hasta 200 leads más recientes del período.</p>

        <section className="mt-12">
          <h2 className="font-serif text-xl font-semibold">Consultas de miguelaylwin.com</h2>
          <p className="mt-1 mb-4 text-xs text-muted">
            Embudo separado, con sus propios campos de calificación. Ordenadas por prioridad y
            luego por fecha.
          </p>
          <LeadsMiguel leads={leadsMiguel} />
        </section>
      </main>
    </div>
  );
}
