import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Mensaje recibido — Miguel Aylwin Fernández",
  robots: { index: false, follow: false },
};

export default function ConsultaGracias() {
  return (
    <div className="miguel-container miguel-body" style={{ paddingTop: "4rem", paddingBottom: "4rem" }}>
      <div className="miguel-aviso" role="status">
        <p className="miguel-label">
          <svg width="15" height="15" viewBox="0 0 16 16" aria-hidden="true" focusable="false">
            <path
              d="M2 8.5l4 4 8-9"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.2"
              strokeLinecap="square"
            />
          </svg>
          Consulta enviada
        </p>
        <h1 className="miguel-display-title">Mensaje recibido</h1>
        <p>
          Te respondo en un plazo de 24 horas hábiles. Si tu caso no es de mi especialidad, te lo
          digo de inmediato y, si puedo, te derivo.
        </p>
        <p className="miguel-aviso-nota">
          Desde tu mensaje rige el deber de secreto profesional, exista o no mandato.
        </p>
      </div>
    </div>
  );
}
