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

function useScrollReveal() {
  useEffect(() => {
    const els = document.querySelectorAll("[data-reveal]");
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        }
      },
      { rootMargin: "0px 0px -8% 0px" },
    );
    els.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);
}

function whatsAppHref(msgBase: string, ref: string | undefined) {
  const msg = ref ? `${msgBase} Ref: ${ref}` : msgBase;
  return `https://wa.me/${NUMERO_WSP}?text=${encodeURIComponent(msg)}`;
}

function WspIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5 shrink-0" aria-hidden="true">
      <path d="M12 2a10 10 0 0 0-8.6 15.1L2 22l5.1-1.3A10 10 0 1 0 12 2Zm5.2 14.2c-.2.6-1.3 1.2-1.8 1.2-.5.1-1 .2-3.3-.7-2.8-1.2-4.6-4-4.7-4.2-.1-.2-1.1-1.5-1.1-2.9s.7-2 1-2.3c.2-.3.5-.3.7-.3h.5c.2 0 .4 0 .6.4l.9 2.1c.1.2.1.4 0 .6l-.4.6-.5.5c-.2.2-.3.3-.1.6.2.3.8 1.4 1.8 2.2 1.2 1.1 2.3 1.4 2.6 1.6.3.1.5.1.7-.1l1-1.2c.2-.3.4-.2.7-.1l2 1c.3.1.5.2.6.4 0 .1 0 .7-.2 1.3Z" />
    </svg>
  );
}

function WspButton({
  label,
  msgBase,
  clickId,
  size = "lg",
}: {
  label: string;
  msgBase: string;
  clickId?: string;
  size?: "lg" | "sticky";
}) {
  const base =
    "inline-flex items-center justify-center gap-2.5 rounded-lg bg-[#0e7a5f] font-bold text-white shadow-[0_4px_14px_rgba(14,122,95,0.35)] hover:bg-[#0c6a52] hover:shadow-[0_6px_20px_rgba(14,122,95,0.45)] hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200 focus-visible:outline-3 focus-visible:outline-gold-500";
  const sizes = {
    lg: "px-8 py-4 text-base",
    sticky: "w-full px-6 py-3.5 text-base",
  };
  return (
    <a href={whatsAppHref(msgBase, clickId)} rel="noopener" className={`${base} ${sizes[size]}`}>
      <WspIcon />
      {label}
    </a>
  );
}

const trustChips = [
  {
    label: "Estudio fundado en 1974",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="h-5 w-5" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2m0 0 6.5 3.5M12 5 5.5 8.5M4 21h16M6 21V11m12 10V11M3 8.5h18" />
      </svg>
    ),
  },
  {
    label: "Reconocido por Best Lawyers y Legal500",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="h-5 w-5" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" d="M8.6 14.2 7 21l5-3 5 3-1.6-6.8M17 8A5 5 0 1 1 7 8a5 5 0 0 1 10 0Z" />
      </svg>
    ),
  },
  {
    label: "Atención directa de los socios",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="h-5 w-5" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" d="M16 7a4 4 0 1 1-8 0 4 4 0 0 1 8 0ZM5 21a7 7 0 0 1 14 0" />
      </svg>
    ),
  },
];

export default function CampaignLanding({ content }: { content: CampaignContent }) {
  const tracking = useTracking();
  useScrollReveal();
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

  const inputCls =
    "mt-1.5 w-full rounded-md border border-line bg-white px-4 h-12 text-navy-900 focus:outline-none focus:ring-2 focus:ring-navy-600 focus:border-navy-600 transition-shadow";

  return (
    <div className="bg-white text-navy-900 pb-24 sm:pb-0">
      <header className="bg-navy-900 py-4">
        <div className="mx-auto max-w-4xl px-5 sm:px-6 flex items-baseline gap-2 text-white">
          <span className="font-serif text-lg font-semibold tracking-wide">AYLWIN MATTA</span>
          <span className="text-[11px] uppercase tracking-[0.2em] text-white/60">Abogados</span>
        </div>
      </header>

      {/* Hero */}
      <section className="relative bg-gradient-to-b from-navy-900 via-navy-800 to-navy-700 text-white overflow-hidden">
        <div
          aria-hidden="true"
          className="absolute inset-0 opacity-[0.06]"
          style={{
            backgroundImage:
              "repeating-linear-gradient(90deg, transparent, transparent 79px, currentColor 79px, currentColor 80px)",
          }}
        />
        <div className="relative mx-auto max-w-4xl px-5 sm:px-6 py-16 sm:py-24">
          <p className="text-gold-500 text-xs sm:text-sm font-bold uppercase tracking-[0.25em]">
            {content.materia} · Santiago, Chile
          </p>
          <h1 className="mt-5 font-serif text-3xl sm:text-5xl font-semibold leading-[1.15] max-w-2xl text-balance">
            {content.h1}
          </h1>
          <p className="mt-6 max-w-2xl text-base sm:text-lg text-white/85 leading-relaxed">
            {content.subtitulo}
          </p>
          <div className="mt-9 flex flex-col items-start gap-3">
            <WspButton label={content.ctaWhatsApp} msgBase={content.msgWhatsAppBase} clickId={tracking.click_id} />
            <p className="flex items-center gap-2 text-sm text-white/70">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="h-4 w-4" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6l4 2m6-2a10 10 0 1 1-20 0 10 10 0 0 1 20 0Z" />
              </svg>
              {RESPUESTA} · Consulta confidencial desde el primer mensaje.
            </p>
          </div>
          <p className="mt-8 max-w-xl border-l-2 border-gold-500 pl-4 text-sm text-white/60 leading-relaxed">
            {content.descarte}
          </p>
        </div>
      </section>

      {/* Trust chips */}
      <section aria-label="Credenciales" className="border-b border-line bg-white">
        <div className="mx-auto max-w-4xl px-5 sm:px-6 py-6 grid grid-cols-1 sm:grid-cols-3 gap-4">
          {trustChips.map((chip) => (
            <div key={chip.label} className="flex items-center gap-3 text-sm font-bold text-navy-700">
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-panel text-gold-600">
                {chip.icon}
              </span>
              {chip.label}
            </div>
          ))}
        </div>
      </section>

      {/* Cómo trabajamos */}
      <section className="bg-surface py-14 sm:py-20">
        <div className="mx-auto max-w-4xl px-5 sm:px-6">
          <h2 className="font-serif text-2xl sm:text-3xl font-semibold text-navy-900" data-reveal>
            Cómo trabajamos
          </h2>
          <div className="mt-8 grid gap-5 sm:grid-cols-3">
            {content.pasos.map((paso, i) => (
              <div
                key={i}
                data-reveal
                style={{ transitionDelay: `${i * 70}ms` }}
                className="relative rounded-xl border border-line bg-white p-6 shadow-[0_4px_6px_rgba(15,23,42,0.06)]"
              >
                <span className="flex h-11 w-11 items-center justify-center rounded-full bg-navy-700 font-serif text-xl font-semibold text-white">
                  {i + 1}
                </span>
                <h3 className="mt-4 font-serif text-lg font-semibold text-navy-900">
                  {["Contacto confidencial", "Reunión de diagnóstico", "Propuesta clara"][i]}
                </h3>
                <p className="mt-2 text-sm text-muted leading-relaxed">{paso}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Experiencia */}
      <section className="py-14 sm:py-20">
        <div className="mx-auto max-w-4xl px-5 sm:px-6">
          <h2 className="font-serif text-2xl sm:text-3xl font-semibold text-navy-900" data-reveal>
            {content.experiencia.titulo}
          </h2>
          <div className="mt-8 grid gap-4">
            {content.experiencia.items.map((item, i) => (
              <div
                key={item}
                data-reveal
                style={{ transitionDelay: `${i * 70}ms` }}
                className="flex gap-4 rounded-xl border border-line bg-white p-5 shadow-[0_4px_6px_rgba(15,23,42,0.06)]"
              >
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-panel text-gold-600">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-4.5 w-4.5" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                  </svg>
                </span>
                <p className="text-sm leading-relaxed self-center">{item}</p>
              </div>
            ))}
          </div>
          <p className="mt-5 rounded-lg border border-gold-500/40 bg-gold-100/50 px-4 py-3 text-xs text-navy-800 leading-relaxed">
            {content.experiencia.nota}
          </p>
        </div>
      </section>

      {/* Quién responde + Confidencialidad */}
      <section className="bg-navy-900 py-14 sm:py-20 text-white">
        <div className="mx-auto max-w-4xl px-5 sm:px-6 grid gap-10 sm:grid-cols-2">
          <div data-reveal>
            <h2 className="font-serif text-2xl sm:text-3xl font-semibold">Quién responde su consulta</h2>
            <p className="mt-4 text-sm text-white/80 leading-relaxed">
              Su caso es atendido directamente por un socio del estudio — no por un ejecutivo
              comercial. Aylwin Matta Abogados es un estudio con trayectoria desde 1974 en
              resolución de controversias.
            </p>
            <p className="mt-3 text-xs text-white/50">[PENDIENTE: bio y credenciales de MAF por confirmar]</p>
          </div>
          <div data-reveal style={{ transitionDelay: "70ms" }} className="rounded-xl border border-white/15 bg-white/5 p-6">
            <div className="flex items-center gap-3">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="h-6 w-6 text-gold-500" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75m-3-7.036A11.96 11.96 0 0 1 3.6 6c-.3 1-.6 2.3-.6 3.6 0 5.6 3.8 10.3 9 11.6 5.2-1.3 9-6 9-11.6 0-1.3-.3-2.6-.6-3.6a11.96 11.96 0 0 1-8.4-3.286Z" />
              </svg>
              <h2 className="font-serif text-xl font-semibold">Confidencialidad</h2>
            </div>
            <p className="mt-4 text-sm text-white/80 leading-relaxed">
              Su consulta queda amparada por el deber de confidencialidad profesional del abogado
              desde el primer contacto, aun cuando no contrate nuestros servicios. El contacto
              inicial no constituye patrocinio ni asesoría definitiva. Sus datos se utilizan
              únicamente para evaluar su caso.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-surface py-14 sm:py-20">
        <div className="mx-auto max-w-4xl px-5 sm:px-6">
          <h2 className="font-serif text-2xl sm:text-3xl font-semibold text-navy-900" data-reveal>
            Preguntas frecuentes
          </h2>
          <div className="mt-8 space-y-3" data-reveal>
            {content.faq.map((f) => (
              <details key={f.pregunta} className="group rounded-xl border border-line bg-white px-5 py-4 open:shadow-[0_4px_6px_rgba(15,23,42,0.06)]">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-serif text-base sm:text-lg font-semibold text-navy-900 min-h-[44px]">
                  {f.pregunta}
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-5 w-5 shrink-0 text-gold-600 transition-transform duration-200 group-open:rotate-180" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                  </svg>
                </summary>
                <p className="mt-2 pb-1 text-sm leading-relaxed text-muted">{f.respuesta}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* CTA final + formulario */}
      <section className="py-14 sm:py-20">
        <div className="mx-auto max-w-4xl px-5 sm:px-6">
          <div className="rounded-2xl border border-line bg-white p-6 sm:p-10 shadow-[0_10px_30px_rgba(15,23,42,0.08)]" data-reveal>
            <h2 className="font-serif text-2xl sm:text-3xl font-semibold text-navy-900 text-balance">
              Cuéntenos su caso
            </h2>
            <p className="mt-2 text-sm text-muted">
              {RESPUESTA}. La vía más rápida es WhatsApp:
            </p>
            <div className="mt-5">
              <WspButton label={content.ctaWhatsApp} msgBase={content.msgWhatsAppBase} clickId={tracking.click_id} />
            </div>

            {status === "success" ? (
              <div role="status" className="mt-8 rounded-xl bg-surface p-6 text-center">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="mx-auto h-10 w-10 text-gold-600" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                </svg>
                <p className="mt-3 font-serif text-xl font-semibold text-navy-900">Mensaje recibido</p>
                <p className="mt-1 text-sm text-muted">{RESPUESTA}.</p>
              </div>
            ) : (
              <>
                <div className="mt-8 flex items-center gap-3 text-xs font-bold uppercase tracking-wide text-muted">
                  <span className="h-px flex-1 bg-line" />
                  O déjenos sus datos
                  <span className="h-px flex-1 bg-line" />
                </div>
                <form onSubmit={handleSubmit} className="mt-6 grid gap-5">
                  <div className="grid gap-5 sm:grid-cols-2">
                    <div>
                      <label htmlFor="c-nombre" className="block text-sm font-bold">Nombre *</label>
                      <input id="c-nombre" name="name" required autoComplete="name" className={inputCls} />
                    </div>
                    <div>
                      <label htmlFor="c-empresa" className="block text-sm font-bold">Empresa</label>
                      <input id="c-empresa" name="company" autoComplete="organization" className={inputCls} />
                    </div>
                    <div>
                      <label htmlFor="c-fono" className="block text-sm font-bold">Teléfono *</label>
                      <input id="c-fono" name="phone" type="tel" required autoComplete="tel" className={inputCls} />
                    </div>
                    <div>
                      <label htmlFor="c-email" className="block text-sm font-bold">Email *</label>
                      <input id="c-email" name="email" type="email" required autoComplete="email" className={inputCls} />
                    </div>
                  </div>
                  <div>
                    <label htmlFor="c-caso" className="block text-sm font-bold">
                      Describa brevemente su conflicto *
                    </label>
                    <textarea id="c-caso" name="message" required rows={4} className="mt-1.5 w-full rounded-md border border-line bg-white px-4 py-3 text-navy-900 focus:outline-none focus:ring-2 focus:ring-navy-600 focus:border-navy-600 transition-shadow" />
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
                    className="rounded-lg bg-navy-700 px-8 py-4 text-base font-bold text-white shadow-[0_4px_14px_rgba(30,58,138,0.3)] hover:bg-navy-600 hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200 disabled:opacity-60 disabled:hover:translate-y-0"
                  >
                    {status === "sending" ? "Enviando…" : "Enviar consulta confidencial"}
                  </button>
                </form>
              </>
            )}
          </div>
        </div>
      </section>

      <footer className="border-t border-line py-8 text-center text-xs text-muted">
        Aylwin Matta Abogados · Av. Apoquindo 3910, Piso 3, Las Condes, Santiago · contacto@aylwin.cl
      </footer>

      {/* Sticky móvil */}
      <div className="fixed bottom-0 left-0 right-0 border-t border-line bg-white/95 backdrop-blur p-3 sm:hidden">
        <WspButton
          label={content.ctaWhatsAppCorto}
          msgBase={content.msgWhatsAppBase}
          clickId={tracking.click_id}
          size="sticky"
        />
      </div>
    </div>
  );
}
