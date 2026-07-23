import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";
import { marked } from "marked";

const CONTENT_DIR = path.join(process.cwd(), "content", "recursos");

export type Articulo = {
  slug: string;
  title: string;
  description: string;
  date: string;
  materia: string;
  draft: boolean;
  html: string;
};

export function getSlugs(): string[] {
  if (!fs.existsSync(CONTENT_DIR)) return [];
  return fs
    .readdirSync(CONTENT_DIR)
    .filter((f) => f.endsWith(".md"))
    .map((f) => f.replace(/\.md$/, ""));
}

export function getArticulo(slug: string): Articulo | null {
  const file = path.join(CONTENT_DIR, `${slug}.md`);
  if (!fs.existsSync(file)) return null;
  const { data, content } = matter(fs.readFileSync(file, "utf-8"));
  return {
    slug,
    title: data.title ?? slug,
    description: data.description ?? "",
    date: data.date ?? "",
    materia: data.materia ?? "General",
    draft: data.draft === true,
    html: marked.parse(content, { async: false }) as string,
  };
}

export function getArticulos(): Articulo[] {
  return getSlugs()
    .map((slug) => getArticulo(slug))
    .filter((a): a is Articulo => a !== null && !a.draft)
    .sort((a, b) => (a.date < b.date ? 1 : -1));
}

export const MATERIA_TO_LANDING: Record<string, string> = {
  Arbitraje: "/arbitraje",
  "Reclamo de ilegalidad": "/reclamo-ilegalidad",
};
