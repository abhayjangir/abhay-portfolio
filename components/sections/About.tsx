import React from "react";
import { SectionHeading } from "@/ui/SectionHeading";
import { PORTFOLIO_DATA } from "@/data/portfolio";
import { Check, Shield, Wrench, HeartHandshake, Compass } from "lucide-react";

export const About: React.FC = () => {
  const { about } = PORTFOLIO_DATA;

  const principleIcons: Record<string, React.ReactNode> = {
    "Build for usability": <HeartHandshake className="w-5 h-5 text-crimson" />,
    "Keep systems maintainable": <Wrench className="w-5 h-5 text-silver" />,
    "Solve the actual problem": <Compass className="w-5 h-5 text-crimson" />,
    "Measure outcomes where possible": <Shield className="w-5 h-5 text-silver" />,
  };

  return (
    <section id="about" className="py-20 sm:py-28 relative bg-background overflow-hidden">
      {/* Ambient 3D glow */}
      <div className="absolute top-1/3 -left-20 w-[450px] h-[350px] bg-crimson/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeading
          eyebrow="Background & Philosophy"
          title={about.heading}
          description={about.lead}
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Left Column: Narrative paragraphs */}
          <div className="lg:col-span-7 space-y-4 text-sm sm:text-base leading-relaxed">
            {about.paragraphs.map((paragraph, idx) => (
              <div
                key={idx}
                className="bg-gradient-to-b from-[#26262C]/90 to-[#161619]/95 p-6 rounded-[8px] border-t border-white/20 border-l border-white/10 border-r border-black/60 border-b border-black/80 shadow-[0_12px_28px_rgba(0,0,0,0.7),inset_0_1px_0_rgba(255,255,255,0.12)] hover:border-silver/40 hover:-translate-y-0.5 transition-all duration-200"
              >
                <p className="text-silver/90 leading-relaxed font-normal">{paragraph}</p>
              </div>
            ))}

            {/* Quick highlight callout with rich 3D crimson glass styling */}
            <div className="p-6 rounded-[8px] bg-gradient-to-r from-crimson/15 via-[#232328] to-[#16161A] border-l-4 border-l-crimson border-t border-t-white/15 border-r border-r-black/60 border-b border-b-black/80 shadow-[0_12px_30px_rgba(0,0,0,0.8),0_0_20px_rgba(225,6,0,0.2)] flex items-start gap-4 mt-6">
              <div className="p-2 rounded-[6px] bg-gradient-to-b from-[#FF2B24] to-[#C00500] text-white shrink-0 mt-0.5 shadow-[0_4px_12px_rgba(225,6,0,0.5),inset_0_1px_0_rgba(255,255,255,0.4)]">
                <Check className="w-4 h-4" />
              </div>
              <p className="text-xs sm:text-sm text-white font-mono leading-relaxed">
                Committed to delivering high-performance frontends backed by cleanly architected APIs, with strict adherence to data governance (DPDP Act 2023) and business priorities.
              </p>
            </div>
          </div>

          {/* Right Column: 4 Core Principles */}
          <div className="lg:col-span-5 space-y-4">
            <h3 className="text-xs font-mono uppercase tracking-wider text-silver/70 font-bold flex items-center gap-2 mb-2">
              <span className="w-2 h-2 rounded-full bg-crimson animate-pulse shadow-[0_0_8px_#E10600]" />
              Core Engineering Principles
            </h3>

            {about.principles.map((principle) => (
              <div
                key={principle.title}
                className="p-5 sm:p-6 rounded-[8px] bg-gradient-to-b from-[#26262C]/90 to-[#161619]/95 border-t border-white/20 border-l border-white/10 border-r border-black/60 border-b border-black/80 shadow-[0_12px_28px_rgba(0,0,0,0.7),inset_0_1px_0_rgba(255,255,255,0.14)] hover:border-crimson/60 hover:shadow-[0_20px_45px_rgba(0,0,0,0.9),0_0_25px_rgba(225,6,0,0.3)] hover:-translate-y-1 transition-all duration-200 space-y-2 group"
              >
                <div className="flex items-center gap-3.5">
                  <div className="p-2.5 rounded-[6px] bg-gradient-to-b from-[#34343A] to-[#1A1A1E] border-t border-white/25 border-b border-black/80 shadow-md group-hover:border-crimson/60 transition-colors">
                    {principleIcons[principle.title]}
                  </div>
                  <h4 className="text-base font-bold text-white group-hover:text-crimson font-mono transition-colors">
                    {principle.title}
                  </h4>
                </div>
                <p className="text-xs sm:text-sm text-silver/80 leading-relaxed pl-1 font-normal">
                  {principle.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
