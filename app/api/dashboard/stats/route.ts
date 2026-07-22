import { NextResponse } from "next/server";
import { getCommercialFunnel, getLeadsTable, type Range } from "@/lib/dashboard";
import { getTrafficFunnel } from "@/lib/ga4";

export const runtime = "nodejs";

function parseRange(value: string | null): Range {
  return value === "today" || value === "yesterday" || value === "30d" ? value : value === "7d" ? "7d" : "yesterday";
}

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const range = parseRange(searchParams.get("range"));
  const materia = searchParams.get("materia") ?? undefined;

  const [commercial, traffic, recentLeads] = await Promise.all([
    getCommercialFunnel(range, materia),
    getTrafficFunnel(range, materia).catch(() => null),
    getLeadsTable(range, materia).then((leads) => leads.length),
  ]);

  return NextResponse.json({
    range,
    materia: materia ?? "all",
    leadCount: recentLeads,
    commercial,
    traffic,
  });
}
