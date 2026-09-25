// Eje temático del Monitor, ortogonal a `categoria`. `categoria` dice de qué
// tipo de fuente viene la entrada (un fallo, un texto normativo, un hecho
// institucional); `tema` dice de qué materia trata.
//
// Se separan en vez de reemplazar uno por otro porque veintiocho de las
// treinta entradas son "Jurisprudencia": como criterio de filtro esa
// categoría no distingue nada. Quien llega buscando licitaciones no quiere
// "Jurisprudencia", quiere licitaciones.
//
// Este archivo vive aparte de lib/boletin-miguel.ts a propósito: aquel lee
// disco (node:fs, gray-matter, marked) y no puede entrar en el bundle del
// navegador. El filtro del listado es un componente cliente y necesita las
// etiquetas, así que lo que ambos comparten tiene que estar libre de Node.

export type TemaBoletin =
  | "construccion-mop"
  | "arbitraje"
  | "licitaciones"
  | "inmobiliario-municipal"
  | "garantias";

// El orden de las claves es el orden en que se pintan los filtros.
export const TEMA_LABEL: Record<TemaBoletin, string> = {
  "construccion-mop": "Construcción y MOP",
  arbitraje: "Arbitraje comercial",
  licitaciones: "Licitaciones y TCP",
  "inmobiliario-municipal": "Inmobiliario y municipal",
  garantias: "Garantías y regulación",
};

export const TEMAS = Object.keys(TEMA_LABEL) as TemaBoletin[];

const TEMAS_VALIDOS = new Set<string>(TEMAS);

// Un `tema` mal escrito en el frontmatter no rompe el build ni inventa una
// categoría: la entrada simplemente queda sin tema y sigue apareciendo en
// "Todas". Misma lógica defensiva que el resto del parser del boletín.
export function normalizarTema(valor: unknown): TemaBoletin | undefined {
  return typeof valor === "string" && TEMAS_VALIDOS.has(valor)
    ? (valor as TemaBoletin)
    : undefined;
}
