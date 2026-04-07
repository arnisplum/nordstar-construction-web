import type { ReactNode } from "react";

type SectionProps = {
  id?: string;
  children: ReactNode;
  className?: string;
  as?: "section" | "div";
};

export function Section({
  id,
  children,
  className = "",
  as: Tag = "section",
}: SectionProps) {
  return (
    <Tag id={id} className={`py-20 md:py-28 lg:py-32 ${className}`}>
      {children}
    </Tag>
  );
}
