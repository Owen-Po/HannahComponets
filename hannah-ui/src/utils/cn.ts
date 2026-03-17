import clsx from "clsx"
import { twMerge } from "tailwind-merge"

/**
 * Combina clases condicionales (clsx)
 * y resuelve conflictos de Tailwind (tailwind-merge)
 */
export function cn(
    ...inputs: (string | undefined | null | false)[]
) {
    return twMerge(clsx(inputs))
}