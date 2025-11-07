import { clsx, type ClassValue } from "clsx"
import type { Easing } from "motion/react";
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const fadeInUp = (delay = 0) => ({
  initial: { opacity: 0, top: 25 },
  animate: {
    opacity: 1,
    top: 0,
    transition: { ease: "easeInOut" as Easing, duration: 0.5, delay },
  },
});