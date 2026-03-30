import React from "react";
import { Plus } from "lucide-react";
import { cn } from "../../utils/cn";

export interface StackUser {
  name: string;
  avatar?: string;
  color?: string;
}

export interface UserStackProps {
  users: StackUser[];
  max?: number;
  size?: "sm" | "md" | "lg";
  onAdd?: () => void;
  onClick?: (user: StackUser) => void;
  onOverflowClick?: () => void;
  addLabel?: string;
  className?: string;
}

const sizeMap = {
  sm: { box: "h-7 w-7", text: "text-[10px]", icon: 12, overlap: "-space-x-1.5" },
  md: { box: "h-9 w-9", text: "text-xs", icon: 14, overlap: "-space-x-2" },
  lg: { box: "h-11 w-11", text: "text-sm", icon: 16, overlap: "-space-x-2.5" },
} as const;

function getInitials(name: string) {
  return name
    .split(" ")
    .map((w) => w[0])
    .slice(0, 2)
    .join("")
    .toUpperCase();
}

function stringToColor(str: string) {
  let hash = 0;
  for (let i = 0; i < str.length; i++) hash = str.charCodeAt(i) + ((hash << 5) - hash);
  const h = ((hash % 360) + 360) % 360;
  return `hsl(${h}, 55%, 55%)`;
}

export function UserStack({
  users,
  max = 4,
  size = "md",
  onAdd,
  onClick,
  onOverflowClick,
  addLabel = "Add member",
  className,
}: UserStackProps) {
  const s = sizeMap[size];
  const visible = users.slice(0, max);
  const overflow = users.length - max;

  const circleBase = cn(
    s.box,
    "rounded-full border-2 border-white dark:border-gray-900 inline-flex items-center justify-center shrink-0 relative",
  );

  return (
    <div className={cn("inline-flex items-center", s.overlap, className)}>
      {visible.map((user, i) => {
        const bg = user.color ?? stringToColor(user.name);
        return (
          <div
            key={i}
            className={cn(
              circleBase,
              "group/av transition-transform hover:scale-110 hover:z-10",
              onClick && "cursor-pointer",
            )}
            style={user.avatar ? undefined : { backgroundColor: bg }}
            onClick={() => onClick?.(user)}
            role={onClick ? "button" : undefined}
            tabIndex={onClick ? 0 : undefined}
            aria-label={user.name}
          >
            {user.avatar ? (
              <img
                src={user.avatar}
                alt={user.name}
                className="h-full w-full rounded-full object-cover"
              />
            ) : (
              <span className={cn("font-semibold text-white select-none", s.text)}>
                {getInitials(user.name)}
              </span>
            )}

            {/* Tooltip */}
            <span className="pointer-events-none absolute -top-8 left-1/2 -translate-x-1/2 whitespace-nowrap rounded bg-gray-900 dark:bg-gray-100 px-2 py-0.5 text-[11px] text-white dark:text-gray-900 opacity-0 group-hover/av:opacity-100 transition-opacity z-20">
              {user.name}
            </span>
          </div>
        );
      })}

      {overflow > 0 && (
        <div
          className={cn(
            circleBase,
            "bg-gray-200 dark:bg-gray-700",
            onOverflowClick && "cursor-pointer hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors",
          )}
          onClick={onOverflowClick}
          role={onOverflowClick ? "button" : undefined}
          tabIndex={onOverflowClick ? 0 : undefined}
          aria-label={`${overflow} more`}
        >
          <span className={cn("font-bold text-gray-600 dark:text-gray-300 select-none", s.text)}>
            +{overflow}
          </span>
        </div>
      )}

      {onAdd && (
        <div
          className={cn(
            circleBase,
            "border-dashed border-gray-300 dark:border-gray-600 cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors",
          )}
          onClick={onAdd}
          role="button"
          tabIndex={0}
          aria-label={addLabel}
        >
          <Plus size={s.icon} className="text-gray-400 dark:text-gray-500" />
        </div>
      )}
    </div>
  );
}
