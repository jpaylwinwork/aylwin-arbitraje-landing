import type { MetadataRoute } from "next";
import { headers } from "next/headers";

const MIGUEL_HOSTS = new Set(["miguelaylwin.com", "www.miguelaylwin.com"]);

export default async function robots(): Promise<MetadataRoute.Robots> {
  const host = ((await headers()).get("host") ?? "").split(":")[0];

  if (MIGUEL_HOSTS.has(host)) {
    return {
      rules: { userAgent: "*", allow: "/", disallow: ["/consulta", "/consulta/gracias"] },
      sitemap: "https://miguelaylwin.com/sitemap.xml",
    };
  }

  return {
    rules: { userAgent: "*", allow: "/", disallow: ["/dashboard", "/api"] },
    sitemap: "https://aylwin-arbitraje-landing.vercel.app/sitemap.xml",
  };
}
