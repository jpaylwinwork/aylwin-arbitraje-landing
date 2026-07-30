// Cuantía tier and priority computation — pure functions, deliberately simple.
// The source material (CONTENIDO/01_ESTRATEGIA_Y_DECISIONES.md §5bis and
// CONTENIDO/03_LANDING_ADS.md Sección 9) repeatedly warns: "sin cuantía
// determinada" must NEVER be silently deprioritized — 35% of real CAM cases
// have no determined amount, and they're often the biggest ones disguised as
// indeterminate. These functions exist so that warning is structural, not a
// comment someone can forget.

export type CuantiaTramo =
  | "Menos de 1.000 UF"
  | "1.000-8.000"
  | "8.001-25.000"
  | "Más de 25.000"
  | "Sin cuantía determinada"
  | "No lo sé aún";

export function tierFromCuantia(tramo: string): string {
  switch (tramo) {
    case "Menos de 1.000 UF":
      return "Bajo umbral — no se toma como cliente (explicar con franqueza, no ignorar)";
    case "1.000-8.000":
      return "Vía acotada";
    case "8.001-25.000":
    case "Más de 25.000":
      return "Vía completa";
    case "Sin cuantía determinada":
    case "No lo sé aún":
      return "Vía completa — REVISAR MANUALMENTE (35% de causas CAM son de cuantía indeterminada y suelen ser las MÁS grandes; no descartar por filtro automático)";
    default:
      return "Sin clasificar — revisar manualmente";
  }
}

export function priorityFromLead(input: { urgente: boolean; estadoConflicto?: string }): "urgente" | "alta" | "normal" {
  if (input.urgente) return "urgente"; // overrides everything else — a ticking clock
  if (input.estadoConflicto === "Proceso en curso con otro abogado") return "alta"; // hottest lead per source
  return "normal";
}
