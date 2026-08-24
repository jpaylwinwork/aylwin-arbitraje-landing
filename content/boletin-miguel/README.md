# Monitor Jurisprudencial — miguelaylwin.com

Novedades de arbitraje inmobiliario y de construcción: cambios normativos,
jurisprudencia y datos institucionales. Una entrada = un archivo `.md` en esta
carpeta.

La sección se llama **Monitor Jurisprudencial** en el sitio. La ruta sigue
siendo `/boletin` y los nombres internos (`boletin-miguel`, `.miguel-boletin-*`)
tampoco cambiaron: mover la ruta rompería los enlaces ya publicados sin ganar
nada.

## Regla de origen (no negociable)

Cada entrada exige **una fuente real identificada** antes de redactarse: un
fallo con su rol y tribunal, un texto normativo con su artículo, un reporte con
su año. El campo `fuente` del frontmatter es obligatorio y `lib/boletin-miguel.ts`
descarta en silencio cualquier archivo que no lo traiga.

No se escriben novedades a partir de conocimiento general. Una cita de
jurisprudencia inventada —o un artículo que no dice lo que se afirma— es el peor
error posible en el sitio de un abogado, y este repositorio ya tuvo que
despublicar un artículo redactado sin fuente (commit `6c8ed5b`, regla en
`0b6cab9`).

Aplica además el Código de Ética Profesional 2011: toda publicación es
información profesional y no puede inducir a error (arts. 5, 13 y 14).

## Formato

```markdown
---
title: "Título de la entrada"
description: "Una frase para el listado y la meta description."
date: "2026-08-15"
categoria: Jurisprudencia    # Legislación | Jurisprudencia | Institucional
fuente: "CS, rol 12.345-2026, sentencia de 3 de julio de 2026"
draft: false
---

Cuerpo en markdown.
```

- `draft: true` mantiene la entrada fuera del sitio y del sitemap.
- Sin `fuente`, la entrada no se publica aunque `draft` sea `false`.
- Las fechas van en ISO (`YYYY-MM-DD`) **entre comillas**: sin ellas YAML las
  convierte en un objeto `Date`. El código lo normaliza igual, pero conviene
  escribirlas bien.
- Campos opcionales: `fuenteUrl` para enlazar la fuente, e `imagen`,
  `imagenAlt` e `imagenCredito` para la fotografía (la imagen se guarda en
  `public/miguel/`).

## Publicación

El archivo se sube por git. **No uses una rama `recursos/**`**: esas están
excluidas del workflow de auto-despliegue precisamente para que un humano
revise antes de publicar. Para el boletín aplica el mismo criterio — revisa el
texto y la fuente antes de fusionar.

Mientras no haya ninguna entrada publicada, `/boletin` va `noindex`, queda fuera
del sitemap y no aparece en el menú. Los tres se activan solos con la primera
entrada.

## Publicación programada, una por semana

Las dieciséis entradas convertidas desde `CONTENIDO/postparaelsitio` salen **a
razón de una por semana, los lunes**, desde el 24-08-2026 hasta el 07-12-2026.
MAF confirmó las citas de fallos y dictámenes el 24-08-2026.

No hay nada que hacer cada semana. El mecanismo es:

1. Cada entrada trae su fecha de publicación en `date`.
2. `estaPublicada()` en `lib/boletin-miguel.ts` oculta las de fecha futura,
   comparando contra la fecha de hoy **en Santiago** (no en UTC: si no, una
   entrada aparecería de madrugada el día anterior).
3. Como el sitio es estático, esa comparación solo se evalúa al construir. El
   workflow `.github/workflows/publicar-monitor.yml` corre los lunes a las
   08:00 de Santiago, comprueba si alguna entrada estrena ese día y, solo en
   ese caso, fuerza un despliegue.

Después del 07-12-2026 el workflow deja de hacer nada solo, porque ya no
encuentra fechas que estrenen. Para reanudar basta agregar entradas nuevas con
fecha futura.

`dynamicParams` está en `false` en la página de entrada: una entrada aún no
publicada devuelve 404 aunque alguien acierte la URL.

Para adelantar o atrasar una entrada, se cambia su `date`. Para publicar fuera
de calendario, se lanza el workflow a mano desde la pestaña Actions
(`workflow_dispatch`).
