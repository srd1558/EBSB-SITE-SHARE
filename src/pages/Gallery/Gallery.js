// import React from 'react';
// import { Routes, Route, useNavigate } from 'react-router-dom';
// import YearNav from './components/YearNav'; 
// import Year2024 from './components/Year2024';
// import Year2023 from './components/Year2023'; 
// import Year2022 from './components/Year2022'; 

// const Gallery = () => {
//     // const navigate = useNavigate();
  
//     // React.useEffect(() => {
//     //   navigate('Year2024'); // Redirect to 2024 by default on component mount
//     // }, [navigate]);
//     const title = "Gallery"; 
//   return (
//     <div className="bg-gradient-to-r from-cyan-200 to-blue-200 to-indigo-200 min-h-screen"> 
//       <YearNav />
//       <div className="pt-24">
      
//             <Routes>
//           <Route path="/Year2024" element={<Year2024 />} />
//           <Route path="/Year2023" element={<Year2023 />} />
//           <Route path="/Year2022" element={<Year2022 />} />
//         </Routes>
//       </div>
//     </div>
//   );
// };

// export default Gallery;

import React, { useEffect }  from 'react';
import { Routes, Route, useNavigate, useLocation } from 'react-router-dom';
import YearNav from './components/YearNav'; 
import Year2024 from './components/Year2024';
import Year2023 from './components/Year2023'; 
import Year2022 from './components/Year2022'; 

const Gallery = () => {
    const navigate = useNavigate();
    const currentLocation = useLocation(); 

    useEffect(() => {
      // Redirect to Year2024 if no year is specified in the URL
      if (currentLocation.pathname === '/Gallery') {
        navigate('/Gallery/Year2024'); 
      }
    }, [navigate, currentLocation.pathname]);

  return (
  //  <div className="bg-gradient-to-r from-cyan-200 to-blue-200 to-indigo-200 min-h-screen"> 
    <div className="min-h-screen"> 
   {/* <div className="bg-gradient-to-r from-cyan-200 to-blue-200 to-indigo-200 min-h-screen">  */}
    <div className="min-h-screen"> 
      <YearNav />
      <div className="pt-24">
      
            <Routes>
          <Route path="/Year2024" element={<Year2024 />} />
          <Route path="/Year2023" element={<Year2023 />} />
          <Route path="/Year2022" element={<Year2022 />} />
        </Routes>
      </div>
     </div>
     </div>
  );
};

export default Gallery;

