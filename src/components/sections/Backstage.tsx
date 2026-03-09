"use client";

import Image from "next/image";
import { Play } from "lucide-react";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { StaggerContainer, staggerItem } from "@/components/animations/StaggerContainer";
import { motion } from "framer-motion";

const REELS = [
  {
    title: "Ronda do trafego pago #1",
    thumbnail: "/instagram/post-2.jpg",
    url: "https://www.instagram.com/reel/DGp64x5JS1u/",
  },
  {
    title: "Ronda do trafego pago #2",
    thumbnail: "/instagram/post-6.jpg",
    url: "https://www.instagram.com/reel/DHGeIXYpjIR/",
  },
];

export function Backstage() {
  return (
    <section className="py-[clamp(80px,10vw,120px)] bg-surface-dark text-text-inverse relative overflow-hidden" id="bastidores">
      {/* Decorative gradient */}
      <div className="absolute top-[-20%] left-[-10%] w-[400px] h-[400px] rounded-full bg-[radial-gradient(circle,rgba(29,184,134,0.06)_0%,transparent_70%)] pointer-events-none" />

      <div className="w-full max-w-[1140px] mx-auto px-6 relative z-[2]">
        <SectionHeader
          tag="Bastidores"
          title="A ronda do"
          accentText="trafego pago"
          description="Acompanhe os bastidores do nosso time no dia a dia, otimizando campanhas e buscando resultado real."
          dark
        />

        <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-[640px] mx-auto">
          {REELS.map((reel) => (
            <motion.a
              key={reel.url}
              variants={staggerItem}
              href={reel.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative block rounded-[var(--radius-lg)] overflow-hidden bg-surface-dark-soft border border-white/8 shadow-[0_8px_32px_rgba(0,0,0,0.2)] transition-all duration-400 ease-[var(--ease-out)] hover:translate-y-[-6px] hover:shadow-[0_16px_48px_rgba(0,0,0,0.3)] hover:border-brand/20"
            >
              {/* Thumbnail */}
              <div className="relative aspect-[9/16] overflow-hidden">
                <Image
                  src={reel.thumbnail}
                  alt={reel.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-400" />

                {/* Play button */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="flex items-center justify-center w-16 h-16 rounded-full bg-white/20 backdrop-blur-md text-white border border-white/20 transition-all duration-400 group-hover:bg-brand group-hover:border-brand group-hover:scale-110 group-hover:shadow-[0_8px_32px_rgba(29,184,134,0.4)]">
                    <Play size={28} fill="currentColor" className="ml-1" />
                  </div>
                </div>

                {/* Reel badge */}
                <div className="absolute top-3 right-3 flex items-center gap-1.5 bg-black/40 backdrop-blur-sm text-white text-[11px] font-bold tracking-wider uppercase px-3 py-1.5 rounded-full">
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0z"/>
                  </svg>
                  Reel
                </div>
              </div>

              {/* Info */}
              <div className="p-4">
                <p className="text-sm font-semibold text-white/90">{reel.title}</p>
              </div>
            </motion.a>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
