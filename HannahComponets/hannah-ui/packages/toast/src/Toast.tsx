import {
  createContext,
  useContext,
  useState,
  useCallback,
  useEffect,
  useRef,
  type FC,
  type ReactNode,
} from "react";
import { createPortal } from "react-dom";
import { X, CheckCircle2, AlertTriangle, XCircle, Info, Loader2 } from "lucide-react";
import { cn } from "@hannah-ui/core";

/* ─────────────────────────────────────────
   Types
───────────────────────────────────────── */
export type ToastVariant = "success" | "error" | "warning" | "info" | "loading" | "default";
export type ToastPosition =
  | "top-left" | "top-center" | "top-right"
  | "bottom-left" | "bottom-center" | "bottom-right";

export interface ToastAction {
  label: string;
  onClick: () => void;
}

export interface ToastOptions {
  id?: string;
  title?: string;
  description?: string;
  variant?: ToastVariant;
  duration?: number;       // ms, 0 = persistent
  action?: ToastAction;
  icon?: ReactNode;
  dismissible?: boolean;
}

export interface ToastItem extends Required<Pick<ToastOptions, "id" | "variant" | "dismissible">> {
  title?: string;
  description?: string;
  duration: number;
  action?: ToastAction;
  icon?: ReactNode;
  createdAt: number;
}

export interface ToastContextValue {
  toast: (options: ToastOptions | string) => string;
  success: (title: string, options?: Omit<ToastOptions, "variant" | "title">) => string;
  error:   (title: string, options?: Omit<ToastOptions, "variant" | "title">) => string;
  warning: (title: string, options?: Omit<ToastOptions, "variant" | "title">) => string;
  info:    (title: string, options?: Omit<ToastOptions, "variant" | "title">) => string;
  loading: (title: string, options?: Omit<ToastOptions, "variant" | "title">) => string;
  dismiss: (id: string) => void;
  dismissAll: () => void;
}

/* ─────────────────────────────────────────
   Context
───────────────────────────────────────── */
const ToastContext = createContext<ToastContextValue | null>(null);

export function useToast(): ToastContextValue {
  const ctx = useContext(ToastContext);
  if (!ctx) throw new Error("useToast must be used inside <ToastProvider>");
  return ctx;
}

/* ─────────────────────────────────────────
   Helpers
───────────────────────────────────────── */
let _idCounter = 0;
const genId = () => `toast-${++_idCounter}-${Date.now()}`;

const DEFAULT_DURATION: Record<ToastVariant, number> = {
  success: 4000,
  error:   6000,
  warning: 5000,
  info:    4000,
  loading: 0,     // persistent until dismissed manually
  default: 4000,
};

const iconMap: Record<ToastVariant, ReactNode> = {
  success: <CheckCircle2 size={16} />,
  error:   <XCircle size={16} />,
  warning: <AlertTriangle size={16} />,
  info:    <Info size={16} />,
  loading: <Loader2 size={16} className="animate-spin" />,
  default: <Info size={16} />,
};

const variantStyles: Record<ToastVariant, string> = {
  success: "border-emerald-200 bg-emerald-50 dark:border-emerald-800 dark:bg-emerald-950/60",
  error:   "border-red-200 bg-red-50 dark:border-red-800 dark:bg-red-950/60",
  warning: "border-amber-200 bg-amber-50 dark:border-amber-800 dark:bg-amber-950/60",
  info:    "border-sky-200 bg-sky-50 dark:border-sky-800 dark:bg-sky-950/60",
  loading: "border-gray-200 bg-white dark:border-gray-700 dark:bg-gray-900",
  default: "border-gray-200 bg-white dark:border-gray-700 dark:bg-gray-900",
};

const iconStyles: Record<ToastVariant, string> = {
  success: "text-emerald-500 dark:text-emerald-400",
  error:   "text-red-500 dark:text-red-400",
  warning: "text-amber-500 dark:text-amber-400",
  info:    "text-sky-500 dark:text-sky-400",
  loading: "text-gray-500 dark:text-gray-400",
  default: "text-gray-500 dark:text-gray-400",
};

const progressStyles: Record<ToastVariant, string> = {
  success: "bg-emerald-400 dark:bg-emerald-500",
  error:   "bg-red-400 dark:bg-red-500",
  warning: "bg-amber-400 dark:bg-amber-500",
  info:    "bg-sky-400 dark:bg-sky-500",
  loading: "bg-gray-300 dark:bg-gray-600",
  default: "bg-gray-300 dark:bg-gray-600",
};

const positionStyles: Record<ToastPosition, string> = {
  "top-left":       "top-4 left-4 items-start",
  "top-center":     "top-4 left-1/2 -translate-x-1/2 items-center",
  "top-right":      "top-4 right-4 items-end",
  "bottom-left":    "bottom-4 left-4 items-start",
  "bottom-center":  "bottom-4 left-1/2 -translate-x-1/2 items-center",
  "bottom-right":   "bottom-4 right-4 items-end",
};

/* ─────────────────────────────────────────
   Single toast item
───────────────────────────────────────── */
interface ToastItemProps {
  item: ToastItem;
  onDismiss: (id: string) => void;
  position: ToastPosition;
  closeAriaLabel?: string;
}

const ToastItemComponent: FC<ToastItemProps> = ({ item, onDismiss, position, closeAriaLabel = "Cerrar notificación" }) => {
  const [progress, setProgress] = useState(100);
  const [visible, setVisible] = useState(false);
  const [exiting, setExiting] = useState(false);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const startRef = useRef<number>(Date.now());
  const remainingRef = useRef<number>(item.duration);

  const dismiss = useCallback(() => {
    if (exiting) return;
    setExiting(true);
    setTimeout(() => onDismiss(item.id), 280);
  }, [exiting, item.id, onDismiss]);

  // Enter animation
  useEffect(() => {
    const t = setTimeout(() => setVisible(true), 10);
    return () => clearTimeout(t);
  }, []);

  // Auto-dismiss with progress
  useEffect(() => {
    if (item.duration === 0) return;

    const tick = 50;
    intervalRef.current = setInterval(() => {
      const elapsed = Date.now() - startRef.current;
      const pct = Math.max(0, 100 - (elapsed / item.duration) * 100);
      setProgress(pct);
      if (pct === 0) dismiss();
    }, tick);

    return () => { if (intervalRef.current) clearInterval(intervalRef.current); };
  }, [item.duration, dismiss]);

  // Pause on hover
  const pauseProgress = () => {
    if (item.duration === 0 || !intervalRef.current) return;
    clearInterval(intervalRef.current);
    remainingRef.current = (progress / 100) * item.duration;
  };

  const resumeProgress = () => {
    if (item.duration === 0) return;
    startRef.current = Date.now() - (item.duration - remainingRef.current);
    intervalRef.current = setInterval(() => {
      const elapsed = Date.now() - startRef.current;
      const pct = Math.max(0, 100 - (elapsed / item.duration) * 100);
      setProgress(pct);
      if (pct === 0) dismiss();
    }, 50);
  };

  const isTop = position.startsWith("top");

  return (
    <div
      onMouseEnter={pauseProgress}
      onMouseLeave={resumeProgress}
      role="status"
      aria-live="polite"
      className={cn(
        "relative w-80 rounded-xl border shadow-lg overflow-hidden",
        "transition-all duration-300 ease-out",
        variantStyles[item.variant],
        visible && !exiting
          ? "opacity-100 translate-y-0 scale-100"
          : exiting
            ? isTop
              ? "opacity-0 -translate-y-2 scale-95"
              : "opacity-0 translate-y-2 scale-95"
            : isTop
              ? "opacity-0 -translate-y-4 scale-95"
              : "opacity-0 translate-y-4 scale-95",
      )}
    >
      <div className="flex items-start gap-3 px-4 py-3">
        {/* Icon */}
        <span className={cn("shrink-0 mt-0.5", iconStyles[item.variant])}>
          {item.icon ?? iconMap[item.variant]}
        </span>

        {/* Content */}
        <div className="flex-1 min-w-0">
          {item.title && (
            <p className="text-sm font-semibold text-gray-900 dark:text-white leading-snug">
              {item.title}
            </p>
          )}
          {item.description && (
            <p className="text-xs text-gray-500 dark:text-gray-400 leading-relaxed mt-0.5">
              {item.description}
            </p>
          )}
          {item.action && (
            <button
              onClick={() => { item.action!.onClick(); dismiss(); }}
              className={cn(
                "mt-2 text-xs font-semibold underline underline-offset-2",
                "transition-opacity hover:opacity-70",
                iconStyles[item.variant],
              )}
            >
              {item.action.label}
            </button>
          )}
        </div>

        {/* Dismiss */}
        {item.dismissible && (
          <button
            onClick={dismiss}
            className="shrink-0 text-gray-400 hover:text-gray-600 dark:text-gray-500 dark:hover:text-gray-300 transition-colors mt-0.5"
            aria-label={closeAriaLabel}
          >
            <X size={14} />
          </button>
        )}
      </div>

      {/* Progress bar */}
      {item.duration > 0 && (
        <div className="h-0.5 w-full bg-black/5 dark:bg-white/5">
          <div
            className={cn("h-full transition-none", progressStyles[item.variant])}
            style={{ width: `${progress}%` }}
          />
        </div>
      )}
    </div>
  );
};

/* ─────────────────────────────────────────
   Provider
───────────────────────────────────────── */
export interface ToastProviderProps {
  children: ReactNode;
  position?: ToastPosition;
  maxToasts?: number;
  closeAriaLabel?: string;
}

export const ToastProvider: FC<ToastProviderProps> = ({
  children,
  position = "bottom-right",
  maxToasts = 5,
  closeAriaLabel = "Cerrar notificación",
}) => {
  const [toasts, setToasts] = useState<ToastItem[]>([]);

  const add = useCallback((options: ToastOptions): string => {
    const variant = options.variant ?? "default";
    const item: ToastItem = {
      id:          options.id ?? genId(),
      title:       options.title,
      description: options.description,
      variant,
      duration:    options.duration ?? DEFAULT_DURATION[variant],
      action:      options.action,
      icon:        options.icon,
      dismissible: options.dismissible ?? true,
      createdAt:   Date.now(),
    };

    setToasts((prev) => {
      const filtered = prev.filter((t) => t.id !== item.id);
      const next = [item, ...filtered];
      return next.slice(0, maxToasts);
    });

    return item.id;
  }, [maxToasts]);

  const toast = useCallback((options: ToastOptions | string): string => {
    if (typeof options === "string") return add({ title: options });
    return add(options);
  }, [add]);

  const dismiss = useCallback((id: string) => {
    setToasts((prev) => prev.filter((t) => t.id !== id));
  }, []);

  const dismissAll = useCallback(() => setToasts([]), []);

  const ctx: ToastContextValue = {
    toast,
    success: (title, opts) => add({ ...opts, title, variant: "success" }),
    error:   (title, opts) => add({ ...opts, title, variant: "error" }),
    warning: (title, opts) => add({ ...opts, title, variant: "warning" }),
    info:    (title, opts) => add({ ...opts, title, variant: "info" }),
    loading: (title, opts) => add({ ...opts, title, variant: "loading" }),
    dismiss,
    dismissAll,
  };

  const isBottom = position.startsWith("bottom");

  return (
    <ToastContext.Provider value={ctx}>
      {children}
      {createPortal(
        <div
          className={cn(
            "fixed z-[9999] flex flex-col pointer-events-none",
            positionStyles[position],
            isBottom ? "flex-col-reverse gap-2" : "flex-col gap-2",
          )}
        >
          {toasts.map((item) => (
            <div key={item.id} className="pointer-events-auto">
              <ToastItemComponent
                item={item}
                onDismiss={dismiss}
                position={position}
                closeAriaLabel={closeAriaLabel}
              />
            </div>
          ))}
        </div>,
        document.body,
      )}
    </ToastContext.Provider>
  );
};
