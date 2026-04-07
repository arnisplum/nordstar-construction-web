import Link from "next/link";
import type { ReactNode } from "react";

type ButtonVariant = "primary" | "ghost" | "light";

type ButtonProps = {
  href: string;
  children: ReactNode;
  variant?: ButtonVariant;
  className?: string;
};

const variants: Record<ButtonVariant, string> = {
  primary:
    "border border-stone-900 bg-stone-900 text-white hover:bg-stone-800 hover:border-stone-800",
  ghost:
    "border border-white/80 bg-white/5 text-white backdrop-blur-sm hover:bg-white/15",
  light:
    "border border-stone-300 bg-white text-stone-900 hover:border-stone-400 hover:bg-stone-50",
};

export function Button({
  href,
  children,
  variant = "primary",
  className = "",
}: ButtonProps) {
  return (
    <Link
      href={href}
      className={`inline-flex items-center justify-center px-7 py-3 text-sm font-medium tracking-wide transition-colors duration-300 ${variants[variant]} ${className}`}
    >
      {children}
    </Link>
  );
}
