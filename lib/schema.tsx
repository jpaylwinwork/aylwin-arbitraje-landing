const BASE = {
  "@context": "https://schema.org",
  "@type": "LegalService",
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
} as const;

export function legalServiceSchema(input: {
  name: string;
  description: string;
  knowsAbout: string[];
}) {
  return { ...BASE, ...input };
}

export function articleSchema(input: {
  headline: string;
  description: string;
  datePublished: string;
  slug: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: input.headline,
    description: input.description,
    datePublished: input.datePublished,
    inLanguage: "es-CL",
    author: { "@type": "Organization", name: "Aylwin Matta Abogados", url: "https://aylwin.cl" },
    publisher: { "@type": "Organization", name: "Aylwin Matta Abogados", url: "https://aylwin.cl" },
    mainEntityOfPage: `https://aylwin-arbitraje-landing.vercel.app/recursos/${input.slug}`,
  };
}

export function JsonLd({ data }: { data: object }) {
  return (
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }} />
  );
}
