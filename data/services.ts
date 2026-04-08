export type Service = {
  id: string;
  title: string;
  summary: string;
  imageSrc: string;
  imageAlt: string;
  /** If set, the whole service card links here (e.g. detail page) */
  href?: string;
};

export const services: Service[] = [
  {
    id: "residential",
    title: "Residential Construction",
    summary:
      "Custom homes and residential builds from foundation to finish — tailored detailing, energy-smart envelopes, and interiors that feel intentional.",
    imageSrc:
      "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1600&q=82",
    imageAlt: "Contemporary two-story home with large windows and landscaped frontage",
    href: "/custom-homes",
  },
  {
    id: "commercial",
    title: "Commercial Construction",
    summary:
      "Shell, core, and tenant-ready spaces for offices, retail, and light industrial — coordinated logistics and clean handovers.",
    imageSrc:
      "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&w=1600&q=82",
    imageAlt: "Large-scale concrete foundation and structural work at a commercial site",
  },
];
