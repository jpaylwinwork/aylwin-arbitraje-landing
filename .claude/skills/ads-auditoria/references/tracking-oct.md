# Tracking y Conversiones Offline (OCT) — el corazón del sistema

## Por qué existe esto

Si Google solo ve "mensajes de WhatsApp enviados" o "formularios completados", optimizará hacia quien llena formularios: estudiantes, curiosos, microempresas sin capacidad de pago. El OCT (Offline Conversion Tracking) le enseña al algoritmo qué clics terminaron en reunión, propuesta y mandato firmado, para que puje por usuarios parecidos a los que realmente contratan. A presupuesto bajo, cada peso mal optimizado duele el doble.

## Embudo de conversiones (nombres exactos, hoja Config del Excel maestro)

| Acción | Tipo | Registro |
|---|---|---|
| Lead_WhatsApp | Online (clic en CTA WhatsApp de la landing) | Etiqueta/GTM |
| Lead_Formulario | Online (envío de formulario) | Etiqueta/GTM |
| Reunion_Calificada | Offline (importación) | Excel maestro |
| Propuesta_Enviada | Offline (importación) | Excel maestro |
| Caso_Contratado | Offline (importación, conversión PRINCIPAL) | Excel maestro |

Marcar como "principal" para pujas: al inicio Lead_WhatsApp/Lead_Formulario (únicas con volumen); cuando existan ≥15-30 conversiones offline importadas, cambiar la principal a Reunion_Calificada o Caso_Contratado.

## Captura del Click ID

1. Auto-tagging activo → Google agrega `gclid` (y en tráfico iOS los parámetros probabilísticos `gbraid`/`wbraid`) a la URL de la landing.
2. La landing (ver skill ads-landing) guarda el parámetro en cookie de primera parte (90 días, dominio propio) para sobrevivir sesiones múltiples del decisor.
3. **Puente WhatsApp:** el botón de WhatsApp arma el mensaje prellenado incluyendo el identificador al final: "…Ref: <click_id>". El lead lo envía sin editarlo (va al final, discreto). MAF copia ese Ref a la columna Click_ID del Excel maestro. Sin backend ni CRM, este es el mecanismo más robusto disponible.
4. Formulario: campo oculto que se rellena con la cookie.

## Importación semanal a Google Ads

`scripts/generar_csv_conversiones.py` lee el Excel maestro y genera el CSV con el formato de importación de Google Ads (encabezado `Parameters:TimeZone=America/Santiago`; columnas Google Click ID, Conversion Name, Conversion Time, Conversion Value, Conversion Currency). Antes de la primera importación, descargar la plantilla vigente desde la interfaz (Objetivos → Conversiones → Subidas) y confirmar que las columnas coinciden — Google la cambia ocasionalmente (**verificar plantilla vigente**).

Reglas: el clic debe tener <90 días; esperar ≥6 horas desde el clic antes de importar; la hora de conversión debe ser posterior al clic; los nombres de conversión deben coincidir exactamente con los creados en la interfaz.

## Escalamiento futuro (documentar, no implementar aún)

Conversiones Mejoradas para Clientes Potenciales (email/teléfono hasheados) reducen la dependencia del GCLID en iOS; requieren consentimiento y configuración adicional. Proponerlas cuando el volumen justifique la complejidad.
