import React from "react";
import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  className?: string;
}

export const SectionHeading: React.FC<SectionHeadingProps> = ({
  eyebrow,
  title,
  description,
  align = "left",
  className,
}) => {
  return (
    <div
      className={cn(
        "space-y-3 mb-12 sm:mb-16",
        align === "center" ? "text-center mx-auto max-w-2xl" : "max-w-2xl",
        className
      )}
    >
      {eyebrow && (
        <div
          className={cn(
            "inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-[6px] text-xs font-mono font-bold tracking-wider uppercase",
            "bg-gradient-to-b from-[#323238] to-[#1A1A1E] text-silver border-t border-white/25 border-b border-black/80 shadow-[0_4px_14px_rgba(0,0,0,0.6),inset_0_1px_0_rgba(255,255,255,0.18)] select-none"
          )}
        >
          {/* Crimson #E10600 diode */}
          <span className="w-2 h-2 rounded-full bg-crimson shadow-[0_0_8px_#E10600] animate-pulse" />
          <span className="tracking-widest text-white/90">{eyebrow}</span>
        </div>
      )}
      <h2 className="text-3xl sm:text-4xl lg:text-[40px] font-black tracking-tight text-white leading-tight">
        {title}
      </h2>
      {description && (
        <p className="text-sm sm:text-base text-silver/90 leading-relaxed font-normal">
          {description}
        </p>
      )}
    </div>
  );
};
