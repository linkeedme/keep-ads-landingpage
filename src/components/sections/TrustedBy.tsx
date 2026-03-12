"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { StaggerContainer, staggerItem } from "@/components/animations/StaggerContainer";

const PEOPLE = [
  {
    name: "Karol Babadeira",
    handle: "@karolbabadeira",
    src: "/clients/KAROL-BABADEIRA.png",
  },
  {
    name: "Dra. Lise",
    handle: "@dra.lise",
    src: "/clients/DRA-LISE.png",
  },
  {
    name: "Dra. Lívia Saviolo",
    handle: "@dra.liviasaviolo",
    src: "/clients/DRA-LIVIA-SAVIOLO.png",
  },
];

export function TrustedBy() {
  return (
    <section className="py-[clamp(60px,8vw,100px)] bg-surface relative overflow-hidden">
      <div className="w-full max-w-[1140px] mx-auto px-6 relative z-[1]">
        <SectionHeader
          tag="Casos reais"
          title="Quem acelera com a"
          accentText="Keep Ads"
        />

        <StaggerContainer className="grid grid-cols-3 gap-6 max-w-[820px] mx-auto max-md:grid-cols-[repeat(3,240px)] max-md:overflow-x-auto max-md:scroll-snap-x max-md:scroll-snap-mandatory max-md:[-webkit-overflow-scrolling:touch] max-md:pb-2 max-sm:gap-4">
          {PEOPLE.map((person) => (
            <motion.div
              key={person.handle}
              variants={staggerItem}
              className="group relative rounded-[var(--radius-xl)] overflow-hidden aspect-[3/4] bg-surface-dark shadow-[var(--shadow-card-premium)] border-2 border-transparent transition-all duration-400 ease-[var(--ease-out)] hover:border-brand hover:shadow-[var(--shadow-card-premium-hover),0_0_30px_rgba(29,184,134,0.12)] hover:translate-y-[-6px] max-md:scroll-snap-align-start"
            >
              <Image
                src={person.src}
                alt={`${person.name} - Cliente da Keep Ads`}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
                sizes="(max-width: 768px) 240px, 260px"
                loading="lazy"
              />

              {/* Gradient overlay at bottom */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/10 to-transparent transition-opacity duration-400 group-hover:from-black/85" />

              {/* Name + handle */}
              <div className="absolute bottom-0 left-0 right-0 p-5 max-sm:p-4">
                <h3 className="font-display font-extrabold text-[clamp(1.1rem,2vw,1.4rem)] leading-[1.1] text-white uppercase tracking-[-0.01em]">
                  {person.name}
                </h3>
                <p className="text-[12px] text-brand font-semibold mt-1.5 opacity-0 translate-y-1 transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-0">
                  {person.handle}
                </p>
              </div>

              {/* Top-right brand accent on hover */}
              <div className="absolute top-3 right-3 w-8 h-8 rounded-full bg-brand/90 flex items-center justify-center opacity-0 scale-75 transition-all duration-300 group-hover:opacity-100 group-hover:scale-100 shadow-[0_4px_12px_rgba(29,184,134,0.4)]">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
                </svg>
              </div>
            </motion.div>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
