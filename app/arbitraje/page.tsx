import type { Metadata } from "next";
import ConsultaLanding from "@/components/campaign/ConsultaLanding";

export const metadata: Metadata = {
  title: "Arbitraje y conflictos de construcción e inmobiliarios | Miguel Aylwin",
  description:
    "Reviso tu conflicto de obra o contrato inmobiliario y te digo con franqueza qué tan sólida es tu posición antes de litigar. Consulta confidencial en Santiago.",
  robots: { index: false, follow: false },
};

export default function Page() {
  return <ConsultaLanding />;
}
