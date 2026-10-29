"use client";

import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { contactFormSchema, ContactFormData } from "@/lib/validation";
import { Send, Loader2, CheckCircle2, Copy, ExternalLink, AlertCircle } from "lucide-react";
import { Button } from "./Button";

interface ContactFormProps {
  recipientEmail: string;
}

export const ContactForm: React.FC<ContactFormProps> = ({ recipientEmail }) => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [preparedPayload, setPreparedPayload] = useState<ContactFormData | null>(null);
  const [copied, setCopied] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      name: "",
      email: "",
      subject: "",
      message: "",
    },
  });

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true);
    await new Promise((resolve) => setTimeout(resolve, 400));
    setPreparedPayload(data);
    setIsSubmitting(false);

    const mailtoUrl = `mailto:${encodeURIComponent(recipientEmail)}?subject=${encodeURIComponent(
      `[Portfolio Inquiry] ${data.subject}`
    )}&body=${encodeURIComponent(
      `Hi Abhay,\n\nName: ${data.name}\nEmail: ${data.email}\n\nMessage:\n${data.message}`
    )}`;

    window.location.href = mailtoUrl;
  };

  const copyDraft = () => {
    if (!preparedPayload) return;
    const text = `Subject: [Portfolio Inquiry] ${preparedPayload.subject}\nFrom: ${preparedPayload.name} (${preparedPayload.email})\n\n${preparedPayload.message}`;
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <div className="rounded-[12px] bg-gradient-to-b from-[#26262C]/95 via-[#1D1D21]/95 to-[#131316]/95 border-t border-white/25 border-l border-white/10 border-r border-black/60 border-b border-black/80 shadow-[0_20px_45px_-10px_rgba(0,0,0,0.85),inset_0_1px_0_rgba(255,255,255,0.14)] p-6 sm:p-8 space-y-6">
      <div>
        <h3 className="text-base font-bold text-white tracking-tight font-mono">
          Send a Direct Message
        </h3>
        <p className="text-xs text-silver mt-1">
          Prepares a direct email to{" "}
          <strong className="text-crimson font-mono">{recipientEmail}</strong>.
        </p>
      </div>

      {preparedPayload ? (
        <div className="p-5 sm:p-6 rounded-[8px] bg-gradient-to-r from-crimson/20 via-[#26262C] to-[#161619] border border-crimson/50 shadow-[0_10px_25px_rgba(225,6,0,0.25)] space-y-4 animate-in fade-in duration-200">
          <div className="flex items-start gap-3.5">
            <CheckCircle2 className="w-5 h-5 text-crimson shrink-0 mt-0.5 animate-pulse" />
            <div className="space-y-1">
              <h4 className="text-sm font-bold text-white font-mono">
                Email Draft Initialized
              </h4>
              <p className="text-xs text-silver/90 leading-relaxed font-normal">
                Your email client was triggered with your drafted message. If your client did not launch automatically, you can copy the text below or reopen it directly:
              </p>
            </div>
          </div>

          <div className="p-4 rounded-[6px] bg-[#121216] border border-white/15 font-mono text-xs text-silver space-y-1.5 shadow-[inset_0_2px_4px_rgba(0,0,0,0.7)]">
            <div>
              <span className="text-silver/50">TO:</span> {recipientEmail}
            </div>
            <div>
              <span className="text-silver/50">SUBJECT:</span> [Portfolio Inquiry]{" "}
              {preparedPayload.subject}
            </div>
            <div className="pt-2 text-white whitespace-pre-line border-t border-silver/15">
              {preparedPayload.message}
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-3 pt-1">
            <Button
              variant="primary"
              size="sm"
              onClick={() => {
                const mailtoUrl = `mailto:${encodeURIComponent(
                  recipientEmail
                )}?subject=${encodeURIComponent(
                  `[Portfolio Inquiry] ${preparedPayload.subject}`
                )}&body=${encodeURIComponent(
                  `Hi Abhay,\n\nName: ${preparedPayload.name}\nEmail: ${preparedPayload.email}\n\nMessage:\n${preparedPayload.message}`
                )}`;
                window.location.href = mailtoUrl;
              }}
              rightIcon={<ExternalLink className="w-3.5 h-3.5" />}
            >
              Open Email App Again
            </Button>
            <Button
              variant="secondary"
              size="sm"
              onClick={copyDraft}
              leftIcon={<Copy className="w-3.5 h-3.5" />}
            >
              {copied ? "Copied to Clipboard!" : "Copy Full Message"}
            </Button>
            <Button
              variant="ghost"
              size="sm"
              onClick={() => {
                setPreparedPayload(null);
                reset();
              }}
            >
              New Message
            </Button>
          </div>
        </div>
      ) : (
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4" noValidate>
          {/* Row 1: Name and Email */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="space-y-1.5">
              <label
                htmlFor="name"
                className="block text-xs font-mono font-bold text-silver uppercase"
              >
                Your Name <span className="text-crimson font-bold">*</span>
              </label>
              <input
                id="name"
                type="text"
                placeholder="Alex Morgan"
                {...register("name")}
                aria-invalid={errors.name ? "true" : "false"}
                aria-describedby={errors.name ? "name-error" : undefined}
                className="w-full px-4 py-2.5 rounded-[6px] bg-[#121216] border border-white/15 text-white placeholder:text-silver/40 text-sm focus:outline-none focus:border-crimson focus:ring-1 focus:ring-crimson shadow-[inset_0_2px_4px_rgba(0,0,0,0.8)] transition-all font-mono"
              />
              {errors.name && (
                <p id="name-error" className="text-xs text-crimson font-mono">
                  {errors.name.message}
                </p>
              )}
            </div>

            <div className="space-y-1.5">
              <label
                htmlFor="email"
                className="block text-xs font-mono font-bold text-silver uppercase"
              >
                Email Address <span className="text-crimson font-bold">*</span>
              </label>
              <input
                id="email"
                type="email"
                placeholder="alex@company.com"
                {...register("email")}
                aria-invalid={errors.email ? "true" : "false"}
                aria-describedby={errors.email ? "email-error" : undefined}
                className="w-full px-4 py-2.5 rounded-[6px] bg-[#121216] border border-white/15 text-white placeholder:text-silver/40 text-sm focus:outline-none focus:border-crimson focus:ring-1 focus:ring-crimson shadow-[inset_0_2px_4px_rgba(0,0,0,0.8)] transition-all font-mono"
              />
              {errors.email && (
                <p id="email-error" className="text-xs text-crimson font-mono">
                  {errors.email.message}
                </p>
              )}
            </div>
          </div>

          {/* Subject */}
          <div className="space-y-1.5">
            <label
              htmlFor="subject"
              className="block text-xs font-mono font-bold text-silver uppercase"
            >
              Subject <span className="text-crimson font-bold">*</span>
            </label>
            <input
              id="subject"
              type="text"
              placeholder="e.g. SDE / Frontend Developer Opportunity"
              {...register("subject")}
              aria-invalid={errors.subject ? "true" : "false"}
              aria-describedby={errors.subject ? "subject-error" : undefined}
              className="w-full px-4 py-2.5 rounded-[6px] bg-[#121216] border border-white/15 text-white placeholder:text-silver/40 text-sm focus:outline-none focus:border-crimson focus:ring-1 focus:ring-crimson shadow-[inset_0_2px_4px_rgba(0,0,0,0.8)] transition-all font-mono"
            />
            {errors.subject && (
              <p id="subject-error" className="text-xs text-crimson font-mono">
                {errors.subject.message}
              </p>
            )}
          </div>

          {/* Message */}
          <div className="space-y-1.5">
            <label
              htmlFor="message"
              className="block text-xs font-mono font-bold text-silver uppercase"
            >
              Message <span className="text-crimson font-bold">*</span>
            </label>
            <textarea
              id="message"
              rows={4}
              placeholder="Tell me about the engineering challenge, technical requirements, or role context..."
              {...register("message")}
              aria-invalid={errors.message ? "true" : "false"}
              aria-describedby={errors.message ? "message-error" : undefined}
              className="w-full px-4 py-2.5 rounded-[6px] bg-[#121216] border border-white/15 text-white placeholder:text-silver/40 text-sm focus:outline-none focus:border-crimson focus:ring-1 focus:ring-crimson shadow-[inset_0_2px_4px_rgba(0,0,0,0.8)] transition-all resize-y font-mono"
            />
            {errors.message && (
              <p id="message-error" className="text-xs text-crimson font-mono">
                {errors.message.message}
              </p>
            )}
          </div>

          <div className="flex items-center justify-between pt-2">
            <p className="text-[11px] text-silver/70 font-mono flex items-center gap-1.5">
              <AlertCircle className="w-3.5 h-3.5 text-crimson" />
              Direct dispatch via verified mailto protocol
            </p>

            <Button
              type="submit"
              variant="primary"
              size="md"
              disabled={isSubmitting}
              leftIcon={
                isSubmitting ? (
                  <Loader2 className="w-4 h-4 animate-spin" />
                ) : (
                  <Send className="w-4 h-4" />
                )
              }
            >
              {isSubmitting ? "Drafting..." : "Send Message"}
            </Button>
          </div>
        </form>
      )}
    </div>
  );
};
