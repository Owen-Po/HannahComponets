import type { FC, FormHTMLAttributes } from "react";
import { cn } from "../../utils/cn";

export interface FormProps extends FormHTMLAttributes<HTMLFormElement> {
  /** Extra vertical spacing between fields. Default: "md" */
  spacing?: "sm" | "md" | "lg";
}

const spacingMap: Record<NonNullable<FormProps["spacing"]>, string> = {
  sm: "space-y-3",
  md: "space-y-5",
  lg: "space-y-7",
};

export const Form: FC<FormProps> = ({
  children,
  className,
  spacing = "md",
  ...props
}) => {
  return (
    <form
      noValidate
      className={cn(spacingMap[spacing], className)}
      {...props}
    >
      {children}
    </form>
  );
};
