import React from "react";
import { cn } from "@/lib/utils";

interface MonogramProps {
  className?: string;
  size?: "sm" | "md" | "lg";
}

export const Monogram: React.FC<MonogramProps> = ({ className, size = "md" }) => {
  const sizeClasses = {
    sm: "w-8 h-8 text-[11px]",
    md: "w-10 h-10 text-xs",
    lg: "w-14 h-14 text-sm",
  };

  return (
    <div
      className={cn(
        "relative inline-flex items-center justify-center font-mono font-black tracking-tight select-none rounded-[8px]",
        "bg-gradient-to-b from-[#36363E] via-[#26262A] to-[#161619] border-t border-white/35 border-l border-white/10 border-r border-black/60 border-b border-black/90 shadow-[0_6px_16px_rgba(0,0,0,0.65),inset_0_1px_1px_rgba(255,255,255,0.25)] transition-all duration-200",
        "group-hover:border-crimson group-hover:shadow-[0_0_20px_rgba(225,6,0,0.55),inset_0_1px_1px_rgba(255,255,255,0.4)] group-hover:-translate-y-0.5",
        sizeClasses[size],
        className
      )}
    >
      {/* Top right Crimson indicator */}
      <span className="absolute top-[2px] right-[2px] w-1.5 h-1.5 bg-crimson rounded-[2px] shadow-[0_0_8px_#E10600] animate-pulse" />

      {/* Monogram letters */}
      <span className="relative z-10 flex items-center leading-none">
        <span className="text-white font-black drop-shadow">A</span>
        <span className="text-crimson font-black ml-[1px] drop-shadow-[0_0_6px_rgba(225,6,0,0.7)]">J</span>
      </span>
    </div>
  );
};
