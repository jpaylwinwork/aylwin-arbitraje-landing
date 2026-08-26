import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getSatelite, getSateliteSlugs } from "@/lib/satelites-miguel";
import { JsonLd, articleSchema } from "@/lib/schema";
import MiguelCierreCta from "@/components/miguel/MiguelCierreCta";

const MIGUEL_AUTHOR = {
  "@type": "Person" as const,
  name: "Miguel Aylwin Fernández",
  url: "https://miguelaylwin.com/quien-soy",
};

export function generateStaticParams() {
  return getSateliteSlugs().map((satelite) => ({ satelite }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ satelite: string }>;
}): Promise<Metadata> {
  const { satelite } = await params;
  const data = getSatelite(satelite);
  if (!data) return {};
  return {
    alternates: { canonical: `/${satelite}` },
    title: data.title,
    description: data.metaDescription,
  };
}

export default async function SatelitePage({
  params,
}: {
  params: Promise<{ satelite: string }>;
}) {
  const { satelite } = await params;
  const data = getSatelite(satelite);
  if (!data) notFound();

  const schema = articleSchema({
    headline: data.title,
    description: data.metaDescription,
    datePublished: "2026-01-01",
    slug: data.slug,
    baseUrl: "https://miguelaylwin.com",
    author: MIGUEL_AUTHOR,
  });

  return (
    <>
    <div className="miguel-container miguel-body" style={{ paddingTop: "3rem", paddingBottom: "3rem" }}>
      <JsonLd data={schema} />
      <div className="miguel-page-title">
        <p className="miguel-label">
          {data.pilares.includes("construccion") ? "Construcción" : "Inmobiliario"}
        </p>
        <h1 className="miguel-display-title">{data.title}</h1>
      </div>
      <div dangerouslySetInnerHTML={{ __html: data.html }} />

      {/* Enlace de vuelta al pilar. La nota de arquitectura de 02_WEB_SEO.md lo
        * exige ("cada satélite enlaza a su pilar"), y faltaba en los doce: el
        * enlazado era de ida y no de vuelta. Se genera del campo `pilares`, así
        * que los cuatro satélites transversales enlazan a los dos pilares y los
        * que se añadan en el futuro lo heredan sin tener que acordarse. */}
      <p className="miguel-volver-pilar">
        {data.pilares.length > 1 ? "Este tema aparece en los dos pilares: " : "Forma parte de: "}
        {data.pilares.map((p, i) => (
          <span key={p}>
            {i > 0 ? " · " : ""}
            <Link href={p === "construccion" ? "/arbitraje-construccion-chile" : "/arbitraje-inmobiliario-chile"}>
              {p === "construccion"
                ? "Arbitraje en contratos de construcción"
                : "Arbitraje en conflictos inmobiliarios"}
            </Link>
          </span>
        ))}
      </p>
    </div>
      <MiguelCierreCta />
    </>
  );
}
