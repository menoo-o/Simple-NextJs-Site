// app/events/[eventsPerCity]/[event]/page.tsx

export default function EventPage({ params }: { params: { eventsPerCity: string; event: string } }) {
  const { eventsPerCity, event } = params;
  
  return (
    <div>
      <h2>Event: {event}</h2>
      <p>This is the {event} happening in {eventsPerCity}.</p>
      {/* Add additional content or details for the event */}
    </div>
  );
}
