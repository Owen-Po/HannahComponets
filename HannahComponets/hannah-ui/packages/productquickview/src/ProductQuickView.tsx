import { useState, useEffect, useCallback, type CSSProperties } from "react";
import { X, Star, ShoppingCart, ExternalLink } from "lucide-react";
import { cn } from "@hannah-ui/core";

/* ─── Types ─────────────────────────────── */

export interface ProductVariant {
  label: string;
  options: { value: string; available?: boolean }[];
}

export interface ProductQuickViewProps {
  isOpen: boolean;
  onClose: () => void;
  image: string;
  images?: string[];
  title: string;
  description?: string;
  price: number;
  originalPrice?: number;
  currency?: string;
  rating?: number;
  reviewCount?: number;
  variants?: ProductVariant[];
  selectedVariants?: Record<string, string>;
  onVariantChange?: (label: string, value: string) => void;
  onAddToCart?: () => void;
  onViewDetails?: () => void;
  inStock?: boolean;
  accentColor?: string;
  addToCartLabel?: string;
  viewDetailsLabel?: string;
  outOfStockLabel?: string;
  className?: string;
}

/* ─── Helpers ───────────────────────────── */

const Stars = ({ rating, accent }: { rating: number; accent: string }) => (
  <div className="flex items-center gap-0.5">
    {Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        size={16}
        className={cn(
          "shrink-0",
          i < Math.round(rating) ? "fill-current" : "text-neutral-600"
        )}
        style={i < Math.round(rating) ? { color: accent } : undefined}
      />
    ))}
  </div>
);

/* ─── Component ─────────────────────────── */

export function ProductQuickView({
  isOpen,
  onClose,
  image,
  images,
  title,
  description,
  price,
  originalPrice,
  currency = "$",
  rating,
  reviewCount,
  variants,
  selectedVariants = {},
  onVariantChange,
  onAddToCart,
  onViewDetails,
  inStock = true,
  accentColor = "#7c6aff",
  addToCartLabel = "Add to Cart",
  viewDetailsLabel = "View Details",
  outOfStockLabel = "Out of Stock",
  className,
}: ProductQuickViewProps) {
  const gallery = images?.length ? images : [image];
  const [activeIdx, setActiveIdx] = useState(0);
  const [visible, setVisible] = useState(false);

  /* animate in / out */
  useEffect(() => {
    if (isOpen) {
      requestAnimationFrame(() => setVisible(true));
    } else {
      setVisible(false);
    }
  }, [isOpen]);

  const handleBackdropClick = useCallback(
    (e: React.MouseEvent) => {
      if (e.target === e.currentTarget) onClose();
    },
    [onClose]
  );

  /* close on Escape */
  useEffect(() => {
    if (!isOpen) return;
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const accentVars = { "--pqv-accent": accentColor } as CSSProperties;
  const discount =
    originalPrice && originalPrice > price
      ? Math.round(((originalPrice - price) / originalPrice) * 100)
      : null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label={title}
      className={cn(
        "fixed inset-0 z-50 flex items-center justify-center p-4 transition-all duration-300",
        visible ? "bg-black/60 backdrop-blur-sm" : "bg-black/0 backdrop-blur-0 pointer-events-none"
      )}
      style={accentVars}
      onClick={handleBackdropClick}
    >
      <div
        className={cn(
          "relative w-full max-w-3xl max-h-[90vh] overflow-y-auto rounded-2xl bg-neutral-900 border border-neutral-800 shadow-2xl transition-all duration-300",
          visible ? "scale-100 opacity-100" : "scale-95 opacity-0",
          className
        )}
      >
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-3 right-3 z-10 p-1.5 rounded-full bg-neutral-800/80 hover:bg-neutral-700 text-neutral-400 hover:text-white transition-colors"
          aria-label="Close"
        >
          <X size={18} />
        </button>

        <div className="flex flex-col md:flex-row">
          {/* ── Left: Image gallery ── */}
          <div className="md:w-1/2 p-4 flex flex-col gap-3">
            <div className="relative aspect-square w-full overflow-hidden rounded-xl bg-neutral-800">
              <img
                src={gallery[activeIdx]}
                alt={title}
                className="h-full w-full object-cover transition-opacity duration-200"
              />
              {discount && (
                <span
                  className="absolute top-2 left-2 text-xs font-semibold text-white px-2 py-0.5 rounded-md"
                  style={{ backgroundColor: accentColor }}
                >
                  -{discount}%
                </span>
              )}
            </div>

            {gallery.length > 1 && (
              <div className="flex gap-2 overflow-x-auto pb-1">
                {gallery.map((src, i) => (
                  <button
                    key={i}
                    onClick={() => setActiveIdx(i)}
                    className={cn(
                      "shrink-0 h-14 w-14 rounded-lg overflow-hidden border-2 transition-colors",
                      i === activeIdx ? "border-[var(--pqv-accent)]" : "border-transparent hover:border-neutral-600"
                    )}
                  >
                    <img src={src} alt="" className="h-full w-full object-cover" />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* ── Right: Details ── */}
          <div className="md:w-1/2 p-4 md:pl-2 flex flex-col gap-4">
            <div>
              <h2 className="text-xl font-bold text-white leading-tight">{title}</h2>

              {rating != null && (
                <div className="mt-1.5 flex items-center gap-2">
                  <Stars rating={rating} accent={accentColor} />
                  {reviewCount != null && (
                    <span className="text-xs text-neutral-400">
                      ({reviewCount.toLocaleString()})
                    </span>
                  )}
                </div>
              )}
            </div>

            {/* Price */}
            <div className="flex items-baseline gap-2">
              <span className="text-2xl font-bold text-white">
                {currency}{price.toFixed(2)}
              </span>
              {originalPrice && originalPrice > price && (
                <span className="text-sm text-neutral-500 line-through">
                  {currency}{originalPrice.toFixed(2)}
                </span>
              )}
            </div>

            {description && (
              <p className="text-sm text-neutral-400 leading-relaxed line-clamp-4">
                {description}
              </p>
            )}

            {/* Variants */}
            {variants?.map((variant) => (
              <div key={variant.label}>
                <p className="text-xs font-medium text-neutral-300 mb-2 uppercase tracking-wide">
                  {variant.label}
                </p>
                <div className="flex flex-wrap gap-2">
                  {variant.options.map((opt) => {
                    const selected = selectedVariants[variant.label] === opt.value;
                    const unavailable = opt.available === false;
                    const isColor = variant.label.toLowerCase() === "color";

                    if (isColor) {
                      return (
                        <button
                          key={opt.value}
                          disabled={unavailable}
                          onClick={() => onVariantChange?.(variant.label, opt.value)}
                          title={opt.value}
                          className={cn(
                            "h-8 w-8 rounded-full border-2 transition-all relative",
                            selected ? "border-[var(--pqv-accent)] scale-110" : "border-neutral-700 hover:border-neutral-500",
                            unavailable && "opacity-30 cursor-not-allowed"
                          )}
                          style={{ backgroundColor: opt.value.toLowerCase() }}
                        >
                          {unavailable && (
                            <span className="absolute inset-0 flex items-center justify-center">
                              <span className="block w-full h-0.5 bg-neutral-400 rotate-45 rounded" />
                            </span>
                          )}
                        </button>
                      );
                    }

                    return (
                      <button
                        key={opt.value}
                        disabled={unavailable}
                        onClick={() => onVariantChange?.(variant.label, opt.value)}
                        className={cn(
                          "px-3 py-1.5 rounded-lg text-sm font-medium border transition-all",
                          selected
                            ? "text-white border-[var(--pqv-accent)] bg-[var(--pqv-accent)]/15"
                            : "text-neutral-300 border-neutral-700 hover:border-neutral-500",
                          unavailable && "opacity-40 cursor-not-allowed line-through"
                        )}
                      >
                        {opt.value}
                      </button>
                    );
                  })}
                </div>
              </div>
            ))}

            {/* Actions */}
            <div className="mt-auto flex flex-col gap-2 pt-2">
              <button
                disabled={!inStock}
                onClick={onAddToCart}
                className={cn(
                  "flex items-center justify-center gap-2 w-full py-2.5 rounded-xl text-sm font-semibold transition-all",
                  inStock
                    ? "text-white hover:brightness-110 active:scale-[0.98]"
                    : "bg-neutral-800 text-neutral-500 cursor-not-allowed"
                )}
                style={inStock ? { backgroundColor: accentColor } : undefined}
              >
                <ShoppingCart size={16} />
                {inStock ? addToCartLabel : outOfStockLabel}
              </button>

              {onViewDetails && (
                <button
                  onClick={onViewDetails}
                  className="flex items-center justify-center gap-1.5 w-full py-2 rounded-xl text-sm font-medium text-neutral-400 hover:text-white border border-neutral-800 hover:border-neutral-600 transition-colors"
                >
                  {viewDetailsLabel}
                  <ExternalLink size={14} />
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductQuickView;
