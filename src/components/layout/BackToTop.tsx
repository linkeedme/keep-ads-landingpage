"use client";

import { useState, useEffect } from "react";
import { ChevronUp } from "lucide-react";

export function BackToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const hero = document.getElementById("hero");
    if (!hero) return;

    const onScroll = () => {
      const heroBottom = hero.offsetTop + hero.offsetHeight;
      setVisible(window.scrollY > heroBottom);
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <button
      className={`fixed bottom-24 right-6 z-[998] flex items-center justify-center w-11 h-11 rounded-full bg-brand text-white shadow-[var(--shadow-green)] transition-all duration-300 ease-[var(--ease-out)] hover:bg-brand-dark hover:translate-y-[-2px] hover:shadow-[var(--shadow-green-lg)] focus-visible:outline-2 focus-visible:outline-brand focus-visible:outline-offset-[3px] max-sm:bottom-20 max-sm:right-4 max-sm:w-10 max-sm:h-10 ${
        visible
          ? "opacity-100 visible translate-y-0"
          : "opacity-0 invisible translate-y-3"
      }`}
      onClick={scrollToTop}
      aria-label="Voltar ao topo"
    >
      <ChevronUp size={20} />
    </button>
  );
}
