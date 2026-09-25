import type { Metadata } from "next";
import { getEntradas, formatearFecha } from "@/lib/boletin-miguel";
import MiguelFiltroBoletin, { type EntradaListada } from "@/components/miguel/MiguelFiltroBoletin";

const entradas = getEntradas();

// La fecha se formatea acá, en el servidor: formatearFecha vive en el módulo
// que lee disco y no puede cruzar al cliente. Se manda ya legible junto con
// la ISO, que el <time> necesita para dateTime.
const listado: EntradaListada[] = entradas.map((e) => ({
  slug: e.slug,
  title: e.title,
  description: e.description,
  date: e.date,
  fechaLegible: e.date ? formatearFecha(e.date) : "",
  categoria: e.categoria,
  tema: e.tema,
}));

export const metadata: Metadata = {
  alternates: { canonical: "/boletin" },
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

      {listado.length === 0 ? (
        <p style={{ color: "var(--miguel-muted)" }}>
          La primera entrada está en preparación.
        </p>
      ) : (
        <MiguelFiltroBoletin entradas={listado} />
      )}
    </div>
  );
}
