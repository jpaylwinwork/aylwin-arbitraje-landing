export default function Respaldo() {
  return (
    <section id="respaldo" className="bg-navy-900 text-white">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 py-20 sm:py-24 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div>
          <p className="text-gold-500 text-sm font-bold uppercase tracking-[0.25em]">
            Nuestro respaldo
          </p>
          <h2 className="mt-4 text-3xl sm:text-4xl font-semibold leading-tight text-balance">
            La experiencia de Aylwin Abogados, enfocada en la construcción
          </h2>
          <p className="mt-6 text-white/80 leading-relaxed">
            Esta práctica nace del estudio fundado en 1974 — heredero de una de
            las tradiciones jurídicas más reconocidas de Chile — y cuenta con el
            respaldo directo de <strong className="text-white">Miguel Aylwin Oyarzún</strong>,
            abogado del estudio desde 1977 y una de las voces más experimentadas
            del país en resolución de controversias de construcción.
          </p>
          <p className="mt-4 text-white/80 leading-relaxed">
            El estudio ha sido reconocido por Best Lawyers en Construction Law,
            por Legal500 y por Leaders League en resolución de disputas.
          </p>
        </div>
        <div className="rounded-lg border border-white/15 bg-white/5 p-8">
          <h3 className="text-xl font-semibold">Por qué elegirnos</h3>
          <ul className="mt-6 space-y-4 text-sm text-white/80">
            {[
              "Dedicación exclusiva a disputas del sector construcción",
              "Respaldo de un estudio con 50 años de trayectoria",
              "Experiencia ante el CAM Santiago y tribunales arbitrales",
              "Comunicación directa con los socios a cargo del caso",
              "Estrategia jurídica con comprensión técnica de la obra",
            ].map((item) => (
              <li key={item} className="flex gap-3">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-5 w-5 shrink-0 text-gold-500" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                </svg>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
