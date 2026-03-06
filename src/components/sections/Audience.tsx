"use client";

import { MapPin, ShoppingCart, Users } from "lucide-react";
import { motion } from "framer-motion";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { StaggerContainer, staggerItem } from "@/components/animations/StaggerContainer";

const AUDIENCES = [
  {
    number: "01",
    icon: MapPin,
    title: "Negócios locais",
    description: "Clínicas, academias, restaurantes, lojas físicas e franquias regionais.",
    items: [
      "Agenda cheia com previsibilidade",
      "Sair da dependência de indicação",
      "Leads qualificados toda semana",
    ],
  },
  {
    number: "02",
    icon: ShoppingCart,
    title: "E-commerces",
    description: "Lojas virtuais faturando a partir de R$\u00A050\u00A0mil/mês que estagnaram.",
    items: [
      "ROAS saudável para escalar",
      "Funil otimizado de ponta a ponta",
      "Custo por aquisição controlado",
    ],
  },
  {
    number: "03",
    icon: Users,
    title: "Times de marketing",
    description: "Empresas com marketing interno que precisam de um squad de performance.",
    items: [
      "Squad externo de tráfego e dados",
      "Relatórios claros e metodologia",
      "Previsibilidade de resultado",
    ],
  },
];

export function Audience() {
  return (
    <section className="py-[clamp(80px,10vw,120px)] bg-surface" id="para-quem">
      <div className="w-full max-w-[1140px] mx-auto px-6">
        <SectionHeader
          tag="Para quem é"
          title="Atendemos empresas que levam a sério"
          accentText="crescimento"
        />
        <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {AUDIENCES.map((audience) => (
            <motion.div
              key={audience.number}
              variants={staggerItem}
              className={`group bg-surface border border-border rounded-[var(--radius-lg)] p-[36px_30px] relative transition-all duration-400 ease-[var(--ease-out)] overflow-hidden hover:translate-y-[-6px] hover:shadow-[var(--shadow-card-hover)] hover:border-[rgba(29,184,134,0.2)] ${
                audience.number === "03" ? "md:col-span-2 md:max-w-[420px] md:mx-auto lg:col-span-1 lg:max-w-none" : ""
              }`}
            >
              {/* Large background number */}
              <span className="block font-display text-[5rem] font-extrabold leading-none text-surface-elevated absolute top-3 right-5 select-none transition-colors duration-400 ease-[var(--ease-out)] group-hover:text-[rgba(29,184,134,0.08)]">
                {audience.number}
              </span>

              {/* Icon badge */}
              <div className="flex items-center justify-center w-12 h-12 rounded-2xl bg-gradient-to-br from-brand-light to-brand/[0.06] text-brand mb-5 relative transition-all duration-400 ease-[var(--ease-out)] group-hover:from-brand group-hover:to-brand-dark group-hover:text-white group-hover:shadow-[0_8px_24px_rgba(29,184,134,0.3)]">
                <audience.icon size={22} strokeWidth={1.8} />
              </div>

              <h3 className="font-display font-bold text-[1.25rem] mb-2 relative">
                {audience.title}
              </h3>
              <p className="text-[15px] text-text-secondary mb-5 relative">
                {audience.description}
              </p>
              <ul className="relative flex flex-col gap-2.5">
                {audience.items.map((item) => (
                  <li key={item} className="flex items-center gap-2.5 text-sm text-text-secondary">
                    <span className="flex items-center justify-center w-5 h-5 rounded-full bg-brand-light text-brand shrink-0">
                      <svg width="10" height="10" viewBox="0 0 12 12" fill="none">
                        <path d="M2.5 6L5 8.5L9.5 3.5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
