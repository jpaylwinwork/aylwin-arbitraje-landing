import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Mensaje recibido — Miguel Aylwin Fernández",
  robots: { index: false, follow: false },
};

export default function ConsultaGracias() {
  return (
    <div className="miguel-container miguel-body" style={{ paddingTop: "4rem", paddingBottom: "4rem", textAlign: "center" }}>
      <h1 style={{ fontSize: "1.8rem" }}>Mensaje recibido</h1>
      <p style={{ marginTop: "1rem" }}>
        Te respondo en un plazo de 24 horas hábiles. Si tu caso no es de mi especialidad, te lo digo
        de inmediato y, si puedo, te derivo.
      </p>
      <p style={{ marginTop: "1rem", color: "var(--miguel-muted)", fontSize: "0.9rem" }}>
        Desde tu mensaje rige el deber de secreto profesional, exista o no mandato.
      </p>
    </div>
  );
}
