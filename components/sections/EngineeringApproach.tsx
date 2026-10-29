import React from "react";
import { SectionHeading } from "@/ui/SectionHeading";
import { PORTFOLIO_DATA } from "@/data/portfolio";
import { Compass, Layers, GitBranch, Wrench } from "lucide-react";

const iconMap: Record<string, React.ElementType> = {
  Compass,
  Layers,
  GitBranch,
  Wrench,
};

export const EngineeringApproach: React.FC = () => {
  const { engineeringApproach } = PORTFOLIO_DATA;

  return (
    <section id="approach" className="py-20 sm:py-28 relative bg-background overflow-hidden">
      {/* 3D ambient light */}
      <div className="absolute top-1/2 left-0 w-[500px] h-[350px] bg-crimson/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeading
          eyebrow="Methodology & Discipline"
          title="How I approach engineering."
          description="A systematic process refined through shipping production features, resolving live incidents, and collaborating across multidisciplinary teams."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {engineeringApproach.map((pillar) => {
            const IconComponent = iconMap[pillar.icon] || Compass;

            return (
              <div
                key={pillar.number}
                className="group p-6 sm:p-8 rounded-[12px] bg-gradient-to-b from-[#26262C]/95 via-[#1D1D21]/95 to-[#131316]/95 border-t border-white/25 border-l border-white/10 border-r border-black/60 border-b border-black/80 shadow-[0_16px_36px_-10px_rgba(0,0,0,0.85),inset_0_1px_0_rgba(255,255,255,0.14)] hover:shadow-[0_24px_50px_-10px_rgba(0,0,0,0.95),0_0_30px_rgba(225,6,0,0.3)] hover:-translate-y-1.5 hover:border-crimson/60 transition-all duration-300 space-y-4"
              >
                <div className="flex items-center justify-between">
                  <span className="font-mono text-2xl font-black bg-gradient-to-r from-[#FF332C] to-[#E10600] bg-clip-text text-transparent drop-shadow-[0_2px_10px_rgba(225,6,0,0.4)]">
                    {pillar.number}
                  </span>
                  <div className="p-2.5 rounded-[8px] bg-gradient-to-b from-[#34343A] to-[#1A1A1E] border-t border-white/25 border-b border-black/80 shadow-md text-crimson group-hover:border-crimson/60 transition-colors">
                    <IconComponent className="w-5 h-5" />
                  </div>
                </div>

                <div className="space-y-1">
                  <h3 className="text-lg sm:text-xl font-bold text-white tracking-tight group-hover:text-crimson font-mono transition-colors">
                    {pillar.title}
                  </h3>
                  <p className="text-xs font-mono text-crimson font-bold">
                    {pillar.summary}
                  </p>
                </div>

                <ul className="space-y-2 pt-3 border-t border-silver/15">
                  {pillar.details.map((detail, idx) => (
                    <li
                      key={idx}
                      className="flex items-start gap-2.5 text-xs sm:text-sm text-silver/90 leading-relaxed font-normal"
                    >
                      <div className="w-1.5 h-1.5 rounded-full bg-crimson shrink-0 mt-2 shadow-[0_0_6px_#E10600]" />
                      <span>{detail}</span>
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
