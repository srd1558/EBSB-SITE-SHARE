import React, { useState, useEffect } from 'react';
import EventCard from './EventCard';
import YearNav from './YearNav';
import EvCard2022 from '../utils/EvCard2022.json';

const Year2022 = () => {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    // Set events only if EvCard2023 is an array
    if (Array.isArray(EvCard2022)) {
      setEvents(EvCard2022);
    } else {
      console.error("EvCard2022 is not an array", EvCard2022);
    }
  }, []);

  return (
    <>
      <YearNav />
      <div
        className="pt-24 flex flex-wrap justify-center items-center"
        style={{ marginTop: '-10px' }}
      >
        {events.length > 0 ? (
          events.map((event, index) => (
            <EventCard key={index} event={event} />
          ))
        ) : (
          <div>No events found for 2022</div>
        )}
      </div>
    </>
  );
};

export default Year2022;

// import React, { useState, useEffect } from 'react';
// import EventCard from './EventCard';
// import YearNav from './YearNav';
// import EvCard2023 from '../utils/EvCard2023.json';

// const Year2022 = () => {
//   const [events, setEvents] = useState([]);

//   useEffect(() => {
//     // Set events only if EvCard2023 is an array
//     if (Array.isArray(EvCard2023)) {
//       setEvents(EvCard2023);
//     } else {
//       console.error("EvCard2023 is not an array", EvCard2023);
//     }
//   }, []);

//   return (
//     <>
//       <YearNav />
//       <div
//         className="pt-24 flex flex-wrap justify-center items-start"
//         style={{
//           marginTop: '20px',
//           padding: '60px',
//           boxSizing: 'border-box',
//           display: 'flex',
//           flexWrap: 'wrap',
//           justifyContent: 'center',
//           width: 'calc(100% - -40px)',// Full width of container
//         }}
//       >
//         {events.length > 0 ? (
//           events.map((event, index) => (
//             <div
//               key={index}
//               style={{
//                 flex: '1 0 calc(33.333% - 20px)', // 3 cards per row with space
//                 boxSizing: 'border-box',
//                 margin: '10px',
//               }}
//             >
//               <EventCard event={event} />
//             </div>
//           ))
//         ) : (
//           <div>  </div>
//         )}
//       </div>
//     </>
//   );
// };

// export default Year2022;
