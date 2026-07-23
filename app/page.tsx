import type { Metadata } from "next";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import TrustBar from "@/components/TrustBar";
import Services from "@/components/Services";
import Respaldo from "@/components/Respaldo";
import Team from "@/components/Team";
import Faq from "@/components/Faq";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import { JsonLd, legalServiceSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Aylwin Matta Abogados | Arbitraje Comercial y Derecho Administrativo",
  description:
    "Representamos empresas en arbitraje comercial y reclamos de ilegalidad, con el respaldo de Aylwin Abogados desde 1974. Santiago, Chile.",
};

const schema = legalServiceSchema({
  name: "Aylwin Matta Abogados",
  description:
    "Práctica especializada en arbitraje comercial y reclamos de ilegalidad, respaldada por Aylwin Abogados.",
  knowsAbout: [
    "Arbitraje comercial",
    "Conflictos societarios",
    "Reclamo de ilegalidad municipal",
    "Derecho administrativo",
  ],
});

export default function Home() {
  return (
    <>
      <JsonLd data={schema} />
      <Header />
      <main className="flex-1">
        <Hero />
        <TrustBar />
        <Services />
        <Respaldo />
        <Team />
        <Faq />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
