import { type FC, type HTMLAttributes, useState } from "react";
import { User } from "lucide-react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "../../utils/cn";

/* ─────────────────────────────────────────
   CVA definition
───────────────────────────────────────── */
const avatar = cva(
  [
    "inline-flex items-center justify-center shrink-0 overflow-hidden",
    "font-semibold select-none",
  ],
  {
    variants: {
      size: {
        xs: "w-6 h-6 text-xs",
        sm: "w-8 h-8 text-xs",
        md: "w-10 h-10 text-sm",
        lg: "w-12 h-12 text-base",
        xl: "w-16 h-16 text-lg",
        "2xl": "w-20 h-20 text-xl",
      },
      rounded: {
        full: "rounded-full",
        lg: "rounded-xl",
        md: "rounded-lg",
        sm: "rounded-md",
        none: "rounded-none",
      },
      color: {
        gray: "bg-gray-200 text-gray-700",
        blue: "bg-blue-100 text-blue-700",
        emerald: "bg-emerald-100 text-emerald-700",
        amber: "bg-amber-100 text-amber-700",
        red: "bg-red-100 text-red-700",
        purple: "bg-purple-100 text-purple-700",
        pink: "bg-pink-100 text-pink-700",
      },
    },
    defaultVariants: {
      size: "md",
      rounded: "full",
      color: "gray",
    },
  },
);

/* ─────────────────────────────────────────
   Types
───────────────────────────────────────── */
export interface AvatarProps
  extends Omit<HTMLAttributes<HTMLSpanElement>, "color">,
    VariantProps<typeof avatar> {
  src?: string;
  alt?: string;
  name?: string;
}

export interface AvatarGroupProps {
  avatars: AvatarProps[];
  max?: number;
  size?: AvatarProps["size"];
  className?: string;
}

/* ─────────────────────────────────────────
   Initials helper
───────────────────────────────────────── */
function getInitials(name: string): string {
  const parts = name.trim().split(/\s+/);
  if (parts.length === 1) return parts[0].charAt(0).toUpperCase();
  return (parts[0].charAt(0) + parts[parts.length - 1].charAt(0)).toUpperCase();
}

/* ─────────────────────────────────────────
   Avatar
───────────────────────────────────────── */
export const Avatar: FC<AvatarProps> = ({
  className,
  size,
  rounded,
  color,
  src,
  alt,
  name,
  ...props
}) => {
  const [imgError, setImgError] = useState(false);

  return (
    <span
      className={cn(avatar({ size, rounded, color: color as "gray" | "blue" | "emerald" | "amber" | "red" | "purple" | "pink" | null | undefined, className }))}
      title={name}
      {...props}
    >
      {src && !imgError ? (
        <img
          src={src}
          alt={alt ?? name ?? "avatar"}
          className="w-full h-full object-cover"
          onError={() => setImgError(true)}
        />
      ) : name ? (
        getInitials(name)
      ) : (
        <User className="w-1/2 h-1/2" />
      )}
    </span>
  );
};

Avatar.displayName = "Avatar";

/* ─────────────────────────────────────────
   AvatarGroup
───────────────────────────────────────── */
export const AvatarGroup: FC<AvatarGroupProps> = ({
  avatars,
  max = 4,
  size = "md",
  className,
}) => {
  const visible = avatars.slice(0, max);
  const overflow = avatars.length - max;

  const ringSize =
    size === "xs" ? "ring-1" :
    size === "sm" ? "ring-2" : "ring-2";

  return (
    <div className={cn("flex items-center", className)}>
      {visible.map((av, i) => (
        <span
          key={i}
          className={cn("-ml-2 first:ml-0", ringSize, "ring-white rounded-full")}
        >
          <Avatar {...av} size={size} />
        </span>
      ))}
      {overflow > 0 && (
        <span
          className={cn(
            "-ml-2 inline-flex items-center justify-center shrink-0",
            "rounded-full bg-gray-200 text-gray-700 font-semibold ring-2 ring-white",
            avatar({ size }),
            "text-xs",
          )}
        >
          +{overflow}
        </span>
      )}
    </div>
  );
};

AvatarGroup.displayName = "AvatarGroup";
