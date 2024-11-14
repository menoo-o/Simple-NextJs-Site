// Define an interface for the request body data
interface RegistrationData {
    name: string;
    email: string;
    phoneNumber: string;
    age: number;
    gender: "male" | "female" | "other";
    event: string; // Could be an event ID or a unique identifier for the event
}


import { NextResponse } from "next/server";
import data from "@/db/data.json";

export async function POST(request: Request) {
    try {
        const body = await request.json() as RegistrationData;
        
        // Extract event data from the request
        const { name, email, phoneNumber, age, gender, event } = body;

        // Find the specific event in the data (e.g., with an ID or unique name)
        const selectedEvent = data.allEvents.find((evt) => evt.id === event || evt.title === event);
        
        if (!selectedEvent) {
            return new NextResponse("Event not found", { status: 404 });
        }

        // Check if the email is already registered
        const isEmailRegistered = selectedEvent.emails_registered.includes(email);

        if (isEmailRegistered) {
            return new NextResponse(
                JSON.stringify({ message: "Email already registered for this event" }),
                { status: 400 }
            );
        }

        // If all checks pass, proceed with registration (e.g., add email to the database)
        return new NextResponse(
            JSON.stringify({ message: "Registration successful" }),
            { status: 200 }
        );
    } catch (error) {
        return new NextResponse("Error processing registration", { status: 500 });
    }
}
