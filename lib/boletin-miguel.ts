import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";
import { marked } from "marked";
import type { Pilar } from "./satelites-miguel";

// Boletín de miguelaylwin.com: novedades legislativas y jurisprudenciales en
// arbitraje. Misma mecánica que lib/recursos.ts y lib/satelites-miguel.ts —
// markdown en disco, publicado por git— para no introducir un sistema paralelo.
//
// REGLA DE ORIGEN (repo, commit 0b6cab9): cada entrada exige una fuente real
// identificada —un fallo, un texto normativo, un reporte— antes de redactarse.
// El campo `fuente` es obligatorio y la entrada no se publica sin él. No se
// escriben novedades a partir de conocimiento general: una cita de
// jurisprudencia inventada es el peor error posible en un sitio de un abogado.

const CONTENT_DIR = path.join(process.cwd(), "content", "boletin-miguel");

export type CategoriaBoletin = "Legislación" | "Jurisprudencia" | "Institucional";

export type EntradaBoletin = {
  slug: string;
  title: string;
  description: string;
  date: string;
  categoria: CategoriaBoletin;
  fuente: string;
  fuenteUrl?: string;
  // Pilar al que pertenece y satélites que desarrollan el tema de fondo.
  // Las entradas nacieron sin enlaces internos: diecinueve páginas que no
  // repartían nada al resto del sitio, y un lector que terminaba una nota no
  // tenía adónde seguir salvo volver al listado.
  pilares: Pilar[];
  relacionados: string[];
  imagen?: string;
  imagenAlt?: string;
  imagenCredito?: string;
  draft: boolean;
  html: string;
};

function normalizarFecha(valor: unknown): string {
  if (valor instanceof Date && !Number.isNaN(valor.getTime())) {
    return valor.toISOString().slice(0, 10);
  }
  return typeof valor === "string" ? valor.trim() : "";
}

export function getBoletinSlugs(): string[] {
  if (!fs.existsSync(CONTENT_DIR)) return [];
  return fs
    .readdirSync(CONTENT_DIR)
    .filter((f) => f.endsWith(".md") && f !== "README.md")
    .map((f) => f.replace(/\.md$/, ""));
}

export function getEntrada(slug: string): EntradaBoletin | null {
  const file = path.join(CONTENT_DIR, `${slug}.md`);
  if (!fs.existsSync(file)) return null;
  const { data, content } = matter(fs.readFileSync(file, "utf-8"));

  // Sin fuente declarada la entrada no existe para el sitio. Es la misma
  // lógica todo-o-nada de lib/casos-prueba.ts: mejor no publicar que publicar
  // una novedad jurídica que nadie puede verificar.
  const fuente = typeof data.fuente === "string" ? data.fuente.trim() : "";
  if (!fuente) return null;

  return {
    slug,
    title: data.title ?? slug,
    description: data.description ?? "",
    // YAML convierte una fecha sin comillas (date: 2026-07-31) en un objeto
    // Date, no en texto. Se normaliza acá para que el resto del código reciba
    // siempre una cadena ISO: si el objeto llega hasta el JSX, React falla al
    // renderizarlo y el build cae entero.
    date: normalizarFecha(data.date),
    categoria: (data.categoria as CategoriaBoletin) ?? "Institucional",
    fuente,
    fuenteUrl: typeof data.fuenteUrl === "string" ? data.fuenteUrl : undefined,
    pilares: Array.isArray(data.pilares) ? (data.pilares as Pilar[]) : [],
    relacionados: Array.isArray(data.relacionados) ? (data.relacionados as string[]) : [],
    imagen: typeof data.imagen === "string" ? data.imagen : undefined,
    imagenAlt: typeof data.imagenAlt === "string" ? data.imagenAlt : undefined,
    imagenCredito: typeof data.imagenCredito === "string" ? data.imagenCredito : undefined,
    draft: data.draft === true,
    html: marked.parse(content, { async: false }) as string,
  };
}

// Fecha de hoy en Santiago, en ISO, comparable como texto contra el campo
// `date`. Deliberadamente no se usa toISOString(): devuelve UTC, y con Chile
// en UTC-3/-4 una entrada programada para mañana aparecería hasta cuatro
// horas antes de tiempo, de noche.
function hoyEnSantiago(): string {
  return new Intl.DateTimeFormat("en-CA", { timeZone: "America/Santiago" }).format(new Date());
}

// Publicación programada: el Monitor sale una entrada por semana y las
// dieciséis ya están escritas con su fecha. Una entrada con fecha futura
// existe en disco pero no en el sitio.
//
// Ojo: el sitio es estático, así que esto solo se evalúa al construir. Lo que
// hace aparecer la entrada del lunes es el rebuild semanal de
// .github/workflows/publicar-monitor.yml, no el paso del tiempo.
export function estaPublicada(e: EntradaBoletin): boolean {
  if (e.draft) return false;
  if (!e.date) return false;
  return e.date <= hoyEnSantiago();
}

export function getEntradas(): EntradaBoletin[] {
  return getBoletinSlugs()
    .map((slug) => getEntrada(slug))
    .filter((e): e is EntradaBoletin => e !== null && estaPublicada(e))
    .sort((a, b) => (a.date < b.date ? 1 : -1));
}

export function hayBoletin(): boolean {
  return getEntradas().length > 0;
}

export function formatearFecha(iso: string): string {
  const texto = normalizarFecha(iso);
  if (!texto) return "";
  const d = new Date(`${texto}T12:00:00`);
  // Devolver siempre una cadena: si la fecha no parsea, se muestra el valor
  // crudo, nunca un objeto.
  if (Number.isNaN(d.getTime())) return texto;
  return d.toLocaleDateString("es-CL", { day: "numeric", month: "long", year: "numeric" });
}
