import React,  { useState, useEffect } from 'react';
import EventCard from './EventCard';
import YearNav from './YearNav';
import EvCard2023 from '../utils/EvCard2023.json';

const Year2023 = () => {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    setEvents(EvCard2023 || []);
      setEvents(EvCard2023 || []);
  }, []);
  return (
   
       <div>

      <YearNav />
      <div className="pt-24 flex flex-wrap justify-center items-center" style={{ marginTop: '-30px'}}>
        {events.map((event, index) => (
          
          <EventCard key={index} event={event} />
        ))}
      </div>
    </div>
  );
};
export default Year2023;



// import React, { useState, useEffect } from 'react';
// import EventCard from './EventCard';
// import YearNav from './YearNav';
// import EvCard2023 from '../utils/EvCard2023.json';

// const Year2023 = () => {
//   const [events, setEvents] = useState([]);

//   useEffect(() => {
//     setEvents(EvCard2023 || []);
//     setEvents(EvCard2023 || []);
//   }, []);


//   return (
//     <>
//       <YearNav />
//       <div
//         className="pt-24 flex flex-wrap justify-center items-centre"
//         style={{
//           marginTop: '20px',
//           padding: '80px',
//           boxSizing: 'border-box',
//           display: 'flex',
//           flexWrap: 'wrap',
//           justifyContent: 'center',
//           // gap: '-50px',
//           width: 'calc(100% - -5px)',// Full width of container
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

// export default Year2023;
