import type { Metadata } from "next";
import localFont from "next/font/local";
import Script from "next/script";
import "./globals.css";
import { SITE_TITLE, SITE_DESCRIPTION, SITE_URL, SITE_KEYWORDS, INSTAGRAM_URL } from "@/lib/constants";

const baloo = localFont({
  variable: "--font-baloo",
  display: "swap",
  src: [
    { path: "../../public/fonts/Baloo2-Regular.ttf", weight: "400", style: "normal" },
    { path: "../../public/fonts/Baloo2-Medium.ttf", weight: "500", style: "normal" },
    { path: "../../public/fonts/Baloo2-SemiBold.ttf", weight: "600", style: "normal" },
    { path: "../../public/fonts/Baloo2-Bold.ttf", weight: "700", style: "normal" },
    { path: "../../public/fonts/Baloo2-ExtraBold.ttf", weight: "800", style: "normal" },
  ],
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: SITE_TITLE,
    template: "%s | Keep Ads",
  },
  description: SITE_DESCRIPTION,
  keywords: SITE_KEYWORDS,
  authors: [{ name: "Keep Ads", url: SITE_URL }],
  creator: "Keep Ads",
  publisher: "Keep Ads",
  icons: {
    icon: "/favicon.png",
    apple: "/favicon.png",
  },
  alternates: {
    canonical: SITE_URL,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
    url: SITE_URL,
    siteName: "Keep Ads",
    type: "website",
    locale: "pt_BR",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Keep Ads - Agência de Tráfego Pago em Volta Redonda",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
    images: ["/og-image.png"],
  },
  category: "Marketing Digital",
  other: {
    "geo.region": "BR-RJ",
    "geo.placename": "Volta Redonda",
    "geo.position": "-22.5023;-44.1044",
    "ICBM": "-22.5023, -44.1044",
    "theme-color": "#1DB886",
  },
};

function FAQPageJsonLd() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "Qual investimento mínimo em mídia para tráfego pago?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Recomendamos um investimento mensal a partir de R$ 2.000,00 em tráfego pago para testar hipóteses de campanha de forma séria. Abaixo disso, é difícil gerar dados suficientes para otimização consistente.",
        },
      },
      {
        "@type": "Question",
        name: "Em quanto tempo verei resultados com tráfego pago?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "As primeiras semanas são de aprendizado e calibração. A partir de 60 a 90 dias, já é possível enxergar padrões claros de CPL, conversão e ROAS, ajustando orçamento e metas com muito mais segurança.",
        },
      },
      {
        "@type": "Question",
        name: "Vocês cuidam só dos anúncios?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Não. Atuamos desde a estratégia até a otimização de funil, criativos e landing pages, sempre conectados ao seu time de vendas/atendimento.",
        },
      },
      {
        "@type": "Question",
        name: "Tenho acesso aos dados das campanhas?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Sim. Toda campanha é criada em contas com acesso compartilhado, e você recebe relatórios mensais ou quinzenais com insights claros sobre o que está funcionando e o que vamos ajustar.",
        },
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}

function LocalBusinessJsonLd() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": `${SITE_URL}/#organization`,
    name: "Keep Ads",
    description: SITE_DESCRIPTION,
    url: SITE_URL,
    logo: `${SITE_URL}/logos/header-logo.png`,
    image: `${SITE_URL}/og-image.png`,
    telephone: "+55-24-99262-7164",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Volta Redonda",
      addressRegion: "RJ",
      addressCountry: "BR",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: -22.5023,
      longitude: -44.1044,
    },
    areaServed: [
      { "@type": "City", name: "Volta Redonda" },
      { "@type": "City", name: "Barra Mansa" },
      { "@type": "City", name: "Resende" },
      { "@type": "State", name: "Rio de Janeiro" },
    ],
    sameAs: [INSTAGRAM_URL],
    priceRange: "$$",
    openingHoursSpecification: {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "09:00",
      closes: "18:00",
    },
    founder: {
      "@type": "Person",
      name: "Kelven Pimenta",
      jobTitle: "Head de Performance",
    },
    knowsAbout: [
      "Tráfego Pago",
      "Google Ads",
      "Meta Ads",
      "Marketing Digital",
      "Performance Marketing",
      "Funil de Vendas",
      "E-commerce",
      "Negócios Locais",
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className={`scroll-smooth ${baloo.variable}`}>
      <head>
        <Script id="gtm" strategy="afterInteractive">
          {`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-573B3S2M');`}
        </Script>
        <LocalBusinessJsonLd />
        <FAQPageJsonLd />
      </head>
      <body className="antialiased">
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-573B3S2M"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          />
        </noscript>
        {/* SVG noise filter */}
        <svg
          aria-hidden="true"
          className="absolute w-0 h-0"
        >
          <filter id="grain">
            <feTurbulence type="fractalNoise" baseFrequency="0.65" numOctaves="3" stitchTiles="stitch" />
            <feColorMatrix type="saturate" values="0" />
          </filter>
        </svg>
        {children}
      </body>
    </html>
  );
}
