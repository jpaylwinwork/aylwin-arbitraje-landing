import type { Metadata } from "next";
import Link from "next/link";
import { getArticulos } from "@/lib/recursos";

export const metadata: Metadata = {
  title: "Recursos | Aylwin Matta Abogados",
  description:
    "Guías y análisis sobre arbitraje comercial, reclamos de ilegalidad y resolución de controversias en Chile, escritos por Aylwin Matta Abogados.",
};

function fmtFecha(iso: string) {
  if (!iso) return "";
  return new Date(`${iso}T12:00:00`).toLocaleDateString("es-CL", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

export default function RecursosIndex() {
  const articulos = getArticulos();

  return (
    <div className="min-h-full bg-surface text-ink-900">
      <header className="bg-ink-900 py-4">
        <div className="mx-auto max-w-3xl px-5 sm:px-6 flex items-baseline gap-2 text-white">
          <Link href="/" className="font-serif text-lg font-semibold tracking-wide">
            AYLWIN MATTA
          </Link>
          <span className="text-[11px] uppercase tracking-[0.2em] text-white/60">Recursos</span>
        </div>
      </header>

      <main className="mx-auto max-w-3xl px-5 sm:px-6 py-12 sm:py-16">
        <p className="font-sans text-sm font-semibold text-brand-600 tracking-wide">Recursos</p>
        <h1 className="mt-1 font-serif text-3xl sm:text-4xl font-semibold text-ink-900 text-balance">
          Guías sobre resolución de controversias
        </h1>
        <p className="mt-4 max-w-2xl text-muted leading-relaxed">
          Análisis y guías prácticas sobre arbitraje comercial y reclamos de ilegalidad en Chile.
        </p>

        <div className="mt-10 space-y-5">
          {articulos.length === 0 && <p className="text-muted">Pronto publicaremos el primer artículo.</p>}
          {articulos.map((a) => (
            <article key={a.slug} className="rounded-xl border border-line bg-white p-6 hover:shadow-md transition-shadow">
              <p className="text-xs font-bold uppercase tracking-wide text-brand-600">{a.materia}</p>
              <h2 className="mt-1 font-serif text-xl sm:text-2xl font-semibold">
                <Link href={`/recursos/${a.slug}`} className="hover:text-ink-600 transition-colors">
                  {a.title}
                </Link>
              </h2>
              <p className="mt-2 text-sm text-muted leading-relaxed">{a.description}</p>
              <p className="mt-3 text-xs text-muted">{fmtFecha(a.date)}</p>
            </article>
          ))}
        </div>
      </main>

      <footer className="border-t border-line py-8 text-center text-xs text-muted">
        Aylwin Matta Abogados · Av. Apoquindo 3910, Piso 3, Las Condes, Santiago · contacto@aylwin.cl
      </footer>
    </div>
  );
}
