import React from "react";
import { Check, Loader2 } from "lucide-react";
import { cn } from "../../utils/cn";

/* ─────────────────────────────────────────
   Types
───────────────────────────────────────── */

export interface StepItem {
  id: string;
  label: string;
  description?: string;
  icon?: React.ElementType;
  content?: React.ReactNode;
}

export interface StepperProps {
  steps: StepItem[];
  activeStep: number;
  onStepClick?: (index: number) => void;
  accentColor?: string;
  variant?: "horizontal" | "vertical";
  size?: "sm" | "md" | "lg";
  showStepNumbers?: boolean;
  allowClickPast?: boolean;
  className?: string;
}

export interface StepperActionsProps {
  onPrev?: () => void;
  onNext?: () => void;
  prevLabel?: string;
  nextLabel?: string;
  finishLabel?: string;
  isFirst: boolean;
  isLast: boolean;
  accentColor?: string;
  loading?: boolean;
}

/* ─────────────────────────────────────────
   Size maps
───────────────────────────────────────── */

const circleSize = {
  sm: "h-7 w-7 text-xs",
  md: "h-9 w-9 text-sm",
  lg: "h-11 w-11 text-base",
} as const;

const iconInnerSize = {
  sm: 12,
  md: 16,
  lg: 20,
} as const;

const labelSize = {
  sm: "text-xs",
  md: "text-sm",
  lg: "text-base",
} as const;

const descSize = {
  sm: "text-[10px]",
  md: "text-xs",
  lg: "text-sm",
} as const;

/* ─────────────────────────────────────────
   Stepper
───────────────────────────────────────── */

export const Stepper: React.FC<StepperProps> = ({
  steps,
  activeStep,
  onStepClick,
  accentColor = "#7c6aff",
  variant = "horizontal",
  size = "md",
  showStepNumbers = true,
  allowClickPast = false,
  className,
}) => {
  const isCompleted = (i: number) => i < activeStep;
  const isActive = (i: number) => i === activeStep;
  const isClickable = (i: number) => {
    if (!onStepClick) return false;
    if (isCompleted(i)) return true;
    if (allowClickPast) return true;
    return false;
  };

  /* ── Step circle ── */
  const renderCircle = (step: StepItem, index: number) => {
    const completed = isCompleted(index);
    const active = isActive(index);
    const StepIcon = step.icon;

    return (
      <button
        type="button"
        disabled={!isClickable(index)}
        onClick={() => isClickable(index) && onStepClick?.(index)}
        className={cn(
          "relative flex shrink-0 items-center justify-center rounded-full font-semibold transition-all duration-300 select-none",
          circleSize[size],
          isClickable(index) ? "cursor-pointer" : "cursor-default",
          !completed && !active && "bg-gray-200 text-gray-500 dark:bg-gray-700 dark:text-gray-400",
        )}
        style={{
          ...(completed || active
            ? { backgroundColor: accentColor, color: "#fff" }
            : {}),
        }}
        aria-current={active ? "step" : undefined}
      >
        {/* pulse ring for active */}
        {active && (
          <span
            className="absolute inset-0 animate-ping rounded-full opacity-25"
            style={{ backgroundColor: accentColor }}
          />
        )}

        {completed ? (
          <Check size={iconInnerSize[size]} strokeWidth={3} />
        ) : StepIcon && !showStepNumbers ? (
          <StepIcon size={iconInnerSize[size]} />
        ) : (
          <span>{index + 1}</span>
        )}
      </button>
    );
  };

  /* ── Connector ── */
  const renderConnectorH = (index: number) => {
    const completed = isCompleted(index + 1);
    return (
      <div
        className={cn(
          "mx-1 h-0.5 flex-1 transition-all duration-500",
          completed ? "" : "border-t-2 border-dashed border-gray-300 dark:border-gray-600",
        )}
        style={completed ? { backgroundColor: accentColor } : {}}
      />
    );
  };

  const renderConnectorV = (index: number) => {
    const completed = isCompleted(index + 1);
    return (
      <div
        className={cn(
          "ml-[50%] w-0.5 -translate-x-1/2 transition-all duration-500",
          size === "sm" ? "h-6" : size === "md" ? "h-8" : "h-10",
          completed ? "" : "border-l-2 border-dashed border-gray-300 dark:border-gray-600",
        )}
        style={{
          ...(completed ? { backgroundColor: accentColor } : {}),
        }}
      />
    );
  };

  /* ── Horizontal layout ── */
  if (variant === "horizontal") {
    return (
      <div className={cn("w-full", className)}>
        {/* Step indicators */}
        <div className="flex items-center">
          {steps.map((step, i) => (
            <React.Fragment key={step.id}>
              {/* Step column */}
              <div className="flex flex-col items-center gap-1.5">
                {renderCircle(step, i)}
                <div className="text-center">
                  <p
                    className={cn(
                      "font-semibold leading-tight transition-colors duration-300",
                      labelSize[size],
                      isActive(i)
                        ? "text-gray-900 dark:text-white"
                        : isCompleted(i)
                          ? "text-gray-700 dark:text-gray-300"
                          : "text-gray-400 dark:text-gray-500",
                    )}
                  >
                    {step.label}
                  </p>
                  {step.description && (
                    <p
                      className={cn(
                        "mt-0.5 leading-tight text-gray-400 dark:text-gray-500",
                        descSize[size],
                      )}
                    >
                      {step.description}
                    </p>
                  )}
                </div>
              </div>

              {/* Connector */}
              {i < steps.length - 1 && renderConnectorH(i)}
            </React.Fragment>
          ))}
        </div>

        {/* Active step content */}
        {steps[activeStep]?.content && (
          <div className="mt-6">{steps[activeStep].content}</div>
        )}
      </div>
    );
  }

  /* ── Vertical layout ── */
  return (
    <div className={cn("w-full", className)}>
      {steps.map((step, i) => (
        <div key={step.id} className="flex gap-4">
          {/* Left rail */}
          <div className="flex flex-col items-center">
            {renderCircle(step, i)}
            {i < steps.length - 1 && renderConnectorV(i)}
          </div>

          {/* Right content */}
          <div className={cn("pb-8", i === steps.length - 1 && "pb-0")}>
            <p
              className={cn(
                "font-semibold leading-tight transition-colors duration-300",
                labelSize[size],
                isActive(i)
                  ? "text-gray-900 dark:text-white"
                  : isCompleted(i)
                    ? "text-gray-700 dark:text-gray-300"
                    : "text-gray-400 dark:text-gray-500",
              )}
            >
              {step.label}
            </p>
            {step.description && (
              <p
                className={cn(
                  "mt-0.5 leading-tight text-gray-400 dark:text-gray-500",
                  descSize[size],
                )}
              >
                {step.description}
              </p>
            )}
            {isActive(i) && step.content && (
              <div className="mt-3">{step.content}</div>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

/* ─────────────────────────────────────────
   StepperActions
───────────────────────────────────────── */

export const StepperActions: React.FC<StepperActionsProps> = ({
  onPrev,
  onNext,
  prevLabel = "Back",
  nextLabel = "Next",
  finishLabel = "Finish",
  isFirst,
  isLast,
  accentColor = "#7c6aff",
  loading = false,
}) => {
  return (
    <div className="flex items-center justify-between gap-3 pt-6">
      <button
        type="button"
        onClick={onPrev}
        disabled={isFirst || loading}
        className={cn(
          "rounded-lg border border-gray-300 px-5 py-2 text-sm font-medium text-gray-700 transition-colors",
          "hover:bg-gray-100 disabled:cursor-not-allowed disabled:opacity-40",
          "dark:border-gray-600 dark:text-gray-300 dark:hover:bg-gray-800",
        )}
      >
        {prevLabel}
      </button>

      <button
        type="button"
        onClick={onNext}
        disabled={loading}
        className={cn(
          "flex items-center gap-2 rounded-lg px-5 py-2 text-sm font-medium text-white transition-colors",
          "hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-60",
        )}
        style={{ backgroundColor: accentColor }}
      >
        {loading && <Loader2 size={14} className="animate-spin" />}
        {isLast ? finishLabel : nextLabel}
      </button>
    </div>
  );
};

Stepper.displayName = "Stepper";
StepperActions.displayName = "StepperActions";
