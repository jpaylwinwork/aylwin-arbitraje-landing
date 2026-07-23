import type { MetadataRoute } from "next";
import { getArticulos } from "@/lib/recursos";

const BASE_URL = "https://aylwin-arbitraje-landing.vercel.app";

export default function sitemap(): MetadataRoute.Sitemap {
  // Campaign landings are noindex on purpose — only truly indexable pages here
  const articulos = getArticulos().map((a) => ({
    url: `${BASE_URL}/recursos/${a.slug}`,
    lastModified: a.date ? new Date(`${a.date}T12:00:00`) : undefined,
  }));

  return [
    { url: BASE_URL },
    { url: `${BASE_URL}/recursos` },
    ...articulos,
  ];
}
