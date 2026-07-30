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

type Author = { "@type": "Organization" | "Person"; name: string; url: string };

const FIRM_AUTHOR: Author = { "@type": "Organization", name: "Aylwin Matta Abogados", url: "https://aylwin.cl" };

export function articleSchema(input: {
  headline: string;
  description: string;
  datePublished: string;
  slug: string;
  baseUrl?: string;
  author?: Author;
}) {
  const author = input.author ?? FIRM_AUTHOR;
  const baseUrl = input.baseUrl ?? "https://aylwin-arbitraje-landing.vercel.app/recursos";
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: input.headline,
    description: input.description,
    datePublished: input.datePublished,
    inLanguage: "es-CL",
    author,
    publisher: FIRM_AUTHOR,
    mainEntityOfPage: `${baseUrl}/${input.slug}`,
  };
}

export function personSchema(input: {
  name: string;
  jobTitle: string;
  worksForUrl: string;
  sameAs: string[];
  knowsAbout?: string[];
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Person",
    name: input.name,
    jobTitle: input.jobTitle,
    worksFor: { "@type": "LegalService", name: "Aylwin Matta Abogados", url: input.worksForUrl },
    sameAs: input.sameAs,
    knowsAbout: input.knowsAbout ?? ["Arbitraje", "Contratos de construcción", "Derecho inmobiliario"],
  };
}

export function faqPageSchema(items: { pregunta: string; respuesta: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((i) => ({
      "@type": "Question",
      name: i.pregunta,
      acceptedAnswer: { "@type": "Answer", text: i.respuesta },
    })),
  };
}

export function datasetSchema(input: {
  name: string;
  description: string;
  url: string;
  creatorName?: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Dataset",
    name: input.name,
    description: input.description,
    url: input.url,
    creator: { "@type": "Person", name: input.creatorName ?? "Miguel Aylwin Fernández" },
    isBasedOn: "Reporte Anual CAM Santiago 2025",
    temporalCoverage: "2025",
    spatialCoverage: { "@type": "Country", name: "Chile" },
  };
}

export function JsonLd({ data }: { data: object }) {
  return (
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }} />
  );
}
