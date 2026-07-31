import Placeholder from "./Placeholder";

export default function MiguelFooter() {
  return (
    <footer className="miguel-footer">
      <div
        className="miguel-container miguel-wide"
        style={{
          padding: "3rem 20px",
          fontFamily: "var(--miguel-sans)",
          fontSize: "0.85rem",
          lineHeight: 1.8,
        }}
      >
        <p className="miguel-footer-name">Miguel Aylwin Fernández</p>
        <p style={{ marginTop: "0.5rem", opacity: 0.72 }}>Abogado · Aylwin Matta Abogados</p>
        <p style={{ marginTop: "1.25rem", opacity: 0.72 }}>
          Av. Apoquindo 3910, piso 3, Las Condes · Santiago, Chile
        </p>
        <p style={{ opacity: 0.72 }}>
          <Placeholder label="TELÉFONO" /> · <a href="mailto:mp@aylwin.cl">mp@aylwin.cl</a>
        </p>
      </div>
    </footer>
  );
}
