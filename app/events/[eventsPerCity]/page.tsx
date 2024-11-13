// app/events/[eventsPerCity]/page.tsx

import Link from "next/link";

export default async function Page({ params }: { params: { eventsPerCity: string } }) {
  const city = params.eventsPerCity;

  return (
    <div>
      <h2>Events in {city}</h2>

      {/* Linking to specific events within the current city */}
      <Link href={`/events/${city}/seminar`}>Event 1: Seminar</Link> <br /> <br />
      <Link href={`/events/${city}/workshop`}>Event 2: Workshop</Link> <br /> <br />
      <Link href={`/events/${city}/concert`}>Event 3: Concert</Link> <br /> <br />
      <Link href={`/events/${city}/festival`}>Event 4: Festival</Link>
    </div>
  );
}
