import React from "react";
import { SectionHeading } from "@/ui/SectionHeading";
import { SkillGroup } from "@/ui/SkillGroup";
import { PORTFOLIO_DATA } from "@/data/portfolio";
import { Sparkles } from "lucide-react";

export const Skills: React.FC = () => {
  const { skillCategories } = PORTFOLIO_DATA;

  return (
    <section id="skills" className="py-20 sm:py-28 bg-surface-dark/95 relative border-t border-silver/20 overflow-hidden">
      {/* 3D ambient light */}
      <div className="absolute top-1/2 right-0 w-[500px] h-[350px] bg-crimson/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 sm:mb-16 gap-6">
          <SectionHeading
            eyebrow="Capabilities & Stack"
            title="My technical toolkit."
            description="A comprehensive overview of the programming languages, frontend libraries, backend frameworks, databases, and domain standards I use in production."
            className="mb-0"
          />

          <div className="inline-flex items-center gap-2 px-3.5 py-2 rounded-[8px] bg-gradient-to-r from-[#2F2F36] to-[#1E1E22] border-t border-white/30 border-b border-black/80 text-xs font-mono text-white font-bold self-start md:self-auto shrink-0 shadow-[0_8px_20px_rgba(0,0,0,0.7),0_0_18px_rgba(225,6,0,0.3)]">
            <Sparkles className="w-4 h-4 text-crimson animate-pulse" />
            <span>Target Role Focus: Full-Stack & Frontend SDE</span>
          </div>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category) => (
            <SkillGroup key={category.title} category={category} />
          ))}
        </div>
      </div>
    </section>
  );
};
