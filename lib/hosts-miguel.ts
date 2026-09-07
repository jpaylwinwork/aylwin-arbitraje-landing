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
// Migrado al .cl el 06-09-2026, una vez comprobado que www.miguelaylwin.cl
// sirve el sitio desde Vercel con certificado válido y que el apex redirige
// al www conservando la ruta. Antes de eso apuntaba al .com: mientras
// Cloudflare mandaba todo el .cl a la portada, declarar el .cl como canónico
// habría hecho que cada página señalara como preferida una URL que acababa
// en la portada.
export const SITIO_MIGUEL = "https://www.miguelaylwin.cl";

// Nombre del sitio tal como se muestra a una persona: en el remitente de los
// avisos de consultas y en el panel. Va aparte de SITIO_MIGUEL porque ahí es
// texto, no URL, y quedaba con el dominio antiguo tras la migración.
export const SITIO_MIGUEL_NOMBRE = "miguelaylwin.cl";
