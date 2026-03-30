import { cn } from "../../utils/cn";

/* ─────────────────────────────────────────
   Types
───────────────────────────────────────── */
export interface CategoryItem {
  id: string;
  label: string;
  image: string;
  href?: string;
  onClick?: () => void;
  itemCount?: number;
  description?: string;
}

export interface CategoryShowcaseProps {
  categories: CategoryItem[];
  variant?: "grid" | "scroll" | "featured";
  columns?: number;
  aspectRatio?: "square" | "video" | "portrait";
  overlay?: "gradient" | "dark" | "none";
  accentColor?: string;
  className?: string;
  itemCountLabel?: string;
}

/* ─────────────────────────────────────────
   Helpers
───────────────────────────────────────── */
const aspectMap = {
  square: "aspect-square",
  video: "aspect-video",
  portrait: "aspect-[3/4]",
} as const;

const overlayClasses = {
  gradient:
    "bg-gradient-to-t from-black/70 via-black/20 to-transparent",
  dark: "bg-black/50",
  none: "",
} as const;

/* ─────────────────────────────────────────
   Card
───────────────────────────────────────── */
function CategoryCard({
  item,
  aspectRatio = "square",
  overlay = "gradient",
  accentColor = "#7c6aff",
  itemCountLabel = "products",
  className,
}: {
  item: CategoryItem;
  aspectRatio?: CategoryShowcaseProps["aspectRatio"];
  overlay?: CategoryShowcaseProps["overlay"];
  accentColor?: string;
  itemCountLabel?: string;
  className?: string;
}) {
  return (
    <a
      href={item.href ?? "#"}
      onClick={(e) => { if (!item.href) e.preventDefault(); item.onClick?.(); }}
      role={!item.href ? "button" : undefined}
      tabIndex={0}
      className={cn(
        "group relative block overflow-hidden rounded-2xl cursor-pointer",
        "focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-current",
        aspectMap[aspectRatio ?? "square"],
        className,
      )}
    >
      {/* Image */}
      <img
        src={item.image}
        alt={item.label}
        className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 ease-out group-hover:scale-110"
      />

      {/* Overlay */}
      {overlay !== "none" && (
        <div
          className={cn(
            "absolute inset-0 transition-colors duration-300 group-hover:bg-black/10 dark:group-hover:bg-black/20",
            overlayClasses[overlay ?? "gradient"],
          )}
        />
      )}

      {/* Accent top border on hover */}
      <div
        className="absolute inset-x-0 top-0 h-1 origin-left scale-x-0 transition-transform duration-300 group-hover:scale-x-100"
        style={{ backgroundColor: accentColor }}
      />

      {/* Text */}
      <div className="absolute inset-x-0 bottom-0 flex flex-col gap-0.5 p-4 md:p-5">
        <span className="text-lg font-bold leading-tight text-white drop-shadow-md md:text-xl">
          {item.label}
        </span>

        {item.description && (
          <span className="line-clamp-2 text-sm text-white/70">
            {item.description}
          </span>
        )}

        {item.itemCount != null && (
          <span className="mt-1 text-xs font-medium tracking-wide text-white/60 uppercase">
            {item.itemCount} {itemCountLabel}
          </span>
        )}
      </div>
    </a>
  );
}

/* ─────────────────────────────────────────
   CategoryShowcase
───────────────────────────────────────── */
export function CategoryShowcase({
  categories,
  variant = "grid",
  columns = 4,
  aspectRatio = "square",
  overlay = "gradient",
  accentColor = "#7c6aff",
  className,
  itemCountLabel = "products",
}: CategoryShowcaseProps) {
  const cardProps = { aspectRatio, overlay, accentColor, itemCountLabel };

  /* --- Grid --- */
  if (variant === "grid") {
    return (
      <div
        className={cn("grid gap-4", className)}
        style={{
          gridTemplateColumns: `repeat(auto-fill, minmax(min(200px, 100%), 1fr))`,
          ...(columns
            ? { gridTemplateColumns: `repeat(${columns}, minmax(0, 1fr))` }
            : {}),
        }}
      >
        {categories.map((cat) => (
          <CategoryCard key={cat.id} item={cat} {...cardProps} />
        ))}
      </div>
    );
  }

  /* --- Scroll --- */
  if (variant === "scroll") {
    return (
      <div
        className={cn(
          "flex gap-4 overflow-x-auto scroll-smooth snap-x snap-mandatory pb-4",
          "scrollbar-thin scrollbar-track-transparent scrollbar-thumb-neutral-300 dark:scrollbar-thumb-neutral-700",
          className,
        )}
      >
        {categories.map((cat) => (
          <CategoryCard
            key={cat.id}
            item={cat}
            {...cardProps}
            className="w-56 flex-shrink-0 snap-start md:w-64"
          />
        ))}
      </div>
    );
  }

  /* --- Featured (bento) --- */
  return (
    <div
      className={cn(
        "grid auto-rows-[200px] gap-4 md:grid-cols-4 md:auto-rows-[220px]",
        className,
      )}
    >
      {categories.map((cat, i) => (
        <CategoryCard
          key={cat.id}
          item={cat}
          {...cardProps}
          className={cn(
            i === 0 && "md:col-span-2 md:row-span-2",
            "aspect-auto h-full",
          )}
        />
      ))}
    </div>
  );
}

export default CategoryShowcase;
