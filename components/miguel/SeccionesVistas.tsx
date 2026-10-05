"use client";

import { useEffect } from "react";
import { trackMiguel } from "@/lib/analytics-miguel";

// Mide hasta dónde se lee una página larga: envía un evento a GA4 la primera
// vez que cada titular marcado con `data-seccion` entra en pantalla.
//
// Existe para /consulta. Antes de recortar texto de la landing hay que saber
// en qué sección se va la gente, y Analytics por sí solo solo informa si se
// llegó al 90% de la página. Con tráfico de Ads, el embudo de eventos
// "seccion_vista" dirá dónde cae la lectura.
//
// Un evento por sección y por visita, no por cada pasada del scroll. El margen
// inferior del -30% exige que el titular suba a la parte alta de la pantalla:
// así cuenta como leída una sección que se empezó a leer, no una que asomó
// por el borde inferior al pasar rápido.
export default function SeccionesVistas() {
  useEffect(() => {
    const vistas = new Set<string>();
    const observador = new IntersectionObserver(
      (entradas) => {
        for (const entrada of entradas) {
          if (!entrada.isIntersecting) continue;
          const seccion = (entrada.target as HTMLElement).dataset.seccion;
          if (!seccion || vistas.has(seccion)) continue;
          vistas.add(seccion);
          trackMiguel("seccion_vista", { seccion });
          observador.unobserve(entrada.target);
        }
      },
      { rootMargin: "0px 0px -30% 0px" },
    );
    document.querySelectorAll("[data-seccion]").forEach((el) => observador.observe(el));
    return () => observador.disconnect();
  }, []);

  return null;
}
