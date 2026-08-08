import type { NextConfig } from "next";

// Cabecera X-Robots-Tag para las landings de campaña, que nunca deben
// indexarse. Refuerza —no reemplaza— el `robots: { index: false }` de la
// Metadata API: el meta tag exige que el rastreador procese el HTML, mientras
// que la cabecera viaja en la respuesta y la respetan también los que no lo
// hacen.
const NOINDEX = [{ key: "X-Robots-Tag", value: "noindex, nofollow" }];

const nextConfig: NextConfig = {
  async headers() {
    return [
      // Ruta interna real: proxy.ts reescribe miguelaylwin.com/consulta a
      // /miguel/consulta, así que hay que cubrir las dos formas del path para
      // no depender del orden en que se aplican middleware y headers.
      { source: "/miguel/consulta/:path*", headers: NOINDEX },
      { source: "/consulta/:path*", headers: NOINDEX },

      // Landings de campaña del estudio, con la misma regla.
      { source: "/arbitraje/:path*", headers: NOINDEX },
      { source: "/reclamo-ilegalidad/:path*", headers: NOINDEX },
    ];
  },
};

export default nextConfig;
