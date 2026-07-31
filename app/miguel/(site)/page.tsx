import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Arbitraje inmobiliario y de construcción en Chile — Miguel Aylwin",
  description:
    "Cómo se resuelven los conflictos de contratos inmobiliarios y de construcción en Chile: arbitraje, cláusulas, cuantías, costos y qué hacer cuando el conflicto recién empieza.",
};

export default function MiguelHub() {
  return (
    <div className="miguel-container miguel-body" style={{ paddingTop: "3rem", paddingBottom: "3rem" }}>
      <h1 style={{ fontSize: "2.1rem" }}>Conflictos inmobiliarios y de construcción</h1>
      <h2
        style={{
          fontSize: "1.25rem",
          fontWeight: 400,
          marginTop: "0.9rem",
          marginBottom: "2rem",
          color: "var(--miguel-muted)",
          lineHeight: 1.45,
        }}
      >
        Cómo se resuelven en Chile, cuánto cuestan y qué conviene hacer antes de decidir
      </h2>

      <p>
        Más de la mitad de los arbitrajes que administra el Centro de Arbitraje y Mediación de la
        Cámara de Comercio de Santiago corresponde a conflictos inmobiliarios y de construcción:
        34,2% y 20,9% respectivamente de las 489 solicitudes ingresadas en 2025.
      </p>

      <p>
        Casi nadie lee la cláusula arbitral al firmar. Se lee después, cuando el conflicto ya está
        instalado, y ahí se descubre que esas dos líneas —redactadas por alguien que no pensaba en
        este momento— determinan quién resuelve, con qué reglas, en cuánto tiempo y a qué costo.
      </p>

      <p>
        Este sitio explica cómo funciona ese sistema. No es un folleto. Está escrito para que un
        socio o gerente pueda entender su propia situación antes de sentarse con un abogado, y para
        que esa conversación sea más útil.
      </p>

      <p style={{ marginTop: "1.5rem", lineHeight: 2.3 }}>
        <Link href="/arbitraje-construccion-chile">→ Si tu conflicto es de un contrato de construcción o de obra</Link>
        <br />
        <Link href="/arbitraje-inmobiliario-chile">→ Si tu conflicto es inmobiliario: promesas, vicios, terrenos, socios</Link>
        <br />
        <Link href="/cuanto-cuesta-arbitraje-chile">→ Si quieres saber cuánto cuesta y cuánto dura un arbitraje</Link>
        <br />
        <Link href="/primeros-30-dias-conflicto">→ Si el conflicto acaba de empezar y no sabes qué hacer primero</Link>
      </p>

      <h2>Lo que estos conflictos tienen en común</h2>

      <p>
        <strong>La prueba se construye antes del juicio, no durante.</strong> El libro de obra, las
        actas, los correos con la inspección técnica, los estados de pago con sus observaciones, las
        adendas, las órdenes de cambio: eso es el expediente. Cuando el conflicto estalla, ese
        material ya está escrito y no se puede mejorar. La mayoría de estos casos se ganan o se
        pierden mucho antes de que exista una demanda.
      </p>

      <p>
        <strong>Los problemas rara vez vienen solos.</strong> Un retraso, un estado de pago
        rechazado y una observación técnica suelen presentarse como tres conflictos y ser uno solo
        con tres manifestaciones: una fricción con la inspección técnica, un desorden documental en
        los cobros, un cambio de proyecto que nunca se formalizó. Tratarlos por separado es tratar
        el síntoma.
      </p>

      <p>
        <strong>El tiempo tiene precio.</strong> En negocios intensivos en capital, donde la
        utilidad de un proyecto pende de un margen estrecho, un conflicto prolongado inmoviliza
        capital de trabajo, condiciona el acceso a nuevos proyectos y compromete boletas de
        garantía. Un resultado favorable que llega tarde puede ser, en términos de negocio,
        indistinguible de una derrota.
      </p>

      <h2>Antes de decidir nada: el análisis</h2>

      <p>
        Esta es la metodología con la que trabajo. La publico porque el orden importa más que la
        técnica: la mayoría de los errores caros en estos conflictos no vienen de una mala
        decisión, sino de haber decidido antes de saber.
      </p>

      <p>
        <strong>1. Cuál es el problema de verdad.</strong> Identificar el origen real. Con
        frecuencia, controversias que aparentan ser múltiples y aisladas provienen de un mismo
        origen: un problema de interpretación contractual, un cambio de proyecto que nunca se
        formalizó, un desorden documental, una fricción de gobernanza.
      </p>
      <p>
        <strong>2. Si es puntual o va a repetirse.</strong> Un problema recurrente requiere
        solución de fondo. Un acuerdo que solo cierra el episodio de hoy asegura el conflicto de
        mañana en peores condiciones. Esto además fija el margen real de negociación.
      </p>
      <p>
        <strong>3. Posiciones e intereses de ambas partes.</strong> Las posiciones son rígidas
        —&quot;esto estaba en el proyecto&quot; frente a &quot;esto era extraordinario&quot;—. Los
        intereses casi nunca: no subir el costo, no detener el avance, no sentar precedente, cerrar
        antes del cierre del ejercicio. En los intereses aparecen las salidas que en las posiciones
        no existen.
      </p>
      <p>
        <strong>4. Fortalezas y debilidades, sin sesgo.</strong> Revisión de contrato, adendas,
        comunicaciones, libro de obra, estados de pago y actas, analizados con el mismo rigor a
        favor y en contra. Es la etapa donde más se falla, porque quien lleva meses dentro de la
        discusión ya no puede ver los antecedentes con objetividad.
      </p>
      <p>
        <strong>5. Perjuicios y costos.</strong> No cuánto cuesta arreglar el problema, sino cuánto
        cuesta mantener la posición frente a cuánto cuesta cederla. Una multa acotada y una
        terminación anticipada de contrato no admiten el mismo cálculo.
      </p>
      <p>
        <strong>6. Negociar o litigar.</strong> Recién acá, con los argumentos sólidos
        identificados, los cuestionables acotados y una ruta con costo estimado.
      </p>
      <p>
        <strong>7. Si se negocia, se negocia preparado.</strong> Lo que se dice en una negociación
        puede perjudicar irremediablemente la posición posterior. Hecha con orden, puede dejar
        constituida prueba favorable.
      </p>
      <p>
        <strong>8. Si se litiga, la demanda es el final del trabajo.</strong> El peor error es
        demandar esperando acreditar después lo que se afirmó al inicio. Peritajes, centros de
        costo, orden documental y testigos se definen antes de escribir.
      </p>

      <p>
        <strong>Nadie puede garantizar el resultado de un juicio.</strong> La historia judicial está
        llena de casos que se creían ganados y terminaron perdiéndose, con excusas sobre el juez o
        sobre la contraparte. Lo que sí puede conseguirse es que el resultado esté dentro de lo
        previsto, y que las decisiones se hayan tomado sabiendo lo que estaba en juego.
      </p>

      <p style={{ marginTop: "2rem" }}>
        <Link href="/como-trabajo">Cómo trabajo</Link> · <Link href="/quien-soy">Quién soy</Link> ·{" "}
        <Link href="/contacto">Contacto</Link>
      </p>
    </div>
  );
}
