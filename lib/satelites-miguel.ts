import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";
import { marked } from "marked";

const CONTENT_DIR = path.join(process.cwd(), "content", "satelites-miguel");

export type Pilar = "inmobiliario" | "construccion";

export type Satelite = {
  slug: string;
  title: string;
  metaDescription: string;
  keyword: string;
  pilares: Pilar[];
  // Entradas del Monitor que desarrollan este mismo tema con un fallo
  // concreto. Sin este enlace, la página corta y la nota extensa competían
  // por la misma búsqueda sin que nada indicara cuál es cuál.
  jurisprudencia: string[];
  html: string;
};

export function getSateliteSlugs(): string[] {
  if (!fs.existsSync(CONTENT_DIR)) return [];
  return fs
    .readdirSync(CONTENT_DIR)
    .filter((f) => f.endsWith(".md"))
    .map((f) => f.replace(/\.md$/, ""));
}

export function getSatelite(slug: string): Satelite | null {
  const file = path.join(CONTENT_DIR, `${slug}.md`);
  if (!fs.existsSync(file)) return null;
  const { data, content } = matter(fs.readFileSync(file, "utf-8"));
  return {
    slug,
    title: data.title ?? slug,
    metaDescription: data.metaDescription ?? "",
    keyword: data.keyword ?? "",
    pilares: (data.pilares ?? []) as Pilar[],
    jurisprudencia: Array.isArray(data.jurisprudencia) ? (data.jurisprudencia as string[]) : [],
    html: marked.parse(content, { async: false }) as string,
  };
}

export function getSatelites(): Satelite[] {
  return getSateliteSlugs()
    .map((slug) => getSatelite(slug))
    .filter((s): s is Satelite => s !== null);
}

export function getSatelitesByPilar(pilar: Pilar): Satelite[] {
  return getSatelites().filter((s) => s.pilares.includes(pilar));
}

// The 4 satellites the source material explicitly requires to be linked from
// BOTH pillars. A build-time check (called from each pillar page) confirms
// this stays true instead of relying on frontmatter never drifting silently.
export const TRANSVERSAL_SLUGS = [
  "clausula-arbitral-contrato-construccion",
  "arbitro-derecho-arbitrador-mixto",
  "cuanto-cuesta-arbitraje-chile",
  "primeros-30-dias-conflicto",
];

export function assertTransversalLinking() {
  const inmobiliario = getSatelitesByPilar("inmobiliario").map((s) => s.slug);
  const construccion = getSatelitesByPilar("construccion").map((s) => s.slug);
  for (const slug of TRANSVERSAL_SLUGS) {
    if (!inmobiliario.includes(slug) || !construccion.includes(slug)) {
      throw new Error(
        `Satélite transversal "${slug}" no está enlazado desde ambos pilares (arquitectura SEO rota).`,
      );
    }
  }
}
