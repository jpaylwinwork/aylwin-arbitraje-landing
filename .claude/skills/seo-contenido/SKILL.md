---
name: seo-contenido
description: >-
  SEO y contenido orgánico de Aylwin Matta Abogados: investigación de keywords de intención de
  compra (matriz), SEO local (Google Business Profile, "arbitraje Santiago"), calendario de
  contenido por materia, artículos para /recursos con pipeline de publicación vía git, datos
  estructurados schema.org y construcción de autoridad (podcasts, directorios). Usar cuando el
  usuario pida posicionar en Google sin pagar, escribir artículos o contenido del sitio,
  "SEO", "contenido orgánico", "blog", "recursos", "Google Business Profile", "aparecer en
  ChatGPT/buscadores", "keywords orgánicas", o cuando ads-campana detecte términos valiosos de
  bajo volumen que convenga capturar por orgánico.
---

# seo-contenido — SEO y contenido orgánico de Aylwin Matta

Objetivo: capturar demanda de intención de compra por vía orgánica (Google y motores de IA), al
costo del tiempo de redacción — complementando el canal pagado, no compitiendo con él.

## Regla central: fondo del funnel PRIMERO

La trampa del tráfico: los términos informativos de alto volumen ("qué es el arbitraje") traen
visitas que NO contratan. Prioridad estricta de contenido:

1. **Páginas de intención de compra**: "abogado arbitraje comercial santiago", materia × industria
   ("arbitraje para empresas constructoras"), variaciones de contratación.
2. **Comparaciones educativas neutras** (segunda prioridad — citables por Google y por LLMs):
   "arbitraje vs juicio ordinario: cuándo conviene cada uno", "qué revisar antes de firmar una
   cláusula compromisoria". NUNCA rankings de estudios ni listas donde nos autoposicionemos
   (publicidad comparativa/superlativa — prohibida, ver ética).
3. **Contenido informativo general**: solo cuando 1 y 2 estén cubiertos.

## Reglas operativas

1. **Cero alucinación — crítica en contenido legal.** Plazos, normas y procedimientos citados en
   artículos: verificados por MAF antes de publicar (marcar "Verificar vigencia/texto exacto" en
   borradores). Experiencia y credenciales: solo hechos confirmados.
2. **Ética CEP 2011** (`references/etica-cep2011.md`): el contenido orgánico ES publicidad de
   servicios legales. Mismo checklist que los anuncios pagados.
3. **Publicación SIEMPRE vía branch + aprobación humana** (`references/publicacion-git.md`).
   Jamás publicar directo a main — ni siquiera correcciones menores de contenido.
4. **Léxico prohibido:** el mismo de todos los skills del sistema.
5. Al terminar: "¿Deseas que profundice en algún punto o modifique el enfoque?".

## Flujo de trabajo

### Paso 1 — Investigación de keywords
Leer `references/matriz-keywords.md`. Producir la matriz para la materia pedida, cruzando con la
arquitectura de dos audiencias de ads-campana (mismo lenguaje, distinto canal).

### Paso 2 — Plan de contenido
Leer `references/contenido-practicas.md`. Proponer calendario priorizado (fondo del funnel
primero) con título, keyword objetivo, audiencia y tipo de pieza por artículo. MAF aprueba el
plan antes de redactar.

### Paso 3 — Redacción
Artículos en markdown para `/recursos` (formato en `references/publicacion-git.md`): título que
responde la búsqueda, respuesta directa en el primer párrafo (featured snippet / cita de LLM),
desarrollo sobrio, FAQ con preguntas reales de clientes, enlaces internos a la landing de la
materia y a artículos relacionados, CTA discreto al final.

### Paso 4 — Checkpoint ético + verificación normativa
Checklist de `references/etica-cep2011.md` + lista de normas citadas para verificación de MAF.

### Paso 5 — Publicación
Seguir `references/publicacion-git.md` al pie de la letra: branch → preview de Vercel → aprobación
→ merge. Reportar la URL de preview al usuario para revisión.

### SEO local / Google Business Profile
Leer `references/local-seo-autoridad.md` cuando se pida visibilidad local, GBP, reseñas o
construcción de autoridad (podcasts, directorios).

### Datos estructurados
Leer `references/schema-tecnico.md` para cualquier trabajo de schema.org en el sitio.

## Relación con los otros skills

- Keywords y audiencias: compartidas con ads-campana (misma matriz, distinto canal). Un término
  caro en ads puede ser objetivo orgánico y viceversa — anotar estos cruces en cada informe.
- Base estratégica (personas, posicionamiento, briefs): marketing-fundamentals.
- Métricas: sesiones orgánicas y consultas atribuidas a orgánico (utm ausente + fuente google) —
  visibles en /dashboard. El KPI sigue siendo consultas calificadas, no tráfico.
