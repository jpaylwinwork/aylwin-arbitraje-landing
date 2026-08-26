import type { Metadata } from "next";
import { Source_Serif_4 } from "next/font/google";
import "./miguel.css";
import MiguelAnalytics from "@/components/miguel/MiguelAnalytics";
import { SITIO_MIGUEL } from "@/lib/hosts-miguel";
import MiguelGtm from "@/components/miguel/MiguelGtm";

const sourceSerif = Source_Serif_4({
  variable: "--font-source-serif",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

// Metadatos comunes a todo miguelaylwin.com. Faltaba og:image: al pegar un
// enlace en WhatsApp o LinkedIn no aparecía ninguna imagen, que es
// precisamente donde se comparten estas entradas. Cada página puede
// sobrescribirlo —el boletín usa la foto de su propia entrada—.
//
// metadataBase es imprescindible: sin él Next no puede convertir la ruta
// relativa de la imagen en la URL absoluta que exigen las redes sociales.
export const metadata: Metadata = {
  metadataBase: new URL(SITIO_MIGUEL),
  openGraph: {
    type: "website",
    locale: "es_CL",
    siteName: "Miguel Aylwin Fernández — Abogado",
    images: [{ url: "/miguel/retrato-miguel-aylwin.jpg", width: 800, height: 1200 }],
  },
};

// Deliberately bare: no header/footer here. Every indexable page lives under
// the (site) route group, which adds MiguelHeader/MiguelFooter. /consulta
// sits outside that group so it inherits only fonts + design tokens — the
// landing spec requires zero navigation exits (no linked logo, no nav).
export default function MiguelLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className={`site-miguel ${sourceSerif.variable}`}>
      <MiguelAnalytics />
      <MiguelGtm />
      {children}
    </div>
  );
}
