const services = [
  {
    title: "Arbitraje de construcción",
    description:
      "Representación en arbitrajes ante el CAM Santiago y tribunales arbitrales ad hoc: controversias de contratos de obra, ingeniería y suministro.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="h-8 w-8" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2m0 0 6.5 3.5M12 5 5.5 8.5M4 21h16M6 21V11m12 10V11M3 8.5h18" />
      </svg>
    ),
  },
  {
    title: "Claims y reclamaciones contractuales",
    description:
      "Preparación y defensa de claims por mayores costos, aumentos de plazo, obras extraordinarias e interferencias durante la ejecución.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="h-8 w-8" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-6 4h6M7 3h7l5 5v13H7a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1Zm7 0v5h5" />
      </svg>
    ),
  },
  {
    title: "Término anticipado y liquidación",
    description:
      "Asesoría estratégica en términos anticipados de contrato, liquidaciones de obra, cobros de boletas de garantía y medidas de resguardo.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="h-8 w-8" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v4m0 4h.01M4.5 19.5h15a1.5 1.5 0 0 0 1.3-2.25l-7.5-13a1.5 1.5 0 0 0-2.6 0l-7.5 13a1.5 1.5 0 0 0 1.3 2.25Z" />
      </svg>
    ),
  },
  {
    title: "Prevención y dispute boards",
    description:
      "Revisión preventiva de contratos de construcción, gestión temprana de controversias, mediación y paneles técnicos de expertos.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="h-8 w-8" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
      </svg>
    ),
  },
];

export default function Services() {
  return (
    <section id="servicios" className="bg-surface">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 py-20 sm:py-24">
        <h2 className="text-3xl sm:text-4xl font-semibold text-ink-900 text-balance">
          Especialistas en controversias de construcción
        </h2>
        <p className="mt-4 max-w-2xl text-muted leading-relaxed">
          Un equipo dedicado exclusivamente a disputas del sector construcción
          e infraestructura, en todas las etapas del conflicto.
        </p>
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 gap-6">
          {services.map((service) => (
            <article
              key={service.title}
              className="rounded-lg border border-line bg-white p-8 hover:shadow-lg hover:-translate-y-0.5 transition-all duration-200"
            >
              <div className="text-brand-600">{service.icon}</div>
              <h3 className="mt-5 text-xl font-semibold text-ink-900">
                {service.title}
              </h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                {service.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
