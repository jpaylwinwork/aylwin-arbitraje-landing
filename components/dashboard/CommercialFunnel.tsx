import type { CommercialFunnel as CommercialFunnelData } from "@/lib/dashboard";

export default function CommercialFunnel({ data }: { data: CommercialFunnelData }) {
  const maxCount = Math.max(1, ...data.stages.map((s) => s.count));

  return (
    <div className="rounded-xl border border-line bg-white p-6">
      <div className="flex items-baseline justify-between">
        <h2 className="font-serif text-xl font-semibold text-ink-900">Funnel comercial</h2>
        <p className="text-xs text-muted">{data.total} leads en el período</p>
      </div>
      <div className="mt-6 space-y-4">
        {data.stages.map((stage, i) => (
          <div key={stage.status}>
            <div className="flex items-baseline justify-between text-sm">
              <span className="font-bold text-ink-900">{stage.label}</span>
              <span className="text-muted">
                {stage.count} · {stage.pctOfTotal}% del total
                {stage.pctOfPrevious !== null && (
                  <span className="ml-2 text-brand-600 font-bold">{stage.pctOfPrevious}% →</span>
                )}
              </span>
            </div>
            <div className="mt-1.5 h-3 w-full rounded-full bg-brand-100">
              <div
                className="h-3 rounded-full bg-brand-600 transition-all"
                style={{ width: `${Math.max(2, (stage.count / maxCount) * 100)}%` }}
              />
            </div>
            {i < data.stages.length - 1 && (
              <div className="mt-1 flex justify-center text-muted">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-3 w-3" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                </svg>
              </div>
            )}
          </div>
        ))}
      </div>

      <div className="mt-6 rounded-lg bg-surface px-4 py-3 text-sm">
        <span className="font-bold text-ink-700">Descartados:</span>{" "}
        <span className="text-muted">
          {data.descartado.count} ({data.descartado.pctOfTotal}% del total)
        </span>
      </div>
    </div>
  );
}
