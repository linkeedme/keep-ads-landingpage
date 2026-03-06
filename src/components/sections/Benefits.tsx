"use client";

import { Settings, Activity, PieChart, Zap } from "lucide-react";
import { motion } from "framer-motion";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { StaggerContainer, staggerItem } from "@/components/animations/StaggerContainer";

const BENEFITS = [
  {
    icon: Settings,
    title: "Segmentação cirúrgica",
    description: "Mais clientes certos, menos curiosos. Suas campanhas alcançam quem realmente tem intenção de compra.",
  },
  {
    icon: Activity,
    title: "Funil alinhado de ponta a ponta",
    description: "Mídia, copy, landing page e atendimento trabalhando em conjunto. Nada de anúncios soltos.",
  },
  {
    icon: PieChart,
    title: "Relatórios que falam a língua do caixa",
    description: "Nada de métricas de vaidade. Você vê investimento, leads, vendas, faturamento e lucro.",
  },
  {
    icon: Zap,
    title: "Obsessão por performance",
    description: "Time em constante treinamento, imersões e contato com Meta, Google e TikTok. Resultado, não likes.",
  },
];

export function Benefits() {
  return (
    <section className="py-[clamp(80px,10vw,120px)] bg-surface-warm" id="beneficios">
      <div className="w-full max-w-[1140px] mx-auto px-6">
        <SectionHeader
          tag="Por que a Keep Ads"
          title="Crescimento previsível não nasce da sorte."
          accentText="Nasce de método."
          description="Empurrar verba em anúncios sem estratégia só aumenta o custo por clique. O que faz negócios multiplicarem o faturamento é a combinação certa entre tráfego, funil e atendimento."
        />
        <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {BENEFITS.map((benefit) => (
            <motion.div
              key={benefit.title}
              variants={staggerItem}
              className="group bg-surface border border-border rounded-[var(--radius-lg)] p-[36px_28px] transition-all duration-400 ease-[var(--ease-out)] relative overflow-hidden hover:border-[rgba(29,184,134,0.3)] hover:translate-y-[-6px] hover:shadow-[var(--shadow-card-hover)]"
            >
              {/* Top accent bar */}
              <span className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-brand to-brand-dark translate-x-[-101%] transition-transform duration-500 ease-[var(--ease-out)] group-hover:translate-x-0" />

              {/* Ambient glow on hover */}
              <div className="absolute -top-20 -right-20 w-40 h-40 bg-brand/[0.04] rounded-full blur-3xl opacity-0 transition-opacity duration-500 group-hover:opacity-100 pointer-events-none" />

              <div className="flex items-center justify-center w-14 h-14 rounded-2xl bg-gradient-to-br from-brand-light to-brand/[0.06] text-brand mb-5 transition-all duration-400 ease-[var(--ease-out)] group-hover:bg-gradient-to-br group-hover:from-brand group-hover:to-brand-dark group-hover:text-white group-hover:scale-105 group-hover:shadow-[0_8px_24px_rgba(29,184,134,0.3)]">
                <benefit.icon size={26} strokeWidth={1.8} />
              </div>
              <h3 className="font-display font-bold text-[1.1rem] mb-2.5 text-text-primary">
                {benefit.title}
              </h3>
              <p className="text-[15px] text-text-secondary leading-[1.6]">
                {benefit.description}
              </p>
            </motion.div>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
