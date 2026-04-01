import type { ReactNode } from "react";

export interface ErrorMessageProps {
  children: ReactNode;
  className?: string;
}

export const ErrorMessage = ({ children, className = "" }: ErrorMessageProps) => (
  <span className={`mt-1 text-xs text-red-500 flex items-center gap-1 ${className}`}>
    <span className="w-1 h-1 bg-red-500 rounded-full shrink-0" />
    {children}
  </span>
);
