import { type FC, type HTMLAttributes, type ReactNode } from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@hannah-ui/core";

const card = cva(
  ["bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 flex flex-col", "transition-all duration-150"],
  {
    variants: {
      rounded: {
        sm: "rounded-lg",
        md: "rounded-xl",
        lg: "rounded-2xl",
        xl: "rounded-3xl",
      },
      shadow: {
        none: "",
        sm: "shadow-sm",
        md: "shadow-md",
        lg: "shadow-lg",
      },
      hoverable: {
        true: "hover:-translate-y-0.5 hover:shadow-md cursor-pointer",
      },
      padding: {
        none: "",
        sm: "p-4",
        md: "p-6",
        lg: "p-8",
      },
    },
    defaultVariants: {
      rounded: "lg",
      shadow: "sm",
      padding: "none",
    },
  },
);

export interface CardProps
  extends HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof card> {}

export interface CardHeaderProps extends Omit<HTMLAttributes<HTMLDivElement>, "title"> {
  title?: ReactNode;
  description?: ReactNode;
  action?: ReactNode;
}

export interface CardBodyProps extends HTMLAttributes<HTMLDivElement> {}

export interface CardFooterProps extends HTMLAttributes<HTMLDivElement> {
  bordered?: boolean;
  justify?: "start" | "end" | "between" | "center";
}

export const CardHeader: FC<CardHeaderProps> = ({
  className,
  title,
  description,
  action,
  children,
  ...props
}) => (
  <div
    className={cn(
      "flex items-start justify-between gap-4 px-6 py-4 border-b border-gray-100 dark:border-gray-700",
      className,
    )}
    {...props}
  >
    <div className="flex flex-col gap-0.5 min-w-0">
      {title && (
        <h3 className="font-semibold text-gray-900 dark:text-white text-base leading-tight truncate">
          {title}
        </h3>
      )}
      {description && (
        <p className="text-sm text-gray-500 dark:text-gray-400 leading-snug">{description}</p>
      )}
      {children}
    </div>
    {action && <div className="shrink-0">{action}</div>}
  </div>
);

CardHeader.displayName = "CardHeader";

export const CardBody: FC<CardBodyProps> = ({ className, children, ...props }) => (
  <div className={cn("px-6 py-4 flex-1", className)} {...props}>
    {children}
  </div>
);

CardBody.displayName = "CardBody";

export const CardFooter: FC<CardFooterProps> = ({
  className,
  bordered = true,
  justify = "end",
  children,
  ...props
}) => {
  const justifyMap = {
    start: "justify-start",
    end: "justify-end",
    between: "justify-between",
    center: "justify-center",
  };

  return (
    <div
      className={cn(
        "flex items-center gap-3 px-6 py-4",
        bordered && "border-t border-gray-100 dark:border-gray-700",
        justifyMap[justify],
        className,
      )}
      {...props}
    >
      {children}
    </div>
  );
};

CardFooter.displayName = "CardFooter";

export const Card: FC<CardProps> = ({
  className,
  rounded,
  shadow,
  hoverable,
  padding,
  children,
  ...props
}) => (
  <div
    className={cn(card({ rounded, shadow, hoverable, padding, className }))}
    {...props}
  >
    {children}
  </div>
);

Card.displayName = "Card";
