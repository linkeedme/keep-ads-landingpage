"use client";

import Image from "next/image";
import { X, Check, ShieldAlert } from "lucide-react";
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
    <section className="py-[clamp(80px,10vw,120px)] relative overflow-hidden" id="diferenciais">
      {/* Subtle radial glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[80%] bg-[radial-gradient(ellipse,rgba(29,184,134,0.04)_0%,transparent_60%)] pointer-events-none" />
      <div className="w-full max-w-[1140px] mx-auto px-6 relative z-[1]">
        <SectionHeader
          tag="O que nos diferencia"
          title="Agência comum"
          accentText="Keep Ads"
        />
        <RevealOnScroll className="grid grid-cols-1 lg:grid-cols-[1fr_auto_1fr] max-w-[900px] mx-auto bg-surface rounded-[var(--radius-xl)] overflow-hidden shadow-[0_24px_64px_rgba(0,0,0,0.07),0_8px_24px_rgba(0,0,0,0.03)] border border-border">
          {/* Keep Ads column (LEFT) */}
          <div className="p-[44px_40px] bg-surface max-sm:p-[28px_24px] border-l-[3px] border-l-brand">
            <div className="mb-8">
              <Image
                src="/logos/header-logo.png"
                alt="Keep Ads"
                width={390}
                height={108}
                className="h-[72px] w-auto max-sm:h-[56px]"
              />
            </div>
            <ul className="flex flex-col gap-4">
              {GOOD_ITEMS.map((item) => (
                <li key={item} className="flex items-start gap-3 text-[15px] leading-[1.5] text-text-primary font-semibold">
                  <span className="flex items-center justify-center w-7 h-7 rounded-lg bg-brand-light shrink-0 mt-0.5">
                    <Check size={16} className="text-brand" strokeWidth={2.5} />
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

          {/* Agência comum column (RIGHT) */}
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
        </RevealOnScroll>
      </div>
    </section>
  );
}
