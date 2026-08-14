"use client";

import { useEffect, useState, type FormEvent } from "react";

type Status = "idle" | "sending" | "success" | "error";

const CLICK_ID_KEYS = ["gclid", "wbraid", "gbraid"] as const;
const UTM_KEYS = ["utm_source", "utm_medium", "utm_campaign", "utm_term"] as const;

function setCookie(name: string, value: string, days: number) {
  const expires = new Date(Date.now() + days * 864e5).toUTCString();
  document.cookie = `${name}=${encodeURIComponent(value)}; expires=${expires}; path=/; SameSite=Lax`;
}

function getCookie(name: string): string {
  const match = document.cookie.match(new RegExp(`(?:^|; )${name}=([^;]*)`));
  return match ? decodeURIComponent(match[1]) : "";
}

const inputStyle: React.CSSProperties = {
  width: "100%",
  marginTop: "0.35rem",
  padding: "0.7rem 0.85rem",
  border: "1px solid var(--miguel-line)",
  borderRadius: 6,
  background: "#fff",
  fontFamily: "var(--font-poppins, system-ui), sans-serif",
  fontSize: "1rem",
};

const labelStyle: React.CSSProperties = {
  display: "block",
  fontFamily: "var(--font-poppins, system-ui), sans-serif",
  fontSize: "0.85rem",
  fontWeight: 600,
};

export default function ConsultaForm() {
  const [status, setStatus] = useState<Status>("idle");

  // El efecto solo escribe cookies: no toca estado. Antes guardaba además los
  // valores en un useState, lo que disparaba un render en cascada al montar
  // (react-hooks/set-state-in-effect) sin ninguna necesidad — el tracking no
  // se pinta en pantalla, solo se envía. Ahora se lee al enviar, que además
  // garantiza el valor más reciente.
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    for (const key of CLICK_ID_KEYS) {
      const value = params.get(key);
      if (value) setCookie("miguel_click_id", `${key}:${value}`, 90);
    }
    for (const key of UTM_KEYS) {
      const value = params.get(key);
      if (value) setCookie(key, value, 90);
    }
  }, []);

  function leerTracking(): Record<string, string> {
    return {
      click_id: getCookie("miguel_click_id"),
      utm_source: getCookie("utm_source"),
      utm_medium: getCookie("utm_medium"),
      utm_campaign: getCookie("utm_campaign"),
      utm_term: getCookie("utm_term"),
    };
  }

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries());
    setStatus("sending");
    try {
      const res = await fetch("/api/miguel-lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          fuente: "landing-ads",
          nombre: data.nombre,
          empresa: data.empresa,
          cargo: data.cargo,
          correo: data.correo,
          telefono: data.telefono,
          conflicto: data.conflicto,
          tipo_conflicto: data.tipo_conflicto,
          cuantia_tramo: data.cuantia_tramo,
          urgente: data.urgente === "sí",
          estado_conflicto: data.estado_conflicto,
          website: data.website, // honeypot
          ...leerTracking(),
        }),
      });
      if (!res.ok) throw new Error(`HTTP ${res.status}`);
      window.location.href = "/consulta/gracias";
    } catch {
      setStatus("error");
    }
  }

  return (
    <form onSubmit={handleSubmit} className="miguel-card" style={{ display: "grid", gap: "1rem" }} id="consulta-form">
      <input type="text" name="website" tabIndex={-1} autoComplete="off" style={{ position: "absolute", left: "-9999px" }} aria-hidden="true" />

      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1rem" }}>
        <div>
          <label style={labelStyle} htmlFor="c-nombre">Nombre *</label>
          <input style={inputStyle} id="c-nombre" name="nombre" required autoComplete="name" />
        </div>
        <div>
          <label style={labelStyle} htmlFor="c-empresa">Empresa *</label>
          <input style={inputStyle} id="c-empresa" name="empresa" required autoComplete="organization" />
        </div>
      </div>

      <div>
        <label style={labelStyle} htmlFor="c-cargo">Cargo</label>
        <select style={inputStyle} id="c-cargo" name="cargo" defaultValue="">
          <option value="" disabled>Selecciona una opción</option>
          <option value="Socio">Socio</option>
          <option value="Gerente General">Gerente General</option>
          <option value="Gerente de Proyectos">Gerente de Proyectos</option>
          <option value="Fiscal o Abogado interno">Fiscal o Abogado interno</option>
          <option value="Administrador de contrato">Administrador de contrato</option>
          <option value="Otro">Otro</option>
        </select>
      </div>

      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1rem" }}>
        <div>
          <label style={labelStyle} htmlFor="c-correo">Correo *</label>
          <input style={inputStyle} id="c-correo" name="correo" type="email" required autoComplete="email" />
        </div>
        <div>
          <label style={labelStyle} htmlFor="c-telefono">Teléfono *</label>
          <input style={inputStyle} id="c-telefono" name="telefono" type="tel" required autoComplete="tel" />
        </div>
      </div>

      <div>
        <label style={labelStyle} htmlFor="c-conflicto">¿Cuál es el conflicto? *</label>
        <textarea style={{ ...inputStyle, minHeight: 110 }} id="c-conflicto" name="conflicto" required />
      </div>

      <div>
        <label style={labelStyle} htmlFor="c-tipo">Tipo de conflicto</label>
        <select style={inputStyle} id="c-tipo" name="tipo_conflicto" defaultValue="">
          <option value="" disabled>Selecciona una opción</option>
          <option value="Inmobiliario">Inmobiliario (promesas, vicios, terrenos)</option>
          <option value="Construcción u obra">Construcción u obra</option>
          <option value="Societario de proyecto">Societario de proyecto</option>
          <option value="Otro">Otro</option>
        </select>
      </div>

      <div>
        <label style={labelStyle} htmlFor="c-cuantia">Cuantía estimada</label>
        <select style={inputStyle} id="c-cuantia" name="cuantia_tramo" defaultValue="">
          <option value="" disabled>Selecciona una opción</option>
          <option value="Menos de 1.000 UF">Menos de 1.000 UF</option>
          <option value="1.000-8.000">1.000–8.000 UF</option>
          <option value="8.001-25.000">8.001–25.000 UF</option>
          <option value="Más de 25.000">Más de 25.000 UF</option>
          <option value="Sin cuantía determinada">Sin cuantía determinada</option>
          <option value="No lo sé aún">No lo sé aún</option>
        </select>
      </div>

      <div>
        <label style={labelStyle} htmlFor="c-urgente">¿Hay algo urgente que impedir en los próximos días?</label>
        <select style={inputStyle} id="c-urgente" name="urgente" defaultValue="no">
          <option value="no">No</option>
          <option value="sí">Sí</option>
        </select>
      </div>

      <div>
        <label style={labelStyle} htmlFor="c-estado">Estado del conflicto</label>
        <select style={inputStyle} id="c-estado" name="estado_conflicto" defaultValue="">
          <option value="" disabled>Selecciona una opción</option>
          <option value="Aún no reclamo formalmente">Aún no reclamo formalmente</option>
          <option value="Reclamé y no hay respuesta">Reclamé y no hay respuesta</option>
          <option value="En negociación">En negociación</option>
          <option value="Demanda o arbitraje notificado">Demanda o arbitraje notificado</option>
          <option value="Proceso en curso con otro abogado">Proceso en curso con otro abogado</option>
        </select>
      </div>

      {status === "error" && (
        <p role="alert" style={{ color: "var(--miguel-accent)", fontSize: "0.9rem" }}>
          No pudimos enviar tu mensaje. Intenta nuevamente.
        </p>
      )}

      <button type="submit" disabled={status === "sending"} className="miguel-btn">
        {status === "sending" ? "Enviando…" : "Enviar"}
      </button>
      <p style={{ fontSize: "0.8rem", color: "var(--miguel-muted)" }}>
        Al enviar aceptas que tus datos se usen únicamente para responder tu consulta.
      </p>
    </form>
  );
}
