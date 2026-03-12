"use client";

import { MapPin, ShoppingCart, Users, Stethoscope, Sparkles } from "lucide-react";
import { motion } from "framer-motion";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { StaggerContainer, staggerItem } from "@/components/animations/StaggerContainer";

const AUDIENCES = [
  {
    number: "01",
    icon: MapPin,
    title: "Negócios locais",
    description:
      "Clínicas, academias, restaurantes, lojas e franquias que querem parar de depender de indicação.",
    items: [
      "Agenda cheia com previsibilidade",
      "Leads qualificados toda semana",
      "Crescimento sem depender do boca a boca",
    ],
    featured: true,
  },
  {
    number: "02",
    icon: ShoppingCart,
    title: "E-commerces",
    description:
      "Lojas virtuais que faturam a partir de R$\u00A050\u00A0mil/mês e travaram no crescimento.",
    items: [
      "ROAS saudável para escalar com segurança",
      "Funil otimizado de ponta a ponta",
      "Custo por aquisição sob controle",
    ],
    featured: true,
  },
  {
    number: "03",
    icon: Users,
    title: "Times de marketing",
    description:
      "Empresas com marketing interno que precisam de um squad especialista em performance.",
    items: [
      "Squad externo de tráfego e dados",
      "Relatórios claros e metodologia",
      "Resultado previsível mês a mês",
    ],
    featured: false,
  },
  {
    number: "04",
    icon: Stethoscope,
    title: "Profissionais de saúde",
    description:
      "Médicos e clínicas que querem lotar a agenda com pacientes do perfil certo.",
    items: [
      "Agenda lotada com previsibilidade",
      "Posicionamento digital estratégico",
      "Pacientes qualificados toda semana",
    ],
    featured: false,
  },
  {
    number: "05",
    icon: Sparkles,
    title: "Influenciadores e criadores",
    description:
      "Criadores de conteúdo que querem monetizar a audiência com estratégia de verdade.",
    items: [
      "Escalar lançamentos e vendas",
      "Funil de conversão para infoprodutos",
      "Alcance amplificado com tráfego pago",
    ],
    featured: false,
  },
];

export function Audience() {
  return (
    <section className="py-[clamp(80px,10vw,120px)] bg-surface" id="para-quem">
      <div className="w-full max-w-[1140px] mx-auto px-6">
        <SectionHeader
          tag="Para quem é"
          title="Se você se encaixa aqui, a Keep Ads foi feita"
          accentText="pra você"
        />
        <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-5">
          {AUDIENCES.map((audience) => {
            const Icon = audience.icon;
            return (
              <motion.div
                key={audience.number}
                variants={staggerItem}
                className={`
                  group bg-surface border border-border rounded-[var(--radius-lg)] relative
                  transition-all duration-400 ease-[var(--ease-out)] overflow-hidden
                  hover:translate-y-[-6px] hover:shadow-[var(--shadow-card-hover)] hover:border-[rgba(29,184,134,0.2)]
                  flex flex-col
                  ${
                    audience.featured
                      ? "lg:col-span-3 p-8 md:p-9 border-l-[3px] border-l-brand"
                      : "lg:col-span-2 p-7 md:p-8"
                  }
                `}
              >
                {/* Large background number */}
                <span className="block font-display text-[4.5rem] font-extrabold leading-none text-surface-elevated absolute top-2.5 right-4 select-none pointer-events-none transition-colors duration-400 ease-[var(--ease-out)] group-hover:text-[rgba(29,184,134,0.06)]">
                  {audience.number}
                </span>

                {/* Icon badge */}
                <div className="flex items-center justify-center w-12 h-12 rounded-[var(--radius-sm)] bg-brand-light text-brand mb-5 relative transition-all duration-400 ease-[var(--ease-out)] shrink-0 group-hover:bg-brand group-hover:text-white group-hover:scale-105">
                  <Icon size={22} strokeWidth={1.8} />
                </div>

                <h3
                  className={`font-display font-bold mb-2 relative ${
                    audience.featured ? "text-[1.35rem]" : "text-[1.2rem]"
                  }`}
                >
                  {audience.title}
                </h3>
                <p className="text-[15px] leading-[1.55] text-text-secondary mb-4 relative">
                  {audience.description}
                </p>
                <ul className="relative flex flex-col gap-2.5 mt-auto">
                  {audience.items.map((item) => (
                    <li
                      key={item}
                      className="flex items-center gap-2.5 text-sm leading-[1.5] text-text-secondary"
                    >
                      <span className="flex items-center justify-center w-5 h-5 rounded-full bg-brand-light text-brand shrink-0">
                        <svg width="10" height="10" viewBox="0 0 12 12" fill="none">
                          <path
                            d="M2.5 6L5 8.5L9.5 3.5"
                            stroke="currentColor"
                            strokeWidth="1.8"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </span>
                      {item}
                    </li>
                  ))}
                </ul>
              </motion.div>
            );
          })}
        </StaggerContainer>
      </div>
    </section>
  );
}
