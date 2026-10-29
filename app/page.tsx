import React from "react";
import { Hero } from "@/components/sections/Hero";
import { Metrics } from "@/components/sections/Metrics";
import { About } from "@/components/sections/About";
import { Skills } from "@/components/sections/Skills";
import { Experience } from "@/components/sections/Experience";
import { Projects } from "@/components/sections/Projects";
import { EngineeringApproach } from "@/components/sections/EngineeringApproach";
import { Education } from "@/components/sections/Education";
import { Contact } from "@/components/sections/Contact";
import { PORTFOLIO_DATA } from "@/data/portfolio";

export default function HomePage() {
  const { personal } = PORTFOLIO_DATA;

  return (
    <>
      {/* 1. Hero Section */}
      <Hero personal={personal} />

      {/* 2. Professional Metrics Strip */}
      <Metrics />

      {/* 3. About Me */}
      <About />

      {/* 4. Technical Skills Toolkit */}
      <Skills />

      {/* 5. Professional Experience Timeline */}
      <Experience />

      {/* 6. Selected Featured Projects & Case Studies */}
      <Projects />

      {/* 7. Engineering Approach & Principles */}
      <EngineeringApproach />

      {/* 8. Education */}
      <Education />

      {/* 9. Contact Section & Direct Communication */}
      <Contact />
    </>
  );
}

