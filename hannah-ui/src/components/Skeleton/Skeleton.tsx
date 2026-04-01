import React from "react";
import { cn } from "../../utils/cn";

export interface SkeletonProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: "text" | "circular" | "rectangular" | "rounded";
  width?: string | number;
  height?: string | number;
  animation?: "pulse" | "shimmer" | "none";
  lines?: number;
  circle?: boolean;
}

const shimmerStyle = `
@keyframes skeleton-shimmer {
  0% { background-position: -200% 0; }
  100% { background-position: 200% 0; }
}
`;

const variantClasses: Record<string, string> = {
  text: "rounded-md h-4 w-full",
  circular: "rounded-full",
  rectangular: "rounded-none",
  rounded: "rounded-xl",
};

const defaultHeights: Record<string, string> = {
  text: "h-4",
  circular: "",
  rectangular: "h-24",
  rounded: "h-24",
};

function SkeletonBase({
  variant = "text",
  width,
  height,
  animation = "pulse",
  lines,
  circle,
  className,
  style,
  ...props
}: SkeletonProps) {
  const resolvedVariant = circle ? "circular" : variant;

  if (lines && lines > 1) {
    return (
      <SkeletonGroup>
        {Array.from({ length: lines }).map((_, i) => (
          <SkeletonBase
            key={i}
            variant="text"
            animation={animation}
            width={i === lines - 1 ? "60%" : width}
            height={height}
            className={className}
            style={style}
            {...props}
          />
        ))}
      </SkeletonGroup>
    );
  }

  const sizeStyle: React.CSSProperties = {
    ...style,
    ...(width != null ? { width: typeof width === "number" ? `${width}px` : width } : {}),
    ...(height != null ? { height: typeof height === "number" ? `${height}px` : height } : {}),
    ...(circle && width && !height
      ? { height: typeof width === "number" ? `${width}px` : width }
      : {}),
  };

  const isShimmer = animation === "shimmer";

  if (isShimmer) {
    Object.assign(sizeStyle, {
      backgroundImage:
        "linear-gradient(90deg, var(--skeleton-base) 25%, var(--skeleton-highlight) 50%, var(--skeleton-base) 75%)",
      backgroundSize: "200% 100%",
      animation: "skeleton-shimmer 1.5s ease-in-out infinite",
    });
  }

  return (
    <>
      {isShimmer && <style>{shimmerStyle}</style>}
      <div
        className={cn(
          "bg-gray-200 dark:bg-gray-700",
          "[--skeleton-base:theme(--color-gray-200)] [--skeleton-highlight:theme(--color-gray-300)]",
          "dark:[--skeleton-base:theme(--color-gray-700)] dark:[--skeleton-highlight:theme(--color-gray-600)]",
          variantClasses[resolvedVariant],
          !height && defaultHeights[resolvedVariant],
          animation === "pulse" && "animate-pulse",
          className
        )}
        style={sizeStyle}
        {...props}
      />
    </>
  );
}

export function SkeletonGroup({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return <div className={cn("space-y-3", className)}>{children}</div>;
}

export const Skeleton = SkeletonBase;
