import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { SITE_TITLE, SITE_DESCRIPTION } from "@/lib/constants";

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
  title: SITE_TITLE,
  description: SITE_DESCRIPTION,
  icons: { icon: "/icons/K - 1.png" },
  openGraph: {
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
    type: "website",
    locale: "pt_BR",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className={`scroll-smooth ${baloo.variable}`}>
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
