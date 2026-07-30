"use client";

import { useState, type FormEvent } from "react";

type Status = "idle" | "sending" | "success" | "error";

const inputStyle: React.CSSProperties = {
  width: "100%",
  marginTop: "0.35rem",
  padding: "0.65rem 0.8rem",
  border: "1px solid var(--miguel-line)",
  borderRadius: 6,
  background: "#fff",
  fontFamily: "inherit",
  fontSize: "0.95rem",
};

const labelStyle: React.CSSProperties = {
  display: "block",
  fontFamily: "var(--font-poppins, system-ui), sans-serif",
  fontSize: "0.85rem",
  fontWeight: 600,
};

export default function MiguelContactForm() {
  const [status, setStatus] = useState<Status>("idle");

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
          fuente: "web-seo",
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
        }),
      });
      if (!res.ok) throw new Error(`HTTP ${res.status}`);
      setStatus("success");
      form.reset();
    } catch {
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div className="miguel-card" style={{ textAlign: "center" }}>
        <h3 style={{ fontSize: "1.2rem" }}>Mensaje recibido</h3>
        <p>Te respondo dentro del plazo indicado más arriba.</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="miguel-card" style={{ display: "grid", gap: "1rem" }}>
      {/* Honeypot — hidden from real visitors, never rendered visibly */}
      <input type="text" name="website" tabIndex={-1} autoComplete="off" style={{ position: "absolute", left: "-9999px" }} aria-hidden="true" />

      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1rem" }}>
        <div>
          <label style={labelStyle} htmlFor="nombre">Nombre *</label>
          <input style={inputStyle} id="nombre" name="nombre" required autoComplete="name" />
        </div>
        <div>
          <label style={labelStyle} htmlFor="empresa">Empresa</label>
          <input style={inputStyle} id="empresa" name="empresa" autoComplete="organization" />
        </div>
      </div>

      <div>
        <label style={labelStyle} htmlFor="cargo">Cargo</label>
        <input style={inputStyle} id="cargo" name="cargo" placeholder="Ej: gerente de proyecto, fiscal, socio" />
      </div>

      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1rem" }}>
        <div>
          <label style={labelStyle} htmlFor="correo">Correo *</label>
          <input style={inputStyle} id="correo" name="correo" type="email" required autoComplete="email" />
        </div>
        <div>
          <label style={labelStyle} htmlFor="telefono">Teléfono</label>
          <input style={inputStyle} id="telefono" name="telefono" type="tel" autoComplete="tel" />
        </div>
      </div>

      <div>
        <label style={labelStyle} htmlFor="conflicto">¿Cuál es el conflicto? *</label>
        <textarea style={{ ...inputStyle, minHeight: 110 }} id="conflicto" name="conflicto" required />
        <p style={{ fontSize: "0.8rem", color: "var(--miguel-muted)", marginTop: "0.3rem" }}>
          No incluyas documentos ni antecedentes reservados en este primer mensaje. Basta con que
          describas la situación en términos generales.
        </p>
      </div>

      <div>
        <label style={labelStyle} htmlFor="tipo_conflicto">Tipo de conflicto</label>
        <select style={inputStyle} id="tipo_conflicto" name="tipo_conflicto" defaultValue="">
          <option value="" disabled>Selecciona una opción</option>
          <option value="Inmobiliario">Inmobiliario (promesas, vicios, terrenos)</option>
          <option value="Construcción u obra">Construcción u obra</option>
          <option value="Societario de proyecto">Societario de proyecto</option>
          <option value="Otro">Otro</option>
        </select>
      </div>

      <div>
        <label style={labelStyle} htmlFor="cuantia_tramo">Cuantía estimada en UF</label>
        <select style={inputStyle} id="cuantia_tramo" name="cuantia_tramo" defaultValue="">
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
        <label style={labelStyle} htmlFor="urgente">¿Hay algo urgente que impedir en los próximos días?</label>
        <select style={inputStyle} id="urgente" name="urgente" defaultValue="no">
          <option value="no">No</option>
          <option value="sí">Sí</option>
        </select>
      </div>

      <div>
        <label style={labelStyle} htmlFor="estado_conflicto">¿Hay demanda o requerimiento notificado?</label>
        <select style={inputStyle} id="estado_conflicto" name="estado_conflicto" defaultValue="">
          <option value="" disabled>Selecciona una opción</option>
          <option value="Sí">Sí</option>
          <option value="No">No</option>
          <option value="No lo sé">No lo sé</option>
        </select>
      </div>

      {status === "error" && (
        <p role="alert" style={{ color: "#a8000d", fontSize: "0.9rem" }}>
          No pudimos enviar tu mensaje. Intenta nuevamente o escribe a{" "}
          <a href="mailto:contacto@aylwin.cl">contacto@aylwin.cl</a>.
        </p>
      )}

      <button type="submit" disabled={status === "sending"} className="miguel-btn" style={{ justifySelf: "start" }}>
        {status === "sending" ? "Enviando…" : "Enviar consulta"}
      </button>
    </form>
  );
}
