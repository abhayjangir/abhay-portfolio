import React from "react";
import { SectionHeading } from "@/ui/SectionHeading";
import { PORTFOLIO_DATA } from "@/data/portfolio";
import { GraduationCap, Calendar, MapPin, Award, BookOpen } from "lucide-react";

export const Education: React.FC = () => {
  const { education } = PORTFOLIO_DATA;

  return (
    <section id="education" className="py-20 sm:py-28 bg-surface-dark/95 relative border-t border-silver/20 overflow-hidden">
      {/* 3D ambient light */}
      <div className="absolute top-1/2 right-1/4 w-[450px] h-[300px] bg-crimson/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeading
          eyebrow="Academic Background"
          title="Education."
          description="Foundational computer science principles, software architecture theory, and algorithmic problem-solving."
        />

        <div className="max-w-3xl">
          {education.map((item) => (
            <div
              key={item.institution}
              className="p-6 sm:p-8 rounded-[12px] bg-gradient-to-b from-[#26262C]/95 via-[#1D1D21]/95 to-[#131316]/95 border-t border-white/25 border-l border-white/10 border-r border-black/60 border-b border-black/80 shadow-[0_20px_45px_-10px_rgba(0,0,0,0.85),inset_0_1px_0_rgba(255,255,255,0.14)] space-y-6 hover:border-crimson/60 hover:shadow-[0_28px_60px_-10px_rgba(0,0,0,0.95),0_0_30px_rgba(225,6,0,0.3)] hover:-translate-y-1 transition-all duration-300"
            >
              <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4">
                <div className="flex items-start gap-4">
                  <div className="p-3.5 rounded-[8px] bg-gradient-to-b from-[#34343A] to-[#1A1A1E] text-crimson border-t border-white/25 border-b border-black/80 shadow-md shrink-0">
                    <GraduationCap className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-xl sm:text-2xl font-bold text-white font-mono">
                      {item.degree}
                    </h3>
                    <div className="text-sm font-bold text-silver mt-1">
                      {item.institution}
                    </div>
                    <div className="flex flex-wrap items-center gap-3 text-xs font-mono text-silver/80 mt-2">
                      <span className="flex items-center gap-1">
                        <MapPin className="w-3.5 h-3.5 text-crimson" />
                        {item.location}
                      </span>
                      <span className="text-silver/40">{"//"}</span>
                      <span className="flex items-center gap-1">
                        <Calendar className="w-3.5 h-3.5 text-crimson" />
                        {item.period}
                      </span>
                    </div>
                  </div>
                </div>

                <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-[8px] bg-gradient-to-r from-[#2F2F36] to-[#1E1E22] border-t border-white/30 border-b border-black/80 text-xs font-mono self-start shadow-[0_6px_16px_rgba(0,0,0,0.7),0_0_12px_rgba(225,6,0,0.25)]">
                  <Award className="w-4 h-4 text-crimson animate-pulse" />
                  <span className="text-silver font-medium">GPA:</span>
                  <span className="font-black text-crimson text-sm">{item.gpa}</span>
                </div>
              </div>

              <div className="pt-4 border-t border-silver/15 space-y-2.5">
                <h4 className="text-xs font-mono uppercase tracking-wider text-silver font-bold flex items-center gap-2">
                  <BookOpen className="w-3.5 h-3.5 text-crimson" />
                  Key Coursework & Foundational Competencies
                </h4>
                <ul className="space-y-2 text-xs sm:text-sm text-silver/90 leading-relaxed font-normal">
                  {item.highlights.map((highlight, idx) => (
                    <li key={idx} className="flex items-start gap-2.5">
                      <div className="w-1.5 h-1.5 rounded-full bg-crimson shrink-0 mt-2 shadow-[0_0_6px_#E10600]" />
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
