export type Partner = {
  id: string;
  name: string;
  /** Replace with logo path, e.g. /images/partners/icba.svg */
  logoSrc?: string;
};

export const partnersIntro = {
  title: "Trusted by",
  subtitle:
    "Industry associations, warranty programs, and supply partners — placeholder labels for demo layouts.",
};

export const partners: Partner[] = [
  { id: "icba", name: "ICBA" },
  { id: "bc-housing", name: "BC Housing" },
  { id: "pacific-warranty", name: "Pacific Home Warranty" },
  { id: "pjk", name: "PJK" },
  { id: "pan-tiles", name: "Pan Tiles" },
];
