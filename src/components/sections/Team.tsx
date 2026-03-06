import Image from "next/image";
import { Linkedin } from "lucide-react";
import { RevealOnScroll } from "@/components/animations/RevealOnScroll";

export function Team() {
  return (
    <section className="py-[clamp(80px,10vw,120px)] bg-surface-dark text-text-inverse relative overflow-hidden grain-overlay" id="time">
      {/* Decorative gradients */}
      <div className="absolute top-[-40%] right-[-10%] w-[500px] h-[500px] rounded-full bg-[radial-gradient(circle,rgba(29,184,134,0.08)_0%,transparent_70%)] pointer-events-none" />
      <div className="absolute bottom-[-30%] left-[-5%] w-[400px] h-[400px] rounded-full bg-[radial-gradient(circle,rgba(29,184,134,0.05)_0%,transparent_70%)] pointer-events-none" />

      <div className="w-full max-w-[1140px] mx-auto px-6">
        <RevealOnScroll className="grid grid-cols-[380px_1fr] gap-[60px] items-start relative z-[2] max-lg:grid-cols-1 max-lg:gap-10">
          {/* Photo column */}
          <div className="relative group rounded-[var(--radius-xl)] overflow-hidden shadow-[0_20px_60px_rgba(0,0,0,0.3)] max-lg:max-w-[360px] max-lg:mx-auto">
            {/* Green glow behind photo */}
            <div className="absolute -inset-4 bg-brand/10 blur-2xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-600 pointer-events-none" />
            <Image
              src="/photos/fundador-kelven-2.jpeg"
              alt="Kelven Pimenta, Fundador da Keep Ads"
              width={400}
              height={530}
              className="w-full h-[480px] object-cover object-top relative z-[1] max-sm:h-[380px]"
              loading="lazy"
            />
            {/* Role badge */}
            <div className="absolute bottom-4 left-4 z-[2] flex items-center gap-2 bg-brand/90 backdrop-blur-sm text-white font-display font-bold text-[13px] tracking-[0.02em] px-[18px] py-2.5 rounded-full shadow-[0_4px_16px_rgba(29,184,134,0.3)]">
              <Linkedin size={14} />
              Head de Performance
            </div>
          </div>

          {/* Content column */}
          <div className="max-lg:text-center">
            <span className="inline-block font-sans text-xs font-bold tracking-[0.1em] uppercase px-[18px] py-1.5 rounded-full mb-4 border bg-[rgba(29,184,134,0.15)] text-brand border-[rgba(29,184,134,0.12)]">
              Time Keep Ads
            </span>
            <h2 className="font-display font-bold text-[clamp(1.85rem,3.6vw,2.7rem)] leading-[1.15] tracking-[-0.01em] text-text-inverse mb-1">
              Kelven Pimenta
            </h2>
            <p className="text-[1.05rem] text-brand font-medium mb-5">
              Fundador &amp; Head de Performance
            </p>
            <p className="text-base text-white/72 leading-[1.7] mb-3">
              Mais de 4 anos imerso em tráfego pago, funis de venda e estratégia digital. Já passou por dezenas de operações locais e e-commerces em Volta Redonda e região, acumulando aprendizados que só vem de quem está dentro da conta todo dia.
            </p>
            <p className="text-base text-white/72 leading-[1.7] mb-3">
              A Keep Ads nasceu de uma convicção simples: resultado de verdade não vem de apertar botões. Vem de cultura de dados, estudo constante e execução disciplinada.
            </p>

            <div className="mt-7 rounded-[var(--radius-lg)] overflow-hidden border border-white/8">
              <Image
                src="/photos/Time.png"
                alt="Equipe completa da Keep Ads em reunião de planejamento"
                width={600}
                height={340}
                className="w-full h-auto rounded-[var(--radius-lg)]"
                loading="lazy"
              />
              <p className="text-[13px] text-white/45 mt-3 text-center">
                Nosso time | performance &amp; estratégia
              </p>
            </div>
          </div>
        </RevealOnScroll>
      </div>
    </section>
  );
}
