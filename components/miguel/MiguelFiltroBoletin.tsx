"use client";

import { useState } from "react";
import Link from "next/link";
import { TEMA_LABEL, TEMAS, type TemaBoletin } from "@/lib/boletin-temas";

// Versión ligera de EntradaBoletin: solo lo que el listado pinta. El tipo
// completo trae `html` con el cuerpo entero de cada entrada, y pasar treinta
// artículos renderizados al cliente para filtrar por una etiqueta sería
// mandar el Monitor completo por la red dos veces.
export type EntradaListada = {
  slug: string;
  title: string;
  description: string;
  date: string;
  fechaLegible: string;
  categoria: string;
  tema?: TemaBoletin;
};

export default function MiguelFiltroBoletin({ entradas }: { entradas: EntradaListada[] }) {
  const [activo, setActivo] = useState<TemaBoletin | "all">("all");

  // Solo se ofrecen los temas que hoy tienen al menos una entrada: un filtro
  // que devuelve una lista vacía es una promesa incumplida en pantalla.
  const disponibles = TEMAS.filter((t) => entradas.some((e) => e.tema === t));
  const visibles = activo === "all" ? entradas : entradas.filter((e) => e.tema === activo);

  return (
    <>
      {disponibles.length > 0 ? (
        <div className="miguel-filtro-temas" role="group" aria-label="Filtrar por materia">
          <button
            type="button"
            className="miguel-filtro-chip"
            aria-pressed={activo === "all"}
            onClick={() => setActivo("all")}
          >
            Todas <span className="miguel-filtro-cuenta">{entradas.length}</span>
          </button>
          {disponibles.map((t) => {
            const n = entradas.filter((e) => e.tema === t).length;
            return (
              <button
                key={t}
                type="button"
                className="miguel-filtro-chip"
                aria-pressed={activo === t}
                onClick={() => setActivo(t)}
              >
                {TEMA_LABEL[t]} <span className="miguel-filtro-cuenta">{n}</span>
              </button>
            );
          })}
        </div>
      ) : null}

      {/* aria-live para que un lector de pantalla anuncie el cambio: al filtrar
          no se navega a ninguna parte y sin esto el cambio ocurre en silencio. */}
      <p className="miguel-filtro-resumen" aria-live="polite">
        {visibles.length === entradas.length
          ? `${entradas.length} publicaciones`
          : `${visibles.length} de ${entradas.length} publicaciones · ${TEMA_LABEL[activo as TemaBoletin]}`}
      </p>

      <ul className="miguel-boletin-lista">
        {visibles.map((e) => (
          <li key={e.slug}>
            <p className="miguel-boletin-meta">
              <span className="miguel-boletin-categoria">{e.categoria}</span>
              {e.tema ? <span>{TEMA_LABEL[e.tema]}</span> : null}
              {e.date ? <time dateTime={e.date}>{e.fechaLegible}</time> : null}
            </p>
            <h2>
              <Link href={`/boletin/${e.slug}`}>{e.title}</Link>
            </h2>
            {e.description ? <p>{e.description}</p> : null}
          </li>
        ))}
      </ul>
    </>
  );
}
