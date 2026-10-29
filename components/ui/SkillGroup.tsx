import React from "react";
import { SkillCategory } from "@/data/portfolio";
import {
  Code2,
  Layout,
  Server,
  Database,
  Terminal,
  Activity,
  ShieldCheck,
  BarChart3,
} from "lucide-react";
import { cn } from "@/lib/utils";

const iconMap: Record<string, React.ElementType> = {
  Code2,
  Layout,
  Server,
  Database,
  Terminal,
  Activity,
  ShieldCheck,
  BarChart3,
};

interface SkillGroupProps {
  category: SkillCategory;
}

export const SkillGroup: React.FC<SkillGroupProps> = ({ category }) => {
  const IconComponent = iconMap[category.icon] || Code2;

  return (
    <div className="relative group rounded-[10px] p-6 sm:p-7 bg-gradient-to-b from-[#26262C]/95 via-[#1D1D21]/95 to-[#141417]/95 border-t border-white/25 border-l border-white/10 border-r border-black/60 border-b border-black/80 shadow-[0_16px_36px_-10px_rgba(0,0,0,0.85),inset_0_1px_0_rgba(255,255,255,0.14)] hover:shadow-[0_24px_50px_-10px_rgba(0,0,0,0.95),0_0_30px_rgba(225,6,0,0.3)] hover:-translate-y-1.5 hover:border-crimson/60 transition-all duration-200">
      {/* Category header */}
      <div className="flex items-start gap-3.5 mb-4">
        <div className="p-2.5 rounded-[8px] bg-gradient-to-b from-[#34343A] to-[#1A1A1E] border-t border-white/25 border-b border-black/80 shadow-md text-crimson group-hover:border-crimson/60 transition-colors">
          <IconComponent className="w-5 h-5" />
        </div>
        <div>
          <h3 className="text-base font-bold text-white tracking-tight group-hover:text-crimson font-mono transition-colors">
            {category.title}
          </h3>
          <p className="text-xs text-silver/80 mt-0.5 line-clamp-1">
            {category.description}
          </p>
        </div>
      </div>

      {/* Skills list */}
      <div className="flex flex-wrap gap-2 pt-1">
        {category.skills.map((skill) => {
          const isCoreSpecialization =
            skill.name === "React.js" ||
            skill.name === "TypeScript" ||
            skill.name === "JavaScript (ES6+)" ||
            skill.name === "Next.js" ||
            skill.name === "Python" ||
            skill.name === "Django";

          return (
            <div
              key={skill.name}
              className={cn(
                "inline-flex items-center gap-1.5 px-3 py-1.5 rounded-[6px] text-xs font-mono transition-all duration-150 select-none",
                isCoreSpecialization
                  ? "bg-gradient-to-r from-crimson/30 via-crimson/20 to-crimson/10 text-white font-bold border border-crimson/60 shadow-[0_4px_12px_rgba(225,6,0,0.35),inset_0_1px_0_rgba(255,255,255,0.2)] hover:border-crimson hover:shadow-[0_6px_16px_rgba(225,6,0,0.5)] hover:-translate-y-0.5"
                  : skill.isPrimary
                  ? "bg-gradient-to-b from-[#2C2C32] to-[#1A1A1E] text-white border-t border-white/20 border-b border-black/80 shadow-sm hover:border-silver/50 hover:-translate-y-0.5 font-medium"
                  : "bg-gradient-to-b from-[#242428] to-[#141416] text-silver/80 border border-silver/15 hover:text-white hover:border-silver/40 hover:-translate-y-0.5"
              )}
            >
              {isCoreSpecialization && (
                <span className="w-1.5 h-1.5 rounded-full bg-crimson shrink-0 animate-pulse shadow-[0_0_6px_#E10600]" />
              )}
              <span>{skill.name}</span>
              {skill.tag && (
                <span
                  className={cn(
                    "text-[10px] uppercase font-bold tracking-wider px-1.5 py-0.2 rounded-[3px]",
                    isCoreSpecialization
                      ? "bg-gradient-to-r from-crimson to-crimson-deep text-white shadow-sm"
                      : "bg-[#18181C] text-silver/80 border border-silver/20"
                  )}
                >
                  {skill.tag}
                </span>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};
