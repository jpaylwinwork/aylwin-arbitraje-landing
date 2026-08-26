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
const GA4_ID = "G-BWZSM4YQP1";

import { esHostDeMiguel } from "@/lib/hosts-miguel";

export default function MiguelAnalytics() {
  useEffect(() => {
    if (!GA4_ID) return;
    // Doble resguardo: el componente solo se monta bajo /miguel, pero esas
    // rutas también son alcanzables desde el dominio del estudio, y ahí no
    // debe medir esta propiedad.
    if (!esHostDeMiguel(window.location.hostname)) return;

    const w = window as typeof window & {
      dataLayer?: unknown[];
      gtag?: (...args: unknown[]) => void;
    };
    w.dataLayer = w.dataLayer || [];

    // Tiene que empujar el objeto `arguments`, no un arreglo. gtag.js
    // reconoce los comandos por esa forma exacta; con un arreglo normal
    // los descarta sin avisar y el resultado es el peor posible: la
    // etiqueta carga, la consola no muestra ningún error y la propiedad
    // no recibe un solo dato. Es una transcripción literal del snippet
    // oficial de Google, y conviene que siga siéndolo.
    function gtag() {
      // eslint-disable-next-line prefer-rest-params
      w.dataLayer!.push(arguments);
    }
    w.gtag = gtag as (...args: unknown[]) => void;

    w.gtag("js", new Date());
    w.gtag("config", GA4_ID);

    const script = document.createElement("script");
    script.async = true;
    script.src = `https://www.googletagmanager.com/gtag/js?id=${GA4_ID}`;
    document.head.appendChild(script);
  }, []);

  return null;
}
