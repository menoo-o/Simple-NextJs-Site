'use client'


type EventParams = {
  params: {
    eventsPerCity: string;
    event: string;
  };
}

import './single.css'
import data from '@/db/data.json'
import Image from 'next/image';
import BuyTicketButton from '@/components/BuyTickets';
import { useState, useEffect } from 'react';
import { log } from 'console';

import { useRouter } from 'next/navigation';



export default function EventPage({ params }: EventParams) {
  const [eventsPerCity, setEventsPerCity] = useState('');
  const [event, setEvent] = useState('');

  const router = useRouter();

  useEffect(() => {
    const fetchParams = async () => {
      // Await the params promise and extract properties
      const unwrappedParams = await params;
      setEventsPerCity(unwrappedParams.eventsPerCity);
      setEvent(unwrappedParams.event);
    };
    
    fetchParams(); // Call the async function
  }, [params]); // Only re-run if params change

  
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
        priority={true} // {false} | {true}
        width={350}
        height={390}
        className="event-image"
      />
      <h2 className="event-title">Event: {eventDetails.title}</h2>
      <p className="event-description">
        This is the <strong>{eventDetails.title}</strong> happening in <strong>{eventsPerCity}</strong>.
      </p>
      <p className="event-description">{eventDetails.description}</p>
     
      <BuyTicketButton onClick={()=>{
        router.push(`/buyticket?city=${eventsPerCity}&event=${eventDetails.title}`);
      }}/>

      {/* You can add additional content like event details here */}
    </div>
  );
}
