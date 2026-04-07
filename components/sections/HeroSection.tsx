"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "motion/react";
import { Button } from "@/components/ui/Button";
import { site } from "@/data/site";

export function HeroSection() {
  const reduce = useReducedMotion();
  const { hero } = site;

  return (
    <section
      id="home"
      className="relative flex min-h-[100svh] items-center justify-center pt-16"
    >
      <div className="absolute inset-0">
        <Image
          src={hero.imageSrc}
          alt={hero.imageAlt}
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
        <div
          className="absolute inset-0 bg-gradient-to-t from-stone-950/90 via-stone-950/55 to-stone-900/35"
          aria-hidden
        />
      </div>

      <div className="relative z-10 mx-auto max-w-4xl px-6 py-24 text-center sm:px-8">
        <motion.p
          className="text-xs font-semibold uppercase tracking-[0.35em] text-white/75"
          initial={reduce ? false : { opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        >
          British Columbia
        </motion.p>
        <motion.h1
          className="mt-6 font-display text-4xl font-medium leading-[1.08] tracking-tight text-white sm:text-5xl md:text-6xl lg:text-7xl"
          initial={reduce ? false : { opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.65,
            delay: 0.08,
            ease: [0.22, 1, 0.36, 1],
          }}
        >
          {hero.headline}
        </motion.h1>
        <motion.p
          className="mx-auto mt-8 max-w-2xl text-base leading-relaxed text-white/85 sm:text-lg"
          initial={reduce ? false : { opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.6,
            delay: 0.16,
            ease: [0.22, 1, 0.36, 1],
          }}
        >
          {hero.subheadline}
        </motion.p>
        <motion.div
          className="mt-12 flex flex-col items-center justify-center gap-4 sm:flex-row sm:gap-5"
          initial={reduce ? false : { opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.55,
            delay: 0.24,
            ease: [0.22, 1, 0.36, 1],
          }}
        >
          <Button href={hero.primaryCta.href} variant="ghost">
            {hero.primaryCta.label}
          </Button>
          <Button href={hero.secondaryCta.href} variant="light">
            {hero.secondaryCta.label}
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
