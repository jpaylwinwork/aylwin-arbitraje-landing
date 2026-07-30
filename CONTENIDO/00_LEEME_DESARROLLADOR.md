# Léeme — guía para el desarrollador web

Este paquete define el contenido de **dos sitios distintos** sobre arbitraje inmobiliario y de construcción en Chile. Es solo contenido y especificación: no hay código todavía. Tú lo construyes.

---

## Qué contiene cada archivo

**`01_ESTRATEGIA_Y_DECISIONES.md`** — No es para maquetar. Es el porqué de todo: a quién le habla cada sitio, qué datos lo sustentan (Reporte CAM 2025), las dos vías de servicio y qué decisiones ya están cerradas. Léelo primero una vez para entender el proyecto; no sale nada de aquí a la pantalla.

**`02_WEB_SEO.md`** — El **sitio indexable** (visible en Google). Contenido completo, página por página: una portada/hub, una página de estadísticas, dos pilares (inmobiliario y construcción), doce satélites, una FAQ, "Cómo trabajo", "Quién soy" y "Contacto". Es un sitio de varias páginas, pensado para posicionamiento. Optimización lenta, muchas páginas enlazadas entre sí.

**`03_LANDING_ADS.md`** — La **landing de Google Ads** (una sola página, no indexable, `noindex`). Estructura de embudo en 10 secciones con un único objetivo: que el visitante complete el formulario. Sin menú, sin enlaces de salida.

Los dos sitios comparten voz e imagen pero son independientes y **no se enlazan entre sí** (salvo que la web SEO puede apuntar a la landing desde sus CTA; nunca al revés).

---

## Cómo se relacionan

```
01 (estrategia)  →  fundamenta y no se publica
       │
       ├─→ 02_WEB_SEO.md      → sitio multipágina indexable
       └─→ 03_LANDING_ADS.md  → página única de campaña (noindex)
```

Dentro de `02`, la arquitectura de páginas y su enlazado interno está dibujada al inicio del archivo, en el bloque **"Arquitectura del sitio"** (un diagrama de árbol). Cada página trae su URL sugerida, su `title`, su `meta` y su palabra clave. Respeta esas URLs y ese enlazado: son la estructura SEO.

Dentro de `03`, la **tabla "Estructura del embudo"** al inicio lista las 10 secciones en orden. Constrúyelas en ese orden exacto; el orden es funcional, no estético.

---

## Dónde están las instrucciones de diseño (para Claude Design o para ti)

Las recomendaciones visuales están **incrustadas junto al contenido al que aplican**, no en un archivo aparte. Aparecen en tres formatos, siempre como cita (líneas que empiezan con `>`) o en cursiva entre corchetes:

1. **Bloque grande de dirección de arte.** Al inicio de `03` hay una sección **"Nota de dirección de arte (ejecutable por Claude Design)"** con paleta, tipografía, prohibiciones, comportamiento móvil y objetivos de velocidad. Es la especificación visual maestra de la landing. En `02` el equivalente es la **"Nota de diseño"** que sigue al bloque de arquitectura.

2. **Notas de diseño locales**, sección por sección. Verás recuadros así:
   > **Nota de diseño.** …
   
   Indican cómo maquetar ese bloque puntual (tamaños de titular, si lleva o no iconos, ritmo vertical, etc.).

3. **Acotaciones en línea**, en cursiva y entre corchetes, dentro del propio texto:
   *[FOTO — retrato profesional, fondo neutro…]* · *[Sin menú. Solo el nombre en texto.]*
   
   Marcan dónde va una imagen, un botón o una ausencia deliberada.

Además hay **"Notas de copy"** (también en `>`): esas explican por qué el texto dice lo que dice. No son instrucciones de diseño; son para que no "mejores" el copy sin querer. Puedes ignorarlas al maquetar, pero no contradigas lo que piden.

**Regla práctica:** todo lo que va dentro de `>` o en *[cursiva entre corchetes]* es instrucción para ti (diseño, copy o montaje). Todo lo demás es contenido publicable que va tal cual a la pantalla.

---

## Marcadores que faltan por completar

Verás campos entre corchetes en mayúsculas: `[DOMINIO]`, `[AÑOS]`, `[FOTO]`, `[CUPOS]`, `[PRECIO VÍA ACOTADA]`, `[URL ESTUDIO]`, `[TELÉFONO]`, `[CASO 1]`, etc. Son datos que el cliente entrega antes de publicar. No los inventes: déjalos como placeholder visible si aún no llegan.

---

## Notas técnicas que sí debes implementar

- `02`: marcado structured data (`FAQPage`, `Article`, `Dataset`, `Person`) — indicado en cada página.
- `02`: enlace seguido a Aylwin Matta solo en "Quién soy"; en el resto, el estudio en texto plano.
- `03`: `noindex, nofollow`; captura de `GCLID`/`WBRAID` en cookie de primera parte y envío como campo oculto del formulario (para conversiones offline de Google Ads); página de gracias con URL propia; alerta inmediata al recibir un formulario.
- Ambos: sin librerías pesadas, móvil primero, la landing con objetivo de carga bajo 2 s.
