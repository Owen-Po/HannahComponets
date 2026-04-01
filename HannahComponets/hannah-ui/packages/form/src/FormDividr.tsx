import type { FC, HTMLAttributes } from "react";
import { cn } from "@hannah-ui/core";

export interface FormDividerProps extends HTMLAttributes<HTMLDivElement> {
  /** Optional label shown in the center of the divider */
  label?: string;
}

export const FormDivider: FC<FormDividerProps> = ({
  label,
  className,
  ...props
}) => {
  return (
    <div
      className={cn("flex items-center gap-3 my-1", className)}
      role="separator"
      {...props}
    >
      <div className="h-px flex-1 bg-gray-200" />
      {label && (
        <span className="text-xs text-gray-400 whitespace-nowrap">{label}</span>
      )}
      <div className="h-px flex-1 bg-gray-200" />
    </div>
  );
};
