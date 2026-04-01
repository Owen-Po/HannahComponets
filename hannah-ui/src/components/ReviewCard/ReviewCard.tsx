import { type CSSProperties } from "react";
import { Star, ThumbsUp, CheckCircle, Store } from "lucide-react";
import { cn } from "../../utils/cn";

/* ─── Types ─────────────────────────────── */

export interface ReviewCardProps {
  author: string;
  avatar?: string;
  rating: number;
  date: string;
  title?: string;
  content: string;
  verified?: boolean;
  helpful?: { count: number; onHelpful?: () => void; hasVoted?: boolean };
  images?: string[];
  response?: { author: string; content: string; date: string };
  accentColor?: string;
  verifiedLabel?: string;
  helpfulLabel?: string;
  responseLabel?: string;
  className?: string;
}

/* ─── Helpers ───────────────────────────── */

function getInitials(name: string) {
  return name
    .split(" ")
    .slice(0, 2)
    .map((w) => w[0])
    .join("")
    .toUpperCase();
}

const Stars = ({ rating, accent }: { rating: number; accent: string }) => (
  <div className="flex items-center gap-0.5">
    {Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        size={14}
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

export function ReviewCard({
  author,
  avatar,
  rating,
  date,
  title,
  content,
  verified = false,
  helpful,
  images,
  response,
  accentColor = "#7c6aff",
  verifiedLabel = "Verified Purchase",
  helpfulLabel = "Helpful",
  responseLabel = "Store Response",
  className,
}: ReviewCardProps) {
  const vars = { "--rc-accent": accentColor } as CSSProperties;

  return (
    <div
      className={cn(
        "rounded-xl border border-neutral-800 bg-neutral-900 p-5 space-y-3",
        className
      )}
      style={vars}
    >
      {/* Header */}
      <div className="flex items-center gap-3">
        {avatar ? (
          <img
            src={avatar}
            alt={author}
            className="h-10 w-10 rounded-full object-cover shrink-0"
          />
        ) : (
          <div
            className="h-10 w-10 rounded-full flex items-center justify-center text-xs font-bold text-white shrink-0"
            style={{ backgroundColor: accentColor }}
          >
            {getInitials(author)}
          </div>
        )}

        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2 flex-wrap">
            <span className="text-sm font-semibold text-white">{author}</span>
            {verified && (
              <span className="inline-flex items-center gap-1 text-[11px] font-medium text-emerald-400">
                <CheckCircle size={12} />
                {verifiedLabel}
              </span>
            )}
          </div>
          <span className="text-xs text-neutral-500">{date}</span>
        </div>
      </div>

      {/* Stars */}
      <Stars rating={rating} accent={accentColor} />

      {/* Title + Content */}
      <div className="space-y-1">
        {title && <p className="text-sm font-semibold text-white">{title}</p>}
        <p className="text-sm text-neutral-300 leading-relaxed">{content}</p>
      </div>

      {/* Images */}
      {images && images.length > 0 && (
        <div className="flex gap-2 overflow-x-auto pt-1">
          {images.map((src, i) => (
            <img
              key={i}
              src={src}
              alt={`Review photo ${i + 1}`}
              className="h-16 w-16 rounded-lg object-cover shrink-0 border border-neutral-700"
            />
          ))}
        </div>
      )}

      {/* Helpful */}
      {helpful && (
        <div className="pt-1">
          <button
            onClick={helpful.onHelpful}
            className={cn(
              "inline-flex items-center gap-1.5 text-xs font-medium px-3 py-1.5 rounded-lg border transition-colors",
              helpful.hasVoted
                ? "text-[var(--rc-accent)] border-[var(--rc-accent)]/30 bg-[var(--rc-accent)]/10"
                : "text-neutral-400 border-neutral-700 hover:border-neutral-500 hover:text-neutral-200"
            )}
          >
            <ThumbsUp size={13} />
            {helpfulLabel} ({helpful.count})
          </button>
        </div>
      )}

      {/* Store response */}
      {response && (
        <div className="ml-4 mt-2 rounded-lg border border-neutral-800 bg-neutral-800/50 p-4 space-y-1.5">
          <div className="flex items-center gap-2">
            <Store size={14} className="text-neutral-400" />
            <span className="text-xs font-semibold text-neutral-300">
              {responseLabel} &mdash; {response.author}
            </span>
            <span className="text-[11px] text-neutral-500">{response.date}</span>
          </div>
          <p className="text-sm text-neutral-400 leading-relaxed">{response.content}</p>
        </div>
      )}
    </div>
  );
}

export default ReviewCard;
