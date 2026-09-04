// Dominios que sirven el sitio de Miguel. Estaba duplicado en cinco archivos
// (proxy, robots, sitemap, GtmLoader, MiguelAnalytics, MiguelGtm) y bastaba
// olvidar uno para romper algo en silencio: el enrutamiento por dominio, la
// medición de GA4 o —peor— dejar que el contenedor GTM del estudio se
// disparara en el sitio de Miguel.
//
// Los cuatro dominios siguen aquí aunque el canónico sea el .cl: el .com
// redirige en Vercel, pero cualquier visita que llegue con ese Host (cachés,
// enlaces viejos, la redirección apagada por error) debe seguir recibiendo el
// sitio de Miguel y no el del estudio.
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
// El dominio canónico es el .cl desde que Vercel sirve www.miguelaylwin.cl
// como dominio de producción y el .com redirige 301 hacia él conservando la
// ruta. Si alguna vez hay que revertir la migración, basta volver a poner
// aquí "https://miguelaylwin.com" — pero solo DESPUÉS de revertir también la
// configuración de dominios en Vercel, o cada página declararía como
// canónica una URL que redirige y Google puede colapsar el sitio entero a
// una sola página.
export const SITIO_MIGUEL = "https://www.miguelaylwin.cl";
