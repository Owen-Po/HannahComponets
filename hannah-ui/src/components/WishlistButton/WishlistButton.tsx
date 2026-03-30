import React, { useState, useCallback } from "react";
import { Heart } from "lucide-react";
import { cn } from "../../utils/cn";

export interface WishlistButtonProps {
  isWishlisted: boolean;
  onToggle: () => void;
  size?: "sm" | "md" | "lg";
  variant?: "default" | "circle" | "ghost";
  color?: string;
  showCount?: number;
  label?: string;
  className?: string;
}

const sizeConfig = {
  sm: { icon: 16, circle: "h-8 w-8", text: "text-xs" },
  md: { icon: 20, circle: "h-10 w-10", text: "text-sm" },
  lg: { icon: 26, circle: "h-12 w-12", text: "text-base" },
};

export const WishlistButton: React.FC<WishlistButtonProps> = ({
  isWishlisted,
  onToggle,
  size = "md",
  variant = "default",
  color = "#ef4444",
  showCount,
  label,
  className,
}) => {
  const [animating, setAnimating] = useState(false);
  const s = sizeConfig[size];

  const handleClick = useCallback(() => {
    setAnimating(true);
    onToggle();
    // reset animation flag after the animation completes
    setTimeout(() => setAnimating(false), 300);
  }, [onToggle]);

  const ariaLabel =
    label ?? (isWishlisted ? "Remove from wishlist" : "Add to wishlist");

  const heartEl = (
    <Heart
      size={s.icon}
      fill={isWishlisted ? color : "none"}
      stroke={isWishlisted ? color : "currentColor"}
      className={cn(
        "transition-transform duration-300 ease-out",
        animating && "animate-[wishlist-pop_0.3s_ease-out]",
        !isWishlisted && "text-gray-500 dark:text-gray-400"
      )}
    />
  );

  const wrapper = cn(
    "inline-flex items-center gap-1.5 cursor-pointer select-none transition-all duration-150",
    variant === "default" && "p-1 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800",
    variant === "circle" &&
      cn(
        "items-center justify-center rounded-full bg-white dark:bg-gray-800",
        "shadow-md hover:shadow-lg",
        s.circle
      ),
    variant === "ghost" &&
      "p-1 rounded-md opacity-0 group-hover:opacity-100 transition-opacity duration-200 hover:bg-gray-100 dark:hover:bg-gray-800",
    className
  );

  return (
    <>
      {/* keyframe injected once via style tag */}
      <style>{`
        @keyframes wishlist-pop {
          0%   { transform: scale(1); }
          50%  { transform: scale(1.3); }
          100% { transform: scale(1); }
        }
      `}</style>
      <button
        type="button"
        aria-label={ariaLabel}
        onClick={handleClick}
        className={wrapper}
      >
        {heartEl}
        {showCount !== undefined && (
          <span
            className={cn(
              "font-medium text-gray-600 dark:text-gray-300",
              s.text
            )}
          >
            {showCount}
          </span>
        )}
      </button>
    </>
  );
};
