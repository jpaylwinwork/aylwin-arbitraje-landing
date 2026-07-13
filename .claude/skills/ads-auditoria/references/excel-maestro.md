# Excel Maestro de Leads de Ads (LEADS_ADS.xlsx)

Es el CRM mínimo del sistema y la fuente de verdad para las conversiones offline. Sin este archivo al día, Google Ads optimiza a ciegas hacia clics baratos en vez de mandatos firmados. Se crea con `scripts/crear_excel_maestro.py` y vive en la carpeta de trabajo que indique MAF.

## Hoja "Leads" — columnas

| Columna | Contenido |
|---|---|
| N | Correlativo |
| Fecha_Lead | Fecha/hora del primer contacto |
| Canal | WhatsApp / Formulario / Llamada |
| Campana / Grupo / Keyword | Origen en Google Ads (del término de búsqueda si se conoce) |
| Click_ID | GCLID, WBRAID o GBRAID capturado por la landing (viene en el mensaje de WhatsApp como "Ref:") |
| Nombre / Empresa / Telefono / Email | Datos del contacto |
| Materia | Arbitraje / Reclamo de ilegalidad / Otra |
| Resumen | Consulta en 1-2 líneas |
| Estado | 1.Lead nuevo → 2.Calificado → 3.Reunión realizada → 4.Propuesta enviada → 5.Contratado / 0.Descartado |
| Fecha_Estado | Fecha del último cambio de estado |
| Honorario_UF | Honorario propuesto o contratado (UF) |
| Valor_Conversion_CLP | Valor a reportar a Google (ver regla abajo) |
| Notas | Libre |

## Hoja "Config"

Nombres exactos de las acciones de conversión en Google Ads (deben coincidir carácter por carácter con la interfaz): `Lead_WhatsApp`, `Lead_Formulario`, `Reunion_Calificada`, `Propuesta_Enviada`, `Caso_Contratado`. Además: zona horaria (`America/Santiago`), moneda (`CLP`), valor UF de referencia y valores por etapa.

## Regla de valores de conversión

Google necesita valores relativos coherentes, no cifras exactas: `Reunion_Calificada` = valor bajo fijo (ej. CLP 50.000), `Propuesta_Enviada` = ~10% del honorario propuesto en CLP, `Caso_Contratado` = honorario total estimado en CLP. Lo que importa es el orden de magnitud entre etapas para que el algoritmo aprenda qué clics valen más.

## Flujo operativo

1. Llega lead por WhatsApp/formulario → MAF (o el skill, si recibe el pantallazo/texto) agrega fila con el Click_ID del mensaje.
2. Cada cambio de estado se registra con fecha.
3. Semanalmente, `scripts/generar_csv_conversiones.py` produce el CSV de importación de conversiones offline para subir a Google Ads (Objetivos → Conversiones → Subidas). El clic debe tener menos de 90 días.
4. Si un lead llegó sin Click_ID (escribió directo, borró el Ref), registrarlo igual con Click_ID vacío: sirve para métricas internas aunque no se pueda importar a Google.
