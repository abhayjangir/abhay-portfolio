import React from "react";
import { ExperienceCompany } from "@/data/portfolio";
import { Building2, MapPin, CheckCircle2, Calendar, Sparkles } from "lucide-react";

interface ExperienceItemProps {
  experience: ExperienceCompany;
}

export const ExperienceItem: React.FC<ExperienceItemProps> = ({ experience }) => {
  return (
    <div className="rounded-[12px] bg-gradient-to-b from-[#26262C]/95 via-[#1E1E22]/95 to-[#141417]/95 border-t border-white/25 border-l border-white/10 border-r border-black/60 border-b border-black/80 shadow-[0_20px_45px_-10px_rgba(0,0,0,0.85),inset_0_1px_0_rgba(255,255,255,0.14)] p-6 sm:p-8 space-y-8">
      {/* Company Overview Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-silver/20 pb-6">
        <div>
          <div className="flex items-center gap-3.5 text-white">
            <div className="p-3 rounded-[8px] bg-gradient-to-b from-[#34343A] to-[#1A1A1E] text-crimson border-t border-white/25 border-b border-black/80 shadow-md">
              <Building2 className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-xl sm:text-2xl font-black tracking-tight text-white flex items-center gap-2.5 font-mono">
                <span>{experience.company}</span>
                <span className="w-2.5 h-2.5 rounded-full bg-crimson animate-pulse shadow-[0_0_8px_#E10600]" />
              </h3>
              <div className="flex items-center gap-1.5 text-xs text-silver mt-1 font-mono">
                <MapPin className="w-3.5 h-3.5 text-crimson" />
                <span>{experience.location}</span>
              </div>
            </div>
          </div>
        </div>

        {experience.progressionNote && (
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-[8px] bg-gradient-to-r from-[#2F2F36] to-[#1E1E22] border-t border-white/30 border-b border-black/80 text-xs font-mono text-white font-bold shadow-[0_6px_16px_rgba(0,0,0,0.7),0_0_15px_rgba(225,6,0,0.3)]">
            <Sparkles className="w-3.5 h-3.5 text-crimson animate-pulse" />
            <span>{experience.progressionNote}</span>
          </div>
        )}
      </div>

      {/* Roles Timeline inside the Company */}
      <div className="relative pl-6 sm:pl-8 space-y-10 before:absolute before:left-2 sm:before:left-3 before:top-3 before:bottom-3 before:w-[2px] before:bg-gradient-to-b before:from-crimson before:via-silver/30 before:to-transparent">
        {experience.roles.map((role) => (
          <div key={role.role} className="relative space-y-3.5">
            {/* 3D Timeline node */}
            <div
              className={`absolute -left-[31px] sm:-left-[39px] top-1 w-4 h-4 rounded-full border-2 bg-[#141418] flex items-center justify-center ${
                role.isCurrent
                  ? "border-crimson shadow-[0_0_12px_#E10600]"
                  : "border-silver/40"
              }`}
            >
              {role.isCurrent && (
                <div className="w-1.5 h-1.5 rounded-full bg-crimson animate-pulse" />
              )}
            </div>

            {/* Role Header */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
              <div>
                <div className="flex items-center gap-3">
                  <h4 className="text-lg sm:text-xl font-bold text-white font-mono">
                    {role.role}
                  </h4>
                  {role.isCurrent && (
                    <span className="px-2.5 py-0.5 rounded-[4px] text-[11px] font-mono uppercase font-bold bg-gradient-to-r from-crimson/25 to-crimson/10 text-crimson border border-crimson/50 shadow-[0_0_10px_rgba(225,6,0,0.25)]">
                      Current
                    </span>
                  )}
                </div>
                <div className="flex items-center gap-2 text-xs font-mono text-silver mt-1">
                  <span className="text-crimson font-bold">{role.type}</span>
                  <span className="text-silver/40">{"//"}</span>
                  <span className="flex items-center gap-1 text-silver/80">
                    <Calendar className="w-3.5 h-3.5 text-crimson" />
                    {role.period}
                  </span>
                </div>
              </div>
            </div>

            {/* Role Summary */}
            <p className="text-sm text-silver/90 leading-relaxed font-normal">
              {role.summary}
            </p>

            {/* Achievements & Responsibilities */}
            <ul className="space-y-2 pt-1">
              {role.achievements.map((item, aIdx) => (
                <li
                  key={aIdx}
                  className="flex items-start gap-2.5 text-xs sm:text-sm text-silver/90 leading-relaxed"
                >
                  <CheckCircle2 className="w-4 h-4 text-crimson shrink-0 mt-0.5" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            {/* Tech stack tags */}
            <div className="flex flex-wrap gap-2 pt-2">
              {role.technologies.map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1 text-xs font-mono rounded-[4px] bg-gradient-to-b from-[#2B2B31] to-[#161619] text-silver border-t border-white/15 border-b border-black/80 shadow-sm hover:border-crimson hover:text-white hover:-translate-y-0.5 transition-all"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
