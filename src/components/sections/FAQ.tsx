"use client";

import { useState } from "react";
import { Plus, HelpCircle } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { RevealOnScroll } from "@/components/animations/RevealOnScroll";

const FAQ_ITEMS = [
  {
    question: "Qual investimento mínimo em mídia?",
    answer: "Recomendamos um investimento mensal a partir de R$\u00A02.000,00 em tráfego pago para testar hipóteses de campanha de forma séria. Abaixo disso, é difícil gerar dados suficientes para otimização consistente.",
  },
  {
    question: "Em quanto tempo verei resultados?",
    answer: "As primeiras semanas são de aprendizado e calibração. A partir de 60 a 90 dias, já é possível enxergar padrões claros de CPL, conversão e ROAS, ajustando orçamento e metas com muito mais segurança.",
  },
  {
    question: "Vocês cuidam só dos anúncios?",
    answer: "Não. Atuamos desde a estratégia até a otimização de funil, criativos e landing pages, sempre conectados ao seu time de vendas/atendimento.",
  },
  {
    question: "Tenho acesso aos dados das campanhas?",
    answer: "Sim. Toda campanha é criada em contas com acesso compartilhado, e você recebe relatórios mensais (ou quinzenais) com insights claros sobre o que está funcionando e o que vamos ajustar.",
  },
];

export function FAQ() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggle = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="py-[clamp(80px,10vw,120px)] bg-surface" id="faq">
      <div className="w-full max-w-[1140px] mx-auto px-6">
        <SectionHeader tag="Dúvidas" title="Perguntas frequentes" />
        <div className="max-w-[700px] mx-auto flex flex-col gap-3">
          {FAQ_ITEMS.map((item, index) => (
            <RevealOnScroll key={index} delay={index * 0.05}>
              <div
                className={`bg-surface border rounded-[var(--radius-md)] overflow-hidden transition-all duration-300 ease-[var(--ease-out)] ${
                  activeIndex === index
                    ? "border-brand shadow-[0_8px_24px_rgba(29,184,134,0.08)] ring-1 ring-brand/10"
                    : "border-border hover:border-border-strong hover:shadow-[var(--shadow-card)]"
                }`}
              >
                <button
                  className="w-full flex items-center justify-between text-left px-6 py-5 font-display font-semibold text-[1.05rem] gap-4 min-h-[52px]"
                  onClick={() => toggle(index)}
                  aria-expanded={activeIndex === index}
                >
                  <div className="flex items-center gap-3">
                    <span className={`flex items-center justify-center w-7 h-7 rounded-lg shrink-0 transition-all duration-350 ease-[var(--ease-out)] ${
                      activeIndex === index
                        ? "bg-brand-light text-brand"
                        : "bg-surface-elevated text-text-tertiary"
                    }`}>
                      <HelpCircle size={16} strokeWidth={1.8} />
                    </span>
                    <span>{item.question}</span>
                  </div>
                  <span
                    className={`flex items-center justify-center w-8 h-8 rounded-lg shrink-0 transition-all duration-350 ease-[var(--ease-out)] ${
                      activeIndex === index
                        ? "bg-brand text-white rotate-45 shadow-[0_4px_12px_rgba(29,184,134,0.3)]"
                        : "bg-surface-elevated text-text-secondary"
                    }`}
                  >
                    <Plus size={18} strokeWidth={2.2} />
                  </span>
                </button>
                <AnimatePresence initial={false}>
                  {activeIndex === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                      className="overflow-hidden"
                    >
                      <div className="mx-6 mb-5 pt-0 border-t border-border/60">
                        <p className="pt-4 text-[15px] text-text-secondary leading-[1.7]">
                          {item.answer}
                        </p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </RevealOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}
