import { RevealOnScroll } from "@/components/animations/RevealOnScroll";

interface SectionHeaderProps {
  tag: string;
  title: string;
  accentText?: string;
  description?: string;
  className?: string;
  dark?: boolean;
}

export function SectionHeader({
  tag,
  title,
  accentText,
  description,
  className = "",
  dark = false,
}: SectionHeaderProps) {
  return (
    <RevealOnScroll className={`text-center max-w-[680px] mx-auto mb-[clamp(40px,5vw,64px)] flex flex-col items-center ${className}`}>
      <span
        className={`inline-block font-sans text-xs font-bold tracking-[0.1em] uppercase px-[18px] py-1.5 rounded-full mb-4 border ${
          dark
            ? "bg-[rgba(29,184,134,0.15)] text-brand border-[rgba(29,184,134,0.12)]"
            : "bg-brand-light text-brand-dark border-[rgba(29,184,134,0.12)]"
        }`}
      >
        {tag}
      </span>
      <h2 className={`font-display font-bold text-[clamp(1.85rem,3.6vw,2.7rem)] leading-[1.15] tracking-[-0.01em] relative inline-block ${
        dark ? "text-text-inverse" : "text-text-primary"
      }`}>
        {accentText ? (
          <>
            {title} <span className="text-brand">{accentText}</span>
          </>
        ) : (
          title
        )}
        {!dark && (
          <span className="block w-12 h-[3px] bg-brand rounded-sm mx-auto mt-4" />
        )}
      </h2>
      {description && (
        <p className={`text-[clamp(1rem,1.8vw,1.15rem)] leading-[1.7] mt-3 ${
          dark ? "text-white/60" : "text-text-secondary"
        }`}>
          {description}
        </p>
      )}
    </RevealOnScroll>
  );
}
