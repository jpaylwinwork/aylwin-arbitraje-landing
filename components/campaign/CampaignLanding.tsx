"use client";

import { useEffect, useState, type FormEvent } from "react";

export type CampaignContent = {
  materia: string;
  h1: string;
  subtitulo: string;
  ctaWhatsApp: string;
  ctaWhatsAppCorto: string;
  msgWhatsAppBase: string;
  descarte: string;
  pasos: [string, string, string];
  experiencia: { titulo: string; items: string[]; nota: string };
  faq: { pregunta: string; respuesta: string }[];
};

// Placeholder hasta que MAF entregue el número corporativo (solo dígitos, ej. 569XXXXXXXX)
const NUMERO_WSP = "XXXXXXXXXXX";
const RESPUESTA = "Respondemos en menos de 8 horas hábiles";

const CLICK_ID_KEYS = ["gclid", "wbraid", "gbraid"] as const;
const UTM_KEYS = ["utm_source", "utm_medium", "utm_campaign", "utm_term"] as const;

function useTracking() {
  const [tracking, setTracking] = useState<Record<string, string>>({});
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const captured: Record<string, string> = {};
    for (const key of UTM_KEYS) {
      const value = params.get(key) ?? sessionStorage.getItem(key);
      if (value) {
        captured[key] = value;
        sessionStorage.setItem(key, value);
      }
    }
    for (const key of CLICK_ID_KEYS) {
      const fresh = params.get(key);
      if (fresh) {
        localStorage.setItem("click_id", `${key}:${fresh}`);
        break;
      }
    }
    const clickId = localStorage.getItem("click_id");
    if (clickId) captured.click_id = clickId;
    setTracking(captured);
  }, []);
  return tracking;
}

function whatsAppHref(msgBase: string, ref: string | undefined) {
  const msg = ref ? `${msgBase} Ref: ${ref}` : msgBase;
  return `https://wa.me/${NUMERO_WSP}?text=${encodeURIComponent(msg)}`;
}

function WspButton({
  label,
  msgBase,
  clickId,
  className,
}: {
  label: string;
  msgBase: string;
  clickId?: string;
  className?: string;
}) {
  return (
    <a
      href={whatsAppHref(msgBase, clickId)}
      rel="noopener"
      className={
        className ??
        "inline-flex items-center justify-center gap-2 rounded-md bg-[#0e7a5f] px-7 py-4 text-base font-bold text-white hover:bg-[#0c6a52] transition-colors"
      }
    >
      <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5" aria-hidden="true">
        <path d="M12 2a10 10 0 0 0-8.6 15.1L2 22l5.1-1.3A10 10 0 1 0 12 2Zm5.2 14.2c-.2.6-1.3 1.2-1.8 1.2-.5.1-1 .2-3.3-.7-2.8-1.2-4.6-4-4.7-4.2-.1-.2-1.1-1.5-1.1-2.9s.7-2 1-2.3c.2-.3.5-.3.7-.3h.5c.2 0 .4 0 .6.4l.9 2.1c.1.2.1.4 0 .6l-.4.6-.5.5c-.2.2-.3.3-.1.6.2.3.8 1.4 1.8 2.2 1.2 1.1 2.3 1.4 2.6 1.6.3.1.5.1.7-.1l1-1.2c.2-.3.4-.2.7-.1l2 1c.3.1.5.2.6.4 0 .1 0 .7-.2 1.3Z" />
      </svg>
      {label}
    </a>
  );
}

export default function CampaignLanding({ content }: { content: CampaignContent }) {
  const tracking = useTracking();
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries());
    setStatus("sending");
    try {
      const res = await fetch("/api/lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...data, ...tracking, consent: "on", materia: content.materia }),
      });
      if (!res.ok) throw new Error(`HTTP ${res.status}`);
      setStatus("success");
      form.reset();
    } catch {
      setStatus("error");
    }
  }

  return (
    <div className="bg-white text-navy-900 pb-20 sm:pb-0">
      <header className="bg-navy-900 py-3.5">
        <div className="mx-auto max-w-3xl px-5 font-serif text-lg font-semibold text-white">
          Aylwin Matta Abogados
        </div>
      </header>

      {/* Hero */}
      <section className="bg-surface py-12 sm:py-16">
        <div className="mx-auto max-w-3xl px-5">
          <h1 className="font-serif text-3xl sm:text-4xl font-semibold leading-tight text-navy-700 text-balance">
            {content.h1}
          </h1>
          <p className="mt-4 text-lg leading-relaxed">{content.subtitulo}</p>
          <div className="mt-7">
            <WspButton label={content.ctaWhatsApp} msgBase={content.msgWhatsAppBase} clickId={tracking.click_id} />
            <p className="mt-3 text-sm text-muted">
              {RESPUESTA} · Consulta confidencial desde el primer mensaje.
            </p>
          </div>
          <p className="mt-5 border-l-4 border-navy-700 pl-3 text-sm text-muted">
            {content.descarte}
          </p>
        </div>
      </section>

      {/* Cómo trabajamos */}
      <section className="py-10 sm:py-14">
        <div className="mx-auto max-w-3xl px-5">
          <h2 className="font-serif text-2xl font-semibold text-navy-700">Cómo trabajamos</h2>
          <div className="mt-5 grid gap-4">
            {content.pasos.map((paso, i) => (
              <div key={i} className="rounded-lg bg-surface p-5 text-sm leading-relaxed">
                <b className="text-navy-700">
                  {i + 1}. {["Contacto confidencial.", "Reunión de diagnóstico.", "Propuesta clara."][i]}
                </b>{" "}
                {paso}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Experiencia */}
      <section className="bg-surface py-10 sm:py-14">
        <div className="mx-auto max-w-3xl px-5">
          <h2 className="font-serif text-2xl font-semibold text-navy-700">{content.experiencia.titulo}</h2>
          <ul className="mt-5 space-y-3">
            {content.experiencia.items.map((item) => (
              <li key={item} className="flex gap-3 text-sm leading-relaxed">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="mt-0.5 h-4 w-4 shrink-0 text-gold-600" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                </svg>
                {item}
              </li>
            ))}
          </ul>
          <p className="mt-4 text-xs text-muted italic">{content.experiencia.nota}</p>
        </div>
      </section>

      {/* Quién responde */}
      <section className="py-10 sm:py-14">
        <div className="mx-auto max-w-3xl px-5">
          <h2 className="font-serif text-2xl font-semibold text-navy-700">Quién responde su consulta</h2>
          <p className="mt-4 text-sm leading-relaxed">
            Su caso es atendido directamente por un socio del estudio — no por un
            ejecutivo comercial. Aylwin Matta Abogados es un estudio con
            trayectoria desde 1974 en resolución de controversias.{" "}
            <span className="text-muted">[PENDIENTE: bio y credenciales de MAF por confirmar]</span>
          </p>
        </div>
      </section>

      {/* Confidencialidad */}
      <section className="py-6">
        <div className="mx-auto max-w-3xl px-5">
          <div className="rounded-lg bg-surface p-5 text-sm leading-relaxed">
            <b className="text-navy-700">Confidencialidad.</b> Su consulta queda amparada por el
            deber de confidencialidad profesional del abogado desde el primer contacto, aun
            cuando no contrate nuestros servicios. El contacto inicial no constituye patrocinio
            ni asesoría definitiva. Sus datos se utilizan únicamente para evaluar su caso.
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-surface py-10 sm:py-14">
        <div className="mx-auto max-w-3xl px-5">
          <h2 className="font-serif text-2xl font-semibold text-navy-700">Preguntas frecuentes</h2>
          <div className="mt-4">
            {content.faq.map((f) => (
              <details key={f.pregunta} className="border-b border-line py-3">
                <summary className="cursor-pointer text-sm font-bold">{f.pregunta}</summary>
                <p className="mt-2 text-sm leading-relaxed text-muted">{f.respuesta}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* CTA final + formulario */}
      <section className="py-10 sm:py-14">
        <div className="mx-auto max-w-3xl px-5">
          <h2 className="font-serif text-2xl font-semibold text-navy-700">Cuéntenos su caso</h2>
          <div className="mt-5">
            <WspButton label={content.ctaWhatsApp} msgBase={content.msgWhatsAppBase} clickId={tracking.click_id} />
          </div>
          {status === "success" ? (
            <p role="status" className="mt-6 rounded-lg bg-surface p-5 text-sm font-bold text-navy-700">
              Mensaje recibido. {RESPUESTA}.
            </p>
          ) : (
            <>
              <p className="mt-6 font-bold text-sm">O déjenos sus datos:</p>
              <form onSubmit={handleSubmit} className="mt-3 grid gap-4">
                <div>
                  <label htmlFor="c-nombre" className="block text-sm font-bold">Nombre *</label>
                  <input id="c-nombre" name="name" required className="mt-1 w-full rounded-md border border-line px-4 h-12" />
                </div>
                <div>
                  <label htmlFor="c-empresa" className="block text-sm font-bold">Empresa</label>
                  <input id="c-empresa" name="company" className="mt-1 w-full rounded-md border border-line px-4 h-12" />
                </div>
                <div>
                  <label htmlFor="c-fono" className="block text-sm font-bold">Teléfono *</label>
                  <input id="c-fono" name="phone" type="tel" required className="mt-1 w-full rounded-md border border-line px-4 h-12" />
                </div>
                <div>
                  <label htmlFor="c-email" className="block text-sm font-bold">Email *</label>
                  <input id="c-email" name="email" type="email" required className="mt-1 w-full rounded-md border border-line px-4 h-12" />
                </div>
                <div>
                  <label htmlFor="c-caso" className="block text-sm font-bold">Describa brevemente su conflicto *</label>
                  <textarea id="c-caso" name="message" required rows={4} className="mt-1 w-full rounded-md border border-line px-4 py-3" />
                </div>
                <p className="text-xs text-muted leading-relaxed">
                  Al enviar, autoriza el tratamiento confidencial de sus datos únicamente para
                  evaluar su consulta (Ley 19.628).
                </p>
                {status === "error" && (
                  <p role="alert" className="text-sm font-bold text-error">
                    No pudimos enviar su mensaje. Intente por WhatsApp o llámenos al (+56 2) 2228 0890.
                  </p>
                )}
                <button
                  type="submit"
                  disabled={status === "sending"}
                  className="rounded-md bg-navy-700 px-7 py-4 text-base font-bold text-white hover:bg-navy-600 transition-colors disabled:opacity-60"
                >
                  {status === "sending" ? "Enviando…" : "Enviar consulta confidencial"}
                </button>
              </form>
            </>
          )}
        </div>
      </section>

      <footer className="py-8 text-center text-xs text-muted">
        Aylwin Matta Abogados · Av. Apoquindo 3910, Piso 3, Las Condes, Santiago · contacto@aylwin.cl
      </footer>

      {/* Sticky móvil */}
      <div className="fixed bottom-0 left-0 right-0 bg-white p-2.5 text-center shadow-[0_-2px_10px_rgba(0,0,0,0.12)] sm:hidden">
        <WspButton
          label={content.ctaWhatsAppCorto}
          msgBase={content.msgWhatsAppBase}
          clickId={tracking.click_id}
          className="inline-flex w-full items-center justify-center gap-2 rounded-md bg-[#0e7a5f] px-5 py-3.5 text-base font-bold text-white"
        />
      </div>
    </div>
  );
}
