"use client";

import { useState, useEffect, useCallback } from "react";
import { ArrowRight } from "lucide-react";
import Image from "next/image";

const NAV_ITEMS = [
  { label: "Método", href: "#metodo" },
  { label: "Depoimentos", href: "#depoimentos" },
  { label: "Quem somos", href: "#time" },
  { label: "FAQ", href: "#faq" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Active section tracking
  useEffect(() => {
    const sections = NAV_ITEMS.map((item) => {
      const el = document.querySelector(item.href);
      return el ? { id: item.href.slice(1), el } : null;
    }).filter(Boolean) as { id: string; el: Element }[];

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const match = sections.find((s) => s.el === entry.target);
            if (match) setActiveSection(match.id);
          }
        });
      },
      { threshold: 0, rootMargin: "-20% 0px -60% 0px" }
    );

    sections.forEach((s) => observer.observe(s.el));
    return () => observer.disconnect();
  }, []);

  const toggleMenu = useCallback(() => {
    setMenuOpen((prev) => {
      document.body.style.overflow = prev ? "" : "hidden";
      return !prev;
    });
  }, []);

  const closeMenu = useCallback(() => {
    setMenuOpen(false);
    document.body.style.overflow = "";
  }, []);

  const handleSmoothScroll = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: "smooth", block: "start" });
    }
    closeMenu();
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-[1000] transition-all duration-400 ease-[var(--ease-out)] ${
        scrolled
          ? "py-2.5 bg-white/95 backdrop-blur-[24px] saturate-[1.2] border-b border-black/6 shadow-[0_1px_8px_rgba(0,0,0,0.04)]"
          : "py-4"
      }`}
    >
      <div className="w-full max-w-[1140px] mx-auto px-6 flex items-center justify-between">
        <a
          href="#"
          className="flex items-center overflow-hidden"
          aria-label="Keep Ads, ir para o topo"
          onClick={(e) => handleSmoothScroll(e, "#hero")}
        >
          <Image
            src="/logos/header-logo.png"
            alt="Keep Ads | Performance & Estratégia"
            width={200}
            height={60}
            className="h-11 w-auto object-contain"
            priority
          />
        </a>

        {/* Desktop nav */}
        <ul
          className={`flex items-center gap-8 max-lg:fixed max-lg:top-0 max-lg:right-0 max-lg:bottom-0 max-lg:w-[300px] max-lg:flex-col max-lg:items-start max-lg:gap-0 max-lg:pt-[100px] max-lg:px-8 max-lg:pb-8 max-lg:bg-white/96 max-lg:backdrop-blur-[24px] max-lg:saturate-[1.3] max-lg:border-l max-lg:border-black/6 max-lg:shadow-[-8px_0_40px_rgba(0,0,0,0.08)] max-lg:transition-transform max-lg:duration-400 max-lg:ease-[var(--ease-out)] max-lg:z-[999] ${
            menuOpen ? "max-lg:translate-x-0" : "max-lg:translate-x-full"
          }`}
        >
          {NAV_ITEMS.map((item) => (
            <li key={item.href} className="max-lg:w-full">
              <a
                href={item.href}
                onClick={(e) => handleSmoothScroll(e, item.href)}
                className={`text-[15px] font-medium text-text-secondary transition-colors duration-250 relative group max-lg:block max-lg:py-3.5 max-lg:text-[17px] max-lg:border-b max-lg:border-border ${
                  activeSection === item.href.slice(1)
                    ? "text-text-primary max-lg:text-brand-dark max-lg:font-semibold"
                    : "hover:text-text-primary"
                }`}
              >
                {item.label}
                <span
                  className={`absolute bottom-[-4px] left-0 h-0.5 bg-brand rounded-sm transition-all duration-300 ease-[var(--ease-out)] max-lg:hidden ${
                    activeSection === item.href.slice(1) ? "w-full" : "w-0 group-hover:w-full"
                  }`}
                />
              </a>
            </li>
          ))}
          <li className="max-lg:w-full max-lg:mt-4">
            <a
              href="https://api.whatsapp.com/send?phone=5524992627164"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-brand to-brand-dark text-white px-[22px] py-2.5 rounded-[var(--radius-sm)] font-semibold transition-all duration-300 ease-[var(--ease-out)] hover:translate-y-[-1px] hover:shadow-[var(--shadow-green)] max-lg:flex max-lg:justify-center max-lg:border-b-0"
            >
              Falar com especialista
              <ArrowRight size={16} className="max-lg:hidden" />
            </a>
          </li>
        </ul>

        {/* Mobile overlay */}
        {menuOpen && (
          <div
            className="fixed inset-0 bg-black/20 backdrop-blur-sm z-[998] lg:hidden"
            onClick={closeMenu}
          />
        )}

        {/* Hamburger */}
        <button
          className="hidden max-lg:flex flex-col gap-[5px] w-7 p-[4px_0] z-[1001]"
          onClick={toggleMenu}
          aria-label={menuOpen ? "Fechar menu" : "Abrir menu"}
          aria-expanded={menuOpen}
        >
          <span
            className={`block w-full h-[2.5px] bg-text-primary rounded-sm transition-all duration-350 ease-[var(--ease-out)] origin-center ${
              menuOpen ? "translate-y-[7.5px] rotate-45" : ""
            }`}
          />
          <span
            className={`block w-full h-[2.5px] bg-text-primary rounded-sm transition-all duration-350 ease-[var(--ease-out)] origin-center ${
              menuOpen ? "opacity-0 scale-x-0" : ""
            }`}
          />
          <span
            className={`block w-full h-[2.5px] bg-text-primary rounded-sm transition-all duration-350 ease-[var(--ease-out)] origin-center ${
              menuOpen ? "translate-y-[-7.5px] -rotate-45" : ""
            }`}
          />
        </button>
      </div>
    </nav>
  );
}
