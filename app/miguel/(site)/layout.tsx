import MiguelHeader from "@/components/miguel/MiguelHeader";
import MiguelFooter from "@/components/miguel/MiguelFooter";
import { JsonLd, abogadoMiguelSchema } from "@/lib/schema";
import { SITIO_MIGUEL } from "@/lib/hosts-miguel";

// La ficha Attorney va aquí y no solo en la portada: Search Console evalúa la
// entidad en cada página indexable, y todas las del grupo (site) hablan del
// mismo abogado. /consulta queda fuera a propósito (no es indexable).
export default function MiguelSiteLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <JsonLd data={abogadoMiguelSchema({ url: SITIO_MIGUEL })} />
      <MiguelHeader />
      <main>{children}</main>
      <MiguelFooter />
    </>
  );
}
