"use client";

import { useEffect } from "react";

// Contenedor de Google Tag Manager de miguelaylwin.com, distinto del del
// estudio (GTM-TCSWRPF7, ver components/GtmLoader.tsx). Cada dominio carga
// solo el suyo: mezclarlos inutilizaría las dos mediciones.
//
// IMPORTANTE — no agregar una etiqueta de configuración de GA4 dentro de
// este contenedor. GA4 (G-BWZSM4YQP1) ya se carga directamente en
// components/miguel/MiguelAnalytics.tsx. Si el contenedor también lo
// cargara, cada visita se contaría dos veces y los datos quedarían
// inservibles. Este contenedor existe para las etiquetas de conversión de
// Google Ads, que se administran sin tocar código.
const GTM_ID = "GTM-WBBB8VSD";

import { esHostDeMiguel } from "@/lib/hosts-miguel";

// Se carga en cliente y no como <script> en el <head> del layout por la misma
// razón documentada en GtmLoader: leer el Host en un Server Component obliga a
// renderizar dinámicamente todo el árbol de rutas, y perderíamos la generación
// estática de todo el sitio solo para condicionar una etiqueta.
export default function MiguelGtm() {
  useEffect(() => {
    if (!GTM_ID) return;
    if (!esHostDeMiguel(window.location.hostname)) return;

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
