export default function Footer() {
  return (
    <footer className="bg-navy-900 text-white/70">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 py-12 flex flex-col sm:flex-row items-center justify-between gap-6 text-sm">
        <div>
          <p className="font-serif text-lg font-semibold text-white">
            AYLWIN <span className="text-white/60 font-sans text-xs uppercase tracking-[0.2em]">Arbitraje de Construcción</span>
          </p>
          <p className="mt-2 max-w-md leading-relaxed">
            Práctica especializada en resolución de disputas de construcción,
            respaldada por Aylwin Abogados — tradición jurídica desde 1974.
          </p>
        </div>
        <div className="text-center sm:text-right space-y-1">
          <p>Av. Apoquindo 3910, Piso 3, Las Condes, Santiago</p>
          <p>
            <a href="tel:+56222280890" className="hover:text-white transition-colors">
              (+56 2) 2228 0890
            </a>
          </p>
          <p className="text-white/40">
            © {new Date().getFullYear()} Aylwin Abogados
          </p>
        </div>
      </div>
    </footer>
  );
}
