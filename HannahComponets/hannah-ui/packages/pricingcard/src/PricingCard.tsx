import React from "react";
import { Check, X } from "lucide-react";
import { cn } from "@hannah-ui/core";

/* ─────────────────────────────────────────
   Types
───────────────────────────────────────── */

export interface PricingFeature {
  text: string;
  included: boolean;
  highlight?: boolean;
}

export interface PricingCardProps {
  /** Plan name — e.g. "Starter", "Pro", "Enterprise" */
  name: string;
  /** Short plan description */
  description?: string;
  /** Price display — number or string like "Free", "Custom" */
  price: string | number;
  /** Currency symbol */
  currency?: string;
  /** Billing period label */
  period?: string;
  /** List of features with inclusion status */
  features: PricingFeature[];
  /** CTA button label */
  ctaLabel?: string;
  /** CTA click handler */
  ctaOnClick?: () => void;
  /** Show a "Popular" badge and highlighted border */
  isPopular?: boolean;
  /** Text for the popular badge */
  popularLabel?: string;
  /** Accent color (hex) used for badge, border, CTA, checks */
  accentColor?: string;
  /** Visual variant */
  variant?: "default" | "outlined" | "filled";
  /** Disabled state — grayed out, CTA disabled */
  disabled?: boolean;
  /** Custom badge text (overrides popularLabel when isPopular) */
  badge?: string;
  /** Additional class names */
  className?: string;
}

/* ─────────────────────────────────────────
   Component
───────────────────────────────────────── */

export const PricingCard: React.FC<PricingCardProps> = ({
  name,
  description,
  price,
  currency = "$",
  period = "/mo",
  features,
  ctaLabel = "Get started",
  ctaOnClick,
  isPopular = false,
  popularLabel = "Popular",
  accentColor = "#7c6aff",
  variant = "default",
  disabled = false,
  badge,
  className,
}) => {
  const isFilled = variant === "filled";
  const isOutlined = variant === "outlined";
  const isNumericPrice = typeof price === "number" || /^\d+(\.\d+)?$/.test(String(price));

  const badgeText = badge ?? (isPopular ? popularLabel : null);

  /* ── colour helpers (inline styles for dynamic accent) ── */
  const accentBg = { backgroundColor: accentColor };
  const accentText = { color: accentColor };
  const accentBorder = { borderColor: accentColor };

  return (
    <div
      className={cn(
        // base
        "relative flex flex-col rounded-2xl p-6 transition-all duration-300 ease-out",
        "hover:-translate-y-1 hover:shadow-xl",
        // sizing
        "w-full max-w-sm",

        // variant: default
        variant === "default" && [
          "bg-white border border-gray-200 shadow-md",
          "dark:bg-gray-900 dark:border-gray-700/60",
          isPopular && "ring-2",
        ],

        // variant: outlined
        isOutlined && [
          "bg-white border-2 shadow-md",
          "dark:bg-gray-900",
          isPopular && "ring-2",
        ],

        // variant: filled
        isFilled && "text-white shadow-lg",

        // disabled
        disabled && "opacity-50 pointer-events-none grayscale",

        className,
      )}
      style={{
        ...(isOutlined ? accentBorder : {}),
        ...((variant === "default" && isPopular) ? { "--tw-ring-color": accentColor } as React.CSSProperties : {}),
        ...((isOutlined && isPopular) ? { "--tw-ring-color": accentColor } as React.CSSProperties : {}),
        ...(isFilled ? { backgroundColor: accentColor } : {}),
      }}
    >
      {/* ── Badge ── */}
      {badgeText && (
        <span
          className={cn(
            "absolute -top-3 right-4 inline-flex items-center rounded-full px-3 py-0.5 text-xs font-semibold tracking-wide shadow-sm",
            isFilled
              ? "bg-white dark:bg-gray-900"
              : "text-white",
          )}
          style={isFilled ? { color: accentColor } : accentBg}
        >
          {badgeText}
        </span>
      )}

      {/* ── Header ── */}
      <div className="mb-4">
        <h3
          className={cn(
            "text-lg font-semibold",
            isFilled ? "text-white" : "text-gray-900 dark:text-white",
          )}
        >
          {name}
        </h3>
        {description && (
          <p
            className={cn(
              "mt-1 text-sm leading-relaxed",
              isFilled ? "text-white/80" : "text-gray-500 dark:text-gray-400",
            )}
          >
            {description}
          </p>
        )}
      </div>

      {/* ── Price ── */}
      <div className="mb-6 flex items-baseline gap-1">
        {isNumericPrice && (
          <span
            className={cn(
              "text-lg font-semibold self-start mt-1",
              isFilled ? "text-white/90" : "text-gray-500 dark:text-gray-400",
            )}
          >
            {currency}
          </span>
        )}
        <span
          className={cn(
            "text-5xl font-extrabold tracking-tight",
            isFilled ? "text-white" : "text-gray-900 dark:text-white",
          )}
        >
          {price}
        </span>
        {isNumericPrice && (
          <span
            className={cn(
              "text-base font-medium ml-0.5",
              isFilled ? "text-white/70" : "text-gray-400 dark:text-gray-500",
            )}
          >
            {period}
          </span>
        )}
      </div>

      {/* ── Divider ── */}
      <div
        className={cn(
          "mb-6 h-px w-full",
          isFilled ? "bg-white/20" : "bg-gray-100 dark:bg-gray-700/60",
        )}
      />

      {/* ── Features ── */}
      <ul className="mb-8 flex flex-1 flex-col gap-3">
        {features.map((feature, i) => (
          <li key={i} className="flex items-start gap-3">
            {/* icon */}
            <span
              className={cn(
                "mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full",
                feature.included
                  ? isFilled
                    ? "bg-white/20"
                    : "bg-opacity-15"
                  : isFilled
                    ? "bg-white/10"
                    : "bg-gray-100 dark:bg-gray-800",
              )}
              style={
                feature.included && !isFilled
                  ? { backgroundColor: `${accentColor}15` }
                  : undefined
              }
            >
              {feature.included ? (
                <Check
                  className="h-3 w-3"
                  style={isFilled ? { color: "white" } : accentText}
                  strokeWidth={3}
                />
              ) : (
                <X
                  className={cn(
                    "h-3 w-3",
                    isFilled ? "text-white/40" : "text-gray-400 dark:text-gray-500",
                  )}
                  strokeWidth={3}
                />
              )}
            </span>

            {/* text */}
            {feature.highlight ? (
              <span
                className={cn(
                  "inline-flex items-center rounded-md px-2 py-0.5 text-sm font-medium",
                  isFilled
                    ? "bg-white/15 text-white"
                    : "text-gray-700 dark:text-gray-200",
                )}
                style={
                  !isFilled
                    ? { backgroundColor: `${accentColor}10`, color: accentColor }
                    : undefined
                }
              >
                {feature.text}
              </span>
            ) : (
              <span
                className={cn(
                  "text-sm leading-snug",
                  feature.included
                    ? isFilled
                      ? "text-white"
                      : "text-gray-700 dark:text-gray-300"
                    : isFilled
                      ? "text-white/50 line-through"
                      : "text-gray-400 dark:text-gray-500 line-through",
                )}
              >
                {feature.text}
              </span>
            )}
          </li>
        ))}
      </ul>

      {/* ── CTA ── */}
      <button
        type="button"
        disabled={disabled}
        onClick={ctaOnClick}
        className={cn(
          "mt-auto w-full rounded-xl px-4 py-3 text-sm font-semibold transition-all duration-200",
          "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2",
          isFilled
            ? "bg-white hover:bg-white/90 active:scale-[0.98]"
            : "text-white hover:opacity-90 active:scale-[0.98]",
          disabled && "cursor-not-allowed opacity-60",
        )}
        style={
          isFilled
            ? { color: accentColor, ...({ "--tw-ring-color": accentColor } as React.CSSProperties) }
            : { ...accentBg, ...({ "--tw-ring-color": accentColor } as React.CSSProperties) }
        }
      >
        {ctaLabel}
      </button>
    </div>
  );
};
