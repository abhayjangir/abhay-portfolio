import React from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
  href?: string;
  download?: boolean | string;
  target?: string;
  rel?: string;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
}

export const Button = React.forwardRef<
  HTMLButtonElement | HTMLAnchorElement,
  ButtonProps
>(
  (
    {
      className,
      variant = "primary",
      size = "md",
      href,
      download,
      target,
      rel,
      leftIcon,
      rightIcon,
      children,
      disabled,
      ...props
    },
    ref
  ) => {
    const baseStyles =
      "relative inline-flex items-center justify-center font-medium rounded-[6px] transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-crimson focus-visible:ring-offset-2 focus-visible:ring-offset-background active:scale-[0.98] disabled:opacity-50 disabled:pointer-events-none select-none text-sm";

    const variantStyles = {
      primary:
        "bg-gradient-to-b from-[#FF2B24] via-[#E10600] to-[#B00500] text-white font-bold border-t border-[#FFA5A0]/80 border-b border-[#7A0000] shadow-[0_8px_25px_-4px_rgba(225,6,0,0.6),inset_0_1px_1px_rgba(255,255,255,0.45)] hover:shadow-[0_12px_32px_-2px_rgba(225,6,0,0.8),inset_0_1px_1px_rgba(255,255,255,0.7)] hover:-translate-y-0.5 active:translate-y-0.5 active:shadow-[0_3px_12px_rgba(225,6,0,0.5)]",
      secondary:
        "bg-gradient-to-b from-[#34343A] to-[#1E1E22] text-white font-semibold border-t border-white/25 border-b border-black/80 shadow-[0_6px_20px_-3px_rgba(0,0,0,0.7),inset_0_1px_0_rgba(255,255,255,0.18)] hover:border-silver/60 hover:text-white hover:shadow-[0_10px_28px_-3px_rgba(0,0,0,0.85),inset_0_1px_0_rgba(255,255,255,0.3)] hover:-translate-y-0.5 active:translate-y-0.5",
      outline:
        "bg-gradient-to-b from-[#1C1D22]/90 to-[#121316]/90 text-silver font-medium border border-silver/30 hover:border-crimson hover:text-white shadow-[0_4px_16px_rgba(0,0,0,0.5)] hover:shadow-[0_0_20px_rgba(225,6,0,0.3)] hover:-translate-y-0.5 active:translate-y-0.5",
      ghost:
        "bg-transparent text-silver hover:text-white hover:bg-white/[0.08] transition-colors",
    };

    const sizeStyles = {
      sm: "h-8 px-3 text-xs gap-1.5",
      md: "h-10 px-4 text-xs sm:text-sm gap-2",
      lg: "h-11 px-5 text-sm gap-2.5",
    };

    const combinedClassName = cn(
      baseStyles,
      variantStyles[variant],
      sizeStyles[size],
      className
    );

    if (href) {
      const isInternal = href.startsWith("#") || href.startsWith("/");
      if (isInternal && !download) {
        return (
          <Link
            href={href}
            className={combinedClassName}
            ref={ref as React.Ref<HTMLAnchorElement>}
          >
            {leftIcon && <span className="inline-flex shrink-0">{leftIcon}</span>}
            <span>{children}</span>
            {rightIcon && <span className="inline-flex shrink-0">{rightIcon}</span>}
          </Link>
        );
      }

      return (
        <a
          href={href}
          download={download}
          target={target}
          rel={rel || (target === "_blank" ? "noopener noreferrer" : undefined)}
          className={combinedClassName}
          ref={ref as React.Ref<HTMLAnchorElement>}
        >
          {leftIcon && <span className="inline-flex shrink-0">{leftIcon}</span>}
          <span>{children}</span>
          {rightIcon && <span className="inline-flex shrink-0">{rightIcon}</span>}
        </a>
      );
    }

    return (
      <button
        ref={ref as React.Ref<HTMLButtonElement>}
        disabled={disabled}
        className={combinedClassName}
        {...props}
      >
        {leftIcon && <span className="inline-flex shrink-0">{leftIcon}</span>}
        <span>{children}</span>
        {rightIcon && <span className="inline-flex shrink-0">{rightIcon}</span>}
      </button>
    );
  }
);

Button.displayName = "Button";
