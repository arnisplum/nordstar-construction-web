export type ProjectCategory = "residential" | "commercial";

export type Project = {
  id: string;
  title: string;
  category: ProjectCategory;
  location: string;
  imageSrc: string;
  imageAlt: string;
};

export const projectsIntro = {
  title: "Selected work",
  description:
    "A sample of residential and commercial scale — replace with your portfolio and photography when ready.",
};

export const projects: Project[] = [
  {
    id: "r1",
    title: "Glass Atrium Residence",
    category: "residential",
    location: "Lower Mainland, BC",
    imageSrc:
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1400&q=82",
    imageAlt: "Sun-filled interior with plants and floor-to-ceiling glazing",
  },
  {
    id: "r2",
    title: "Coastal Kitchen Pavilion",
    category: "residential",
    location: "Vancouver Island, BC",
    imageSrc:
      "https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=1400&q=82",
    imageAlt: "Modern kitchen opening to outdoor terrace",
  },
  {
    id: "r3",
    title: "Courtyard House",
    category: "residential",
    location: "Okanagan, BC",
    imageSrc:
      "https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?auto=format&fit=crop&w=1400&q=82",
    imageAlt: "Minimal cubic home with flat roof and green lawn",
  },
  {
    id: "r4",
    title: "Forest Lane Estate",
    category: "residential",
    location: "Sea-to-Sky, BC",
    imageSrc:
      "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1400&q=82",
    imageAlt: "Luxury home exterior at golden hour",
  },
  {
    id: "c1",
    title: "Timber Frame Core",
    category: "commercial",
    location: "BC Interior",
    imageSrc:
      "https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=1400&q=82",
    imageAlt: "Multi-level timber structure under construction",
  },
  {
    id: "c2",
    title: "Distribution Hub",
    category: "commercial",
    location: "Fraser Valley, BC",
    imageSrc:
      "https://images.unsplash.com/photo-1590674899484-d5640e854abe?auto=format&fit=crop&w=1400&q=82",
    imageAlt: "Aerial view of large concrete slab with construction activity",
  },
  {
    id: "c3",
    title: "Urban Infill",
    category: "commercial",
    location: "Vancouver, BC",
    imageSrc:
      "https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&w=1400&q=82",
    imageAlt: "Building under construction with crane against sky",
  },
  {
    id: "c4",
    title: "Workplace Fit-Out",
    category: "commercial",
    location: "Burnaby, BC",
    imageSrc:
      "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1400&q=82",
    imageAlt: "Open office interior with glass partitions and natural light",
  },
  {
    id: "c5",
    title: "Civil Package",
    category: "commercial",
    location: "Metro Vancouver, BC",
    imageSrc:
      "https://images.unsplash.com/photo-1531834685036-c34e288c8edf?auto=format&fit=crop&w=1400&q=82",
    imageAlt: "Construction site earthwork and machinery from above",
  },
];
