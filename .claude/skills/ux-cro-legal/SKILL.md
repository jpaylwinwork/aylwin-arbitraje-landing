---
name: ux-cro-legal
description: >-
  Consultoría de UX, CRO y diseño web para miguelaylwin.com, el sitio personal de Miguel Aylwin
  Fernández sobre arbitraje inmobiliario y de construcción. Cubre arquitectura de la información,
  jerarquía visual, legibilidad y accesibilidad, copywriting B2B para servicios jurídicos de alto
  valor, optimización de CTAs y flujos de conversión, reducción de fricción en formularios, y SEO
  de intención de nicho. Usar cuando se pida iterar, revisar o mejorar el sitio de Miguel: "mejora
  la web", "revisa la home", "esto no convierte", "audita la landing", "mejora este texto",
  "reordena la página", "el formulario tiene mucha fricción", "cómo aumento las consultas",
  "revisa la jerarquía", "esto se ve mal", o cuando se proponga una sección o página nueva y haya
  que decidir si conviene y dónde va.
---

# ux-cro-legal — Iteración de miguelaylwin.com

Objetivo: aumentar la proporción de visitantes cualificados que terminan enviando una consulta,
sin que el sitio pierda la sobriedad que es su principal argumento de venta.

El cliente objetivo son socios, gerentes generales, gerentes de proyecto y fiscales de
constructoras e inmobiliarias con un conflicto vivo. No es tráfico de consumidor: es gente que ya
tuvo abogados, que desconfía, y que decide por criterio y no por impulso.

## Regla de precedencia (leer SIEMPRE primero)

1. **Ética CEP 2011** (Código de Ética Profesional, Colegio de Abogados de Chile). Manda sobre
   cualquier técnica de CRO. Prohibido: promesas de resultado, superlativos no verificables,
   urgencia artificial, prueba social inventada, testimonios sin autorización escrita. Los arts. 13
   y 14 prohíben la información engañosa o que induzca a error; el art. 5 impone honradez.
   Varios mecanismos estándar de CRO (contadores, escasez fabricada, garantías) son directamente
   inaplicables acá. No proponerlos.
2. **`CONTENIDO/01_ESTRATEGIA_Y_DECISIONES.md`** — decisiones ya cerradas (umbral de 1.000 UF,
   corte de servicio en 8.000 UF, materias, vetos de contenido del §6). No reabrirlas sin decirlo.
3. **Regla de origen del repo** (commit `0b6cab9`): todo contenido jurídico exige una fuente real
   identificada. Nunca redactar novedades, cifras o jurisprudencia desde conocimiento general.
4. **`CLAUDE.md` del repo** — sistema de diseño y reglas de contenido.

## Cómo se presenta cada propuesta

Formato obligatorio, en este orden y sin excepción:

1. **Problema actual.** Anclado a un elemento identificable: página, sección, línea. Nada de
   observaciones genéricas del tipo "el copy podría ser más fuerte".
2. **Solución propuesta.** Concreta y aplicable: el texto exacto, el reordenamiento exacto.
3. **Impacto esperado.** Qué mejora y por qué —escaneabilidad, fricción, jerarquía, relevancia
   para una intención de búsqueda—. Si el efecto es incierto, decirlo y proponer cómo verificarlo.

Priorizar por esfuerzo/impacto y no entregar más de 5-7 propuestas por ronda: una lista de treinta
puntos no se ejecuta.

## Voz del sitio

Honesta, ejecutiva, apoyada en el método y centrada en el impacto económico del conflicto. El
titular que mejor la resume: *"Un conflicto de obra se resuelve bien cuando entiendes tu posición
real. No cuando encuentras un abogado que te dé la razón."*

- Segunda persona, frases cortas, sin jerga innecesaria. Español de Chile.
- El defecto declarado convierte: admitir un límite real (*"nadie puede garantizarte el resultado
  de un juicio"*) es más creíble que cualquier promesa, y además es lo que exige la ética.
- Los cuatro miedos del cliente son el eje y no son miedos al conflicto, sino **a su propio
  abogado**: el pozo sin fondo de honorarios, el caso que desaparece dentro del estudio, el consejo
  legalmente correcto y comercialmente desastroso, y el socio que vende y no ejecuta. Ningún
  estudio grande puede responderlos sin desmentir su modelo de negocio. Ahí se gana.
- **Léxico prohibido:** potenciar, empoderar, sinergia, disruptivo, transformador, ecosistema,
  "alto impacto", invaluable, crucial, meticuloso, robusto, versátil.

## Sistema de diseño vigente

Tokens en `app/miguel/miguel.css`, todo bajo `.site-miguel`. Trabajar con los tokens, nunca con
hex sueltos.

- Acento único `--miguel-accent` `#a8000d` (rojo institucional de aylwin.cl); tinta `#131313`;
  fondo `#f9f9f9`.
- Cuerpo en Source Serif 19px, interlineado 1.7, columna de 720px — la medida de lectura es
  intocable: ensancharla para "aprovechar la pantalla" empeora la comprensión.
- Titulares display en Bodoni Moda; etiquetas y navegación en Poppins mayúscula con tracking.
- Patrón de sección: banda a sangre → etiqueta en mayúsculas → título display.
- Esquinas rectas, sin sombras difusas, sin degradados, sin iconos genéricos de línea.
- Texto corrido justificado con `hyphens: auto`.
- Fotografía: solo el retrato de MAF, en "Quién soy" y en la sección 8 de la landing. **Cero
  fotos de archivo** (manos estrechándose, martillos, cascos, rascacielos).

## Diferencias entre los dos activos

No aplicar las mismas reglas a ambos:

| | Sitio SEO (`/`, pilares, satélites, boletín) | Landing de Ads (`/consulta`) |
|---|---|---|
| Objetivo | Autoridad; que el lector aprenda algo | Que envíe el formulario |
| Navegación | Menú completo, enlazado interno denso | **Cero salidas**: sin menú, sin enlaces externos |
| Indexación | Indexable | `noindex, nofollow` — no quitarlo |
| Medida de éxito | Consultas cualificadas por tráfico orgánico | Costo por consulta cualificada |

En `/consulta`, cada enlace añadido es una fuga del clic pagado. Antes de proponer cualquier
elemento nuevo ahí, justificar por qué no resta conversión.

## Fricción del formulario

Diez campos es el máximo, y cada uno existe porque califica o rutea. El selector de cuantía hace
el filtro principal; el campo de urgencia manda sobre todos los demás (un arbitraje de emergencia
se resuelve en días y llegar tarde equivale a no llegar); "proceso en curso con otro abogado"
identifica al lead más caliente. Antes de proponer un campo nuevo, decir cuál se quita.

## Qué medir antes de afirmar que algo funcionó

El formulario es un evento intermedio, no el objetivo: el objetivo es el mandato firmado. Un
cambio que sube envíos y baja calidad de lead es un retroceso. Orden de métricas: mandatos →
CAC frente a honorario → costo por reunión cualificada → costo por consulta → CTR. Nunca
optimizar por clics o impresiones.

Para tests A/B: con el volumen actual del sitio, la mayoría de los cambios no alcanzará
significancia estadística en plazos útiles. Decirlo en vez de fingir rigor — y en ese caso
decidir por criterio de diseño declarado, no por un test que no concluye.

## Qué NO hace este skill

- No redacta contenido jurídico sustantivo sin fuente real: eso es `seo-contenido` con material
  identificado.
- No configura campañas ni pujas: eso es `ads-campana` y `ads-auditoria`.
- No define posicionamiento ni personas desde cero: eso es `marketing-fundamentals`.
- No publica a producción por su cuenta. En este repo, **nunca pushear directo a `main`**: el
  despliegue se bloquea por autoría. Va por rama, y el workflow `auto-deploy-collaborators` la
  fusiona con la identidad del dueño.
