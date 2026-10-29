"use client";

import React, { useState } from "react";
import { Button } from "@/ui/Button";
import { Monogram } from "@/ui/Monogram";
import {
  ArrowDown,
  ArrowRight,
  Download,
  Mail,
  Activity,
  CheckCircle2,
} from "lucide-react";

interface HeroProps {
  personal: {
    name: string;
    title: string;
    location: string;
    resumeUrl: string;
    resumeFilename: string;
    technologiesLine: string[];
  };
}

export const Hero: React.FC<HeroProps> = ({ personal }) => {
  const [activeTab, setActiveTab] = useState<"react" | "api">("react");

  return (
    <section
      id="hero"
      className="relative min-h-[92vh] flex items-center pt-28 pb-16 sm:pt-36 sm:pb-24 overflow-hidden bg-background"
    >
      {/* Rich 3D Atmospheric Lighting */}
      <div className="absolute -top-24 right-1/4 w-[600px] h-[450px] bg-crimson/20 rounded-full blur-[140px] pointer-events-none -z-10" />
      <div className="absolute top-1/2 left-0 w-[450px] h-[350px] bg-silver/10 rounded-full blur-[130px] pointer-events-none -z-10" />
      <div className="absolute -bottom-20 right-10 w-[500px] h-[350px] bg-crimson/15 rounded-full blur-[120px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Typography, Spec Strip & CTAs */}
          <div className="lg:col-span-7 space-y-7">
            {/* 3D Tactile Status Capsule */}
            <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-[6px] bg-gradient-to-b from-[#323238] to-[#1C1C20] border-t border-white/25 border-b border-black/60 text-xs font-mono text-silver shadow-[0_4px_16px_rgba(0,0,0,0.6),inset_0_1px_0_rgba(255,255,255,0.18)]">
              <span className="w-2 h-2 rounded-full bg-crimson animate-pulse shadow-[0_0_10px_#E10600]" />
              <span className="font-bold text-white tracking-wider">SOFTWARE ENGINEER</span>
              <span className="text-silver/40">{"//"}</span>
              <span className="text-silver/90 tracking-wide font-medium">GURUGRAM, INDIA</span>
            </div>

            {/* Main Headline with Rich 3D Chromatic Depth */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-white leading-[1.12]">
              Building{" "}
              <span className="bg-gradient-to-r from-[#FF3A33] via-[#E10600] to-[#A00000] bg-clip-text text-transparent drop-shadow-[0_4px_30px_rgba(225,6,0,0.55)]">
                thoughtful digital experiences
              </span>{" "}
              with code.
            </h1>

            {/* Supporting Paragraph */}
            <p className="text-base sm:text-lg text-silver/90 leading-relaxed max-w-2xl font-normal">
              I&apos;m Abhay, a Software Development Engineer who builds responsive frontend experiences, full-stack applications, and reliable API integrations that solve real business problems.
            </p>

            {/* Three Calls to Action with 3D tactile buttons */}
            <div className="flex flex-wrap items-center gap-3.5 pt-2">
              <Button
                variant="primary"
                size="md"
                href="#projects"
                rightIcon={<ArrowRight className="w-4 h-4" />}
              >
                Explore My Work
              </Button>

              <Button
                variant="secondary"
                size="md"
                href="#contact"
                leftIcon={<Mail className="w-4 h-4" />}
              >
                Let&apos;s Talk
              </Button>

              <Button
                variant="outline"
                size="md"
                href={personal.resumeUrl}
                download={personal.resumeFilename}
                leftIcon={<Download className="w-4 h-4" />}
              >
                Download Resume
              </Button>
            </div>

            {/* Technology Line with 3D tactile chips */}
            <div className="pt-4 border-t border-silver/20 space-y-2.5">
              <div className="flex items-center justify-between max-w-md">
                <span className="text-[11px] font-mono uppercase tracking-wider text-silver/70 font-semibold">
                  CORE SPECIALIZATION
                </span>
                <span className="text-[11px] font-mono text-white font-bold bg-gradient-to-r from-crimson to-crimson-deep px-3 py-0.5 rounded-[4px] border-t border-white/30 border-b border-black/60 shadow-[0_4px_12px_rgba(225,6,0,0.45)]">
                  15+ Full-Stack Features
                </span>
              </div>
              <div className="flex flex-wrap items-center gap-2 text-xs font-mono">
                {personal.technologiesLine.map((tech, idx) => (
                  <React.Fragment key={tech}>
                    <span className="px-3 py-1 rounded-[6px] bg-gradient-to-b from-[#2E2E34] to-[#1A1A1E] text-silver border-t border-white/20 border-b border-black/80 font-medium shadow-[0_4px_12px_rgba(0,0,0,0.5),inset_0_1px_0_rgba(255,255,255,0.12)] hover:border-crimson hover:text-white transition-all hover:-translate-y-0.5">
                      {tech}
                    </span>
                    {idx < personal.technologiesLine.length - 1 && (
                      <span className="text-silver/40">{"//"}</span>
                    )}
                  </React.Fragment>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: High-End 3D Developer Workstation Stage */}
          <div className="lg:col-span-5 relative perspective-1400 py-6">
            {/* 3D Ground Reflection Aura */}
            <div className="absolute -bottom-8 left-6 right-6 h-12 bg-gradient-to-r from-transparent via-crimson/30 to-transparent blur-2xl pointer-events-none transform rotateX(80deg)" />

            {/* 3D Tilted Console Container */}
            <div className="relative mx-auto max-w-lg lg:max-w-none transition-transform duration-500 ease-out preserve-3d [transform:rotateX(7deg)_rotateY(-10deg)_rotateZ(1.5deg)] hover:[transform:rotateX(0deg)_rotateY(0deg)_rotateZ(0deg)]">
              {/* Floating 3D Satellite Badge 1 (Top-Right) */}
              <div className="absolute -top-5 -right-4 z-30 px-3.5 py-1.5 rounded-[8px] bg-gradient-to-r from-[#323238] to-[#1E1E22] border-t border-white/35 border-b border-black/80 shadow-[0_15px_35px_-5px_rgba(0,0,0,0.9),0_0_20px_rgba(225,6,0,0.4)] flex items-center gap-2 animate-float-subtle">
                <span className="w-2 h-2 rounded-full bg-crimson animate-pulse shadow-[0_0_8px_#E10600]" />
                <span className="text-[11px] font-mono font-bold text-white tracking-wide">
                  U4RAD · Production Active
                </span>
              </div>

              {/* Main 3D Console Glass Chassis */}
              <div className="rounded-[12px] bg-gradient-to-b from-[#26262B] to-[#121215] border-t border-white/25 border-l border-white/10 border-r border-black/60 border-b border-black/90 shadow-[0_30px_70px_-15px_rgba(0,0,0,0.95),0_0_40px_-5px_rgba(225,6,0,0.25),inset_0_1px_1px_rgba(255,255,255,0.22)] overflow-hidden">
                {/* Console Window Top Bar */}
                <div className="flex items-center justify-between px-4 py-3 bg-gradient-to-b from-[#2A2A30] to-[#1C1C20] border-b border-white/10 select-none text-xs font-mono">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-gradient-to-b from-[#FF4D45] to-[#E10600] shadow-[0_0_6px_#E10600]" />
                    <div className="w-3 h-3 rounded-full bg-gradient-to-b from-[#E0E0E0] to-[#A0A0A0]" />
                    <div className="w-3 h-3 rounded-full bg-gradient-to-b from-[#707075] to-[#404045]" />
                    <span className="text-silver font-bold ml-2 text-[11px] tracking-wide">
                      production/u4rad
                    </span>
                  </div>

                  {/* 3D Tab Switchers */}
                  <div className="flex items-center bg-[#101013] p-0.5 rounded-[6px] border border-white/10 shadow-inner">
                    <button
                      onClick={() => setActiveTab("react")}
                      className={`px-3 py-1 rounded-[4px] text-[11px] font-mono transition-all ${
                        activeTab === "react"
                          ? "bg-gradient-to-b from-[#FF2B24] to-[#C00500] text-white font-bold shadow-[0_2px_8px_rgba(225,6,0,0.5),inset_0_1px_0_rgba(255,255,255,0.4)]"
                          : "text-silver hover:text-white"
                      }`}
                    >
                      FeatureView.tsx
                    </button>
                    <button
                      onClick={() => setActiveTab("api")}
                      className={`px-3 py-1 rounded-[4px] text-[11px] font-mono transition-all ${
                        activeTab === "api"
                          ? "bg-gradient-to-b from-[#FF2B24] to-[#C00500] text-white font-bold shadow-[0_2px_8px_rgba(225,6,0,0.5),inset_0_1px_0_rgba(255,255,255,0.4)]"
                          : "text-silver hover:text-white"
                      }`}
                    >
                      views.py
                    </button>
                  </div>
                </div>

                {/* Code Editor Body */}
                <div className="p-5 font-mono text-[11px] leading-[1.7] overflow-x-auto bg-[#131317]/95 text-silver">
                  {activeTab === "react" ? (
                    <div className="space-y-1">
                      <p className="text-silver/40">
                        {"// Production React Workstream (U4RAD Technologies)"}
                      </p>
                      <p>
                        <span className="text-crimson font-bold">export const</span>{" "}
                        <span className="text-white font-bold">RadiologyTaskStream</span> = () =&gt; &#123;
                      </p>
                      <p className="pl-4">
                        <span className="text-crimson font-semibold">const</span> &#123; tasks, status &#125; ={" "}
                        <span className="text-white">useTaskPipeline</span>();
                      </p>
                      <p className="pl-4">
                        <span className="text-crimson font-semibold">const</span> reviewTimeReduction ={" "}
                        <span className="text-white font-bold">&quot;~10%&quot;</span>;
                      </p>
                      <br />
                      <p className="pl-4">
                        <span className="text-crimson font-semibold">return</span> (
                      </p>
                      <p className="pl-8">
                        &lt;<span className="text-white font-bold">DICOMWorkflowCanvas</span>
                      </p>
                      <p className="pl-12">
                        <span className="text-silver/80">pacsConnected</span>=&#123;
                        <span className="text-crimson font-bold">true</span>&#125;
                      </p>
                      <p className="pl-12">
                        <span className="text-silver/80">taskReviewOptimized</span>=&#123;reviewTimeReduction&#125;
                      </p>
                      <p className="pl-8">/&gt;</p>
                      <p className="pl-4">);</p>
                      <p>&#125;;</p>
                    </div>
                  ) : (
                    <div className="space-y-1">
                      <p className="text-silver/40">
                        {"# Django REST Framework Implementation"}
                      </p>
                      <p>
                        <span className="text-crimson font-bold">class</span>{" "}
                        <span className="text-white font-bold">AccountsAutomationAPIView</span>(
                        <span className="text-white">APIView</span>):
                      </p>
                      <p className="pl-4">
                        <span className="text-crimson font-semibold">permission_classes</span> = [IsAuthenticated]
                      </p>
                      <br />
                      <p className="pl-4">
                        <span className="text-crimson font-semibold">def</span>{" "}
                        <span className="text-white font-bold">post</span>(self, request):
                      </p>
                      <p className="pl-8">
                        pipeline = <span className="text-white">execute_accounts_pipeline</span>(request.data)
                      </p>
                      <p className="pl-8">
                        <span className="text-crimson font-semibold">return</span> Response(&#123;
                      </p>
                      <p className="pl-12">
                        <span className="text-silver/80">&quot;manual_effort_reduced&quot;</span>:{" "}
                        <span className="text-white font-bold">&quot;40-50%&quot;</span>,
                      </p>
                      <p className="pl-12">
                        <span className="text-silver/80">&quot;endpoints_authored&quot;</span>:{" "}
                        <span className="text-white font-bold">&quot;30+&quot;</span>
                      </p>
                      <p className="pl-8">&#125;, status=status.HTTP_200_OK)</p>
                    </div>
                  )}
                </div>

                {/* Status Bar */}
                <div className="flex items-center justify-between px-4 py-2.5 bg-gradient-to-b from-[#1C1C20] to-[#141418] border-t border-white/10 text-[11px] font-mono text-silver">
                  <div className="flex items-center gap-2">
                    <Activity className="w-3.5 h-3.5 text-crimson" />
                    <span className="text-white font-semibold">Production Workstream</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="text-crimson font-bold flex items-center gap-1">
                      <CheckCircle2 className="w-3.5 h-3.5 text-crimson" /> 15+ Features Delivered
                    </span>
                  </div>
                </div>
              </div>

              {/* Floating 3D Anchor Badge 2 (Bottom-Left) */}
              <div className="hidden sm:flex absolute -bottom-6 -left-6 z-30 p-3.5 rounded-[10px] bg-gradient-to-r from-[#2F2F36] to-[#1E1E22] border-t border-white/35 border-b border-black/80 shadow-[0_20px_45px_rgba(0,0,0,0.95),0_0_25px_rgba(225,6,0,0.3)] items-center gap-3">
                <Monogram size="sm" />
                <div className="text-xs font-mono">
                  <div className="font-bold text-white flex items-center gap-1.5">
                    <span>Sole Engineering Ownership</span>
                    <span className="w-1.5 h-1.5 rounded-full bg-crimson animate-pulse" />
                  </div>
                  <div className="text-silver/80 text-[11px]">
                    Requirements → Code → Deployment
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="pt-16 flex justify-center">
          <a
            href="#metrics"
            aria-label="Scroll to metrics"
            className="group flex flex-col items-center gap-2 text-silver/60 hover:text-white transition-colors"
          >
            <span className="text-[11px] font-mono uppercase tracking-widest text-silver/70 group-hover:text-crimson transition-colors font-semibold">
              Scroll to explore
            </span>
            <div className="p-2 rounded-[6px] bg-gradient-to-b from-[#2E2E34] to-[#1A1A1E] border-t border-white/20 border-b border-black/80 shadow-lg group-hover:border-crimson transition-all group-hover:-translate-y-0.5">
              <ArrowDown className="w-3.5 h-3.5 text-silver group-hover:text-crimson animate-bounce transition-colors" />
            </div>
          </a>
        </div>
      </div>
    </section>
  );
};
