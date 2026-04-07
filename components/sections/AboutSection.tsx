import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { Section } from "@/components/ui/Section";
import { site } from "@/data/site";

export function AboutSection() {
  const { about } = site;

  return (
    <Section id="about" className="bg-white">
      <Container>
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-16 lg:items-start">
          <Reveal className="lg:col-span-5">
            <div className="relative overflow-hidden bg-stone-900 px-8 py-14 text-white sm:px-10 sm:py-16 lg:min-h-[22rem]">
              <div
                className="pointer-events-none absolute -right-16 -top-16 h-48 w-48 rounded-full bg-teal-500/20 blur-3xl"
                aria-hidden
              />
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-white/50">
                {about.eyebrow}
              </p>
              <p className="mt-6 font-display text-3xl font-medium leading-snug sm:text-4xl">
                {about.asideTitle}
              </p>
              <p className="mt-8 max-w-sm text-sm leading-relaxed text-white/75">
                {about.asideLine}
              </p>
            </div>
          </Reveal>

          <div className="lg:col-span-7">
            <Reveal delay={0.05}>
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-stone-400">
                {about.eyebrow}
              </p>
            </Reveal>
            <Reveal delay={0.1}>
              <h2 className="mt-4 font-display text-3xl font-medium tracking-tight text-stone-900 sm:text-4xl lg:text-[2.75rem] lg:leading-[1.15]">
                {about.title}
              </h2>
            </Reveal>
            <Reveal delay={0.14}>
              <p className="mt-8 text-lg leading-relaxed text-stone-600 sm:text-xl">
                {about.lead}
              </p>
            </Reveal>
            <div className="mt-10 space-y-6 border-l border-stone-200 pl-8">
              {about.paragraphs.map((p, i) => (
                <Reveal key={i} delay={0.08 * (i + 3)}>
                  <p className="text-sm leading-relaxed text-stone-600 sm:text-base">
                    {p}
                  </p>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
}
