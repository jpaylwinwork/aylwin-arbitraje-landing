export default function Hero() {
  return (
    <section
      id="inicio"
      className="bg-gradient-to-b from-ink-900 via-ink-800 to-ink-700 text-white"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 py-24 sm:py-32">
        <p className="text-brand-500 text-sm font-bold uppercase tracking-[0.25em] mb-6">
          Respaldados por Aylwin Abogados · Desde 1974
        </p>
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-semibold leading-tight max-w-3xl text-balance">
          Disputas de construcción resueltas con medio siglo de tradición
          jurídica
        </h1>
        <p className="mt-6 max-w-2xl text-lg text-white/80 leading-relaxed">
          Representamos a mandantes, constructoras y proveedores en arbitrajes,
          claims y controversias contractuales de obra. Estrategia jurídica con
          conocimiento real de la industria de la construcción.
        </p>
        <div className="mt-10 flex flex-col sm:flex-row gap-4">
          <a
            href="#contacto"
            className="inline-flex items-center justify-center rounded-md bg-brand-600 px-8 py-4 text-base font-bold text-white hover:bg-brand-500 transition-colors"
          >
            Evaluar mi caso
          </a>
          <a
            href="#servicios"
            className="inline-flex items-center justify-center rounded-md border border-white/30 px-8 py-4 text-base font-bold text-white hover:bg-white/10 transition-colors"
          >
            Conocer servicios
          </a>
        </div>
      </div>
    </section>
  );
}
