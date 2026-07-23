import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getArticulo, getSlugs, MATERIA_TO_LANDING } from "@/lib/recursos";
import { articleSchema, JsonLd } from "@/lib/schema";

export function generateStaticParams() {
  return getSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata(props: PageProps<"/recursos/[slug]">): Promise<Metadata> {
  const { slug } = await props.params;
  const articulo = getArticulo(slug);
  if (!articulo) return {};
  return {
    title: `${articulo.title} | Aylwin Matta Abogados`,
    description: articulo.description,
    ...(articulo.draft ? { robots: { index: false, follow: false } } : {}),
  };
}

function fmtFecha(iso: string) {
  if (!iso) return "";
  return new Date(`${iso}T12:00:00`).toLocaleDateString("es-CL", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

export default async function ArticuloPage(props: PageProps<"/recursos/[slug]">) {
  const { slug } = await props.params;
  const articulo = getArticulo(slug);
  if (!articulo) notFound();

  const landing = MATERIA_TO_LANDING[articulo.materia];

  return (
    <div className="min-h-full bg-white text-ink-900">
      <JsonLd
        data={articleSchema({
          headline: articulo.title,
          description: articulo.description,
          datePublished: articulo.date,
          slug: articulo.slug,
        })}
      />
      <header className="bg-ink-900 py-4">
        <div className="mx-auto max-w-3xl px-5 sm:px-6 flex items-baseline gap-2 text-white">
          <Link href="/" className="font-serif text-lg font-semibold tracking-wide">
            AYLWIN MATTA
          </Link>
          <span className="text-[11px] uppercase tracking-[0.2em] text-white/60">Recursos</span>
        </div>
      </header>

      <main className="mx-auto max-w-3xl px-5 sm:px-6 py-12 sm:py-16">
        {articulo.draft && (
          <p className="mb-6 rounded-lg border border-brand-500/40 bg-brand-100/50 px-4 py-3 text-xs font-bold text-ink-800">
            BORRADOR — pendiente de revisión. No compartir.
          </p>
        )}
        <p className="text-xs font-bold uppercase tracking-wide text-brand-600">{articulo.materia}</p>
        <h1 className="mt-2 font-serif text-3xl sm:text-4xl font-semibold leading-tight text-balance">
          {articulo.title}
        </h1>
        <p className="mt-3 text-sm text-muted">{fmtFecha(articulo.date)} · Aylwin Matta Abogados</p>

        <div
          className="article-body mt-10"
          dangerouslySetInnerHTML={{ __html: articulo.html }}
        />

        {landing && (
          <div className="mt-12 rounded-xl border border-line bg-surface p-6">
            <h2 className="font-serif text-xl font-semibold">¿Enfrenta una situación como esta?</h2>
            <p className="mt-2 text-sm text-muted leading-relaxed">
              Evaluamos su caso en forma confidencial. La primera reunión de diagnóstico no tiene costo.
            </p>
            <Link
              href={landing}
              className="mt-4 inline-flex rounded-lg bg-brand-600 px-6 py-3 text-sm font-bold text-white hover:bg-brand-500 transition-colors"
            >
              Evaluar mi caso
            </Link>
          </div>
        )}

        <p className="mt-10 border-t border-line pt-6 text-xs text-muted leading-relaxed">
          Este artículo contiene información general y no constituye asesoría legal para un caso
          concreto. Cada situación requiere un análisis particular.
        </p>

        <p className="mt-6">
          <Link href="/recursos" className="text-sm font-bold text-brand-600 hover:text-brand-500">
            ← Todos los recursos
          </Link>
        </p>
      </main>

      <footer className="border-t border-line py-8 text-center text-xs text-muted">
        Aylwin Matta Abogados · Av. Apoquindo 3910, Piso 3, Las Condes, Santiago · contacto@aylwin.cl
      </footer>
    </div>
  );
}
