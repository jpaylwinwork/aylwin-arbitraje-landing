import type { MetadataRoute } from "next";
import { headers } from "next/headers";

import { esHostDeMiguel, SITIO_MIGUEL } from "@/lib/hosts-miguel";

export default async function robots(): Promise<MetadataRoute.Robots> {
  const host = ((await headers()).get("host") ?? "").split(":")[0];

  if (esHostDeMiguel(host)) {
    return {
      rules: { userAgent: "*", allow: "/", disallow: ["/consulta", "/consulta/gracias"] },
      sitemap: `${SITIO_MIGUEL}/sitemap.xml`,
    };
  }

  return {
    rules: { userAgent: "*", allow: "/", disallow: ["/dashboard", "/api"] },
    sitemap: "https://aylwin-arbitraje-landing.vercel.app/sitemap.xml",
  };
}
