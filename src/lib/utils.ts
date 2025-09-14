import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const checkFilters = (queryUrl: unknown) =>
  Object.entries(queryUrl as Record<string, any>)
    .filter(([key, _]) => {
      if (key === "page") return false;
      if (key === "sort") return false;
      return true;
    })
    .filter(([_, value]) => {
      if (!value) return false;
      if (value === null) return false;
      if (Array.isArray(value) && value.length === 0) return false;
      return true;
    }).length !== 0;
