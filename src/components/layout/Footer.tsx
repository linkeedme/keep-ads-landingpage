import Image from "next/image";
import { Instagram, MapPin } from "lucide-react";
import { INSTAGRAM_URL } from "@/lib/constants";

const FOOTER_LINKS = [
  { label: "Início", href: "#hero" },
  { label: "Método", href: "#metodo" },
  { label: "Depoimentos", href: "#depoimentos" },
  { label: "Quem somos", href: "#time" },
  { label: "FAQ", href: "#faq" },
  { label: "Contato", href: "#contato" },
];

export function Footer() {
  return (
    <footer className="border-t border-border bg-surface">
      <div className="w-full max-w-[1140px] mx-auto px-6 py-14 flex flex-col items-center gap-8 text-center">
        {/* Logo + description */}
        <div className="flex flex-col items-center gap-3">
          <Image
            src="/logos/header-logo.png"
            alt="Keep Ads"
            width={180}
            height={54}
            className="h-[38px] w-auto object-contain"
            loading="lazy"
          />
          <p className="text-sm text-text-tertiary leading-[1.5] max-w-[280px]">
            Performance &amp; estratégia em tráfego pago.
          </p>
          <div className="flex items-center gap-1.5 text-[13px] text-text-tertiary">
            <MapPin size={13} />
            <span>Volta Redonda, RJ</span>
          </div>
        </div>

        {/* Divider */}
        <div className="w-full max-w-[400px] h-[1px] bg-gradient-to-r from-transparent via-border to-transparent" />

        {/* Navigation */}
        <nav className="flex gap-6 flex-wrap justify-center">
          {FOOTER_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm text-text-secondary font-medium transition-colors duration-250 hover:text-brand min-h-[44px] inline-flex items-center"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Social */}
        <a
          href={INSTAGRAM_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center w-10 h-10 rounded-xl bg-surface-elevated text-text-secondary transition-all duration-300 hover:bg-brand-light hover:text-brand hover:shadow-[var(--shadow-card)]"
          aria-label="Instagram"
        >
          <Instagram size={18} />
        </a>

        {/* Copyright */}
        <div className="flex flex-col gap-1">
          <p className="text-[13px] text-text-tertiary">
            &copy; 2026 Keep Ads. Todos os direitos reservados.
          </p>
          <p className="text-[13px] text-text-tertiary">
            Desenvolvido por:{" "}
            <a
              href="https://www.linkeed.com.br"
              target="_blank"
              rel="noopener noreferrer"
              className="text-brand font-semibold hover:text-brand-dark transition-colors duration-250"
            >
              Linkeed
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
