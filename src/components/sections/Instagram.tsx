"use client";

import Image from "next/image";
import { Instagram as InstagramIcon, ExternalLink } from "lucide-react";
import { motion } from "framer-motion";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { RevealOnScroll } from "@/components/animations/RevealOnScroll";
import { StaggerContainer, staggerItem } from "@/components/animations/StaggerContainer";
import { INSTAGRAM_URL, INSTAGRAM_HANDLE } from "@/lib/constants";

const POSTS = [
  { src: "/instagram/post-1.jpg", alt: "Erros que fazem empresas perderem dinheiro com tráfego pago por Keep Ads" },
  { src: "/instagram/post-2.jpg", alt: "Equipe Keep Ads reunida com camisas da marca" },
  { src: "/instagram/post-3.jpg", alt: "Como nós faríamos anúncios para e-commerces pela Keep Ads" },
  { src: "/instagram/post-4.jpg", alt: "Como eu faria anúncios para restaurante japonês pela Keep Ads" },
  { src: "/instagram/post-5.jpg", alt: "Google Ads x Meta Ads qual é o melhor para seu negócio por Keep Ads" },
  { src: "/instagram/post-6.jpg", alt: "Sábado produtivo Cultura Keep Ads otimizações de campanhas na prática" },
];

export function Instagram() {
  return (
    <section className="py-[clamp(80px,10vw,120px)] bg-surface" id="instagram">
      <div className="w-full max-w-[1140px] mx-auto px-6">
        <SectionHeader tag="Instagram" title="Siga a Keep Ads no Instagram" />

        {/* Profile header */}
        <RevealOnScroll delay={0.08} className="flex items-center justify-between gap-4 mb-8 px-1 max-lg:flex-col max-lg:items-start max-sm:px-0">
          <div className="flex items-center gap-3.5">
            {/* Instagram gradient avatar */}
            <div className="w-14 h-14 rounded-full p-[3px] bg-gradient-to-br from-[#f09433] via-[#dc2743] to-[#bc1888] shrink-0 shadow-[0_4px_16px_rgba(220,39,67,0.2)]">
              <Image
                src="/icons/K - 1.png"
                alt="Logo Keep Ads - Perfil do Instagram"
                width={50}
                height={50}
                className="w-full h-full rounded-full object-cover bg-surface border-2 border-surface"
              />
            </div>
            <div className="flex flex-col gap-0.5">
              <a
                href={INSTAGRAM_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="font-sans font-semibold text-base text-text-primary no-underline transition-colors duration-200 ease-[var(--ease-out)] hover:text-brand inline-flex items-center gap-1.5"
              >
                {INSTAGRAM_HANDLE}
                <ExternalLink size={12} className="text-text-tertiary" />
              </a>
              <span className="text-sm text-text-tertiary">
                Performance &amp; estratégia em tráfego pago
              </span>
            </div>
          </div>
          <a
            href={INSTAGRAM_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-[#f09433] via-[#dc2743] to-[#bc1888] text-white rounded-[var(--radius-md)] font-sans font-semibold text-sm no-underline transition-all duration-300 ease-[var(--ease-out)] whitespace-nowrap shrink-0 hover:shadow-[0_8px_24px_rgba(220,39,67,0.25)] hover:translate-y-[-1px]"
          >
            <InstagramIcon size={16} />
            Seguir no Instagram
          </a>
        </RevealOnScroll>

        {/* Post grid */}
        <StaggerContainer className="grid grid-cols-3 gap-1 rounded-[var(--radius-lg)] overflow-hidden max-sm:grid-cols-2">
          {POSTS.map((post) => (
            <motion.a
              key={post.src}
              variants={staggerItem}
              href={INSTAGRAM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative block pb-[100%] overflow-hidden bg-surface-elevated"
            >
              <Image
                src={post.src}
                alt={post.alt}
                width={800}
                height={800}
                className="absolute top-0 left-0 w-full h-full object-cover transition-all duration-500 ease-[var(--ease-out)] group-hover:scale-105"
                loading="lazy"
              />
              {/* Hover overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/20 to-transparent opacity-0 transition-opacity duration-400 ease-[var(--ease-out)] group-hover:opacity-100 z-[1]" />
              <div className="absolute inset-0 flex items-center justify-center opacity-0 transition-opacity duration-400 ease-[var(--ease-out)] pointer-events-none z-[2] group-hover:opacity-100">
                <div className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center">
                  <InstagramIcon size={20} className="text-white" />
                </div>
              </div>
            </motion.a>
          ))}
        </StaggerContainer>

        {/* CTA */}
        <RevealOnScroll className="text-center mt-8">
          <a
            href={INSTAGRAM_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-7 py-3 border-[1.5px] border-border rounded-[var(--radius-md)] font-sans font-semibold text-[15px] text-text-primary no-underline transition-all duration-300 ease-[var(--ease-out)] hover:border-brand hover:text-brand hover:shadow-[var(--shadow-card)] max-sm:w-full max-sm:justify-center"
          >
            <InstagramIcon size={18} />
            Ver mais no Instagram
          </a>
        </RevealOnScroll>
      </div>
    </section>
  );
}
