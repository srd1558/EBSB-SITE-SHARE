import React, { useState } from 'react';
import IconButton from '@mui/material/IconButton';

export default function TeamComponent() {
  const [activeClub, setActiveClub] = useState(null); /

  const toggleTeamList = (clubIndex) => {
    setActiveClub(activeClub === clubIndex ? null : clubIndex); 
  };

  const closeTeamList = () => {
    setActiveClub(null); 
  };

  const ClubCard = ({ ClubName, imgSrc, CoordinatorName, instagramLink, linkedinLink, index }) => (
    <div className="relative bg-white p-4 rounded-lg transition-transform transform hover:scale-105 hover:shadow-lg">
      <div className="text-lg font-semibold mb-2">{ClubName}</div>
      <img src={imgSrc} alt={ClubName} className="w-24 h-24 mx-auto mb-4" />
      <div className="text-lg font-semibold mb-2">{CoordinatorName}</div> 
      <div className="flex justify-center space-x-4 my-2">
        <a href={instagramLink} target="_blank" rel="noopener noreferrer">
          <IconButton size="small" color="primary">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
            >
              <path
                fill="currentColor"
                d="M12 6.865A5.135 5.135 0 1 0 17.135 12A5.135 5.135 0 0 0 12 6.865Zm0 8.469A3.334 3.334 0 1 1 15.334 12A3.333 3.333 0 0 1 12 15.334Z"
              />
              <path
                fill="currentColor"
                d="M21.94 7.877a7.333 7.333 0 0 0-.465-2.427a4.918 4.918 0 0 0-1.153-1.772a4.894 4.894 0 0 0-1.77-1.153a7.323 7.323 0 0 0-2.428-.464C15.058 2.012 14.717 2 12.001 2s-3.057.011-4.123.06a7.333 7.333 0 0 0-2.428.465a4.905 4.905 0 0 0-1.77 1.153A4.886 4.886 0 0 0 2.525 5.45a7.333 7.333 0 0 0-.464 2.427c-.05 1.066-.06 1.407-.06 4.123s.01 3.057.06 4.123a7.334 7.334 0 0 0 .464 2.427a4.888 4.888 0 0 0 1.154 1.772a4.917 4.917 0 0 0 1.771 1.153a7.338 7.338 0 0 0 2.428.464C8.944 21.988 9.285 22 12 22s3.057-.011 4.123-.06a7.333 7.333 0 0 0 2.427-.465a5.113 5.113 0 0 0 2.925-2.925a7.316 7.316 0 0 0 .465-2.427c.048-1.067.06-1.407.06-4.123s-.012-3.057-.06-4.123Zm-1.8 8.164a5.549 5.549 0 0 1-.343 1.857a3.311 3.311 0 0 1-1.898 1.898a5.522 5.522 0 0 1-1.857.344c-1.055.048-1.371.058-4.042.058s-2.986-.01-4.04-.058a5.526 5.526 0 0 1-1.857-.344a3.108 3.108 0 0 1-1.15-.748a3.085 3.085 0 0 1-.748-1.15a5.521 5.521 0 0 1-.344-1.857c-.048-1.054-.058-1.37-.058-4.04s.01-2.987.058-4.042a5.563 5.563 0 0 1 .344-1.857a3.107 3.107 0 0 1 .748-1.15a3.082 3.082 0 0 1 1.15-.748A5.523 5.523 0 0 1 7.96 3.86C9.014 3.81 9.331 3.8 12 3.8s2.987.011 4.042.059a5.564 5.564 0 0 1 1.857.344a3.31 3.31 0 0 1 1.898 1.898a5.523 5.523 0 0 1 .344 1.857c.048 1.055.058 1.37.058 4.041s-.01 2.986-.058 4.041ZM17.339 5.462Z"
              />
            </svg>
          </IconButton>
        </a>
        <a href={linkedinLink} target="_blank" rel="noopener noreferrer">
          <IconButton size="small" color="primary">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 50 50">
              <path fill="#0288D1" d="M42,37c0,2.762-2.238,5-5,5H11c-2.761,0-5-2.238-5-5V11c0-2.762,2.239-5,5-5h26c2.762,0,5,2.238,5,5V37z"></path><path fill="#FFF" d="M12 19H17V36H12zM14.485 17h-.028C12.965 17 12 15.888 12 14.499 12 13.08 12.995 12 14.514 12c1.521 0 2.458 1.08 2.486 2.499C17 15.887 16.035 17 14.485 17zM36 36h-5v-9.099c0-2.198-1.225-3.698-3.192-3.698-1.501 0-2.313 1.012-2.707 1.99C24.957 25.543 25 26.511 25 27v9h-5V19h5v2.616C25.721 20.5 26.85 19 29.738 19c3.578 0 6.261 2.25 6.261 7.274L36 36 36 36z"></path>
            </svg>
          </IconButton>
        </a>
      </div>
      <button onClick={() => toggleTeamList(index)} className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600">
        Meet My Team
      </button>
      {activeClub === index && (
        <div className="absolute inset-0 bg-white bg-opacity-90 shadow-lg p-4 rounded-lg border border-gray-200 flex flex-col justify-center items-center">
          <button onClick={closeTeamList} className="absolute top-2 right-2 text-gray-600 text-2xl">
            &times;
          </button>
          <h4 className="font-bold text-xl mb-2">Team Members</h4>
          <ul className="list-disc pl-4">
            <li>Ayush Srivasatva</li>
            <li>Ayush Srivasatva</li>
            <li>Ayush Srivasatva</li>
            <li>Ayush Srivasatva</li>
            <li>Ayush Srivasatva</li>
            <li>Ayush Srivasatva</li>
            <li>Ayush Srivasatva</li>
          </ul>
        </div>
      )}
    </div>
  );

  const clubs = [
    { ClubName: 'Drama', imgSrc: '/drama.jpg', CoordinatorName: 'Ayush Srivasatva', title: 'Drama', instagramLink: '#', linkedinLink: '#' },
    { ClubName: 'Art', imgSrc: 'art.jpeg', CoordinatorName: 'Ayush Srivasatva ', title: 'Art', instagramLink: '#', linkedinLink: '#' },
    { ClubName: 'Cinematography', imgSrc: 'cinematography.jpeg', CoordinatorName: 'Ayush Srivasatva ', title: 'Cinematography', instagramLink: '#', linkedinLink: '#' },
    { ClubName: 'Photography', imgSrc: 'photo.jpeg', CoordinatorName: 'Ayush Srivasatva ', title: 'Photography', instagramLink: '#', linkedinLink: '#' },
    { ClubName: 'Design', imgSrc: 'design.jpg', CoordinatorName: 'Ayush Srivasatva ', title: 'Design', instagramLink: '#', linkedinLink: '#' },
    { ClubName: 'Music', imgSrc: 'music.jpg', CoordinatorName: 'Ayush Srivasatva ', title: 'Music', instagramLink: '#', linkedinLink: '#' },
    { ClubName: 'Literature', imgSrc: 'lit.jpg', CoordinatorName: 'Ayush Srivasatva ', title: 'Literature', instagramLink: '#', linkedinLink: '#' },
    { ClubName: 'Dance', imgSrc: 'dance.jpeg', CoordinatorName: 'Ayush Srivasatva ', title: 'Dance', instagramLink: '#', linkedinLink: '#' },
  ];

  return (
    <div className="bg-white-100">
      <section className="my-8 p-4 flex flex-col items-center">
      <h2 className="text-3xl font-bold mb-8">Lead Squadron</h2>

        <div className="my-4 text-center">
          <img
            src="https://th.bing.com/th/id/OIP.DHGGVf99y_O9QUXAaOrhzQAAAA?rs=1&pid=ImgDetMain"
            alt="Director"
            className="mx-auto h-32 w-32 rounded-full"
          />
          <h3 className="mt-4 text-2xl font-semibold">Director</h3>
          <p className="mx-auto mt-2 w-3/4 text-xl text-left">
            Meet our visionary director, a beacon of innovation guiding our college's journey towards excellence. With a wealth of experience and a passion for education, our Director inspires both faculty and students alike to reach new heights. Leading with integrity, they foster an environment of inclusivity, creativity, and academic rigor. Explore their transformative leadership and discover the heartbeat behind our college's success.
          </p>
        </div>

        <div className="my-4 text-center">
          <img
            src="https://www.iiitbh.ac.in/sites/default/files/inline-images/PKMandal.jpg"
            alt="HOD"
            className="mx-auto h-32 w-32 rounded-full"
          />
          <h3 className="mt-4 text-2xl font-semibold">Faculty Incharge</h3>
          <p className="mx-auto mt-2 w-3/4 text-xl text-left">
            Our Faculty Incharge leads with expertise and passion, shaping our academic landscape with dedication. They inspire excellence and foster growth, guiding both faculty and students towards success. With a steadfast commitment to innovation, they ignite a passion for learning within our community, driving us towards new heights of achievement.
          </p>
        </div>
      </section>
      <section className="my-4 p-4">
        <div className="flex justify-between">
          <div className="w-1/2 p-4 text-center">
            <img
              src="https://i.pinimg.com/originals/ce/ee/4a/ceee4a764b54d4c837894b1ef7f062b0.jpg"
              alt="Secretary Cultural Board"
              className="mx-auto h-32 w-32 rounded-full"
            />
            <h3 className="mt-4 text-2xl font-semibold">Secretary of Cultural Board</h3>
            <p className="mx-auto mt-2 w-3/4 text-left">
              Meet our vibrant General Secretary of the Cultural Board, a dynamic leader fueling creativity and unity within our community. With boundless energy and vision, they orchestrate memorable cultural experiences that celebrate diversity and foster inclusion. Through their leadership, they inspire collaboration, passion, and a shared sense of belonging, enriching the tapestry of our college experience.
            </p>
          </div>
          <div className="w-1/2 p-4 text-center">
            <img
              src="https://i.pinimg.com/originals/ce/ee/4a/ceee4a764b54d4c837894b1ef7f062b0.jpg"
              alt="Secretary EBSB"
              className="mx-auto h-32 w-32 rounded-full"
            />
            <h3 className="mt-4 text-2xl font-semibold">Secretary of EBSB</h3>
            <p className="mx-auto mt-2 w-3/4 text-left">
              Introducing our proactive General Secretary of the EBSB Board, a catalyst for community engagement and social impact. With strategic insight and dedication, they spearhead initiatives that promote inclusivity and social responsibility. Through their leadership, they cultivate a spirit of service, inspiring students to actively contribute to the betterment of society and embody the values of Ek Bharat Shreshtha Bharat.
            </p>
          </div>
        </div>
      </section>
      <section className="my-4 p-4">
        <div className="text-center">
          <div className="font-bold text-5xl">Meet The Team</div>

          <div className="grid grid-cols-1 text-gray-900 md:grid-cols-3 gap-8 text-center p-8">
            {clubs.map((club, index) => (
              <ClubCard
                key={index}
                index={index} 
                ClubName={club.ClubName}
                imgSrc={club.imgSrc}
                CoordinatorName={club.CoordinatorName}
                title={club.title}
                instagramLink={club.instagramLink}
                linkedinLink={club.linkedinLink}
              />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
