import type { Metadata } from "next";
import CampaignLanding, { type CampaignContent } from "@/components/campaign/CampaignLanding";
import { JsonLd, legalServiceSchema } from "@/lib/schema";

const schema = legalServiceSchema({
  name: "Aylwin Matta Abogados — Arbitraje Comercial",
  description:
    "Representación de empresas en arbitrajes comerciales: conflictos societarios, incumplimiento de contratos y controversias con cláusula arbitral.",
  knowsAbout: [
    "Arbitraje comercial",
    "Conflictos societarios",
    "Cláusulas compromisorias",
    "Arbitraje CAM Santiago",
  ],
});

export const metadata: Metadata = {
  title: "Arbitrajes en construcción | Aylwin Matta",
  description:
    "Representación de empresas en arbitrajes comerciales: conflictos societarios, incumplimiento de contratos, CAM Santiago. Consulta confidencial.",
  robots: { index: false, follow: false },
};

const content: CampaignContent = {
  materia: "Arbitraje",
  h1: "¿Un conflicto societario o de contrato amenaza la continuidad de su empresa?",
  subtitulo:
    "Representamos a empresas en arbitrajes comerciales en Santiago: disputas entre socios, incumplimiento de contratos y controversias con cláusula arbitral. Evaluamos su caso en forma confidencial.",
  ctaWhatsApp: "Hablar por WhatsApp ahora",
  ctaWhatsAppCorto: "WhatsApp confidencial",
  msgWhatsAppBase: "Hola, necesito orientación sobre un conflicto comercial/arbitraje.",
  descarte:
    "No tramitamos causas de familia, laborales, penales ni deudas personales. [EJEMPLO — PENDIENTE: confirmar por MAF]",
  pasos: [
    "Escríbanos por WhatsApp o el formulario. Su consulta es confidencial desde el primer mensaje.",
    "Reunión inicial sin costo para evaluar la viabilidad de su caso y las vías disponibles.",
    "Si el caso es viable, recibe una propuesta con honorarios claros antes de decidir.",
  ],
  experiencia: {
    titulo: "Experiencia en arbitraje comercial",
    items: [
      "Representación de contratista en arbitraje CAM Santiago por término anticipado de contrato de obra.",
      "Defensa de socio en conflicto societario por incumplimiento de pacto de accionistas.",
      "Disputa por incumplimiento de contrato de suministro entre empresas del sector industrial.",
    ],
    nota: "[EJEMPLOS REFERENCIALES — PENDIENTE: reemplazar por casos reales anonimizados confirmados por MAF antes de recibir tráfico]",
  },
  faq: [
    {
      pregunta: "¿Cuánto cuesta la primera reunión?",
      respuesta:
        "La reunión inicial de diagnóstico no tiene costo. Sirve para evaluar si su caso es viable y explicarle las alternativas disponibles.",
    },
    {
      pregunta: "¿Cuánto demora un arbitraje comercial?",
      respuesta:
        "Depende del procedimiento pactado y la complejidad del asunto. Como referencia general, entre 12 y 24 meses. En la reunión de diagnóstico podemos dar un rango realista para su caso concreto.",
    },
    {
      pregunta: "¿Qué pasa si mi contrato tiene cláusula arbitral (compromisoria)?",
      respuesta:
        "La disputa deberá resolverse ante un árbitro y no ante los tribunales ordinarios. Eso hace aún más relevante contar con abogados con experiencia en sede arbitral desde el inicio.",
    },
    {
      pregunta: "¿Y si mi caso no es viable?",
      respuesta:
        "Se lo decimos de frente en la primera reunión. Preferimos declinar un caso a llevarlo sin perspectivas razonables.",
    },
  ],
};

export default function Page() {
  return (
    <>
      <JsonLd data={schema} />
      <CampaignLanding content={content} />
    </>
  );
}
