import { Source_Serif_4 } from "next/font/google";
import "./miguel.css";

const sourceSerif = Source_Serif_4({
  variable: "--font-source-serif",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

// Deliberately bare: no header/footer here. Every indexable page lives under
// the (site) route group, which adds MiguelHeader/MiguelFooter. /consulta
// sits outside that group so it inherits only fonts + design tokens — the
// landing spec requires zero navigation exits (no linked logo, no nav).
export default function MiguelLayout({ children }: { children: React.ReactNode }) {
  return <div className={`site-miguel ${sourceSerif.variable}`}>{children}</div>;
}
