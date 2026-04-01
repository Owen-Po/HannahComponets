import { TrendingUp, TrendingDown, Minus } from "lucide-react";
import { cn } from "@hannah-ui/core";

/* ─────────────────────────────────────────
   Types
───────────────────────────────────────── */
export interface MetricCardProps {
  title: string;
  value: string | number;
  change?: { value: number; label?: string };
  sparkline?: number[];
  icon?: React.ElementType;
  variant?: "default" | "glass" | "bordered";
  trend?: "up" | "down" | "neutral";
  accentColor?: string;
  sparklineColor?: string;
  prefix?: string;
  suffix?: string;
  loading?: boolean;
  onClick?: () => void;
  className?: string;
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
   Sparkline — pure SVG mini chart
───────────────────────────────────────── */
function toPath(data: number[]): string {
  if (data.length < 2) return "";

  const min = Math.min(...data);
  const max = Math.max(...data);
  const range = max - min || 1;

  const points = data.map((v, i) => ({
    x: (i / (data.length - 1)) * 100,
    y: 40 - ((v - min) / range) * 36 - 2, // 2px padding top/bottom
  }));

  // Build smooth path with quadratic bezier curves
  let d = `M ${points[0].x},${points[0].y}`;

  for (let i = 0; i < points.length - 1; i++) {
    const curr = points[i];
    const next = points[i + 1];
    const cpX = (curr.x + next.x) / 2;
    d += ` Q ${cpX},${curr.y} ${cpX},${(curr.y + next.y) / 2}`;
    if (i === points.length - 2) {
      d += ` T ${next.x},${next.y}`;
    }
  }

  return d;
}

function toAreaPath(data: number[]): string {
  if (data.length < 2) return "";

  const linePath = toPath(data);
  const lastX = 100;
  return `${linePath} L ${lastX},40 L 0,40 Z`;
}

const Sparkline = ({
  data,
  color = "#6366f1",
}: {
  data: number[];
  color?: string;
}) => {
  const gradientId = `spark-grad-${color.replace(/[^a-zA-Z0-9]/g, "")}`;

  return (
    <svg
      viewBox="0 0 100 40"
      preserveAspectRatio="none"
      className="h-[60px] w-full"
      aria-hidden="true"
    >
      <defs>
        <linearGradient id={gradientId} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor={color} stopOpacity={0.3} />
          <stop offset="100%" stopColor={color} stopOpacity={0} />
        </linearGradient>
      </defs>
      <path d={toAreaPath(data)} fill={`url(#${gradientId})`} />
      <path
        d={toPath(data)}
        fill="none"
        stroke={color}
        strokeWidth="2"
        vectorEffect="non-scaling-stroke"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

/* ─────────────────────────────────────────
   Trend indicator
───────────────────────────────────────── */
const trendConfig = {
  up: {
    icon: TrendingUp,
    text: "text-emerald-600 dark:text-emerald-400",
    bg: "bg-emerald-50 dark:bg-emerald-500/10",
    sign: "+",
    defaultSparkline: "#10b981",
  },
  down: {
    icon: TrendingDown,
    text: "text-red-600 dark:text-red-400",
    bg: "bg-red-50 dark:bg-red-500/10",
    sign: "",
    defaultSparkline: "#ef4444",
  },
  neutral: {
    icon: Minus,
    text: "text-gray-500 dark:text-gray-400",
    bg: "bg-gray-100 dark:bg-gray-500/10",
    sign: "",
    defaultSparkline: "#6b7280",
  },
};

/* ─────────────────────────────────────────
   Variant styles
───────────────────────────────────────── */
const variantStyles = {
  default:
    "bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 shadow-sm",
  glass:
    "bg-white/60 dark:bg-gray-900/60 backdrop-blur-xl border border-white/20 dark:border-gray-700/40 shadow-lg",
  bordered: "bg-white dark:bg-gray-900 border-2 border-gray-200 dark:border-gray-700",
};

/* ─────────────────────────────────────────
   MetricCard
───────────────────────────────────────── */
export const MetricCard: React.FC<MetricCardProps> = ({
  title,
  value,
  change,
  sparkline,
  icon: Icon,
  variant = "default",
  trend = "neutral",
  accentColor,
  sparklineColor,
  prefix,
  suffix,
  loading = false,
  onClick,
  className,
}) => {
  const t = trendConfig[trend];
  const resolvedSparkColor = sparklineColor ?? accentColor ?? t.defaultSparkline;

  if (loading) {
    return (
      <div
        className={cn(
          "rounded-xl p-5 overflow-hidden",
          variantStyles[variant],
          className,
        )}
      >
        <div className="flex items-center gap-3 mb-4">
          <Skeleton className="h-10 w-10 rounded-full" />
          <Skeleton className="h-4 w-24 rounded" />
        </div>
        <Skeleton className="h-8 w-32 rounded mb-2" />
        <Skeleton className="h-4 w-20 rounded mb-4" />
        <Skeleton className="h-[60px] w-full rounded" />
      </div>
    );
  }

  return (
    <div
      role={onClick ? "button" : undefined}
      tabIndex={onClick ? 0 : undefined}
      onClick={onClick}
      onKeyDown={(e) => {
        if (onClick && (e.key === "Enter" || e.key === " ")) {
          e.preventDefault();
          onClick();
        }
      }}
      className={cn(
        "rounded-xl overflow-hidden relative transition-all duration-200",
        variantStyles[variant],
        onClick && "cursor-pointer hover:shadow-md active:scale-[0.99]",
        className,
      )}
    >
      {/* Accent left bar for bordered variant */}
      {variant === "bordered" && (
        <div
          className="absolute left-0 top-0 bottom-0 w-1 rounded-l-xl"
          style={{ backgroundColor: accentColor ?? t.defaultSparkline }}
        />
      )}

      <div className="p-5 pb-0">
        {/* Icon + Title */}
        <div className="flex items-center gap-3 mb-3">
          {Icon && (
            <div
              className="flex h-10 w-10 items-center justify-center rounded-full"
              style={{
                backgroundColor: `${accentColor ?? t.defaultSparkline}15`,
                color: accentColor ?? t.defaultSparkline,
              }}
            >
              <Icon className="h-5 w-5" />
            </div>
          )}
          <span className="text-sm font-medium text-gray-500 dark:text-gray-400">
            {title}
          </span>
        </div>

        {/* Value */}
        <div className="text-3xl font-bold tabular-nums text-gray-900 dark:text-white mb-1">
          {prefix}
          {value}
          {suffix}
        </div>

        {/* Change badge */}
        {change && (
          <div className="flex items-center gap-1.5 mb-3">
            <span
              className={cn(
                "inline-flex items-center gap-1 rounded-full px-2 py-0.5 text-xs font-semibold",
                t.bg,
                t.text,
              )}
            >
              <t.icon className="h-3 w-3" />
              {t.sign}
              {Math.abs(change.value)}%
            </span>
            {change.label && (
              <span className="text-xs text-gray-400 dark:text-gray-500">
                {change.label}
              </span>
            )}
          </div>
        )}
      </div>

      {/* Sparkline */}
      {sparkline && sparkline.length >= 2 && (
        <div className="mt-auto">
          <Sparkline data={sparkline} color={resolvedSparkColor} />
        </div>
      )}
    </div>
  );
};
