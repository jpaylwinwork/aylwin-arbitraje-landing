import type { Metadata } from "next";
import Link from "next/link";
import { getEntradas, formatearFecha } from "@/lib/boletin-miguel";

const entradas = getEntradas();

export const metadata: Metadata = {
  title: "Boletín de arbitraje — novedades legislativas y jurisprudenciales",
  description:
    "Novedades en arbitraje inmobiliario y de construcción en Chile: cambios normativos, jurisprudencia relevante y datos del CAM Santiago.",
  // Mientras no haya entradas la página es contenido delgado: no conviene que
  // la indexen. Se vuelve indexable sola en cuanto se publica la primera.
  robots: entradas.length === 0 ? { index: false, follow: false } : undefined,
};

export default function Boletin() {
  return (
    <div className="miguel-container miguel-body" style={{ paddingTop: "3rem", paddingBottom: "3rem" }}>
      <div className="miguel-page-title">
        <p className="miguel-label">Boletín</p>
        <h1 className="miguel-display-title">Novedades en arbitraje</h1>
      </div>

      <p>
        Cambios normativos, jurisprudencia relevante y datos del arbitraje chileno, con la fuente
        siempre a la vista para que puedas ir al documento original.
      </p>

      {entradas.length === 0 ? (
        <p style={{ color: "var(--miguel-muted)" }}>
          La primera entrada está en preparación.
        </p>
      ) : (
        <ul className="miguel-boletin-lista">
          {entradas.map((e) => (
            <li key={e.slug}>
              <p className="miguel-boletin-meta">
                <span className="miguel-boletin-categoria">{e.categoria}</span>
                {e.date ? <time dateTime={e.date}>{formatearFecha(e.date)}</time> : null}
              </p>
              <h2>
                <Link href={`/boletin/${e.slug}`}>{e.title}</Link>
              </h2>
              {e.description ? <p>{e.description}</p> : null}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
