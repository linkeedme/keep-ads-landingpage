import Image from "next/image";
import { Linkedin, GraduationCap, CheckCircle2 } from "lucide-react";
import { RevealOnScroll } from "@/components/animations/RevealOnScroll";

export function Team() {
  return (
    <section className="py-[clamp(80px,10vw,120px)] bg-surface-dark text-text-inverse relative overflow-hidden grain-overlay" id="time">
      {/* Background accent */}
      <div className="absolute inset-0 bg-accent-dark pointer-events-none" />
      {/* Decorative gradients */}
      <div className="absolute top-[-40%] right-[-10%] w-[500px] h-[500px] rounded-full bg-[radial-gradient(circle,rgba(29,184,134,0.08)_0%,transparent_70%)] pointer-events-none" />
      <div className="absolute bottom-[-30%] left-[-5%] w-[400px] h-[400px] rounded-full bg-[radial-gradient(circle,rgba(29,184,134,0.05)_0%,transparent_70%)] pointer-events-none" />

      <div className="w-full max-w-[1140px] mx-auto px-6 relative z-[2]">
        {/* Section tag */}
        <div className="text-center mb-12">
          <span className="inline-block font-sans text-xs font-bold tracking-[0.1em] uppercase px-[18px] py-1.5 rounded-full mb-4 border bg-brand/15 text-brand border-brand/12">
            Quem somos
          </span>
          <h2 className="font-display font-bold text-[clamp(1.85rem,3.6vw,2.7rem)] leading-[1.15] tracking-[-0.01em] text-white">
            Conheça o time por trás dos <span className="text-brand">resultados</span>
          </h2>
        </div>

        {/* ===== BLOCO 1: Fundador ===== */}
        <RevealOnScroll className="grid grid-cols-[320px_1fr] gap-12 items-center mb-16 max-lg:grid-cols-1 max-lg:gap-8 max-lg:mb-12">
          {/* Photo */}
          <div className="relative group rounded-[var(--radius-xl)] overflow-hidden shadow-[0_20px_60px_rgba(0,0,0,0.3)] max-lg:max-w-[300px] max-lg:mx-auto">
            <div className="absolute -inset-4 bg-brand/10 blur-2xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-600 pointer-events-none" />
            <Image
              src="/photos/fundador-kelven-2.jpeg"
              alt="Kelven Pimenta, Fundador da Keep Ads"
              width={400}
              height={530}
              className="w-full h-[420px] object-cover object-top relative z-[1] max-sm:h-[340px]"
              loading="lazy"
            />
            <div className="absolute bottom-4 left-4 z-[2] flex items-center gap-2 bg-brand/90 backdrop-blur-sm text-white font-display font-bold text-[13px] tracking-[0.02em] px-[18px] py-2.5 rounded-full shadow-[0_4px_16px_rgba(29,184,134,0.3)]">
              <Linkedin size={14} />
              Head de Performance
            </div>
          </div>

          {/* Bio */}
          <div className="max-lg:text-center">
            <h3 className="font-display font-bold text-[clamp(1.5rem,3vw,2.2rem)] leading-[1.15] text-white mb-1">
              Kelven Pimenta
            </h3>
            <p className="text-[1rem] text-brand font-medium mb-4">
              Fundador &amp; Head de Performance
            </p>
            <p className="text-[15px] text-white/65 leading-[1.7] mb-2.5 max-w-[520px] max-lg:mx-auto">
              Mais de 6 anos imerso em tráfego pago, funis de venda e estratégia digital. Já passou por dezenas de operações locais e e-commerces em Volta Redonda e região.
            </p>
            <p className="text-[15px] text-white/65 leading-[1.7] mb-5 max-w-[520px] max-lg:mx-auto">
              Resultado de verdade não vem de apertar botões. Vem de cultura de dados, estudo constante e execução disciplinada.
            </p>
            <div className="flex flex-wrap gap-2.5 max-lg:justify-center">
              <span className="inline-flex items-center gap-2 text-[12px] font-semibold text-brand bg-brand/15 px-3.5 py-1.5 rounded-full">
                <GraduationCap size={14} />
                Engenharia de Produção — UERJ
              </span>
              <span className="inline-flex items-center gap-2 text-[12px] font-semibold text-brand bg-brand/15 px-3.5 py-1.5 rounded-full">
                <GraduationCap size={14} />
                MBA em Tráfego Pago
              </span>
            </div>
          </div>
        </RevealOnScroll>

        {/* Divider */}
        <div className="w-full max-w-[600px] mx-auto h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent mb-16 max-lg:mb-12" />

        {/* ===== BLOCO 2: O Time ===== */}
        <RevealOnScroll className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center mb-16 max-lg:mb-12">
          {/* Team photo */}
          <div className="rounded-[var(--radius-xl)] overflow-hidden border border-white/8 shadow-[0_16px_48px_rgba(0,0,0,0.25)]">
            <Image
              src="/photos/Time.png"
              alt="Equipe completa da Keep Ads"
              width={600}
              height={400}
              className="w-full h-auto"
              loading="lazy"
            />
          </div>

          {/* Qualifications */}
          <div className="max-lg:text-center">
            <h3 className="font-display font-bold text-white text-[1.4rem] mb-5">
              Qualificações do Time
            </h3>
            <ul className="flex flex-col gap-3.5">
              <li className="flex items-start gap-3 text-[15px] text-white/70 max-lg:text-left">
                <CheckCircle2 size={20} className="text-brand shrink-0 mt-0.5" />
                <span><strong className="text-white/90">Pedro, COO</strong> — Engenheiro de formação, especialista em qualidade e processos</span>
              </li>
              <li className="flex items-start gap-3 text-[15px] text-white/70 max-lg:text-left">
                <CheckCircle2 size={20} className="text-brand shrink-0 mt-0.5" />
                <span>Time certificado por <strong className="text-white/90">Pedro Sobral</strong>, maior referência em tráfego pago do Brasil</span>
              </li>
              <li className="flex items-start gap-3 text-[15px] text-white/70 max-lg:text-left">
                <CheckCircle2 size={20} className="text-brand shrink-0 mt-0.5" />
                <span>Certificações oficiais <strong className="text-white/90">Google</strong> e <strong className="text-white/90">Meta</strong></span>
              </li>
              <li className="flex items-start gap-3 text-[15px] text-white/70 max-lg:text-left">
                <CheckCircle2 size={20} className="text-brand shrink-0 mt-0.5" />
                <span>Gestão de projetos com <strong className="text-white/90">ClickUp</strong> — consultores verificados</span>
              </li>
            </ul>
          </div>
        </RevealOnScroll>

        {/* Divider */}
        <div className="w-full max-w-[600px] mx-auto h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent mb-12" />

        {/* ===== BLOCO 3: Certificações ===== */}
        <RevealOnScroll className="text-center">
          <h3 className="font-display font-bold text-white text-[1.1rem] mb-6 tracking-[0.02em]">
            Certificações &amp; Parceiros
          </h3>
          <div className="flex flex-wrap items-center justify-center gap-8 max-sm:gap-5">
            <Image
              src="/clients/GOOGLE-PARTNER.png"
              alt="Google Partner"
              width={200}
              height={80}
              className="h-10 w-auto object-contain opacity-60 hover:opacity-100 hover:scale-110 transition-all duration-300 origin-center max-sm:h-8"
              loading="lazy"
            />
            <Image
              src="/clients/facebook_logo.png"
              alt="Meta Business Partner"
              width={180}
              height={60}
              className="h-8 w-auto object-contain opacity-60 hover:opacity-100 hover:scale-110 transition-all duration-300 origin-center max-sm:h-6"
              loading="lazy"
            />
            <Image
              src="/clients/SUBIDOPRO.jpeg"
              alt="Subido PRO - Certificação Pedro Sobral"
              width={180}
              height={72}
              className="h-9 w-auto object-contain rounded opacity-60 hover:opacity-100 hover:scale-110 transition-all duration-300 origin-center max-sm:h-7"
              loading="lazy"
            />
            <Image
              src="/clients/ProjectBox-ClickUp-Badges-2-300x148.png"
              alt="ClickUp Verified Consultant & Power User"
              width={200}
              height={100}
              className="h-10 w-auto object-contain opacity-60 hover:opacity-100 hover:scale-110 transition-all duration-300 origin-center max-sm:h-8"
              loading="lazy"
            />
          </div>
        </RevealOnScroll>
      </div>
    </section>
  );
}
