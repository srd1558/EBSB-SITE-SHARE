import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBars,
  faTimes,
  faHome,
  faInfoCircle,
  faCalendarAlt,
  faImages,
  faUsers,
  faEnvelope,
} from "@fortawesome/free-solid-svg-icons";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <div className="flex  ">
        <div className="flex flex-wrap justify-center pl-auto pr-auto pt-auto pb-auto content-center">
        <div className=" pl-6 pt-2 pb-2 content-center">
            <img
              className="w-20 h-20"
              justify-center
              src="/ebsb.png"
              alt="Logo"
            />
          </div>
          <div className=" pt-4 pb-2 justify-center">
            <nav className="hidden md:flex">
              <div className="justify-center pl-auto pr-auto pt-auto pb-auto">
                <ul className="px-10 text-center font-semibold p-3 flex uppercase text-lg space-x-10 justify-center ">
              
                  <li className="transition duration-1 border-b-4 border-transparent hover:bg-orange-500 hover:text-orange-100 rounded-lg px-3 py-1 hover:shadow-lg shadow-white-900/50 content-center">
                    <NavLink to="/">Home</NavLink>
                  </li>
                  <li className="transition duration-1 border-b-4 border-transparent rounded-lg px-3 py-1 hover:bg-orange-500 hover:text-orange-100 shadow-orange-900/50 content-center">
                    <NavLink to="/About/About">About</NavLink>
                  </li>
                  {/* <li className="transition duration-1 border-b-4 border-transparent rounded-lg px-3 py-1 hover:shadow-lg shadow-red-900/50 hover:text-blue-900"> */}
                  {/* <NavLink to="/Events">Events</NavLink> */}
                  {/* </li> */}
                  <li className="transition duration-1 border-b-4 border-transparent rounded-lg px-3 py-1 hover:shadow-lg shadow-red-900/50 hover:text-blue-900 content-center">
                    <NavLink to="/Gallery">Gallery</NavLink>
                  </li>
                  <li className="transition duration-1 border-b-4 border-transparent hover:bg-green-600 hover:text-green-100 rounded-lg px-3 py-1 hover:shadow-lg shadow-red-900/50 content-center">
                    <NavLink to="/Team">Team</NavLink>
                  </li>
                  <li className="transition duration-1 border-b-4 border-transparent hover:bg-green-600 hover:text-green-100 rounded-lg px-3 py-1 hover:shadow-lg shadow-red-900/50 content-center">
                    <NavLink to="/Contact">Contact Us</NavLink>
                  </li>
      
                  <li className="flex items-center">
                  {/* <video className="w-20 h-20" controls>
                    <source src="./MaleDrummer.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                  </video> */}
                </li>
                </ul>
              </div>
            </nav>
          </div>
          {/* <div>
                        <img className="w-20 h-20" justify-center src="https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.shutterstock.com%2Fsearch%2Fdandiya-dancer&psig=AOvVaw0NZwqzM0mPge0k4671wsWw&ust=1722519281395000&source=images&cd=vfe&opi=89978449&ved=0CA8QjRxqFwoTCIDC28Sy0YcDFQAAAAAdAAAAABBH" alt="Logo" / >
                        </div> */}
        </div>
        <div className="md:hidden flex items-center justify-between w-full p-4">
          <div className="flex items-center"></div>
          <button onClick={toggleMenu} className="focus:outline-none">
            <FontAwesomeIcon icon={faBars} className="w-8 h-8 " />
          </button>
        </div>
      </div>

         
            <div className={`fixed inset-0 bg-gray-800 bg-opacity-75 z-50 transition-transform transform ${isOpen ? 'translate-x-0' : 'translate-x-full'} md:hidden`}>
                <div className="absolute inset-y-0 left-0 w-64 bg-white p-4">
                    <button onClick={toggleMenu} className="focus:outline-none mb-4 ">
                        <FontAwesomeIcon icon={faTimes} className=" w-8 h-8" />
                    </button>
                    <nav>
                        <ul className="space-y-4">
                            <li className="transition hover:bg-orange-500 hover:text-orange-100 rounded-lg px-3 py-2">
                                <NavLink to="/" className="flex items-center" onClick={toggleMenu}><FontAwesomeIcon icon={faHome} className="mr-2" />Home</NavLink>
                            </li>
                            <li className="transition hover:bg-orange-500 hover:text-orange-100 rounded-lg px-3 py-2">
                                <NavLink to="/about" className="flex items-center" onClick={toggleMenu}><FontAwesomeIcon icon={faInfoCircle} className="mr-2" />About</NavLink>
                            </li>
                            <li className="transition hover:bg-blue-50 hover:text-blue-800  rounded-lg px-3 py-2">
                                <NavLink to="/Events" className="flex items-center" onClick={toggleMenu}><FontAwesomeIcon icon={faCalendarAlt} className="mr-2" />Events</NavLink>
                            </li>
                            <li className="transition hover:bg-blue-50 hover:text-blue-800 rounded-lg px-3 py-2">
                                <NavLink to="/Gallery" className="flex items-center" onClick={toggleMenu}><FontAwesomeIcon icon={faImages} className="mr-2" />Gallery</NavLink>
                            </li>
                            <li className="transition hover:bg-green-500 hover:text-green-100 rounded-lg px-3 py-2">
                                <NavLink to="/Team" className="flex items-center" onClick={toggleMenu}><FontAwesomeIcon icon={faUsers} className="mr-2" />Team</NavLink>
                            </li>
                            <li className="transition  hover:bg-green-500 hover:text-green-100 rounded-lg px-3 py-2">
                                <NavLink to="/Contact" className="flex items-center" onClick={toggleMenu}><FontAwesomeIcon icon={faEnvelope} className="mr-2" />Contact Us</NavLink>
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>
        </>
    );
}
