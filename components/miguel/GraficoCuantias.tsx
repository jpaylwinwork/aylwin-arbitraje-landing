// Único gráfico del sitio, y es el que la nota de diseño de 02_WEB_SEO.md
// autoriza expresamente: "barras horizontales de la distribución de cuantías,
// en el color de acento, sin animación".
//
// Barras en HTML/CSS y no en SVG: escalan sin problemas de tamaño de texto en
// móvil, se leen con lector de pantalla a partir del marcado y no requieren
// ninguna librería. Los datos son los mismos de la tabla que sigue —el gráfico
// no la reemplaza, la hace legible de un vistazo.
const TRAMOS = [
  { rango: "0 – 500", causas: 30, pct: 10.6 },
  { rango: "501 – 1.100", causas: 35, pct: 12.3 },
  { rango: "1.101 – 8.000", causas: 91, pct: 32.0 },
  { rango: "8.001 – 25.000", causas: 65, pct: 22.9 },
  { rango: "25.001 – 65.000", causas: 29, pct: 10.2 },
  { rango: "65.001 – 150.000", causas: 12, pct: 4.2 },
  { rango: "150.001 – 350.000", causas: 11, pct: 3.9 },
  { rango: "350.001 y más", causas: 11, pct: 3.9 },
];

const MAXIMO = Math.max(...TRAMOS.map((t) => t.pct));

export default function GraficoCuantias() {
  return (
    <figure className="miguel-grafico">
      <ul>
        {TRAMOS.map((t) => (
          <li key={t.rango}>
            <span className="miguel-grafico-etiqueta">{t.rango}</span>
            <span className="miguel-grafico-pista">
              <span
                className="miguel-grafico-barra"
                style={{ width: `${(t.pct / MAXIMO) * 100}%` }}
              />
            </span>
            <span className="miguel-grafico-valor">
              {t.pct.toLocaleString("es-CL", { minimumFractionDigits: 1 })}%
            </span>
          </li>
        ))}
      </ul>
      <figcaption>
        Distribución de las 284 causas con cuantía determinada iniciadas en 2025, en UF. Fuente:
        Reporte Anual 2025 del CAM Santiago.
      </figcaption>
    </figure>
  );
}
