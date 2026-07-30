// Sección 6 ("Prueba") de la landing /consulta — casos abstraídos.
//
// Regla del material fuente (03_LANDING_ADS.md, Nota crítica de la Sección 6):
// "Si aún no tienes los tres casos redactados y verificados, elimina la
// sección completa antes de publicar. Una sección de prueba con marcadores
// visibles o con casos vagos hace más daño que no tenerla."
//
// Por eso esto es todo-o-nada: 0 casos = sección oculta, 3 casos completos =
// sección visible. Nunca 1 o 2, nunca un caso con placeholders sin resolver.

export type CasoPrueba = {
  tipo: string;
  cuantiaUf: string;
  via: string;
  queSeHizo: string;
  resultado: string;
};

// Vacío hasta que MAF entregue los tres casos reales, anonimizados y verificados.
export const CASOS_PRUEBA: CasoPrueba[] = [];

function contienePlaceholder(caso: CasoPrueba): boolean {
  return Object.values(caso).some((v) => v.includes("["));
}

export function casosPruebaListos(): boolean {
  if (CASOS_PRUEBA.length === 0) return false;
  if (CASOS_PRUEBA.length !== 3) {
    throw new Error(
      `CASOS_PRUEBA tiene ${CASOS_PRUEBA.length} casos — debe ser 0 (sección oculta) o exactamente 3 (sección completa), nunca un estado intermedio.`,
    );
  }
  if (CASOS_PRUEBA.some(contienePlaceholder)) {
    throw new Error("CASOS_PRUEBA contiene un placeholder sin resolver (\"[\") — completar o vaciar el arreglo.");
  }
  return true;
}
