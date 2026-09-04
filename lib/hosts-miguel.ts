// Dominios que sirven el sitio de Miguel. Estaba duplicado en cinco archivos
// (proxy, robots, sitemap, GtmLoader, MiguelAnalytics, MiguelGtm) y bastaba
// olvidar uno para romper algo en silencio: el enrutamiento por dominio, la
// medición de GA4 o —peor— dejar que el contenedor GTM del estudio se
// disparara en el sitio de Miguel.
//
// miguelaylwin.cl está incluido a propósito aunque hoy no llegue tráfico por
// ahí: el .cl redirige a .com desde Cloudflare. Tenerlo aquí de antemano hace
// que el día que se invierta esa redirección el sitio ya sepa responder, en
// vez de devolver 404 hasta que alguien se acuerde de este archivo.
export const MIGUEL_HOSTS = new Set([
  "miguelaylwin.com",
  "www.miguelaylwin.com",
  "miguelaylwin.cl",
  "www.miguelaylwin.cl",
]);

export function esHostDeMiguel(host: string): boolean {
  return MIGUEL_HOSTS.has(host.split(":")[0].toLowerCase());
}

// Origen público del sitio: el que se declara en canonical, sitemap, robots y
// datos estructurados. Estaba repetido en seis archivos; ahora se cambia aquí
// y en un solo sitio.
//
// LA MIGRACIÓN A .cl ESTÁ DECIDIDA, PERO NO SE ACTIVA AQUÍ TODAVÍA.
//
// Hoy Cloudflare redirige todo el .cl a la PORTADA del .com descartando la
// ruta: www.miguelaylwin.cl/quien-soy termina en www.miguelaylwin.com/, no en
// /quien-soy. Comprobado. Mientras eso siga así, apuntar esta constante al
// .cl haría que cada página declarase como canónica una URL que acaba en la
// portada, y Google puede colapsar el sitio entero a una sola página.
//
// Se cambia a "https://www.miguelaylwin.cl" cuando, y solo cuando:
//   1. Vercel sirva www.miguelaylwin.cl (dominio de producción), y
//   2. la redirección de Cloudflare esté invertida y conserve la ruta.
export const SITIO_MIGUEL = "https://miguelaylwin.com";
