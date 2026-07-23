const faqs = [
  {
    question: "¿Qué es el arbitraje comercial?",
    answer:
      "Es un mecanismo de resolución de disputas en que un árbitro —generalmente experto en la materia— resuelve controversias comerciales en forma más rápida y confidencial que la justicia ordinaria. En Chile es la vía habitual para conflictos societarios y contractuales de mediana y gran envergadura, frecuentemente ante el CAM Santiago.",
  },
  {
    question: "¿Qué es un reclamo de ilegalidad?",
    answer:
      "Es la vía para impugnar decretos alcaldicios, resoluciones municipales u otros actos de la administración que sean ilegales y afecten a su empresa (por ejemplo, rechazo de una patente o una multa). Los plazos de caducidad son breves, por lo que conviene evaluar el caso apenas se conoce el acto.",
  },
  {
    question: "¿Cuánto demora un arbitraje comercial?",
    answer:
      "Depende de la complejidad del caso y del procedimiento pactado, pero típicamente entre 12 y 24 meses. Una estrategia bien planteada desde el inicio puede acortar significativamente los plazos.",
  },
  {
    question: "¿Qué plazo tengo para reclamar una decisión municipal?",
    answer:
      "Los plazos de caducidad del reclamo de ilegalidad son breves y se cuentan desde la publicación o notificación del acto. Escríbanos con la fecha del decreto o resolución y confirmamos el plazo aplicable a su situación.",
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
        <h2 className="text-3xl sm:text-4xl font-semibold text-ink-900">
          Preguntas frecuentes
        </h2>
        <div className="mt-10 space-y-4">
          {faqs.map((faq) => (
            <details
              key={faq.question}
              className="group rounded-lg border border-line bg-white p-6 open:shadow-sm"
            >
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-lg font-semibold text-ink-900 font-serif">
                {faq.question}
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  className="h-5 w-5 shrink-0 text-brand-600 transition-transform duration-200 group-open:rotate-180"
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
