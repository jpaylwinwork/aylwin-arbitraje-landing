import type { Metadata } from "next";
import { Bodoni_Moda, Poppins } from "next/font/google";
import GtmLoader from "@/components/GtmLoader";
import "./globals.css";

const bodoni = Bodoni_Moda({
  variable: "--font-bodoni",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Aylwin Matta Abogados | Arbitraje Comercial y Derecho Administrativo",
  description:
    "Arbitraje comercial y reclamos de ilegalidad, con el respaldo de la tradición jurídica de Aylwin Abogados desde 1974. Santiago, Chile.",
  keywords: [
    "arbitraje comercial chile",
    "reclamo de ilegalidad municipal",
    "abogado arbitraje santiago",
    "derecho administrativo empresas",
    "cláusula compromisoria",
  ],
  openGraph: {
    title: "Aylwin Matta Abogados",
    description:
      "Arbitraje comercial y reclamos de ilegalidad, con el respaldo de 50 años de tradición jurídica. Santiago, Chile.",
    locale: "es_CL",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="es-CL"
      className={`${bodoni.variable} ${poppins.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <GtmLoader />
        {children}
      </body>
    </html>
  );
}
