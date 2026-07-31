import type { Metadata } from "next";
import MiguelContactForm from "@/components/miguel/MiguelContactForm";

export const metadata: Metadata = {
  title: "Contacto — Miguel Aylwin Fernández, abogado",
  description:
    "Conversemos sobre tu conflicto inmobiliario o de construcción antes de decidir qué hacer.",
};

export default function Contacto() {
  return (
    <div className="miguel-container miguel-body" style={{ paddingTop: "3rem", paddingBottom: "3rem" }}>
      <div className="miguel-page-title">
        <p className="miguel-label">Contacto</p>
        <h1 className="miguel-display-title">Conversemos sobre tu caso</h1>
      </div>

      <p>
        Si tienes un conflicto en un contrato inmobiliario o de construcción y quieres una opinión
        antes de decidir qué hacer, escríbeme.
      </p>

      <h2>Cómo funciona</h2>
      <ol>
        <li>Completas el formulario. Toma dos minutos.</li>
        <li>
          Te respondo en un plazo de 3 días hábiles. Si el caso no es de
          mi especialidad, te lo digo y, si puedo, te derivo.
        </li>
        <li>Si corresponde, agendamos una reunión de 45 minutos para revisar tu situación.</li>
      </ol>

      <p>
        <strong>Lo que pasa con lo que me cuentes:</strong> desde tu primer mensaje rige el deber de
        reserva, aunque no llegue a existir mandato ni pago de honorarios. El Código de Ética
        Profesional (2011) extiende al cliente potencial —quien consulta seriamente al abogado por
        un asunto— los deberes de confidencialidad y lealtad propios del cliente (art. 20). Tu
        información no se usa para otro fin ni se comparte.
      </p>

      <div style={{ marginTop: "2rem" }}>
        <MiguelContactForm />
      </div>

      <h2 style={{ marginTop: "2.5rem" }}>Datos profesionales</h2>
      <p>
        <strong>Miguel Aylwin Fernández</strong> — Abogado
        <br />
        Socio de Aylwin Matta Abogados
        <br />
        Av. Apoquindo 3910, piso 3, Las Condes · Santiago, Chile
        <br />
        <a href="tel:+56969080084">+56 9 6908 0084</a> ·{" "}
        <a href="mailto:mp@aylwin.cl">mp@aylwin.cl</a>
      </p>
    </div>
  );
}
