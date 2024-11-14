'use client';

import './style.css'
import BuyTicketButton from "@/components/BuyTickets";
import { useSearchParams } from 'next/navigation'

export default function Page() {

    const searchParams = useSearchParams();
    const city = searchParams.get('city');
    const event = searchParams.get('event');


  return (
    <div className="ticket-page-container">
      <h2 className="ticket-page-title">Get Tickets for {event} happing in {city}</h2>
      
      <form method="POST" action="#" className="ticket-form">
        
        {/* Name Field */}
        <div className="form-group">
          <label htmlFor="name" className="form-label">Name:</label>
          <input 
            type="text"
            name="name"
            id="name"
            required={true}
            className="form-input"
            placeholder="Enter your name"
          />
        </div>
        
        {/* Email Field */}
        <div className="form-group">
          <label htmlFor="email" className="form-label">Email:</label>
          <input 
            type="email"
            name="email"
            id="email"
            required={true}
            className="form-input"
            placeholder="Enter your email"
          />
        </div>
        
        {/* Phone Number Field */}
        <div className="form-group">
          <label htmlFor="number" className="form-label">Phone Number:</label>
          <input 
            type="tel" 
            name="phone" 
            id="number" 
            required={true}
            className="form-input"
            placeholder="Enter your phone number"
          />
        </div>

        {/* Gender Selection */}
        <div className="form-group">
          <label htmlFor="gender" className="form-label">Gender:</label>
          <select name="gender" id="gender" className="form-select" required>
            <option value="">Select Gender</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="other">Other</option>
          </select>
        </div>
        
        {/* Age Field */}
        <div className="form-group">
          <label htmlFor="age" className="form-label">Age:</label>
          <input 
            type="number" 
            name="age" 
            id="age" 
            required={true}
            className="form-input"
            placeholder="Enter your age"
            min="0"
          />
        </div>

        {/* Submit Button */}
        <div className="form-group">
          <BuyTicketButton onClick={() => {
            console.log('form submitted');
          }} className="submit-button" />
        </div>
        
      </form>
    </div>
  );
}
