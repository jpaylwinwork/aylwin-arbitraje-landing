import ContactForm from "./ContactForm";

export default function Contact() {
  return (
    <section id="contacto" className="bg-white border-t border-line">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 py-20 sm:py-24 grid grid-cols-1 lg:grid-cols-5 gap-12">
        <div className="lg:col-span-2">
          <h2 className="text-3xl sm:text-4xl font-semibold text-ink-900 text-balance">
            Evaluemos su caso
          </h2>
          <p className="mt-4 text-muted leading-relaxed">
            La primera reunión de evaluación no tiene costo. Cuéntenos su
            controversia y le responderemos dentro del próximo día hábil.
          </p>
          <dl className="mt-10 space-y-6 text-sm">
            <div>
              <dt className="font-bold text-ink-900 uppercase tracking-wide text-xs">
                Teléfono
              </dt>
              <dd className="mt-1">
                <a href="tel:+56222280890" className="text-ink-700 hover:text-ink-600 font-bold text-base">
                  (+56 2) 2228 0890
                </a>
              </dd>
            </div>
            <div>
              <dt className="font-bold text-ink-900 uppercase tracking-wide text-xs">
                Dirección
              </dt>
              <dd className="mt-1 text-muted">
                Av. Apoquindo 3910, Piso 3, Las Condes
                <br />
                Santiago, Chile
              </dd>
            </div>
            <div>
              <dt className="font-bold text-ink-900 uppercase tracking-wide text-xs">
                Estudio
              </dt>
              <dd className="mt-1 text-muted">
                Una práctica respaldada por{" "}
                <a
                  href="https://aylwin.cl"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-ink-700 underline hover:text-ink-600"
                >
                  Aylwin Abogados
                </a>
              </dd>
            </div>
          </dl>
        </div>
        <div className="lg:col-span-3">
          <ContactForm />
        </div>
      </div>
    </section>
  );
}
