import Link from "next/link";

// Bloque de continuidad al final de una nota.
//
// Las entradas del Monitor nacieron sin un solo enlace interno en el cuerpo:
// diecinueve páginas que no repartían autoridad al resto del sitio, y un
// lector que terminaba de leer sobre prescripción de vicios no tenía adónde ir
// salvo volver al listado.
//
// Sirve además para separar dos páginas que competían por la misma búsqueda:
// la nota de jurisprudencia y el satélite de fondo dejan de ser alternativas
// y pasan a ser dos escalones del mismo tema, cada uno diciendo qué es el otro.
export type EnlaceRelacionado = { href: string; label: string };

export default function MiguelRelacionados({
  titulo,
  enlaces,
}: {
  titulo: string;
  enlaces: EnlaceRelacionado[];
}) {
  if (enlaces.length === 0) return null;

  return (
    <nav className="miguel-relacionados" aria-label={titulo}>
      <p className="miguel-label">{titulo}</p>
      <ul>
        {enlaces.map((e) => (
          <li key={e.href}>
            <Link href={e.href}>{e.label}</Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
