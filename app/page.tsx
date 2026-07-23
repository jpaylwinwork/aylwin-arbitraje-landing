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

const schema = legalServiceSchema({
  name: "Arbitraje de Construcción — Aylwin",
  description:
    "Práctica especializada en arbitraje y resolución de disputas de construcción, respaldada por Aylwin Abogados.",
  knowsAbout: [
    "Arbitraje de construcción",
    "Claims y reclamaciones contractuales",
    "Término anticipado de contratos de obra",
    "Mediación y dispute boards",
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
