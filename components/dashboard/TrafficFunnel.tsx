import type { TrafficFunnel as TrafficFunnelData } from "@/lib/ga4";

const CHANNEL_LABELS: Record<string, string> = {
  formulario: "Formulario",
  whatsapp: "WhatsApp",
};

function pct(part: number, whole: number) {
  return whole > 0 ? Math.round((part / whole) * 100) : 0;
}

export default function TrafficFunnel({ data }: { data: TrafficFunnelData | null }) {
  if (!data) {
    return (
      <div className="rounded-xl border border-line bg-white p-6">
        <h2 className="font-serif text-xl font-semibold text-ink-900">Funnel de tráfico</h2>
        <p className="mt-3 text-sm text-muted">
          Tráfico: pendiente de configurar GA4. Una vez enlazada la API de Google Analytics
          (GA4_SERVICE_ACCOUNT_KEY_BASE64 + GA4_PROPERTY_ID en Vercel), este panel mostrará
          sesiones, scroll, inicio de formulario y leads generados.
        </p>
      </div>
    );
  }

  const steps = [
    { label: "Sesiones", count: data.sessions },
    { label: "Hicieron scroll", count: data.scroll },
    { label: "Iniciaron formulario", count: data.formStart },
    { label: "Generaron lead", count: data.generateLead },
  ];
  const maxCount = Math.max(1, ...steps.map((s) => s.count));

  return (
    <div className="rounded-xl border border-line bg-white p-6">
      <div className="flex items-baseline justify-between">
        <h2 className="font-serif text-xl font-semibold text-ink-900">Funnel de tráfico</h2>
        <p className="text-xs text-muted">Datos de GA4 — &quot;hoy&quot; es provisional</p>
      </div>

      <div className="mt-6 space-y-4">
        {steps.map((step, i) => (
          <div key={step.label}>
            <div className="flex items-baseline justify-between text-sm">
              <span className="font-bold text-ink-900">{step.label}</span>
              <span className="text-muted">
                {step.count} · {pct(step.count, data.sessions)}% de sesiones
                {i > 0 && (
                  <span className="ml-2 text-brand-600 font-bold">
                    {pct(step.count, steps[i - 1].count)}% →
                  </span>
                )}
              </span>
            </div>
            <div className="mt-1.5 h-3 w-full rounded-full bg-brand-100">
              <div
                className="h-3 rounded-full bg-brand-600 transition-all"
                style={{ width: `${Math.max(2, (step.count / maxCount) * 100)}%` }}
              />
            </div>
          </div>
        ))}
      </div>

      {data.generateLeadByChannel.length > 0 && (
        <div className="mt-6">
          <p className="text-xs font-bold uppercase tracking-wide text-muted">Leads generados por canal</p>
          <table className="mt-2 w-full text-sm">
            <tbody>
              {data.generateLeadByChannel.map((c) => (
                <tr key={c.channel} className="border-t border-line">
                  <td className="py-1.5">{CHANNEL_LABELS[c.channel] ?? c.channel}</td>
                  <td className="py-1.5 text-right font-bold">{c.count}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      {data.byMateria.length > 0 && (
        <div className="mt-6">
          <p className="text-xs font-bold uppercase tracking-wide text-muted">Por materia</p>
          <table className="mt-2 w-full text-sm">
            <thead>
              <tr className="text-xs text-muted">
                <th className="text-left font-normal py-1">Materia</th>
                <th className="text-right font-normal py-1">Sesiones</th>
                <th className="text-right font-normal py-1">Leads</th>
              </tr>
            </thead>
            <tbody>
              {data.byMateria.map((m) => (
                <tr key={m.materia} className="border-t border-line">
                  <td className="py-1.5">{m.materia}</td>
                  <td className="py-1.5 text-right">{m.sessions}</td>
                  <td className="py-1.5 text-right font-bold">{m.generateLead}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}
