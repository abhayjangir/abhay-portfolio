import React from "react";
import { PORTFOLIO_DATA } from "@/data/portfolio";
import { CheckCircle2, TrendingDown, Layers, Server } from "lucide-react";

export const Metrics: React.FC = () => {
  const { metrics } = PORTFOLIO_DATA;

  const metricIcons: Record<string, React.ReactNode> = {
    features: <Layers className="w-5 h-5 text-crimson" />,
    endpoints: <Server className="w-5 h-5 text-silver" />,
    "accounts-reduction": <TrendingDown className="w-5 h-5 text-crimson" />,
    "radiology-reduction": <TrendingDown className="w-5 h-5 text-silver" />,
  };

  return (
    <section id="metrics" className="py-14 border-y border-silver/20 bg-surface-dark/95 relative overflow-hidden">
      {/* Background 3D light glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[250px] bg-crimson/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {metrics.map((item, idx) => {
            const isHighlight = idx === 0 || idx === 2;

            return (
              <div
                key={item.id}
                className="relative p-6 sm:p-7 rounded-[10px] bg-gradient-to-b from-[#28282E]/95 via-[#1E1E22]/95 to-[#141417]/95 border-t border-white/25 border-l border-white/10 border-r border-black/60 border-b border-black/80 shadow-[0_16px_36px_-10px_rgba(0,0,0,0.85),inset_0_1px_1px_rgba(255,255,255,0.16)] hover:shadow-[0_24px_50px_-10px_rgba(0,0,0,0.95),0_0_35px_rgba(225,6,0,0.35),inset_0_1px_1px_rgba(255,255,255,0.3)] hover:-translate-y-1.5 hover:border-crimson/60 transition-all duration-200 space-y-4 group"
              >
                {/* Header Line */}
                <div className="flex items-center justify-between">
                  <span className="p-2.5 rounded-[8px] bg-gradient-to-b from-[#34343A] to-[#1A1A1E] border-t border-white/25 border-b border-black/80 shadow-md group-hover:border-crimson/60 transition-colors">
                    {metricIcons[item.id] || (
                      <CheckCircle2 className="w-5 h-5 text-crimson" />
                    )}
                  </span>
                  <span className="inline-flex items-center gap-1.5 text-[11px] font-mono uppercase tracking-wider text-crimson bg-gradient-to-r from-crimson/20 to-crimson/10 border border-crimson/40 px-2.5 py-0.5 rounded-[4px] font-bold shadow-[0_0_12px_rgba(225,6,0,0.25)]">
                    <span className="w-1.5 h-1.5 rounded-full bg-crimson animate-pulse" />
                    Verified
                  </span>
                </div>

                {/* Big Metric Display with Rich 3D presence */}
                <div>
                  <div
                    className={`text-3xl sm:text-4xl lg:text-[42px] font-black font-mono tracking-tight leading-none ${
                      isHighlight
                        ? "bg-gradient-to-r from-[#FF332C] to-[#E10600] bg-clip-text text-transparent drop-shadow-[0_2px_15px_rgba(225,6,0,0.5)]"
                        : "text-white group-hover:text-silver transition-colors drop-shadow-md"
                    }`}
                  >
                    {item.value}
                  </div>
                  <h3 className="text-sm font-bold text-white mt-2 tracking-tight font-mono">
                    {item.label}
                  </h3>
                </div>

                {/* Description */}
                <p className="text-xs text-silver/80 leading-relaxed pt-3 border-t border-silver/15">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
