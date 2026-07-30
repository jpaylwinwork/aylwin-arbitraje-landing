import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

const MIGUEL_HOSTS = new Set(["miguelaylwin.com", "www.miguelaylwin.com"]);

// Paths that must never be rewritten under the /miguel prefix, even when the
// request arrives on miguelaylwin.com: API routes (miguel-lead lives at its
// real path already), Next internals, and the metadata routes (sitemap/robots
// are made host-aware internally instead of being duplicated per segment).
const PASSTHROUGH_PREFIXES = ["/miguel", "/api", "/_next", "/favicon.ico", "/sitemap.xml", "/robots.txt"];

function isPassthrough(pathname: string) {
  return PASSTHROUGH_PREFIXES.some((p) => pathname === p || pathname.startsWith(`${p}/`) || pathname.startsWith(p));
}

export function proxy(request: NextRequest) {
  const host = (request.headers.get("host") ?? "").split(":")[0];
  const { pathname } = request.nextUrl;

  // Host-based routing: miguelaylwin.com transparently serves app/miguel/*
  // without ever exposing "/miguel" in the URL bar.
  if (MIGUEL_HOSTS.has(host)) {
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
