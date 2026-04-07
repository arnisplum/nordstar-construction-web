export const site = {
  companyName: "Nordstar Construction",
  legalName: "Nordstar Construction Ltd.",
  tagline: "Custom homes & commercial construction across British Columbia.",
  description:
    "Premier general contractor delivering transparency, reliability, and refined craftsmanship since 2016.",
  nav: [
    { label: "Home", href: "#home" },
    { label: "About", href: "#about" },
    { label: "Services", href: "#services" },
    { label: "Projects", href: "#projects" },
    { label: "Contact", href: "#contact" },
  ],
  hero: {
    headline: "Built on Trust. Proven by Results.",
    subheadline:
      "Custom homes and commercial construction in British Columbia — crafted with clarity, precision, and care since 2016.",
    primaryCta: { label: "Get Started", href: "#contact" },
    secondaryCta: { label: "View Projects", href: "#projects" },
    imageSrc:
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=2400&q=82",
    imageAlt:
      "Modern luxury residence at dusk with warm interior lighting and large glass facade",
  },
  about: {
    eyebrow: "Who we are",
    title: "A partner for complex builds.",
    lead:
      "We are a British Columbia–based general contractor focused on custom residential and commercial work — where schedule, budget, and craft all matter.",
    paragraphs: [
      "From early planning through turnover, we emphasize transparent communication and predictable execution. Our teams coordinate trades, details, and deadlines so you can make decisions with confidence.",
      "Whether it is a bespoke home or a commercial envelope and interior, we bring disciplined project leadership, efficient workflows, and an eye for finish quality that endures.",
    ],
    asideTitle: "Our story",
    asideLine:
      "Founded in 2016 with a simple standard: build the right way — no surprises, no shortcuts.",
  },
  contact: {
    title: "Start your next project.",
    subtitle:
      "Tell us about a residential or commercial build. We will follow up with a structured conversation about scope, timeline, and next steps.",
    cta: { label: "Request a consultation", href: "#contact-form" },
    formNote:
      "This form is a layout placeholder — connect it to your CRM or email service when ready.",
    details: {
      email: "hello@nordstarconstruction.example",
      phone: "+1 (604) 555-0142",
      address: "Metro Vancouver, British Columbia",
    },
  },
  footer: {
    tagline: "Luxury residential & commercial construction.",
    copyrightYear: 2026,
  },
} as const;
