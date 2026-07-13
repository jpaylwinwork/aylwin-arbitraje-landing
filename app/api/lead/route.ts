import { neon } from "@neondatabase/serverless";
import { NextResponse } from "next/server";

const CREATE_TABLE = `
  CREATE TABLE IF NOT EXISTS leads (
    id SERIAL PRIMARY KEY,
    created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
    name TEXT NOT NULL,
    email TEXT NOT NULL,
    phone TEXT,
    company TEXT,
    message TEXT NOT NULL,
    utm_source TEXT,
    utm_medium TEXT,
    utm_campaign TEXT,
    utm_term TEXT,
    click_id TEXT,
    materia TEXT,
    status TEXT NOT NULL DEFAULT 'nuevo',
    notified_at TIMESTAMPTZ
  )
`;

let tableReady: Promise<unknown> | null = null;

function ensureTable(sql: { query: (queryText: string) => Promise<unknown> }) {
  tableReady ??= sql.query(CREATE_TABLE);
  return tableReady;
}

async function sendTelegramAlert(lead: Record<string, string>) {
  const token = process.env.TELEGRAM_BOT_TOKEN;
  const chatId = process.env.TELEGRAM_CHAT_ID;
  if (!token || !chatId) return;

  const lines = [
    `🆕 Nuevo lead${lead.materia ? ` — ${lead.materia}` : ""}`,
    `Nombre: ${lead.name}`,
    `Email: ${lead.email}`,
    lead.phone && `Teléfono: ${lead.phone}`,
    lead.company && `Empresa: ${lead.company}`,
    `Mensaje: ${lead.message}`,
    lead.utm_source && `Fuente: ${lead.utm_source} / ${lead.utm_medium ?? "-"} / ${lead.utm_campaign ?? "-"}`,
    lead.click_id && `Ref: ${lead.click_id}`,
  ].filter(Boolean);

  await fetch(`https://api.telegram.org/bot${token}/sendMessage`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ chat_id: chatId, text: lines.join("\n") }),
  });
}

export async function POST(request: Request) {
  let body: Record<string, string>;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "invalid JSON" }, { status: 400 });
  }

  const name = body.name?.trim();
  const email = body.email?.trim();
  const message = body.message?.trim();
  if (!name || !email || !message || !body.consent) {
    return NextResponse.json({ error: "missing required fields" }, { status: 400 });
  }
  if (name.length > 200 || email.length > 200 || message.length > 5000) {
    return NextResponse.json({ error: "field too long" }, { status: 400 });
  }

  const lead = {
    name,
    email,
    phone: body.phone?.trim().slice(0, 50) ?? "",
    company: body.company?.trim().slice(0, 200) ?? "",
    message,
    utm_source: body.utm_source?.slice(0, 100) ?? "",
    utm_medium: body.utm_medium?.slice(0, 100) ?? "",
    utm_campaign: body.utm_campaign?.slice(0, 100) ?? "",
    utm_term: body.utm_term?.slice(0, 100) ?? "",
    click_id: body.click_id?.slice(0, 200) ?? "",
    materia: body.materia?.slice(0, 100) ?? "",
  };

  let stored = false;
  if (process.env.DATABASE_URL) {
    try {
      const sql = neon(process.env.DATABASE_URL);
      await ensureTable(sql);
      await sql.query(
        `INSERT INTO leads (name, email, phone, company, message, utm_source, utm_medium, utm_campaign, utm_term, click_id, materia)
         VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11)`,
        [
          lead.name,
          lead.email,
          lead.phone || null,
          lead.company || null,
          lead.message,
          lead.utm_source || null,
          lead.utm_medium || null,
          lead.utm_campaign || null,
          lead.utm_term || null,
          lead.click_id || null,
          lead.materia || null,
        ],
      );
      stored = true;
    } catch (error) {
      console.error("lead insert failed", error);
    }
  }

  // The Telegram alert goes out even if the DB write failed, so no lead is silently lost.
  try {
    await sendTelegramAlert(stored ? lead : { ...lead, message: `${lead.message}\n\n⚠️ NO GUARDADO EN BD` });
  } catch (error) {
    console.error("telegram alert failed", error);
    if (!stored) {
      return NextResponse.json({ error: "delivery failed" }, { status: 502 });
    }
  }

  return NextResponse.json({ ok: true });
}
