"use client";

import React, { useEffect } from "react";
import Link from "next/link";
import { Monogram } from "@/ui/Monogram";
import { Button } from "@/ui/Button";
import { X, ArrowRight, Download, Mail } from "lucide-react";

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
  navItems: { label: string; href: string }[];
  resumeUrl: string;
  resumeFilename: string;
}

export const MobileMenu: React.FC<MobileMenuProps> = ({
  isOpen,
  onClose,
  navItems,
  resumeUrl,
  resumeFilename,
}) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };

    if (isOpen) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    }

    return () => {
      document.body.style.overflow = "unset";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="Mobile Navigation Menu"
      className="fixed inset-0 z-50 flex flex-col bg-[#0E0F12]/98 backdrop-blur-2xl md:hidden animate-in fade-in duration-200"
    >
      {/* Top Bar */}
      <div className="flex items-center justify-between px-6 py-4 border-b border-silver/20">
        <Link href="#hero" onClick={onClose} className="flex items-center gap-3">
          <Monogram size="sm" />
          <span className="font-bold text-sm tracking-tight text-white font-mono">
            Abhay Jangir
          </span>
        </Link>
        <button
          onClick={onClose}
          aria-label="Close menu"
          className="p-2 rounded-[6px] text-silver hover:text-white hover:bg-white/10 transition-colors border border-silver/20 hover:border-crimson"
        >
          <X className="w-5 h-5" />
        </button>
      </div>

      {/* Navigation Links */}
      <div className="flex-1 overflow-y-auto px-6 py-6 space-y-6">
        <nav className="space-y-2">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={onClose}
              className="flex items-center justify-between py-3.5 px-4 rounded-[8px] text-base font-mono font-bold text-silver hover:text-white bg-gradient-to-b from-[#222228] to-[#151518] border-t border-white/15 border-b border-black/80 hover:border-crimson/60 shadow-sm transition-all group"
            >
              <span className="group-hover:translate-x-1 transition-transform">{item.label}</span>
              <ArrowRight className="w-4 h-4 text-silver/60 group-hover:text-crimson transition-colors" />
            </Link>
          ))}
        </nav>

        {/* Action Buttons */}
        <div className="space-y-3 pt-6 border-t border-silver/20">
          <Button
            variant="primary"
            size="lg"
            href="#contact"
            onClick={onClose}
            className="w-full justify-center"
            leftIcon={<Mail className="w-4 h-4" />}
          >
            Let&apos;s Connect
          </Button>
          <Button
            variant="secondary"
            size="lg"
            href={resumeUrl}
            download={resumeFilename}
            className="w-full justify-center"
            leftIcon={<Download className="w-4 h-4" />}
          >
            Download Resume
          </Button>
        </div>
      </div>

      {/* Footer Info */}
      <div className="p-6 border-t border-silver/20 text-xs font-mono text-silver/80 flex items-center justify-between bg-surface-dark">
        <span className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-crimson animate-pulse shadow-[0_0_8px_#E10600]" />
          Software Development Engineer
        </span>
        <span className="text-silver/60">Gurugram, IN</span>
      </div>
    </div>
  );
};
