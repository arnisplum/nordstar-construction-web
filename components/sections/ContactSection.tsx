"use client";

import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { Section } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import { site } from "@/data/site";

export function ContactSection() {
  const { contact } = site;

  return (
    <Section id="contact" className="bg-stone-900 py-20 text-white md:py-28">
      <Container>
        <div className="grid gap-14 lg:grid-cols-2 lg:gap-20">
          <div>
            <Reveal>
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-white/45">
                Contact
              </p>
              <h2 className="mt-4 font-display text-3xl font-medium tracking-tight sm:text-4xl lg:text-[2.75rem] lg:leading-tight">
                {contact.title}
              </h2>
              <p className="mt-6 max-w-lg text-sm leading-relaxed text-white/70 sm:text-base">
                {contact.subtitle}
              </p>
              <div className="mt-10">
                <Button href={contact.cta.href} variant="light">
                  {contact.cta.label}
                </Button>
              </div>
            </Reveal>
            <Reveal delay={0.1}>
              <ul className="mt-12 space-y-3 text-sm text-white/65">
                <li>{contact.details.email}</li>
                <li>{contact.details.phone}</li>
                <li>{contact.details.address}</li>
              </ul>
            </Reveal>
          </div>

          <Reveal delay={0.08}>
            <div
              id="contact-form"
              className="border border-white/15 bg-white/[0.04] p-8 backdrop-blur-sm sm:p-10"
            >
              <p className="text-sm font-medium text-white/90">
                Project inquiry
              </p>
              <p className="mt-2 text-xs text-white/50">{contact.formNote}</p>
              <form className="mt-8 space-y-5" onSubmit={(e) => e.preventDefault()}>
                <div>
                  <label
                    htmlFor="name"
                    className="block text-xs font-medium uppercase tracking-wider text-white/45"
                  >
                    Name
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    autoComplete="name"
                    placeholder="Your name"
                    className="mt-2 w-full border border-white/20 bg-white/5 px-4 py-3 text-sm text-white placeholder:text-white/35 outline-none focus:border-teal-500/60 focus:ring-1 focus:ring-teal-500/40"
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block text-xs font-medium uppercase tracking-wider text-white/45"
                  >
                    Email
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    placeholder="you@company.com"
                    className="mt-2 w-full border border-white/20 bg-white/5 px-4 py-3 text-sm text-white placeholder:text-white/35 outline-none focus:border-teal-500/60 focus:ring-1 focus:ring-teal-500/40"
                  />
                </div>
                <div>
                  <label
                    htmlFor="message"
                    className="block text-xs font-medium uppercase tracking-wider text-white/45"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    placeholder="Project type, location, and timeline…"
                    className="mt-2 w-full resize-none border border-white/20 bg-white/5 px-4 py-3 text-sm text-white placeholder:text-white/35 outline-none focus:border-teal-500/60 focus:ring-1 focus:ring-teal-500/40"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full border border-white/30 bg-white px-4 py-3 text-sm font-medium text-stone-900 transition-colors hover:bg-stone-100"
                >
                  Send message
                </button>
              </form>
            </div>
          </Reveal>
        </div>
      </Container>
    </Section>
  );
}
