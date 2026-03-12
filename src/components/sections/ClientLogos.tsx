import Image from "next/image";
import { RevealOnScroll } from "@/components/animations/RevealOnScroll";

const CLIENTS = [
  { src: "/clients/soneda.webp", alt: "Soneda A Casa da Beleza", invert: false },
  { src: "/clients/asserj.png", alt: "Asserj", invert: false },
  { src: "/clients/ROYAL SUPERMERCADOS.png", alt: "Royal Supermercados", invert: false },
  { src: "/clients/galpao.webp", alt: "Galpão Casa e Construção", invert: true },
  { src: "/clients/povao.png", alt: "Drogarias Povão", invert: false },
  { src: "/clients/logo-vovo-ana.png", alt: "Vovó Ana", invert: false },
  { src: "/clients/occh_logo_black.webp", alt: "Occhialeria", invert: false },
  { src: "/clients/ZEN.png", alt: "Zen Cozinha Oriental", invert: true },
  { src: "/clients/transmargoo-logo-300-1.png", alt: "Transmargo", invert: false },
  { src: "/clients/zamix.png", alt: "Zamix", invert: false },
  { src: "/clients/SUPERACO.png", alt: "Super Aço Volta Redonda", invert: false },
  { src: "/clients/VINCOL LOGO.png", alt: "Vincol", invert: true },
  { src: "/clients/2Logo-FarmaUSA.png.webp", alt: "FarmaUSA", invert: false },
  { src: "/clients/MORIA-MOVEIS.png", alt: "Mória Móveis", invert: true },
  { src: "/clients/drogatur.png", alt: "Drogatur", invert: false },
  { src: "/clients/cavepe-fiat-logo.webp", alt: "Cavepe Fiat", invert: false },
  { src: "/clients/MITSHUBISHIKETTEI.png", alt: "Mitsubishi Kettei", invert: false },
  { src: "/clients/universidade-cruzeiro-do-sul-ins-log-g-2.png", alt: "Universidade Cruzeiro do Sul", invert: false },
  { src: "/clients/logo-cna-idiomas-color.webp", alt: "CNA Idiomas", invert: false },
];

export function ClientLogos() {
  const doubled = [...CLIENTS, ...CLIENTS];

  return (
    <section className="py-16 max-sm:py-12 bg-surface-warm relative" id="clientes-destaque" aria-label="Empresas que confiam na Keep Ads">
      {/* Shimmer dividers */}
      <div className="absolute top-0 left-0 right-0 section-divider-shimmer" />
      <div className="absolute bottom-0 left-0 right-0 section-divider-shimmer" />

      <div className="w-full max-w-[1140px] mx-auto px-6">
        <RevealOnScroll>
          <p className="text-center text-[15px] text-text-tertiary font-medium mb-8 tracking-[0.01em]">
            <span className="font-display font-bold text-text-primary text-[1.15rem]">+60 empresas</span>{" "}
            já aceleraram com a Keep Ads
          </p>

          {/* Marquee — larger logos, more gap, better contrast */}
          <div className="overflow-hidden [mask:linear-gradient(90deg,transparent,black_6%,black_94%,transparent)] [-webkit-mask:linear-gradient(90deg,transparent,black_6%,black_94%,transparent)] hover:[&_.clients-track]:![animation-play-state:paused]">
            <div className="clients-track flex items-center gap-20 w-max animate-[marquee_55s_linear_infinite] max-sm:gap-12 max-sm:animate-[marquee_38s_linear_infinite]">
              {doubled.map((client, i) => (
                <div
                  key={`${client.alt}-${i}`}
                  className="shrink-0 flex items-center justify-center h-16 px-1"
                >
                  <Image
                    src={client.src}
                    alt={client.alt}
                    width={200}
                    height={64}
                    className={`h-14 w-auto object-contain transition-all duration-400 hover:scale-110 max-sm:h-10 ${
                      client.invert
                        ? "brightness-0 saturate-100 opacity-60 hover:opacity-90"
                        : "opacity-70 grayscale-[20%] hover:grayscale-0 hover:opacity-100"
                    }`}
                    loading="lazy"
                  />
                </div>
              ))}
            </div>
          </div>
        </RevealOnScroll>
      </div>
    </section>
  );
}
