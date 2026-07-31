import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getEntrada, getEntradas, formatearFecha } from "@/lib/boletin-miguel";
import { JsonLd, articleSchema } from "@/lib/schema";
import MiguelCierreCta from "@/components/miguel/MiguelCierreCta";

const MIGUEL_AUTHOR = {
  "@type": "Person" as const,
  name: "Miguel Aylwin Fernández",
  url: "https://miguelaylwin.com/quien-soy",
};

export function generateStaticParams() {
  return getEntradas().map((e) => ({ slug: e.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const e = getEntrada(slug);
  if (!e) return {};
  return { title: e.title, description: e.description };
}

export default async function EntradaBoletinPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const entrada = getEntrada(slug);
  if (!entrada || entrada.draft) notFound();

  const schema = articleSchema({
    headline: entrada.title,
    description: entrada.description,
    datePublished: entrada.date,
    slug: `boletin/${entrada.slug}`,
    baseUrl: "https://miguelaylwin.com",
    author: MIGUEL_AUTHOR,
  });

  return (
    <>
    <div className="miguel-container miguel-body" style={{ paddingTop: "3rem", paddingBottom: "3rem" }}>
      <JsonLd data={schema} />

      <div className="miguel-page-title">
        <p className="miguel-label">
          Boletín · {entrada.categoria}
          {entrada.date ? ` · ${formatearFecha(entrada.date)}` : ""}
        </p>
        <h1 className="miguel-display-title">{entrada.title}</h1>
      </div>

      <div dangerouslySetInnerHTML={{ __html: entrada.html }} />

      <p className="miguel-boletin-fuente">
        <strong>Fuente:</strong> {entrada.fuente}
      </p>

      <p style={{ marginTop: "2.5rem" }}>
        <Link href="/boletin">← Volver al boletín</Link>
      </p>
    </div>
      <MiguelCierreCta />
    </>
  );
}
