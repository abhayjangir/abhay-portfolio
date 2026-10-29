import React from "react";
import { SectionHeading } from "@/ui/SectionHeading";
import { ExperienceItem } from "@/ui/ExperienceItem";
import { PORTFOLIO_DATA } from "@/data/portfolio";

export const Experience: React.FC = () => {
  const { experience } = PORTFOLIO_DATA;

  return (
    <section id="experience" className="py-20 sm:py-28 relative bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Career Timeline"
          title="Experience that ships."
          description="Proven production impact delivering full-stack features, engineering REST APIs, debugging live incidents, and modernizing healthcare and finance workflows."
        />

        <div className="space-y-8">
          {experience.map((comp) => (
            <ExperienceItem key={comp.company} experience={comp} />
          ))}
        </div>
      </div>
    </section>
  );
};

