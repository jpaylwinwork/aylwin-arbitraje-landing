import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getEntrada, getEntradas, formatearFecha, estaPublicada } from "@/lib/boletin-miguel";
import { JsonLd, articleSchema } from "@/lib/schema";
import MiguelCierreCta from "@/components/miguel/MiguelCierreCta";
import { SITIO_MIGUEL } from "@/lib/hosts-miguel";

const MIGUEL_AUTHOR = {
  "@type": "Person" as const,
  name: "Miguel Aylwin Fernández",
  url: `${SITIO_MIGUEL}/quien-soy`,
};

export function generateStaticParams() {
  return getEntradas().map((e) => ({ slug: e.slug }));
}

// Solo existen las rutas que generateStaticParams devuelve. Sin esto, una
// entrada aún no publicada se intentaría renderizar a demanda si alguien
// acierta la URL, y el markdown que necesita leer no está garantizado dentro
// del bundle serverless. Con dynamicParams en false devuelve 404 y listo.
export const dynamicParams = false;

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const e = getEntrada(slug);
  if (!e) return {};
  return {
    alternates: { canonical: `/boletin/${slug}` },
    title: e.title,
    description: e.description,
    openGraph: {
      type: "article",
      title: e.title,
      description: e.description,
      publishedTime: e.date || undefined,
      // Si la entrada trae foto propia, esa es la que se ve al compartirla;
      // si no, hereda el retrato definido en el layout.
      ...(e.imagen ? { images: [{ url: e.imagen }] } : {}),
    },
  };
}

export default async function EntradaBoletinPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const entrada = getEntrada(slug);
  if (!entrada || !estaPublicada(entrada)) notFound();

  const schema = articleSchema({
    headline: entrada.title,
    description: entrada.description,
    datePublished: entrada.date,
    slug: `boletin/${entrada.slug}`,
    baseUrl: SITIO_MIGUEL,
    author: MIGUEL_AUTHOR,
  });

  return (
    <>
    <div className="miguel-container miguel-body" style={{ paddingTop: "3rem", paddingBottom: "3rem" }}>
      <JsonLd data={schema} />

      <div className="miguel-page-title">
        <p className="miguel-label">
          Monitor Jurisprudencial · {entrada.categoria}
          {entrada.date ? ` · ${formatearFecha(entrada.date)}` : ""}
        </p>
        <h1 className="miguel-display-title">{entrada.title}</h1>
      </div>

      {entrada.imagen ? (
        <figure className="miguel-boletin-figura">
          <Image
            src={entrada.imagen}
            alt={entrada.imagenAlt ?? ""}
            width={1600}
            height={1068}
            priority
            sizes="(max-width: 760px) 100vw, 720px"
          />
          {entrada.imagenCredito ? <figcaption>{entrada.imagenCredito}</figcaption> : null}
        </figure>
      ) : null}

      <div dangerouslySetInnerHTML={{ __html: entrada.html }} />

      <p className="miguel-boletin-fuente">
        <strong>Fuente:</strong>{" "}
        {entrada.fuenteUrl ? (
          <a href={entrada.fuenteUrl} target="_blank" rel="noopener noreferrer">
            {entrada.fuente}
          </a>
        ) : (
          entrada.fuente
        )}
      </p>

      <p style={{ marginTop: "2.5rem" }}>
        <Link href="/boletin">← Volver al Monitor Jurisprudencial</Link>
      </p>
    </div>
      <MiguelCierreCta />
    </>
  );
}
