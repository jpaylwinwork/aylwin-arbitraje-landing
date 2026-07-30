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

async function sendTelegramAlert(lead: Lead, stored: boolean) {
  const token = process.env.TELEGRAM_BOT_TOKEN;
  const chatId = process.env.TELEGRAM_CHAT_ID;
  if (!token || !chatId) return;

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

  // Same guarantee as the firm's lead route: DB failure never suppresses the alert.
  try {
    await sendTelegramAlert(lead, stored);
  } catch (error) {
    console.error("miguel-lead telegram alert failed", error);
    if (!stored) {
      return NextResponse.json({ error: "delivery failed" }, { status: 502 });
    }
  }

  return NextResponse.json({ ok: true });
}
