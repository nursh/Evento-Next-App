import { twMerge } from "tailwind-merge";
import clsx, { ClassValue } from "clsx";


export function cn(...classes: ClassValue[]) {
  return twMerge(clsx(classes));
}

export function capitalize(str: string) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

