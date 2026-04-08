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
    imageSrc: "/images/projects/r1.jpg",
    imageAlt: "Sun-filled interior with plants and floor-to-ceiling glazing",
  },
  {
    id: "r2",
    title: "Coastal Kitchen Pavilion",
    category: "residential",
    location: "Vancouver Island, BC",
    imageSrc: "/images/projects/r2.jpg",
    imageAlt: "Modern kitchen opening to outdoor terrace",
  },
  {
    id: "r3",
    title: "Courtyard House",
    category: "residential",
    location: "Okanagan, BC",
    imageSrc: "/images/projects/r3.jpg",
    imageAlt: "Minimal cubic home with flat roof and green lawn",
  },
  {
    id: "r4",
    title: "Forest Lane Estate",
    category: "residential",
    location: "Sea-to-Sky, BC",
    imageSrc: "/images/projects/r4.jpg",
    imageAlt: "Luxury home exterior at golden hour",
  },
  {
    id: "c1",
    title: "Timber Frame Core",
    category: "commercial",
    location: "BC Interior",
    imageSrc: "/images/projects/c1.jpg",
    imageAlt: "Multi-level timber structure under construction",
  },
  {
    id: "c2",
    title: "Distribution Hub",
    category: "commercial",
    location: "Fraser Valley, BC",
    imageSrc: "/images/projects/c2.jpg",
    imageAlt: "Aerial view of large concrete slab with construction activity",
  },
  {
    id: "c3",
    title: "Urban Infill",
    category: "commercial",
    location: "Vancouver, BC",
    imageSrc: "/images/projects/c3.jpg",
    imageAlt: "Building under construction with crane against sky",
  },
  {
    id: "c4",
    title: "Workplace Fit-Out",
    category: "commercial",
    location: "Burnaby, BC",
    imageSrc: "/images/projects/c4.jpg",
    imageAlt: "Open office interior with glass partitions and natural light",
  },
  {
    id: "c5",
    title: "Civil Package",
    category: "commercial",
    location: "Metro Vancouver, BC",
    // Placeholder: original Unsplash URL 404'd; replace c5.jpg with your aerial/civil photo
    imageSrc: "/images/projects/c5.jpg",
    imageAlt: "Construction site earthwork and machinery from above",
  },
];
