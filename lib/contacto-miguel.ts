// WhatsApp de Miguel. Es el mismo número que el sitio ya publica en el pie y en
// /consulta (+56 9 6908 0084). Si MAF habilita un número distinto para WhatsApp
// Business, se cambia aquí y en ningún otro sitio.
export const WHATSAPP_MIGUEL = "56969080084";

export function enlaceWhatsapp(mensaje: string): string {
  return `https://wa.me/${WHATSAPP_MIGUEL}?text=${encodeURIComponent(mensaje)}`;
}
