import './single.css'
import data from '@/db/data.json'
import Image from 'next/image';

type EventParams = {
  params: {
    eventsPerCity: string;
    event: string;
  };
}

export default function EventPage({ params }: EventParams) {
  const { eventsPerCity, event } = params;
  const info = data.allEvents;

  // Filter the events based on the 'event' parameter from the URL
  const filteredEvents = info.filter((information) => information.id.toLowerCase() === event.toLowerCase());

  // Ensure filteredEvents contains at least one item
  if (filteredEvents.length === 0) {
    return (
      <div className="event-page">
        <h2 className="event-title">Event Not Found</h2>
        <p>No event found for <strong>{event}</strong> in <strong>{eventsPerCity}</strong>.</p>
      </div>
    );
  }

  const eventDetails = filteredEvents[0];  // Take the first (and only) event from the filtered list

  return (
    <div className="event-page">
      {/* Display the event image */}
      <Image
        src={eventDetails.image}
        alt={eventDetails.title}
        width={350}
        height={390}
        className="event-image"
      />
      <h2 className="event-title">Event: {eventDetails.title}</h2>
      <p className="event-description">
        This is the <strong>{eventDetails.title}</strong> happening in <strong>{eventsPerCity}</strong>.
      </p>
      <p className="event-description">{eventDetails.description}</p>
      {/* You can add additional content like event details here */}
    </div>
  );
}
