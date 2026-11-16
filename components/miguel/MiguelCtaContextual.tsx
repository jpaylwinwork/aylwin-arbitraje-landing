import Link from "next/link";
import BotonWhatsapp from "@/components/miguel/BotonWhatsapp";
import { enlaceWhatsapp } from "@/lib/contacto-miguel";
import type { CtaTipo } from "@/lib/boletin-miguel";

// Cierre de una nota del Monitor según su materia, en lugar del bloque genérico
// "¿Tienes un conflicto en curso?". Mismo diseño de banda oscura, para que el
// sitio siga cerrando todas sus páginas igual; cambian el texto y la acción.
//
// Textos del manual de optimización (31-10-2026, §2.1), en "usted", que es el
// registro de las notas del Monitor. El bloque genérico habla de "tú": en una
// nota escrita de usted, el cierre cambiaba de trato en la última línea.
const TEXTOS: Record<CtaTipo, { pregunta: string; texto: string }> = {
  inmobiliario: {
    pregunta: "¿Tiene un conflicto con una promesa, una compraventa o defectos de construcción?",
    texto: "Revisemos qué tiene a su favor antes de decidir.",
  },
};

export default function MiguelCtaContextual({
  tipo,
  slug,
  tituloNota,
}: {
  tipo: CtaTipo;
  slug: string;
  tituloNota: string;
}) {
  const { pregunta, texto } = TEXTOS[tipo];
  // El mensaje lleva el título de la nota para saber desde cuál llegó el contacto.
  const mensaje = `Hola Miguel, leí su análisis sobre “${tituloNota}” en miguelaylwin.cl y quiero evaluar un caso`;

  return (
    <section className="miguel-band miguel-band--dark miguel-cta-contextual">
      <div className="miguel-container miguel-wide">
        <p className="miguel-label">Siguiente paso</p>
        <h2 className="miguel-display-title" style={{ marginBottom: "1.25rem" }}>
          {pregunta}
        </h2>
        <p style={{ maxWidth: "56ch", opacity: 0.85, margin: 0 }}>{texto}</p>
        <p style={{ marginTop: "2rem", marginBottom: 0 }}>
          <BotonWhatsapp href={enlaceWhatsapp(mensaje)} pagina={`/boletin/${slug}`} ctaTipo={tipo}>
            Escribir por WhatsApp
          </BotonWhatsapp>
        </p>
        <p className="miguel-cta-alternativa">
          O, si prefiere, <Link href="/contacto">escríbame mediante el formulario</Link>.
        </p>
        <p className="miguel-cta-reserva">Desde su primer mensaje rige el deber de reserva.</p>
      </div>
    </section>
  );
}
