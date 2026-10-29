"use client";

import React from "react";
import { ProjectCaseStudy } from "@/data/portfolio";
import { ArrowUpRight, Activity, BarChart2 } from "lucide-react";
import { Button } from "./Button";

interface ProjectCardProps {
  project: ProjectCaseStudy;
  onOpenModal: (project: ProjectCaseStudy) => void;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ project, onOpenModal }) => {
  const isHeartDisease = project.id === "heart-disease-prediction";

  return (
    <div className="group rounded-[12px] bg-gradient-to-b from-[#26262C]/95 via-[#1D1D21]/95 to-[#131316]/95 border-t border-white/25 border-l border-white/10 border-r border-black/60 border-b border-black/80 shadow-[0_20px_45px_-10px_rgba(0,0,0,0.85),inset_0_1px_0_rgba(255,255,255,0.14)] overflow-hidden hover:border-crimson/60 hover:shadow-[0_28px_60px_-10px_rgba(0,0,0,0.95),0_0_35px_rgba(225,6,0,0.35)] hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between">
      {/* UI Visual Header */}
      <div className="relative h-56 sm:h-64 bg-gradient-to-b from-[#202026] to-[#121215] p-5 overflow-hidden border-b border-white/10 flex flex-col justify-between select-none">
        {/* Subtle grid pattern background */}
        <div
          className="absolute inset-0 opacity-40 pointer-events-none"
          style={{
            backgroundImage:
              "radial-gradient(circle at 1px 1px, rgba(192, 192, 192, 0.18) 1px, transparent 0)",
            backgroundSize: "24px 24px",
          }}
        />

        {/* Top bar with badges */}
        <div className="relative z-10 flex items-center justify-between">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-[6px] bg-gradient-to-b from-[#323238] to-[#1C1C20] border-t border-white/25 border-b border-black/80 text-xs font-mono text-silver shadow-md">
            <span
              className={`w-2 h-2 rounded-full ${
                isHeartDisease ? "bg-crimson animate-pulse shadow-[0_0_8px_#E10600]" : "bg-silver animate-pulse"
              }`}
            />
            <span className="font-bold text-white tracking-wide">
              {isHeartDisease ? "FastAPI · Next.js" : "Apache Spark · Power BI"}
            </span>
          </div>

          <div className="px-3 py-1.5 rounded-[6px] bg-gradient-to-r from-crimson/25 to-crimson/10 border border-crimson/50 text-[11px] font-mono font-bold text-crimson shadow-[0_0_12px_rgba(225,6,0,0.3)]">
            {project.reportedResult.metric}
          </div>
        </div>

        {/* Project Specific Graphic Composition */}
        {isHeartDisease ? (
          <div className="relative z-10 my-auto py-1">
            <div className="p-4 rounded-[8px] bg-gradient-to-b from-[#2B2B32] to-[#161619] border-t border-white/20 border-b border-black/80 shadow-[0_8px_20px_rgba(0,0,0,0.7)] space-y-2.5">
              <div className="flex items-center justify-between text-xs">
                <div className="flex items-center gap-2 text-white font-mono font-bold">
                  <Activity className="w-4 h-4 text-crimson animate-pulse" />
                  <span>Risk Parameter Evaluation</span>
                </div>
                <span className="text-[10px] font-mono text-crimson bg-crimson/15 px-2.5 py-0.5 rounded-[4px] border border-crimson/40 font-bold shadow-sm">
                  Status: 200 OK
                </span>
              </div>

              {/* Heart rate & telemetry waveform SVG */}
              <div className="h-9 w-full overflow-hidden flex items-center">
                <svg
                  className="w-full h-8 text-crimson stroke-current drop-shadow-[0_0_6px_rgba(225,6,0,0.8)]"
                  viewBox="0 0 320 40"
                  fill="none"
                >
                  <path
                    d="M0 20 L40 20 L50 20 L58 8 L65 34 L72 14 L78 24 L85 20 L150 20 L160 20 L168 5 L175 36 L182 12 L188 26 L195 20 L270 20 L280 20 L288 10 L295 32 L302 16 L308 22 L320 20"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <circle cx="168" cy="5" r="3" fill="#FF2B24" />
                  <circle cx="288" cy="10" r="3" fill="#FF2B24" />
                </svg>
              </div>

              <div className="grid grid-cols-3 gap-2 pt-2 border-t border-silver/15 text-[11px] font-mono text-silver">
                <div>
                  <span className="block text-[9px] uppercase tracking-wider text-silver/60">Accuracy</span>
                  <span className="text-crimson font-black text-xs">92%</span>
                </div>
                <div>
                  <span className="block text-[9px] uppercase tracking-wider text-silver/60">Latency</span>
                  <span className="text-white font-bold">&lt; 45ms</span>
                </div>
                <div>
                  <span className="block text-[9px] uppercase tracking-wider text-silver/60">Contract</span>
                  <span className="text-white font-bold">FastAPI JSON</span>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div className="relative z-10 my-auto py-1">
            <div className="p-4 rounded-[8px] bg-gradient-to-b from-[#2B2B32] to-[#161619] border-t border-white/20 border-b border-black/80 shadow-[0_8px_20px_rgba(0,0,0,0.7)] space-y-2.5">
              <div className="flex items-center justify-between text-xs">
                <div className="flex items-center gap-2 text-white font-mono font-bold">
                  <BarChart2 className="w-4 h-4 text-silver" />
                  <span>Spark Distributed Pipeline</span>
                </div>
                <span className="text-[10px] font-mono text-white bg-gradient-to-b from-[#34343A] to-[#1E1E22] px-2.5 py-0.5 rounded-[4px] border-t border-white/20 border-b border-black/80 font-bold shadow-sm">
                  ETL Stream Active
                </span>
              </div>

              {/* Data pipeline flow representation */}
              <div className="grid grid-cols-3 gap-2 text-center text-[10px] font-mono">
                <div className="p-2 rounded-[6px] bg-gradient-to-b from-[#24242A] to-[#141416] border-t border-white/15 border-b border-black/80 shadow-sm">
                  <span className="block text-silver/60 text-[9px]">Ingestion</span>
                  <span className="text-white font-bold">Multi-Source</span>
                </div>
                <div className="p-2 rounded-[6px] bg-gradient-to-b from-crimson/25 to-crimson/10 border border-crimson/50 shadow-[0_0_10px_rgba(225,6,0,0.2)]">
                  <span className="block text-crimson text-[9px] font-bold">Spark Cluster</span>
                  <span className="text-white font-bold">Transforms</span>
                </div>
                <div className="p-2 rounded-[6px] bg-gradient-to-b from-[#24242A] to-[#141416] border-t border-white/15 border-b border-black/80 shadow-sm">
                  <span className="block text-silver/60 text-[9px]">Power BI</span>
                  <span className="text-crimson font-black">Visual KPI</span>
                </div>
              </div>

              <div className="flex items-center justify-between pt-1 border-t border-silver/15 text-[11px] font-mono text-silver">
                <span>Distributed Aggregations</span>
                <span className="text-white font-bold">Interactive Reporting</span>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Card Content Body */}
      <div className="p-6 sm:p-8 flex flex-col justify-between flex-1 space-y-6">
        <div className="space-y-3">
          <div className="flex items-center gap-2">
            <span className="text-xs font-mono uppercase tracking-wider text-crimson font-extrabold">
              {project.category}
            </span>
          </div>

          <h3 className="text-xl sm:text-2xl font-black text-white tracking-tight group-hover:text-crimson font-mono transition-colors">
            {project.title}
          </h3>

          <p className="text-sm text-silver/90 leading-relaxed line-clamp-3 font-normal">
            {project.description}
          </p>

          {/* Reported result highlight with 3D glass treatment */}
          <div className="pt-1">
            <span className="inline-flex items-center gap-2 text-xs font-mono text-white bg-gradient-to-r from-crimson/20 via-[#26262C] to-[#18181C] border border-crimson/40 px-3.5 py-1.5 rounded-[6px] shadow-[0_0_12px_rgba(225,6,0,0.25)]">
              <span className="w-2 h-2 rounded-full bg-crimson animate-pulse shadow-[0_0_6px_#E10600]" />
              <strong className="text-crimson font-black">
                {project.reportedResult.metric}:
              </strong>{" "}
              <span className="text-silver/90">{project.reportedResult.context}</span>
            </span>
          </div>
        </div>

        {/* Tech tags and action footer */}
        <div className="space-y-4 pt-3 border-t border-silver/20">
          <div className="flex flex-wrap gap-2">
            {project.technologies.map((tech) => (
              <span
                key={tech}
                className="px-2.5 py-1 rounded-[4px] text-[11px] font-mono bg-gradient-to-b from-[#2A2A30] to-[#151518] text-silver border-t border-white/15 border-b border-black/80 shadow-sm"
              >
                {tech}
              </span>
            ))}
          </div>

          <div className="flex items-center justify-between gap-3 pt-1">
            <Button
              variant="secondary"
              size="sm"
              onClick={() => onOpenModal(project)}
              rightIcon={<ArrowUpRight className="w-3.5 h-3.5" />}
              className="w-full sm:w-auto"
            >
              View Case Study
            </Button>

            {project.links?.githubUrl && (
              <Button
                variant="outline"
                size="sm"
                href={project.links.githubUrl}
                target="_blank"
                rightIcon={<ArrowUpRight className="w-3.5 h-3.5" />}
              >
                GitHub
              </Button>
            )}
            {project.links?.liveUrl && (
              <Button
                variant="primary"
                size="sm"
                href={project.links.liveUrl}
                target="_blank"
                rightIcon={<ArrowUpRight className="w-3.5 h-3.5" />}
              >
                Live Demo
              </Button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
