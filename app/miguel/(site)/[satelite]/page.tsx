import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getSatelite, getSateliteSlugs } from "@/lib/satelites-miguel";
import { JsonLd, articleSchema } from "@/lib/schema";

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
  return { title: data.title, description: data.metaDescription };
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
    <div className="miguel-container miguel-body" style={{ paddingTop: "3rem", paddingBottom: "3rem" }}>
      <JsonLd data={schema} />
      <div className="miguel-page-title">
        <p className="miguel-label">
          {data.pilares.includes("construccion") ? "Construcción" : "Inmobiliario"}
        </p>
        <h1 className="miguel-display-title">{data.title}</h1>
      </div>
      <div dangerouslySetInnerHTML={{ __html: data.html }} />
    </div>
  );
}
