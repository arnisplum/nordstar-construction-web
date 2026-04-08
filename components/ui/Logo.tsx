"use client";

import Image from "next/image";
import { site } from "@/data/site";

/** Intrinsic aspect ~344.55 / 79.36 from nordstar_logo.svg viewBox */
const dimensions = {
  header: { width: 172, height: 40 },
  footer: { width: 155, height: 36 },
  compact: { width: 129, height: 30 },
} as const;

type LogoProps = {
  variant?: keyof typeof dimensions;
  className?: string;
};

export function Logo({ variant = "header", className = "" }: LogoProps) {
  const { width, height } = dimensions[variant];
  return (
    <Image
      src={site.logo.src}
      alt={site.logo.alt}
      width={width}
      height={height}
      className={`object-contain object-left ${className}`}
      unoptimized
      priority={variant === "header"}
    />
  );
}
