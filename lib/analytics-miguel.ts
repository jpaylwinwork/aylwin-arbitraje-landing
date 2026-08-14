// Eventos de miguelaylwin.com. Si la analítica no está activa —GA4_ID vacío,
// o el visitante llegó por el dominio del estudio— gtag no existe y la
// llamada no hace nada. Nunca debe romper el envío de un formulario.
export function trackMiguel(evento: string, params: Record<string, unknown> = {}) {
  if (typeof window === "undefined") return;
  const gtag = (window as typeof window & { gtag?: (...a: unknown[]) => void }).gtag;
  if (typeof gtag !== "function") return;
  try {
    gtag("event", evento, params);
  } catch {
    // Medir nunca puede impedir convertir.
  }
}
