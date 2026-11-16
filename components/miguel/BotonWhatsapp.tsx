"use client";

import { trackMiguel } from "@/lib/analytics-miguel";

// Botón de WhatsApp con medición. Cada clic envía "clic_whatsapp" a GA4 con la
// página de origen y el tipo de cierre, para saber qué notas generan contactos
// (manual de optimización, §2.2). Abre en otra pestaña: en escritorio lleva a
// WhatsApp Web, y el lector no pierde la nota que estaba leyendo.
export default function BotonWhatsapp({
  href,
  pagina,
  ctaTipo,
  children,
}: {
  href: string;
  pagina: string;
  ctaTipo: string;
  children: React.ReactNode;
}) {
  return (
    <a
      href={href}
      className="miguel-btn miguel-btn-whatsapp"
      target="_blank"
      rel="noopener"
      onClick={() => trackMiguel("clic_whatsapp", { pagina, cta_tipo: ctaTipo })}
    >
      {children}
    </a>
  );
}
