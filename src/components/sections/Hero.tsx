"use client";

import Image from "next/image";
import { ArrowRight, TrendingUp, UserPlus } from "lucide-react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/Button";
import { CounterAnimation } from "@/components/animations/CounterAnimation";

export function Hero() {
  return (
    <section className="relative pt-[clamp(130px,14vw,170px)] pb-[clamp(80px,10vw,120px)] overflow-hidden" id="hero">
      {/* Background layers */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Dot grid */}
        <div
          className="absolute inset-0 opacity-[0.4]"
          style={{
            backgroundImage: `radial-gradient(circle, rgba(29,184,134,0.15) 1px, transparent 1px)`,
            backgroundSize: "32px 32px",
          }}
        />
        {/* Gradient mesh */}
        <div className="absolute top-[-10%] right-[-5%] w-[60%] h-[70%] bg-[radial-gradient(ellipse,rgba(29,184,134,0.10)_0%,transparent_65%)]" />
        <div className="absolute bottom-[10%] left-[-5%] w-[40%] h-[50%] bg-[radial-gradient(ellipse,rgba(29,184,134,0.06)_0%,transparent_60%)]" />
      </div>

      {/* Grain overlay */}
      <div className="absolute inset-0 grain-overlay pointer-events-none" />

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-surface-warm to-transparent pointer-events-none z-[2]" />

      <div className="w-full max-w-[1140px] mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-14 items-center relative z-[3]">
        {/* Content */}
        <motion.div
          initial={{ opacity: 0, y: 36 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="max-lg:text-center"
        >
          <h1 className="font-display font-bold text-[clamp(2.4rem,5.2vw,3.8rem)] leading-[1.08] tracking-[-0.025em] text-text-primary mb-6">
            Tráfego pago com{" "}
            <span className="text-brand relative inline-block">
              engenharia de vendas
              <svg className="absolute -bottom-0.5 left-0 w-full h-[6px] text-brand/25" viewBox="0 0 200 6" preserveAspectRatio="none" aria-hidden="true">
                <path d="M0 4 Q50 0 100 4 T200 4" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
              </svg>
            </span>{" "}
            para seu negócio faturar mais
          </h1>

          <p className="text-[clamp(1.05rem,1.8vw,1.15rem)] text-text-secondary leading-[1.7] max-w-[520px] mb-9 max-lg:mx-auto">
            Transformamos anúncios em faturamento previsível. Cuidamos da sua mídia paga, do funil e das métricas que importam para o caixa. Não de curtidas.
          </p>

          <div className="mb-12 max-lg:flex max-lg:flex-col max-lg:items-center">
            <Button href="https://api.whatsapp.com/send?phone=5524992627164" target="_blank" rel="noopener noreferrer" size="lg" icon={<ArrowRight size={20} />}>
              Quero um diagnóstico de crescimento
            </Button>
            <p className="text-sm text-text-tertiary mt-3.5 flex items-center gap-1.5 max-lg:justify-center">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-brand"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>
              Em até 24h úteis, nossa equipe analisa sua presença digital.
            </p>
          </div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex items-center gap-8 pt-9 border-t border-border max-lg:justify-center max-sm:flex-col max-sm:gap-5 max-sm:items-center"
          >
            {[
              { target: 10, prefix: "+", suffix: "M", label: "investidos em anúncios" },
              { target: 60, prefix: "+", suffix: "", label: "empresas aceleradas" },
              { target: 4, prefix: "+", suffix: " anos", label: "de experiência em performance" },
            ].map((stat, i) => (
              <div key={stat.label} className="flex items-center gap-8 max-sm:flex-col max-sm:gap-5 max-sm:w-full">
                {i > 0 && <div className="w-px h-12 bg-gradient-to-b from-transparent via-border to-transparent shrink-0 max-sm:w-16 max-sm:h-px max-sm:bg-gradient-to-r" />}
                <div className="max-sm:text-center">
                  <CounterAnimation
                    target={stat.target}
                    prefix={stat.prefix}
                    suffix={stat.suffix}
                    className="block font-display text-[clamp(1.7rem,3vw,2.1rem)] font-extrabold text-text-primary leading-[1.1]"
                  />
                  <span className="text-[13px] text-text-tertiary tracking-[0.01em] mt-1 block">{stat.label}</span>
                </div>
              </div>
            ))}
          </motion.div>
        </motion.div>

        {/* Visual */}
        <motion.div
          initial={{ opacity: 0, x: 40, scale: 0.97 }}
          animate={{ opacity: 1, x: 0, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          className="relative max-lg:order-2 max-lg:mt-4"
        >
          <div className="relative flex justify-center">
            {/* Ambient glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[70%] h-[70%] bg-brand/[0.06] rounded-full blur-[100px] pointer-events-none" />

            <Image
              src="/photos/Hero.webp"
              alt="Kelven Pimenta, Especialista em Tráfego Pago"
              width={520}
              height={600}
              className="w-full max-w-[480px] h-auto object-contain drop-shadow-[0_24px_48px_rgba(0,0,0,0.1)] max-lg:max-w-[360px] max-sm:max-w-full relative z-[1]"
              priority
            />

            {/* Float card - ROAS */}
            <motion.div
              className="absolute top-[12%] right-[-6%] flex items-center gap-3.5 bg-white/[0.97] backdrop-blur-xl px-5 py-4 rounded-2xl shadow-[0_8px_32px_rgba(0,0,0,0.08),0_0_0_1px_rgba(255,255,255,0.6)] z-[3] max-lg:hidden"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: [0, -10, 0] }}
              transition={{ opacity: { duration: 0.5, delay: 0.6 }, y: { duration: 5, repeat: Infinity, ease: "easeInOut", delay: 0.6 } }}
            >
              <span className="flex items-center justify-center w-11 h-11 rounded-xl bg-gradient-to-br from-brand-light to-brand/10 text-brand shrink-0">
                <TrendingUp size={20} strokeWidth={2.5} />
              </span>
              <div>
                <span className="block font-display font-bold text-[1.15rem] leading-[1.1] text-text-primary">+312%</span>
                <span className="block text-[11px] text-text-tertiary tracking-[0.03em] uppercase font-medium mt-0.5">ROAS médio</span>
              </div>
            </motion.div>

            {/* Float card - Leads */}
            <motion.div
              className="absolute bottom-[18%] left-[-3%] flex items-center gap-3.5 bg-white/[0.97] backdrop-blur-xl px-5 py-4 rounded-2xl shadow-[0_8px_32px_rgba(0,0,0,0.08),0_0_0_1px_rgba(255,255,255,0.6)] z-[3] max-lg:hidden"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: [0, -10, 0] }}
              transition={{ opacity: { duration: 0.5, delay: 0.8 }, y: { duration: 5, delay: 3.3, repeat: Infinity, ease: "easeInOut" } }}
            >
              <span className="flex items-center justify-center w-11 h-11 rounded-xl bg-gradient-to-br from-brand-light to-brand/10 text-brand shrink-0">
                <UserPlus size={20} strokeWidth={2.5} />
              </span>
              <div>
                <span className="block font-display font-bold text-[1.15rem] leading-[1.1] text-text-primary">+847</span>
                <span className="block text-[11px] text-text-tertiary tracking-[0.03em] uppercase font-medium mt-0.5">leads este mês</span>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
