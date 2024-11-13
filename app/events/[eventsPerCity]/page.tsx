// 
// app/events/[eventsPerCity]/page.tsx
type eventCity = {
  params:{
    eventsPerCity: string;
  }
}


import Link from "next/link";
import data from "@/db/data.json"
import Image from "next/image";

export default async function Page({ params }: eventCity ) {
  const city = params.eventsPerCity; // Get city from URL parameters
const information = data.allEvents;

// Filter events based on the city in the URL
const filteredEvents = information.filter((info) => info.city.toLowerCase() === city.toLowerCase());

return (
  <div className="events-page">
    <h2 className="city-title">Events in {city}</h2>

    <div className="events-grid">
      {filteredEvents.map((info) => (
        <div key={info.id} className="event-card">
          <Link href={`/events/${city}/${info.id}`} className="event-link">
            <Image src={info.image} alt={info.title} width={350} height={390} className="event-image" />
            <h3 className="event-title">{info.title}</h3>
            <p className="event-description">{info.description}</p>
          </Link>
        </div>
      ))}
    </div>
  </div>
);
}
