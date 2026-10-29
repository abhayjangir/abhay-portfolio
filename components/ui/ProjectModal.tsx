"use client";

import React, { useEffect } from "react";
import { ProjectCaseStudy } from "@/data/portfolio";
import { X, CheckCircle2, Layers, Cpu, AlertCircle, ArrowUpRight } from "lucide-react";
import { Button } from "./Button";

interface ProjectModalProps {
  project: ProjectCaseStudy | null;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };

    if (project) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    }

    return () => {
      document.body.style.overflow = "unset";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="case-study-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-8 bg-black/85 backdrop-blur-xl animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-3xl max-h-[90vh] overflow-y-auto bg-gradient-to-b from-[#25252B] to-[#111114] border-t border-white/25 border-l border-white/10 border-r border-black/60 border-b border-black/90 rounded-[14px] p-6 sm:p-8 shadow-[0_30px_80px_rgba(0,0,0,0.95),0_0_50px_rgba(225,6,0,0.25)] space-y-6 text-silver"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-start justify-between gap-4 border-b border-silver/20 pb-5">
          <div className="space-y-1.5">
            <span className="text-xs font-mono text-crimson uppercase tracking-wider font-extrabold">
              {project.category}
            </span>
            <h3 id="case-study-title" className="text-2xl sm:text-3xl font-black text-white tracking-tight font-mono">
              {project.title}
            </h3>
            <p className="text-sm text-silver/90 font-normal">
              {project.tagline}
            </p>
          </div>
          <button
            onClick={onClose}
            aria-label="Close modal"
            className="p-2 text-silver hover:text-white rounded-[6px] hover:bg-white/10 border border-silver/20 transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-crimson hover:-translate-y-0.5"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Reported Evaluation Metric Highlight */}
        <div className="p-5 rounded-[8px] bg-gradient-to-r from-crimson/20 via-[#26262C] to-[#161619] border border-crimson/50 shadow-[0_10px_25px_rgba(225,6,0,0.25)] flex items-start gap-4">
          <div className="p-2.5 rounded-[6px] bg-gradient-to-b from-[#FF2B24] to-[#C00500] text-white shrink-0 mt-0.5 shadow-[0_4px_12px_rgba(225,6,0,0.5),inset_0_1px_0_rgba(255,255,255,0.4)]">
            <Cpu className="w-5 h-5" />
          </div>
          <div className="space-y-1 text-xs">
            <div className="flex items-baseline gap-2">
              <span className="font-black text-crimson text-base font-mono tracking-tight drop-shadow-[0_0_8px_rgba(225,6,0,0.4)]">
                {project.reportedResult.metric}
              </span>
              <span className="text-white font-mono font-bold">
                — {project.reportedResult.context}
              </span>
            </div>
            {project.reportedResult.disclaimer && (
              <p className="text-[11px] text-silver/80 flex items-center gap-1.5 pt-0.5 font-mono">
                <AlertCircle className="w-3.5 h-3.5 text-crimson shrink-0" />
                {project.reportedResult.disclaimer}
              </p>
            )}
          </div>
        </div>

        {/* Technologies */}
        <div className="space-y-2">
          <h4 className="text-xs font-mono uppercase tracking-wider text-silver font-bold">
            Technologies & Tools
          </h4>
          <div className="flex flex-wrap gap-2">
            {project.technologies.map((tech) => (
              <span
                key={tech}
                className="px-3 py-1 text-xs rounded-[4px] bg-gradient-to-b from-[#2A2A30] to-[#151518] text-white border-t border-white/15 border-b border-black/80 font-mono font-medium shadow-sm"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* System Architecture */}
        <div className="space-y-3">
          <h4 className="text-xs font-mono uppercase tracking-wider text-silver font-bold flex items-center gap-2">
            <Layers className="w-4 h-4 text-crimson" />
            System Architecture
          </h4>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5 text-xs">
            {project.architecture.frontend && (
              <div className="p-4 rounded-[8px] bg-gradient-to-b from-[#24242A] to-[#141416] border-t border-white/15 border-b border-black/80 shadow-md space-y-1">
                <span className="text-xs font-mono text-crimson font-bold uppercase tracking-wider">
                  Frontend Client
                </span>
                <p className="text-silver/90 text-xs leading-relaxed pt-0.5 font-normal">
                  {project.architecture.frontend}
                </p>
              </div>
            )}
            {project.architecture.backend && (
              <div className="p-4 rounded-[8px] bg-gradient-to-b from-[#24242A] to-[#141416] border-t border-white/15 border-b border-black/80 shadow-md space-y-1">
                <span className="text-xs font-mono text-white font-bold uppercase tracking-wider">
                  Backend & REST API
                </span>
                <p className="text-silver/90 text-xs leading-relaxed pt-0.5 font-normal">
                  {project.architecture.backend}
                </p>
              </div>
            )}
            {project.architecture.dataProcessing && (
              <div className="p-4 rounded-[8px] bg-gradient-to-b from-[#24242A] to-[#141416] border-t border-white/15 border-b border-black/80 shadow-md space-y-1">
                <span className="text-xs font-mono text-crimson font-bold uppercase tracking-wider">
                  Distributed Processing
                </span>
                <p className="text-silver/90 text-xs leading-relaxed pt-0.5 font-normal">
                  {project.architecture.dataProcessing}
                </p>
              </div>
            )}
            {project.architecture.visualization && (
              <div className="p-4 rounded-[8px] bg-gradient-to-b from-[#24242A] to-[#141416] border-t border-white/15 border-b border-black/80 shadow-md space-y-1">
                <span className="text-xs font-mono text-white font-bold uppercase tracking-wider">
                  Power BI Telemetry
                </span>
                <p className="text-silver/90 text-xs leading-relaxed pt-0.5 font-normal">
                  {project.architecture.visualization}
                </p>
              </div>
            )}
          </div>
        </div>

        {/* Engineering Contributions */}
        <div className="space-y-3">
          <h4 className="text-xs font-mono uppercase tracking-wider text-silver font-bold flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-crimson" />
            Engineering Contributions
          </h4>
          <ul className="space-y-2">
            {project.myContributions.map((contrib, idx) => (
              <li
                key={idx}
                className="flex items-start gap-2.5 text-xs sm:text-sm text-silver/90 leading-relaxed font-normal"
              >
                <div className="w-1.5 h-1.5 rounded-full bg-crimson shrink-0 mt-2 shadow-[0_0_6px_#E10600]" />
                <span>{contrib}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Action Bar */}
        <div className="flex flex-wrap items-center justify-between gap-4 pt-4 border-t border-silver/20">
          <div className="text-xs text-silver/70 font-mono flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-crimson animate-pulse shadow-[0_0_6px_#E10600]" />
            Verified resume case study specification
          </div>
          <div className="flex items-center gap-3">
            {project.links?.githubUrl && (
              <Button
                variant="outline"
                size="sm"
                href={project.links.githubUrl}
                target="_blank"
                rightIcon={<ArrowUpRight className="w-3.5 h-3.5" />}
              >
                Repository
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
                Live Application
              </Button>
            )}
            <Button variant="secondary" size="sm" onClick={onClose}>
              Close
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};
