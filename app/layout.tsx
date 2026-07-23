import type { Metadata } from "next";
import { Bodoni_Moda, Poppins } from "next/font/google";
import Script from "next/script";
import "./globals.css";

const GTM_ID = "GTM-TCSWRPF7";

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
      lang="es"
      className={`${bodoni.variable} ${poppins.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <Script id="gtm-init" strategy="afterInteractive">
          {`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);})(window,document,'script','dataLayer','${GTM_ID}');`}
        </Script>
        <noscript>
          <iframe
            src={`https://www.googletagmanager.com/ns.html?id=${GTM_ID}`}
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
            title="gtm"
          />
        </noscript>
        {children}
      </body>
    </html>
  );
}
