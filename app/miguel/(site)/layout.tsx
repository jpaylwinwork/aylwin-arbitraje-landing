import MiguelHeader from "@/components/miguel/MiguelHeader";
import MiguelFooter from "@/components/miguel/MiguelFooter";

export default function MiguelSiteLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <MiguelHeader />
      <main>{children}</main>
      <MiguelFooter />
    </>
  );
}
