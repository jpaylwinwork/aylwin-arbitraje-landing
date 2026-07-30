# Activo A — Web visible a buscadores

**Materia:** arbitraje y conflictos en contratos inmobiliarios y de construcción en Chile.
**Audiencia:** socios y gerentes de inmobiliarias y constructoras que buscan información sobre un conflicto y podrían consultar.
**Función:** autoridad. No vende; demuestra.

> **Regla que gobierna todo este archivo:** cada página debe dejar al lector sabiendo algo que no sabía al entrar, aunque nunca te contrate. Es el único contenido que rankea y el único que hace que un gerente piense *"este tipo sabe más que el que me está cobrando"*. Contenido que solo se promociona a sí mismo no consigue ni lo uno ni lo otro.

**Base de datos del sitio:** Reporte Anual CAM Santiago 2025. Inmobiliario 34,2% y construcción/infraestructura 20,9% de las solicitudes de arbitraje: juntos, 55,1% del mercado. La estructura son dos pilares, una página de estadísticas —el activo más enlazable del sitio— y doce satélites.

---

## Arquitectura del sitio

```
Inicio (hub: el problema, las dos ramas, la metodología)
│
├── Estadísticas del arbitraje en Chile      ← activo de enlaces y citas de IA
│
├── PILAR A — Arbitraje en conflictos inmobiliarios
│   ├── Promesas de compraventa y ventas en verde
│   ├── Vicios de construcción: responsabilidad del vendedor
│   ├── Compra de terrenos sujeta a permiso: qué pasa si no sale
│   └── Conflictos entre socios de un proyecto inmobiliario
│
├── PILAR B — Arbitraje en contratos de construcción
│   ├── Cláusula arbitral: cómo redactarla y los errores que se pagan caros
│   ├── Árbitro de derecho, arbitrador o mixto: cuál conviene
│   ├── Estados de pago retenidos: cómo se cobran
│   ├── Obras extraordinarias y mayores costos: cómo se prueban
│   ├── Dispute Boards: qué son y cuándo instalarlos
│   ├── Arbitraje de emergencia: cómo parar el daño en días
│   ├── Cuánto cuesta y cuánto dura un arbitraje
│   └── Los primeros 30 días de un conflicto de obra
│
├── Preguntas frecuentes   (bloque optimizado para respuestas de IA)
├── Cómo trabajo           (las dos vías de servicio)
├── Quién soy
└── Contacto
```

**Enlazado interno:** cada satélite enlaza a su pilar con texto de enlace variado. Los pilares enlazan a sus satélites y entre sí. Cuatro satélites son transversales y deben enlazarse desde ambos pilares: cláusula arbitral, tipos de árbitro, costos y plazos, y primeros 30 días.

**Nota de diseño (ejecutable):** sitio de texto. Tipografía serif para el cuerpo, 19-20 px, ancho de columna de 65-75 caracteres, interlineado 1.7. Sin fotografías de archivo de manos estrechándose, martillos de juez ni edificios de vidrio. Fondo blanco o hueso, texto casi negro. Un solo color de acento, sobrio, para enlaces y CTA. La única fotografía del sitio es el retrato de MAF en "Quién soy". La sobriedad visual es parte del argumento: un sitio que no grita se lee como un sitio que no necesita gritar.

---
---

# INICIO — Hub

**URL:** `/`
**Title:** Arbitraje inmobiliario y de construcción en Chile — Miguel Aylwin
**Meta:** Cómo se resuelven los conflictos de contratos inmobiliarios y de construcción en Chile: arbitraje, cláusulas, cuantías, costos y qué hacer cuando el conflicto recién empieza.

---

## Conflictos inmobiliarios y de construcción

### Cómo se resuelven en Chile, cuánto cuestan y qué conviene hacer antes de decidir

Más de la mitad de los arbitrajes que administra el Centro de Arbitraje y Mediación de la Cámara de Comercio de Santiago corresponde a conflictos inmobiliarios y de construcción: 34,2% y 20,9% respectivamente de las 489 solicitudes ingresadas en 2025.

Casi nadie lee la cláusula arbitral al firmar. Se lee después, cuando el conflicto ya está instalado, y ahí se descubre que esas dos líneas —redactadas por alguien que no pensaba en este momento— determinan quién resuelve, con qué reglas, en cuánto tiempo y a qué costo.

Este sitio explica cómo funciona ese sistema. No es un folleto. Está escrito para que un socio o gerente pueda entender su propia situación antes de sentarse con un abogado, y para que esa conversación sea más útil.

**→ [Si tu conflicto es de un contrato de construcción o de obra]**
**→ [Si tu conflicto es inmobiliario: promesas, vicios, terrenos, socios]**
**→ [Si quieres saber cuánto cuesta y cuánto dura un arbitraje]**
**→ [Si el conflicto acaba de empezar y no sabes qué hacer primero]**

---

### Lo que estos conflictos tienen en común

**La prueba se construye antes del juicio, no durante.** El libro de obra, las actas, los correos con la inspección técnica, los estados de pago con sus observaciones, las adendas, las órdenes de cambio: eso es el expediente. Cuando el conflicto estalla, ese material ya está escrito y no se puede mejorar. La mayoría de estos casos se ganan o se pierden mucho antes de que exista una demanda.

**Los problemas rara vez vienen solos.** Un retraso, un estado de pago rechazado y una observación técnica suelen presentarse como tres conflictos y ser uno solo con tres manifestaciones: una fricción con la inspección técnica, un desorden documental en los cobros, un cambio de proyecto que nunca se formalizó. Tratarlos por separado es tratar el síntoma.

**El tiempo tiene precio.** En negocios intensivos en capital, donde la utilidad de un proyecto pende de un margen estrecho, un conflicto prolongado inmoviliza capital de trabajo, condiciona el acceso a nuevos proyectos y compromete boletas de garantía. Un resultado favorable que llega tarde puede ser, en términos de negocio, indistinguible de una derrota.

---

### Antes de decidir nada: el análisis

Esta es la metodología con la que trabajo. La publico porque el orden importa más que la técnica: la mayoría de los errores caros en estos conflictos no vienen de una mala decisión, sino de haber decidido antes de saber.

**1. Cuál es el problema de verdad.** Identificar el origen real. Con frecuencia, controversias que aparentan ser múltiples y aisladas provienen de un mismo origen: un problema de interpretación contractual, un cambio de proyecto que nunca se formalizó, un desorden documental, una fricción de gobernanza.

**2. Si es puntual o va a repetirse.** Un problema recurrente requiere solución de fondo. Un acuerdo que solo cierra el episodio de hoy asegura el conflicto de mañana en peores condiciones. Esto además fija el margen real de negociación.

**3. Posiciones e intereses de ambas partes.** Las posiciones son rígidas —"esto estaba en el proyecto" frente a "esto era extraordinario"—. Los intereses casi nunca: no subir el costo, no detener el avance, no sentar precedente, cerrar antes del cierre del ejercicio. En los intereses aparecen las salidas que en las posiciones no existen.

**4. Fortalezas y debilidades, sin sesgo.** Revisión de contrato, adendas, comunicaciones, libro de obra, estados de pago y actas, analizados con el mismo rigor a favor y en contra. Es la etapa donde más se falla, porque quien lleva meses dentro de la discusión ya no puede ver los antecedentes con objetividad.

**5. Perjuicios y costos.** No cuánto cuesta arreglar el problema, sino cuánto cuesta mantener la posición frente a cuánto cuesta cederla. Una multa acotada y una terminación anticipada de contrato no admiten el mismo cálculo.

**6. Negociar o litigar.** Recién acá, con los argumentos sólidos identificados, los cuestionables acotados y una ruta con costo estimado.

**7. Si se negocia, se negocia preparado.** Lo que se dice en una negociación puede perjudicar irremediablemente la posición posterior. Hecha con orden, puede dejar constituida prueba favorable.

**8. Si se litiga, la demanda es el final del trabajo.** El peor error es demandar esperando acreditar después lo que se afirmó al inicio. Peritajes, centros de costo, orden documental y testigos se definen antes de escribir.

**Nadie puede garantizar el resultado de un juicio.** La historia judicial está llena de casos que se creían ganados y terminaron perdiéndose, con excusas sobre el juez o sobre la contraparte. Lo que sí puede conseguirse es que el resultado esté dentro de lo previsto, y que las decisiones se hayan tomado sabiendo lo que estaba en juego.

→ [Cómo trabajo] · [Quién soy] · [Contacto]

---
---

# PÁGINA — Estadísticas del arbitraje en Chile

**URL:** `/estadisticas-arbitraje-chile`
**Title:** Estadísticas del arbitraje en Chile: materias y cuantías (CAM Santiago)
**Meta:** Qué materias concentran el arbitraje en Chile y cuáles son las cuantías reales de las causas, según la Memoria del CAM Santiago.
**Keyword:** estadísticas arbitraje Chile · cuantía arbitraje CAM

> **Por qué esta página existe.** Es el contenido más enlazable y más citable por sistemas de IA de todo el sitio: nadie publica una versión legible del Reporte del CAM. Funciona además como prueba de autoridad sin necesidad de hablar de uno mismo. Debe actualizarse cada año.
>
> **Fuente:** Reporte Anual 2025 del CAM Santiago. Los números absolutos priman sobre los porcentajes del reporte en los tres puntos donde este es internamente inconsistente (señalados abajo como notas de fuente).

---

## Cuánto y qué se arbitra en Chile

Datos del Reporte Anual 2025 del CAM Santiago, correspondientes al período del 1 de enero al 31 de diciembre de 2025.

### Volumen

**489 solicitudes de arbitraje** ingresadas en 2025:

| Tipo | Solicitudes |
|---|---|
| Arbitraje Nacional | 451 |
| Arbitraje de Emergencia | 27 |
| Arbitraje Internacional | 11 |

En el mismo período ingresaron 98 solicitudes de mediación.

### Qué materias se arbitran

| Materia | Solicitudes | % |
|---|---|---|
| Inmobiliario | 151 | 34,2% |
| Construcción / Infraestructura | 92 | 20,9% |
| Sociedades comerciales | 39 | 8,8% |
| Energía | 39 | 8,8% |
| Servicios profesionales | 17 | 3,9% |
| Minería | 16 | 3,6% |
| Agropecuario | 16 | 3,6% |
| Alimentos | 16 | 3,6% |
| Telecomunicaciones y TI | 13 | 2,9% |
| Bancario y financiero | 13 | 2,9% |
| Servicios logísticos | 11 | 2,5% |
| Seguros | 9 | 2,0% |
| Salud | 9 | 2,0% |

**Más de la mitad del arbitraje chileno —el 55,1%— es inmobiliario o de construcción.** Ninguna otra materia se acerca.

### En qué contratos estaba la cláusula arbitral

| Contrato | N° | % |
|---|---|---|
| Compraventa | 101 | 18,5% |
| Prestación de servicios | 89 | 16,3% |
| Contrato de construcción | 76 | 13,9% |
| Promesa de compraventa | 74 | 13,5% |
| Arrendamiento | 48 | 8,8% |
| Leasing | 29 | 5,3% |
| Compraventa de acciones | 22 | 4,0% |
| Constitución de sociedad | 20 | 3,7% |
| Contrato de suministro | 18 | 3,3% |
| Franquicia | 10 | 1,8% |

### Cuánto se disputa

De las 443 causas iniciadas en 2025, **286 tenían cuantía determinada (65%)** y **157 indeterminada (35%)**.

El reporte separa según la nómina del árbitro designado, y esa separación muestra dos mercados distintos:

| Tramo UF | Nómina General | Árbitro Joven | Total | % | Acumulado |
|---|---|---|---|---|---|
| 0 – 500 | 10 | 20 | 30 | 10,6% | 10,6% |
| 501 – 1.100 | 20 | 15 | 35 | 12,3% | 22,9% |
| 1.101 – 8.000 | 43 | 48 | 91 | 32,0% | 54,9% |
| 8.001 – 25.000 | 63 | 2 | 65 | 22,9% | 77,8% |
| 25.001 – 65.000 | 29 | — | 29 | 10,2% | 88,0% |
| 65.001 – 150.000 | 12 | — | 12 | 4,2% | 92,3% |
| 150.001 – 350.000 | 11 | — | 11 | 3,9% | 96,1% |
| 350.001 y más | 11 | — | 11 | 3,9% | 100% |

*(Los tramos informados suman 284 causas.)*

**Hay dos circuitos y conviene saber en cuál cae tu caso.** Los Árbitros Jóvenes del CAM concentran las causas medianas: el 55% de las suyas está entre 1.101 y 8.000 UF, y prácticamente ninguna supera las 25.000. Los árbitros de nómina general llevan las grandes: el 68% de sus causas supera las 8.000 UF y su tramo más frecuente es el de 8.001 a 25.000.

En conjunto: **55% de las causas disputa menos de 8.000 UF y 45% más de esa cifra.** Un 22% supera las 25.000 UF.

### Qué tipo de árbitro se designa

| Calidad | N° | % |
|---|---|---|
| Mixto | 264 | 58,5% |
| Arbitrador | 187 | 41,5% |
| De derecho | 0 | 0% |

**Nadie designa árbitros de derecho.** El mercado chileno eligió, sin excepción registrada en 2025, procedimientos flexibles: mixtos cuando quiere que el fallo se someta a la ley, arbitradores cuando prefiere equidad. Entre los árbitros de nómina general la preferencia por el mixto es más marcada (61%) que entre los jóvenes (51,8%).

### Quién elige al árbitro

De 435 causas informadas, **248 (57%) contemplaban la designación de común acuerdo**, por cláusula o voluntariamente. Pero solo 90 (20,7%) terminaron designando de ese modo: en las otras 345 (79,3%) designó el Consejo del CAM.

**Más de la mitad de las partes tiene derecho a elegir su árbitro y no lo ejerce.** Es, probablemente, la decisión de mayor impacto y menor costo que se deja pasar en el arbitraje chileno.

### Arbitraje de emergencia

27 solicitudes en 2025, un 13% más que en 2024.

| Industria | N° | % |
|---|---|---|
| Construcción | 14 | 51,8% |
| Inmobiliario | 4 | 14,8% |
| Energía | 2 | 7,4% |
| Bancario | 2 | 7,4% |

- **Resultado:** acogido 16 (59,3%), acogido parcialmente 4 (14,8%), rechazado 7 (25,9%).
- **Duración promedio: 5,4 días corridos** desde la aceptación y juramento del árbitro hasta la sentencia definitiva.
- Medida más pedida: prohibición de celebrar actos y contratos (14 casos, 40%), seguida de medidas innominadas (11) y retención de bienes (6).

**Construcción concentra más de la mitad de los arbitrajes de emergencia del país.** → [Arbitraje de emergencia: cómo parar el daño en días]

### Cómo terminan los arbitrajes

De 464 causas de Arbitraje Nacional terminadas en 2025:

| Tipo de cierre | % |
|---|---|
| Laudo arbitral | 47% |
| Acuerdo (avenimiento, conciliación o transacción) | 18% |
| Desistimiento | 11% |
| Orden de conclusión | 9% |
| Abandono | 7% |
| Acumulación | 4% |
| Retiro | 3% |
| Incompetencia | 1% |

**Solo el 47% de los arbitrajes llega a sentencia.** Más de la mitad termina antes, y casi uno de cada cinco por acuerdo entre las partes. Es el dato que más debería pesar al decidir si conviene entrar a un arbitraje y con qué expectativa.

### Qué se pide

Indemnización de perjuicios 31,5%, cumplimiento forzado 18,3%, resolución del contrato 14,2%, pago 8%, restitución 6,4%, cláusula penal 4%, multas 3,2%, cobro de rentas de arrendamiento 2,9%, interpretación de contrato 2,3%.

→ [Cuánto cuesta y cuánto dura un arbitraje] · [Cómo trabajo]

*Fuente: Reporte Anual 2025, Centro de Arbitraje y Mediación de la Cámara de Comercio de Santiago.*

> **Notas de fuente (resueltas).** El reporte del CAM tiene cuatro inconsistencias internas menores, ya resueltas en el contenido de esta página:
> - Los porcentajes del gráfico de tipos de arbitraje (93,4% nacional, 4,3% emergencia) no calzan con los absolutos: 451 sobre 489 es 92,2%. Se publican los absolutos —451, 27, 11—, no esos porcentajes.
> - El desglose de medidas prejudiciales del arbitraje de emergencia suma 28 sobre 27 solicitudes: una causa pidió más de una medida. No se presenta ese desglose como si sumara 27.
> - El absoluto de indemnización de perjuicios es 302, no 102 (en el mismo gráfico cumplimiento forzado marca 176 = 18,3%; con esa escala, 31,5% corresponde a ~302). Se publica el porcentaje, que es el dato robusto.
> - Los tramos de cuantía suman 284 y el reporte declara 286 determinadas: dos causas sin asignar en la fuente, sin efecto en las conclusiones.
>
> **Nota de diseño.** Tablas legibles, sin gráficos decorativos. Si se usa un gráfico, uno solo: barras horizontales de la distribución de cuantías, en el color de acento, sin animación. Citar la fuente al pie con enlace al reporte.

---
---

# PILAR A — Arbitraje en conflictos inmobiliarios

**URL:** `/arbitraje-inmobiliario-chile`
**Title:** Arbitraje en conflictos inmobiliarios en Chile: guía completa
**Meta:** Cómo se resuelven los conflictos inmobiliarios en Chile: promesas de compraventa, vicios de construcción, compra de terrenos y disputas entre socios de proyectos.
**Keyword:** arbitraje inmobiliario Chile
**Secundarias:** conflicto promesa de compraventa, vicios construcción responsabilidad vendedor, arbitraje CAM inmobiliario

---

## Arbitraje en conflictos inmobiliarios

### La materia más arbitrada de Chile, y la que peor se anticipa al firmar

El 34,2% de los arbitrajes del CAM Santiago corresponde a materias inmobiliarias: 151 solicitudes en 2025, el segmento más grande de todos. La promesa de compraventa es además el cuarto contrato más arbitrado del país, con 74 causas. Y sin embargo es donde las cláusulas de resolución de controversias se redactan con menos atención: se copian del contrato anterior, se aceptan como vienen del modelo, o se dejan para el final de la negociación.

---

### 1. Por qué el conflicto inmobiliario llega tarde

Un proyecto inmobiliario tiene una característica que lo distingue: **el conflicto suele aparecer cuando el negocio ya se ejecutó.** El terreno se compró, el edificio se construyó, las unidades se vendieron. Lo que se discute después es si lo que se hizo correspondía a lo que se pactó, y para entonces las decisiones que determinan el resultado ya se tomaron —muchas veces años antes, por personas que ya no están en la empresa.

Esto tiene una consecuencia práctica: en materia inmobiliaria, la calidad del expediente depende de disciplina documental sostenida durante todo el proyecto. Las promesas, adendas, actas de directorio, informes de due diligence, aprobaciones y recepciones son el caso. No hay forma de reconstruirlos después.

---

### 2. Las cuatro controversias que concentran la materia

**Promesas de compraventa y ventas en verde.** Incumplimiento del plazo de entrega, resciliación unilateral, cláusulas penales, devolución de anticipos, cambios en el proyecto respecto de lo ofrecido. Es la controversia de mayor volumen.
→ [Promesas de compraventa y ventas en verde]

**Vicios de construcción y responsabilidad del vendedor.** La inmobiliaria como demandada por compradores o por la comunidad. Discusión sobre el tipo de vicio, el plazo aplicable, quién responde entre vendedor, constructor y proyectistas, y qué acción de repetición existe.
→ [Vicios de construcción: responsabilidad del vendedor]

**Compraventa de terrenos con condiciones.** Compras sujetas a la obtención de permisos, cambio de uso de suelo, factibilidad sanitaria o resultados de due diligence. Qué pasa cuando la condición no se cumple, quién soportó el riesgo y qué se debe restituir.
→ [Compra de terrenos sujeta a permiso: qué pasa si no sale]

**Conflictos entre socios de un proyecto.** Sociedades de proyecto, joint ventures, pactos de accionistas: aportes no enterados, decisiones de aumento de capital, salida de un socio, valorización de la participación. Son las causas de cuantía indeterminada que más se ven.
→ [Conflictos entre socios de un proyecto inmobiliario]

---

### 3. La cláusula arbitral en contratos inmobiliarios

Las mismas cuatro decisiones que en construcción —quién administra, qué tipo de árbitro, cuántos árbitros, qué materias quedan sometidas— con dos particularidades propias:

**El problema de las partes múltiples.** Un proyecto inmobiliario involucra promesa, contrato de construcción, contratos con proyectistas, y a veces un pacto de accionistas. Si esos instrumentos tienen cláusulas de resolución distintas, un mismo hecho puede terminar discutiéndose en tres foros que no se comunican, con resultados potencialmente contradictorios y sin posibilidad de traer a todos los responsables a la misma mesa. Revisar la coherencia entre instrumentos vale más que perfeccionar cada cláusula por separado.

**Contratos con consumidores.** Cuando la contraparte es un comprador persona natural, la cláusula arbitral no opera igual que entre empresas: los derechos que la Ley 19.496 reconoce al consumidor son irrenunciables, y una cláusula que pretenda sustraer el conflicto de esa protección puede ser declarada abusiva. La jurisprudencia de la Corte Suprema ha invalidado cláusulas de este tipo en promesas de compraventa de viviendas. Es un terreno donde la vía arbitral no está asegurada, y conviene evaluarlo caso a caso.

→ [Cláusula arbitral: cómo redactarla y los errores que se pagan caros] · [Árbitro de derecho, arbitrador o mixto]

---

### 4. Costos, plazos y qué hacer si el conflicto empezó

→ [Cuánto cuesta y cuánto dura un arbitraje] · [Los primeros 30 días de un conflicto]

---
---

# SATÉLITE I-1 — Promesas de compraventa y ventas en verde

**URL:** `/promesa-compraventa-venta-en-verde-conflictos`
**Title:** Promesas de compraventa y ventas en verde: qué pasa cuando se incumplen
**Meta:** Incumplimiento del plazo de entrega, resciliación, cláusulas penales y devolución de anticipos en promesas de compraventa de unidades en verde.
**Keyword:** incumplimiento promesa de compraventa

### Contenido

**Apertura.** La venta en verde traslada un riesgo que casi nunca se conversa: el comprador paga contra un proyecto que todavía no existe, y la inmobiliaria se obliga a un plazo que depende de variables que no controla del todo. Cuando el plazo se corre, el conflicto no es sobre si hubo retraso —eso es un hecho— sino sobre qué se pactó que pasaría si lo había.

**Desarrollo:**

1. **Qué dice realmente la promesa sobre el plazo** — plazo de entrega frente a plazo de escrituración; causales de prórroga pactadas; caso fortuito y fuerza mayor; si la prórroga opera de pleno derecho o requiere aviso.
2. **La cláusula penal y sus límites** — función, compatibilidad con la indemnización de perjuicios, y reducción de la pena excesiva. El art. 1544 del Código Civil regula la cláusula penal enorme: cuando la obligación principal y la pena son cantidades determinadas, puede pedirse rebajar la pena en todo lo que exceda al duplo de la obligación principal. En obligaciones de valor inapreciable o indeterminado, la moderación queda a la prudencia del juez.
3. **Resciliación y desistimiento del comprador** — qué se devuelve, con qué descuentos, y cómo se documenta para que no se discuta después.
4. **Diferencias entre lo ofrecido y lo entregado** — planos, memoria de venta, materiales, superficies, prototipo. Qué integra el contrato y qué es publicidad. Aquí se define la mayoría de los casos.
5. **La documentación que decide** — promesa y sus adendas, avisos formales de prórroga, actas de entrega, correspondencia con el comprador, comprobantes de los hitos de pago.
6. **Qué hacer si eres la inmobiliaria y ves venir el retraso** — cuatro medidas de documentación y comunicación anticipada que valen más que cualquier defensa posterior.

---

# SATÉLITE I-2 — Vicios de construcción

**URL:** `/vicios-construccion-responsabilidad-vendedor`
**Title:** Vicios de construcción: quién responde y por cuánto tiempo
**Meta:** Responsabilidad del vendedor por vicios de construcción, plazos aplicables, y cómo se distribuye la responsabilidad entre inmobiliaria, constructora y proyectistas.
**Keyword:** vicios de construcción responsabilidad

### Contenido

**Apertura.** Cuando aparece una filtración en un edificio de tres años, la primera pregunta no es técnica sino de reparto: quién responde frente al comprador, y contra quién puede repetir el que respondió. La respuesta rara vez está en un solo contrato.

**Desarrollo:**

1. **La estructura de responsabilidad** — el art. 18 de la Ley General de Urbanismo y Construcciones radica la responsabilidad frente al comprador en el propietario primer vendedor, con carácter objetivo: responde con independencia de quién causó el daño, y luego repite contra constructor y proyectistas según su participación. La virtud para el comprador es que no necesita identificar ni demandar a todos los intervinientes.
2. **Los plazos según el tipo de falla** — 10 años para fallas que afecten la estructura soportante; 5 años para fallas de elementos constructivos o instalaciones; 3 años para terminaciones; y 5 años como plazo residual para lo no clasificado. Se cuentan desde la recepción definitiva de la obra por la Dirección de Obras Municipales, y ese punto de partida es un frente de discusión propio.
3. **Vicio, defecto y desgaste** — la distinción decide casos. Falta de mantención, uso inadecuado y modificaciones posteriores de los propietarios son defensas frecuentes y frecuentemente mal documentadas.
4. **La acción de repetición contra la constructora** — cómo se prepara desde antes: qué cláusulas del contrato de construcción, qué garantías, qué seguros y qué retenciones la hacen efectiva en vez de teórica.
5. **Cuando demanda la comunidad** — particularidades de la acción colectiva, representación, y por qué la respuesta técnica temprana suele ser más barata que la defensa.
6. **El peritaje** — es la prueba principal. Quién lo pide, cuándo conviene anticiparlo, y por qué un informe técnico propio elaborado antes de la demanda cambia la posición negociadora.

---

# SATÉLITE I-3 — Compra de terrenos sujeta a permiso

**URL:** `/compra-terreno-sujeta-permiso-condicion`
**Title:** Compra de terrenos sujeta a permiso: qué pasa si no sale
**Meta:** Condiciones suspensivas en compraventa de terrenos para proyectos inmobiliarios: permisos, factibilidad, due diligence y quién soporta el riesgo.
**Keyword:** compraventa terreno condición suspensiva permiso

### Contenido

**Apertura.** Casi ninguna compra de terreno para desarrollo es pura y simple. Se compra sujeto a que salga el permiso, a que la factibilidad sanitaria esté, a que el informe de título no arroje sorpresas. La cláusula que describe esa condición suele ocupar un párrafo y decidir millones.

**Desarrollo:**

1. **Cómo se redacta una condición que funciona** — qué hecho exactamente la cumple, quién debe gestionarlo, con qué diligencia, en qué plazo, y qué pasa si el plazo vence sin resolución de la autoridad. La ambigüedad en cualquiera de estos cinco puntos es el conflicto.
2. **El plazo indefinido de la autoridad** — el error más caro: condiciones sin plazo máximo, que dejan al vendedor amarrado sin certeza y al comprador expuesto a un cambio normativo sobreviniente.
3. **Quién soporta el riesgo regulatorio** — cambios de instrumento de planificación territorial, congelamientos, modificaciones de uso de suelo entre la promesa y la escritura.
4. **Qué se restituye si la condición falla** — anticipos, gastos de estudios y proyectos ya encargados, y si hay o no derecho a indemnización cuando el incumplimiento es imputable a la falta de diligencia de una parte.
5. **Due diligence y vicios ocultos del título** — servidumbres no inscritas, ocupaciones, deslindes discutidos, gravámenes. Qué se puede reclamar después y qué se entiende asumido por haber hecho la revisión.
6. **Checklist de siete puntos** para leer una cláusula de condición ya firmada.

---

# SATÉLITE I-4 — Conflictos entre socios

**URL:** `/conflictos-socios-proyecto-inmobiliario`
**Title:** Conflictos entre socios de un proyecto inmobiliario
**Meta:** Disputas en sociedades de proyecto y joint ventures inmobiliarios: aportes, aumentos de capital, salida de un socio y valorización de la participación.
**Keyword:** conflicto socios proyecto inmobiliario

### Contenido

**Apertura.** Los conflictos entre socios de un proyecto inmobiliario tienen una particularidad incómoda: mientras se discuten, el proyecto sigue. Hay plazos que corren, cuotas que pagar y decisiones que tomar, y la parálisis societaria destruye valor más rápido que cualquiera de las posiciones en disputa. Son, además, las causas de cuantía indeterminada que más se ven.

**Desarrollo:**

1. **Los cinco detonantes** — aportes comprometidos y no enterados; aumento de capital que diluye a quien no puede concurrir; sobrecostos y quién los financia; desacuerdo sobre el momento de vender; y el socio que aporta gestión frente al que aporta capital.
2. **Qué debió decir el pacto y casi nunca dice** — mecanismo de desempate, procedimiento de salida con fórmula de valorización, consecuencias precisas del incumplimiento de un aporte, y regla de decisión para vender bajo un precio objetivo.
3. **Valorización de la participación** — el punto más disputado. Métodos, quién designa al valorizador y por qué acordar el método antes del conflicto vale más que discutir la cifra después.
4. **Mecanismos de salida** — cláusulas de compra recíproca, derechos de arrastre y de acompañamiento. Cómo operan y qué las hace inaplicables en la práctica.
5. **Medidas mientras se discute** — cómo evitar que la disputa societaria detenga el proyecto, y qué resguardos cabe pedir cuando hay riesgo de administración desleal.
6. **Por qué esto casi siempre debe arbitrarse** — confidencialidad, especialidad y velocidad. Una disputa societaria pública en un proyecto en comercialización tiene un costo comercial propio.

---
---

# PILAR B — Arbitraje en contratos de construcción

**URL:** `/arbitraje-construccion-chile`
**Title:** Arbitraje en contratos de construcción en Chile: guía completa
**Meta:** Cómo funciona el arbitraje en contratos de construcción en Chile: cláusula arbitral, tipos de árbitro, plazos, costos y qué hacer cuando el conflicto recién empieza.
**Keyword:** arbitraje construcción Chile

---

## Arbitraje en contratos de construcción

### Guía para quien tiene un conflicto de obra y todavía no sabe dónde va a terminar

La mayoría de los contratos de construcción relevantes en Chile contiene una cláusula arbitral. Casi nadie la lee al firmar. Se lee después, cuando el conflicto ya está instalado, y muchas veces se descubre entonces que esa cláusula va a determinar quién resuelve, con qué reglas, en cuánto tiempo y a qué costo.

---

### 1. Qué es el arbitraje y en qué se diferencia de ir a tribunales

El arbitraje es un mecanismo de resolución de conflictos en el que las partes entregan la decisión a un tercero que ellas mismas designan —el árbitro—, en lugar de a un juez del Estado. Frente a la justicia ordinaria presenta diferencias que importan:

- **Quien resuelve puede tener conocimiento técnico.** Un juez civil ve conflictos de construcción ocasionalmente, entre cientos de materias. Un árbitro elegido por su especialidad entiende qué es un análisis de ruta crítica sin que haya que explicárselo.
- **El procedimiento es más flexible.** Según el tipo de árbitro se pueden diseñar formas de rendir prueba que la justicia civil no admite con la misma soltura, lo que en materia pericial es decisivo.
- **Es confidencial.** No hay expediente público. Para una empresa que licita, eso puede ser relevante.
- **Es de instancia única en la práctica habitual.** Se gana o se pierde una vez.
- **Las partes pagan al tribunal.** Honorarios del árbitro y administración corren por cuenta de las partes: un costo que en sede ordinaria no existe.

La confidencialidad y la instancia única son las dos características que más se subestiman al firmar y más pesan al litigar.

---

### 2. Por qué los conflictos de construcción no se parecen a los demás

Un conflicto de construcción rara vez es una discusión sobre el sentido de una cláusula. Casi siempre es una discusión sobre hechos: qué se ejecutó, cuándo, por instrucción de quién, con qué rendimiento, a qué costo. De ahí que el libro de obra, las actas, los correos con la inspección técnica y los estados de pago con sus observaciones sean el caso, y que ese material ya esté escrito cuando el conflicto estalla.

---

### 3. La cláusula arbitral: dos líneas que deciden años

Cuatro decisiones relevantes:

**Quién administra.** Arbitraje institucional —típicamente ante el CAM Santiago— o ad hoc. El institucional aporta reglas conocidas, nómina de árbitros y previsibilidad de costos. El ad hoc puede ser más económico y flexible, y también más expuesto a maniobras dilatorias.

**Qué tipo de árbitro.** De derecho, arbitrador o mixto. Es la decisión más consecuente y la que más se toma por inercia.

**Cuántos árbitros.** Uno es más barato y más rápido. Tres reparten el riesgo de una decisión desafortunada y multiplican el costo. Dado que el 55% de las causas del CAM disputa menos de 8.000 UF, tres árbitros rara vez se justifican fuera del tramo alto.

**Qué queda dentro.** Una cláusula que somete a arbitraje "las controversias derivadas de la interpretación del contrato" deja fuera, discutiblemente, las que derivan de su ejecución o terminación. Redacciones estrechas producen conflictos sobre dónde se discute el conflicto, que es la peor forma de perder un año.

→ [Cláusula arbitral: cómo redactarla y los errores que se pagan caros]

---

### 4. Los tres tipos de árbitro

**Árbitro de derecho.** Tramita conforme a las reglas del procedimiento civil y falla conforme a la ley. Máxima certeza jurídica, mínima flexibilidad procesal.

**Arbitrador o amigable componedor.** Tramita conforme a las reglas que las partes le den o, a falta de ellas, según su prudencia, y falla conforme a lo que su prudencia y equidad le dicten. Máxima flexibilidad, mínima previsibilidad.

**Árbitro mixto.** Tramita como arbitrador pero falla conforme a derecho. En conflictos de construcción esta combinación suele ser la más adecuada, porque permite un tratamiento útil de la prueba pericial de ingeniería sin renunciar a que la sentencia se someta a la ley de fondo.

La designación como mixto o arbitrador supone renunciar a recursos: conforme al art. 239 del Código Orgánico de Tribunales pueden renunciarse todos salvo la queja y la casación en la forma por incompetencia y ultrapetita, y la casación en el fondo es de por sí improcedente contra laudos arbitrales. Es una decisión que conviene tomar entendiendo qué se está entregando.

→ [Árbitro de derecho, arbitrador o mixto: cuál conviene en construcción]

---

### 5. Las materias que más se arbitran en construcción

**Estados de pago retenidos.** → [Estados de pago retenidos: cómo se cobran]

**Obras extraordinarias y mayores costos.** La controversia más frecuente y la que más depende de si el cambio quedó documentado en su momento. → [Obras extraordinarias y mayores costos: cómo se prueban]

**Ampliaciones de plazo y multas por atraso.** Quién causó el retraso, si el camino crítico se vio afectado, si hubo eventos concurrentes, si las multas se ajustan al contrato.

**Vicios y defectos de la obra.** → [Vicios de construcción: responsabilidad del vendedor]

**Terminación anticipada.** La disputa de mayor riesgo, porque arrastra boletas de garantía, obra inconclusa y reclamaciones cruzadas. Es una de las que típicamente ingresa como cuantía indeterminada.

---

### 6. Antes del arbitraje: los mecanismos que evitan llegar ahí

**Dispute Boards.** Paneles de expertos independientes constituidos al inicio del contrato, que resuelven las discrepancias a medida que aparecen. Su virtud es que resuelven mientras la obra avanza. → [Dispute Boards]

**Negociación directa ordenada.** La vía más usada y la peor ejecutada. Una negociación mal preparada entrega información que después se usa en contra. Una bien preparada puede dejar constituida prueba favorable. La diferencia no está en la habilidad del negociador sino en si se hizo el análisis previo.

**Mediación.** Un tercero facilita el acuerdo sin poder decidir. Funciona cuando ambas partes quieren cerrar y no encuentran cómo.

---

### 7. Costos, plazos y primeros pasos

→ [Cuánto cuesta y cuánto dura un arbitraje] · [Los primeros 30 días de un conflicto de obra]

---
---

# SATÉLITE B-1 — Cláusula arbitral

**URL:** `/clausula-arbitral-contrato-construccion`
**Title:** Cláusula arbitral: cómo redactarla y los errores que se pagan caros
**Meta:** Qué debe decir la cláusula arbitral de un contrato de construcción o inmobiliario en Chile y los errores de redacción que se pagan caros.
**Keyword:** cláusula arbitral contrato construcción
*Satélite transversal: enlazado desde ambos pilares.*

### Contenido

**Apertura.** La cláusula de resolución de controversias es, casi siempre, la última que se negocia y la primera que se lee cuando hay problemas. Se copia de un contrato anterior, se acepta la que trae la contraparte, o se deja como venía en el modelo. Es una de las pocas cláusulas cuyo efecto no se siente nunca —hasta que se siente entero.

**Desarrollo:**

1. **Las cuatro decisiones que toma la cláusula** — administración, tipo de árbitro, número de árbitros, alcance de las materias sometidas.
2. **Los siete errores frecuentes:**
   - Cláusula patológica: designa una institución que no existe o la nombra mal, y hay que litigar para saber dónde se litiga.
   - Alcance estrecho: somete solo "interpretación" y deja fuera ejecución y terminación.
   - Tres árbitros donde la cuantía no los soporta. Con el 55% de las causas bajo 8.000 UF, es un error caro y frecuente.
   - Designación nominativa de una persona que al momento del conflicto ya no puede o no quiere.
   - Escalamiento obligatorio sin plazos: obliga a negociar antes de arbitrar sin fijar cuándo se entiende agotada esa etapa. Se convierte en herramienta dilatoria.
   - Cláusulas cruzadas incompatibles entre contrato principal, adendas y subcontratos, con partes distintas que terminan en foros distintos por el mismo hecho.
   - En proyectos inmobiliarios, incoherencia entre la promesa, el contrato de construcción y el pacto de socios.
3. **Cláusulas en cascada** — negociación, luego Dispute Board, luego arbitraje. Cuándo valen la pena y cómo evitar que la escalera se transforme en laberinto.
4. **Qué revisar en un contrato ya firmado** — checklist de siete puntos.
5. **Cómo se modifica una cláusula vigente** — por adenda, con acuerdo de ambas partes, y por qué la contraparte a veces accede antes de que el conflicto estalle.

---

# SATÉLITE B-2 — Tipos de árbitro

**URL:** `/arbitro-derecho-arbitrador-mixto`
**Title:** Árbitro de derecho, arbitrador o mixto: cuál conviene
**Meta:** Diferencias prácticas entre árbitro de derecho, arbitrador y mixto en Chile, y qué se gana y se pierde con cada uno.
**Keyword:** árbitro mixto Chile
*Satélite transversal.*

### Contenido

**Apertura.** La diferencia entre los tres tipos de árbitro se explica en cualquier manual. Lo que no se explica es qué significa cada una en un conflicto donde el punto discutido es si un rendimiento de excavación era alcanzable con la maquinaria comprometida.

**Desarrollo:**

1. **Qué decide cada calidad** — dos ejes independientes: cómo se tramita y cómo se falla. De derecho: ley y ley. Arbitrador: prudencia y equidad. Mixto: prudencia en el procedimiento, ley en el fallo. El árbitro mixto surge del inciso final del art. 223 del Código Orgánico de Tribunales, que permite conceder al árbitro de derecho las facultades de arbitrador en cuanto al procedimiento.
2. **Por qué el procedimiento importa tanto acá** — el caso se juega en la prueba pericial. Las reglas civiles sobre testigos e informes periciales fueron diseñadas para otra cosa. Un procedimiento flexible permite que los peritos de ambas partes sean examinados en conjunto y sobre los puntos en que efectivamente discrepan.
3. **Por qué el fallo en derecho importa igual** — previsibilidad para el directorio, el auditor y quien deba provisionar la contingencia. Un fallo en equidad puede ser justo y ser imposible de anticipar.
4. **Lo que se renuncia** — la calidad de arbitrador o mixto implica renuncia de recursos (art. 239 COT: todos salvo queja y casación en la forma por incompetencia y ultrapetita).
5. **Cómo se decide en la práctica** — tabla de tres columnas: cuantía baja y hechos simples / cuantía alta con prueba técnica intensa / relación contractual que continúa después del conflicto.
6. **Cuando ya está firmado** — qué se puede hacer si la cláusula designó una calidad que no conviene.

---

# SATÉLITE B-3 — Estados de pago retenidos

**URL:** `/cobro-estados-de-pago-retenidos`
**Title:** Estados de pago retenidos: cómo se cobran
**Meta:** Qué hacer cuando el mandante retiene u observa estados de pago en un contrato de construcción: vías de cobro, prueba necesaria y errores frecuentes.
**Keyword:** cobro estados de pago construcción

### Contenido

**Apertura.** Un estado de pago retenido no es solo un problema de caja. Es un mensaje. Antes de decidir cómo cobrarlo conviene entender qué está diciendo, porque la retención rara vez es la discusión: suele ser el instrumento con que se está discutiendo otra cosa.

**Desarrollo:**

1. **Los tres motivos reales de una retención** — (a) discrepancia técnica genuina sobre avance o calidad; (b) apalancamiento en otra negociación —ampliaciones de plazo, multas, obras extraordinarias—; (c) problema de caja del mandante. Cada uno admite una respuesta distinta, y confundirlos es el error que más caro sale.
2. **Qué mira quien va a resolver** — el estado de pago presentado, la observación formulada y su oportunidad, el respaldo del avance, la conformidad de la inspección técnica, el comportamiento previo con estados de pago anteriores.
3. **El valor de la observación tardía o genérica** — un rechazo fuera del plazo contractual, o sin especificar el reparo, es una posición débil. Documentarlo en su momento vale más que argumentarlo después.
4. **Las vías** — requerimiento formal por el canal contractual; escalamiento o Dispute Board si existe; arbitraje; cobro ejecutivo si el título lo permite; medidas precautorias cuando hay riesgo patrimonial real.
5. **Cuantía y procedimiento abreviado** — muchos cobros de estados de pago caen en el tramo donde opera el procedimiento abreviado del Reglamento CAM 2021: aplica por defecto bajo 2.000 UF de cuantía en la demanda principal, con laudo dentro de 4 meses prorrogables por otros 4.
6. **Los cuatro errores** — seguir ejecutando sin reserva formal de derechos; aceptar pagos parciales sin dejar constancia de que no importan renuncia; discutir solo por teléfono; esperar al final de la obra para reclamar lo de hace ocho meses.

---

# SATÉLITE B-4 — Obras extraordinarias y mayores costos

**URL:** `/obras-extraordinarias-mayores-costos`
**Title:** Obras extraordinarias y mayores costos: cómo se prueban
**Meta:** Cómo se acredita que un trabajo fue extraordinario y no parte del alcance contratado, y qué documentación decide estas controversias.
**Keyword:** obras extraordinarias construcción reclamación

### Contenido

**Apertura.** Es la controversia más frecuente en construcción y la que peor se documenta. El contratista sostiene que ejecutó algo que no estaba en el alcance; el mandante, que sí lo estaba. Ambos suelen tener buenos argumentos y documentación mediocre, y gana el que tenga la menos mediocre.

**Desarrollo:**

1. **Qué se discute realmente** — no si el trabajo se hizo, sino si estaba comprendido en el alcance, quién lo instruyó y si se cumplió el procedimiento contractual de aprobación.
2. **La jerarquía documental** — orden de cambio firmada; instrucción escrita de la ITO; anotación en libro de obra; acta de reunión; correo; conversación. El valor probatorio cae abruptamente en cada escalón, y la mayoría de las obras opera en los tres últimos.
3. **El procedimiento contractual de aprobación** — casi todos los contratos lo contemplan y casi nadie lo cumple, porque cumplirlo detiene la obra. Ejecutar primero y regularizar después es racional en terreno y frágil en un arbitraje. Cómo se atenúa: reserva escrita al ejecutar, aunque sea unilateral.
4. **Cómo se cuantifica** — costo directo, gastos generales, utilidad, y el capítulo más disputado: los efectos indirectos. Improductividad, aceleración, alteración de secuencia. El peritaje no es un accesorio: es la prueba principal.
5. **Actos propios y comportamiento previo** — si el mandante pagó cinco cambios anteriores sin orden formal, su exigencia de formalidad en el sexto es discutible. Funciona en ambos sentidos.
6. **Qué hacer hoy si la obra está en curso** — cuatro medidas de documentación que valen más que cualquier estrategia posterior.

---

# SATÉLITE B-5 — Dispute Boards

**URL:** `/dispute-boards-chile`
**Title:** Dispute Boards en Chile: qué son y cuándo instalarlos
**Meta:** Qué es un Dispute Board, qué modalidades existen, cuánto cuestan y en qué proyectos se justifica instalarlo.
**Keyword:** dispute boards Chile

### Contenido

**Apertura.** Un Dispute Board es un panel de expertos independientes constituido al inicio del contrato, que acompaña la obra y resuelve las discrepancias a medida que aparecen. Su ventaja no es jurídica sino temporal: resuelve mientras la obra todavía puede corregir el rumbo.

**Desarrollo:**

1. **Cómo funciona** — constitución al inicio, visitas periódicas, conocimiento acumulado del proyecto, pronunciamiento en plazos breves.
2. **Las tres modalidades** — DRB, que emite recomendaciones que se hacen vinculantes a los 15 días de recibidas si no se impugnan en arbitraje; DAB, que emite decisiones de cumplimiento obligatorio desde su recepción, con 15 días para objetarlas; y CDB, modelo combinado que emite una u otra según lo que cada parte pida. En silencio de las partes se entiende adoptado un DRB.
3. **Por qué funciona** — el panel conoce la obra en tiempo real, no reconstruida dos años después por peritos que llegan a un proyecto terminado. Y su sola existencia disciplina la documentación de ambas partes.
4. **Cuándo se justifica** — plazo largo, cuantía alta, interfaces múltiples, financiamiento que exija continuidad. Cuándo no: obras cortas o de cuantía baja, donde el costo fijo no se recupera. El Dispute Board es una herramienta para el tramo alto del mercado —el 22% de causas sobre 25.000 UF—, y conviene decirlo en vez de venderlo a todos.
5. **El costo** — honorarios de los miembros y visitas. Se paga aunque no haya conflicto, y esa es exactamente la objeción a responder: el punto de comparación no es cero, es el costo de un arbitraje de tres años.
6. **Cómo se incorpora** — al redactar el contrato, o por acuerdo posterior cuando ambas partes ven venir el conflicto y ninguna quiere el arbitraje.

---

# SATÉLITE B-6 — Costos y plazos

**URL:** `/cuanto-cuesta-arbitraje-chile`
**Title:** Cuánto cuesta y cuánto dura un arbitraje en Chile
**Meta:** Componentes del costo de un arbitraje inmobiliario o de construcción, plazos reales y cómo se decide la condena en costas.
**Keyword:** cuánto cuesta un arbitraje en Chile
*Satélite transversal.*

### Contenido

**Apertura.** Esta es la pregunta que todo el mundo hace primero y que casi ninguna web de abogados responde. La respondo con los rangos y las variables, porque quien está evaluando si arbitrar necesita una cifra para decidir, y no dársela no lo protege de nada.

**Desarrollo:**

1. **Los tres componentes** — (a) honorarios del árbitro y administración del centro, en función de la cuantía según la [tabla de aranceles del CAM Santiago](https://www.camsantiago.cl); (b) honorarios de abogados; (c) peritajes. No se publican cifras en esta página: la tabla la fija y actualiza el Centro, y se enlaza para quien quiera el detalle vigente.
2. **El costo relativo a la cuantía es la variable que nadie calcula** — en una causa de 1.500 UF los costos fijos del proceso pesan proporcionalmente mucho más que en una de 40.000 UF. Como el 22,9% de las causas del CAM está bajo 1.100 UF y el 55% bajo 8.000, este cálculo decide si arbitrar tiene sentido, y casi nunca se hace antes de demandar.
3. **Por qué el peritaje se subestima siempre** — es la partida que más crece y la que más pesa en el resultado. Un análisis de retrasos serio sobre una obra de plazo largo es un trabajo de meses.
4. **Modalidades de honorarios de abogado** — por hora, suma alzada por etapa, mixta con componente variable. Qué protege cada una y de qué. La objeción del "pozo sin fondo" se responde con estructura de honorarios, no con promesas.
5. **Plazos reales** — qué determina la duración: número de árbitros, complejidad probatoria, número de peritos, conducta de las partes. El procedimiento abreviado (bajo 2.000 UF) fija un laudo en 4 meses prorrogables por otros 4; el arbitraje ordinario no tiene ese techo.
6. **Condena en costas** — el Reglamento CAM 2021 permite al tribunal ponderar el resultado del arbitraje y la conducta procesal de cada parte al resolver sobre costas, e incorpora el concepto de reembolso razonable.
7. **La comparación que importa** — el costo del arbitraje frente al costo de no resolver: capital inmovilizado, boletas vigentes, capacidad de licitar comprometida, tiempo de gerencia consumido.

---

# SATÉLITE B-7 — Los primeros 30 días

**URL:** `/primeros-30-dias-conflicto`
**Title:** Los primeros 30 días de un conflicto
**Meta:** Qué hacer en las primeras semanas de un conflicto inmobiliario o de construcción para no perder derechos ni deteriorar la posición.
**Keyword:** qué hacer conflicto obra construcción
*Satélite transversal. Es el de mayor probabilidad de conversión: captura al lector en el momento en que el problema es urgente y todavía no hay abogado designado.*

### Contenido

**Apertura.** Lo que se hace en las primeras semanas pesa más que casi todo lo que se haga después. No porque haya que actuar rápido —muchas veces conviene no actuar rápido—, sino porque en esas semanas se pierden derechos por omisión y se deteriora la posición por descuido, casi siempre sin que nadie se dé cuenta.

**Desarrollo — ocho medidas concretas:**

1. **Verificar los plazos de aviso del contrato.** Muchos contratos exigen comunicar un evento dentro de un plazo breve, bajo sanción de pérdida del derecho a reclamar. Es la causa más frecuente de pérdida de reclamaciones legítimas y bien fundadas.
2. **Cerrar el canal informal.** Todo lo relevante, por escrito, por la vía contractual. WhatsApp y llamadas construyen relaciones y destruyen expedientes.
3. **Congelar la documentación.** Contrato, adendas, libro de obra, actas, estados de pago con observaciones, correspondencia con la ITO, órdenes de cambio. Copia íntegra y ordenada cronológicamente, antes de que alguien "ordene" carpetas.
4. **Dejar reserva escrita de derechos** si se sigue ejecutando o se reciben pagos parciales. Continuar sin reserva puede leerse como aceptación.
5. **Identificar a quién habrá que escuchar después.** Jefes de terreno, administradores de contrato y profesionales rotan de empresa. Los testigos de un arbitraje de tres años suelen trabajar hoy en otra parte. Registrar quién estuvo, cuándo y en qué.
6. **No negociar todavía.** Una negociación previa al análisis suele entregar información que después no se recupera.
7. **Leer la cláusula de resolución de controversias.** Antes de decidir cualquier cosa. Y si hay varios instrumentos —promesa, contrato de construcción, pacto de socios—, leerlas todas y ver si son coherentes entre sí.
8. **Hacer el análisis.** Con alguien que no haya estado dentro de la discusión.

---
---

# SATÉLITE B-8 — Arbitraje de emergencia

**URL:** `/arbitraje-de-emergencia-chile`
**Title:** Arbitraje de emergencia: cómo parar el daño en días
**Meta:** Qué es el arbitraje de emergencia del CAM Santiago, qué medidas permite pedir, cuánto demora y por qué la mitad de estas solicitudes son de construcción.
**Keyword:** arbitraje de emergencia Chile · medida prejudicial precautoria construcción

> **Por qué este satélite es el de mayor valor del sitio.** Construcción concentra el 51,8% de estas solicitudes, se acogen tres de cada cuatro veces y se resuelven en 5,4 días promedio. Es intención de búsqueda máxima —obra parada, boleta por cobrarse, fondos que se van— con competencia casi nula. Tiene grupo de anuncios propio (ver anexo A del archivo 03).
>
> **Base normativa (verificada).** Arbitraje de emergencia del CAM Santiago: Art. 21 bis y Título IX (arts. 53-58) del Reglamento de Arbitraje Nacional, vigente desde el 1 de septiembre de 2023.

### Contenido

**Apertura.** Hay conflictos que no admiten esperar a que se constituya un tribunal arbitral. Van a cobrar la boleta de garantía mañana. Se está por transferir el terreno. El administrador está disponiendo de los fondos del proyecto. Para eso existe el arbitraje de emergencia, y en Chile funciona mejor de lo que casi nadie sabe: en 2025, el plazo promedio desde que el árbitro juró hasta que dictó sentencia fue de **5,4 días corridos**.

**Desarrollo:**

1. **Qué es y cuándo procede** — mecanismo para obtener una medida urgente antes de que se constituya el tribunal arbitral que verá el fondo. El árbitro de emergencia es un tribunal unipersonal que designa el CAM, competente para conocer, resolver y ejecutar medidas prejudiciales. Para las precautorias se exige siempre caución suficiente, y el árbitro pondera su liquidez y efectividad.

2. **Qué se puede pedir.** En 2025 las medidas solicitadas fueron:
   - Prohibición de celebrar actos y contratos — 14 casos (40%)
   - Medidas innominadas — 11 (31,4%), por ejemplo suspensión inmediata del contrato vigente o designación de administrador provisional de fondos
   - Retención de bienes — 6 (17,1%)
   - Exhibición de documentos — 2 (5,7%)
   - Informe pericial — 1 (2,8%)
   - Inspección personal del tribunal — 1 (2,8%)

   La categoría de medidas innominadas es la más subutilizada: permite pedir exactamente lo que el caso necesita en vez de encajarlo en un molde.

3. **Funciona, y hay cifras.** De las 27 solicitudes de 2025: 16 acogidas (59,3%), 4 acogidas parcialmente (14,8%), 7 rechazadas (25,9%). **Tres de cada cuatro obtienen algo.** Y el promedio de duración es de 5,4 días corridos.

4. **Por qué construcción concentra la mitad.** 14 de las 27 solicitudes fueron de construcción, y 4 más inmobiliarias: entre ambas, dos tercios del total. La razón es estructural: en obra, el daño se produce mientras se discute. Un cobro de boleta, una toma de terreno, una paralización o el retiro de maquinaria producen efectos que una sentencia dos años después ya no repara.

5. **Los cuatro escenarios típicos en obra** — cobro inminente de boleta de garantía; terminación anticipada con desalojo de faena; disposición de fondos o retenciones del proyecto; y necesidad de asegurar prueba que va a desaparecer con el avance de la obra (estados de terreno, condiciones ocultas, ensayos).

6. **Qué hay que tener listo antes de pedirlo.** Es un procedimiento de días: no hay tiempo de construir el caso mientras corre. Contrato con la cláusula arbitral, antecedentes del hecho que se quiere impedir, prueba del perjuicio inminente y del peligro en la demora, y la medida concreta redactada con precisión. Pedir "que se abstenga de perjudicarnos" no es una medida.

7. **Qué pasa después** — la medida se dicta en la fase prejudicial y su suerte queda supeditada al arbitraje de fondo que verá el conflicto; el tribunal que se constituya después puede mantenerla, modificarla o dejarla sin efecto.

8. **Si el conflicto tiene un reloj corriendo, este es el primer paso, no el último.** El error más común es pedirlo tarde: cuando el daño ya se produjo, el mecanismo pierde su objeto.

**Cierre:** enlace al pilar de construcción, al satélite de estados de pago y a la página de estadísticas.

---

# BLOQUE FAQ — optimizado para respuestas de IA

**URL:** `/preguntas-frecuentes`
**Title:** Arbitraje inmobiliario y de construcción en Chile: preguntas frecuentes

**Cómo se implementa (nota técnica ejecutable):**

- Marcado `FAQPage` de schema.org en JSON-LD para todo el bloque, `Article` en los satélites, `Dataset` en la página de estadísticas.
- Cada respuesta debe ser **autocontenida**: comprensible sin haber leído la pregunta anterior. Los sistemas de IA extraen párrafos sueltos, no páginas.
- **40 a 70 palabras por respuesta.** Más largo no se cita; más corto no responde.
- La primera oración responde. El matiz viene después, nunca antes.
- Repetir el nombre del autor y "Chile" con naturalidad: es lo que permite que la cita quede atribuida.
- Replicar cada par pregunta/respuesta dentro del satélite correspondiente, además de este bloque.

---

**¿Qué es el arbitraje en un contrato de construcción o inmobiliario?**
Es el mecanismo por el cual las partes entregan la resolución de sus conflictos a un árbitro que ellas designan, en lugar de a los tribunales ordinarios. En Chile es la vía habitual en contratos de obra, promesas de compraventa, proyectos inmobiliarios e infraestructura, y suele estar pactada en el propio contrato mediante una cláusula arbitral.

**¿Qué materias se arbitran más en Chile?**
Según el Reporte Anual 2025 del CAM Santiago, las materias inmobiliarias concentran el 34,2% de las solicitudes de arbitraje, construcción e infraestructura el 20,9%, y sociedades comerciales y energía un 8,8% cada una. Más de la mitad del arbitraje institucional chileno corresponde entonces a conflictos inmobiliarios y de construcción.

**¿Cuánto se disputa habitualmente en un arbitraje en Chile?**
De las causas ingresadas al CAM Santiago en 2025 con cuantía determinada, el 55% disputaba menos de 8.000 UF y el 45% más de esa cifra. El tramo más frecuente es el de 1.101 a 8.000 UF, con el 32% de los casos. Un 22% supera las 25.000 UF.

**¿El arbitraje sirve para disputas pequeñas o solo para casos grandes?**
Sirve para ambos. El CAM Santiago opera de hecho dos circuitos: los Árbitros Jóvenes concentran las causas de 1.101 a 8.000 UF —el 55% de sus casos— y los árbitros de nómina general las mayores, con el 68% de sus causas sobre 8.000 UF.

**¿Es obligatorio ir a arbitraje si el contrato tiene cláusula arbitral?**
Sí. Si el contrato contiene una cláusula arbitral válida, las partes quedan obligadas a someter allí sus controversias, y el tribunal ordinario ante el que se demande puede ser excepcionado por esa razón. Solo cabe apartarse por acuerdo posterior de ambas partes.

**¿Cuál es la diferencia entre árbitro de derecho, arbitrador y mixto?**
El árbitro de derecho tramita y falla conforme a la ley. El arbitrador tramita según las reglas que las partes le den y falla en prudencia y equidad. El mixto combina ambos: tramita con la flexibilidad del arbitrador y falla conforme a derecho. En construcción, el mixto suele ser el más adecuado por el peso de la prueba pericial.

**¿Qué documentos son clave en un conflicto de construcción?**
El libro de obra, las actas de reunión, los estados de pago con sus observaciones, las órdenes de cambio, la correspondencia formal con la inspección técnica y el contrato con sus adendas. En la práctica, el resultado se define por lo que quedó escrito durante la ejecución, no por lo que se argumente después.

**¿Qué puedo hacer si el mandante retiene estados de pago?**
Primero, formalizar el reclamo por la vía contractual dentro de los plazos que el contrato exija, y dejar reserva escrita de derechos si se sigue ejecutando. Después, según lo que el contrato prevea: escalamiento interno, Dispute Board, arbitraje, o cobro ejecutivo si el título lo permite.

**¿Cómo se prueba que una obra fue extraordinaria y no parte del contrato?**
Con documentación generada en el momento: orden de cambio firmada, instrucción escrita de la inspección técnica, anotación en libro de obra o acta de reunión. El valor probatorio disminuye conforme el respaldo es más informal. Una reserva escrita al momento de ejecutar, aunque sea unilateral, mejora la posición.

**¿Qué pasa si la inmobiliaria no entrega el departamento en el plazo prometido?**
Depende de lo que la promesa pactó para ese escenario: causales de prórroga, si operan de pleno derecho o requieren aviso, y qué cláusula penal se estableció. La discusión rara vez es sobre si hubo retraso, sino sobre qué consecuencias se acordaron y si las prórrogas se comunicaron formalmente.

**¿Quién responde por los vicios de construcción de un edificio?**
El art. 18 de la Ley General de Urbanismo y Construcciones radica la responsabilidad frente al comprador en el propietario primer vendedor, que responde de forma objetiva y luego repite contra constructora y proyectistas. Los plazos son 10 años para fallas estructurales, 5 para elementos constructivos e instalaciones y 3 para terminaciones, contados desde la recepción municipal de la obra.

**¿Qué pasa si compré un terreno sujeto a permiso y el permiso no sale?**
Depende de cómo se redactó la condición: qué hecho exactamente la cumple, quién debía gestionarlo, en qué plazo y qué ocurre si vence sin resolución de la autoridad. La mayoría de los conflictos nace de condiciones sin plazo máximo o sin definir a quién correspondía la gestión.

**¿Conviene negociar antes de iniciar un arbitraje?**
Conviene, pero solo después de haber analizado la propia posición. Una negociación anterior al análisis suele entregar información que después se usa en contra o producir reconocimientos difíciles de revertir. Hecha con preparación, en cambio, puede dejar constituida prueba favorable para el proceso posterior.

**¿Quién paga los costos de un arbitraje?**
Inicialmente las partes, conforme al reglamento aplicable: honorarios del árbitro, administración del centro, peritajes y abogados propios. Al dictar sentencia, el tribunal se pronuncia sobre las costas, y el Reglamento CAM 2021 le permite ponderar el resultado del arbitraje y la conducta procesal de cada parte, con el criterio del reembolso razonable.

**¿Puedo cambiar la cláusula arbitral de un contrato ya firmado?**
Sí, por acuerdo de ambas partes mediante adenda. Es más frecuente de lo que parece cuando el conflicto todavía no ha estallado y ambas partes advierten que la cláusula vigente las perjudica —por ejemplo, si obliga a tres árbitros en una controversia que no lo justifica.

**¿Qué es un arbitraje ad hoc y en qué se diferencia del institucional?**
En el arbitraje institucional, un centro como el CAM Santiago administra el proceso y aplica su reglamento. En el ad hoc no hay institución administradora: rigen las reglas que las partes acuerden o el árbitro fije. El institucional aporta previsibilidad; el ad hoc, mayor flexibilidad y menor costo administrativo.

**¿Qué es el arbitraje de emergencia?**
Es un mecanismo para obtener una medida urgente antes de que se constituya el tribunal arbitral que verá el fondo del asunto. En el CAM Santiago, durante 2025 el plazo promedio desde la aceptación del árbitro de emergencia hasta la sentencia fue de 5,4 días corridos, y tres de cada cuatro solicitudes fueron acogidas total o parcialmente.

**¿Sirve el arbitraje de emergencia en conflictos de construcción?**
Es donde más se usa. De las 27 solicitudes de arbitraje de emergencia presentadas ante el CAM Santiago en 2025, 14 correspondieron a construcción —el 51,8%— y 4 a materias inmobiliarias. La razón es estructural: en obra el daño se produce mientras se discute, y una sentencia dos años después ya no lo repara.

**¿Qué tipo de árbitro se designa más en Chile?**
En 2025, el 58,5% de las designaciones del CAM Santiago recayó en árbitros mixtos y el 41,5% en arbitradores. No se registraron designaciones de árbitros de derecho. El mercado chileno prefiere procedimientos flexibles, con o sin sujeción a la ley de fondo al momento de fallar.

**¿Puedo elegir a mi árbitro?**
En más de la mitad de los casos sí, y casi nadie lo usa. De las causas informadas por el CAM Santiago en 2025, el 57% contemplaba la designación de común acuerdo, pero solo el 20,7% terminó designando de ese modo. En el resto designó el Consejo del Centro.

**¿Todos los arbitrajes terminan en sentencia?**
No. De las 464 causas de arbitraje nacional terminadas en el CAM Santiago durante 2025, solo el 47% concluyó por laudo arbitral. Un 18% terminó por acuerdo entre las partes, un 11% por desistimiento y un 7% por abandono. Más de la mitad de los arbitrajes se cierra sin sentencia.

**¿Qué contratos generan más arbitrajes en Chile?**
Según el Reporte Anual 2025 del CAM Santiago: compraventa (101 causas), prestación de servicios (89), contrato de construcción (76) y promesa de compraventa (74). Los contratos de construcción e inmobiliarios concentran, en conjunto, la mayor proporción de cláusulas arbitrales efectivamente invocadas.

**¿Qué es un Dispute Board?**
Es un panel de expertos independientes constituido al inicio de un contrato de construcción, que acompaña la obra y resuelve las discrepancias a medida que surgen. Según su modalidad, emite recomendaciones no vinculantes o decisiones de cumplimiento obligatorio, lo que permite destrabar el conflicto sin detener el avance de la obra.

---
---

# PÁGINA — Cómo trabajo

**URL:** `/como-trabajo`

## Cómo trabajo, según el tamaño y la urgencia del conflicto

No todos los conflictos requieren lo mismo, y cobrar lo mismo por todos sería un mal negocio para el cliente. Por eso trabajo con tres modalidades declaradas.

### Vía acotada — conflictos de 1.000 a 8.000 UF

Es el tramo más frecuente del arbitraje chileno: cerca del 44% de las causas con cuantía determinada del CAM está aquí, y es la franja donde el propio Centro asigna a sus Árbitros Jóvenes.

En este tramo el servicio es **deliberadamente acotado**: alcance definido por escrito, precio fijo por etapa, plazos comprometidos. Incluye el diagnóstico del conflicto, la definición de la ruta y la tramitación. No incluye el análisis exhaustivo de la vía completa, y no debe incluirlo: un estudio de trescientas horas sobre una disputa de 3.000 UF sería un mal negocio para ti, y te lo diría igual.

Lo que sí tienes garantizado en esta vía es saber de antemano cuánto vas a pagar y qué vas a recibir.

`[PRECIO VÍA ACOTADA]`

### Vía completa — conflictos sobre 8.000 UF

El 45% de las causas con cuantía determinada, más las de cuantía indeterminada, que suelen ser las mayores. Aquí opera la metodología completa de ocho etapas, con dedicación personal:

- **El análisis va primero.** Antes de recomendar negociar o litigar, el análisis completo de causa raíz, prueba disponible, posiciones e intereses de ambas partes y costo de cada escenario.
- **El presupuesto se conversa al principio.** Estructura de honorarios, alcance y gastos previstos, por escrito, antes de empezar.
- **Me hago cargo yo.** El que evalúa el caso es el que lo lleva.
- **La información fluye sin que haya que pedirla.** Actualizaciones periódicas, acceso a la documentación y respuesta en plazos comprometidos.

Tomo `[CUPOS]` casos nuevos al mes en esta modalidad. No es una técnica de venta: es la consecuencia de que el que revisa el caso sea el mismo que lo lleva.

### Vía de urgencia — arbitraje de emergencia

Cuando hay un reloj corriendo: una boleta que van a cobrar, un terreno que se va a transferir, fondos que se están disponiendo. Alcance corto, plazo de días, honorario de urgencia definido antes de empezar.

En 2025 el CAM resolvió estas solicitudes en 5,4 días corridos promedio, y acogió total o parcialmente tres de cada cuatro. → [Arbitraje de emergencia]

`[HONORARIO URGENCIA]`

### Bajo 1.000 UF

No tomo casos bajo esa cuantía. No por selectividad: bajo ese monto el costo del proceso rara vez se justifica para el cliente, y es lo que te diría en la reunión de todos modos.

→ [Contacto]

---

# PÁGINA — Quién soy

**URL:** `/quien-soy`

## Miguel Aylwin Fernández

*[FOTO — retrato profesional, ver nota de dirección de arte en el archivo 03]*

Soy abogado. Trabajo en conflictos de contratos inmobiliarios, de construcción e infraestructura, en arbitraje y en sede judicial, representando indistintamente a mandantes y a contratistas, a inmobiliarias y a quienes reclaman contra ellas.

`[AÑOS]` años en esto me dejaron una convicción que ordena cómo trabajo: **ganar el juicio y salvar el negocio no son lo mismo.** He visto empresas con razón obtener resultados favorables tarde, cuando el capital inmovilizado, las boletas vigentes y los proyectos perdidos ya habían hecho el daño que el fallo no podía reparar. Una victoria que llega después de que el proyecto murió es una derrota con otro nombre.

Por eso mi trabajo empieza siempre por el mismo lugar: entender el negocio antes que el expediente. Cuánto vale para el cliente cerrar rápido, qué relación comercial hay que preservar, qué precedente no puede sentarse, cuánto capital soporta estar detenido. Esa información determina la estrategia jurídica, y no al revés.

**Sobre lo que no puedo ofrecer:** no puedo garantizar el resultado de un juicio, y desconfío de quien lo haga. La historia judicial está llena de casos que se creían ganados. Lo que sí puedo comprometer es que llegues al proceso sabiendo cuáles son tus fortalezas, cuáles tus debilidades y qué está en juego, de modo que el resultado —cualquiera sea— esté dentro de lo previsto.

### Dónde ejerzo

Soy socio de **Aylwin Matta Abogados**, en Santiago. Este sitio es mío y no del estudio: lo escribí para explicar cómo trabajo yo en esta materia. Los mandatos que tomo se ejecutan con la estructura del estudio, que es lo que me permite comprometer dedicación personal sin que eso signifique trabajar solo. El resto de la práctica está en [Aylwin Matta Abogados](`[URL ESTUDIO]`).

*(Completar la denominación exacta del cargo y la URL definitiva —marcada `[URL ESTUDIO]`— antes de publicar. Ver §8 del archivo 01.)*

→ [Cómo trabajo] · [Contacto]

**Marcado estructurado de esta página** (ver §8 del archivo 01 para el JSON-LD completo): `Person` con `worksFor` apuntando a la `LegalService` del estudio y `sameAs` a la ficha profesional y al perfil de LinkedIn. Son los campos que permiten a buscadores y sistemas de IA asociar la persona con la entidad; sin ellos el vínculo existe para el lector pero no para la máquina.

---

# PÁGINA — Contacto

**URL:** `/contacto`

## Conversemos sobre tu caso

Si tienes un conflicto en un contrato inmobiliario o de construcción y quieres una opinión antes de decidir qué hacer, escríbeme.

**Cómo funciona:**

1. Completas el formulario. Toma dos minutos.
2. Te respondo en un plazo de `[24 horas hábiles]`. Si el caso no es de mi especialidad, te lo digo y, si puedo, te derivo.
3. Si corresponde, agendamos una reunión de 45 minutos para revisar tu situación.

**Lo que pasa con lo que me cuentes:** desde tu primer mensaje rige el deber de reserva, aunque no llegue a existir mandato ni pago de honorarios. El Código de Ética Profesional (2011) extiende al cliente potencial —quien consulta seriamente al abogado por un asunto— los deberes de confidencialidad y lealtad propios del cliente (art. 20). Tu información no se usa para otro fin ni se comparte.

**Formulario:**

- Nombre · Empresa · Cargo
- Correo y teléfono
- ¿Cuál es el conflicto? *(campo abierto)*
- Tipo de conflicto *(inmobiliario / construcción u obra / societario de proyecto / otro)*
- Cuantía estimada en UF *(tramos: menos de 1.000 / 1.000–8.000 / 8.001–25.000 / más de 25.000 / sin cuantía determinada / no lo sé)*
- ¿Hay algo urgente que impedir en los próximos días? *(sí / no)*
- ¿Hay demanda o requerimiento notificado? *(sí / no / no lo sé)*

*Nota: no incluyas documentos ni antecedentes reservados en este primer mensaje. Basta con que me describas la situación en términos generales.*

### Datos profesionales

**Miguel Aylwin Fernández** — Abogado
Socio de Aylwin Matta Abogados
`[DIRECCIÓN]` · Santiago, Chile
`[TELÉFONO]` · `[CORREO]`

*El nombre del estudio va en texto plano. El único enlace seguido a Aylwin Matta vive en la página "Quién soy": concentrarlo en un solo punto evita dispersar la señal y mantiene el resto del pie sin salidas.*

---

## Checklist de publicación

- [ ] Cifras de la página de estadísticas tomadas del Reporte Anual 2025 y sus cuatro inconsistencias internas ya resueltas (ver notas de fuente en esa página). Cotejo final contra el PDF recomendado antes de subir, aunque la aritmética ya cierra.
- [ ] Datos legales verificados contra fuente oficial (COT, Reglamento CAM, LGUC, Ley 19.496, Código Civil, CEP 2011); ver §6.4 del archivo 01
- [ ] Completar `[AÑOS]`, `[FOTO]`, `[DOMINIO]`, `[CUPOS]`, `[PRECIO VÍA ACOTADA]`, `[HONORARIO URGENCIA]`, plazos de respuesta
- [ ] Schema: `FAQPage` en preguntas, `Article` en satélites, `Dataset` en estadísticas, `Person` en Quién soy
- [ ] `robots.txt` y sitemap.xml
- [ ] Enlaces internos pilares ↔ satélites verificados; los cuatro satélites transversales enlazados desde ambos pilares
- [ ] Sin enlaces salientes a la landing de Ads desde páginas indexadas *(la landing lleva `noindex`)*
- [ ] Único enlace seguido a Aylwin Matta en la página "Quién soy" (no en el pie de las demás páginas)
- [ ] `Person` con `worksFor` y `sameAs` en Quién soy; `[URL ESTUDIO]` y `[URL FICHA]` completadas
- [ ] Enlace recíproco desde la ficha en el sitio del estudio, si es posible
- [ ] Google Search Console y analítica instalados
- [ ] Revisión final de que ninguna afirmación promete resultado
