import React, { useEffect, useState }  from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import './YearNav.css'; 

const YearNav = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [isFixed, setIsFixed] = useState(false);

  const handleNavigation = (year) => {
    navigate(`/Gallery/${year}`);
  };

  const getButtonClasses = (year) => {
    const isActive = location.pathname.includes(year);
    return `yearNavButton nav-item mx-2 text-base font-medium rounded-md p-2 transition-all ${isActive ? 'active' : 'text-gray-600 hover:bg-gray-100'}`;
  };

  useEffect(() => {
    const handleScroll = () => {
      const mainNavBarHeight = document.querySelector('.mainNavBar').offsetHeight;
      const currentScroll = window.scrollY;
      setIsFixed(currentScroll > mainNavBarHeight);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  const title = "Gallery";
  return (
    <div>
    {/* <div className=" titleHeading text-7xl font-bold text-gray-800  flex-grow">
    EVENTS
  </div> */}
 
    <div className=" navbar px-5 py-3 shadow-lg fixed top-[60px] left-0 right-0 z-40 flex justify-between items-center ">
               <button 
          onClick={() => handleNavigation('Year2024')} 
          className={getButtonClasses('Year2024')}
        >
          2024
        </button>
        <button 
          onClick={() => handleNavigation('Year2023')} 
          className={getButtonClasses('Year2023')}
        >
          2023
        </button>
        <button 
          onClick={() => handleNavigation('Year2022')} 
          className={getButtonClasses('Year2022')}
        >
          2022
        </button>
      </div>
      </div>
  );
};

export default YearNav;


// import React, { useEffect, useState } from 'react';
// import { useNavigate, useLocation } from 'react-router-dom';
// import './YearNav.css'; 

// const YearNav = () => {
//   const navigate = useNavigate();
//   const location = useLocation();
//   const [isFixed, setIsFixed] = useState(false);

//   const handleNavigation = (year) => {
//     navigate(`/Gallery/${year}`);
//   };

//   const getButtonClasses = (year) => {
//     const isActive = location.pathname.includes(year);
//     return `yearNavButton nav-item mx-2 text-base font-medium rounded-md p-2 transition-all ${
//       isActive ? 'active' : 'text-gray-600 hover:bg-gray-100'
//     }`;
//   };

//   useEffect(() => {
//     const handleScroll = () => {
//       const mainNavBarHeight = document.querySelector('.mainNavBar')?.offsetHeight || 0;
//       const currentScroll = window.scrollY;
//       setIsFixed(currentScroll > mainNavBarHeight);
//     };

//     window.addEventListener('scroll', handleScroll);
//     return () => {
//       window.removeEventListener('scroll', handleScroll);
//     };
//   }, []);

//   return (
//     <div className={` px-6 py-3 shadow-lg ${isFixed ? 'fixed top-[80px] left-[20px] right-[20px] z-40' : 'top-[50px] left-0 right-0'} flex items-center justify-between`}>
//       <div className="title">
//         EVENTS
//       </div>
//       <div className="tabs">
//         <button 
//           onClick={() => handleNavigation('Year2024')} 
//           className={getButtonClasses('Year2024')}
//         >
//           2024
//         </button>
//         <button 
//           onClick={() => handleNavigation('Year2023')} 
//           className={getButtonClasses('Year2023')}
//         >
//           2023
//         </button>
//         <button 
//           onClick={() => handleNavigation('Year2022')} 
//           className={getButtonClasses('Year2022')}
//         >
//           2022
//         </button>
//       </div></div>
    
//   );
// };

// export default YearNav;


// import React, { useEffect, useState } from 'react';
// import { useNavigate, useLocation } from 'react-router-dom';
// import './YearNav.css';

// const YearNav = () => {
//   const navigate = useNavigate();
//   const location = useLocation();
//   const [isFixed, setIsFixed] = useState(false);

//   const handleNavigation = (year) => {
//     navigate(`/Gallery/${year}`);
//   };

//   const getButtonClasses = (year) => {
//     const isActive = location.pathname.includes(year);
//     return `yearNavButton nav-item mx-2 text-base font-medium rounded-md p-2 transition-all ${
//       isActive ? 'active' : 'text-gray-600 hover:bg-gray-100'
//     }`;
//   };

//   useEffect(() => {
//     const handleScroll = () => {
//       const mainNavBarHeight = document.querySelector('.mainNavBar')?.offsetHeight || 0;
//       const currentScroll = window.scrollY;
//       setIsFixed(currentScroll > mainNavBarHeight);
//     };

//     window.addEventListener('scroll', handleScroll);
//     return () => {
//       window.removeEventListener('scroll', handleScroll);
//     };
//   }, []);

//   return (
//     <div>
      //  <div className={` px-5 py-3 shadow-lg ${isFixed ? 'fixed top-[80px] left-[20px] right-[20px] z-40' : 'top-[10px] left-0 right-0'} flex items-center justify-between`}>
//          {/* Centered title */}
//         <div className="flex-1 text-center events-title text-4xl font-bold">
//            EVENTS
//          </div>
//          {/* Right-aligned buttons */}
//         <div className="tabs flex space-x-4">          <button onClick={() => handleNavigation('Year2024')} className={getButtonClasses('Year2024')}>
//              2024
//            </button>
//            <button onClick={() => handleNavigation('Year2023')} className={getButtonClasses('Year2023')}>
//              2023
//            </button>
//            <button onClick={() => handleNavigation('Year2022')} className={getButtonClasses('Year2022')}>
//              2022
//            </button>
//          </div>
//        </div>
//     </div>
//   );
// };
// export default YearNav;
