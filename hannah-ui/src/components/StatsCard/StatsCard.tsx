import { TrendingUp, TrendingDown, Minus } from "lucide-react";
import { cn } from "../../utils/cn";

/* ─────────────────────────────────────────
   Types
───────────────────────────────────────── */
export interface StatsCardTrend {
  value: number;
  direction: "up" | "down" | "neutral";
}

export interface StatsCardProps {
  title: string;
  value: string | number;
  description?: string;
  icon?: React.ReactNode;
  trend?: StatsCardTrend;
  accentColor?: string;
  loading?: boolean;
  onClick?: () => void;
}

/* ─────────────────────────────────────────
   Skeleton placeholder
───────────────────────────────────────── */
const Skeleton = ({ className }: { className?: string }) => (
  <div
    className={cn(
      "animate-pulse rounded bg-gray-200 dark:bg-gray-700",
      className,
    )}
  />
);

/* ─────────────────────────────────────────
   Trend badge
───────────────────────────────────────── */
const TrendBadge = ({ trend }: { trend: StatsCardTrend }) => {
  const Icon =
    trend.direction === "up"
      ? TrendingUp
      : trend.direction === "down"
        ? TrendingDown
        : Minus;

  const color =
    trend.direction === "up"
      ? "text-emerald-600 bg-emerald-50 dark:text-emerald-400 dark:bg-emerald-500/10"
      : trend.direction === "down"
        ? "text-red-600 bg-red-50 dark:text-red-400 dark:bg-red-500/10"
        : "text-gray-500 bg-gray-100 dark:text-gray-400 dark:bg-gray-700/50";

  return (
    <span
      className={cn(
        "inline-flex items-center gap-1 rounded-full px-2 py-0.5 text-xs font-medium",
        color,
      )}
    >
      <Icon size={13} />
      {trend.value}%
    </span>
  );
};

/* ─────────────────────────────────────────
   Main component
───────────────────────────────────────── */
export const StatsCard = ({
  title,
  value,
  description,
  icon,
  trend,
  accentColor = "#7c6aff",
  loading = false,
  onClick,
}: StatsCardProps) => {
  const isClickable = !!onClick;

  if (loading) {
    return (
      <div className="rounded-xl border border-gray-200 bg-white p-5 dark:border-gray-800 dark:bg-gray-900">
        <div className="flex items-start justify-between">
          <div className="flex-1 space-y-3">
            <Skeleton className="h-3 w-20" />
            <Skeleton className="h-7 w-28" />
            <Skeleton className="h-3 w-36" />
          </div>
          <Skeleton className="size-10 rounded-lg" />
        </div>
      </div>
    );
  }

  return (
    <div
      role={isClickable ? "button" : undefined}
      tabIndex={isClickable ? 0 : undefined}
      onClick={onClick}
      onKeyDown={
        isClickable
          ? (e) => {
              if (e.key === "Enter" || e.key === " ") {
                e.preventDefault();
                onClick();
              }
            }
          : undefined
      }
      className={cn(
        "rounded-xl border border-gray-200 bg-white p-5 transition-all dark:border-gray-800 dark:bg-gray-900",
        isClickable &&
          "cursor-pointer hover:-translate-y-0.5 hover:shadow-lg active:scale-[0.98] dark:hover:border-gray-700",
      )}
    >
      <div className="flex items-start justify-between">
        <div className="flex-1 space-y-1">
          <p className="text-[12.5px] font-medium uppercase tracking-[0.06em] text-gray-500 dark:text-gray-400">
            {title}
          </p>
          <p className="text-[1.65rem] font-bold leading-tight text-gray-900 dark:text-white">
            {value}
          </p>
          <div className="flex items-center gap-2 pt-0.5">
            {trend && <TrendBadge trend={trend} />}
            {description && (
              <span className="text-[12.5px] text-gray-500 dark:text-gray-500">
                {description}
              </span>
            )}
          </div>
        </div>

        {icon && (
          <div
            className="flex size-10 shrink-0 items-center justify-center rounded-lg"
            style={{ backgroundColor: `${accentColor}18`, color: accentColor }}
          >
            {icon}
          </div>
        )}
      </div>
    </div>
  );
};
