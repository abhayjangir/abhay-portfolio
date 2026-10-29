import React from "react";
import { SectionHeading } from "@/ui/SectionHeading";
import { ContactForm } from "@/ui/ContactForm";
import { Button } from "@/ui/Button";
import { PORTFOLIO_DATA } from "@/data/portfolio";
import { Mail, Phone, MapPin, Download, Github, Linkedin, ExternalLink } from "lucide-react";

export const Contact: React.FC = () => {
  const { personal, socials } = PORTFOLIO_DATA;

  return (
    <section id="contact" className="py-20 sm:py-28 relative bg-background border-t border-silver/20 overflow-hidden">
      {/* 3D ambient light */}
      <div className="absolute top-1/2 left-1/3 w-[600px] h-[350px] bg-crimson/15 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeading
          eyebrow="Initiate Conversation"
          title="Have an interesting problem to solve?"
          description="I'm open to conversations about software engineering opportunities, frontend development, full-stack products, and meaningful technical challenges."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Left Column: Direct Contact Info & Verification Details */}
          <div className="lg:col-span-5 space-y-4">
            <div className="rounded-[12px] bg-gradient-to-b from-[#26262C]/95 via-[#1D1D21]/95 to-[#131316]/95 border-t border-white/25 border-l border-white/10 border-r border-black/60 border-b border-black/80 shadow-[0_20px_45px_-10px_rgba(0,0,0,0.85),inset_0_1px_0_rgba(255,255,255,0.14)] p-6 sm:p-8 space-y-6">
              <h3 className="text-base font-bold text-white flex items-center gap-2 font-mono">
                <span>Direct Contact Information</span>
                <span className="w-2 h-2 rounded-full bg-crimson animate-pulse shadow-[0_0_8px_#E10600]" />
              </h3>

              <div className="space-y-3.5">
                {/* Email */}
                <a
                  href={`mailto:${personal.email}`}
                  className="flex items-center gap-3.5 p-3.5 rounded-[8px] bg-gradient-to-b from-[#2B2B31] to-[#161619] border-t border-white/15 border-b border-black/80 shadow-md hover:border-crimson hover:-translate-y-0.5 transition-all group"
                >
                  <div className="p-2.5 rounded-[6px] bg-gradient-to-b from-[#383840] to-[#1C1C20] border-t border-white/20 border-b border-black/80 shadow text-crimson group-hover:bg-crimson group-hover:text-white transition-all">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-[11px] font-mono uppercase text-silver/60">
                      Email Address
                    </div>
                    <div className="text-sm font-bold text-white group-hover:text-crimson transition-colors font-mono">
                      {personal.email}
                    </div>
                  </div>
                </a>

                {/* Phone */}
                <a
                  href={`tel:${personal.phone.replace(/\s+/g, "")}`}
                  className="flex items-center gap-3.5 p-3.5 rounded-[8px] bg-gradient-to-b from-[#2B2B31] to-[#161619] border-t border-white/15 border-b border-black/80 shadow-md hover:border-crimson hover:-translate-y-0.5 transition-all group"
                >
                  <div className="p-2.5 rounded-[6px] bg-gradient-to-b from-[#383840] to-[#1C1C20] border-t border-white/20 border-b border-black/80 shadow text-crimson group-hover:bg-crimson group-hover:text-white transition-all">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-[11px] font-mono uppercase text-silver/60">
                      Phone Number
                    </div>
                    <div className="text-sm font-bold text-white group-hover:text-crimson transition-colors font-mono">
                      {personal.phone}
                    </div>
                  </div>
                </a>

                {/* Location */}
                <div className="flex items-center gap-3.5 p-3.5 rounded-[8px] bg-gradient-to-b from-[#2B2B31] to-[#161619] border-t border-white/15 border-b border-black/80 shadow-md">
                  <div className="p-2.5 rounded-[6px] bg-gradient-to-b from-[#383840] to-[#1C1C20] border-t border-white/20 border-b border-black/80 shadow text-silver">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-[11px] font-mono uppercase text-silver/60">
                      Current Location
                    </div>
                    <div className="text-sm font-bold text-white font-mono">
                      {personal.location}
                    </div>
                  </div>
                </div>
              </div>

              {/* Social Channels: Only displayed when verified & configured */}
              {(socials.github.isConfigured || socials.linkedin.isConfigured) && (
                <div className="pt-3 border-t border-silver/20 space-y-2">
                  <span className="text-xs font-mono uppercase tracking-wider text-silver/60 font-semibold">
                    Verified Profiles
                  </span>
                  <div className="flex flex-wrap gap-2">
                    {socials.github.isConfigured && (
                      <Button
                        variant="outline"
                        size="sm"
                        href={socials.github.url}
                        target="_blank"
                        leftIcon={<Github className="w-3.5 h-3.5" />}
                        rightIcon={<ExternalLink className="w-3 h-3" />}
                      >
                        GitHub
                      </Button>
                    )}
                    {socials.linkedin.isConfigured && (
                      <Button
                        variant="outline"
                        size="sm"
                        href={socials.linkedin.url}
                        target="_blank"
                        leftIcon={<Linkedin className="w-3.5 h-3.5" />}
                        rightIcon={<ExternalLink className="w-3 h-3" />}
                      >
                        LinkedIn
                      </Button>
                    )}
                  </div>
                </div>
              )}

              {/* Download Resume Quick Action */}
              <div className="pt-2">
                <Button
                  variant="outline"
                  size="md"
                  href={personal.resumeUrl}
                  download={personal.resumeFilename}
                  className="w-full justify-center"
                  leftIcon={<Download className="w-4 h-4" />}
                >
                  Download Complete Resume (PDF)
                </Button>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Form */}
          <div className="lg:col-span-7">
            <ContactForm recipientEmail={personal.email} />
          </div>
        </div>
      </div>
    </section>
  );
};
