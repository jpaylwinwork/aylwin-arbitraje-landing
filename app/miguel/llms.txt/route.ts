import { getEntradas } from "@/lib/boletin-miguel";
import { TEMA_LABEL, TEMAS } from "@/lib/boletin-temas";
import { SITIO_MIGUEL } from "@/lib/hosts-miguel";
import { getSatelite, getSateliteSlugs } from "@/lib/satelites-miguel";

// llms.txt (llmstxt.org): el índice que leen los modelos de lenguaje para
// entender el sitio. Lo que dice aquí lo repiten como hecho sobre Miguel, así
// que la regla es la misma que la del Monitor: no afirma nada que el sitio no
// diga ya.
//
// Por eso se genera desde los datos y no se mantiene a mano. La primera
// versión, redactada aparte, traía diez direcciones del Monitor que no
// existían, atribuía al art. 239 COT las calidades de árbitro (son del 223) y
// describía /cuanto-cuesta-arbitraje-chile como si publicara los aranceles del
// CAM, cuando esa página declara que no los publica. Generado desde
// getEntradas() y los satélites, cada enlace existe y cada descripción es la
// que el propio sitio muestra.
//
// Vive en app/miguel/ y no en public/: el proxy reescribe /llms.txt a
// /miguel/llms.txt en el dominio de Miguel, así que un archivo en public/ se
// habría servido en el dominio del estudio y dado 404 en miguelaylwin.cl.
//
// Estático: se construye en cada build. El workflow del Monitor reconstruye
// los días hábiles, de modo que una entrada programada entra al índice el
// mismo día que aparece en el sitio, y nunca antes.
export const dynamic = "force-static";

// Títulos y descripciones copiados de la metadata de cada página, como hace
// app/sitemap.ts con su lista de rutas estáticas.
const PILARES = [
  {
    ruta: "/arbitraje-construccion-chile",
    titulo: "Arbitraje en contratos de construcción en Chile",
    descripcion:
      "Cómo funciona el arbitraje en contratos de construcción en Chile: cláusula arbitral, tipos de árbitro, plazos y costos.",
  },
  {
    ruta: "/arbitraje-inmobiliario-chile",
    titulo: "Arbitraje en conflictos inmobiliarios en Chile",
    descripcion:
      "Conflictos inmobiliarios en Chile: promesas de compraventa, vicios de construcción, terrenos y disputas entre socios de proyectos.",
  },
];

const PAGINAS = [
  {
    ruta: "/estadisticas-arbitraje-chile",
    titulo: "Estadísticas del arbitraje en Chile: CAM Santiago 2025",
    descripcion:
      "Qué materias concentran el arbitraje en Chile y cuáles son las cuantías reales de las causas, según la Memoria del CAM Santiago.",
  },
  {
    ruta: "/preguntas-frecuentes",
    titulo: "Arbitraje de construcción: preguntas frecuentes",
    descripcion:
      "Respuestas directas sobre arbitraje en construcción e inmobiliario: cláusula arbitral, costos, tipos de árbitro y plazos.",
  },
  {
    ruta: "/como-trabajo",
    titulo: "Cómo trabajo: tres vías según el tamaño del conflicto",
    descripcion:
      "Tres modalidades de trabajo según el tamaño y la urgencia del conflicto: vía acotada, vía completa y vía de urgencia para arbitraje de emergencia.",
  },
  {
    ruta: "/quien-soy",
    titulo: "Miguel Aylwin Fernández — Abogado de arbitraje",
    descripcion:
      "Abogado en conflictos de contratos inmobiliarios, de construcción e infraestructura, en arbitraje y en sede judicial. Socio de Aylwin Matta.",
  },
  {
    ruta: "/contacto",
    titulo: "Contacto",
    descripcion:
      "Conversemos sobre tu conflicto inmobiliario o de construcción antes de decidir qué hacer.",
  },
];

const enlace = (titulo: string, ruta: string, descripcion: string) =>
  `- [${titulo}](${SITIO_MIGUEL}${ruta})${descripcion ? `: ${descripcion}` : ""}`;

export function GET() {
  const satelites = getSateliteSlugs()
    .map((slug) => getSatelite(slug))
    .filter((s) => s !== null)
    .sort((a, b) => a.title.localeCompare(b.title, "es"));

  const entradas = getEntradas();
  const porTema = TEMAS.map((tema) => ({
    etiqueta: TEMA_LABEL[tema],
    entradas: entradas.filter((e) => e.tema === tema),
  })).filter((g) => g.entradas.length > 0);
  // Una entrada sin tema no debe desaparecer del índice por eso.
  const sinTema = entradas.filter((e) => !e.tema);
  if (sinTema.length) porTema.push({ etiqueta: "Otras", entradas: sinTema });

  const lineas = [
    "# Miguel Aylwin Fernández — Arbitraje inmobiliario y de construcción",
    "",
    "> Abogado en conflictos de contratos inmobiliarios, de construcción e infraestructura, en arbitraje y en sede judicial. Socio de Aylwin Matta.",
    "",
    "Cómo se resuelven en Chile los conflictos de contratos inmobiliarios y de construcción: arbitraje, cláusulas, cuantías y costos reales.",
    "",
    "## Guías principales",
    "",
    ...PILARES.map((p) => enlace(p.titulo, p.ruta, p.descripcion)),
    "",
    "## Temas",
    "",
    ...satelites.map((s) => enlace(s.title, `/${s.slug}`, s.metaDescription)),
    "",
    "## Monitor Jurisprudencial",
    "",
    "Jurisprudencia relevante, cambios normativos y publicaciones en arbitraje inmobiliario y de construcción en Chile. Cada entrada identifica su fuente: tribunal, rol y fecha.",
    "",
    ...porTema.flatMap((g) => [
      `### ${g.etiqueta}`,
      "",
      ...g.entradas.map((e) => enlace(e.title, `/boletin/${e.slug}`, e.description)),
      "",
    ]),
    "## Sobre el sitio",
    "",
    ...PAGINAS.map((p) => enlace(p.titulo, p.ruta, p.descripcion)),
    "",
    "## Contacto",
    "",
    "- Aylwin Matta Abogados, Av. Apoquindo 3910, piso 3, Las Condes, Santiago, Chile",
    "- Correo: mp@aylwin.cl",
    `- Formulario: ${SITIO_MIGUEL}/contacto`,
    "",
  ];

  return new Response(lineas.join("\n"), {
    headers: { "Content-Type": "text/plain; charset=utf-8" },
  });
}
