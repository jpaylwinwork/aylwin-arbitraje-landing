---
name: ads-landing
description: >-
  Genera landing pages HTML completas y publicables para las campañas de Google Ads de Aylwin
  Matta Abogados (arbitraje, reclamos de ilegalidad u otra materia), con copy de conversión,
  captura de GCLID/WBRAID en cookie de primera parte, CTA de WhatsApp con código de referencia
  para el tracking offline, formulario de respaldo y checkpoint ético CEP 2011. Usar siempre que
  MAF diga "crear landing", "página de aterrizaje", "página para la campaña", "landing de
  arbitraje", "página de destino", "mejorar la landing", "revisar la landing", o cuando otra
  tarea de ads requiera una página de destino que aún no existe. También para redactar o corregir
  solo el copy de una landing existente.
---

# ads-landing — Landing pages de conversión de Aylwin Matta

Objetivo: que el clic pagado no se pierda. Una landing por materia (y por variante de audiencia cuando haya presupuesto), enfocada en una sola acción: iniciar contacto confidencial por WhatsApp, con formulario como respaldo. Produce un archivo HTML autocontenido listo para subir a un subdominio (ej. arbitraje.aylwin.cl) o a un servicio de hosting estático.

## Reglas operativas

1. **Cero alucinación — la regla más importante de este skill.** El copy de una landing legal contiene afirmaciones de hecho (experiencia, casos, credenciales, plazos legales). NADA de eso se inventa. Antes de redactar, entrevistar a MAF con lista numerada (ver Paso 1). Todo caso, cifra o credencial que no haya confirmado MAF queda fuera o marcado como [PENDIENTE: confirmar].
2. **Normas citadas en la página** (ej. plazo del reclamo de ilegalidad): deben ir verificadas por MAF antes de publicar. En borradores, marcarlas con "Verificar vigencia/texto exacto".
3. **Léxico prohibido:** potenciar, empoderar, sinergia, disruptivo, transformador, ecosistema, "alto impacto", invaluable, crucial, meticuloso, robusto, versátil, "sin costuras", "en el panorama actual". El tono es directo, sobrio y concreto — así reconoce un decisor a un abogado serio.
4. Al terminar: "¿Deseas que profundice en algún punto o modifique el enfoque?".

## Flujo

### Paso 1 — Entrevista mínima (no redactar antes de tener esto)
Preguntar en una sola lista numerada: (1) materia y audiencia principal (empresa mediana / gerencia legal); (2) número de WhatsApp corporativo (solo dígitos con código país); (3) compromiso de tiempo de respuesta que MAF puede cumplir de verdad; (4) 2-4 casos o tipos de asuntos reales para la sección de experiencia (anonimizados); (5) credenciales verificables de MAF y del estudio; (6) qué materias NO tramita el estudio (línea de descarte); (7) destino del formulario (servicio tipo Formspree/endpoint propio; si no hay, la landing sale solo con WhatsApp y se deja el formulario comentado); (8) dónde se publicará (subdominio, hosting).

### Paso 2 — Estructura y copy
Leer `references/anatomia-landing.md` y redactar sección por sección siguiendo su orden y sus dos variantes de tono. El H1 nombra el problema del visitante, no al estudio. Coherencia anuncio→landing: pedir a MAF (o al skill ads-campana) los títulos de los anuncios del grupo que apuntará aquí y usar el mismo lenguaje.

### Paso 3 — Construcción del HTML
Tomar `assets/landing-template.html` y reemplazar TODOS los placeholders `{{...}}`. El template ya trae: CSS inline mobile-first, captura de gclid/wbraid/gbraid con cookie de primera parte (90 días), botones WhatsApp que inyectan "Ref: <click_id>" en el mensaje prellenado, campo oculto click_id en el formulario, botón sticky móvil y bloque de confidencialidad. No quitar el script de captura ni el bloque de confidencialidad. Verificar que no quede ningún placeholder sin reemplazar.

### Paso 4 — Checkpoint ético (obligatorio)
Pasar toda la página por `references/etica-cep2011.md`, con atención a: promesas de resultado, superlativos, casos sin anonimizar, urgencia artificial. Reportar en ≤5 líneas.

### Paso 5 — Control de calidad técnico
Revisar: HTML válido y autocontenido (sin recursos externos), todos los `{{placeholders}}` reemplazados, número de WhatsApp correcto en el JS, labels en todos los campos, contraste de CTAs, meta noindex (la landing no debe competir con aylwin.cl en orgánico; quitarlo solo si MAF lo pide). Abrir mentalmente en móvil: ¿CTA visible sin scroll?

### Paso 6 — Entrega
Guardar el HTML en la carpeta de trabajo con nombre descriptivo (ej. `landing-arbitraje-v1.html`) y entregar junto a: instrucciones breves de publicación según el hosting elegido, recordatorio de probar el flujo completo (clic con `?gclid=TEST123` → verificar que el WhatsApp llegue con "Ref: gclid:TEST123") y de registrar ese número en el Excel maestro. Si la campaña ya existe, avisar que la URL final debe actualizarse en los anuncios.

## Revisión de landing existente
Si MAF pide revisar una landing ya publicada: pedir el HTML o la URL, auditarla contra `references/anatomia-landing.md` y el checkpoint ético, y entregar hallazgos priorizados por impacto en conversión. Preguntar formato antes de generar redlines o versión corregida.
