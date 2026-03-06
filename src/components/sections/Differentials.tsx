"use client";

import { X, Check, ShieldAlert, Award } from "lucide-react";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { RevealOnScroll } from "@/components/animations/RevealOnScroll";

const BAD_ITEMS = [
  "Impulsiona posts sem estratégia",
  "Foca em curtidas e alcance",
  "Relatórios genéricos e confusos",
  "Promessas milagrosas",
  "Anúncios isolados sem funil",
];

const GOOD_ITEMS = [
  "Engenharia de vendas aplicada",
  "Foco em faturamento e lucro real",
  "Relatórios claros com ROI",
  "Cenários baseados em dados reais",
  "Mídia + funil + atendimento integrados",
];

export function Differentials() {
  return (
    <section className="py-[clamp(80px,10vw,120px)]" id="diferenciais">
      <div className="w-full max-w-[1140px] mx-auto px-6">
        <SectionHeader
          tag="O que nos diferencia"
          title="Agência comum"
          accentText="Keep Ads"
        />
        <RevealOnScroll className="grid grid-cols-[1fr_auto_1fr] max-lg:grid-cols-1 max-w-[900px] mx-auto bg-surface rounded-[var(--radius-xl)] overflow-hidden shadow-[0_24px_64px_rgba(0,0,0,0.07),0_8px_24px_rgba(0,0,0,0.03)] border border-border">
          {/* Bad column */}
          <div className="p-[44px_40px] bg-surface-warm max-sm:p-[28px_24px]">
            <div className="flex items-center gap-3 mb-7">
              <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-danger-soft text-danger">
                <ShieldAlert size={20} strokeWidth={1.8} />
              </div>
              <span className="font-display font-bold text-sm tracking-[0.04em] uppercase text-danger">
                Agência comum
              </span>
            </div>
            <ul className="flex flex-col gap-4">
              {BAD_ITEMS.map((item) => (
                <li key={item} className="flex items-start gap-3 text-[15px] leading-[1.5] text-text-tertiary">
                  <span className="flex items-center justify-center w-6 h-6 rounded-lg bg-danger-soft shrink-0 mt-0.5">
                    <X size={14} className="text-danger-muted" />
                  </span>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Divider */}
          <div className="flex items-center justify-center w-[52px] relative max-lg:w-full max-lg:h-12">
            {/* Gradient line */}
            <div className="absolute inset-y-[20%] left-1/2 -translate-x-1/2 w-[1px] bg-gradient-to-b from-transparent via-border to-transparent max-lg:inset-y-auto max-lg:inset-x-[10%] max-lg:w-auto max-lg:h-[1px] max-lg:bg-gradient-to-r" />
            <span className="font-display font-extrabold text-[13px] text-text-tertiary tracking-[0.08em] bg-surface-elevated px-2 py-1.5 rounded-lg relative z-[1]">
              VS
            </span>
          </div>

          {/* Good column */}
          <div className="p-[44px_40px] bg-surface max-sm:p-[28px_24px]">
            <div className="flex items-center gap-3 mb-7">
              <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-brand-light text-brand">
                <Award size={20} strokeWidth={1.8} />
              </div>
              <span className="font-display font-bold text-sm tracking-[0.04em] uppercase text-brand-dark">
                Keep Ads
              </span>
            </div>
            <ul className="flex flex-col gap-4">
              {GOOD_ITEMS.map((item) => (
                <li key={item} className="flex items-start gap-3 text-[15px] leading-[1.5] text-text-primary">
                  <span className="flex items-center justify-center w-6 h-6 rounded-lg bg-brand-light shrink-0 mt-0.5">
                    <Check size={14} className="text-brand" />
                  </span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </RevealOnScroll>
      </div>
    </section>
  );
}
