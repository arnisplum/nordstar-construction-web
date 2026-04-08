import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Container } from "@/components/ui/Container";
import { Logo } from "@/components/ui/Logo";
import { customHomes } from "@/data/customHomes";

export const metadata: Metadata = {
  title: "Custom Homes",
  description:
    "Custom homes, design-build, laneway homes, and major renovations — built with care by Nordstar Construction Ltd.",
};

export default function CustomHomesPage() {
  const { heroImageSrc, heroImageAlt, headline, paragraphs, cta } = customHomes;

  return (
    <>
      <Header />
      <main className="flex-1 pt-16">
        <section className="relative min-h-[calc(100svh-4rem)] overflow-hidden bg-stone-200">
          <Image
            src={heroImageSrc}
            alt={heroImageAlt}
            fill
            priority
            className="object-cover"
            sizes="100vw"
          />
          <div
            className="absolute inset-0 bg-stone-900/20"
            aria-hidden
          />

          <div className="relative z-10 flex min-h-[calc(100svh-4rem)] items-center py-16 md:py-20">
            <Container>
              <div className="max-w-xl bg-white/90 px-8 py-10 shadow-xl ring-1 ring-stone-200/90 backdrop-blur-md sm:px-10 sm:py-12 lg:px-12 lg:py-14">
                <Logo variant="compact" className="max-h-7 w-auto sm:max-h-8" />
                <h1 className="mt-4 font-display text-3xl font-medium leading-tight tracking-tight text-stone-900 sm:text-4xl lg:text-[2.75rem] lg:leading-[1.12]">
                  {headline[0]}
                  <br />
                  {headline[1]}
                </h1>
                {paragraphs.map((p, i) => (
                  <p
                    key={i}
                    className="mt-6 text-sm leading-relaxed text-stone-600 sm:text-base"
                  >
                    {p}
                  </p>
                ))}
                <div className="mt-10">
                  <Link
                    href={cta.href}
                    className="inline-flex items-center justify-center border border-stone-900 bg-stone-900 px-7 py-3 text-sm font-medium tracking-wide text-white transition-colors hover:bg-stone-800 hover:border-stone-800"
                  >
                    {cta.label}
                  </Link>
                </div>
              </div>
            </Container>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
