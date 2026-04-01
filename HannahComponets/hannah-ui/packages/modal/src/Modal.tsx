import {
  type FC,
  type ReactNode,
  type MouseEvent,
  useEffect,
  useRef,
} from "react";
import { X } from "lucide-react";
import { createPortal } from "react-dom";
import { cn } from "@hannah-ui/core";

export interface ModalProps {
  open: boolean;
  onClose: () => void;
  title?: ReactNode;
  description?: ReactNode;
  children?: ReactNode;
  footer?: ReactNode;
  size?: "sm" | "md" | "lg" | "xl" | "full";
  closeOnBackdrop?: boolean;
  showCloseButton?: boolean;
  closeAriaLabel?: string;
  className?: string;
}

const sizeClass: Record<string, string> = {
  sm: "max-w-sm",
  md: "max-w-md",
  lg: "max-w-lg",
  xl: "max-w-xl",
  full: "max-w-full mx-4",
};

export const Modal: FC<ModalProps> = ({
  open,
  onClose,
  title,
  description,
  children,
  footer,
  size = "md",
  closeOnBackdrop = true,
  showCloseButton = true,
  closeAriaLabel = "Cerrar",
  className,
}) => {
  const panelRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!open) return;
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", handler);
    return () => document.removeEventListener("keydown", handler);
  }, [open, onClose]);

  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  if (!open) return null;

  const handleBackdrop = (e: MouseEvent) => {
    if (closeOnBackdrop && e.target === e.currentTarget) onClose();
  };

  return createPortal(
    <div
      role="dialog"
      aria-modal="true"
      aria-label={typeof title === "string" ? title : undefined}
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      onClick={handleBackdrop}
    >
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black/40 backdrop-blur-sm animate-in fade-in duration-150" />

      {/* Panel */}
      <div
        ref={panelRef}
        className={cn(
          "relative z-10 w-full flex flex-col",
          "bg-white dark:bg-gray-900",
          "rounded-2xl shadow-2xl",
          "animate-in zoom-in-95 fade-in duration-150",
          sizeClass[size],
          className,
        )}
      >
        {/* Header */}
        {(title || showCloseButton) && (
          <div className="flex items-start justify-between gap-4 px-6 py-4 border-b border-gray-100 dark:border-gray-700">
            <div className="flex flex-col gap-0.5 min-w-0">
              {title && (
                <h2 className="font-semibold text-gray-900 dark:text-white text-base leading-tight">
                  {title}
                </h2>
              )}
              {description && (
                <p className="text-sm text-gray-500 dark:text-gray-400 leading-snug">{description}</p>
              )}
            </div>
            {showCloseButton && (
              <button
                onClick={onClose}
                className="shrink-0 p-1.5 rounded-lg text-gray-400 hover:text-gray-700 hover:bg-gray-100 dark:text-gray-500 dark:hover:text-gray-200 dark:hover:bg-gray-700 transition-all duration-150"
                aria-label={closeAriaLabel}
              >
                <X size={18} />
              </button>
            )}
          </div>
        )}

        {/* Body */}
        {children && (
          <div className="px-6 py-4 flex-1 overflow-y-auto">{children}</div>
        )}

        {/* Footer */}
        {footer && (
          <div className="flex items-center justify-end gap-3 px-6 py-4 border-t border-gray-100 dark:border-gray-700">
            {footer}
          </div>
        )}
      </div>
    </div>,
    document.body,
  );
};

Modal.displayName = "Modal";
