import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { Section } from "@/components/ui/Section";
import { services } from "@/data/services";

export function ServicesSection() {
  return (
    <Section id="services" className="bg-stone-50">
      <Container>
        <Reveal>
          <div className="max-w-2xl">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-stone-400">
              What we do
            </p>
            <h2 className="mt-4 font-display text-3xl font-medium tracking-tight text-stone-900 sm:text-4xl">
              Services
            </h2>
            <p className="mt-5 text-sm leading-relaxed text-stone-600 sm:text-base">
              End-to-end construction leadership for residential and commercial
              clients — structured phases, clear reporting, and refined
              execution.
            </p>
          </div>
        </Reveal>

        <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3 lg:gap-8">
          {services.map((item, i) => (
            <Reveal key={item.id} delay={0.06 * i}>
              <article className="group relative flex flex-col overflow-hidden bg-white shadow-sm ring-1 ring-stone-200/80 transition-shadow duration-500 hover:shadow-md hover:ring-stone-300/80">
                <div className="relative aspect-[4/3] overflow-hidden">
                  <Image
                    src={item.imageSrc}
                    alt={item.imageAlt}
                    fill
                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
                    sizes="(max-width:768px) 100vw, (max-width:1200px) 50vw, 33vw"
                  />
                  <div
                    className="absolute inset-0 bg-gradient-to-t from-stone-950/70 via-stone-950/20 to-transparent opacity-90 transition-opacity duration-500 group-hover:opacity-100"
                    aria-hidden
                  />
                  <div className="absolute inset-x-0 bottom-0 p-6">
                    <h3 className="font-display text-xl font-medium text-white sm:text-2xl">
                      {item.title}
                    </h3>
                  </div>
                </div>
                <div className="flex flex-1 flex-col px-6 py-7">
                  <p className="text-sm leading-relaxed text-stone-600">
                    {item.summary}
                  </p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </Container>
    </Section>
  );
}
