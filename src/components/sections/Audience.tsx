"use client";

import { MapPin, ShoppingCart, Users, Stethoscope, Sparkles, Building2, GraduationCap } from "lucide-react";
import { motion } from "framer-motion";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { StaggerContainer, staggerItem } from "@/components/animations/StaggerContainer";

const AUDIENCES = [
  {
    icon: MapPin,
    title: "Negócios locais",
    description: "Clínicas, academias, restaurantes e lojas físicas",
  },
  {
    icon: ShoppingCart,
    title: "E-commerces",
    description: "Lojas virtuais que querem escalar com ROAS saudável",
  },
  {
    icon: Building2,
    title: "Franquias e redes",
    description: "Múltiplas unidades com performance padronizada",
  },
  {
    icon: Users,
    title: "Times de marketing",
    description: "Squads internos que precisam de especialistas em mídia",
  },
  {
    icon: Stethoscope,
    title: "Profissionais de saúde",
    description: "Médicos, dentistas e clínicas com agenda previsível",
  },
  {
    icon: GraduationCap,
    title: "Educação e cursos",
    description: "Escolas e infoprodutores enchendo turmas",
  },
  {
    icon: Sparkles,
    title: "Influenciadores",
    description: "Criadores transformando audiência em faturamento",
  },
];

export function Audience() {
  return (
    <section className="py-[clamp(80px,10vw,120px)] bg-surface relative overflow-hidden" id="para-quem">
      {/* Background accent */}
      <div className="absolute inset-0 bg-accent-b pointer-events-none" />
      <div className="w-full max-w-[1140px] mx-auto px-6 relative z-[1]">
        <SectionHeader
          tag="Para quem é"
          title="Se você se encaixa aqui, a Keep Ads foi feita"
          accentText="pra você"
        />

        <StaggerContainer className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 max-sm:gap-3">
          {AUDIENCES.map((audience) => {
            const Icon = audience.icon;
            return (
              <motion.div
                key={audience.title}
                variants={staggerItem}
                className="group bg-surface border border-border rounded-[var(--radius-lg)] p-5 text-center transition-all duration-400 ease-[var(--ease-out)] shadow-[var(--shadow-card)] hover:shadow-[var(--shadow-card-premium-hover)] hover:border-brand/30 hover:translate-y-[-4px]"
              >
                <div className="flex items-center justify-center w-12 h-12 rounded-2xl bg-brand-light text-brand mx-auto mb-3.5 transition-all duration-400 ease-[var(--ease-out)] group-hover:bg-brand group-hover:text-white group-hover:scale-110 group-hover:shadow-[0_8px_24px_rgba(29,184,134,0.3)]">
                  <Icon size={24} strokeWidth={1.8} />
                </div>
                <h3 className="font-display font-bold text-[0.95rem] leading-tight text-text-primary mb-1.5">
                  {audience.title}
                </h3>
                <p className="text-[13px] text-text-tertiary leading-[1.45]">
                  {audience.description}
                </p>
              </motion.div>
            );
          })}
        </StaggerContainer>
      </div>
    </section>
  );
}
