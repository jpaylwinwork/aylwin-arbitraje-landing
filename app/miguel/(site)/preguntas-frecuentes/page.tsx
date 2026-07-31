import type { Metadata } from "next";
import { JsonLd, faqPageSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Arbitraje inmobiliario y de construcción en Chile: preguntas frecuentes",
  description:
    "Respuestas directas sobre arbitraje en contratos de construcción e inmobiliarios en Chile: cláusula arbitral, costos, tipos de árbitro, plazos y arbitraje de emergencia.",
};

const faqs = [
  {
    pregunta: "¿Qué es el arbitraje en un contrato de construcción o inmobiliario?",
    respuesta:
      "Es el mecanismo por el cual las partes entregan la resolución de sus conflictos a un árbitro que ellas designan, en lugar de a los tribunales ordinarios. En Chile es la vía habitual en contratos de obra, promesas de compraventa, proyectos inmobiliarios e infraestructura, y suele estar pactada en el propio contrato mediante una cláusula arbitral.",
  },
  {
    pregunta: "¿Qué materias se arbitran más en Chile?",
    respuesta:
      "Según el Reporte Anual 2025 del CAM Santiago, las materias inmobiliarias concentran el 34,2% de las solicitudes de arbitraje, construcción e infraestructura el 20,9%, y sociedades comerciales y energía un 8,8% cada una. Más de la mitad del arbitraje institucional chileno corresponde entonces a conflictos inmobiliarios y de construcción.",
  },
  {
    pregunta: "¿Cuánto se disputa habitualmente en un arbitraje en Chile?",
    respuesta:
      "De las causas ingresadas al CAM Santiago en 2025 con cuantía determinada, el 55% disputaba menos de 8.000 UF y el 45% más de esa cifra. El tramo más frecuente es el de 1.101 a 8.000 UF, con el 32% de los casos. Un 22% supera las 25.000 UF.",
  },
  {
    pregunta: "¿El arbitraje sirve para disputas pequeñas o solo para casos grandes?",
    respuesta:
      "Sirve para ambos. El CAM Santiago opera de hecho dos circuitos: los Árbitros Jóvenes concentran las causas de 1.101 a 8.000 UF —el 55% de sus casos— y los árbitros de nómina general las mayores, con el 68% de sus causas sobre 8.000 UF.",
  },
  {
    pregunta: "¿Es obligatorio ir a arbitraje si el contrato tiene cláusula arbitral?",
    respuesta:
      "Sí. Si el contrato contiene una cláusula arbitral válida, las partes quedan obligadas a someter allí sus controversias, y el tribunal ordinario ante el que se demande puede ser excepcionado por esa razón. Solo cabe apartarse por acuerdo posterior de ambas partes.",
  },
  {
    pregunta: "¿Cuál es la diferencia entre árbitro de derecho, arbitrador y mixto?",
    respuesta:
      "El árbitro de derecho tramita y falla conforme a la ley. El arbitrador tramita según las reglas que las partes le den y falla en prudencia y equidad. El mixto combina ambos: tramita con la flexibilidad del arbitrador y falla conforme a derecho. En construcción, el mixto suele ser el más adecuado por el peso de la prueba pericial.",
  },
  {
    pregunta: "¿Qué documentos son clave en un conflicto de construcción?",
    respuesta:
      "El libro de obra, las actas de reunión, los estados de pago con sus observaciones, las órdenes de cambio, la correspondencia formal con la inspección técnica y el contrato con sus adendas. En la práctica, el resultado se define por lo que quedó escrito durante la ejecución, no por lo que se argumente después.",
  },
  {
    pregunta: "¿Qué puedo hacer si el mandante retiene estados de pago?",
    respuesta:
      "Primero, formalizar el reclamo por la vía contractual dentro de los plazos que el contrato exija, y dejar reserva escrita de derechos si se sigue ejecutando. Después, según lo que el contrato prevea: escalamiento interno, Dispute Board, arbitraje, o cobro ejecutivo si el título lo permite.",
  },
  {
    pregunta: "¿Cómo se prueba que una obra fue extraordinaria y no parte del contrato?",
    respuesta:
      "Con documentación generada en el momento: orden de cambio firmada, instrucción escrita de la inspección técnica, anotación en libro de obra o acta de reunión. El valor probatorio disminuye conforme el respaldo es más informal. Una reserva escrita al momento de ejecutar, aunque sea unilateral, mejora la posición.",
  },
  {
    pregunta: "¿Qué pasa si la inmobiliaria no entrega el departamento en el plazo prometido?",
    respuesta:
      "Depende de lo que la promesa pactó para ese escenario: causales de prórroga, si operan de pleno derecho o requieren aviso, y qué cláusula penal se estableció. La discusión rara vez es sobre si hubo retraso, sino sobre qué consecuencias se acordaron y si las prórrogas se comunicaron formalmente.",
  },
  {
    pregunta: "¿Quién responde por los vicios de construcción de un edificio?",
    respuesta:
      "El art. 18 de la Ley General de Urbanismo y Construcciones radica la responsabilidad frente al comprador en el propietario primer vendedor, que responde de forma objetiva y luego repite contra constructora y proyectistas. Los plazos son 10 años para fallas estructurales, 5 para elementos constructivos e instalaciones y 3 para terminaciones, contados desde la recepción municipal de la obra.",
  },
  {
    pregunta: "¿Qué pasa si compré un terreno sujeto a permiso y el permiso no sale?",
    respuesta:
      "Depende de cómo se redactó la condición: qué hecho exactamente la cumple, quién debía gestionarlo, en qué plazo y qué ocurre si vence sin resolución de la autoridad. La mayoría de los conflictos nace de condiciones sin plazo máximo o sin definir a quién correspondía la gestión.",
  },
  {
    pregunta: "¿Conviene negociar antes de iniciar un arbitraje?",
    respuesta:
      "Conviene, pero solo después de haber analizado la propia posición. Una negociación anterior al análisis suele entregar información que después se usa en contra o producir reconocimientos difíciles de revertir. Hecha con preparación, en cambio, puede dejar constituida prueba favorable para el proceso posterior.",
  },
  {
    pregunta: "¿Quién paga los costos de un arbitraje?",
    respuesta:
      "Inicialmente las partes, conforme al reglamento aplicable: honorarios del árbitro, administración del centro, peritajes y abogados propios. Al dictar sentencia, el tribunal se pronuncia sobre las costas, y el Reglamento CAM 2021 le permite ponderar el resultado del arbitraje y la conducta procesal de cada parte, con el criterio del reembolso razonable.",
  },
  {
    pregunta: "¿Puedo cambiar la cláusula arbitral de un contrato ya firmado?",
    respuesta:
      "Sí, por acuerdo de ambas partes mediante adenda. Es más frecuente de lo que parece cuando el conflicto todavía no ha estallado y ambas partes advierten que la cláusula vigente las perjudica —por ejemplo, si obliga a tres árbitros en una controversia que no lo justifica.",
  },
  {
    pregunta: "¿Qué es un arbitraje ad hoc y en qué se diferencia del institucional?",
    respuesta:
      "En el arbitraje institucional, un centro como el CAM Santiago administra el proceso y aplica su reglamento. En el ad hoc no hay institución administradora: rigen las reglas que las partes acuerden o el árbitro fije. El institucional aporta previsibilidad; el ad hoc, mayor flexibilidad y menor costo administrativo.",
  },
  {
    pregunta: "¿Qué es el arbitraje de emergencia?",
    respuesta:
      "Es un mecanismo para obtener una medida urgente antes de que se constituya el tribunal arbitral que verá el fondo del asunto. En el CAM Santiago, durante 2025 el plazo promedio desde la aceptación del árbitro de emergencia hasta la sentencia fue de 5,4 días corridos, y tres de cada cuatro solicitudes fueron acogidas total o parcialmente.",
  },
  {
    pregunta: "¿Sirve el arbitraje de emergencia en conflictos de construcción?",
    respuesta:
      "Es donde más se usa. De las 27 solicitudes de arbitraje de emergencia presentadas ante el CAM Santiago en 2025, 14 correspondieron a construcción —el 51,8%— y 4 a materias inmobiliarias. La razón es estructural: en obra el daño se produce mientras se discute, y una sentencia dos años después ya no lo repara.",
  },
  {
    pregunta: "¿Qué tipo de árbitro se designa más en Chile?",
    respuesta:
      "En 2025, el 58,5% de las designaciones del CAM Santiago recayó en árbitros mixtos y el 41,5% en arbitradores. No se registraron designaciones de árbitros de derecho. El mercado chileno prefiere procedimientos flexibles, con o sin sujeción a la ley de fondo al momento de fallar.",
  },
  {
    pregunta: "¿Puedo elegir a mi árbitro?",
    respuesta:
      "En más de la mitad de los casos sí, y casi nadie lo usa. De las causas informadas por el CAM Santiago en 2025, el 57% contemplaba la designación de común acuerdo, pero solo el 20,7% terminó designando de ese modo. En el resto designó el Consejo del Centro.",
  },
  {
    pregunta: "¿Todos los arbitrajes terminan en sentencia?",
    respuesta:
      "No. De las 464 causas de arbitraje nacional terminadas en el CAM Santiago durante 2025, solo el 47% concluyó por laudo arbitral. Un 18% terminó por acuerdo entre las partes, un 11% por desistimiento y un 7% por abandono. Más de la mitad de los arbitrajes se cierra sin sentencia.",
  },
  {
    pregunta: "¿Qué contratos generan más arbitrajes en Chile?",
    respuesta:
      "Según el Reporte Anual 2025 del CAM Santiago: compraventa (101 causas), prestación de servicios (89), contrato de construcción (76) y promesa de compraventa (74). Los contratos de construcción e inmobiliarios concentran, en conjunto, la mayor proporción de cláusulas arbitrales efectivamente invocadas.",
  },
  {
    pregunta: "¿Qué es un Dispute Board?",
    respuesta:
      "Es un panel de expertos independientes constituido al inicio de un contrato de construcción, que acompaña la obra y resuelve las discrepancias a medida que surgen. Según su modalidad, emite recomendaciones no vinculantes o decisiones de cumplimiento obligatorio, lo que permite destrabar el conflicto sin detener el avance de la obra.",
  },
];

export default function PreguntasFrecuentes() {
  const schema = faqPageSchema(faqs);
  return (
    <div className="miguel-container miguel-body" style={{ paddingTop: "3rem", paddingBottom: "3rem" }}>
      <JsonLd data={schema} />
      <div className="miguel-page-title">
        <p className="miguel-label">Preguntas frecuentes</p>
        <h1 className="miguel-display-title">Preguntas frecuentes</h1>
      </div>
      <p style={{ color: "var(--miguel-muted)", fontSize: "0.9rem" }}>
        Arbitraje inmobiliario y de construcción en Chile.
      </p>
      <div style={{ marginTop: "2rem" }}>
        {faqs.map((f) => (
          <div key={f.pregunta} style={{ marginBottom: "1.75rem" }}>
            <h2 style={{ fontSize: "1.05rem", fontWeight: 600 }}>{f.pregunta}</h2>
            <p style={{ marginTop: "0.4rem" }}>{f.respuesta}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
