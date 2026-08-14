"use client";

import { useEffect } from "react";

// Analítica propia de miguelaylwin.com, separada de la del estudio.
//
// El contenedor GTM de Aylwin Matta está excluido de este dominio a propósito
// (ver components/GtmLoader.tsx): mezclar ambos tráficos inutilizaría las dos
// propiedades. Este sitio mide con su propia propiedad de GA4.
//
// El ID de medición vive en el código y no en una variable de entorno porque
// no es un secreto: viaja en el HTML de cualquier sitio con Analytics. Además
// así la activación no depende del acceso al panel de Vercel.
//
// Con GA4_ID vacío la función no hace nada, de modo que el componente puede
// desplegarse antes de que exista la propiedad.
const GA4_ID = "";

const MIGUEL_HOSTS = new Set(["miguelaylwin.com", "www.miguelaylwin.com"]);

export default function MiguelAnalytics() {
  useEffect(() => {
    if (!GA4_ID) return;
    // Doble resguardo: el componente solo se monta bajo /miguel, pero esas
    // rutas también son alcanzables desde el dominio del estudio, y ahí no
    // debe medir esta propiedad.
    if (!MIGUEL_HOSTS.has(window.location.hostname)) return;

    const w = window as typeof window & {
      dataLayer?: unknown[];
      gtag?: (...args: unknown[]) => void;
    };
    w.dataLayer = w.dataLayer || [];
    w.gtag = function gtag(...args: unknown[]) {
      w.dataLayer!.push(args);
    };
    w.gtag("js", new Date());
    w.gtag("config", GA4_ID);

    const script = document.createElement("script");
    script.async = true;
    script.src = `https://www.googletagmanager.com/gtag/js?id=${GA4_ID}`;
    document.head.appendChild(script);
  }, []);

  return null;
}
