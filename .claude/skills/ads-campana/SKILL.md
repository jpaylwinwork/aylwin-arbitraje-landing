---
name: ads-campana
description: >-
  Diseña y lanza campañas de Google Ads para Aylwin Matta Abogados orientadas a captar mandatos
  (arbitraje comercial y reclamos de ilegalidad en fase inicial) al menor costo posible, con
  arquitectura de keywords de alta intención, negativización preventiva, anuncios, presupuesto
  mínimo viable, tracking de conversiones offline y checkpoint ético CEP 2011. Usar siempre que
  MAF diga "crear campaña", "lanzar ads", "configurar Google Ads", "estructura de campaña",
  "keywords para ads", "anuncios para arbitraje", "partir con ads", "publicidad en Google",
  o pida agregar una materia nueva al sistema de ads. También cuando pregunte cuánto presupuesto
  necesita para ads o cómo medir si las campañas generan clientes.
---

# ads-campana — Creación de campañas Google Ads de Aylwin Matta

Objetivo: convertir presupuesto publicitario escaso en consultas calificadas de arbitraje y reclamos de ilegalidad. El sistema completo es: **este skill crea la campaña → ads-landing crea la página de destino → ads-auditoria la revisa y optimiza**. El Excel maestro LEADS_ADS.xlsx conecta los tres.

## Reglas operativas (aplican a toda la corrida)

1. **Cero alucinación.** Si falta un dato para completar una pieza (experiencia real del estudio, URL de landing, valor UF, acceso a la cuenta), detener esa pieza y entregar a MAF una lista numerada con las preguntas exactas. Nunca rellenar con supuestos.
2. **Norma chilena.** Al citar cualquier norma (plazos del reclamo de ilegalidad, Ley 19.971, etc.) agregar "**Verificar vigencia/texto exacto**" salvo que MAF haya provisto el texto.
3. **Léxico.** En todo material prohibido usar: potenciar, empoderar, sinergia, disruptivo, transformador, ecosistema, "soluciones de alto impacto", "en el panorama actual", invaluable, crucial, meticuloso, robusto, versátil, "sin costuras". Escribir directo y ejecutivo.
4. **Checkpoint humano.** Ninguna acción se ejecuta en la cuenta de Google Ads sin aprobación explícita de MAF, pieza por pieza o bloque por bloque.
5. Al terminar, preguntar: "¿Deseas que profundice en algún punto o modifique el enfoque?".

## Flujo de trabajo

### Paso 0 — Contexto
Preguntar a MAF: ¿campaña nueva o materia adicional? ¿Existe ya LEADS_ADS.xlsx y landing publicada? ¿Presupuesto semanal vigente (default: CLP 50.000/semana)? Si la landing no existe, avisar que el orden correcto es landing primero (skill ads-landing) — mandar tráfico pagado a www.aylwin.cl institucional desperdicia presupuesto.

### Paso 1 — Presupuesto y expectativas
Leer `references/presupuesto-benchmarks.md`. Presentar a MAF en una tabla corta: clics/mes esperados, contactos esperados, meta del mes 1, y las 6 reglas de operación a presupuesto restringido. Esto alinea expectativas antes de gastar.

### Paso 2 — Arquitectura de keywords y negativas
Leer `references/keywords-negativas.md`. Producir:
- Estructura: campañas → grupos de anuncios (separando lenguaje "empresa mediana" vs "gerencia legal") → keywords con tipo de concordancia (solo exacta y frase).
- Lista de negativas a nivel de cuenta (completa, lista para pegar).
- Configuración técnica: geo "Presencia", dayparting, solo Red de Búsqueda, auto-tagging, puja inicial con tope de CPC.
Si MAF pide una materia nueva (ej. expropiaciones), aplicar la misma lógica: mapear el lenguaje de búsqueda del afectado real, long-tail regulada, negativas específicas, y preguntar a MAF por los términos técnicos exactos de la materia antes de inventar.

### Paso 3 — Anuncios
Redactar anuncios de búsqueda responsivos (RSA) por grupo: hasta 15 títulos (≤30 caracteres) y 4 descripciones (≤90), en el lenguaje del grupo. Estructura probada: problema concreto + especialidad verificable + confidencialidad desde el primer contacto + CTA (hablar por WhatsApp / agendar diagnóstico). Incluir extensiones. Contar caracteres de verdad, no estimar.

### Paso 4 — Tracking
Leer `references/tracking-oct.md` y `references/excel-maestro.md`. Entregar: instrucciones para crear las 5 acciones de conversión (nombres exactos), verificación de auto-tagging, y crear el Excel maestro con `scripts/crear_excel_maestro.py` si no existe. Explicar a MAF el ciclo semanal: registrar leads → actualizar estados → `scripts/generar_csv_conversiones.py` → importar CSV en Google Ads.

### Paso 5 — Checkpoint ético (obligatorio, nunca omitir)
Leer `references/etica-cep2011.md` y pasar TODAS las piezas por el checklist. Reportar resultado en ≤5 líneas.

### Paso 6 — Ejecución
Ofrecer a MAF dos vías (puede combinar):
- **A. Supervisada (preferida por MAF):** operar la interfaz de Google Ads con las herramientas de Claude en Chrome, deteniéndose ANTES de cada acción que modifique la cuenta (crear campaña, guardar keywords, activar) para que MAF apruebe en pantalla. Nunca ingresar datos de pago ni activar una campaña sin aprobación expresa. Si las herramientas de Chrome no están disponibles, decirlo y pasar a la vía B.
- **B. Entregables:** documento paso a paso + bloques listos para copiar/pegar (keywords, negativas, títulos, descripciones) en el orden exacto de la interfaz.

### Paso 7 — Entregables finales
Guardar en la carpeta de trabajo: plan de campaña (docx o md según prefiera MAF — preguntar formato antes de generar), Excel maestro (si es nuevo) y recordatorio de agendar la primera auditoría (skill ads-auditoria) a los 7 días del lanzamiento.

## Fase 2
Si MAF pregunta por LinkedIn, ABM, remarketing o escalar presupuesto: leer `references/fase2-omnicanal.md` y verificar que se cumplan las condiciones de activación antes de recomendar.
