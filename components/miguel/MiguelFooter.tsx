import Placeholder from "./Placeholder";

export default function MiguelFooter() {
  return (
    <footer style={{ borderTop: "1px solid var(--miguel-line)", marginTop: "4rem" }}>
      <div
        className="miguel-container"
        style={{
          padding: "2rem 20px",
          fontFamily: "var(--font-poppins, system-ui), sans-serif",
          fontSize: "0.85rem",
          color: "var(--miguel-muted)",
        }}
      >
        <p>Miguel Aylwin Fernández · Abogado</p>
        <p style={{ marginTop: "0.35rem" }}>
          Av. Apoquindo 3910, piso 3, Las Condes · Santiago, Chile
        </p>
        <p style={{ marginTop: "0.35rem" }}>
          <Placeholder label="TELÉFONO" /> · <a href="mailto:mp@aylwin.cl">mp@aylwin.cl</a>
        </p>
        <p style={{ marginTop: "1rem" }}>Aylwin Matta Abogados</p>
      </div>
    </footer>
  );
}
