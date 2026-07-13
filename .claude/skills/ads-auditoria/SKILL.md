---
name: ads-auditoria
description: >-
  Audita y optimiza las campañas de Google Ads de Aylwin Matta Abogados: revisa términos de
  búsqueda, propone negativas nuevas, evalúa keywords/anuncios/pujas, procesa el Excel maestro
  de leads, genera el CSV de conversiones offline para importar a Google Ads y reporta costo por
  lead, CAC y avance del embudo. Usar siempre que MAF diga "auditar ads", "revisar la campaña",
  "cómo van los ads", "optimizar Google Ads", "informe de la campaña", "revisar términos de
  búsqueda", "importar conversiones", "actualizar el excel de leads", "cuánto me costó cada lead",
  o pegue/adjunte un export o pantallazo de Google Ads pidiendo análisis. También para la
  revisión semanal de rutina del sistema de ads.
---

# ads-auditoria — Revisión y optimización de las campañas de Aylwin Matta

Objetivo: que cada peso gastado compre más probabilidad de mandato. La auditoría trabaja con dos fuentes que se cruzan siempre: los datos de Google Ads y el Excel maestro LEADS_ADS.xlsx (la verdad comercial). Google dice qué costó cada clic; el Excel dice cuáles valieron la pena.

## Reglas operativas

1. **Cero alucinación.** Trabajar SOLO con datos reales provistos (exports CSV, pantallazos, lectura supervisada de la interfaz, Excel maestro). Si falta un dato, pedirlo en lista numerada. Nunca estimar métricas como si fueran observadas.
2. **Checkpoint humano.** Toda modificación en la cuenta (pausar keyword, agregar negativa, cambiar puja) se propone primero; se ejecuta solo con aprobación de MAF, sea vía Chrome supervisado o con instrucciones para que él la haga.
3. **Léxico prohibido** (contexto jurídico-profesional): potenciar, empoderar, sinergia, disruptivo, transformador, ecosistema, "alto impacto", "en el panorama actual", invaluable, crucial, meticuloso, robusto, versátil. Informe directo y ejecutivo.
4. Al terminar: "¿Deseas que profundice en algún punto o modifique el enfoque?".

## Insumos (pedir lo que falte al inicio, de una vez)

1. Export del informe de términos de búsqueda del período (o acceso supervisado vía Chrome).
2. Export de rendimiento por keyword y por anuncio (clics, impresiones, CTR, CPC, costo, conversiones, Nivel de Calidad).
3. LEADS_ADS.xlsx actualizado.
4. Período a auditar y gasto total.

Con acceso vía Claude en Chrome, puede leerse la interfaz directamente (solo lectura no requiere aprobación; cualquier cambio sí).

## Flujo

### 1. Términos de búsqueda → negativas
Aplicar `references/reglas-decision.md` (sección términos). Entregar lista de negativas nuevas lista para pegar y keywords nuevas propuestas si aparecieron términos valiosos.

### 2. Keywords, anuncios y pujas
Aplicar las reglas de decisión. Presentar cada recomendación como: dato observado → regla → acción propuesta → impacto esperado. Máximo 10 recomendaciones priorizadas por ahorro/retorno.

### 3. Embudo comercial y conversiones offline
Cruzar Excel maestro con datos de Google: leads por campaña/keyword, estados, dónde se cae el embudo. Si hay estados 3/4/5 nuevos con Click_ID, correr `scripts/generar_csv_conversiones.py` y entregar el CSV con las instrucciones de importación (Objetivos → Conversiones → Subidas; verificar plantilla vigente). Ver `references/tracking-oct.md` y `references/excel-maestro.md`.

### 4. Métricas financieras
Reportar: gasto, clics, CPC medio, leads, costo por lead, reuniones, costo por reunión, CAC (si hay mandatos), LTV:CAC proyectado. Comparar contra `references/presupuesto-benchmarks.md` y contra la auditoría anterior si existe.

### 5. Checkpoint ético
Si la auditoría propone anuncios o keywords nuevos, pasarlos por `references/etica-cep2011.md` antes de entregar.

### 6. Informe
Preguntar formato antes de generar (md, docx, o resumen en chat). Estructura: resumen en 3 líneas → números del período → acciones recomendadas priorizadas → acciones ejecutadas (si hubo vía supervisada) → próxima revisión sugerida. Cerrar con la pregunta de feedback.

## Criterio general

A presupuesto restringido, el orden de rentabilidad de la optimización es: (1) negativizar tráfico basura, (2) mejorar anuncio/landing del grupo que sí convierte, (3) reasignar presupuesto al grupo ganador, (4) recién entonces, subir presupuesto. Resistir la tentación de tocar todo a la vez: cambios de a uno permiten saber qué funcionó.
