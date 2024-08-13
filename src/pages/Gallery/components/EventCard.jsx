
// import React, { useState, useEffect } from 'react';
// import { useNavigate } from 'react-router-dom';
// import AspectRatio from '@mui/joy/AspectRatio';
// import Box from '@mui/joy/Box';
// import Card from '@mui/joy/Card';
// import IconButton from '@mui/joy/IconButton';
// import Typography from '@mui/joy/Typography';
// import { Favorite as FavoriteIcon, FavoriteBorder as FavoriteBorderIcon } from '@mui/icons-material';

// export default function EventCard({ event }) {
//   const [likes, setLikes] = useState(event.likes || 0);
//   const [isLiked, setIsLiked] = useState(false);
//   let navigate = useNavigate();

//   useEffect(() => {
//     // Retrieve the likes count from local storage
//     const storedLikes = localStorage.getItem(event.name);
//     if (storedLikes) {
//       setLikes(parseInt(storedLikes, 10));
//     }
//   }, [event.name]);

//   const handleClick = () => {
//     navigate('/EventGallery', { state: { selectedEvent: event } });
//   };

//   const handleLike = (e) => {
//     e.stopPropagation(); // Prevents card click from firing
//     const newLikes = isLiked ? likes - 1 : likes + 1;
//     setIsLiked(!isLiked);
//     setLikes(newLikes);
//     localStorage.setItem(event.name, newLikes); // Store the updated likes count in local storage
//   };

//   return (
//     <Box sx={{ minHeight: 350, margin: 3, position: 'relative' }}>
//       <Card
//         variant="outlined"
//         sx={(theme) => ({
//           width: 400,
//           height: 300,
//           boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.2)',
//           position: 'relative',
//           overflow: 'hidden',
//           display: 'flex',
//           marginTop: '-100px', 
//           flexDirection: 'column',
//           alignItems: 'center',
//           justifyContent: 'center',
//           cursor: 'pointer',
//           transition: 'transform 0.3s, box-shadow 0.3s',
//           '&:hover': {
//             boxShadow: '0px 8px 16px rgba(0, 0, 0, 0.3)',
//             transform: 'translateY(-2px)',
//           },
//         })}
//         onClick={handleClick}
//       >
//         {/* Top Left Label */}
//         <Box sx={{
//           position: 'absolute',
//           top: 10,
//           left: 10,
//           bgcolor: 'background.level1',
//           padding: '2px 4px',
//           borderRadius: '4px',
//           boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.2)',
//           zIndex: 1,
//         }}>
//           <Typography level="body-xs" sx={{ color: 'text.secondary' }}>
//             @ebsb_iiitbh
//           </Typography>
//         </Box>

//         {/* Top Right Heart Emoji and Likes Count */}
//         <Box sx={{
//           position: 'absolute',
//           top: 5,
//           right: 18,
//           zIndex: 1,
//           display: 'flex',
//           alignItems: 'center',
//         }}>
//           <IconButton
//             onClick={handleLike}
//             sx={{ padding: 0 }}
//           >
//             {isLiked ? (
//               <FavoriteIcon sx={{ color: '#b71c1c' }} />
//             ) : (
//               <FavoriteBorderIcon />
//             )}
//           </IconButton>
//           <Typography level="body-xs" sx={{ color: 'text.secondary',
//              fontSize: '1rem', 
//              fontWeight: 'bold',
//              ml: 0,
//           }}>
//             {likes}
//           </Typography>
//         </Box>

//         {/* Image */}
//         <AspectRatio
//           variant="4/3"
//           sx={{
//             width: '100%',
//             height: '100%',
//             position: 'absolute', // Absolute positioning to cover the entire card
//             top: 0,
//             left: 0,
//             zIndex: 0,
//             display: 'flex',
//             alignItems: 'center',
//             justifyContent: 'center',
//             overflow: 'hidden',
//           }}
//         >
//           <img
//         src="https://images.unsplash.com/photo-1492305175278-3b3afaa2f31f?auto=format&fit=crop&w=2000"
//            loading="lazy"
//             alt=""
//             style={{ width: '100%', height: '100%', objectFit: 'cover' }}
//           />
//         </AspectRatio>
//         <img
//               alt=""
//               src="https://images.unsplash.com/photo-1492305175278-3b3afaa2f31f?auto=format&fit=crop&w=2000"
//             />
//         {/* Event Name and Date */}
//         <Box sx={{
//           width: '100%',
//           display: 'flex',
//           flexDirection: 'column',
//           alignItems: 'flex-start',
//           padding: 2,
//           backgroundColor: 'background.level1',
//           position: 'absolute',
//           bottom: 0,
//           left: 0,
//           alignItems: 'flex-start',
//           paddingLeft: 2,
//           boxShadow: 'inset 0px -4px 8px rgba(0, 0, 0, 0.1)', 
//         }}>
//           <Typography level="title-sm" sx={{ textAlign: 'left', mb: 1 }}>
//             {event.name}
//           </Typography>
//           <Typography level="body-xs" sx={{ textAlign: 'left', color: 'text.secondary' }}>
//             {event.date}
//           </Typography>
//         </Box>
//       </Card>
//     </Box>
//   );
// }

import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import AspectRatio from '@mui/joy/AspectRatio';
import Box from '@mui/joy/Box';
import Card from '@mui/joy/Card';
import IconButton from '@mui/joy/IconButton';
import Typography from '@mui/joy/Typography';
import { Favorite as FavoriteIcon, FavoriteBorder as FavoriteBorderIcon } from '@mui/icons-material';

export default function EventCard({ event }) {
  const [likes, setLikes] = useState(event.likes || 0);
  const [isLiked, setIsLiked] = useState(false);
  let navigate = useNavigate();

  useEffect(() => {
    const storedLikes = localStorage.getItem(event.name);
    if (storedLikes) {
      setLikes(parseInt(storedLikes, 10));
    }
  }, [event.name]);

  const handleClick = () => {
    navigate('/EventGallery', { state: { selectedEvent: event } });
  };

  const handleLike = (e) => {
    e.stopPropagation();
    const newLikes = isLiked ? likes - 1 : likes + 1;
    setIsLiked(!isLiked);
    setLikes(newLikes);
    localStorage.setItem(event.name, newLikes); 
  };

  return (
    <Box sx={{ minHeight: 350, margin: 3, position: 'relative' }}>
      <Card
        variant="outlined"
        sx={{
          width: 400,
          height: 300,
          boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.2)',
          position: 'relative',
          overflow: 'hidden',
           display: 'flex',
          marginTop: '0px',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          cursor: 'pointer',
          transition: 'transform 0.3s, box-shadow 0.3s',
          '&:hover': {
            boxShadow: '0px 8px 16px rgba(0, 0, 0, 0.3)',
            transform: 'translateY(-2px)',
          },
        }}
        onClick={handleClick}
      >
        {/* Top Left Label */}
        <Box
          sx={{
            position: 'absolute',
            top: 10,
            left: 10,
            bgcolor: 'background.level1',
            padding: '2px 4px',
            borderRadius: '4px',
            boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.2)',
            zIndex: 1,
          }}
        >
          <Typography level="body-xs" sx={{ color: 'text.secondary' }}>
            @ebsb_iiitbh
          </Typography>
        </Box>

        {/* Top Right Heart Emoji and Likes Count */}
        <Box
          sx={{
            position: 'absolute',
            top: 5,
            right: 18,
            zIndex: 1,
            display: 'flex',
            alignItems: 'center',
          }}
        >
          <IconButton onClick={handleLike} sx={{ padding: 0 }}>
            {isLiked ? (
              <FavoriteIcon sx={{ color: '#b71c1c' }} />
            ) : (
              <FavoriteBorderIcon />
            )}
          </IconButton>
          <Typography
            level="body-xs"
            sx={{
              color: 'text.secondary',
              fontSize: '1rem',
              fontWeight: 'bold',
              ml: 0,
            }}
          >
            {likes}
          </Typography>
        </Box>

        {/* Image */}
        <AspectRatio
          variant="4/3"
          sx={{
            width: '100%',
            height: '100%',
            position: 'absolute', // Absolute positioning to cover the entire card
            top: 0,
            left: 0,
            zIndex: 0,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            overflow: 'hidden',
          }}
        >
          <img
            src="https://images.unsplash.com/photo-1492305175278-3b3afaa2f31f?auto=format&fit=crop&w=2000"
            loading="lazy"
            alt=""
            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
          />
        </AspectRatio>
        <img
          alt=""
          src="https://images.unsplash.com/photo-1492305175278-3b3afaa2f31f?auto=format&fit=crop&w=2000"
        />
        {/* Event Name and Date */}
        <Box
          sx={{
            width: '100%',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'flex-start',
            padding: 2,
            backgroundColor: 'background.level1',
            position: 'absolute',
            bottom: 0,
            left: 0,
            paddingLeft: 2,
            boxShadow: 'inset 0px -4px 8px rgba(0, 0, 0, 0.1)',
          }}
        >
          <h3 className="animate-charcter">
          <Typography level="title-sm" sx={{ textAlign: 'left', mb: 1 }}>
            {event.name}
          </Typography>
          </h3>
          <Typography
            level="body-xs"
            sx={{ textAlign: 'center', color: 'text.secondary' }}
          >
            {event.date}
          </Typography>
        </Box>
      </Card>
    </Box>
  );
}
