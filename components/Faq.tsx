const faqs = [
  {
    question: "¿Qué es el arbitraje de construcción?",
    answer:
      "Es un mecanismo de resolución de disputas en que un árbitro —generalmente experto en la materia— resuelve controversias derivadas de contratos de obra, en forma más rápida y especializada que la justicia ordinaria. En Chile es la vía habitual para conflictos de construcción de mediana y gran envergadura, frecuentemente ante el CAM Santiago.",
  },
  {
    question: "¿Cuándo conviene presentar un claim?",
    answer:
      "Idealmente durante la ejecución de la obra, apenas se produce el hecho que genera mayores costos o plazos (interferencias, modificaciones, aumentos de obra). La documentación oportuna del claim es decisiva: mientras antes se estructure, mayores son las probabilidades de éxito en una negociación o arbitraje posterior.",
  },
  {
    question: "¿Cuánto demora un arbitraje de construcción en Chile?",
    answer:
      "Depende de la complejidad del caso y del procedimiento pactado, pero típicamente entre 12 y 24 meses. Una estrategia bien planteada desde el inicio —incluyendo la prueba pericial— puede acortar significativamente los plazos.",
  },
  {
    question: "¿Qué pasa si mi contrato no tiene cláusula arbitral?",
    answer:
      "Las partes siempre pueden acordar someter la disputa a arbitraje una vez surgido el conflicto. Si no hay acuerdo, la controversia se tramita ante tribunales ordinarios, donde también litigamos. Evaluamos el escenario y recomendamos la vía más conveniente.",
  },
  {
    question: "¿Cómo se estructuran los honorarios?",
    answer:
      "Cada caso es distinto. En la primera reunión —sin costo— evaluamos la controversia y proponemos un esquema de honorarios transparente y acorde a la envergadura del asunto.",
  },
];

export default function Faq() {
  return (
    <section id="faq" className="bg-surface">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 py-20 sm:py-24">
        <h2 className="text-3xl sm:text-4xl font-semibold text-navy-900">
          Preguntas frecuentes
        </h2>
        <div className="mt-10 space-y-4">
          {faqs.map((faq) => (
            <details
              key={faq.question}
              className="group rounded-lg border border-line bg-white p-6 open:shadow-sm"
            >
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-lg font-semibold text-navy-900 font-serif">
                {faq.question}
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  className="h-5 w-5 shrink-0 text-gold-600 transition-transform duration-200 group-open:rotate-180"
                  aria-hidden="true"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                </svg>
              </summary>
              <p className="mt-4 text-sm text-muted leading-relaxed">
                {faq.answer}
              </p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
