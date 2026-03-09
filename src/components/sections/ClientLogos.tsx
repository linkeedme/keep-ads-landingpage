import Image from "next/image";
import { Building2 } from "lucide-react";
import { RevealOnScroll } from "@/components/animations/RevealOnScroll";

const CLIENTS_ROW_1 = [
  { src: "/clients/soneda.webp", alt: "Soneda A Casa da Beleza", invert: false },
  { src: "/clients/ROYAL SUPERMERCADOS.png", alt: "Royal Supermercados", invert: false },
  { src: "/clients/galpao.webp", alt: "Galpão Casa e Construção", invert: true },
  { src: "/clients/povao.png", alt: "Drogarias Povão", invert: false },
  { src: "/clients/occh_logo_black.webp", alt: "Occhialeria", invert: false },
  { src: "/clients/ZEN.png", alt: "Zen Cozinha Oriental", invert: true },
  { src: "/clients/SUPERACO.png", alt: "Super Aço Volta Redonda", invert: false },
];

const CLIENTS_ROW_2 = [
  { src: "/clients/asserj.png", alt: "Asserj", invert: false },
  { src: "/clients/transmargoo-logo-300-1.png", alt: "Transmargo", invert: false },
  { src: "/clients/zamix.png", alt: "Zamix", invert: false },
  { src: "/clients/VINCOL LOGO.png", alt: "Vincol", invert: true },
  { src: "/clients/2Logo-FarmaUSA.png.webp", alt: "FarmaUSA", invert: false },
  { src: "/clients/MORIA-MOVEIS.png", alt: "Mória Móveis", invert: true },
  { src: "/clients/logo-vovo-ana.png", alt: "Vovó Ana", invert: false },
];

function LogoImage({ client }: { client: { src: string; alt: string; invert: boolean } }) {
  return (
    <div className="shrink-0 flex items-center justify-center h-14 px-3 max-sm:h-10">
      <Image
        src={client.src}
        alt={client.alt}
        width={180}
        height={56}
        className={`h-14 w-auto object-contain transition-all duration-300 hover:scale-110 max-sm:h-10 ${
          client.invert
            ? "brightness-0 saturate-100 opacity-60 hover:opacity-90"
            : "opacity-70 grayscale-[20%] hover:grayscale-0 hover:opacity-100"
        }`}
        loading="lazy"
      />
    </div>
  );
}

export function ClientLogos() {
  return (
    <section className="py-14 max-sm:py-10" aria-label="Empresas que confiam na Keep Ads">
      <div className="w-full max-w-[1140px] mx-auto px-6">
        <RevealOnScroll>
          <div className="bg-surface border border-border rounded-[var(--radius-xl)] px-10 py-10 shadow-[var(--shadow-card)] max-sm:px-5 max-sm:py-8">
            {/* Header */}
            <div className="flex items-center justify-center gap-3 mb-8 max-sm:mb-6">
              <div className="flex items-center justify-center w-8 h-8 rounded-lg bg-brand-light text-brand shrink-0">
                <Building2 size={16} strokeWidth={1.8} />
              </div>
              <p className="text-[13px] font-bold tracking-[0.08em] uppercase text-text-tertiary">
                Empresas que já aceleram com a Keep Ads
              </p>
            </div>

            {/* Dual marquee rows */}
            <div className="flex flex-col gap-6 hover:[&_.clients-track]:![animation-play-state:paused]">
              {/* Row 1 - forward */}
              <div className="overflow-hidden [mask:linear-gradient(90deg,transparent,black_4%,black_96%,transparent)] [-webkit-mask:linear-gradient(90deg,transparent,black_4%,black_96%,transparent)]">
                <div className="clients-track flex items-center gap-14 w-max animate-[marquee_40s_linear_infinite] max-sm:gap-8 max-sm:animate-[marquee_28s_linear_infinite]">
                  {[...CLIENTS_ROW_1, ...CLIENTS_ROW_1].map((client, i) => (
                    <LogoImage key={`r1-${client.alt}-${i}`} client={client} />
                  ))}
                </div>
              </div>

              {/* Row 2 - reverse direction */}
              <div className="overflow-hidden [mask:linear-gradient(90deg,transparent,black_4%,black_96%,transparent)] [-webkit-mask:linear-gradient(90deg,transparent,black_4%,black_96%,transparent)]">
                <div className="clients-track flex items-center gap-14 w-max animate-[marquee-reverse_44s_linear_infinite] max-sm:gap-8 max-sm:animate-[marquee-reverse_30s_linear_infinite]">
                  {[...CLIENTS_ROW_2, ...CLIENTS_ROW_2].map((client, i) => (
                    <LogoImage key={`r2-${client.alt}-${i}`} client={client} />
                  ))}
                </div>
              </div>
            </div>

          </div>
        </RevealOnScroll>
      </div>
    </section>
  );
}
