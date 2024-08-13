import React from 'react';

export default function Intro() {
  return (
    <div className="text-gray-800 pt-5 font-poppins flex flex-col justify-end mr-5 pr-4 ">
      <div className="w-full md:w-1/2 flex flex-col items-start ">
        <div className="flex flex-col items-center">
        <img className="w-40 h-40 mb-4 rounded-full" src="/iiitbh.jpeg" alt="Logo" />
          <h2 className="text-2xl font-bold">Indian Institute of Information Technology Bhagalpur</h2>
          <h1 className="text-5xl font-bold mt-4">
            <span className="text-orange-500">"एक भारत </span>
            <span className="text-blue-300">श्रेष्ठ</span>
            <span className="text-green-800"> भारत"</span>
          </h1>
          <p className="text-lg font-semibold mt-4">
            Join us in celebrating global unity through the Ek Bharat Shreshtha Bharat (EBSB) Initiative. At IIIT Bhagalpur, we embrace diversity and foster connections worldwide.
          </p>
        </div>
      </div>
    </div>
  );
}
