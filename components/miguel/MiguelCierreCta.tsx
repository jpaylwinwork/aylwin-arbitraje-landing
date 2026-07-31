import Link from "next/link";

// Bloque de cierre para las páginas de contenido. Antes, un lector que
// terminaba un pilar de 2.300 palabras no tenía ningún paso siguiente: el
// único enlace a /contacto era el del menú. Este bloque cierra esa fuga.
//
// Va fuera de la columna de lectura, a sangre completa, para que se lea como
// un cambio de sección y no como un párrafo más del artículo.
export default function MiguelCierreCta({ texto }: { texto?: string }) {
  return (
    <section className="miguel-band miguel-band--dark">
      <div className="miguel-container miguel-wide">
        <p className="miguel-label">Siguiente paso</p>
        <h2 className="miguel-display-title" style={{ marginBottom: "1.25rem" }}>
          ¿Tienes un conflicto en curso?
        </h2>
        <p style={{ maxWidth: "56ch", opacity: 0.85, margin: 0 }}>
          {texto ??
            "Si quieres una opinión sobre tu situación antes de decidir qué hacer, escríbeme y lo revisamos. La primera reunión no tiene costo y no compromete a nada."}
        </p>
        <p style={{ marginTop: "2rem", marginBottom: 0 }}>
          <Link href="/contacto" className="miguel-btn">
            Conversemos sobre tu caso
          </Link>
        </p>
      </div>
    </section>
  );
}
