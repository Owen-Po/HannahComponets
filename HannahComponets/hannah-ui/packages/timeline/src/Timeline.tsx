import React from "react";
import { Check } from "lucide-react";
import { cn } from "@hannah-ui/core";

export interface TimelineItem {
  id: string;
  title: string;
  description?: string;
  timestamp?: string;
  icon?: React.ElementType;
  iconColor?: string;
  status?: "completed" | "active" | "pending";
  content?: React.ReactNode;
}

export interface TimelineProps {
  items: TimelineItem[];
  accentColor?: string;
  variant?: "default" | "compact" | "card";
  showConnector?: boolean;
  className?: string;
}

export const Timeline: React.FC<TimelineProps> = ({
  items,
  accentColor = "#7c6aff",
  variant = "default",
  showConnector = true,
  className,
}) => {
  const isCompact = variant === "compact";
  const isCard = variant === "card";

  return (
    <div className={cn("relative flex flex-col", className)}>
      {items.map((item, index) => {
        const isLast = index === items.length - 1;
        const status = item.status ?? "pending";
        const Icon = item.icon;
        const dotColor = item.iconColor ?? accentColor;

        const dotSize = isCompact ? "h-2.5 w-2.5" : "h-4 w-4";
        const iconSize = isCompact ? 0 : 10;
        const dotOffset = isCompact ? "left-[5px]" : "left-[8px]";
        const contentPadding = isCompact ? "pl-6 pb-4" : "pl-8 pb-8";
        const connectorLeft = isCompact ? "left-[5.5px]" : "left-[8px]";

        // Dot element
        const dot = (
          <div
            className={cn(
              "relative z-10 flex shrink-0 items-center justify-center rounded-full",
              dotSize,
              status === "pending" &&
                "border-2 border-gray-300 bg-white dark:border-gray-600 dark:bg-gray-900"
            )}
            style={
              status !== "pending"
                ? { backgroundColor: dotColor }
                : undefined
            }
          >
            {status === "completed" && !isCompact && (
              <Check className="h-2.5 w-2.5 text-white" strokeWidth={3} />
            )}
            {status === "active" && !isCompact && Icon && (
              <Icon
                className="text-white"
                size={iconSize}
                strokeWidth={2.5}
              />
            )}
            {status === "active" && (
              <span
                className="absolute inset-0 animate-ping rounded-full opacity-40"
                style={{ backgroundColor: dotColor }}
              />
            )}
          </div>
        );

        // Icon circle (larger, for non-compact with custom icon on completed)
        const iconCircle =
          !isCompact && Icon && status === "completed" ? (
            <div
              className="relative z-10 flex h-6 w-6 shrink-0 items-center justify-center rounded-full"
              style={{ backgroundColor: dotColor }}
            >
              <Icon className="h-3 w-3 text-white" strokeWidth={2.5} />
            </div>
          ) : !isCompact && Icon && status !== "active" && status !== "completed" ? (
            <div className="relative z-10 flex h-6 w-6 shrink-0 items-center justify-center rounded-full border-2 border-gray-300 bg-white dark:border-gray-600 dark:bg-gray-900">
              <Icon className="h-3 w-3 text-gray-400 dark:text-gray-500" strokeWidth={2.5} />
            </div>
          ) : null;

        const useLargeDot = iconCircle !== null;
        const adjustedConnectorLeft = useLargeDot
          ? isCompact
            ? connectorLeft
            : "left-[11.5px]"
          : connectorLeft;
        const adjustedContentPadding = useLargeDot
          ? isCompact
            ? contentPadding
            : "pl-10 pb-8"
          : contentPadding;

        const itemContent = (
          <>
            <div className="flex items-center gap-2">
              <span
                className={cn(
                  "font-medium leading-tight",
                  isCompact ? "text-sm" : "text-[15px]",
                  status === "pending"
                    ? "text-gray-400 dark:text-gray-500"
                    : "text-gray-900 dark:text-gray-100"
                )}
              >
                {item.title}
              </span>
              {item.timestamp && (
                <span className="whitespace-nowrap text-xs text-gray-400 dark:text-gray-500">
                  {item.timestamp}
                </span>
              )}
            </div>
            {item.description && (
              <p
                className={cn(
                  "mt-1 leading-relaxed text-gray-500 dark:text-gray-400",
                  isCompact ? "text-xs" : "text-sm"
                )}
              >
                {item.description}
              </p>
            )}
            {item.content && <div className="mt-3">{item.content}</div>}
          </>
        );

        return (
          <div key={item.id} className="relative flex items-start">
            {/* Connector line */}
            {showConnector && !isLast && (
              <div
                className={cn(
                  "absolute top-4 bottom-0 w-px",
                  adjustedConnectorLeft,
                  useLargeDot && "top-6",
                  status === "pending" || items[index + 1]?.status === "pending"
                    ? "bg-gray-200 dark:bg-gray-700"
                    : ""
                )}
                style={
                  status !== "pending" &&
                  items[index + 1]?.status !== "pending"
                    ? { backgroundColor: `${accentColor}33` }
                    : undefined
                }
              />
            )}

            {/* Dot / Icon */}
            <div
              className={cn(
                "mt-0.5 flex shrink-0 items-start",
                useLargeDot ? "mt-0" : "mt-1"
              )}
            >
              {useLargeDot ? iconCircle : dot}
            </div>

            {/* Content */}
            <div
              className={cn(
                adjustedContentPadding,
                isLast && "pb-0",
                "min-w-0"
              )}
            >
              {isCard ? (
                <div className="rounded-xl border border-gray-200 bg-white p-4 shadow-sm dark:border-gray-700 dark:bg-gray-800">
                  {itemContent}
                </div>
              ) : (
                itemContent
              )}
            </div>
          </div>
        );
      })}
    </div>
  );
};
