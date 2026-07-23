# Medición y tests A/B (calibrado a volumen bajo)

## Realidad del estudio: volumen BAJO

Con presupuesto de prueba (CLP 50k/semana) el estudio recibirá decenas de clics y unidades de
consultas por semana — no miles. Esto cambia todo sobre testing:

- **Un test A/B formal necesita ~100 conversiones por variante** para significancia. A este
  volumen, eso puede tomar meses. NO montar tests que nunca van a concluir.
- Hasta tener volumen: **decisiones cualitativas secuenciales** — cambiar UNA cosa, observar 2–4
  semanas, comparar contra el período anterior, documentar en el informe de auditoría. Es menos
  riguroso y es lo correcto a esta escala.
- Los tests formales llegan cuando haya ≥15–30 conversiones/mes sostenidas.

## Hipótesis bien formada (cuando sí se testea)

> Cambiar [X] mejorará [métrica] porque [razonamiento].

- Una sola variable (titular O CTA O oferta — nunca dos)
- Métrica primaria única: consultas calificadas (no CTR, no clics)
- Control y variante etiquetados; duración mínima 2 semanas o ciclos completos L-V
- Umbral: 95% de confianza antes de declarar ganador

## Qué cambiar primero (impacto esperado, mayor→menor)

| Prioridad | Elemento | Nota legal |
|---|---|---|
| 1 | La oferta (qué recibe el que consulta) | La reunión sin costo ya es la oferta; variar cómo se describe |
| 2 | Titular / H1 de landing | El problema del visitante, no el nombre del estudio |
| 3 | CTA (texto y prominencia) | WhatsApp vs formulario; texto del botón |
| 4 | Credenciales visibles y su orden | Solo hechos verificables |
| 5 | Largo del formulario | Ya está en el mínimo razonable |

## Métricas (en este orden — heredado del README del sistema de ads)

Mandatos firmados → CAC vs honorario (LTV:CAC ≥ 3:1) → costo por reunión calificada → costo por
consulta → CPC. Nunca optimizar por clics o impresiones. Los benchmarks en CLP viven en
`ads-campana/references/presupuesto-benchmarks.md`.

## Atribución (simplificada a esta escala)

Con un solo canal pagado + orgánico, la atribución compleja (multi-touch, data-driven) es
sobreingeniería. Basta: click_id/UTM en cada lead (ya implementado — columna click_id en la base
+ Ref en Telegram) + preguntar en la primera reunión "¿cómo nos encontró?". Revisitar modelos de
atribución solo si se activan más canales (fase 2).
