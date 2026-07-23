import Link from "next/link";

const services = [
  {
    title: "Arbitraje comercial",
    description:
      "Representación de empresas en arbitrajes comerciales en Santiago: disputas entre socios, incumplimiento de contratos y controversias con cláusula arbitral, ante el CAM Santiago y tribunales arbitrales ad hoc.",
    href: "/arbitraje",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="h-8 w-8" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2m0 0 6.5 3.5M12 5 5.5 8.5M4 21h16M6 21V11m12 10V11M3 8.5h18" />
      </svg>
    ),
  },
  {
    title: "Reclamo de ilegalidad",
    description:
      "Impugnación de decretos alcaldicios, resoluciones municipales y otros actos administrativos ilegales que afectan a su empresa. Los plazos de reclamo son breves — evaluamos su caso de inmediato.",
    href: "/reclamo-ilegalidad",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="h-8 w-8" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75m-3-7.036A11.96 11.96 0 0 1 3.6 6c-.3 1-.6 2.3-.6 3.6 0 5.6 3.8 10.3 9 11.6 5.2-1.3 9-6 9-11.6 0-1.3-.3-2.6-.6-3.6a11.96 11.96 0 0 1-8.4-3.286Z" />
      </svg>
    ),
  },
];

export default function Services() {
  return (
    <section id="servicios" className="bg-surface">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 py-20 sm:py-24">
        <h2 className="text-3xl sm:text-4xl font-semibold text-ink-900 text-balance">
          Nuestras áreas de práctica
        </h2>
        <p className="mt-4 max-w-2xl text-muted leading-relaxed">
          Dos materias, atendidas directamente por los socios del estudio, con
          el respaldo institucional de Aylwin Abogados desde 1974.
        </p>
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 gap-6">
          {services.map((service) => (
            <Link
              key={service.title}
              href={service.href}
              className="block rounded-lg border border-line bg-white p-8 hover:shadow-lg hover:-translate-y-0.5 transition-all duration-200 focus-visible:outline-2 focus-visible:outline-brand-600"
            >
              <div className="text-brand-600">{service.icon}</div>
              <h3 className="mt-5 text-xl font-semibold text-ink-900">
                {service.title}
              </h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                {service.description}
              </p>
              <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-bold text-brand-600">
                Ver más
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-4 w-4" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                </svg>
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
