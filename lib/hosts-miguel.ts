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
