import { twMerge } from 'tailwind-merge';
import clsx, { ClassValue } from "clsx";
import { EventoEvent } from './types';

export function cn(...classes: ClassValue[]) {
 return twMerge(clsx(classes));
}

export function capitalize(str: string) {
  return str.charAt(0).toUpperCase() + str.slice(1)
}


export async function getEvents(city: string) {
  const response = await fetch(
    `https://bytegrad.com/course-assets/projects/evento/api/events?city=${city}`,
    { next: { revalidate: 300 } }
  );
  return response.json();
}

export async function getEvent(slug: string) {
  const response = await fetch(
    `https://bytegrad.com/course-assets/projects/evento/api/events/${slug}`
  );
  return response.json();
}