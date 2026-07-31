import type { Metadata } from "next";
import Link from "next/link";
import { getSatelitesByPilar, assertTransversalLinking } from "@/lib/satelites-miguel";
import MiguelCierreCta from "@/components/miguel/MiguelCierreCta";

assertTransversalLinking();

export const metadata: Metadata = {
  title: "Arbitraje en contratos de construcción en Chile",
  description:
    "Cómo funciona el arbitraje en contratos de construcción en Chile: cláusula arbitral, tipos de árbitro, plazos y costos.",
};

export default function PilarConstruccion() {
  const satelites = getSatelitesByPilar("construccion");

  return (
    <>
    <div className="miguel-container miguel-body" style={{ paddingTop: "3rem", paddingBottom: "3rem" }}>
      <div className="miguel-page-title">
        <p className="miguel-label">Pilar · Construcción</p>
        <h1 className="miguel-display-title">Arbitraje en contratos de construcción</h1>
      </div>
      <h2 style={{ fontSize: "1.2rem", fontWeight: 500 }}>
        Guía para quien tiene un conflicto de obra y todavía no sabe dónde va a terminar
      </h2>

      <p>
        La mayoría de los contratos de construcción relevantes en Chile contiene una cláusula
        arbitral. Casi nadie la lee al firmar. Se lee después, cuando el conflicto ya está
        instalado, y muchas veces se descubre entonces que esa cláusula va a determinar quién
        resuelve, con qué reglas, en cuánto tiempo y a qué costo.
      </p>

      <h2>1. Qué es el arbitraje y en qué se diferencia de ir a tribunales</h2>
      <p>
        El arbitraje es un mecanismo de resolución de conflictos en el que las partes entregan la
        decisión a un tercero que ellas mismas designan —el árbitro—, en lugar de a un juez del
        Estado. Frente a la justicia ordinaria presenta diferencias que importan:
      </p>
      <ul>
        <li>
          <strong>Quien resuelve puede tener conocimiento técnico.</strong> Un juez civil ve
          conflictos de construcción ocasionalmente, entre cientos de materias. Un árbitro elegido
          por su especialidad entiende qué es un análisis de ruta crítica sin que haya que
          explicárselo.
        </li>
        <li>
          <strong>El procedimiento es más flexible.</strong> Según el tipo de árbitro se pueden
          diseñar formas de rendir prueba que la justicia civil no admite con la misma soltura, lo
          que en materia pericial es decisivo.
        </li>
        <li>
          <strong>Es confidencial.</strong> No hay expediente público. Para una empresa que licita,
          eso puede ser relevante.
        </li>
        <li>
          <strong>Es de instancia única en la práctica habitual.</strong> Se gana o se pierde una
          vez.
        </li>
        <li>
          <strong>Las partes pagan al tribunal.</strong> Honorarios del árbitro y administración
          corren por cuenta de las partes: un costo que en sede ordinaria no existe.
        </li>
      </ul>
      <p>
        La confidencialidad y la instancia única son las dos características que más se subestiman
        al firmar y más pesan al litigar.
      </p>

      <h2>2. Por qué los conflictos de construcción no se parecen a los demás</h2>
      <p>
        Un conflicto de construcción rara vez es una discusión sobre el sentido de una cláusula.
        Casi siempre es una discusión sobre hechos: qué se ejecutó, cuándo, por instrucción de
        quién, con qué rendimiento, a qué costo. De ahí que el libro de obra, las actas, los correos
        con la inspección técnica y los estados de pago con sus observaciones sean el caso, y que
        ese material ya esté escrito cuando el conflicto estalla.
      </p>

      <h2>3. La cláusula arbitral: dos líneas que deciden años</h2>
      <p>Cuatro decisiones relevantes:</p>
      <p>
        <strong>Quién administra.</strong> Arbitraje institucional —típicamente ante el CAM
        Santiago— o ad hoc. El institucional aporta reglas conocidas, nómina de árbitros y
        previsibilidad de costos. El ad hoc puede ser más económico y flexible, y también más
        expuesto a maniobras dilatorias.
      </p>
      <p>
        <strong>Qué tipo de árbitro.</strong> De derecho, arbitrador o mixto. Es la decisión más
        consecuente y la que más se toma por inercia.
      </p>
      <p>
        <strong>Cuántos árbitros.</strong> Uno es más barato y más rápido. Tres reparten el riesgo
        de una decisión desafortunada y multiplican el costo. Dado que el 55% de las causas del CAM
        disputa menos de 8.000 UF, tres árbitros rara vez se justifican fuera del tramo alto.
      </p>
      <p>
        <strong>Qué queda dentro.</strong> Una cláusula que somete a arbitraje &quot;las
        controversias derivadas de la interpretación del contrato&quot; deja fuera,
        discutiblemente, las que derivan de su ejecución o terminación. Redacciones estrechas
        producen conflictos sobre dónde se discute el conflicto, que es la peor forma de perder un
        año.
      </p>
      <p>
        → <Link href="/clausula-arbitral-contrato-construccion">Cláusula arbitral: cómo redactarla y los errores que se pagan caros</Link>
      </p>

      <h2>4. Los tres tipos de árbitro</h2>
      <p>
        <strong>Árbitro de derecho.</strong> Tramita conforme a las reglas del procedimiento civil y
        falla conforme a la ley. Máxima certeza jurídica, mínima flexibilidad procesal.
      </p>
      <p>
        <strong>Arbitrador o amigable componedor.</strong> Tramita conforme a las reglas que las
        partes le den o, a falta de ellas, según su prudencia, y falla conforme a lo que su
        prudencia y equidad le dicten. Máxima flexibilidad, mínima previsibilidad.
      </p>
      <p>
        <strong>Árbitro mixto.</strong> Tramita como arbitrador pero falla conforme a derecho. En
        conflictos de construcción esta combinación suele ser la más adecuada, porque permite un
        tratamiento útil de la prueba pericial de ingeniería sin renunciar a que la sentencia se
        someta a la ley de fondo.
      </p>
      <p>
        La designación como mixto o arbitrador supone renunciar a recursos: conforme al art. 239 del
        Código Orgánico de Tribunales pueden renunciarse todos salvo la queja y la casación en la
        forma por incompetencia y ultrapetita, y la casación en el fondo es de por sí improcedente
        contra laudos arbitrales. Es una decisión que conviene tomar entendiendo qué se está
        entregando.
      </p>
      <p>
        → <Link href="/arbitro-derecho-arbitrador-mixto">Árbitro de derecho, arbitrador o mixto: cuál conviene en construcción</Link>
      </p>

      <h2>5. Las materias que más se arbitran en construcción</h2>
      <p>
        <strong>Estados de pago retenidos.</strong> → <Link href="/cobro-estados-de-pago-retenidos">Estados de pago retenidos: cómo se cobran</Link>
      </p>
      <p>
        <strong>Obras extraordinarias y mayores costos.</strong> La controversia más frecuente y la
        que más depende de si el cambio quedó documentado en su momento. →{" "}
        <Link href="/obras-extraordinarias-mayores-costos">Obras extraordinarias y mayores costos: cómo se prueban</Link>
      </p>
      <p>
        <strong>Ampliaciones de plazo y multas por atraso.</strong> Quién causó el retraso, si el
        camino crítico se vio afectado, si hubo eventos concurrentes, si las multas se ajustan al
        contrato.
      </p>
      <p>
        <strong>Vicios y defectos de la obra.</strong> →{" "}
        <Link href="/vicios-construccion-responsabilidad-vendedor">Vicios de construcción: responsabilidad del vendedor</Link>
      </p>
      <p>
        <strong>Terminación anticipada.</strong> La disputa de mayor riesgo, porque arrastra boletas
        de garantía, obra inconclusa y reclamaciones cruzadas. Es una de las que típicamente ingresa
        como cuantía indeterminada.
      </p>

      <h2>6. Antes del arbitraje: los mecanismos que evitan llegar ahí</h2>
      <p>
        <strong>Dispute Boards.</strong> Paneles de expertos independientes constituidos al inicio
        del contrato, que resuelven las discrepancias a medida que aparecen. Su virtud es que
        resuelven mientras la obra avanza. → <Link href="/dispute-boards-chile">Dispute Boards</Link>
      </p>
      <p>
        <strong>Negociación directa ordenada.</strong> La vía más usada y la peor ejecutada. Una
        negociación mal preparada entrega información que después se usa en contra. Una bien
        preparada puede dejar constituida prueba favorable. La diferencia no está en la habilidad
        del negociador sino en si se hizo el análisis previo.
      </p>
      <p>
        <strong>Mediación.</strong> Un tercero facilita el acuerdo sin poder decidir. Funciona cuando
        ambas partes quieren cerrar y no encuentran cómo.
      </p>

      <h2>7. Costos, plazos y primeros pasos</h2>
      <p>
        → <Link href="/cuanto-cuesta-arbitraje-chile">Cuánto cuesta y cuánto dura un arbitraje</Link> ·{" "}
        <Link href="/primeros-30-dias-conflicto">Los primeros 30 días de un conflicto de obra</Link>
      </p>

      <h2 style={{ marginTop: "2.5rem" }}>Todos los temas de este pilar</h2>
      <ul>
        {satelites.map((s) => (
          <li key={s.slug}>
            <Link href={`/${s.slug}`}>{s.title}</Link>
          </li>
        ))}
      </ul>
    </div>
      <MiguelCierreCta />
    </>
  );
}
