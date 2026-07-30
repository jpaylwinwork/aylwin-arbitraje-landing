import type { MetadataRoute } from "next";
import { headers } from "next/headers";
import { getArticulos } from "@/lib/recursos";
import { getSateliteSlugs } from "@/lib/satelites-miguel";

const FIRM_BASE_URL = "https://aylwin-arbitraje-landing.vercel.app";
const MIGUEL_BASE_URL = "https://miguelaylwin.com";
const MIGUEL_HOSTS = new Set(["miguelaylwin.com", "www.miguelaylwin.com"]);

const MIGUEL_STATIC_PAGES = [
  "",
  "/estadisticas-arbitraje-chile",
  "/preguntas-frecuentes",
  "/arbitraje-inmobiliario-chile",
  "/arbitraje-construccion-chile",
  "/como-trabajo",
  "/quien-soy",
  "/contacto",
];

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const host = (await headers()).get("host") ?? "";

  if (MIGUEL_HOSTS.has(host.split(":")[0])) {
    const satelites = getSateliteSlugs().map((slug) => ({ url: `${MIGUEL_BASE_URL}/${slug}` }));
    return [...MIGUEL_STATIC_PAGES.map((path) => ({ url: `${MIGUEL_BASE_URL}${path}` })), ...satelites];
  }

  // Campaign landings are noindex on purpose — only truly indexable pages here
  const articulos = getArticulos().map((a) => ({
    url: `${FIRM_BASE_URL}/recursos/${a.slug}`,
    lastModified: a.date ? new Date(`${a.date}T12:00:00`) : undefined,
  }));

  return [
    { url: FIRM_BASE_URL },
    { url: `${FIRM_BASE_URL}/recursos` },
    ...articulos,
  ];
}
