"use client";

import { useState, type FormEvent } from "react";
import { ArrowRight, CheckCircle, Loader2, Shield } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { RevealOnScroll } from "@/components/animations/RevealOnScroll";

export function Contact() {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError(false);

    const form = e.currentTarget;
    const formData = new FormData(form);

    // Validate required fields
    let valid = true;
    form.querySelectorAll("[required]").forEach((field) => {
      const input = field as HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement;
      if (!input.value.trim()) {
        valid = false;
        input.classList.add("!border-danger");
        const handler = () => input.classList.remove("!border-danger");
        input.addEventListener("input", handler, { once: true });
        input.addEventListener("change", handler, { once: true });
      }
    });

    if (!valid) return;

    const data = Object.fromEntries(formData);
    setLoading(true);

    // Send to webhook (uncomment and replace URL)
    /*
    try {
      const response = await fetch('YOUR_WEBHOOK_URL', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });
      if (!response.ok) throw new Error('Server error');
    } catch (err) {
      setLoading(false);
      setError(true);
      console.error('Form submission error:', err);
      return;
    }
    */

    // Simulate network delay
    await new Promise((resolve) => setTimeout(resolve, 800));
    setLoading(false);

    // Track conversion
    if (typeof window !== "undefined") {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const w = window as any;
      if (typeof w.fbq === "function") {
        w.fbq("track", "Lead", {
          content_name: "diagnostico_crescimento",
          content_category: "lead_form",
        });
      }
      if (typeof w.gtag === "function") {
        w.gtag("event", "generate_lead", {
          event_category: "form",
          event_label: "diagnostico_crescimento",
        });
      }
    }

    setSuccess(true);
    console.log("Lead captured:", data);
  };

  const inputClass = "w-full px-4 py-3.5 border-[1.5px] border-border rounded-[var(--radius-sm)] bg-surface-warm text-[15px] transition-all duration-250 ease-[var(--ease-out)] appearance-none focus:outline-none focus:border-brand focus:shadow-[0_0_0_3px_var(--color-brand-glow)] focus:bg-surface placeholder:text-text-tertiary/60";

  const selectClass = `${inputClass} pr-10 bg-[url('data:image/svg+xml,%3Csvg%20xmlns=%22http://www.w3.org/2000/svg%22%20width=%2216%22%20height=%2216%22%20viewBox=%220%200%2024%2024%22%20fill=%22none%22%20stroke=%22%23536471%22%20stroke-width=%222%22%20stroke-linecap=%22round%22%20stroke-linejoin=%22round%22%3E%3Cpolyline%20points=%226%209%2012%2015%2018%209%22/%3E%3C/svg%3E')] bg-no-repeat bg-[right_14px_center]`;

  return (
    <section className="py-[clamp(80px,10vw,120px)] bg-surface-warm" id="contato">
      <div className="w-full max-w-[1140px] mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-[60px] items-start max-lg:gap-10">
          {/* Content */}
          <RevealOnScroll className="max-lg:text-center">
            <span className="inline-block font-sans text-xs font-bold tracking-[0.1em] uppercase bg-brand-light text-brand-dark px-[18px] py-1.5 rounded-full mb-4 border border-[rgba(29,184,134,0.12)]">
              Vamos conversar
            </span>
            <h2 className="font-display font-bold text-[clamp(1.85rem,3.6vw,2.7rem)] leading-[1.15] tracking-[-0.01em] text-text-primary mb-4 text-left max-lg:text-center relative inline-block">
              Pronto para destravar o crescimento da sua empresa?
              <span className="block w-12 h-[3px] bg-gradient-to-r from-brand to-brand-dark rounded-sm mt-4 max-lg:mx-auto" />
            </h2>
            <p className="text-base text-text-secondary leading-[1.7] mb-7">
              Se você sente que sua empresa poderia faturar muito mais com o que já tem hoje, mas ainda não encontrou o caminho certo no digital, é hora de colocar engenharia de vendas por trás do seu tráfego pago.
            </p>
            <div className="flex flex-col gap-3.5 max-lg:items-center">
              {["Resposta em até 24h úteis", "Diagnóstico personalizado gratuito", "Sem compromisso"].map(
                (text) => (
                  <div key={text} className="flex items-center gap-3 text-[15px] font-medium text-text-primary">
                    <span className="flex items-center justify-center w-6 h-6 rounded-full bg-brand-light text-brand shrink-0">
                      <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                        <path d="M2.5 6L5 8.5L9.5 3.5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </span>
                    <span>{text}</span>
                  </div>
                )
              )}
            </div>
          </RevealOnScroll>

          {/* Form */}
          <RevealOnScroll className="relative">
            <AnimatePresence mode="wait">
              {!success ? (
                <motion.form
                  key="form"
                  initial={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  id="leadForm"
                  className="bg-surface border border-border rounded-[var(--radius-xl)] p-10 shadow-[0_24px_64px_rgba(0,0,0,0.07),0_8px_24px_rgba(0,0,0,0.03)] relative overflow-hidden max-sm:p-6"
                  noValidate
                  onSubmit={handleSubmit}
                >
                  {/* Top accent */}
                  <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-brand via-brand-dark to-brand" />

                  <div className="grid grid-cols-2 gap-4 mb-4 max-sm:grid-cols-1 max-sm:gap-3">
                    <div className="flex flex-col gap-1.5">
                      <label htmlFor="nome" className="text-sm font-semibold text-text-primary">Nome completo *</label>
                      <input
                        type="text" id="nome" name="nome" required autoComplete="name"
                        placeholder="Seu nome"
                        className={inputClass}
                      />
                    </div>
                    <div className="flex flex-col gap-1.5">
                      <label htmlFor="empresa" className="text-sm font-semibold text-text-primary">Empresa *</label>
                      <input
                        type="text" id="empresa" name="empresa" required autoComplete="organization"
                        placeholder="Nome da empresa"
                        className={inputClass}
                      />
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-4 mb-4 max-sm:grid-cols-1 max-sm:gap-3">
                    <div className="flex flex-col gap-1.5">
                      <label htmlFor="segmento" className="text-sm font-semibold text-text-primary">Segmento *</label>
                      <select
                        id="segmento" name="segmento" required
                        className={selectClass}
                        defaultValue=""
                      >
                        <option value="" disabled>Selecione</option>
                        <option value="clinica">Clínica / Saúde</option>
                        <option value="ecommerce">E-commerce</option>
                        <option value="restaurante">Restaurante / Food</option>
                        <option value="academia">Academia / Estúdio</option>
                        <option value="loja_fisica">Loja Física</option>
                        <option value="servicos">Serviços / Consultoria</option>
                        <option value="outro">Outro</option>
                      </select>
                    </div>
                    <div className="flex flex-col gap-1.5">
                      <label htmlFor="faturamento" className="text-sm font-semibold text-text-primary">Faturamento mensal</label>
                      <select
                        id="faturamento" name="faturamento"
                        className={selectClass}
                        defaultValue=""
                      >
                        <option value="" disabled>Selecione</option>
                        <option value="ate_30k">Até R$ 30 mil</option>
                        <option value="30k_100k">R$ 30 mil a R$ 100 mil</option>
                        <option value="100k_300k">R$ 100 mil a R$ 300 mil</option>
                        <option value="300k_mais">Acima de R$ 300 mil</option>
                      </select>
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-4 mb-4 max-sm:grid-cols-1 max-sm:gap-3">
                    <div className="flex flex-col gap-1.5">
                      <label htmlFor="whatsapp" className="text-sm font-semibold text-text-primary">WhatsApp *</label>
                      <input
                        type="tel" id="whatsapp" name="whatsapp" required autoComplete="tel"
                        placeholder="(24) 99999-9999"
                        className={inputClass}
                      />
                    </div>
                    <div className="flex flex-col gap-1.5">
                      <label htmlFor="email" className="text-sm font-semibold text-text-primary">E-mail *</label>
                      <input
                        type="email" id="email" name="email" required autoComplete="email"
                        placeholder="seu@email.com"
                        className={inputClass}
                      />
                    </div>
                  </div>
                  <div className="flex flex-col gap-1.5 mb-4">
                    <label htmlFor="mensagem" className="text-sm font-semibold text-text-primary">Como podemos ajudar?</label>
                    <textarea
                      id="mensagem" name="mensagem" rows={3}
                      placeholder="Conte brevemente sobre seu negócio e seus objetivos..."
                      className={`${inputClass} resize-y min-h-[80px]`}
                    />
                  </div>
                  <div className="flex items-center gap-2 text-xs text-text-tertiary leading-[1.5] mb-4">
                    <Shield size={14} className="text-text-tertiary shrink-0" />
                    <p>
                      Ao enviar, você concorda com nossa política de privacidade e com o tratamento dos seus dados conforme a LGPD.
                    </p>
                  </div>
                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full inline-flex items-center justify-center gap-2.5 font-display font-semibold text-[17px] bg-gradient-to-r from-brand to-brand-dark text-white px-9 py-[18px] rounded-[var(--radius-md)] shadow-[var(--shadow-green)] relative overflow-hidden transition-all duration-300 ease-[var(--ease-out)] hover:translate-y-[-2px] hover:shadow-[var(--shadow-green-lg)] active:translate-y-0 disabled:opacity-70 disabled:cursor-not-allowed disabled:pointer-events-none min-h-[48px]"
                  >
                    <span className="absolute inset-0 bg-gradient-to-br from-white/15 to-transparent pointer-events-none" />
                    {loading ? (
                      <span className="relative inline-flex items-center gap-2">
                        <Loader2 size={20} className="animate-spin" />
                        Enviando...
                      </span>
                    ) : (
                      <span className="relative inline-flex items-center gap-2">
                        Solicitar diagnóstico gratuito
                        <ArrowRight size={20} />
                      </span>
                    )}
                  </button>
                  {error && (
                    <div className="text-danger text-sm font-medium text-center mt-3 px-4 py-2.5 bg-danger-soft rounded-[var(--radius-sm)] border border-[rgba(220,38,38,0.15)]" role="alert">
                      Erro ao enviar. Tente novamente.
                    </div>
                  )}
                </motion.form>
              ) : (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="flex flex-col items-center justify-center text-center bg-surface border border-border rounded-[var(--radius-xl)] p-12 shadow-[var(--shadow-card-hover)]"
                >
                  <div className="w-[72px] h-[72px] rounded-full bg-gradient-to-br from-brand-light to-brand/20 text-brand flex items-center justify-center mb-5 shadow-[0_8px_24px_rgba(29,184,134,0.15)]">
                    <CheckCircle size={40} strokeWidth={1.5} />
                  </div>
                  <h3 className="font-display font-bold text-[1.4rem] mb-2">
                    Recebemos seu contato!
                  </h3>
                  <p className="text-[15px] text-text-secondary max-w-[360px]">
                    Nossa equipe vai analisar seu cenário e retornar em até 24h úteis com um diagnóstico personalizado.
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
          </RevealOnScroll>
        </div>
      </div>
    </section>
  );
}
