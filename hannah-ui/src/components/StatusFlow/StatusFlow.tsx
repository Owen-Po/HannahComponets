import React from "react";
import { cn } from "../../utils/cn";
import { ChevronRight } from "lucide-react";

export interface FlowStage {
  id: string;
  label: string;
  count?: number;
  value?: string | number;
  color?: string;
}

export interface StatusFlowProps {
  stages: FlowStage[];
  activeStage?: string;
  completedStages?: string[];
  onStageClick?: (stage: FlowStage) => void;
  variant?: "chevron" | "pills" | "funnel";
  accentColor?: string;
  size?: "sm" | "md";
  className?: string;
}

function getStageState(
  stage: FlowStage,
  activeStage?: string,
  completedStages?: string[]
): "completed" | "active" | "upcoming" {
  if (stage.id === activeStage) return "active";
  if (completedStages?.includes(stage.id)) return "completed";
  return "upcoming";
}

function stageSubtext(stage: FlowStage) {
  if (stage.value != null) return String(stage.value);
  if (stage.count != null) return String(stage.count);
  return null;
}

/* ------------------------------------------------------------------ */
/*  Chevron variant                                                    */
/* ------------------------------------------------------------------ */

function ChevronVariant({
  stages,
  activeStage,
  completedStages,
  onStageClick,
  accentColor = "#6366f1",
  size = "md",
}: Omit<StatusFlowProps, "variant" | "className">) {
  const sm = size === "sm";

  return (
    <div className="flex flex-wrap gap-0">
      {stages.map((stage, i) => {
        const state = getStageState(stage, activeStage, completedStages);
        const isFirst = i === 0;
        const sub = stageSubtext(stage);

        const clipPath = isFirst
          ? `polygon(0 0, calc(100% - 12px) 0, 100% 50%, calc(100% - 12px) 100%, 0 100%)`
          : `polygon(0 0, calc(100% - 12px) 0, 100% 50%, calc(100% - 12px) 100%, 0 100%, 12px 50%)`;

        const bg =
          state === "active"
            ? accentColor
            : state === "completed"
              ? accentColor
              : undefined;

        const opacity = state === "completed" ? 0.75 : 1;

        return (
          <button
            key={stage.id}
            type="button"
            onClick={() => onStageClick?.(stage)}
            className={cn(
              "relative flex flex-col items-center justify-center text-center transition-all hover:brightness-110",
              sm ? "min-w-[90px] px-5 py-1.5" : "min-w-[120px] px-6 py-2.5",
              state === "upcoming" &&
                "bg-gray-100 text-gray-500 dark:bg-gray-800 dark:text-gray-400",
              (state === "active" || state === "completed") && "text-white",
              onStageClick && "cursor-pointer",
              !onStageClick && "cursor-default"
            )}
            style={{
              clipPath,
              backgroundColor: bg,
              opacity,
              boxShadow:
                state === "active"
                  ? `0 0 12px ${accentColor}66`
                  : undefined,
            }}
          >
            <span className={cn("font-medium leading-tight", sm ? "text-xs" : "text-sm")}>
              {stage.label}
            </span>
            {sub && (
              <span className={cn("opacity-80 leading-tight", sm ? "text-[10px]" : "text-xs")}>
                {sub}
              </span>
            )}
          </button>
        );
      })}
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  Pills variant                                                      */
/* ------------------------------------------------------------------ */

function PillsVariant({
  stages,
  activeStage,
  completedStages,
  onStageClick,
  accentColor = "#6366f1",
  size = "md",
}: Omit<StatusFlowProps, "variant" | "className">) {
  const sm = size === "sm";

  return (
    <div className="flex flex-wrap items-center gap-1">
      {stages.map((stage, i) => {
        const state = getStageState(stage, activeStage, completedStages);
        const sub = stageSubtext(stage);

        return (
          <React.Fragment key={stage.id}>
            {i > 0 && (
              <ChevronRight
                className={cn(
                  "shrink-0 text-gray-300 dark:text-gray-600",
                  sm ? "h-3 w-3" : "h-4 w-4"
                )}
              />
            )}
            <button
              type="button"
              onClick={() => onStageClick?.(stage)}
              className={cn(
                "rounded-full font-medium transition-all hover:brightness-110",
                sm ? "px-3 py-1 text-xs" : "px-4 py-1.5 text-sm",
                state === "upcoming" &&
                  "bg-gray-100 text-gray-500 dark:bg-gray-800 dark:text-gray-400",
                (state === "active" || state === "completed") && "text-white",
                onStageClick && "cursor-pointer",
                !onStageClick && "cursor-default"
              )}
              style={{
                backgroundColor:
                  state === "active" || state === "completed"
                    ? accentColor
                    : undefined,
                opacity: state === "completed" ? 0.75 : 1,
                boxShadow:
                  state === "active"
                    ? `0 0 0 3px ${accentColor}33, 0 0 12px ${accentColor}44`
                    : undefined,
              }}
            >
              {stage.label}
              {sub && (
                <span className="ml-1.5 opacity-80">({sub})</span>
              )}
            </button>
          </React.Fragment>
        );
      })}
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  Funnel variant                                                     */
/* ------------------------------------------------------------------ */

function FunnelVariant({
  stages,
  activeStage,
  completedStages,
  onStageClick,
  accentColor = "#6366f1",
  size = "md",
}: Omit<StatusFlowProps, "variant" | "className">) {
  const sm = size === "sm";
  const total = stages.length;

  return (
    <div className="flex flex-col items-center gap-1">
      {stages.map((stage, i) => {
        const state = getStageState(stage, activeStage, completedStages);
        const sub = stageSubtext(stage);
        // Width goes from 100% down to ~50%
        const widthPct = 100 - (i / Math.max(total - 1, 1)) * 50;

        return (
          <button
            key={stage.id}
            type="button"
            onClick={() => onStageClick?.(stage)}
            className={cn(
              "flex items-center justify-between rounded-md font-medium transition-all hover:brightness-110",
              sm ? "px-4 py-1.5 text-xs" : "px-5 py-2.5 text-sm",
              state === "upcoming" &&
                "bg-gray-100 text-gray-500 dark:bg-gray-800 dark:text-gray-400",
              (state === "active" || state === "completed") && "text-white",
              onStageClick && "cursor-pointer",
              !onStageClick && "cursor-default"
            )}
            style={{
              width: `${widthPct}%`,
              backgroundColor:
                state === "active" || state === "completed"
                  ? accentColor
                  : undefined,
              opacity: state === "completed" ? 0.75 : 1,
              boxShadow:
                state === "active"
                  ? `0 0 0 3px ${accentColor}33, 0 0 12px ${accentColor}44`
                  : undefined,
            }}
          >
            <span>{stage.label}</span>
            {sub && (
              <span className="opacity-80">{sub}</span>
            )}
          </button>
        );
      })}
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  Main component                                                     */
/* ------------------------------------------------------------------ */

export function StatusFlow({
  variant = "chevron",
  className,
  ...props
}: StatusFlowProps) {
  const Comp =
    variant === "pills"
      ? PillsVariant
      : variant === "funnel"
        ? FunnelVariant
        : ChevronVariant;

  return (
    <div className={cn("w-full", className)}>
      <Comp {...props} />
    </div>
  );
}
