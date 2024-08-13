import React from "react";
import {
  FaFacebookSquare,
  FaInstagram,
  FaTwitterSquare,
} from "react-icons/fa";

const SocialIcon = ({ icon: Icon }) => (
  <Icon className="social-icon hover:text-[#1877F2]" size={30} />
);

const Footer = () => {
  const items = [
    { type: "icon", icon: FaFacebookSquare },
    { type: "icon", icon: FaInstagram },
    { type: "icon", icon: FaTwitterSquare },

    {
      type: "section",
      title: "LINKS",
      items: [
        { name: "Past Events", href: "#past-events" },
        { name: "Upcoming Events", href: "#upcoming-events" },
        { name: "EBSB", href: "#ebsb" },
        { name: "IIIT-BH", href: "#iiit-bh" },
        { name: "Additional Link 1", href: "#additional-link-1" },
        { name: "Additional Link 2", href: "#additional-link-2" },
      ],
    },
    {
      type: "section",
      title: "CONTACT US",
      items: [
        { name: "EMAILID@GMAIL.COM", href: "mailto:EMAILID@GMAIL.COM" },
        { name: "MOB:9999999999", href: "tel:9999999999" },
        { name: "Indian Institute of Information Technology, Sabour Bhagalpur", href: "#address" },
        { name: "Additional Contact 1", href: "#additional-contact-1" },
        { name: "Additional Contact 2", href: "#additional-contact-2" },
      ],
    },
  ];

  return (
    <div className="mx-auto py-4 px-5 grid lg:grid-cols-2 gap-4 text-gray-300 bg-slate-600 w-full">
      {/* Left section with logo and text */}
      <div className="flex flex-col items-center justify-center bg-slate-700 p-6 text-center lg:col-span-1">
        <div className="w-28 h-28 mb-4"> {/* Adjusted size of the logo */}
          <img className="w-full h-full object-contain hover:scale-110 transition-transform duration-300" src="/ebsb.png" alt="Logo" />
        </div>
        <div className="space-y-2">
          <h3 className="text-2xl lg:text-3xl font-bold text-green-300"> {/* Adjusted text size */}
            Ek Bharat Shreshth Bharat
          </h3>
          <h3 className="text-2xl lg:text-3xl font-bold text-white">
            IIIT Bhagalpur
          </h3>
        </div>
        <div className="mt-6">
          <h2 className="font-medium font-bold text-black text-lg py-3">
            Connect with us.
          </h2>
          <div className="flex gap-4 justify-center">
            {items.map((item, index) =>
              item.type === "icon" ? (
                <SocialIcon key={index} icon={item.icon} />
              ) : null
            )}
          </div>
        </div>
      </div>

      {/* Right section with footer content organized in sections */}
      <div className="flex flex-col lg:flex-row lg:justify-between lg:col-span-1 px-6 lg:px-8 py-4 space-y-6 lg:space-y-0">
        {items.map((item, index) =>
          item.type === "section" ? (
            <div key={index} className="flex-1">
              <h6 className="font-large font-bold text-white text-lg mb-3">
                {item.title}
              </h6>
              <ul className="space-y-2">
                {item.items.map((subItem, subIndex) => (
                  <li key={subIndex} className="text-sm text-gray-200 hover:text-white transition-colors duration-300">
                    <a href={subItem.href} className="hover:underline hover:text-white">
                      {subItem.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ) : null
        )}
      </div>
    </div>
  );
};

export default Footer;
// import React from "react";
// import {
//   FaFacebookSquare,
//   FaInstagram,
//   FaTwitterSquare,
// } from "react-icons/fa";

// const SocialIcon = ({ icon: Icon }) => (
//   <Icon className="social-icon hover:text-[#1877F2]" size={30} />
// );

// const Footer = () => {
//   const items = [
//     { type: "icon", icon: FaFacebookSquare },
//     { type: "icon", icon: FaInstagram },
//     { type: "icon", icon: FaTwitterSquare },

//     {
//       type: "section",
//       title: "LINKS",
//       items: [
//         { name: "Past Events", href: "#past-events" },
//         { name: "Upcoming Events", href: "#upcoming-events" },
//         { name: "EBSB", href: "#ebsb" },
//         { name: "IIIT-BH", href: "#iiit-bh" },
//         { name: "Additional Link 1", href: "#additional-link-1" },
//         { name: "Additional Link 2", href: "#additional-link-2" },
//       ],
//     },
//     {
//       type: "section",
//       title: "CONTACT US",
//       items: [
//         { name: "EMAILID@GMAIL.COM", href: "mailto:EMAILID@GMAIL.COM" },
//         { name: "MOB:9999999999", href: "tel:9999999999" },
//         { name: "Indian Institute of Information Technology, Sabour Bhagalpur", href: "#address" },
//         { name: "Additional Contact 1", href: "#additional-contact-1" },
//         { name: "Additional Contact 2", href: "#additional-contact-2" },
//       ],
//     },
//   ];

//   return (
//     <div className="bg-slate-600 text-gray-300 w-full py-8 px-4 md:px-8 lg:px-20">
//       <div className="container mx-auto flex flex-col lg:flex-row lg:justify-between lg:space-x-8">
//         {/* Left section with logo and text */}
//         <div className="flex flex-col items-center lg:items-start text-center lg:text-left mb-8 lg:mb-0">
//           <div className="w-24 h-24 mb-4 md:w-28 md:h-28 lg:w-32 lg:h-32"> {/* Adjusted size of the logo */}
//             <img className="w-full h-full object-contain hover:scale-110 transition-transform duration-300" src="/ebsb.png" alt="Logo" />
//           </div>
//           <div className="space-y-2">
//             <h3 className="text-xl md:text-2xl lg:text-3xl font-bold text-green-300"> {/* Adjusted text size */}
//               Ek Bharat Shreshth Bharat
//             </h3>
//             <h3 className="text-xl md:text-2xl lg:text-3xl font-bold text-white">
//               IIIT Bhagalpur
//             </h3>
//           </div>
//           <div className="mt-6">
//             <h2 className="font-medium font-bold text-black text-lg py-3">
//               Connect with us.
//             </h2>
//             <div className="flex gap-4 justify-center lg:justify-start">
//               {items.map((item, index) =>
//                 item.type === "icon" ? (
//                   <SocialIcon key={index} icon={item.icon} />
//                 ) : null
//               )}
//             </div>
//           </div>
//         </div>

//         {/* Right section with footer content organized in sections */}
//         <div className="flex flex-col lg:flex-row lg:space-x-8 lg:justify-between">
//           {items.map((item, index) =>
//             item.type === "section" ? (
//               <div key={index} className="flex-1 mb-8 lg:mb-0">
//                 <h6 className="font-medium font-bold text-white text-lg mb-3">
//                   {item.title}
//                 </h6>
//                 <ul className="space-y-2">
//                   {item.items.map((subItem, subIndex) => (
//                     <li key={subIndex} className="text-sm text-gray-200 hover:text-white transition-colors duration-300">
//                       <a href={subItem.href} className="hover:underline">
//                         {subItem.name}
//                       </a>
//                     </li>
//                   ))}
//                 </ul>
//               </div>
//             ) : null
//           )}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Footer;
