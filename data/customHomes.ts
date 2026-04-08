/** Custom Homes subpage — swap copy and hero image when content is final */

export const customHomes = {
  heroImageSrc:
    "https://images.unsplash.com/photo-1600585154084-4e5fe7c39198?auto=format&fit=crop&w=2400&q=82",
  heroImageAlt:
    "Modern custom home with wood siding and mountain landscape beyond",
  headline: ["Built With Care.", "Designed for Living."] as const,
  paragraphs: [
    "At Nordstar Construction Ltd., we build homes for clients who value quality, discretion, and peace of mind. We specialize in custom homes, design-build projects, laneway homes, and major renovations, guiding you through a complex process with clarity and care.",
    "Our role is simple: handle the details, manage the risk, and deliver a home that reflects your vision—without demanding your time or expertise.",
  ],
  cta: { label: "Get in touch", href: "/#contact" },
} as const;
