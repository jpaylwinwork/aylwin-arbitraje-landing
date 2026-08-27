import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { esHostDeMiguel } from "@/lib/hosts-miguel";


// Paths that must never be rewritten under the /miguel prefix, even when the
// request arrives on miguelaylwin.com: API routes (miguel-lead lives at its
// real path already), Next internals, and the metadata routes (sitemap/robots
// are made host-aware internally instead of being duplicated per segment).
const PASSTHROUGH_PREFIXES = ["/miguel", "/api", "/_next", "/favicon.ico", "/sitemap.xml", "/robots.txt"];

function isPassthrough(pathname: string) {
  return PASSTHROUGH_PREFIXES.some((p) => pathname === p || pathname.startsWith(`${p}/`) || pathname.startsWith(p));
}

// Dominio real de la visita.
//
// Cuando Cloudflare sirve www.miguelaylwin.cl no puede pasar ese Host a
// Vercel: Vercel enruta por Host y devuelve 404 ante uno que no tiene
// registrado. Así que Cloudflare reescribe Host al dominio de Vercel y manda
// el original en X-Original-Host. Sin leer esa cabecera, una visita al .cl
// llegaría aquí como si fuera del estudio y recibiría el sitio equivocado.
//
// Solo se acepta si el valor es uno de los dominios de Miguel que ya
// conocemos. Es una cabecera que cualquiera puede enviar, y lo único que
// puede conseguir quien la falsifique es ver el sitio de Miguel —que es
// público— desde otra dirección. En particular NO abre el panel: /dashboard
// no está en la lista de rutas exentas, así que con un host de Miguel
// falsificado se reescribe a /miguel/dashboard, que no existe, y termina en
// 404 sin llegar nunca a la comprobación de contraseña.
function dominioDeLaVisita(request: NextRequest): string {
  const declarado = (request.headers.get("x-original-host") ?? "").split(":")[0].toLowerCase();
  if (declarado && esHostDeMiguel(declarado)) return declarado;
  return (request.headers.get("host") ?? "").split(":")[0];
}

export function proxy(request: NextRequest) {
  const host = dominioDeLaVisita(request);
  const { pathname } = request.nextUrl;

  // Host-based routing: miguelaylwin.com transparently serves app/miguel/*
  // without ever exposing "/miguel" in the URL bar.
  if (esHostDeMiguel(host)) {
    if (!isPassthrough(pathname)) {
      const url = request.nextUrl.clone();
      url.pathname = `/miguel${pathname}`;
      return NextResponse.rewrite(url);
    }
    return NextResponse.next();
  }

  // Dashboard Basic Auth — unchanged, existing firm site only.
  if (pathname.startsWith("/dashboard") || pathname.startsWith("/api/dashboard")) {
    const user = process.env.DASHBOARD_USER;
    const pass = process.env.DASHBOARD_PASSWORD;
    const auth = request.headers.get("authorization");
    if (auth?.startsWith("Basic ")) {
      const decoded = Buffer.from(auth.slice(6), "base64").toString();
      const separatorIndex = decoded.indexOf(":");
      const suppliedUser = decoded.slice(0, separatorIndex);
      const suppliedPass = decoded.slice(separatorIndex + 1);
      if (suppliedUser === user && suppliedPass === pass) {
        return NextResponse.next();
      }
    }
    return new NextResponse("Autenticación requerida", {
      status: 401,
      headers: { "WWW-Authenticate": 'Basic realm="Dashboard Aylwin Matta"' },
    });
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/((?!_next/static|_next/image|favicon.ico).*)"],
};
