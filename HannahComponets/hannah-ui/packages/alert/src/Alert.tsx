import { type FC, type HTMLAttributes, type ReactNode } from "react";
import { CheckCircle2, AlertTriangle, XCircle, Info, X } from "lucide-react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@hannah-ui/core";

const alert = cva(
  ["relative flex gap-3 border rounded-xl p-4 transition-all duration-150"],
  {
    variants: {
      variant: {
        info:    "bg-sky-50 border-sky-200 text-sky-900 dark:bg-sky-950/40 dark:border-sky-800 dark:text-sky-200",
        success: "bg-emerald-50 border-emerald-200 text-emerald-900 dark:bg-emerald-950/40 dark:border-emerald-800 dark:text-emerald-200",
        warning: "bg-amber-50 border-amber-200 text-amber-900 dark:bg-amber-950/40 dark:border-amber-800 dark:text-amber-200",
        danger:  "bg-red-50 border-red-200 text-red-900 dark:bg-red-950/40 dark:border-red-800 dark:text-red-200",
        default: "bg-gray-50 border-gray-200 text-gray-900 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-100",
      },
    },
    defaultVariants: {
      variant: "info",
    },
  },
);

const iconClass: Record<string, string> = {
  info:    "text-sky-500 dark:text-sky-400",
  success: "text-emerald-500 dark:text-emerald-400",
  warning: "text-amber-500 dark:text-amber-400",
  danger:  "text-red-500 dark:text-red-400",
  default: "text-gray-500 dark:text-gray-400",
};

const IconMap = {
  info: Info,
  success: CheckCircle2,
  warning: AlertTriangle,
  danger: XCircle,
  default: Info,
};

export interface AlertProps
  extends HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof alert> {
  title?: string;
  icon?: ReactNode;
  dismissible?: boolean;
  onDismiss?: () => void;
  closeAriaLabel?: string;
}

export const Alert: FC<AlertProps> = ({
  className,
  variant = "info",
  title,
  icon,
  dismissible = false,
  onDismiss,
  closeAriaLabel = "Cerrar",
  children,
  ...props
}) => {
  const v = variant ?? "info";
  const DefaultIcon = IconMap[v];

  return (
    <div role="alert" className={cn(alert({ variant, className }))} {...props}>
      <span className={cn("shrink-0 mt-0.5", iconClass[v])}>
        {icon ?? <DefaultIcon size={18} />}
      </span>

      <div className="flex-1 min-w-0">
        {title && (
          <p className="font-semibold text-sm leading-snug mb-0.5">{title}</p>
        )}
        {children && (
          <div className="text-sm leading-relaxed opacity-90">{children}</div>
        )}
      </div>

      {dismissible && (
        <button
          onClick={onDismiss}
          className="shrink-0 opacity-60 hover:opacity-100 transition-opacity duration-150 mt-0.5"
          aria-label={closeAriaLabel}
        >
          <X size={16} />
        </button>
      )}
    </div>
  );
};

Alert.displayName = "Alert";
