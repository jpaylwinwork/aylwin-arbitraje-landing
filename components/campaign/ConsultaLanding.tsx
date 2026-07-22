"use client";

import { useEffect, useState, type FormEvent } from "react";
import { pushDataLayerEvent } from "@/lib/gtm";

/**
 * Landing de campaña de Google Ads — arbitraje y conflictos de construcción e
 * inmobiliarios. Estructura de embudo de 10 secciones definida en
 * CONTENIDO/03_LANDING_ADS.md (encargo de MAF, 21-07-2026): salida única al
 * formulario, sin WhatsApp ni enlaces de fuga. Diseño Aylwin Matta del repo
 * (Bodoni/Poppins, rojo institucional) — no la paleta hueso/verde del spec.
 *
 * Contenido factual pendiente de MAF marcado con [PENDIENTE]/[COMPLETAR]:
 * casos de la sección Prueba, [CUPOS], foto, contacto. No inventar.
 */

const MATERIA = "Construcción e inmobiliario";
const RESPUESTA = "Respuesta en 24 horas hábiles";

// Placeholder hasta que MAF entregue el número corporativo (solo dígitos, ej. 569XXXXXXXX)
const NUMERO_WSP = "XXXXXXXXXXX";
const MSG_WSP =
  "Hola, tengo un conflicto de obra o de contrato de construcción/inmobiliario y quiero una evaluación confidencial de mi caso.";

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

const ArrowCta = "inline-flex items-center justify-center gap-2 rounded-lg bg-brand-600 px-8 py-4 text-base font-bold text-white shadow-[0_4px_14px_rgba(168,0,13,0.28)] hover:bg-brand-500 hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200 focus-visible:outline-3 focus-visible:outline-brand-500";

function CtaLink({ label, className }: { label: string; className?: string }) {
  return (
    <a href="#consulta" className={className ?? ArrowCta}>
      {label}
      <span aria-hidden="true">→</span>
    </a>
  );
}

// WhatsApp — canal paralelo al formulario. Inyecta "Ref: <click_id>" en el
// mensaje prellenado para el tracking de conversiones offline de Google Ads.
function whatsAppHref(ref: string | undefined) {
  const msg = ref ? `${MSG_WSP} Ref: ${ref}` : MSG_WSP;
  return `https://wa.me/${NUMERO_WSP}?text=${encodeURIComponent(msg)}`;
}

function WspIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5 shrink-0" aria-hidden="true">
      <path d="M12 2a10 10 0 0 0-8.6 15.1L2 22l5.1-1.3A10 10 0 1 0 12 2Zm5.2 14.2c-.2.6-1.3 1.2-1.8 1.2-.5.1-1 .2-3.3-.7-2.8-1.2-4.6-4-4.7-4.2-.1-.2-1.1-1.5-1.1-2.9s.7-2 1-2.3c.2-.3.5-.3.7-.3h.5c.2 0 .4 0 .6.4l.9 2.1c.1.2.1.4 0 .6l-.4.6-.5.5c-.2.2-.3.3-.1.6.2.3.8 1.4 1.8 2.2 1.2 1.1 2.3 1.4 2.6 1.6.3.1.5.1.7-.1l1-1.2c.2-.3.4-.2.7-.1l2 1c.3.1.5.2.6.4 0 .1 0 .7-.2 1.3Z" />
    </svg>
  );
}

function WspButton({ label, clickId, size = "lg" }: { label: string; clickId?: string; size?: "lg" | "sticky" }) {
  const base =
    "inline-flex items-center justify-center gap-2.5 rounded-lg bg-[#0e7a5f] font-bold text-white shadow-[0_4px_14px_rgba(14,122,95,0.35)] hover:bg-[#0c6a52] hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200 focus-visible:outline-3 focus-visible:outline-brand-500";
  const sizes = { lg: "px-8 py-4 text-base", sticky: "flex-1 px-4 py-3.5 text-sm" };
  return (
    <a
      href={whatsAppHref(clickId)}
      rel="noopener"
      className={`${base} ${sizes[size]}`}
      onClick={() => pushDataLayerEvent("generate_lead", { lead_channel: "whatsapp", lead_materia: MATERIA })}
    >
      <WspIcon />
      {label}
    </a>
  );
}

// SECCIÓN 2 — El problema real (los cuatro miedos, del ejercicio TNI de MAF)
const MIEDOS: { t: string; d: string }[] = [
  {
    t: "Los honorarios se convirtieron en un pozo sin fondo.",
    d: "Partieron en un número y van en cuatro veces ese número, sin que nadie haya explicado por qué ni haya pedido aprobación. Cada llamada corre el taxímetro. Perdiste el control financiero de tu propio litigio.",
  },
  {
    t: "El caso desapareció adentro del estudio.",
    d: "No sabes en qué está. Si no llamas tú, no te enteras de nada. Mandas un correo y la respuesta llega tres días después, o no llega. Tienes que perseguir a tu propio abogado para saber de un asunto que puede definir tu año.",
  },
  {
    t: "Te dan consejos legalmente correctos y comercialmente desastrosos.",
    d: "Tu abogado quiere ganar en tribunales. Tú necesitas salvar el negocio. No son lo mismo, y cuando no son lo mismo, el que paga la diferencia eres tú. Ganar el juicio en tres años, con el capital detenido y el proyecto muerto, no es ganar.",
  },
  {
    t: "Te vendió el socio y te atiende alguien que no estuvo en esa reunión.",
    d: "Contrataste por una conversación con la persona que entendió tu problema. Después esa persona desapareció y quedaste explicándole el caso desde cero a alguien que no lo conoce.",
  },
];

// SECCIÓN 3 — Lo que está en juego
const EN_JUEGO: string[] = [
  "El capital de trabajo comprometido en la obra queda inmovilizado.",
  "Las boletas de garantía siguen vigentes y consumen tu línea.",
  "Tu capacidad de tomar nuevos proyectos se ve condicionada.",
  "La gerencia dedica horas a un asunto que no genera ingresos.",
  "En los casos más serios, el patrimonio personal de los socios está comprometido como garantía.",
];

// SECCIÓN 4 — Cómo trabajo (las 8 etapas, tomadas de la PAUTA de MAF)
const ETAPAS: { t: string; d: string }[] = [
  {
    t: "Cuál es el problema de verdad.",
    d: "Retrasos, estados de pago rechazados y observaciones técnicas suelen presentarse como tres conflictos y ser uno solo: un cambio de proyecto que nunca se formalizó, un desorden documental en los cobros, una fricción con la inspección técnica. Tratar el síntoma es garantizar que vuelva.",
  },
  {
    t: "Si es puntual o va a repetirse.",
    d: "Un problema recurrente necesita solución de fondo. Un acuerdo que solo cierra el episodio de hoy asegura el conflicto de mañana en peores condiciones. Esto además define cuánto se puede transar.",
  },
  {
    t: "Qué quiere cada parte y qué necesita.",
    d: "Las posiciones son rígidas. Los intereses casi nunca: no subir el costo, no detener la obra, no sentar precedente, cerrar antes del ejercicio. En los intereses aparecen las salidas que en las posiciones no existen.",
  },
  {
    t: "Qué tan sólida es tu posición. De verdad.",
    d: "Contrato, adendas, libro de obra, actas, estados de pago, correos con la ITO. Analizados con el mismo rigor a favor y en contra. Es la etapa donde más se falla, porque quien lleva meses discutiendo ya no puede ver los antecedentes sin sesgo.",
  },
  {
    t: "Cuánto cuesta cada escenario.",
    d: "No cuánto cuesta arreglarlo, sino cuánto cuesta mantener tu posición frente a cuánto cuesta ceder. Una multa acotada y una terminación de contrato no se calculan igual.",
  },
  {
    t: "Negociar o litigar.",
    d: "Recién acá. Con los argumentos sólidos identificados, los cuestionables acotados y una ruta con costo estimado.",
  },
  {
    t: "Si se negocia, se negocia preparado.",
    d: "Lo que se dice en una negociación puede arruinar el juicio posterior. Hecha con orden, puede dejar prueba a tu favor.",
  },
  {
    t: "Si se litiga, la demanda es el final del trabajo, no el principio.",
    d: "El peor error es demandar esperando probar después lo que se afirmó al inicio. Peritajes, centros de costo, orden documental y testigos se definen antes de escribir.",
  },
];

// SECCIÓN 5 — Lo que no prometo
const COMPROMISOS: string[] = [
  "Que sepas, antes de gastar, qué tan sólida es tu posición.",
  "Que conozcas el rango de costo y el plazo estimado antes de empezar.",
  "Que la estrategia se decida en función de tu negocio y no solo del expediente.",
  "Que hables conmigo durante todo el caso, no con alguien que no estuvo en la primera reunión.",
];

// SECCIÓN 7 — Con quién no trabajo
const DESCARTES: { t: string; d: string }[] = [
  {
    t: "No tomo casos de cuantía menor a 1.000 UF.",
    d: "No por selectividad, sino porque bajo ese monto el costo del proceso rara vez se justifica para ti, y te lo diría igual en la reunión.",
  },
  {
    t: "No trabajo con quien no me muestra todo.",
    d: "Incluido lo que lo deja mal parado. Un antecedente escondido que aparece en la etapa de prueba destruye un caso que era ganable.",
  },
  {
    t: "No sirvo si buscas al abogado más barato.",
    d: "Si el criterio de decisión es el precio por hora, hay opciones mejores que yo.",
  },
  {
    t: "No sirvo si buscas que te confirmen lo que ya decidiste.",
    d: "Mi primera respuesta puede ser que no te conviene pelear esto.",
  },
];

// SECCIÓN 8 — Qué pasa si escribes
const DESPUES: { t: string; d: string }[] = [
  {
    t: "Te respondo yo, en 24 horas hábiles.",
    d: "No un formulario automático ni un asistente.",
  },
  {
    t: "Si tu caso no es para mí, te lo digo de inmediato",
    d: "y, cuando puedo, te derivo a alguien que sí.",
  },
  {
    t: "Si lo es, agendamos 45 minutos.",
    d: "En esa reunión revisamos qué está pasando realmente, cuál es tu posición y qué alternativas tienes. Sales de ahí con una opinión, no con una cotización.",
  },
  {
    t: "La reunión no tiene costo y no obliga a nada.",
    d: "Si después quieres el análisis completo de antecedentes —contrato, libro de obra, estados de pago, correspondencia— eso ya es trabajo y tiene un honorario que te informo antes, imputable a los honorarios si me encargas el caso.",
  },
];

const CARGOS = ["Socio", "Gerente General", "Gerente de Proyectos", "Fiscal o Abogado interno", "Administrador de contrato", "Otro"];
const TIPOS = ["Inmobiliario (promesas, vicios, terrenos)", "Construcción u obra", "Societario de proyecto", "Otro"];
const CUANTIAS = ["Menos de 1.000 UF", "1.000–8.000 UF", "8.001–25.000 UF", "Más de 25.000 UF", "Sin cuantía determinada", "No lo sé aún"];
const ESTADOS = ["Aún no reclamo formalmente", "Reclamé y no hay respuesta", "En negociación", "Demanda o arbitraje notificado", "Proceso en curso con otro abogado"];

export default function ConsultaLanding() {
  const tracking = useTracking();
  useScrollReveal();
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const fd = new FormData(form);
    const get = (k: string) => ((fd.get(k) as string | null) ?? "").trim();

    const urgente = get("urgencia") === "si";
    // Los campos calificadores se pliegan dentro de `message`: el API de leads
    // (app/api/lead) solo persiste name/email/phone/company/message/materia, y no
    // debe tocarse. La urgencia va primero para que la alerta de Telegram la muestre.
    const message = [
      urgente ? "🚨 URGENTE: hay algo que impedir en los próximos días" : null,
      get("descripcion"),
      "—",
      `Cargo: ${get("cargo") || "—"}`,
      `Tipo de conflicto: ${get("tipo_conflicto") || "—"}`,
      `Cuantía estimada: ${get("cuantia") || "—"}`,
      `Urgencia: ${urgente ? "SÍ" : "No"}`,
      `Estado del conflicto: ${get("estado") || "—"}`,
    ]
      .filter(Boolean)
      .join("\n");

    setStatus("sending");
    try {
      const res = await fetch("/api/lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: get("name"),
          email: get("email"),
          phone: get("phone"),
          company: get("company"),
          message,
          consent: "on",
          materia: MATERIA,
          ...tracking,
        }),
      });
      if (!res.ok) throw new Error(`HTTP ${res.status}`);
      pushDataLayerEvent("generate_lead", { lead_channel: "formulario", lead_materia: MATERIA });
      setStatus("success");
      form.reset();
    } catch {
      setStatus("error");
    }
  }

  const fieldCls =
    "mt-1.5 w-full rounded-md border border-line bg-white px-4 h-12 text-ink-900 focus:outline-none focus:ring-2 focus:ring-ink-600 focus:border-ink-600 transition-shadow";
  const labelCls = "block text-sm font-bold text-ink-900";

  return (
    <div className="bg-white text-ink-900 pb-24 sm:pb-0">
      {/* Encabezado — solo el nombre, sin menú ni enlaces (regla de salida única) */}
      <header className="bg-ink-900 py-4">
        <div className="mx-auto max-w-3xl px-5 sm:px-6 flex items-baseline gap-2 text-white">
          <span className="font-serif text-lg font-semibold tracking-wide">Miguel Aylwin Fernández</span>
          <span className="text-[11px] uppercase tracking-[0.2em] text-white/60">Abogado</span>
        </div>
      </header>

      {/* SECCIÓN 1 — Hero */}
      <section className="relative bg-gradient-to-b from-ink-900 via-ink-800 to-ink-700 text-white overflow-hidden">
        <div
          aria-hidden="true"
          className="absolute inset-0 opacity-[0.06]"
          style={{
            backgroundImage:
              "repeating-linear-gradient(90deg, transparent, transparent 79px, currentColor 79px, currentColor 80px)",
          }}
        />
        <div className="relative mx-auto max-w-3xl px-5 sm:px-6 py-16 sm:py-24">
          <p className="text-brand-500 text-xs sm:text-sm font-bold uppercase tracking-[0.22em]">
            Para socios y gerentes de inmobiliarias y constructoras con un conflicto de contrato en curso
          </p>
          <h1 className="mt-5 font-serif text-3xl sm:text-5xl font-semibold leading-[1.15] text-balance">
            Un conflicto de obra se resuelve bien cuando entiendes tu posición real. No cuando encuentras un abogado que te dé la razón.
          </h1>
          <p className="mt-6 max-w-2xl text-base sm:text-lg text-white/85 leading-relaxed">
            Reviso tu caso, te digo con franqueza qué tan sólida es tu posición y cuánto te conviene pelear, antes de que gastes un peso en litigar.
          </p>
          <div className="mt-9 flex flex-col items-stretch gap-3 sm:flex-row sm:items-center">
            <CtaLink label="Revisar mi caso" />
            <WspButton label="Consultar por WhatsApp" clickId={tracking.click_id} />
          </div>
          <p className="mt-6 flex items-start gap-2 text-sm text-white/70 leading-relaxed">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="mt-0.5 h-4 w-4 shrink-0" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6l4 2m6-2a10 10 0 1 1-20 0 10 10 0 0 1 20 0Z" />
            </svg>
            {RESPUESTA}. Tu información queda amparada por el secreto profesional desde el primer mensaje, exista o no mandato.
          </p>
        </div>
      </section>

      {/* SECCIÓN 2 — El problema real */}
      <section className="bg-white py-14 sm:py-20">
        <div className="mx-auto max-w-3xl px-5 sm:px-6">
          <div data-reveal>
            <p className="font-sans text-sm font-semibold text-brand-600 tracking-wide">01/</p>
            <h2 className="mt-1 font-serif text-2xl sm:text-3xl font-semibold text-ink-900 text-balance">
              Lo más caro de un conflicto de construcción no suele ser el conflicto.
            </h2>
            <p className="mt-4 text-base text-ink-800 leading-relaxed">
              Cuatro cosas se repiten en casi todas las conversaciones que tengo con gerentes que ya vienen con un juicio andando:
            </p>
          </div>
          <div className="mt-8 divide-y divide-line border-y border-line">
            {MIEDOS.map((m) => (
              <div key={m.t} data-reveal className="py-6">
                <h3 className="font-serif text-lg font-semibold text-ink-900">{m.t}</h3>
                <p className="mt-2 text-base text-muted leading-relaxed">{m.d}</p>
              </div>
            ))}
          </div>
          <p className="mt-6 text-base font-semibold text-ink-900 leading-relaxed" data-reveal>
            Si reconoces dos de estas cuatro, tu problema hoy no es solo el conflicto. Es cómo se está llevando.
          </p>
        </div>
      </section>

      {/* SECCIÓN 3 — Lo que está en juego */}
      <section className="bg-surface py-14 sm:py-20">
        <div className="mx-auto max-w-3xl px-5 sm:px-6">
          <div data-reveal>
            <p className="font-sans text-sm font-semibold text-brand-600 tracking-wide">02/</p>
            <h2 className="mt-1 font-serif text-2xl sm:text-3xl font-semibold text-ink-900 text-balance">
              En estos negocios el tiempo tiene precio, y el tiempo del litigio lo pagas tú.
            </h2>
            <p className="mt-4 text-base text-ink-800 leading-relaxed">Mientras el conflicto sigue abierto:</p>
          </div>
          <ul className="mt-6 space-y-3" data-reveal>
            {EN_JUEGO.map((item) => (
              <li key={item} className="flex gap-3 text-base text-ink-800 leading-relaxed">
                <span className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-brand-600" aria-hidden="true" />
                {item}
              </li>
            ))}
          </ul>
          <div className="mt-6 space-y-4 text-base text-ink-800 leading-relaxed" data-reveal>
            <p>
              Nada de esto se resuelve ganando más tarde. Por eso la primera decisión de un conflicto no es cómo ganarlo: es{" "}
              <strong>si conviene pelearlo, cuánto y hasta dónde.</strong> Esa decisión requiere un análisis que la mayoría de las veces no se hace.
            </p>
            <p>
              Hay dos cálculos que casi nadie hace antes de demandar. El primero:{" "}
              <strong>cuánto pesan los costos del proceso frente a lo que se disputa.</strong> En una controversia de 2.000 UF los costos fijos pesan proporcionalmente mucho más que en una de 40.000.
            </p>
            <p>
              El segundo es más incómodo. Según el Reporte Anual 2025 del CAM Santiago,{" "}
              <strong>solo el 47% de los arbitrajes termina en sentencia.</strong> El resto se cierra antes: 18% por acuerdo, 11% por desistimiento, 7% por abandono. Más de la mitad de la gente que entra a un arbitraje sale por otra puerta. Vale la pena saber por cuál vas a salir tú antes de entrar.
            </p>
          </div>
        </div>
      </section>

      {/* SECCIÓN 4 — Cómo trabajo */}
      <section className="bg-white py-14 sm:py-20">
        <div className="mx-auto max-w-3xl px-5 sm:px-6">
          <div data-reveal>
            <p className="font-sans text-sm font-semibold text-brand-600 tracking-wide">03/</p>
            <h2 className="mt-1 font-serif text-2xl sm:text-3xl font-semibold text-ink-900 text-balance">
              Antes de recomendarte nada, hago este análisis.
            </h2>
            <p className="mt-4 text-base text-ink-800 leading-relaxed">
              No es un método con nombre de marca. Es el orden en que hay que mirar un conflicto de obra para no decidir a ciegas. Lo publico porque el orden importa más que la técnica.
            </p>
          </div>
          <ol className="mt-8 space-y-7">
            {ETAPAS.map((e, i) => (
              <li key={e.t} data-reveal className="flex gap-5">
                <span className="font-serif text-3xl font-semibold text-brand-600 leading-none w-8 shrink-0" aria-hidden="true">
                  {i + 1}
                </span>
                <div>
                  <h3 className="font-serif text-lg font-semibold text-ink-900">{e.t}</h3>
                  <p className="mt-1.5 text-base text-muted leading-relaxed">{e.d}</p>
                </div>
              </li>
            ))}
          </ol>
          <div className="mt-10" data-reveal>
            <CtaLink label="Quiero este análisis para mi caso" />
          </div>
        </div>
      </section>

      {/* SECCIÓN 5 — Lo que no prometo */}
      <section className="bg-ink-900 py-14 sm:py-20 text-white">
        <div className="mx-auto max-w-3xl px-5 sm:px-6">
          <div data-reveal>
            <p className="font-sans text-sm font-semibold text-brand-500 tracking-wide">04/</p>
            <h2 className="mt-1 font-serif text-2xl sm:text-3xl font-semibold text-balance">
              Nadie puede garantizarte el resultado de un juicio. Desconfía de quien lo haga.
            </h2>
            <p className="mt-4 text-base text-white/80 leading-relaxed">
              La historia judicial está llena de casos que se creían ganados y terminaron perdiéndose, con excusas sobre el juez o sobre la contraparte.
            </p>
            <p className="mt-6 text-base font-semibold text-white">Lo que sí puedo comprometer:</p>
          </div>
          <ul className="mt-4 space-y-3" data-reveal>
            {COMPROMISOS.map((c) => (
              <li key={c} className="flex gap-3 text-base text-white/85 leading-relaxed">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="mt-1 h-4 w-4 shrink-0 text-brand-500" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                </svg>
                {c}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* SECCIÓN 6 — Prueba (placeholder: el spec exige 3 casos reales o eliminar la sección antes de publicar) */}
      <section className="bg-white py-14 sm:py-20">
        <div className="mx-auto max-w-3xl px-5 sm:px-6">
          <div data-reveal>
            <p className="font-sans text-sm font-semibold text-brand-600 tracking-wide">05/</p>
            <h2 className="mt-1 font-serif text-2xl sm:text-3xl font-semibold text-ink-900">Casos que he trabajado</h2>
            <p className="mt-4 text-base text-ink-800 leading-relaxed">
              Sin nombres ni antecedentes que permitan identificar a las partes: el deber de secreto profesional no admite excepciones por marketing.
            </p>
          </div>
          <div
            className="mt-6 rounded-lg border border-brand-500/40 bg-brand-100/50 px-4 py-4 text-sm text-ink-800 leading-relaxed"
            data-reveal
          >
            [SECCIÓN PRUEBA — PENDIENTE: 3 casos abstraídos y anonimizados confirmados por MAF
            (<code>[CASO 1]</code> ·{" "}
            <code>[CASO 2]</code> lado mandante · <code>[CASO 3]</code> cerrado en acuerdo), con tipo de
            conflicto, cuantía en UF, vía y resultado. Según CONTENIDO/03, si no están listos al
            publicar, esta sección se ELIMINA: una prueba débil convierte menos que su ausencia.]
          </div>
        </div>
      </section>

      {/* SECCIÓN 7 — Con quién no trabajo */}
      <section className="bg-surface py-14 sm:py-20">
        <div className="mx-auto max-w-3xl px-5 sm:px-6">
          <div data-reveal>
            <p className="font-sans text-sm font-semibold text-brand-600 tracking-wide">06/</p>
            <h2 className="mt-1 font-serif text-2xl sm:text-3xl font-semibold text-ink-900">Esto no es para todos.</h2>
            <p className="mt-4 text-base text-ink-800 leading-relaxed">Prefiero decirlo antes de que agendes:</p>
          </div>
          <div className="mt-6 divide-y divide-line border-y border-line" data-reveal>
            {DESCARTES.map((d) => (
              <div key={d.t} className="py-5">
                <h3 className="font-serif text-lg font-semibold text-ink-900">{d.t}</h3>
                <p className="mt-1.5 text-base text-muted leading-relaxed">{d.d}</p>
              </div>
            ))}
          </div>

          <h3 className="mt-10 font-serif text-xl font-semibold text-ink-900" data-reveal>
            Y trabajo de tres formas distintas
          </h3>
          <div className="mt-5 grid gap-4" data-reveal>
            <div className="rounded-xl border border-line bg-white p-5">
              <p className="font-bold text-ink-900">Entre 1.000 y 8.000 UF</p>
              <p className="mt-1.5 text-base text-muted leading-relaxed">
                —donde está cerca del 44% de las causas del CAM— el servicio es <strong>deliberadamente acotado</strong>: alcance definido por escrito, precio fijo por etapa, plazos comprometidos. Un estudio de trescientas horas sobre una disputa de 3.000 UF sería un mal negocio para ti. Lo que sí tienes es certeza de cuánto pagas y qué recibes.
              </p>
            </div>
            <div className="rounded-xl border border-line bg-white p-5">
              <p className="font-bold text-ink-900">Sobre 8.000 UF</p>
              <p className="mt-1.5 text-base text-muted leading-relaxed">
                opera todo lo descrito arriba, con dedicación personal. Tomo <code>[CUPOS]</code> casos nuevos al mes en esta modalidad. No es técnica de venta: es la consecuencia de que el que revisa el caso sea el mismo que lo lleva.
              </p>
            </div>
            <div className="rounded-xl border border-line bg-white p-5">
              <p className="font-bold text-ink-900">Si hay algo que impedir esta semana</p>
              <p className="mt-1.5 text-base text-muted leading-relaxed">
                —una boleta que van a cobrar, un terreno que se transfiere, fondos que se están disponiendo— existe el arbitraje de emergencia, con alcance corto y honorario de urgencia. En 2025 el CAM resolvió estas solicitudes en 5,4 días corridos promedio.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SECCIÓN 8 — Qué pasa si escribes */}
      <section className="bg-white py-14 sm:py-20">
        <div className="mx-auto max-w-3xl px-5 sm:px-6 grid gap-8 sm:grid-cols-[minmax(0,220px)_1fr] sm:items-start">
          <div
            data-reveal
            className="flex aspect-[4/5] items-center justify-center rounded-xl border border-dashed border-line bg-panel p-4 text-center text-xs text-muted leading-relaxed"
          >
            [FOTO — retrato de MAF: iluminación natural, fondo neutro, mirada directa a cámara. PENDIENTE de entrega.]
          </div>
          <div>
            <div data-reveal>
              <p className="font-sans text-sm font-semibold text-brand-600 tracking-wide">07/</p>
              <h2 className="mt-1 font-serif text-2xl sm:text-3xl font-semibold text-ink-900">
                Qué pasa después de que envías el formulario
              </h2>
            </div>
            <ol className="mt-6 space-y-5" data-reveal>
              {DESPUES.map((p, i) => (
                <li key={p.t} className="flex gap-4">
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-ink-700 font-serif text-base font-semibold text-white">
                    {i + 1}
                  </span>
                  <p className="text-base text-ink-800 leading-relaxed self-center">
                    <strong className="text-ink-900">{p.t}</strong> {p.d}
                  </p>
                </li>
              ))}
            </ol>
            <p className="mt-6 rounded-lg bg-surface px-4 py-3 text-sm text-ink-800 leading-relaxed" data-reveal>
              <strong>Sobre la confidencialidad:</strong> desde tu primer mensaje rige el deber de secreto profesional, exista o no mandato y hayas pagado o no. Tu información no se usa para otro fin ni se comparte con nadie.
            </p>
          </div>
        </div>
      </section>

      {/* SECCIÓN 9 — Formulario */}
      <section id="consulta" className="bg-surface py-14 sm:py-20 scroll-mt-4">
        <div className="mx-auto max-w-3xl px-5 sm:px-6">
          <div className="rounded-2xl border border-line bg-white p-6 sm:p-10 shadow-[0_10px_30px_rgba(15,23,42,0.08)]" data-reveal>
            <h2 className="font-serif text-2xl sm:text-3xl font-semibold text-ink-900">Cuéntame tu caso</h2>
            <p className="mt-2 text-sm text-muted leading-relaxed">
              Toma dos minutos. No incluyas documentos ni antecedentes reservados en este primer mensaje: basta con que me describas la situación en términos generales.
            </p>

            {status === "success" ? (
              <div role="status" className="mt-8 rounded-xl bg-surface p-6 text-center">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="mx-auto h-10 w-10 text-brand-600" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                </svg>
                <p className="mt-3 font-serif text-xl font-semibold text-ink-900">Mensaje recibido</p>
                <p className="mt-1 text-sm text-muted">{RESPUESTA}. Te respondo yo, no un asistente.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="mt-8 grid gap-5">
                <div className="grid gap-5 sm:grid-cols-2">
                  <div>
                    <label htmlFor="f-nombre" className={labelCls}>Nombre *</label>
                    <input id="f-nombre" name="name" required autoComplete="name" className={fieldCls} />
                  </div>
                  <div>
                    <label htmlFor="f-empresa" className={labelCls}>Empresa *</label>
                    <input id="f-empresa" name="company" required autoComplete="organization" className={fieldCls} />
                  </div>
                  <div>
                    <label htmlFor="f-cargo" className={labelCls}>Cargo *</label>
                    <select id="f-cargo" name="cargo" required defaultValue="" className={fieldCls}>
                      <option value="" disabled>Seleccione…</option>
                      {CARGOS.map((c) => <option key={c} value={c}>{c}</option>)}
                    </select>
                  </div>
                  <div>
                    <label htmlFor="f-email" className={labelCls}>Correo *</label>
                    <input id="f-email" name="email" type="email" required autoComplete="email" className={fieldCls} />
                  </div>
                  <div>
                    <label htmlFor="f-fono" className={labelCls}>Teléfono *</label>
                    <input id="f-fono" name="phone" type="tel" required autoComplete="tel" className={fieldCls} />
                  </div>
                  <div>
                    <label htmlFor="f-tipo" className={labelCls}>Tipo de conflicto *</label>
                    <select id="f-tipo" name="tipo_conflicto" required defaultValue="" className={fieldCls}>
                      <option value="" disabled>Seleccione…</option>
                      {TIPOS.map((t) => <option key={t} value={t}>{t}</option>)}
                    </select>
                  </div>
                </div>

                <div>
                  <label htmlFor="f-caso" className={labelCls}>¿Cuál es el conflicto? *</label>
                  <textarea
                    id="f-caso"
                    name="descripcion"
                    required
                    rows={4}
                    className="mt-1.5 w-full rounded-md border border-line bg-white px-4 py-3 text-ink-900 focus:outline-none focus:ring-2 focus:ring-ink-600 focus:border-ink-600 transition-shadow"
                  />
                </div>

                <div className="grid gap-5 sm:grid-cols-2">
                  <div>
                    <label htmlFor="f-cuantia" className={labelCls}>Cuantía estimada *</label>
                    <select id="f-cuantia" name="cuantia" required defaultValue="" className={fieldCls}>
                      <option value="" disabled>Seleccione…</option>
                      {CUANTIAS.map((c) => <option key={c} value={c}>{c}</option>)}
                    </select>
                  </div>
                  <div>
                    <label htmlFor="f-estado" className={labelCls}>Estado del conflicto *</label>
                    <select id="f-estado" name="estado" required defaultValue="" className={fieldCls}>
                      <option value="" disabled>Seleccione…</option>
                      {ESTADOS.map((e) => <option key={e} value={e}>{e}</option>)}
                    </select>
                  </div>
                </div>

                <fieldset>
                  <legend className={labelCls}>¿Hay algo urgente que impedir en los próximos días? *</legend>
                  <div className="mt-2 flex flex-wrap gap-x-6 gap-y-2">
                    <label className="flex items-center gap-2 text-sm text-ink-800">
                      <input type="radio" name="urgencia" value="si" required className="h-4 w-4 accent-brand-600" />
                      Sí, hay algo que impedir pronto
                    </label>
                    <label className="flex items-center gap-2 text-sm text-ink-800">
                      <input type="radio" name="urgencia" value="no" className="h-4 w-4 accent-brand-600" />
                      No
                    </label>
                  </div>
                </fieldset>

                <p className="text-xs text-muted leading-relaxed">
                  Al enviar aceptas que tus datos se usen únicamente para responder tu consulta (Ley 19.628). Tu consulta queda amparada por el secreto profesional desde este primer mensaje.
                </p>

                {status === "error" && (
                  <p role="alert" className="text-sm font-bold text-error">
                    No pudimos enviar tu mensaje. Vuelve a intentarlo en unos minutos.
                  </p>
                )}

                <button
                  type="submit"
                  disabled={status === "sending"}
                  className="rounded-lg bg-brand-600 px-8 py-4 text-base font-bold text-white shadow-[0_4px_14px_rgba(168,0,13,0.28)] hover:bg-brand-500 hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200 disabled:opacity-60 disabled:hover:translate-y-0"
                >
                  {status === "sending" ? "Enviando…" : "Enviar"}
                </button>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* SECCIÓN 10 — Cierre */}
      <section className="bg-white py-14 sm:py-20">
        <div className="mx-auto max-w-3xl px-5 sm:px-6 text-center" data-reveal>
          <h2 className="font-serif text-2xl sm:text-3xl font-semibold text-ink-900 text-balance">
            Si llegaste hasta acá, probablemente el problema es real.
          </h2>
          <p className="mt-4 text-base text-ink-800 leading-relaxed">
            Una conversación de 45 minutos no te compromete a nada y puede ahorrarte una decisión cara.
          </p>
          <div className="mt-8 flex flex-col items-stretch justify-center gap-3 sm:flex-row sm:items-center">
            <CtaLink label="Revisar mi caso" />
            <WspButton label="Consultar por WhatsApp" clickId={tracking.click_id} />
          </div>
        </div>
      </section>

      {/* Pie mínimo — estudio en texto plano, sin enlaces (política de Ads + salida única) */}
      <footer className="border-t border-line py-8 text-center text-xs text-muted leading-relaxed">
        <p>Miguel Aylwin Fernández · Abogado · Aylwin Matta Abogados · Santiago, Chile</p>
        <p className="mt-1">[CORREO] · [TELÉFONO] · Política de privacidad</p>
      </footer>

      {/* Sticky móvil — formulario (principal) + WhatsApp en paralelo */}
      <div className="fixed bottom-0 left-0 right-0 border-t border-line bg-white/95 backdrop-blur p-3 sm:hidden">
        <div className="flex gap-2">
          <CtaLink
            label="Revisar mi caso"
            className="inline-flex flex-1 items-center justify-center gap-2 rounded-lg bg-brand-600 px-4 py-3.5 text-sm font-bold text-white transition-colors duration-200 hover:bg-brand-500"
          />
          <WspButton label="WhatsApp" clickId={tracking.click_id} size="sticky" />
        </div>
      </div>
    </div>
  );
}
