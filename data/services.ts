export type Service = {
  id: string;
  title: string;
  summary: string;
  imageSrc: string;
  imageAlt: string;
};

export const services: Service[] = [
  {
    id: "residential",
    title: "Custom Homes",
    summary:
      "Architect-led residential builds, from foundation to finish — tailored detailing, energy-smart envelopes, and interiors that feel intentional.",
    imageSrc:
      "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1600&q=82",
    imageAlt: "Contemporary two-story home with large windows and landscaped frontage",
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
  {
    id: "renovations",
    title: "Renovations & TI",
    summary:
      "Selective renovations and tenant improvements that respect existing structure while elevating performance, layout, and finish.",
    imageSrc:
      "https://images.unsplash.com/photo-1600566753190-bf47fd0a350d?auto=format&fit=crop&w=1600&q=82",
    imageAlt: "Bright modern kitchen with stone surfaces and natural light",
  },
];
