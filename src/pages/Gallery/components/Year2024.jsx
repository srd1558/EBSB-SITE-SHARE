import React, { useState, useEffect } from 'react';
import EventCard from './EventCard';
import YearNav from './YearNav';
import EvCard2024 from '../utils/EvCard2024.json'



const Year2024 = () => {
    const [events, setEvents] = useState([]);

    useEffect(() => {
      setEvents(EvCard2024 || []);
      setEvents(EvCard2024 || []);
    }, []);
    return (
      <>
        <YearNav />
        <div className="pt-24 flex flex-wrap justify-center items-center" style={{ marginTop: '-30px' }}>
          {events.map((event, index) => (
     
            <EventCard key={index} event={event} />
              ))}
        </div>
      </>
    );
  };
export default Year2024;


