"use client";

import { useEffect, useState, type FormEvent } from "react";
import { pushDataLayerEvent } from "@/lib/gtm";

type Status = "idle" | "sending" | "success" | "error";

const UTM_KEYS = ["utm_source", "utm_medium", "utm_campaign", "utm_term"] as const;
const CLICK_ID_KEYS = ["gclid", "wbraid", "gbraid"] as const;

export default function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");

  // El efecto solo persiste lo que venga en la URL. Antes volcaba además el
  // resultado en un useState, lo que provocaba un render en cascada al montar
  // sin utilidad: el tracking no se muestra, solo se envía. Se lee al enviar.
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    for (const key of UTM_KEYS) {
      const value = params.get(key);
      if (value) sessionStorage.setItem(key, value);
    }
    // Click ID persists in localStorage (90-day attribution window outlives the session)
    for (const key of CLICK_ID_KEYS) {
      const fresh = params.get(key);
      if (fresh) {
        localStorage.setItem("click_id", `${key}:${fresh}`);
        break;
      }
    }
  }, []);

  function leerUtm(): Record<string, string> {
    const captured: Record<string, string> = {};
    for (const key of UTM_KEYS) {
      const value = sessionStorage.getItem(key);
      if (value) captured[key] = value;
    }
    const clickId = localStorage.getItem("click_id");
    if (clickId) captured.click_id = clickId;
    return captured;
  }

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries());
    setStatus("sending");
    try {
      const res = await fetch("/api/lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...data, ...leerUtm() }),
      });
      if (!res.ok) throw new Error(`HTTP ${res.status}`);
      pushDataLayerEvent("generate_lead", { lead_channel: "formulario", lead_materia: "home" });
      setStatus("success");
      form.reset();
    } catch {
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div
        role="status"
        className="rounded-lg border border-line bg-white p-10 text-center"
      >
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="mx-auto h-12 w-12 text-brand-600" aria-hidden="true">
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
        </svg>
        <h3 className="mt-4 text-2xl font-semibold text-ink-900">
          Mensaje recibido
        </h3>
        <p className="mt-2 text-muted">
          Nos pondremos en contacto dentro del próximo día hábil.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="rounded-lg border border-line bg-white p-8 space-y-5">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label htmlFor="name" className="block text-sm font-bold text-ink-900">
            Nombre *
          </label>
          <input
            id="name"
            name="name"
            required
            autoComplete="name"
            className="mt-1.5 w-full rounded-md border border-line bg-surface px-4 h-12 text-ink-900 focus:outline-none focus:ring-2 focus:ring-ink-600"
          />
        </div>
        <div>
          <label htmlFor="company" className="block text-sm font-bold text-ink-900">
            Empresa
          </label>
          <input
            id="company"
            name="company"
            autoComplete="organization"
            className="mt-1.5 w-full rounded-md border border-line bg-surface px-4 h-12 text-ink-900 focus:outline-none focus:ring-2 focus:ring-ink-600"
          />
        </div>
        <div>
          <label htmlFor="email" className="block text-sm font-bold text-ink-900">
            Email *
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            autoComplete="email"
            className="mt-1.5 w-full rounded-md border border-line bg-surface px-4 h-12 text-ink-900 focus:outline-none focus:ring-2 focus:ring-ink-600"
          />
        </div>
        <div>
          <label htmlFor="phone" className="block text-sm font-bold text-ink-900">
            Teléfono
          </label>
          <input
            id="phone"
            name="phone"
            type="tel"
            autoComplete="tel"
            className="mt-1.5 w-full rounded-md border border-line bg-surface px-4 h-12 text-ink-900 focus:outline-none focus:ring-2 focus:ring-ink-600"
          />
        </div>
      </div>
      <div>
        <label htmlFor="message" className="block text-sm font-bold text-ink-900">
          Cuéntenos brevemente su controversia *
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={4}
          className="mt-1.5 w-full rounded-md border border-line bg-surface px-4 py-3 text-ink-900 focus:outline-none focus:ring-2 focus:ring-ink-600"
        />
      </div>
      <div className="flex items-start gap-3">
        <input
          id="consent"
          name="consent"
          type="checkbox"
          required
          className="mt-1 h-5 w-5 rounded border-line accent-[#a8000d]"
        />
        <label htmlFor="consent" className="text-xs text-muted leading-relaxed">
          Autorizo el tratamiento de mis datos personales para ser contactado
          respecto de mi consulta, conforme a la Ley 19.628 sobre protección de
          la vida privada. *
        </label>
      </div>
      {status === "error" && (
        <p role="alert" className="text-sm font-bold text-error">
          No pudimos enviar su mensaje. Intente nuevamente o llámenos al
          (+56 2) 2228 0890.
        </p>
      )}
      <button
        type="submit"
        disabled={status === "sending"}
        className="w-full rounded-md bg-brand-600 px-8 py-4 text-base font-bold text-white hover:bg-brand-500 transition-colors disabled:opacity-60"
      >
        {status === "sending" ? "Enviando…" : "Enviar consulta"}
      </button>
    </form>
  );
}
