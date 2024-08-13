
// import * as React from 'react';
// import ImageList from '@mui/material/ImageList';
// import ImageListItem from '@mui/material/ImageListItem';
// import EventCard from './EventCard';
// import Box from '@mui/material/Box';
// import Typography from '@mui/material/Typography';

// export default function EventGallery({ eventName, eventDescription }) {
//   return (
//     <div style={{ display: 'flex', justifyContent: 'center', padding: '10px' }}>
    
//       <ImageList sx={{ width: '100%', height: 'auto'}} variant="woven" cols={5} gap={15}>
//         {itemData.map((item) => (
//           <ImageListItem key={item.img}>
//             <img
//               srcSet={`${item.img}?w=161&fit=crop&auto=format&dpr=2 2x`}
//               src={`${item.img}?w=161&fit=crop&auto=format`}
//               alt={item.title}
//               loading="lazy"
//             />
//           </ImageListItem>
//         ))}
//       </ImageList>
//     </div>
//   );
// }

import React from 'react';
import { useLocation } from 'react-router-dom';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import "./YearNav.css";

export default function EventGallery() {
  const location = useLocation();
  const { selectedEvent } = location.state || {};

  return (
    <div style={{minHeight: '100vh',textAlign: 'center', padding: '100px',alignItems: 'center',justifyContent: 'center',  flexDirection: 'column',  boxSizing: 'border-box', marginTop: '-30px',  display: 'flex' }}>
      {selectedEvent ? (
        <>
         <h1 className="animate-charcter" style={{ marginBottom: '10px', fontSize: '3rem', color: '#333' }}>
            {selectedEvent.name}
          </h1>
          <p style={{ fontSize: '1.2rem', textAlign: 'center', color: '#666', marginBottom: '30px' }}>
            {selectedEvent.description}
          </p>
        </>
      ) : (
        <p>       </p>
      )}
      <br></br>
      <ImageList
        sx={{ width: '100%', height: 'auto', marginTop: '20px'  }}
        variant="woven"
        cols={5}
        gap={8}
      >
        {/* Placeholder for images */}
        {itemData.map((item) => (
          <ImageListItem key={item.img}>
            <img
              srcSet={`${item.img}?w=161&fit=crop&auto=format&dpr=2 2x`}
              src={`${item.img}?w=161&fit=crop&auto=format`}
              alt={item.title}
              loading="lazy"
            />
          </ImageListItem>
        ))}
      </ImageList>
    </div>
  );
}


const itemData = [
  {
    img: 'https://images.unsplash.com/photo-1549388604-817d15aa0110',
    title: 'Bed',
  },
  {
    img: 'https://images.unsplash.com/photo-1563298723-dcfebaa392e3',
    title: 'Kitchen',
  },
  {
    img: 'https://images.unsplash.com/photo-1523413651479-597eb2da0ad6',
    title: 'Sink',
  },
  {
    img: 'https://images.unsplash.com/photo-1525097487452-6278ff080c31',
    title: 'Books',
  },
  {
    img: 'https://images.unsplash.com/photo-1574180045827-681f8a1a9622',
    title: 'Chairs',
  },
  {
    img: 'https://images.unsplash.com/photo-1597262975002-c5c3b14bbd62',
    title: 'Candle',
  },
  {
    img: 'https://images.unsplash.com/photo-1530731141654-5993c3016c77',
    title: 'Laptop',
  },
  {
    img: 'https://images.unsplash.com/photo-1481277542470-605612bd2d61',
    title: 'Doors',
  },
  {
    img: 'https://images.unsplash.com/photo-1517487881594-2787fef5ebf7',
    title: 'Coffee',
  },
  {
    img: 'https://images.unsplash.com/photo-1516455207990-7a41ce80f7ee',
    title: 'Storage',
  },
  {
    img: 'https://images.unsplash.com/photo-1519710164239-da123dc03ef4',
    title: 'Coffee table',
  },
  {
    img: 'https://images.unsplash.com/photo-1588436706487-9d55d73a39e3',
    title: 'Blinds',
  },
];
