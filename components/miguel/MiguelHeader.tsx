import Link from "next/link";
import { hayBoletin } from "@/lib/boletin-miguel";

// Cabecera con el patrón de aylwin.cl: logotipo en Poppins mayúscula con
// tracking amplio a la izquierda y navegación en versalitas a la derecha.
// Solo la usa el grupo (site) — /consulta va sin navegación por exigencia del
// spec de la landing (cero salidas).
const NAV = [
  { href: "/arbitraje-construccion-chile", label: "Construcción" },
  { href: "/arbitraje-inmobiliario-chile", label: "Inmobiliario" },
  { href: "/estadisticas-arbitraje-chile", label: "Estadísticas" },
  { href: "/como-trabajo", label: "Cómo trabajo" },
  { href: "/quien-soy", label: "Quién soy" },
  { href: "/contacto", label: "Contacto" },
];

export default function MiguelHeader() {
  return (
    <header className="miguel-header">
      <div className="miguel-container miguel-header-inner">
        <Link href="/" className="miguel-logo" aria-label="Miguel Aylwin Fernández — inicio">
          <span className="miguel-logo-nombre">Miguel Aylwin</span>
          <span className="miguel-logo-apellido">Fernández</span>
        </Link>

        <nav className="miguel-nav" aria-label="Principal">
          {NAV.map((item) => (
            <Link key={item.href} href={item.href}>
              {item.label}
            </Link>
          ))}
          {/* El boletín solo entra al menú cuando tiene al menos una entrada
           * publicada: un enlace a una sección vacía resta más de lo que suma. */}
          {hayBoletin() ? <Link href="/boletin">Boletín</Link> : null}
        </nav>
      </div>
    </header>
  );
}
