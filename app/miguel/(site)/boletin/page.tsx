import type { Metadata } from "next";
import Link from "next/link";
import { getEntradas, formatearFecha } from "@/lib/boletin-miguel";

const entradas = getEntradas();

export const metadata: Metadata = {
  title: "Monitor Jurisprudencial",
  description:
    "Jurisprudencia relevante, cambios normativos y publicaciones en arbitraje inmobiliario y de construcción en Chile.",
  // Mientras no haya entradas la página es contenido delgado: no conviene que
  // la indexen. Se vuelve indexable sola en cuanto se publica la primera.
  robots: entradas.length === 0 ? { index: false, follow: false } : undefined,
};

export default function Boletin() {
  return (
    <div className="miguel-container miguel-body" style={{ paddingTop: "3rem", paddingBottom: "3rem" }}>
      <div className="miguel-page-title">
        <p className="miguel-label">Publicaciones</p>
        <h1 className="miguel-display-title">Monitor Jurisprudencial</h1>
      </div>

      <p>
        Jurisprudencia relevante, cambios normativos y publicaciones sobre arbitraje inmobiliario
        y de construcción.
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
