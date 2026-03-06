"use client";

import { Search, Lightbulb, Layers, BarChart3, FileText, CheckCircle2, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { RevealOnScroll } from "@/components/animations/RevealOnScroll";

const STEPS = [
  {
    num: "01",
    icon: Search,
    color: "#1DB886",
    title: "Diagnóstico 360°",
    description: "Analisamos campanhas, criativos, funil, site, atendimento e números de vendas. Identificamos gargalos que fazem você perder dinheiro todos os dias.",
    // Arc position (percentage)
    left: "4%",
    top: "68%",
  },
  {
    num: "02",
    icon: Lightbulb,
    color: "#8BC34A",
    title: "Engenharia de oferta",
    description: "Desenhamos a proposta certa para o seu público: promessas, ângulos de copy, públicos e canais (Meta, Google, etc.) de acordo com o fit do seu negócio.",
    left: "21%",
    top: "26%",
  },
  {
    num: "03",
    icon: Layers,
    color: "#E91E63",
    title: "Funil & campanhas",
    description: "Organizamos campanhas, conjuntos e anúncios, criamos ou otimizamos suas landing pages e integramos tudo com seu atendimento.",
    left: "44%",
    top: "6%",
  },
  {
    num: "04",
    icon: BarChart3,
    color: "#FF5722",
    title: "Otimização contínua",
    description: "Monitoramos CPC, CTR, taxa de conversão, CPL e ROAS semanalmente, ajustando públicos, criativos e orçamento para reduzir custo e aumentar volume.",
    left: "67%",
    top: "26%",
  },
  {
    num: "05",
    icon: FileText,
    color: "#26C6DA",
    title: "Relatórios estratégicos",
    description: "Você recebe relatórios objetivos: investimento, leads, vendas, faturamento, lucro e próximos passos. O que sua diretoria precisa ver.",
    left: "86%",
    top: "68%",
  },
];

const PAIN_POINTS = [
  "Você investe em anúncios, mas não vê retorno real.",
  "Sente que está gastando dinheiro sem uma estratégia clara.",
  "Suas campanhas não trazem clientes qualificados.",
];

const staggerNode = {
  hidden: { opacity: 0, scale: 0.5, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    scale: 1,
    y: 0,
    transition: {
      duration: 0.6,
      delay: 0.15 + i * 0.12,
      ease: [0.22, 1, 0.36, 1] as [number, number, number, number],
    },
  }),
};

const pathDraw = {
  hidden: { pathLength: 0, opacity: 0 },
  visible: {
    pathLength: 1,
    opacity: 1,
    transition: {
      pathLength: { duration: 1.6, ease: "easeInOut" as const },
      opacity: { duration: 0.3 },
    },
  },
};

export function Method() {
  return (
    <section className="py-[clamp(80px,10vw,120px)] bg-surface-warm" id="metodo">
      <div className="w-full max-w-[1140px] mx-auto px-6">
        <SectionHeader
          tag="Passo a passo"
          title="Como funciona a"
          accentText="Metodologia Keep Ads"
          description="Um processo claro e repetível para escalar empresas locais e e-commerces com tráfego pago estratégico."
        />

        {/* ===== ARC LAYOUT (Desktop/Tablet) ===== */}
        <motion.div
          className="relative max-w-[960px] mx-auto hidden sm:block"
          style={{ aspectRatio: "960 / 480" }}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px 0px" }}
        >
          {/* SVG dashed arc */}
          <svg
            className="absolute inset-0 w-full h-full"
            viewBox="0 0 960 480"
            fill="none"
            preserveAspectRatio="xMidYMid meet"
          >
            <motion.path
              d="M 60,420 Q 480,10 900,420"
              stroke="#1DB886"
              strokeWidth="2.5"
              strokeDasharray="10 8"
              strokeLinecap="round"
              fill="none"
              opacity="0.25"
              variants={pathDraw}
            />
          </svg>

          {/* Step nodes */}
          {STEPS.map((step, i) => (
            <motion.div
              key={step.num}
              custom={i}
              variants={staggerNode}
              className="absolute flex flex-col items-center text-center group"
              style={{
                left: step.left,
                top: step.top,
                transform: "translate(-50%, 0)",
                width: "clamp(120px, 14vw, 150px)",
              }}
            >
              {/* Badge circle */}
              <div
                className="w-14 h-14 rounded-2xl flex items-center justify-center text-white shadow-lg transition-all duration-400 ease-[var(--ease-out)] group-hover:scale-110 group-hover:shadow-xl lg:w-16 lg:h-16"
                style={{
                  background: `linear-gradient(135deg, ${step.color}, ${step.color}cc)`,
                  boxShadow: `0 6px 20px ${step.color}33`,
                }}
              >
                <span className="font-display font-extrabold text-lg lg:text-xl">
                  P{i + 1}
                </span>
              </div>

              {/* Label */}
              <span
                className="text-[11px] font-bold tracking-[0.08em] uppercase mt-3 mb-1"
                style={{ color: step.color }}
              >
                Passo {i + 1}
              </span>
              <h3 className="font-display font-bold text-[0.85rem] leading-tight text-text-primary lg:text-[0.95rem]">
                {step.title}
              </h3>

              {/* Tooltip on hover */}
              <div className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-[220px] bg-surface border border-border rounded-[var(--radius-md)] p-3.5 shadow-[var(--shadow-card-hover)] opacity-0 invisible translate-y-2 group-hover:opacity-100 group-hover:visible group-hover:translate-y-0 transition-all duration-300 ease-[var(--ease-out)] z-10 pointer-events-none">
                <p className="text-[13px] text-text-secondary leading-[1.55] text-left">
                  {step.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* ===== MOBILE LAYOUT (vertical cards) ===== */}
        <div className="sm:hidden flex flex-col gap-4">
          {STEPS.map((step, i) => (
            <RevealOnScroll key={step.num} delay={i * 0.08}>
              <div className="flex gap-4 items-start bg-surface border border-border rounded-[var(--radius-lg)] p-5">
                <div
                  className="w-11 h-11 rounded-xl flex items-center justify-center text-white shrink-0"
                  style={{
                    background: `linear-gradient(135deg, ${step.color}, ${step.color}cc)`,
                  }}
                >
                  <span className="font-display font-extrabold text-base">
                    P{i + 1}
                  </span>
                </div>
                <div>
                  <span
                    className="text-[11px] font-bold tracking-[0.08em] uppercase mb-0.5 block"
                    style={{ color: step.color }}
                  >
                    Passo {i + 1}
                  </span>
                  <h3 className="font-display font-bold text-[1rem] mb-1.5 text-text-primary">
                    {step.title}
                  </h3>
                  <p className="text-[14px] text-text-secondary leading-[1.6]">
                    {step.description}
                  </p>
                </div>
              </div>
            </RevealOnScroll>
          ))}
        </div>

        {/* ===== "SE HOJE ESSA É A SUA REALIDADE..." ===== */}
        <RevealOnScroll className="mt-16 max-sm:mt-10">
          <div className="bg-surface border border-border rounded-[var(--radius-xl)] overflow-hidden shadow-[var(--shadow-card-hover)] relative">
            {/* Top accent */}
            <div className="h-[3px] bg-gradient-to-r from-brand via-brand-dark to-brand" />

            <div className="p-10 max-sm:p-6">
              {/* Header row */}
              <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.2fr] gap-8 items-start mb-8 max-sm:mb-6">
                <h3 className="font-display font-bold text-[clamp(1.5rem,3vw,2rem)] leading-[1.2] text-text-primary">
                  Se hoje essa é a sua realidade...
                </h3>
                <div className="flex flex-col gap-3">
                  {PAIN_POINTS.map((point) => (
                    <div key={point} className="flex items-start gap-3">
                      <CheckCircle2
                        size={22}
                        className="text-brand shrink-0 mt-0.5"
                        strokeWidth={2}
                      />
                      <span className="text-[15px] text-text-secondary leading-[1.5]">
                        {point}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Divider */}
              <div className="h-[1px] bg-gradient-to-r from-transparent via-border to-transparent mb-8 max-sm:mb-6" />

              {/* CTA area */}
              <div className="text-center">
                <p className="font-display font-bold text-[1.1rem] text-brand mb-2 italic">
                  Saiba que o cenário pode ser diferente!
                </p>
                <p className="text-[15px] text-text-secondary leading-[1.65] max-w-[540px] mx-auto mb-6">
                  Desperdiçar investimento com estratégias ineficazes não é uma opção.
                  Seus anúncios devem ser ativos reais para o crescimento da sua empresa.
                </p>
                <a
                  href="https://api.whatsapp.com/send?phone=5524992627164"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2.5 font-display font-semibold text-[16px] bg-gradient-to-r from-brand to-brand-dark text-white px-8 py-4 rounded-[var(--radius-md)] shadow-[var(--shadow-green)] transition-all duration-300 ease-[var(--ease-out)] hover:translate-y-[-2px] hover:shadow-[var(--shadow-green-lg)]"
                >
                  Converse com um especialista
                  <ArrowRight size={18} />
                </a>
              </div>
            </div>
          </div>
        </RevealOnScroll>
      </div>
    </section>
  );
}
