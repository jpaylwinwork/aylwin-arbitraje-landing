import type { Metadata } from "next";
import Placeholder from "@/components/miguel/Placeholder";
import ConsultaForm from "@/components/miguel/ConsultaForm";
import StickyCta from "@/components/miguel/StickyCta";
import { CASOS_PRUEBA, casosPruebaListos } from "@/lib/casos-prueba";

export const metadata: Metadata = {
  title: "Miguel Aylwin Fernández · Abogado",
  robots: { index: false, follow: false },
};

export default function Consulta() {
  const mostrarPrueba = casosPruebaListos();

  return (
    <div className="miguel-container miguel-body" style={{ paddingTop: "2.5rem", paddingBottom: "3rem" }}>
      <StickyCta />

      {/* SECCIÓN 1 — Encabezado */}
      <p style={{ fontWeight: 600 }}>Miguel Aylwin Fernández · Abogado</p>
      <p className="miguel-kicker" style={{ marginTop: "1.5rem" }}>
        Para socios y gerentes de inmobiliarias y constructoras con un conflicto de contrato en curso
      </p>
      <h1 style={{ fontSize: "2rem", marginTop: "0.5rem" }}>
        Un conflicto de obra se resuelve bien cuando entiendes tu posición real. No cuando
        encuentras un abogado que te dé la razón.
      </h1>
      <p style={{ marginTop: "1rem" }}>
        Reviso tu caso, te digo con franqueza qué tan sólida es tu posición y cuánto te conviene
        pelear, antes de que gastes un peso en litigar.
      </p>
      <p style={{ marginTop: "1.5rem" }}>
        <a href="#consulta-form" className="miguel-btn">Revisar mi caso →</a>
      </p>
      <p style={{ fontSize: "0.85rem", color: "var(--miguel-muted)" }}>
        Respuesta en 24 horas hábiles. Tu información queda amparada por el secreto profesional
        desde el primer mensaje, exista o no mandato.
      </p>

      {/* SECCIÓN 2 — El problema real */}
      <h2 style={{ marginTop: "4rem" }}>Lo más caro de un conflicto de construcción no suele ser el conflicto.</h2>
      <p>
        Cuatro cosas se repiten en casi todas las conversaciones que tengo con gerentes que ya
        vienen con un juicio andando:
      </p>
      <p>
        <strong>Los honorarios se convirtieron en un pozo sin fondo.</strong>
        <br />
        Partieron en un número y van en cuatro veces ese número, sin que nadie haya explicado por
        qué ni haya pedido aprobación. Cada llamada corre el taxímetro. Perdiste el control
        financiero de tu propio litigio.
      </p>
      <p>
        <strong>El caso desapareció adentro del estudio.</strong>
        <br />
        No sabes en qué está. Si no llamas tú, no te enteras de nada. Mandas un correo y la
        respuesta llega tres días después, o no llega. Tienes que perseguir a tu propio abogado para
        saber de un asunto que puede definir tu año.
      </p>
      <p>
        <strong>Te dan consejos legalmente correctos y comercialmente desastrosos.</strong>
        <br />
        Tu abogado quiere ganar en tribunales. Tú necesitas salvar el negocio. No son lo mismo, y
        cuando no son lo mismo, el que paga la diferencia eres tú. Ganar el juicio en tres años, con
        el capital detenido y el proyecto muerto, no es ganar.
      </p>
      <p>
        <strong>Te vendió el socio y te atiende alguien que no estuvo en esa reunión.</strong>
        <br />
        Contrataste por una conversación con la persona que entendió tu problema. Después esa
        persona desapareció y quedaste explicándole el caso desde cero a alguien que no lo conoce.
      </p>
      <p>Si reconoces dos de estas cuatro, tu problema hoy no es solo el conflicto. Es cómo se está llevando.</p>

      {/* SECCIÓN 3 — Lo que está en juego */}
      <h2 style={{ marginTop: "4rem" }}>En estos negocios el tiempo tiene precio, y el tiempo del litigio lo pagas tú.</h2>
      <p>Mientras el conflicto sigue abierto:</p>
      <ul>
        <li>El capital de trabajo comprometido en la obra queda inmovilizado.</li>
        <li>Las boletas de garantía siguen vigentes y consumen tu línea.</li>
        <li>Tu capacidad de tomar nuevos proyectos se ve condicionada.</li>
        <li>La gerencia dedica horas a un asunto que no genera ingresos.</li>
        <li>Y en los casos más serios, el patrimonio personal de los socios está comprometido como garantía.</li>
      </ul>
      <p>
        Nada de esto se resuelve ganando más tarde. Por eso la primera decisión de un conflicto no
        es cómo ganarlo: es <strong>si conviene pelearlo, cuánto y hasta dónde.</strong> Esa decisión
        requiere un análisis que la mayoría de las veces no se hace.
      </p>
      <p>
        Y hay dos cálculos que casi nadie hace antes de demandar. El primero:{" "}
        <strong>cuánto pesan los costos del proceso frente a lo que se disputa.</strong> En una
        controversia de 2.000 UF los costos fijos pesan proporcionalmente mucho más que en una de
        40.000.
      </p>
      <p>
        El segundo es más incómodo. Según el Reporte Anual 2025 del CAM Santiago,{" "}
        <strong>solo el 47% de los arbitrajes termina en sentencia.</strong> El resto se cierra
        antes: 18% por acuerdo, 11% por desistimiento, 7% por abandono. Más de la mitad de la gente
        que entra a un arbitraje sale por otra puerta. Vale la pena saber por cuál vas a salir tú
        antes de entrar.
      </p>

      {/* SECCIÓN 4 — Cómo trabajo */}
      <h2 style={{ marginTop: "4rem" }}>Antes de recomendarte nada, hago este análisis.</h2>
      <p>
        No es un método con nombre de marca. Es el orden en que hay que mirar un conflicto de obra
        para no decidir a ciegas. Lo publico porque el orden importa más que la técnica.
      </p>
      <p>
        <strong>1. Cuál es el problema de verdad.</strong>
        <br />
        Retrasos, estados de pago rechazados y observaciones técnicas suelen presentarse como tres
        conflictos y ser uno solo: un cambio de proyecto que nunca se formalizó, un desorden
        documental en los cobros, una fricción con la inspección técnica. Tratar el síntoma es
        garantizar que vuelva.
      </p>
      <p>
        <strong>2. Si es puntual o va a repetirse.</strong>
        <br />
        Un problema recurrente necesita solución de fondo. Un acuerdo que solo cierra el episodio de
        hoy asegura el conflicto de mañana en peores condiciones. Esto además define cuánto se puede
        transar.
      </p>
      <p>
        <strong>3. Qué quiere cada parte y qué necesita.</strong>
        <br />
        Las posiciones son rígidas. Los intereses casi nunca: no subir el costo, no detener la obra,
        no sentar precedente, cerrar antes del ejercicio. En los intereses aparecen las salidas que
        en las posiciones no existen.
      </p>
      <p>
        <strong>4. Qué tan sólida es tu posición. De verdad.</strong>
        <br />
        Contrato, adendas, libro de obra, actas, estados de pago, correos con la ITO. Analizados con
        el mismo rigor a favor y en contra. Es la etapa donde más se falla, porque quien lleva meses
        discutiendo ya no puede ver los antecedentes sin sesgo.
      </p>
      <p>
        <strong>5. Cuánto cuesta cada escenario.</strong>
        <br />
        No cuánto cuesta arreglarlo, sino cuánto cuesta mantener tu posición frente a cuánto cuesta
        ceder. Una multa acotada y una terminación de contrato no se calculan igual.
      </p>
      <p>
        <strong>6. Negociar o litigar.</strong>
        <br />
        Recién acá. Con los argumentos sólidos identificados, los cuestionables acotados y una ruta
        con costo estimado.
      </p>
      <p>
        <strong>7. Si se negocia, se negocia preparado.</strong>
        <br />
        Lo que se dice en una negociación puede arruinar el juicio posterior. Hecha con orden, puede
        dejar prueba a tu favor.
      </p>
      <p>
        <strong>8. Si se litiga, la demanda es el final del trabajo, no el principio.</strong>
        <br />
        El peor error es demandar esperando probar después lo que se afirmó al inicio. Peritajes,
        centros de costo, orden documental y testigos se definen antes de escribir.
      </p>
      <p style={{ marginTop: "1.5rem" }}>
        <a href="#consulta-form" className="miguel-btn">Quiero este análisis para mi caso →</a>
      </p>

      {/* SECCIÓN 5 — Lo que no prometo */}
      <h2 style={{ marginTop: "4rem" }}>Nadie puede garantizarte el resultado de un juicio. Desconfía de quien lo haga.</h2>
      <p>
        La historia judicial está llena de casos que se creían ganados y terminaron perdiéndose, con
        excusas sobre el juez o sobre la contraparte.
      </p>
      <p>Lo que sí puedo comprometer:</p>
      <ul>
        <li>Que sepas, antes de gastar, qué tan sólida es tu posición.</li>
        <li>Que conozcas el rango de costo y el plazo estimado antes de empezar.</li>
        <li>Que la estrategia se decida en función de tu negocio y no solo del expediente.</li>
        <li>Que hables conmigo durante todo el caso, no con alguien que no estuvo en la primera reunión.</li>
      </ul>

      {/* SECCIÓN 6 — Prueba (todo o nada) */}
      {mostrarPrueba && (
        <>
          <h2 style={{ marginTop: "4rem" }}>Casos que he trabajado</h2>
          <p>
            Sin nombres ni antecedentes que permitan identificar a las partes: el deber de secreto
            profesional no admite excepciones por marketing.
          </p>
          {CASOS_PRUEBA.map((caso, i) => (
            <p key={i}>
              <strong>Tipo de conflicto</strong> — {caso.tipo}
              <br />
              <strong>Cuantía</strong> — {caso.cuantiaUf}
              <br />
              <strong>Vía</strong> — {caso.via}
              <br />
              <strong>Qué se hizo</strong> — {caso.queSeHizo}
              <br />
              <strong>Resultado</strong> — {caso.resultado}
            </p>
          ))}
        </>
      )}

      {/* SECCIÓN 7 — Con quién no trabajo */}
      <h2 style={{ marginTop: "4rem" }}>Esto no es para todos.</h2>
      <p>Prefiero decirlo antes de que agendes:</p>
      <ul>
        <li>
          <strong>No tomo casos de cuantía menor a 1.000 UF.</strong> No por selectividad, sino
          porque bajo ese monto el costo del proceso rara vez se justifica para ti, y te lo diría
          igual en la reunión.
        </li>
        <li>
          <strong>No trabajo con quien no me muestra todo.</strong> Incluido lo que lo deja mal
          parado. Un antecedente escondido que aparece en la etapa de prueba destruye un caso que
          era ganable.
        </li>
        <li>
          <strong>No sirvo si buscas al abogado más barato.</strong> Si el criterio de decisión es el
          precio por hora, hay opciones mejores que yo.
        </li>
        <li>
          <strong>No sirvo si buscas que te confirmen lo que ya decidiste.</strong> Mi primera
          respuesta puede ser que no te conviene pelear esto.
        </li>
      </ul>

      <h3>Y trabajo de tres formas distintas</h3>
      <p>
        <strong>Entre 1.000 y 8.000 UF</strong> —donde está cerca del 44% de las causas del CAM— el
        servicio es <strong>deliberadamente acotado</strong>: alcance definido por escrito, precio
        fijo por etapa, plazos comprometidos. Un estudio de trescientas horas sobre una disputa de
        3.000 UF sería un mal negocio para ti. Lo que sí tienes es certeza de cuánto pagas y qué
        recibes.
      </p>
      <p>
        <strong>Sobre 8.000 UF</strong> opera todo lo descrito arriba, con dedicación personal. Tomo{" "}
        <Placeholder label="CUPOS" /> casos nuevos al mes en esta modalidad. No es técnica de venta:
        es la consecuencia de que el que revisa el caso sea el mismo que lo lleva.
      </p>
      <p>
        <strong>Si hay algo que impedir esta semana</strong> —una boleta que van a cobrar, un
        terreno que se transfiere, fondos que se están disponiendo— existe el arbitraje de
        emergencia, con alcance corto y honorario de urgencia. En 2025 el CAM resolvió estas
        solicitudes en 5,4 días corridos promedio.
      </p>

      {/* SECCIÓN 8 — Qué pasa si escribes */}
      <h2 style={{ marginTop: "4rem" }}>Qué pasa después de que envías el formulario</h2>
      <p style={{ marginTop: "1rem" }}>
        <Placeholder label="FOTO — retrato de Miguel Aylwin" />
      </p>
      <p><strong>1. Te respondo yo, en 24 horas hábiles.</strong> No un formulario automático ni un asistente.</p>
      <p><strong>2. Si tu caso no es para mí, te lo digo de inmediato</strong> y, cuando puedo, te derivo a alguien que sí.</p>
      <p>
        <strong>3. Si lo es, agendamos 45 minutos.</strong> En esa reunión revisamos qué está
        pasando realmente, cuál es tu posición y qué alternativas tienes. Sales de ahí con una
        opinión, no con una cotización.
      </p>
      <p>
        <strong>4. La reunión no tiene costo y no obliga a nada.</strong> Si después quieres el
        análisis completo de antecedentes —contrato, libro de obra, estados de pago,
        correspondencia— eso ya es trabajo y tiene un honorario que te informo antes, imputable a
        los honorarios si me encargas el caso.
      </p>
      <p>
        <strong>Sobre la confidencialidad:</strong> desde tu primer mensaje rige el deber de secreto
        profesional, exista o no mandato y hayas pagado o no. Tu información no se usa para otro fin
        ni se comparte con nadie.
      </p>

      {/* SECCIÓN 9 — Formulario */}
      <h2 id="formulario" style={{ marginTop: "4rem" }}>Cuéntame tu caso</h2>
      <p>
        Toma dos minutos. No incluyas documentos ni antecedentes reservados en este primer mensaje:
        basta con que me describas la situación en términos generales.
      </p>
      <div style={{ marginTop: "1.5rem" }}>
        <ConsultaForm />
      </div>

      {/* SECCIÓN 10 — Cierre */}
      <h2 style={{ marginTop: "4rem" }}>Si llegaste hasta acá, probablemente el problema es real.</h2>
      <p>Una conversación de 45 minutos no te compromete a nada y puede ahorrarte una decisión cara.</p>
      <p style={{ marginTop: "1rem" }}>
        <a href="#consulta-form" className="miguel-btn">Revisar mi caso →</a>
      </p>

      <p style={{ marginTop: "3rem", fontSize: "0.85rem", color: "var(--miguel-muted)" }}>
        Miguel Aylwin Fernández · Abogado · Aylwin Matta Abogados · Santiago, Chile
        <br />
        <Placeholder label="TELÉFONO" /> · mp@aylwin.cl ·{" "}
        <Placeholder label="POLÍTICA DE PRIVACIDAD" />
      </p>
    </div>
  );
}
