# Datos estructurados (schema.org)

## Estado actual del sitio

- JSON-LD tipo `LegalService` se emite desde `app/layout.tsx` (raíz). OJO: hasta la corrección de
  julio 2026 era un solo objeto genérico en todas las páginas; ahora debe ser por página/materia.
  Verificar el estado real del código antes de proponer cambios.
- Las landings de campaña son `noindex` — el schema ahí es secundario; el que importa es el de
  páginas indexables (`/` y `/recursos/*`).

## Qué schema usar dónde

| Página | Tipo | Campos clave |
|---|---|---|
| `/` (home) | `LegalService` | name, address (Apoquindo 3910), telephone, areaServed, knowsAbout con las materias REALES, parentOrganization → aylwin.cl |
| `/recursos/<slug>` | `Article` (o `FAQPage` si es principalmente FAQ) | headline, datePublished, author → organización, publisher |
| FAQ dentro de artículos | `FAQPage` con `mainEntity` | pregunta/respuesta textuales del artículo (Google puede mostrar rich result) |

## Reglas

1. El schema afirma HECHOS — mismas reglas que el copy: nada no verificado, materias reales,
   dirección/teléfono exactos (consistencia NAP con GBP).
2. Un solo bloque `LegalService` por página, específico a lo que la página trata.
3. Validar cambios con https://validator.schema.org/ o el test de resultados enriquecidos de
   Google antes de mergear.
4. Los artículos generados por el pipeline deben incluir su JSON-LD `Article` automáticamente
   (generado desde el frontmatter — title, date, materia).
