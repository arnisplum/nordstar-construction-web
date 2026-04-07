"use client";

import Image from "next/image";
import { useMemo, useState } from "react";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { Section } from "@/components/ui/Section";
import {
  projects,
  projectsIntro,
  type ProjectCategory,
} from "@/data/projects";

const filters: { id: "all" | ProjectCategory; label: string }[] = [
  { id: "all", label: "All" },
  { id: "residential", label: "Residential" },
  { id: "commercial", label: "Commercial" },
];

export function ProjectsSection() {
  const [active, setActive] = useState<"all" | ProjectCategory>("all");

  const filtered = useMemo(() => {
    if (active === "all") return projects;
    return projects.filter((p) => p.category === active);
  }, [active]);

  return (
    <Section id="projects" className="bg-white">
      <Container>
        <div className="flex flex-col gap-10 lg:flex-row lg:items-end lg:justify-between">
          <Reveal className="max-w-2xl">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-stone-400">
              Portfolio
            </p>
            <h2 className="mt-4 font-display text-3xl font-medium tracking-tight text-stone-900 sm:text-4xl">
              {projectsIntro.title}
            </h2>
            <p className="mt-5 text-sm leading-relaxed text-stone-600 sm:text-base">
              {projectsIntro.description}
            </p>
          </Reveal>

          <Reveal className="flex flex-wrap gap-2" delay={0.08}>
            {filters.map((f) => {
              const isOn = active === f.id;
              return (
                <button
                  key={f.id}
                  type="button"
                  onClick={() => setActive(f.id)}
                  className={`rounded-full border px-4 py-2 text-xs font-semibold uppercase tracking-wider transition-colors ${
                    isOn
                      ? "border-stone-900 bg-stone-900 text-white"
                      : "border-stone-200 bg-white text-stone-600 hover:border-stone-300 hover:text-stone-900"
                  }`}
                >
                  {f.label}
                </button>
              );
            })}
          </Reveal>
        </div>

        <div className="mt-14 columns-1 gap-4 sm:columns-2 lg:columns-3 lg:gap-6">
          {filtered.map((project, i) => (
            <Reveal
              key={project.id}
              className="mb-4 break-inside-avoid lg:mb-6"
              delay={0.04 * (i % 6)}
            >
              <figure className="group relative overflow-hidden bg-stone-100 ring-1 ring-stone-200/80">
                <div
                  className={`relative ${i % 3 === 0 ? "aspect-[3/4]" : i % 3 === 1 ? "aspect-square" : "aspect-[4/3]"}`}
                >
                  <Image
                    src={project.imageSrc}
                    alt={project.imageAlt}
                    fill
                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]"
                    sizes="(max-width:640px) 100vw, (max-width:1024px) 50vw, 33vw"
                  />
                  <div
                    className="absolute inset-0 bg-gradient-to-t from-stone-950/80 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                    aria-hidden
                  />
                  <figcaption className="absolute inset-x-0 bottom-0 translate-y-2 p-5 opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
                    <p className="text-[0.65rem] font-semibold uppercase tracking-widest text-white/70">
                      {project.category}
                    </p>
                    <p className="mt-1 font-display text-lg text-white">
                      {project.title}
                    </p>
                    <p className="mt-1 text-xs text-white/75">{project.location}</p>
                  </figcaption>
                </div>
              </figure>
            </Reveal>
          ))}
        </div>
      </Container>
    </Section>
  );
}
