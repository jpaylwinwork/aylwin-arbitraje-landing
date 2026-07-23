# Pipeline de publicación vía git (OBLIGATORIO para todo contenido)

El sitio (repo `jpaylwinwork/aylwin-arbitraje-landing`, clonado en `/root/aylwin-landing` en el
VPS) despliega automáticamente a producción con cada push a `main`. Por eso el contenido NUNCA se
escribe directo a main: todo pasa por branch + revisión humana.

## Flujo paso a paso

```bash
cd /root/aylwin-landing
git pull origin main                          # partir siempre del estado actual
git checkout -b recursos/<slug-del-articulo>  # branch por artículo
# escribir el archivo:
#   content/recursos/<slug>.md
npm run build                                  # SIEMPRE verificar antes de push
git add content/ && git commit -m "Borrador: <título del artículo>"
git push -u origin recursos/<slug-del-articulo>
```

Luego informar al usuario:
1. Que el borrador está en el branch `recursos/<slug>`
2. La URL de preview de Vercel (cada push a un branch genera un preview deploy — visible en
   github.com/jpaylwinwork/aylwin-arbitraje-landing/branches o en el dashboard de Vercel)
3. La lista de normas/plazos citados pendientes de verificación por MAF

**El merge a main lo decide un humano** (usuario o MAF), nunca este skill ni un cron. Si piden
"publícalo ya" en el mismo mensaje, confirmar una vez: "¿Apruebas publicar a producción?" y solo
entonces mergear.

## Formato del archivo de contenido

`content/recursos/<slug>.md` con frontmatter:

```markdown
---
title: "Arbitraje vs juicio ordinario: cuándo conviene cada uno"
description: "Comparación de plazos, costos y confidencialidad entre ambas vías. [≤160 chars]"
date: "2026-07-15"
materia: "Arbitraje"            # Arbitraje | Reclamo de ilegalidad | General
draft: false
---

Contenido en markdown...
```

- Slug: kebab-case, sin tildes ni ñ (ej. `arbitraje-vs-juicio-ordinario`)
- Los artículos con `draft: true` no se listan en el índice de /recursos

## Qué jamás hacer

- Push directo a main (ni siquiera typos — branch y aprobación siempre)
- Editar `app/api/lead/route.ts` o cualquier archivo fuera de `content/` desde este flujo
- Publicar normas sin la verificación de MAF completada
