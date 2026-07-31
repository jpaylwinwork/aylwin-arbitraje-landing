import type { Metadata } from "next";
import Link from "next/link";
import { getSatelitesByPilar, assertTransversalLinking } from "@/lib/satelites-miguel";

assertTransversalLinking();

export const metadata: Metadata = {
  title: "Arbitraje en conflictos inmobiliarios en Chile: guía completa",
  description:
    "Cómo se resuelven los conflictos inmobiliarios en Chile: promesas de compraventa, vicios de construcción, compra de terrenos y disputas entre socios de proyectos.",
};

export default function PilarInmobiliario() {
  const satelites = getSatelitesByPilar("inmobiliario");

  return (
    <div className="miguel-container miguel-body" style={{ paddingTop: "3rem", paddingBottom: "3rem" }}>
      <div className="miguel-page-title">
        <p className="miguel-label">Pilar · Inmobiliario</p>
        <h1 className="miguel-display-title">Arbitraje en conflictos inmobiliarios</h1>
      </div>
      <h2 style={{ fontSize: "1.2rem", fontWeight: 500 }}>
        La materia más arbitrada de Chile, y la que peor se anticipa al firmar
      </h2>

      <p>
        El 34,2% de los arbitrajes del CAM Santiago corresponde a materias inmobiliarias: 151
        solicitudes en 2025, el segmento más grande de todos. La promesa de compraventa es además
        el cuarto contrato más arbitrado del país, con 74 causas. Y sin embargo es donde las
        cláusulas de resolución de controversias se redactan con menos atención: se copian del
        contrato anterior, se aceptan como vienen del modelo, o se dejan para el final de la
        negociación.
      </p>

      <h2>1. Por qué el conflicto inmobiliario llega tarde</h2>
      <p>
        Un proyecto inmobiliario tiene una característica que lo distingue:{" "}
        <strong>el conflicto suele aparecer cuando el negocio ya se ejecutó.</strong> El terreno se
        compró, el edificio se construyó, las unidades se vendieron. Lo que se discute después es
        si lo que se hizo correspondía a lo que se pactó, y para entonces las decisiones que
        determinan el resultado ya se tomaron —muchas veces años antes, por personas que ya no
        están en la empresa.
      </p>
      <p>
        Esto tiene una consecuencia práctica: en materia inmobiliaria, la calidad del expediente
        depende de disciplina documental sostenida durante todo el proyecto. Las promesas, adendas,
        actas de directorio, informes de due diligence, aprobaciones y recepciones son el caso. No
        hay forma de reconstruirlos después.
      </p>

      <h2>2. Las cuatro controversias que concentran la materia</h2>
      <p>
        <strong>Promesas de compraventa y ventas en verde.</strong> Incumplimiento del plazo de
        entrega, resciliación unilateral, cláusulas penales, devolución de anticipos, cambios en el
        proyecto respecto de lo ofrecido. Es la controversia de mayor volumen.
        <br />
        → <Link href="/promesa-compraventa-venta-en-verde-conflictos">Promesas de compraventa y ventas en verde</Link>
      </p>
      <p>
        <strong>Vicios de construcción y responsabilidad del vendedor.</strong> La inmobiliaria como
        demandada por compradores o por la comunidad. Discusión sobre el tipo de vicio, el plazo
        aplicable, quién responde entre vendedor, constructor y proyectistas, y qué acción de
        repetición existe.
        <br />
        → <Link href="/vicios-construccion-responsabilidad-vendedor">Vicios de construcción: responsabilidad del vendedor</Link>
      </p>
      <p>
        <strong>Compraventa de terrenos con condiciones.</strong> Compras sujetas a la obtención de
        permisos, cambio de uso de suelo, factibilidad sanitaria o resultados de due diligence. Qué
        pasa cuando la condición no se cumple, quién soportó el riesgo y qué se debe restituir.
        <br />
        → <Link href="/compra-terreno-sujeta-permiso-condicion">Compra de terrenos sujeta a permiso: qué pasa si no sale</Link>
      </p>
      <p>
        <strong>Conflictos entre socios de un proyecto.</strong> Sociedades de proyecto, joint
        ventures, pactos de accionistas: aportes no enterados, decisiones de aumento de capital,
        salida de un socio, valorización de la participación. Son las causas de cuantía
        indeterminada que más se ven.
        <br />
        → <Link href="/conflictos-socios-proyecto-inmobiliario">Conflictos entre socios de un proyecto inmobiliario</Link>
      </p>

      <h2>3. La cláusula arbitral en contratos inmobiliarios</h2>
      <p>
        Las mismas cuatro decisiones que en construcción —quién administra, qué tipo de árbitro,
        cuántos árbitros, qué materias quedan sometidas— con dos particularidades propias:
      </p>
      <p>
        <strong>El problema de las partes múltiples.</strong> Un proyecto inmobiliario involucra
        promesa, contrato de construcción, contratos con proyectistas, y a veces un pacto de
        accionistas. Si esos instrumentos tienen cláusulas de resolución distintas, un mismo hecho
        puede terminar discutiéndose en tres foros que no se comunican, con resultados
        potencialmente contradictorios y sin posibilidad de traer a todos los responsables a la
        misma mesa. Revisar la coherencia entre instrumentos vale más que perfeccionar cada cláusula
        por separado.
      </p>
      <p>
        <strong>Contratos con consumidores.</strong> Cuando la contraparte es un comprador persona
        natural, la cláusula arbitral no opera igual que entre empresas: los derechos que la Ley
        19.496 reconoce al consumidor son irrenunciables, y una cláusula que pretenda sustraer el
        conflicto de esa protección puede ser declarada abusiva. La jurisprudencia de la Corte
        Suprema ha invalidado cláusulas de este tipo en promesas de compraventa de viviendas. Es un
        terreno donde la vía arbitral no está asegurada, y conviene evaluarlo caso a caso.
      </p>
      <p>
        → <Link href="/clausula-arbitral-contrato-construccion">Cláusula arbitral: cómo redactarla y los errores que se pagan caros</Link> ·{" "}
        <Link href="/arbitro-derecho-arbitrador-mixto">Árbitro de derecho, arbitrador o mixto</Link>
      </p>

      <h2>4. Costos, plazos y qué hacer si el conflicto empezó</h2>
      <p>
        → <Link href="/cuanto-cuesta-arbitraje-chile">Cuánto cuesta y cuánto dura un arbitraje</Link> ·{" "}
        <Link href="/primeros-30-dias-conflicto">Los primeros 30 días de un conflicto</Link>
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
  );
}
