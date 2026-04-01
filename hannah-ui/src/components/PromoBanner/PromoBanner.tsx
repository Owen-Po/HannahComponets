import { useState } from "react";
import { X } from "lucide-react";
import { cn } from "../../utils/cn";

/* ─────────────────────────────────────────
   Types
───────────────────────────────────────── */
export interface PromoBannerProps {
  title: string;
  subtitle?: string;
  description?: string;
  ctaLabel?: string;
  ctaOnClick?: () => void;
  secondaryCta?: { label: string; onClick: () => void };
  image?: string;
  variant?: "hero" | "banner" | "strip";
  gradient?: [string, string];
  accentColor?: string;
  align?: "left" | "center";
  dismissible?: boolean;
  onDismiss?: () => void;
  className?: string;
}

/* ─────────────────────────────────────────
   PromoBanner
───────────────────────────────────────── */
export function PromoBanner({
  title,
  subtitle,
  description,
  ctaLabel,
  ctaOnClick,
  secondaryCta,
  image,
  variant = "hero",
  gradient,
  accentColor = "#7c6aff",
  align,
  dismissible = false,
  onDismiss,
  className,
}: PromoBannerProps) {
  const [dismissed, setDismissed] = useState(false);

  if (dismissed) return null;

  const from = gradient?.[0] ?? accentColor;
  const to = gradient?.[1] ?? "#1a1a2e";
  const resolvedAlign = align ?? (variant === "hero" ? "left" : "center");

  const handleDismiss = () => {
    setDismissed(true);
    onDismiss?.();
  };

  /* ---------- Strip ---------- */
  if (variant === "strip") {
    return (
      <div
        className={cn(
          "relative flex w-full items-center justify-center gap-3 px-4 py-2.5 text-sm font-medium text-white",
          className,
        )}
        style={{
          background: `linear-gradient(135deg, ${from}, ${to})`,
        }}
      >
        {subtitle && (
          <span className="hidden font-normal text-white/70 sm:inline">
            {subtitle}
          </span>
        )}
        <span>{title}</span>
        {ctaLabel && (
          <button
            onClick={ctaOnClick}
            className="ml-1 rounded-full border border-white/30 px-3 py-0.5 text-xs font-semibold text-white transition-colors hover:bg-white/20"
          >
            {ctaLabel}
          </button>
        )}
        {dismissible && (
          <button
            onClick={handleDismiss}
            aria-label="Dismiss"
            className="absolute right-3 top-1/2 -translate-y-1/2 rounded-full p-1 text-white/60 transition-colors hover:bg-white/10 hover:text-white"
          >
            <X size={16} />
          </button>
        )}
      </div>
    );
  }

  /* ---------- Banner ---------- */
  if (variant === "banner") {
    return (
      <div
        className={cn(
          "relative overflow-hidden rounded-2xl px-8 py-12 text-white md:px-16 md:py-16",
          resolvedAlign === "center" && "text-center",
          className,
        )}
        style={{
          background: `linear-gradient(135deg, ${from}, ${to})`,
        }}
      >
        {/* Glow effect */}
        <div
          className="pointer-events-none absolute -top-24 left-1/2 h-64 w-96 -translate-x-1/2 rounded-full opacity-30 blur-3xl"
          style={{ backgroundColor: from }}
        />

        <div className="relative z-10 mx-auto max-w-2xl space-y-4">
          {subtitle && (
            <p className="text-sm font-semibold tracking-widest uppercase text-white/70">
              {subtitle}
            </p>
          )}
          <h2 className="text-3xl font-extrabold leading-tight md:text-5xl">
            {title}
          </h2>
          {description && (
            <p className="text-base text-white/70 md:text-lg">{description}</p>
          )}
          {(ctaLabel || secondaryCta) && (
            <div
              className={cn(
                "flex flex-wrap gap-3 pt-2",
                resolvedAlign === "center" && "justify-center",
              )}
            >
              {ctaLabel && (
                <button
                  onClick={ctaOnClick}
                  className="rounded-full bg-white px-6 py-3 text-sm font-bold transition-transform hover:scale-105 active:scale-95"
                  style={{ color: from }}
                >
                  {ctaLabel}
                </button>
              )}
              {secondaryCta && (
                <button
                  onClick={secondaryCta.onClick}
                  className="rounded-full border border-white/30 px-6 py-3 text-sm font-bold text-white transition-colors hover:bg-white/10"
                >
                  {secondaryCta.label}
                </button>
              )}
            </div>
          )}
        </div>
      </div>
    );
  }

  /* ---------- Hero (default) ---------- */
  return (
    <div
      className={cn(
        "relative flex min-h-[400px] w-full flex-col overflow-hidden md:flex-row",
        className,
      )}
      style={{
        background: `linear-gradient(135deg, ${from}, ${to})`,
      }}
    >
      {/* Text side */}
      <div
        className={cn(
          "relative z-10 flex flex-1 flex-col justify-center gap-4 px-8 py-12 text-white md:px-16 md:py-20",
          resolvedAlign === "center" && "items-center text-center",
        )}
      >
        {subtitle && (
          <p className="text-sm font-semibold tracking-widest uppercase text-white/70">
            {subtitle}
          </p>
        )}
        <h2 className="text-4xl font-extrabold leading-tight md:text-6xl">
          {title}
        </h2>
        {description && (
          <p className="max-w-lg text-base text-white/70 md:text-lg">
            {description}
          </p>
        )}
        {(ctaLabel || secondaryCta) && (
          <div className="flex flex-wrap gap-3 pt-2">
            {ctaLabel && (
              <button
                onClick={ctaOnClick}
                className="rounded-full bg-white px-8 py-3.5 text-sm font-bold shadow-lg transition-transform hover:scale-105 active:scale-95"
                style={{ color: from }}
              >
                {ctaLabel}
              </button>
            )}
            {secondaryCta && (
              <button
                onClick={secondaryCta.onClick}
                className="rounded-full border-2 border-white/30 px-8 py-3.5 text-sm font-bold text-white transition-colors hover:bg-white/10"
              >
                {secondaryCta.label}
              </button>
            )}
          </div>
        )}
      </div>

      {/* Image side */}
      {image && (
        <div className="relative flex-1">
          <img
            src={image}
            alt=""
            className="absolute inset-0 h-full w-full object-cover"
          />
          {/* Gradient fade into text side */}
          <div
            className="absolute inset-0"
            style={{
              background: `linear-gradient(to right, ${from}, transparent 60%)`,
            }}
          />
        </div>
      )}
    </div>
  );
}

export default PromoBanner;
