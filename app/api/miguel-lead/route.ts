import { neon } from "@neondatabase/serverless";
import { NextResponse } from "next/server";
import { priorityFromLead, tierFromCuantia } from "@/lib/leads-miguel";

const CREATE_TABLE = `
  CREATE TABLE IF NOT EXISTS leads_miguelaylwin (
    id SERIAL PRIMARY KEY,
    created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
    fuente TEXT NOT NULL,
    nombre TEXT NOT NULL,
    empresa TEXT,
    cargo TEXT,
    correo TEXT NOT NULL,
    telefono TEXT,
    conflicto TEXT NOT NULL,
    tipo_conflicto TEXT,
    cuantia_tramo TEXT,
    urgente BOOLEAN NOT NULL DEFAULT false,
    estado_conflicto TEXT,
    click_id TEXT,
    utm_source TEXT,
    utm_medium TEXT,
    utm_campaign TEXT,
    utm_term TEXT,
    prioridad TEXT NOT NULL DEFAULT 'normal',
    status TEXT NOT NULL DEFAULT 'nuevo',
    notified_at TIMESTAMPTZ
  )
`;

let tableReady: Promise<unknown> | null = null;

function ensureTable(sql: { query: (queryText: string) => Promise<unknown> }) {
  tableReady ??= sql.query(CREATE_TABLE);
  return tableReady;
}

type Lead = {
  fuente: string;
  nombre: string;
  empresa: string;
  cargo: string;
  correo: string;
  telefono: string;
  conflicto: string;
  tipo_conflicto: string;
  cuantia_tramo: string;
  urgente: boolean;
  estado_conflicto: string;
  click_id: string;
  utm_source: string;
  utm_medium: string;
  utm_campaign: string;
  utm_term: string;
  prioridad: string;
};

// Devuelve true solo si el aviso se envió de verdad. Que la función termine
// sin excepción no basta: si faltan las variables de entorno sale sin hacer
// nada, y eso no puede contarse como lead entregado.
async function sendTelegramAlert(lead: Lead, stored: boolean): Promise<boolean> {
  const token = process.env.TELEGRAM_BOT_TOKEN;
  const chatId = process.env.TELEGRAM_CHAT_ID;
  if (!token || !chatId) return false;

  const prioridadEmoji = lead.prioridad === "urgente" ? "🔴 URGENTE" : lead.prioridad === "alta" ? "🟠 LEAD CALIENTE" : "";
  const tier = tierFromCuantia(lead.cuantia_tramo);

  const lines = [
    `📐 miguelaylwin.com — Nuevo lead (${lead.fuente})`,
    prioridadEmoji && prioridadEmoji,
    `Nombre: ${lead.nombre}`,
    lead.empresa && `Empresa: ${lead.empresa}`,
    lead.cargo && `Cargo: ${lead.cargo}`,
    `Correo: ${lead.correo}`,
    lead.telefono && `Teléfono: ${lead.telefono}`,
    `Conflicto: ${lead.conflicto}`,
    lead.tipo_conflicto && `Tipo: ${lead.tipo_conflicto}`,
    lead.cuantia_tramo && `Cuantía: ${lead.cuantia_tramo} → ${tier}`,
    lead.estado_conflicto && `Estado: ${lead.estado_conflicto}`,
    lead.urgente && "⚠️ Marcó URGENTE — algo que impedir en los próximos días",
    lead.utm_source && `Fuente ads: ${lead.utm_source} / ${lead.utm_medium || "-"} / ${lead.utm_campaign || "-"}`,
    lead.click_id && `Ref: ${lead.click_id}`,
    !stored && "⚠️ NO GUARDADO EN BD",
  ].filter(Boolean);

  await fetch(`https://api.telegram.org/bot${token}/sendMessage`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ chat_id: chatId, text: lines.join("\n") }),
  });
  return true;
}

// Aviso por correo, en paralelo al de Telegram. Se usa la API REST de Resend
// con fetch —sin dependencia nueva—, igual que la alerta de Telegram.
//
// Si RESEND_API_KEY no está definida la función no hace nada: el canal se
// activa solo cuando alguien con acceso a Vercel configure la clave, sin que
// el despliegue falle mientras tanto.
function escaparHtml(texto: string): string {
  return texto
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

async function sendEmailAlert(lead: Lead, stored: boolean): Promise<boolean> {
  const apiKey = process.env.RESEND_API_KEY;
  const destino = process.env.LEAD_EMAIL_TO;
  const remitente = process.env.LEAD_EMAIL_FROM;
  if (!apiKey || !destino || !remitente) return false;

  const tier = tierFromCuantia(lead.cuantia_tramo);
  const prioridad =
    lead.prioridad === "urgente"
      ? "URGENTE"
      : lead.prioridad === "alta"
        ? "LEAD CALIENTE"
        : "";

  const filas: [string, string][] = [
    ["Nombre", lead.nombre],
    ["Empresa", lead.empresa],
    ["Cargo", lead.cargo],
    ["Correo", lead.correo],
    ["Teléfono", lead.telefono],
    ["Tipo de conflicto", lead.tipo_conflicto],
    ["Cuantía", lead.cuantia_tramo ? `${lead.cuantia_tramo} → ${tier}` : ""],
    ["Estado", lead.estado_conflicto],
    ["Origen", lead.fuente],
    [
      "Campaña",
      lead.utm_source ? `${lead.utm_source} / ${lead.utm_medium || "-"} / ${lead.utm_campaign || "-"}` : "",
    ],
    ["Ref", lead.click_id],
  ].filter(([, v]) => v) as [string, string][];

  // El asunto lleva la prioridad delante para que se vea en la notificación
  // del teléfono sin abrir el correo.
  const asunto = [prioridad && `[${prioridad}]`, "Nueva consulta —", lead.nombre, lead.empresa && `(${lead.empresa})`]
    .filter(Boolean)
    .join(" ");

  const html = `
    <div style="font-family:system-ui,-apple-system,sans-serif;font-size:15px;line-height:1.6;color:#1a1a1a;max-width:640px">
      <p style="font-size:12px;letter-spacing:.12em;text-transform:uppercase;color:#a8000d;margin:0 0 4px">
        miguelaylwin.com${prioridad ? ` · ${escaparHtml(prioridad)}` : ""}
      </p>
      <h2 style="font-size:20px;margin:0 0 16px">Nueva consulta</h2>
      ${
        lead.urgente
          ? `<p style="border-left:3px solid #a8000d;padding:8px 12px;background:#fbe9ea;margin:0 0 16px">
               Marcó <strong>urgente</strong>: hay algo que impedir en los próximos días.
             </p>`
          : ""
      }
      <table style="border-collapse:collapse;width:100%;margin-bottom:16px">
        ${filas
          .map(
            ([k, v]) =>
              `<tr>
                 <td style="padding:6px 12px 6px 0;color:#5f5f5f;vertical-align:top;white-space:nowrap">${escaparHtml(k)}</td>
                 <td style="padding:6px 0">${escaparHtml(v)}</td>
               </tr>`,
          )
          .join("")}
      </table>
      <p style="color:#5f5f5f;margin:0 0 4px">Conflicto descrito:</p>
      <p style="border-left:3px solid #e3e0dd;padding:8px 12px;margin:0 0 16px;white-space:pre-wrap">${escaparHtml(lead.conflicto)}</p>
      <p style="margin:0">
        <a href="mailto:${escaparHtml(lead.correo)}" style="color:#a8000d">Responder a ${escaparHtml(lead.nombre)}</a>
      </p>
      ${!stored ? `<p style="color:#a8000d;margin-top:16px"><strong>Atención:</strong> no se guardó en la base de datos. Este correo es el único registro.</p>` : ""}
    </div>
  `;

  const res = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${apiKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      from: remitente,
      to: destino.split(",").map((d) => d.trim()),
      reply_to: lead.correo,
      subject: asunto,
      html,
    }),
  });

  if (!res.ok) {
    throw new Error(`resend respondió ${res.status}: ${await res.text()}`);
  }
  return true;
}

export async function POST(request: Request) {
  let body: Record<string, string | boolean>;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "invalid JSON" }, { status: 400 });
  }

  // Honeypot: a hidden field a real visitor never fills. If it has a value, drop silently.
  if (body.website) {
    return NextResponse.json({ ok: true });
  }

  const fuente = String(body.fuente ?? "").trim();
  const nombre = String(body.nombre ?? "").trim();
  const correo = String(body.correo ?? "").trim();
  const conflicto = String(body.conflicto ?? "").trim();

  if (!fuente || !nombre || !correo || !conflicto) {
    return NextResponse.json({ error: "missing required fields" }, { status: 400 });
  }
  if (fuente !== "web-seo" && fuente !== "landing-ads") {
    return NextResponse.json({ error: "invalid fuente" }, { status: 400 });
  }
  // /consulta (landing-ads) requires the fuller field set; /contacto (web-seo) does not.
  const telefono = String(body.telefono ?? "").trim();
  if (fuente === "landing-ads" && !telefono) {
    return NextResponse.json({ error: "telefono required for landing-ads" }, { status: 400 });
  }
  if (nombre.length > 200 || correo.length > 200 || conflicto.length > 5000) {
    return NextResponse.json({ error: "field too long" }, { status: 400 });
  }

  const lead: Lead = {
    fuente,
    nombre,
    empresa: String(body.empresa ?? "").trim().slice(0, 200),
    cargo: String(body.cargo ?? "").trim().slice(0, 100),
    correo,
    telefono: telefono.slice(0, 50),
    conflicto,
    tipo_conflicto: String(body.tipo_conflicto ?? "").trim().slice(0, 100),
    cuantia_tramo: String(body.cuantia_tramo ?? "").trim().slice(0, 100),
    urgente: body.urgente === true || body.urgente === "true",
    estado_conflicto: String(body.estado_conflicto ?? "").trim().slice(0, 200),
    click_id: String(body.click_id ?? "").trim().slice(0, 200),
    utm_source: String(body.utm_source ?? "").trim().slice(0, 100),
    utm_medium: String(body.utm_medium ?? "").trim().slice(0, 100),
    utm_campaign: String(body.utm_campaign ?? "").trim().slice(0, 100),
    utm_term: String(body.utm_term ?? "").trim().slice(0, 100),
    prioridad: "normal",
  };
  lead.prioridad = priorityFromLead({ urgente: lead.urgente, estadoConflicto: lead.estado_conflicto });

  let stored = false;
  if (process.env.DATABASE_URL) {
    try {
      const sql = neon(process.env.DATABASE_URL);
      await ensureTable(sql);
      await sql.query(
        `INSERT INTO leads_miguelaylwin
           (fuente, nombre, empresa, cargo, correo, telefono, conflicto, tipo_conflicto,
            cuantia_tramo, urgente, estado_conflicto, click_id, utm_source, utm_medium,
            utm_campaign, utm_term, prioridad)
         VALUES ($1,$2,$3,$4,$5,$6,$7,$8,$9,$10,$11,$12,$13,$14,$15,$16,$17)`,
        [
          lead.fuente,
          lead.nombre,
          lead.empresa || null,
          lead.cargo || null,
          lead.correo,
          lead.telefono || null,
          lead.conflicto,
          lead.tipo_conflicto || null,
          lead.cuantia_tramo || null,
          lead.urgente,
          lead.estado_conflicto || null,
          lead.click_id || null,
          lead.utm_source || null,
          lead.utm_medium || null,
          lead.utm_campaign || null,
          lead.utm_term || null,
          lead.prioridad,
        ],
      );
      stored = true;
    } catch (error) {
      console.error("miguel-lead insert failed", error);
    }
  }

  // Misma garantía que la ruta del estudio: un fallo de base de datos nunca
  // suprime el aviso. Los dos canales van en paralelo y son independientes —
  // que Telegram falle no puede impedir el correo, ni al revés.
  const [telegram, email] = await Promise.allSettled([
    sendTelegramAlert(lead, stored),
    sendEmailAlert(lead, stored),
  ]);

  if (telegram.status === "rejected") {
    console.error("miguel-lead telegram alert failed", telegram.reason);
  }
  if (email.status === "rejected") {
    console.error("miguel-lead email alert failed", email.reason);
  }

  // Se responde 502 solo si el lead no quedó en ninguna parte: ni en la base
  // de datos ni en ningún canal de aviso. Así el visitante ve el error y puede
  // reintentar, en vez de creer que su consulta llegó.
  const avisado =
    (telegram.status === "fulfilled" && telegram.value) ||
    (email.status === "fulfilled" && email.value);

  if (!stored && !avisado) {
    return NextResponse.json({ error: "delivery failed" }, { status: 502 });
  }

  return NextResponse.json({ ok: true });
}
