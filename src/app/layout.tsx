import type { Metadata } from "next";
import localFont from "next/font/local";
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
    icon: "/icons/K - 1.png",
    apple: "/icons/K - 1.png",
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
  },
};

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
        <LocalBusinessJsonLd />
      </head>
      <body className="antialiased">
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
