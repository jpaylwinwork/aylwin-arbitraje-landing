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
  title: "Arbitraje de Construcción — Aylwin | Resolución de disputas en Chile",
  description:
    "Práctica especializada en arbitraje de construcción, claims y disputas contractuales de obra. Respaldada por la tradición de Aylwin Abogados, desde 1974. Santiago, Chile.",
  keywords: [
    "arbitraje de construcción",
    "disputas de construcción",
    "claims construcción",
    "abogado arbitraje Chile",
    "término anticipado contrato de obra",
    "liquidación contrato construcción",
  ],
  openGraph: {
    title: "Arbitraje de Construcción — Aylwin",
    description:
      "Resolución de disputas de construcción con el respaldo de 50 años de tradición jurídica. Santiago, Chile.",
    locale: "es_CL",
    type: "website",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "LegalService",
  name: "Arbitraje de Construcción — Aylwin",
  description:
    "Práctica especializada en arbitraje y resolución de disputas de construcción, respaldada por Aylwin Abogados.",
  areaServed: { "@type": "Country", name: "Chile" },
  address: {
    "@type": "PostalAddress",
    streetAddress: "Av. Apoquindo 3910, Piso 3",
    addressLocality: "Las Condes",
    addressRegion: "Región Metropolitana",
    addressCountry: "CL",
  },
  telephone: "+56222280890",
  email: "contacto@aylwin.cl",
  parentOrganization: {
    "@type": "Organization",
    name: "Aylwin Abogados",
    url: "https://aylwin.cl",
  },
  knowsAbout: [
    "Arbitraje de construcción",
    "Claims y reclamaciones contractuales",
    "Término anticipado de contratos de obra",
    "Mediación y dispute boards",
  ],
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
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {children}
      </body>
    </html>
  );
}
