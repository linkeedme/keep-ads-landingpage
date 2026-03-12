"use client";

import { Play } from "lucide-react";
import { motion } from "framer-motion";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { StaggerContainer, staggerItem } from "@/components/animations/StaggerContainer";

const TESTIMONIALS = [
  {
    videoId: "1171036947",
    name: "Galpão Casa e Construção",
    role: "E-commerce & Loja Física",
  },
  {
    videoId: "1171037282",
    name: "Super Aço",
    role: "Varejão do Ferro e Aço",
  },
  {
    videoId: "1171036974",
    name: "Soneda A Casa da Beleza",
    role: "Rede de Cosméticos",
  },
];

export function Testimonials() {
  return (
    <section className="py-[clamp(80px,10vw,120px)] bg-surface-warm relative overflow-hidden" id="depoimentos">
      {/* Background accent */}
      <div className="absolute inset-0 bg-accent-c pointer-events-none" />
      <div className="w-full max-w-[1140px] mx-auto px-6 relative z-[1]">
        <SectionHeader
          tag="Depoimentos"
          title="Quem vive os resultados,"
          accentText="conta a história"
        />
        <StaggerContainer className="grid grid-cols-3 gap-6 max-w-[960px] mx-auto max-lg:grid-cols-[repeat(3,260px)] max-lg:overflow-x-auto max-lg:scroll-snap-x max-lg:scroll-snap-mandatory max-lg:[-webkit-overflow-scrolling:touch] max-lg:pb-2 max-sm:grid-cols-[repeat(3,240px)] max-sm:gap-4">
          {TESTIMONIALS.map((testimonial) => (
            <motion.div
              key={testimonial.videoId}
              variants={staggerItem}
              className="group bg-surface rounded-[var(--radius-lg)] overflow-hidden border border-border shadow-[var(--shadow-card-premium)] transition-all duration-400 ease-[var(--ease-out)] hover:translate-y-[-4px] hover:shadow-[var(--shadow-card-premium-hover)] max-lg:scroll-snap-align-start"
            >
              {/* 9:16 video container */}
              <div className="relative w-full pb-[177.78%] bg-surface-dark overflow-hidden">
                <iframe
                  src={`https://player.vimeo.com/video/${testimonial.videoId}?badge=0&autopause=0&player_id=0&app_id=58479&portrait=0&title=0&byline=0`}
                  frameBorder="0"
                  allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media"
                  referrerPolicy="strict-origin-when-cross-origin"
                  title={`Depoimento ${testimonial.name}`}
                  loading="lazy"
                  className="absolute top-0 left-0 w-full h-full border-0"
                />
                {/* Play icon overlay hint */}
                <div className="absolute bottom-3 right-3 flex items-center justify-center w-9 h-9 rounded-full bg-brand/80 text-white backdrop-blur-sm shadow-[0_4px_12px_rgba(0,0,0,0.2)] opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none z-[2]">
                  <Play size={16} fill="currentColor" />
                </div>
              </div>
              <div className="px-5 py-4 flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-gradient-to-br from-brand-light to-brand/10 flex items-center justify-center text-brand shrink-0">
                  <Play size={12} fill="currentColor" />
                </div>
                <div className="flex flex-col gap-0.5">
                  <strong className="font-display text-[15px] font-bold text-text-primary">
                    {testimonial.name}
                  </strong>
                  <span className="text-[13px] text-text-tertiary font-medium">
                    {testimonial.role}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
