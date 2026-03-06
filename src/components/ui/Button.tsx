import { clsx } from "clsx";
import type { ReactNode, AnchorHTMLAttributes, ButtonHTMLAttributes } from "react";

type BaseProps = {
  variant?: "primary" | "outline" | "ghost";
  size?: "md" | "lg";
  fullWidth?: boolean;
  children: ReactNode;
  icon?: ReactNode;
  className?: string;
};

type ButtonAsButton = BaseProps &
  ButtonHTMLAttributes<HTMLButtonElement> & { href?: never };

type ButtonAsLink = BaseProps &
  AnchorHTMLAttributes<HTMLAnchorElement> & { href: string };

type ButtonProps = ButtonAsButton | ButtonAsLink;

export function Button(props: ButtonProps) {
  const {
    variant = "primary",
    size = "md",
    fullWidth = false,
    children,
    icon,
    className = "",
    ...rest
  } = props;

  const classes = clsx(
    "inline-flex items-center gap-2.5 font-display font-semibold rounded-[var(--radius-md)] transition-all duration-300 whitespace-nowrap",
    "ease-[var(--ease-out)]",
    {
      // Variants
      "bg-brand text-white shadow-[var(--shadow-green)] relative overflow-hidden hover:bg-brand-dark hover:translate-y-[-2px] hover:shadow-[var(--shadow-green-lg)] active:translate-y-0":
        variant === "primary",
      "border-[1.5px] border-border text-text-primary hover:border-brand hover:text-brand hover:shadow-[var(--shadow-sm)]":
        variant === "outline",
      "text-text-secondary hover:text-text-primary": variant === "ghost",
      // Sizes
      "px-7 py-3.5 text-base": size === "md",
      "px-9 py-[18px] text-[17px]": size === "lg",
      // Full width
      "w-full justify-center": fullWidth,
    },
    className
  );

  if ("href" in rest && rest.href) {
    return (
      <a className={classes} {...(rest as AnchorHTMLAttributes<HTMLAnchorElement>)}>
        {variant === "primary" && (
          <span className="absolute inset-0 bg-gradient-to-br from-white/15 to-transparent pointer-events-none" />
        )}
        <span className="relative flex items-center gap-2.5">
          {children}
          {icon}
        </span>
      </a>
    );
  }

  return (
    <button className={classes} {...(rest as ButtonHTMLAttributes<HTMLButtonElement>)}>
      {variant === "primary" && (
        <span className="absolute inset-0 bg-gradient-to-br from-white/15 to-transparent pointer-events-none" />
      )}
      <span className="relative flex items-center gap-2.5">
        {children}
        {icon}
      </span>
    </button>
  );
}
