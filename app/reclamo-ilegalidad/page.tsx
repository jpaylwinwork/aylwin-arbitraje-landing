import type { Metadata } from "next";
import CampaignLanding, { type CampaignContent } from "@/components/campaign/CampaignLanding";

export const metadata: Metadata = {
  title: "Reclamo de Ilegalidad Municipal | Aylwin Matta Abogados",
  description:
    "Impugnamos decretos alcaldicios y resoluciones municipales ilegales que afectan a su empresa. Los plazos son breves: evalúe su caso hoy. Consulta confidencial.",
  robots: { index: false, follow: false },
};

const content: CampaignContent = {
  materia: "Reclamo de ilegalidad",
  h1: "¿Una decisión municipal ilegal afecta a su empresa?",
  subtitulo:
    "Multas, rechazo de patentes, decretos alcaldicios y resoluciones ilegales pueden impugnarse ante la Corte — pero los plazos de reclamo son breves. Evaluamos su caso en forma confidencial y le decimos de frente si conviene reclamar.",
  ctaWhatsApp: "Evaluar mi caso por WhatsApp",
  ctaWhatsAppCorto: "WhatsApp confidencial",
  msgWhatsAppBase: "Hola, necesito orientación sobre un reclamo contra una decisión municipal.",
  descarte:
    "No tramitamos causas de familia, laborales, penales ni deudas personales. [EJEMPLO — PENDIENTE: confirmar por MAF]",
  pasos: [
    "Escríbanos por WhatsApp con el decreto o resolución que le afecta. Confidencial desde el primer mensaje.",
    "Revisamos la legalidad del acto y los plazos aplicables, y le indicamos si el reclamo es viable.",
    "Si conviene reclamar, recibe una propuesta con honorarios claros y actuamos dentro de plazo.",
  ],
  experiencia: {
    titulo: "Experiencia en derecho administrativo municipal",
    items: [
      "Reclamo de ilegalidad contra decreto alcaldicio que rechazó la renovación de una patente comercial.",
      "Impugnación de multa municipal cursada a empresa por supuesta infracción de ordenanza local.",
      "Defensa de empresa frente a resolución municipal que ordenó paralización de actividades.",
    ],
    nota: "[EJEMPLOS REFERENCIALES — PENDIENTE: reemplazar por casos reales anonimizados confirmados por MAF antes de recibir tráfico]",
  },
  faq: [
    {
      pregunta: "¿Cuánto plazo tengo para reclamar?",
      respuesta:
        "Los plazos de caducidad del reclamo de ilegalidad son breves y se cuentan desde la publicación o notificación del acto. Por eso conviene evaluar su caso de inmediato: escríbanos hoy con la fecha del decreto o resolución y confirmamos el plazo aplicable a su situación.",
    },
    {
      pregunta: "¿Dónde se tramita el reclamo?",
      respuesta:
        "Según la etapa, ante el propio municipio (o gobierno regional) y luego ante la Corte de Apelaciones respectiva. En la evaluación inicial le explicamos el itinerario completo para su caso.",
    },
    {
      pregunta: "¿Cuánto cuesta la evaluación inicial?",
      respuesta:
        "No tiene costo. Revisamos el acto administrativo, los plazos y la viabilidad, y le proponemos honorarios claros solo si el reclamo tiene fundamento.",
    },
    {
      pregunta: "¿Y si el reclamo no tiene fundamento?",
      respuesta:
        "Se lo decimos de frente, junto con las alternativas que existan (recursos administrativos, negociación u otras vías).",
    },
  ],
};

export default function Page() {
  return <CampaignLanding content={content} />;
}
