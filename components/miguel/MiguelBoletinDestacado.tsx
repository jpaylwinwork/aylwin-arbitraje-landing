import Image from "next/image";
import Link from "next/link";
import { getEntradas, formatearFecha } from "@/lib/boletin-miguel";

// Banda de últimas publicaciones para la portada. No se renderiza si no hay
// entradas, de modo que la portada no muestre una sección vacía mientras el
// boletín no tenga contenido.
export default function MiguelBoletinDestacado({ maximo = 3 }: { maximo?: number }) {
  const entradas = getEntradas().slice(0, maximo);
  if (entradas.length === 0) return null;

  return (
    <section className="miguel-band miguel-band--tint">
      <div className="miguel-container miguel-wide">
        <p className="miguel-label">Boletín</p>
        <h2 className="miguel-display-title">Novedades y publicaciones</h2>
        <p className="miguel-boletin-bajada">
          Jurisprudencia, cambios normativos y las publicaciones del estudio, siempre con la fuente
          a la vista.
        </p>

        <ul className="miguel-destacados">
          {entradas.map((e) => (
            <li key={e.slug}>
              <Link href={`/boletin/${e.slug}`}>
                {e.imagen ? (
                  <span className="miguel-destacados-foto">
                    <Image
                      src={e.imagen}
                      alt=""
                      width={480}
                      height={320}
                      sizes="(max-width: 760px) 100vw, 220px"
                    />
                  </span>
                ) : null}
                <span className="miguel-destacados-texto">
                  <span className="miguel-destacados-meta">
                    {e.categoria}
                    {e.date ? ` · ${formatearFecha(e.date)}` : ""}
                  </span>
                  <span className="miguel-destacados-titulo">{e.title}</span>
                  {e.description ? (
                    <span className="miguel-destacados-bajada">{e.description}</span>
                  ) : null}
                </span>
              </Link>
            </li>
          ))}
        </ul>

        <p style={{ marginTop: "2rem", marginBottom: 0 }}>
          <Link href="/boletin" className="miguel-btn miguel-btn-outline">
            Ver todo el boletín
          </Link>
        </p>
      </div>
    </section>
  );
}
