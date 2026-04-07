import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { Section } from "@/components/ui/Section";
import { partners, partnersIntro } from "@/data/partners";

export function PartnersSection() {
  return (
    <Section className="border-y border-stone-200 bg-stone-50 py-16 md:py-20">
      <Container>
        <Reveal>
          <div className="text-center">
            <h2 className="font-display text-2xl font-medium text-stone-900 sm:text-3xl">
              {partnersIntro.title}
            </h2>
            <p className="mx-auto mt-3 max-w-2xl text-sm text-stone-500">
              {partnersIntro.subtitle}
            </p>
          </div>
        </Reveal>

        <div className="mt-12 flex flex-wrap items-center justify-center gap-x-12 gap-y-10 sm:gap-x-16">
          {partners.map((p, i) => (
            <Reveal key={p.id} delay={0.05 * i}>
              <div className="flex h-14 min-w-[7.5rem] items-center justify-center rounded-md border border-stone-200/80 bg-white px-6 text-center shadow-sm">
                <span className="text-xs font-semibold uppercase tracking-[0.2em] text-stone-400">
                  {p.name}
                </span>
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </Section>
  );
}
