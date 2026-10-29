"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Monogram } from "@/ui/Monogram";
import { Button } from "@/ui/Button";
import { MobileMenu } from "./MobileMenu";
import { Menu } from "lucide-react";
import { cn } from "@/lib/utils";

interface NavbarProps {
  resumeUrl: string;
  resumeFilename: string;
}

const NAV_ITEMS = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Approach", href: "#approach" },
  { label: "Education", href: "#education" },
  { label: "Contact", href: "#contact" },
];

export const Navbar: React.FC<NavbarProps> = ({ resumeUrl, resumeFilename }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      const sections = NAV_ITEMS.map((item) => item.href.substring(1));
      const scrollPosition = window.scrollY + 140;

      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header
        className={cn(
          "fixed top-0 left-0 right-0 z-40 transition-all duration-300",
          isScrolled
            ? "bg-[#101114]/90 backdrop-blur-xl border-b border-white/10 shadow-[0_12px_32px_rgba(0,0,0,0.85),0_0_20px_rgba(225,6,0,0.12)] py-2.5"
            : "bg-transparent py-4 sm:py-5"
        )}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Logo & Monogram */}
          <Link
            href="#hero"
            className="group flex items-center gap-3 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-crimson rounded-[8px]"
          >
            <Monogram size="md" />
            <div className="flex flex-col">
              <span className="text-sm font-bold tracking-tight text-white group-hover:text-crimson transition-colors font-mono">
                Abhay Jangir
              </span>
              <span className="text-[11px] font-mono text-silver flex items-center gap-1.5 uppercase tracking-wider">
                <span>SDE // FULL-STACK</span>
                <span className="w-1.5 h-1.5 rounded-full bg-crimson animate-pulse shadow-[0_0_6px_#E10600]" />
              </span>
            </div>
          </Link>

          {/* Desktop Navigation Links with 3D tactile bar */}
          <nav className="hidden md:flex items-center gap-1 bg-gradient-to-b from-[#2A2A30]/95 to-[#161619]/95 backdrop-blur-xl px-2.5 py-1.5 rounded-[8px] border-t border-white/20 border-b border-black/80 shadow-[0_8px_24px_rgba(0,0,0,0.7)]">
            {NAV_ITEMS.map((item) => {
              const isActive = activeSection === item.href.substring(1);
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={cn(
                    "relative px-3.5 py-1 rounded-[6px] text-xs font-mono transition-all duration-150 select-none",
                    isActive
                      ? "text-white bg-gradient-to-b from-[#383842] to-[#202025] font-bold border-t border-white/30 border-b border-black/80 shadow-sm"
                      : "text-silver hover:text-white hover:bg-white/[0.08]"
                  )}
                >
                  <span>{item.label}</span>
                  {isActive && (
                    <span className="absolute -bottom-[6px] left-1/2 -translate-x-1/2 w-3 h-[2px] bg-crimson shadow-[0_0_8px_#E10600]" />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* Action Button & Mobile Toggle */}
          <div className="flex items-center gap-3">
            <Button
              variant="primary"
              size="sm"
              href="#contact"
              className="hidden sm:inline-flex"
            >
              Let&apos;s Connect
            </Button>

            <button
              onClick={() => setMobileMenuOpen(true)}
              aria-label="Open navigation menu"
              className="p-2 rounded-[6px] text-silver hover:text-white hover:bg-white/10 md:hidden transition-colors border border-silver/20"
            >
              <Menu className="w-5 h-5" />
            </button>
          </div>
        </div>
      </header>

      <MobileMenu
        isOpen={mobileMenuOpen}
        onClose={() => setMobileMenuOpen(false)}
        navItems={NAV_ITEMS}
        resumeUrl={resumeUrl}
        resumeFilename={resumeFilename}
      />
    </>
  );
};
