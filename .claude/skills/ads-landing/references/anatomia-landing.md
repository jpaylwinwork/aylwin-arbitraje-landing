# Anatomía de la Landing Page Legal de Alta Conversión

Principio: concentración absoluta. El visitante llegó pagando CPC alto con un conflicto real; la página tiene una alternativa binaria — iniciar contacto confidencial o irse. Todo lo que distraiga de eso sobra.

## Estructura (orden vertical)

1. **Hero (above the fold, prueba de los 8 segundos).** Debe responder de inmediato: qué materia exacta (arbitraje / reclamo de ilegalidad), en qué jurisdicción, cómo pedir la revisión confidencial del caso, y en cuánto tiempo respondemos. Nada de "excelencia profesional al servicio de sus necesidades". H1 con el problema del visitante, no con el nombre del estudio. CTA de WhatsApp visible sin scroll + tiempo de respuesta comprometido (solo si MAF puede cumplirlo — preguntar).
2. **Línea de descarte.** Una frase que diga para quién NO es el servicio (ej. "No tramitamos causas de familia, laborales ni deudas personales"). Filtra consultas no calificadas y ahorra tiempo del estudio.
3. **Cómo trabajamos (3 pasos).** Contacto confidencial → reunión de diagnóstico → propuesta con honorarios claros. Reduce la incertidumbre del proceso, el mayor freno del decisor.
4. **Experiencia (abstracción fáctica).** Casos anonimizados por tipo: materia, industria, tipo de disputa, resultado procesal descriptivo sin promesa ("representamos a contratista en arbitraje CAM por término anticipado de contrato de obra"). Solo hechos que MAF confirme. Credenciales verificables (nóminas, publicaciones, docencia).
5. **Quién responde.** Foto y bio breve de MAF: el decisor quiere saber qué abogado tomará su caso, no conocer una marca. Atención directa del socio = ventaja boutique frente a firmas grandes; decirlo.
6. **Confidencialidad.** Bloque explícito: la consulta es confidencial desde el primer contacto (deber profesional del abogado), no constituye aún patrocinio, y los datos solo se usan para evaluar el caso.
7. **FAQ (3-5 objeciones).** Cuánto cuesta la reunión de diagnóstico, cuánto demora un arbitraje/reclamo (rangos honestos con "depende de..."), qué pasa si el caso no es viable (se dice de frente), plazos legales si aplican (con norma citada + "Verificar vigencia/texto exacto" en el proceso interno, sin la advertencia en el texto publicado — ahí la norma debe ir ya verificada por MAF).
8. **CTA final + formulario corto** (fallback del WhatsApp): nombre, empresa, email, teléfono, campo libre "describa su conflicto". Dos etapas si se pide más: nunca más de 5 campos en el primer paso.

## Lo que NO lleva

Menú de navegación, enlaces a redes sociales, footer complejo, sliders, pop-ups, chatbots genéricos, logos de clientes (restricción deontológica salvo autorización), contadores de urgencia artificial.

## Dos variantes de tono según grupo de anuncios

- **Empresa mediana / dueño:** lenguaje de problema y consecuencia comercial (continuidad del negocio, riesgo patrimonial, control de costos). Sin jerga procesal.
- **Gerencia legal / fiscal:** lenguaje técnico (sede arbitral, cláusula compromisoria, procedimiento abreviado CAM, art. 151 LOC). Credenciales procesales al frente.
Si el presupuesto solo permite una landing por materia, escribir para empresa mediana (prioridad de MAF) con una sección técnica breve que no espante al no abogado.

## Requisitos técnicos

- Un solo archivo HTML autocontenido (CSS y JS inline), sin dependencias externas salvo fuentes del sistema. Objetivo: PageSpeed >95, carga <2s en móvil.
- Mobile-first: la mayoría de los clics de ads llegan por celular.
- Accesibilidad: contraste alto en CTAs, labels en todos los campos, navegable por teclado.
- Captura de Click ID y puente a WhatsApp: usar el mecanismo del template (assets/landing-template.html). El botón de WhatsApp debe regenerar su href en el momento del clic para incluir el Ref.
- Velocidad de respuesta: responder en <5 minutos multiplica la conversión. Recomendar a MAF activar notificaciones del WhatsApp corporativo antes de encender la campaña.
