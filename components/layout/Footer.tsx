import React from "react";
import Link from "next/link";
import { Monogram } from "@/ui/Monogram";
import { PORTFOLIO_DATA } from "@/data/portfolio";
import { ArrowUp, Mail, Phone, Github, Linkedin } from "lucide-react";

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  const { personal, socials } = PORTFOLIO_DATA;

  return (
    <footer className="border-t border-silver/20 bg-gradient-to-b from-[#141519] to-[#0A0B0D] py-14 sm:py-18 relative overflow-hidden">
      {/* 3D ambient flare */}
      <div className="absolute -bottom-20 right-10 w-[450px] h-[250px] bg-crimson/15 rounded-full blur-[130px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10 relative z-10">
        {/* Top Section */}
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
          <div className="space-y-3 max-w-md">
            <div className="flex items-center gap-3.5">
              <Monogram size="md" />
              <div>
                <h3 className="text-base font-bold text-white tracking-tight font-mono">
                  {personal.name}
                </h3>
                <p className="text-[11px] font-mono text-silver flex items-center gap-1.5 uppercase font-medium">
                  <span>{personal.title}</span>
                  <span className="w-1.5 h-1.5 rounded-full bg-crimson animate-pulse shadow-[0_0_6px_#E10600]" />
                </p>
              </div>
            </div>
            <p className="text-xs text-silver/80 leading-relaxed font-normal">
              Focused on building scalable, responsive, and maintainable frontend experiences and robust REST API integrations for product-driven applications.
            </p>
          </div>

          {/* Quick Links */}
          <div className="flex flex-wrap items-center gap-6 text-xs font-mono font-bold text-silver">
            <Link href="#about" className="hover:text-white hover:-translate-y-0.5 transition-all">
              About
            </Link>
            <Link href="#skills" className="hover:text-white hover:-translate-y-0.5 transition-all">
              Skills
            </Link>
            <Link href="#experience" className="hover:text-white hover:-translate-y-0.5 transition-all">
              Experience
            </Link>
            <Link href="#projects" className="hover:text-white hover:-translate-y-0.5 transition-all">
              Projects
            </Link>
            <Link href="#approach" className="hover:text-white hover:-translate-y-0.5 transition-all">
              Approach
            </Link>
            <Link href="#education" className="hover:text-white hover:-translate-y-0.5 transition-all">
              Education
            </Link>
            <Link href="#contact" className="hover:text-white hover:-translate-y-0.5 transition-all">
              Contact
            </Link>
          </div>
        </div>

        {/* Divider */}
        <div className="h-px w-full bg-gradient-to-r from-transparent via-silver/20 to-transparent" />

        {/* Bottom Section */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-silver/60">
          <div>
            © {currentYear} {personal.name}. All rights reserved.
          </div>

          <div className="flex items-center gap-2 text-silver/80 font-medium">
            <span>Designed with intention. Built with code.</span>
          </div>

          <div className="flex items-center gap-3.5">
            {socials.email.isConfigured && (
              <a
                href={socials.email.url}
                aria-label="Email"
                className="hover:text-crimson hover:-translate-y-0.5 transition-all text-silver"
              >
                <Mail className="w-4 h-4" />
              </a>
            )}
            {socials.phone.isConfigured && (
              <a
                href={socials.phone.url}
                aria-label="Phone"
                className="hover:text-crimson hover:-translate-y-0.5 transition-all text-silver"
              >
                <Phone className="w-4 h-4" />
              </a>
            )}
            {socials.github.isConfigured && (
              <a
                href={socials.github.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="hover:text-crimson hover:-translate-y-0.5 transition-all text-silver"
              >
                <Github className="w-4 h-4" />
              </a>
            )}
            {socials.linkedin.isConfigured && (
              <a
                href={socials.linkedin.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="hover:text-crimson hover:-translate-y-0.5 transition-all text-silver"
              >
                <Linkedin className="w-4 h-4" />
              </a>
            )}
            <a
              href="#hero"
              aria-label="Back to top"
              className="p-2 rounded-[6px] bg-gradient-to-b from-[#2B2B31] to-[#161619] border-t border-white/20 border-b border-black/80 shadow-md hover:border-crimson text-silver hover:text-crimson hover:-translate-y-0.5 transition-all"
            >
              <ArrowUp className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
