"use client";

import React, { useState } from "react";
import { SectionHeading } from "@/ui/SectionHeading";
import { ProjectCard } from "@/ui/ProjectCard";
import { ProjectModal } from "@/ui/ProjectModal";
import { PORTFOLIO_DATA, ProjectCaseStudy } from "@/data/portfolio";

export const Projects: React.FC = () => {
  const { projects } = PORTFOLIO_DATA;
  const [selectedProject, setSelectedProject] = useState<ProjectCaseStudy | null>(null);

  return (
    <section id="projects" className="py-20 sm:py-28 bg-surface-dark relative border-t border-silver/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Portfolio Highlights"
          title="Selected work."
          description="Case studies highlighting full-stack web application development, machine learning API integration, and distributed real-time data telemetry."
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {projects.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
              onOpenModal={(p) => setSelectedProject(p)}
            />
          ))}
        </div>
      </div>

      {/* Expandable Case Study Deep Dive Modal */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  );
};

