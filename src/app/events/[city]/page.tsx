import EventsList from "@/components/events-list";
import H1 from "@/components/h1";
import { Suspense } from "react";
import Loading from "./loading";

import { Metadata } from "next";
import { capitalize } from "@/lib/utils";


type Props = {
  params: {
    city: string;
  };
};

export function generateMetadata({ params }: Props): Metadata {
  const { city } = params;
  const title =  city === 'all' ? 'All Events' : `Events in ${capitalize(city)}`
  return {
    title
  }
};

export default async function Events({ params }: Props) {
  const { city } = params;

  return (
    <main className="flex flex-col items-center py-24 px-[20px] min-h-[110vh]">
      <H1 className="mb-28">
        {city === "all"
          ? "All Events"
          : `Events in ${capitalize(city)}`}
      </H1>

      <Suspense fallback={<Loading />}>
        <EventsList city={city} />
      </Suspense>
    </main>
  );
}
