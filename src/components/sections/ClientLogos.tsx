import Image from "next/image";
import { Building2 } from "lucide-react";
import { RevealOnScroll } from "@/components/animations/RevealOnScroll";

const CLIENTS = [
  { src: "/clients/ROYAL SUPERMERCADOS.png", alt: "Royal Supermercados", invert: false },
  { src: "/clients/SUPERACO.png", alt: "Super Aço Volta Redonda", invert: false },
  { src: "/clients/povao.png", alt: "Drogarias Povão", invert: false },
  { src: "/clients/VINCOL LOGO.png", alt: "Vincol", invert: true },
  { src: "/clients/ZEN.png", alt: "Zen Cozinha Oriental", invert: true },
  { src: "/clients/MORIA-MOVEIS.png", alt: "Mória Móveis", invert: true },
  { src: "/clients/galpao.webp", alt: "Galpão", invert: true },
];

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

            {/* Marquee */}
            <div className="overflow-hidden [mask:linear-gradient(90deg,transparent,black_6%,black_94%,transparent)] [-webkit-mask:linear-gradient(90deg,transparent,black_6%,black_94%,transparent)] hover:[&_.clients-track]:![animation-play-state:paused]">
              <div className="clients-track flex items-center gap-16 w-max animate-[marquee_35s_linear_infinite] max-sm:gap-10 max-sm:animate-[marquee_22s_linear_infinite]">
                {/* Double for seamless loop */}
                {[...CLIENTS, ...CLIENTS].map((client, i) => (
                  <div
                    key={`${client.alt}-${i}`}
                    className="shrink-0 flex items-center justify-center h-12 px-2"
                  >
                    <Image
                      src={client.src}
                      alt={client.alt}
                      width={160}
                      height={44}
                      className={`h-9 w-auto object-contain transition-all duration-400 hover:opacity-100 hover:scale-110 max-sm:h-7 ${
                        client.invert
                          ? "brightness-0 saturate-100 opacity-40 hover:opacity-70"
                          : "opacity-50 grayscale-[30%] hover:grayscale-0 hover:opacity-90"
                      }`}
                      loading="lazy"
                    />
                  </div>
                ))}
              </div>
            </div>

          </div>
        </RevealOnScroll>
      </div>
    </section>
  );
}
