import { twMerge } from 'tailwind-merge';
import clsx, { ClassValue } from "clsx";
import prisma from './db';
import { notFound } from 'next/navigation';


export function cn(...classes: ClassValue[]) {
 return twMerge(clsx(classes));
}

export function capitalize(str: string) {
  return str.charAt(0).toUpperCase() + str.slice(1)
}


export async function getEvents(city: string) {
  const searchCity = city === 'all' ? undefined : capitalize(city);
  const events = await prisma.eventoEvent.findMany({
    where: {
      city: searchCity
    },
    orderBy: {
      date: 'asc'
    }
  });
  return events;
}

export async function getEvent(slug: string) {

  const event = await prisma.eventoEvent.findUnique({
    where: {
      slug
    }
  });

  if (!event) {
    return notFound();
  }

  return event;
}