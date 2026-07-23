export default function Header() {
  return (
    <header className="sticky top-0 z-50 bg-ink-900/95 backdrop-blur border-b border-white/10">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 flex items-center justify-between h-16">
        <a href="#inicio" className="flex items-baseline gap-2 text-white">
          <span className="font-serif text-xl font-semibold tracking-wide">
            AYLWIN
          </span>
          <span className="hidden sm:inline text-xs uppercase tracking-[0.2em] text-white/70">
            Arbitraje y Derecho Administrativo
          </span>
        </a>
        <nav aria-label="Navegación principal" className="hidden md:flex items-center gap-8 text-sm text-white/80">
          <a href="#servicios" className="hover:text-white transition-colors">
            Servicios
          </a>
          <a href="#respaldo" className="hover:text-white transition-colors">
            Experiencia
          </a>
          <a href="#equipo" className="hover:text-white transition-colors">
            Equipo
          </a>
          <a href="#faq" className="hover:text-white transition-colors">
            Preguntas frecuentes
          </a>
        </nav>
        <a
          href="#contacto"
          className="rounded-md bg-brand-600 px-4 py-2.5 text-sm font-bold text-white hover:bg-brand-500 transition-colors"
        >
          Agendar consulta
        </a>
      </div>
    </header>
  );
}
