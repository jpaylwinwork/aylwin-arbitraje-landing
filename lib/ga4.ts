import { BetaAnalyticsDataClient } from "@google-analytics/data";
import { unstable_cache } from "next/cache";
import type { Range } from "@/lib/dashboard";

export type TrafficFunnel = {
  sessions: number;
  formStart: number;
  generateLead: number;
  generateLeadByChannel: { channel: string; count: number }[];
  byMateria: { materia: string; sessions: number; generateLead: number }[];
};

// Only these are real marketing pages — /dashboard, /api/*, etc. are internal
// tooling and must never count toward funnel metrics.
const PAGE_TO_MATERIA: Record<string, string> = {
  "/": "home",
  "/arbitraje": "Arbitraje",
  "/reclamo-ilegalidad": "Reclamo de ilegalidad",
};
const MARKETING_PAGES = Object.keys(PAGE_TO_MATERIA);

function pageToMateria(pagePath: string): string | null {
  const path = pagePath.split("?")[0];
  return PAGE_TO_MATERIA[path] ?? null;
}

function getClient() {
  const b64 = process.env.GA4_SERVICE_ACCOUNT_KEY_BASE64;
  const propertyId = process.env.GA4_PROPERTY_ID;
  if (!b64 || !propertyId) return null;
  const credentials = JSON.parse(Buffer.from(b64, "base64").toString("utf-8"));
  return { client: new BetaAnalyticsDataClient({ credentials, fallback: true }), propertyId };
}

function rangeToGa4DateRange(range: Range): { startDate: string; endDate: string } {
  switch (range) {
    case "today":
      return { startDate: "today", endDate: "today" };
    case "yesterday":
      return { startDate: "yesterday", endDate: "yesterday" };
    case "30d":
      return { startDate: "30daysAgo", endDate: "today" };
    case "7d":
    default:
      return { startDate: "7daysAgo", endDate: "today" };
  }
}

type ReportRow = { dimensionValues?: { value?: string | null }[] | null; metricValues?: { value?: string | null }[] | null };

function rowsOf(resp: unknown): ReportRow[] {
  return ((resp as { rows?: ReportRow[] })?.rows ?? []) as ReportRow[];
}

async function fetchTrafficFunnelUncached(range: Range, materia?: string): Promise<TrafficFunnel | null> {
  const config = getClient();
  if (!config) return null;
  const { client, propertyId } = config;
  const dateRanges = [rangeToGa4DateRange(range)];
  const property = `properties/${propertyId}`;

  const pagePathFilter = {
    fieldName: "pagePath",
    inListFilter: { values: MARKETING_PAGES },
  };

  const [sessionsResp] = await client.runReport({
    property,
    dateRanges,
    dimensions: [{ name: "pagePath" }],
    metrics: [{ name: "sessions" }],
    dimensionFilter: { filter: pagePathFilter },
  });

  const [eventsResp] = await client.runReport({
    property,
    dateRanges,
    dimensions: [{ name: "eventName" }, { name: "pagePath" }],
    metrics: [{ name: "eventCount" }],
    dimensionFilter: {
      andGroup: {
        expressions: [
          { filter: { fieldName: "eventName", inListFilter: { values: ["form_start", "generate_lead"] } } },
          { filter: pagePathFilter },
        ],
      },
    },
  });

  let channelRows: ReportRow[] = [];
  try {
    const [channelResp] = await client.runReport({
      property,
      dateRanges,
      dimensions: [{ name: "customEvent:lead_channel" }],
      metrics: [{ name: "eventCount" }],
      dimensionFilter: {
        filter: { fieldName: "eventName", stringFilter: { value: "generate_lead" } },
      },
    });
    channelRows = rowsOf(channelResp);
  } catch {
    // lead_channel custom dimension not registered yet in GA4 Admin — degrade gracefully
    channelRows = [];
  }

  const bySessionsPage = new Map<string, number>();
  for (const row of rowsOf(sessionsResp)) {
    const page = row.dimensionValues?.[0]?.value ?? "";
    const value = Number(row.metricValues?.[0]?.value ?? 0);
    bySessionsPage.set(page, (bySessionsPage.get(page) ?? 0) + value);
  }

  const byMateriaMap = new Map<string, { sessions: number; generateLead: number }>();
  for (const [page, sessions] of bySessionsPage) {
    const m = pageToMateria(page);
    if (!m) continue; // defensive: query already restricts to marketing pages
    const entry = byMateriaMap.get(m) ?? { sessions: 0, generateLead: 0 };
    entry.sessions += sessions;
    byMateriaMap.set(m, entry);
  }

  let sessions = 0;
  let formStart = 0;
  let generateLead = 0;
  for (const row of rowsOf(eventsResp)) {
    const eventName = row.dimensionValues?.[0]?.value ?? "";
    const page = row.dimensionValues?.[1]?.value ?? "";
    const value = Number(row.metricValues?.[0]?.value ?? 0);
    if (eventName === "form_start") formStart += value;
    else if (eventName === "generate_lead") {
      generateLead += value;
      const m = pageToMateria(page);
      if (!m) continue;
      const entry = byMateriaMap.get(m) ?? { sessions: 0, generateLead: 0 };
      entry.generateLead += value;
      byMateriaMap.set(m, entry);
    }
  }
  for (const s of bySessionsPage.values()) sessions += s;

  const generateLeadByChannel = channelRows
    .map((row) => ({
      channel: row.dimensionValues?.[0]?.value || "(sin registrar)",
      count: Number(row.metricValues?.[0]?.value ?? 0),
    }))
    .filter((r) => r.count > 0);

  const byMateria = Array.from(byMateriaMap.entries()).map(([m, v]) => ({ materia: m, ...v }));

  const result: TrafficFunnel = {
    sessions,
    formStart,
    generateLead,
    generateLeadByChannel,
    byMateria,
  };

  if (materia) {
    const slice = byMateria.find((b) => b.materia === materia);
    return {
      ...result,
      sessions: slice?.sessions ?? 0,
      generateLead: slice?.generateLead ?? 0,
    };
  }

  return result;
}

export async function getTrafficFunnel(range: Range, materia?: string): Promise<TrafficFunnel | null> {
  if (!process.env.GA4_SERVICE_ACCOUNT_KEY_BASE64 || !process.env.GA4_PROPERTY_ID) return null;
  const revalidate = range === "30d" ? 1800 : 300;
  const cached = unstable_cache(
    () => fetchTrafficFunnelUncached(range, materia),
    ["ga4-traffic-funnel", range, materia ?? "all"],
    { revalidate },
  );
  return cached();
}
