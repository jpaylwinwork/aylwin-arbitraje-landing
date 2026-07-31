"use client";

import { useEffect } from "react";

const GTM_ID = "GTM-TCSWRPF7";
const MIGUEL_HOSTS = new Set(["miguelaylwin.com", "www.miguelaylwin.com"]);

// Client-side host check (not next/headers) deliberately: reading the
// request Host in a Server Component forces the entire route tree to
// render dynamically, which would kill static generation site-wide just to
// gate one script tag. This runs after hydration instead, so every page
// stays statically prerendered.
export default function GtmLoader() {
  useEffect(() => {
    if (MIGUEL_HOSTS.has(window.location.hostname)) return;
    const w = window as typeof window & { dataLayer?: Record<string, unknown>[] };
    w.dataLayer = w.dataLayer || [];
    w.dataLayer.push({ "gtm.start": Date.now(), event: "gtm.js" });
    const script = document.createElement("script");
    script.async = true;
    script.src = `https://www.googletagmanager.com/gtm.js?id=${GTM_ID}`;
    document.head.appendChild(script);
  }, []);

  return null;
}
