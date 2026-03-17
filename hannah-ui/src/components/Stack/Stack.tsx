import type { FC, HtmlHTMLAttributes } from "react";
import { cn } from "../../main";

interface StackProps extends HtmlHTMLAttributes<HTMLDivElement> {
    col?: boolean;
    spacing?: number;
}

export const Stack: FC<StackProps> = ({
    children,
    col,
    spacing = 4,
    className,
    style,
    ...props
}) => {
    return (
        <div
            className={cn("flex flex-wrap", col && "flex-col", className)}
            style={{
                gap: spacing ? `${spacing * 0.25}rem` : undefined,
                ...style,
            }}
            {...props}
        >
            {children}
        </div>
    );
};