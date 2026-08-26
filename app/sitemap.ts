import type { MetadataRoute } from "next";
import { headers } from "next/headers";
import { getArticulos } from "@/lib/recursos";
import { getSateliteSlugs } from "@/lib/satelites-miguel";
import { getEntradas } from "@/lib/boletin-miguel";

const FIRM_BASE_URL = "https://aylwin-arbitraje-landing.vercel.app";

import { esHostDeMiguel, SITIO_MIGUEL as MIGUEL_BASE_URL } from "@/lib/hosts-miguel";

const MIGUEL_STATIC_PAGES = [
  "",
  "/estadisticas-arbitraje-chile",
  "/preguntas-frecuentes",
  "/arbitraje-inmobiliario-chile",
  "/arbitraje-construccion-chile",
  "/como-trabajo",
  "/quien-soy",
  "/contacto",
  "/politica-privacidad",
];

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const host = (await headers()).get("host") ?? "";

  if (esHostDeMiguel(host)) {
    const satelites = getSateliteSlugs().map((slug) => ({ url: `${MIGUEL_BASE_URL}/${slug}` }));
    // El boletín entra al sitemap solo cuando tiene entradas: mientras esté
    // vacío la portada va noindex y no debe anunciarse.
    const entradas = getEntradas();
    const boletin = entradas.length
      ? [
          { url: `${MIGUEL_BASE_URL}/boletin` },
          ...entradas.map((e) => ({
            url: `${MIGUEL_BASE_URL}/boletin/${e.slug}`,
            lastModified: e.date ? new Date(`${e.date}T12:00:00`) : undefined,
          })),
        ]
      : [];
    return [
      ...MIGUEL_STATIC_PAGES.map((path) => ({ url: `${MIGUEL_BASE_URL}${path}` })),
      ...satelites,
      ...boletin,
    ];
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
