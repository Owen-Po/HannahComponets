import { useState } from "react";
import { Heart, ShoppingBag, Star, ChevronLeft, ChevronRight } from "lucide-react";
import { cn } from "../../utils/cn";

/* ─────────────────────────────────────────
   Types
───────────────────────────────────────── */

export interface ProductCardProps {
  image: string;
  images?: string[];
  title: string;
  subtitle?: string;
  price: number;
  originalPrice?: number;
  currency?: string;
  rating?: number;
  reviewCount?: number;
  badge?: string;
  badgeVariant?: "accent" | "danger" | "success" | "dark";
  inStock?: boolean;
  onAddToCart?: () => void;
  onWishlist?: () => void;
  isWishlisted?: boolean;
  href?: string;
  onClick?: () => void;
  variant?: "default" | "horizontal" | "minimal" | "featured";
  accentColor?: string;
  addToCartLabel?: string;
  soldOutLabel?: string;
  className?: string;
}

/* ─────────────────────────────────────────
   Helpers
───────────────────────────────────────── */

const fmt = (n: number, c: string) =>
  `${c}${n % 1 === 0 ? n.toLocaleString("en-US") : n.toLocaleString("en-US", { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`;

const pct = (orig: number, curr: number) =>
  `-${Math.round(((orig - curr) / orig) * 100)}%`;

/* ─────────────────────────────────────────
   Sub-components
───────────────────────────────────────── */

function Stars({ value, count }: { value: number; count?: number }) {
  return (
    <div className="flex items-center gap-1.5">
      <div className="flex gap-px">
        {Array.from({ length: 5 }, (_, i) => (
          <Star
            key={i}
            size={12}
            className={cn(
              "transition-colors",
              i < Math.round(value)
                ? "fill-amber-400 text-amber-400"
                : "fill-gray-200 text-gray-200 dark:fill-gray-700 dark:text-gray-700",
            )}
          />
        ))}
      </div>
      {count !== undefined && (
        <span className="text-[11px] tabular-nums text-gray-400 dark:text-gray-500">
          ({count.toLocaleString()})
        </span>
      )}
    </div>
  );
}

function ImageGallery({
  images,
  alt,
  inStock,
  variant,
}: {
  images: string[];
  alt: string;
  inStock: boolean;
  variant: string;
}) {
  const [idx, setIdx] = useState(0);
  const multi = images.length > 1;

  return (
    <div className="relative h-full w-full overflow-hidden">
      {/* Main image with crossfade */}
      {images.map((src, i) => (
        <img
          key={src}
          src={src}
          alt={i === 0 ? alt : `${alt} ${i + 1}`}
          className={cn(
            "absolute inset-0 h-full w-full object-cover transition-all duration-700 ease-out",
            i === idx ? "opacity-100 scale-100" : "opacity-0 scale-105",
            !inStock && "grayscale-[60%]",
          )}
          loading="lazy"
          draggable={false}
        />
      ))}

      {/* Hover zoom overlay — only on single image */}
      {!multi && (
        <div className="absolute inset-0 bg-transparent transition-transform duration-700 ease-out group-hover:scale-[1.04]">
          <img
            src={images[0]}
            alt=""
            aria-hidden
            className={cn(
              "h-full w-full object-cover opacity-0 transition-opacity duration-700 group-hover:opacity-100",
              !inStock && "grayscale-[60%]",
            )}
            loading="lazy"
            draggable={false}
          />
        </div>
      )}

      {/* Nav arrows — multi image only */}
      {multi && (
        <>
          <button
            type="button"
            onClick={(e) => { e.preventDefault(); e.stopPropagation(); setIdx((i) => (i - 1 + images.length) % images.length); }}
            className="absolute left-2 top-1/2 z-10 flex h-7 w-7 -translate-y-1/2 items-center justify-center rounded-full bg-white/80 text-gray-700 opacity-0 shadow-sm backdrop-blur-sm transition-all duration-300 hover:bg-white group-hover:opacity-100 dark:bg-gray-900/80 dark:text-gray-200 dark:hover:bg-gray-900"
            aria-label="Previous image"
          >
            <ChevronLeft size={14} strokeWidth={2.5} />
          </button>
          <button
            type="button"
            onClick={(e) => { e.preventDefault(); e.stopPropagation(); setIdx((i) => (i + 1) % images.length); }}
            className="absolute right-2 top-1/2 z-10 flex h-7 w-7 -translate-y-1/2 items-center justify-center rounded-full bg-white/80 text-gray-700 opacity-0 shadow-sm backdrop-blur-sm transition-all duration-300 hover:bg-white group-hover:opacity-100 dark:bg-gray-900/80 dark:text-gray-200 dark:hover:bg-gray-900"
            aria-label="Next image"
          >
            <ChevronRight size={14} strokeWidth={2.5} />
          </button>

          {/* Indicator bar */}
          <div className="absolute bottom-2.5 left-1/2 z-10 flex -translate-x-1/2 gap-1 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
            {images.map((_, i) => (
              <span
                key={i}
                className={cn(
                  "block h-[3px] rounded-full transition-all duration-300",
                  i === idx ? "w-4 bg-white" : "w-1.5 bg-white/40",
                )}
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
}

/* ─────────────────────────────────────────
   ProductCard
───────────────────────────────────────── */

export function ProductCard({
  image,
  images,
  title,
  subtitle,
  price,
  originalPrice,
  currency = "$",
  rating,
  reviewCount,
  badge,
  badgeVariant = "accent",
  inStock = true,
  onAddToCart,
  onWishlist,
  isWishlisted = false,
  href,
  onClick,
  variant = "default",
  accentColor = "#7c6aff",
  addToCartLabel = "Add to Cart",
  soldOutLabel = "Sold Out",
  className,
}: ProductCardProps) {
  const allImages = images?.length ? images : [image];
  const hasDiscount = originalPrice !== undefined && originalPrice > price;

  const badgeColors: Record<string, string> = {
    accent: accentColor,
    danger: "#ef4444",
    success: "#10b981",
    dark: "#18181b",
  };

  /* ── Handlers ── */
  const handleClick = (e: React.MouseEvent) => {
    if (onClick) { onClick(); return; }
    if (!href) e.preventDefault();
  };

  const stop = (e: React.MouseEvent, fn?: () => void) => {
    e.preventDefault();
    e.stopPropagation();
    fn?.();
  };

  /* ── Badge ── */
  const badgeEl = badge && inStock && (
    <span
      className="absolute left-3 top-3 z-10 rounded-md px-2 py-0.5 text-[11px] font-semibold uppercase tracking-wider text-white"
      style={{ backgroundColor: badgeColors[badgeVariant] ?? accentColor }}
    >
      {badge}
    </span>
  );

  /* ── Sold out ── */
  const soldOutEl = !inStock && (
    <div className="absolute inset-0 z-10 flex items-center justify-center">
      <span className="rounded-md bg-black/70 px-4 py-1.5 text-[11px] font-bold uppercase tracking-[0.12em] text-white backdrop-blur-sm">
        {soldOutLabel}
      </span>
    </div>
  );

  /* ── Wishlist ── */
  const wishlistEl = onWishlist && (
    <button
      type="button"
      onClick={(e) => stop(e, onWishlist)}
      className={cn(
        "absolute right-3 top-3 z-20 flex h-8 w-8 items-center justify-center rounded-full transition-all duration-300",
        "bg-white/70 shadow-sm backdrop-blur-sm hover:bg-white dark:bg-gray-900/70 dark:hover:bg-gray-900",
        variant === "default" && "opacity-0 translate-y-1 group-hover:opacity-100 group-hover:translate-y-0",
      )}
      aria-label={isWishlisted ? "Remove from wishlist" : "Add to wishlist"}
    >
      <Heart
        size={15}
        strokeWidth={isWishlisted ? 0 : 2}
        className={cn(
          "transition-all duration-300",
          isWishlisted
            ? "fill-red-500 text-red-500 scale-110"
            : "text-gray-600 dark:text-gray-300",
        )}
      />
    </button>
  );

  /* ── Quick add ── */
  const quickAddEl = onAddToCart && inStock && variant === "default" && (
    <button
      type="button"
      onClick={(e) => stop(e, onAddToCart)}
      className="absolute bottom-0 left-0 z-20 flex w-full items-center justify-center gap-2 bg-black/80 py-2.5 text-[12px] font-semibold uppercase tracking-[0.08em] text-white opacity-0 backdrop-blur-sm transition-all duration-300 group-hover:opacity-100 dark:bg-white/90 dark:text-gray-900"
    >
      <ShoppingBag size={13} strokeWidth={2.5} />
      {addToCartLabel}
    </button>
  );

  /* ──────────────────────────────────
     VARIANT: horizontal
  ────────────────────────────────── */
  if (variant === "horizontal") {
    return (
      <a
        href={href ?? "#"}
        onClick={handleClick}
        className={cn(
          "group flex overflow-hidden rounded-xl border border-gray-100 bg-white transition-all duration-300 hover:shadow-md dark:border-gray-800 dark:bg-gray-900",
          className,
        )}
      >
        {/* Image */}
        <div className="relative h-36 w-36 shrink-0 overflow-hidden bg-gray-50 sm:h-44 sm:w-44 dark:bg-gray-800">
          <ImageGallery images={allImages} alt={title} inStock={inStock} variant={variant} />
          {badgeEl}
          {soldOutEl}
        </div>

        {/* Info */}
        <div className="flex flex-1 flex-col justify-center gap-1 px-5 py-4">
          {subtitle && (
            <span className="text-[11px] font-medium uppercase tracking-wider text-gray-400 dark:text-gray-500">
              {subtitle}
            </span>
          )}
          <h3 className="line-clamp-1 text-[15px] font-semibold text-gray-900 dark:text-gray-100">
            {title}
          </h3>
          {rating !== undefined && <Stars value={rating} count={reviewCount} />}
          <div className="mt-1 flex items-baseline gap-2">
            <span className="text-[15px] font-bold text-gray-900 dark:text-white">
              {fmt(price, currency)}
            </span>
            {hasDiscount && (
              <span className="text-[13px] text-gray-400 line-through">{fmt(originalPrice, currency)}</span>
            )}
            {hasDiscount && (
              <span className="text-[12px] font-semibold" style={{ color: "#ef4444" }}>
                {pct(originalPrice, price)}
              </span>
            )}
          </div>
        </div>

        {/* Wishlist */}
        {onWishlist && (
          <div className="flex items-center pr-4">
            <button
              type="button"
              onClick={(e) => stop(e, onWishlist)}
              className="flex h-9 w-9 items-center justify-center rounded-full text-gray-300 transition-colors hover:text-red-500 dark:text-gray-600"
              aria-label={isWishlisted ? "Remove from wishlist" : "Add to wishlist"}
            >
              <Heart size={18} className={cn(isWishlisted && "fill-red-500 text-red-500")} strokeWidth={isWishlisted ? 0 : 1.5} />
            </button>
          </div>
        )}
      </a>
    );
  }

  /* ──────────────────────────────────
     VARIANT: minimal
  ────────────────────────────────── */
  if (variant === "minimal") {
    return (
      <a
        href={href ?? "#"}
        onClick={handleClick}
        className={cn("group flex flex-col", className)}
      >
        {/* Image */}
        <div className="relative aspect-[3/4] w-full overflow-hidden rounded-lg bg-gray-50 dark:bg-gray-800">
          <ImageGallery images={allImages} alt={title} inStock={inStock} variant={variant} />
          {wishlistEl}
          {soldOutEl}
        </div>

        {/* Info — tight, minimal */}
        <div className="mt-3 flex flex-col gap-0.5">
          {subtitle && (
            <span className="text-[11px] font-medium uppercase tracking-wider text-gray-400 dark:text-gray-500">
              {subtitle}
            </span>
          )}
          <h3 className="line-clamp-1 text-[13px] font-medium text-gray-900 dark:text-gray-100">
            {title}
          </h3>
          <div className="flex items-baseline gap-1.5">
            <span className="text-[13px] font-semibold text-gray-900 dark:text-white">
              {fmt(price, currency)}
            </span>
            {hasDiscount && (
              <span className="text-[12px] text-gray-400 line-through">{fmt(originalPrice, currency)}</span>
            )}
          </div>
        </div>
      </a>
    );
  }

  /* ──────────────────────────────────
     VARIANT: featured (hero card)
  ────────────────────────────────── */
  if (variant === "featured") {
    return (
      <a
        href={href ?? "#"}
        onClick={handleClick}
        className={cn(
          "group relative flex aspect-[4/5] w-full flex-col justify-end overflow-hidden rounded-2xl",
          className,
        )}
      >
        {/* Full-bleed image */}
        <div className="absolute inset-0">
          <ImageGallery images={allImages} alt={title} inStock={inStock} variant={variant} />
        </div>

        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />

        {/* Badge + Wishlist */}
        {badgeEl}
        {wishlistEl}
        {soldOutEl}

        {/* Content at bottom */}
        <div className="relative z-10 flex flex-col gap-1.5 p-6">
          {subtitle && (
            <span className="text-[11px] font-medium uppercase tracking-[0.14em] text-white/60">
              {subtitle}
            </span>
          )}
          <h3 className="text-xl font-bold leading-tight text-white">
            {title}
          </h3>
          <div className="flex items-baseline gap-2">
            <span className="text-lg font-bold text-white">{fmt(price, currency)}</span>
            {hasDiscount && (
              <span className="text-sm text-white/50 line-through">{fmt(originalPrice, currency)}</span>
            )}
          </div>
          {onAddToCart && inStock && (
            <button
              type="button"
              onClick={(e) => stop(e, onAddToCart)}
              className="mt-3 flex items-center justify-center gap-2 rounded-lg bg-white px-5 py-2.5 text-[13px] font-semibold text-gray-900 transition-all duration-200 hover:bg-white/90 active:scale-[0.98]"
            >
              <ShoppingBag size={14} strokeWidth={2.5} />
              {addToCartLabel}
            </button>
          )}
        </div>
      </a>
    );
  }

  /* ──────────────────────────────────
     VARIANT: default
  ────────────────────────────────── */
  return (
    <a
      href={href ?? "#"}
      onClick={handleClick}
      className={cn(
        "group flex flex-col overflow-hidden rounded-xl border border-gray-100/80 bg-white transition-all duration-300 hover:shadow-lg dark:border-gray-800/80 dark:bg-gray-900 dark:hover:border-gray-700",
        className,
      )}
    >
      {/* Image — 4:5 aspect for elegance */}
      <div className="relative aspect-[4/5] w-full overflow-hidden bg-gray-50 dark:bg-gray-800">
        <ImageGallery images={allImages} alt={title} inStock={inStock} variant={variant} />
        {badgeEl}
        {wishlistEl}
        {soldOutEl}
        {quickAddEl}
      </div>

      {/* Info — deliberate spacing rhythm: 16px padding, 4px gaps */}
      <div className="flex flex-col gap-1 p-4">
        {/* Category/brand subtitle */}
        {subtitle && (
          <span className="text-[11px] font-medium uppercase tracking-[0.1em] text-gray-400 dark:text-gray-500">
            {subtitle}
          </span>
        )}

        {/* Title — max 2 lines */}
        <h3 className="line-clamp-2 text-[14px] font-medium leading-snug text-gray-900 dark:text-gray-100">
          {title}
        </h3>

        {/* Rating */}
        {rating !== undefined && <Stars value={rating} count={reviewCount} />}

        {/* Price block — strongest visual weight */}
        <div className="mt-1.5 flex items-baseline gap-2">
          <span
            className={cn(
              "text-[15px] font-bold tabular-nums",
              hasDiscount ? "text-red-600 dark:text-red-400" : "text-gray-900 dark:text-white",
            )}
          >
            {fmt(price, currency)}
          </span>
          {hasDiscount && (
            <span className="text-[13px] tabular-nums text-gray-400 line-through dark:text-gray-500">
              {fmt(originalPrice, currency)}
            </span>
          )}
          {hasDiscount && (
            <span className="rounded bg-red-50 px-1.5 py-0.5 text-[10px] font-bold tabular-nums text-red-600 dark:bg-red-950/40 dark:text-red-400">
              {pct(originalPrice, price)}
            </span>
          )}
        </div>
      </div>
    </a>
  );
}
