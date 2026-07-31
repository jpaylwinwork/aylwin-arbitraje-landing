import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";
import { marked } from "marked";

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
  imagen?: string;
  imagenAlt?: string;
  imagenCredito?: string;
  draft: boolean;
  html: string;
};

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
    date: data.date ?? "",
    categoria: (data.categoria as CategoriaBoletin) ?? "Institucional",
    fuente,
    fuenteUrl: typeof data.fuenteUrl === "string" ? data.fuenteUrl : undefined,
    imagen: typeof data.imagen === "string" ? data.imagen : undefined,
    imagenAlt: typeof data.imagenAlt === "string" ? data.imagenAlt : undefined,
    imagenCredito: typeof data.imagenCredito === "string" ? data.imagenCredito : undefined,
    draft: data.draft === true,
    html: marked.parse(content, { async: false }) as string,
  };
}

export function getEntradas(): EntradaBoletin[] {
  return getBoletinSlugs()
    .map((slug) => getEntrada(slug))
    .filter((e): e is EntradaBoletin => e !== null && !e.draft)
    .sort((a, b) => (a.date < b.date ? 1 : -1));
}

export function hayBoletin(): boolean {
  return getEntradas().length > 0;
}

export function formatearFecha(iso: string): string {
  if (!iso) return "";
  const d = new Date(`${iso}T12:00:00`);
  if (Number.isNaN(d.getTime())) return iso;
  return d.toLocaleDateString("es-CL", { day: "numeric", month: "long", year: "numeric" });
}
