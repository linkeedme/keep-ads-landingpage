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
];

export function ClientLogos() {
  const doubled = [...CLIENTS, ...CLIENTS];

  return (
    <section className="py-14 max-sm:py-10" aria-label="Empresas que confiam na Keep Ads">
      <div className="w-full max-w-[1140px] mx-auto px-6">
        <RevealOnScroll>
          {/* Counter headline */}
          <p className="text-center text-[15px] text-text-tertiary font-medium mb-6 tracking-[0.01em]">
            <span className="font-display font-bold text-text-primary text-[1.1rem]">+60 empresas</span>{" "}
            ja aceleraram com a Keep Ads
          </p>

          {/* Single-row marquee */}
          <div className="overflow-hidden [mask:linear-gradient(90deg,transparent,black_8%,black_92%,transparent)] [-webkit-mask:linear-gradient(90deg,transparent,black_8%,black_92%,transparent)] hover:[&_.clients-track]:![animation-play-state:paused]">
            <div className="clients-track flex items-center gap-16 w-max animate-[marquee_55s_linear_infinite] max-sm:gap-10 max-sm:animate-[marquee_38s_linear_infinite]">
              {doubled.map((client, i) => (
                <div
                  key={`${client.alt}-${i}`}
                  className="shrink-0 flex items-center justify-center h-12 px-1"
                >
                  <Image
                    src={client.src}
                    alt={client.alt}
                    width={180}
                    height={48}
                    className={`h-11 w-auto object-contain transition-all duration-300 hover:scale-105 max-sm:h-8 ${
                      client.invert
                        ? "brightness-0 saturate-100 opacity-70 hover:opacity-100"
                        : "opacity-80 grayscale-[15%] hover:grayscale-0 hover:opacity-100"
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
