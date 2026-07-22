import { neon } from "@neondatabase/serverless";
import { NextResponse } from "next/server";
import { STATUS_OPTIONS } from "@/lib/dashboard";

const VALID_STATUSES = new Set<string>(STATUS_OPTIONS.map((s) => s.value));

export async function POST(request: Request) {
  if (!process.env.DATABASE_URL) {
    return NextResponse.json({ error: "no database configured" }, { status: 500 });
  }

  let body: { id?: number; status?: string };
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "invalid JSON" }, { status: 400 });
  }

  const { id, status } = body;
  if (!id || typeof id !== "number" || !status || !VALID_STATUSES.has(status)) {
    return NextResponse.json({ error: "missing or invalid id/status" }, { status: 400 });
  }

  const sql = neon(process.env.DATABASE_URL);
  await sql.query("UPDATE leads SET status = $1 WHERE id = $2", [status, id]);

  return NextResponse.json({ ok: true });
}
