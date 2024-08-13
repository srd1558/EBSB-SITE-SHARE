
import React, { useEffect, useState } from 'react';
import './styles.css'; // Ensure this file contains the necessary CSS

export default function Clubs() {
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const clubSection = document.getElementById('club-section');
      const rect = clubSection.getBoundingClientRect();
      if (rect.top < window.innerHeight && rect.bottom >= 0) {
        setAnimate(true);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div id="club-section" className="text-center relative pr-10 pl-10">
      <div className="font-bold text-5xl">
        <span className={`inline-block ${animate ? 'animate-clubs' : ''}`}>
          <div>
            <div className="patterns">
              <svg width="150%" height="80%">
                <defs>
                  <style>
                    @import url('https://fonts.googleapis.com/css?family=Lora:400,400i,700,700i');
                  </style>
                </defs>
                <text x="50%" y="100%" text-anchor="middle">
                  CLUBS
                </text>
              </svg>
            </div>
          </div>
        </span>
        <span className={`inline-block ${animate ? 'animate-handJoin' : ''}`}>
          <img src="/cb2.png" className="ml-12 inline-block h-20 align-middle -mt-6" alt="Club Image" />
        </span>

      </div>

      <div className="pt-6 -pb-1 text-lg text-gray-900 font-semibold">
        <div className="outPop">
          <div className={`popUpWord ${animate ? 'animate' : ''}`} data-text="Where passions meet and friendships thrive">
            Where passions meet and friendships thrive
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 text-gray-900 gap-12 text-center p-8">
        <div className="club-card">
          <div className="relative w-24 h-24 mx-auto mb-4 rounded-full shadow-bottom">
            <div className="club-card-bg"></div>
            <img src="/dr3.jpg" alt="Drama" className="w-full h-full rounded-full" />
          </div>
          <div className="text-lg font-semibold mb-2 club-name">
            <div className="container">
              <div className="row">
                <div className="col-md-12 text-16 text-center">
                  <h3 className="animate-charcter">DRAMA</h3>
                </div>
              </div>
            </div>
          </div>
          <div>Renewable energy, from sun and wind, fights climate change and spurs economic growth</div>
        </div>

        <div className="club-card">
          <div className="relative w-24 h-24 mx-auto mb-4 rounded-full shadow-bottom">
            <div className="club-card-bg"></div>
            <img src="/art.jpeg" alt="Art" className="w-full h-full rounded-full" />
          </div>
          <div className="text-lg font-semibold mb-2 club-name">
            <div className="container">
              <div className="row">
                <div className="col-md-12 text-center">
                  <h3 className="animate-charcter">ART</h3>
                </div>
              </div>
            </div>
          </div>
          <div>Renewable energy, from sun and wind, fights climate change and spurs economic growth</div>
        </div>

        <div className="club-card">
          <div className="relative w-24 h-24 mx-auto mb-4 rounded-full shadow-bottom">
            <div className="club-card-bg"></div>
            <img src="/m2.jpg" alt="Cinematography" className="w-full h-full rounded-full" />
          </div>
          <div className="text-lg font-semibold mb-2 club-name">
            <div className="container">
              <div className="row">
                <div className="col-md-12 text-center">
                  <h3 className="animate-charcter">Cinematography</h3>
                </div>
              </div>
            </div>
          </div>
          <div>Renewable energy, from sun and wind, fights climate change and spurs economic growth</div>
        </div>

        <div className="club-card">
          <div className="relative w-24 h-24 mx-auto mb-4 rounded-full shadow-bottom">
            <div className="club-card-bg"></div>
            <img src="/c.jpg" alt="Photography" className="w-full h-full rounded-full" />
          </div>
          <div className="text-lg font-semibold mb-2 club-name">
            <div className="container">
              <div className="row">
                <div className="col-md-12 text-center">
                  <h3 className="animate-charcter">Photography</h3>
                </div>
              </div>
            </div>
          </div>
          <div>Renewable energy, from sun and wind, fights climate change and spurs economic growth</div>
        </div>

        <div className="club-card">
          <div className="relative w-24 h-24 mx-auto mb-4 rounded-full shadow-bottom">
            <div className="club-card-bg"></div>
            <img src="/des5.jpg" alt="Design" className="w-full h-full rounded-full" />
          </div>
          <div className="text-lg font-semibold mb-2 club-name">
            <div className="container">
              <div className="row">
                <div className="col-md-12 text-center">
                  <h3 className="animate-charcter">Design</h3>
                </div>
              </div>
            </div>
          </div>
          <div>Renewable energy, from sun and wind, fights climate change and spurs economic growth</div>
        </div>

        <div className="club-card">
          <div className="relative w-24 h-24 mx-auto mb-4 rounded-full shadow-bottom">
            <div className="club-card-bg"></div>
            <img src="/s.jpg" alt="Music" className="w-full h-full rounded-full" />
          </div>
          <div className="text-lg font-semibold mb-2 club-name">
            <div className="container">
              <div className="row">
                <div className="col-md-12 text-center">
                  <h3 className="animate-charcter">MUSIC</h3>
                </div>
              </div>
            </div>
          </div>
          <div>Renewable energy, from sun and wind, fights climate change and spurs economic growth</div>
        </div>

        <div className="mx-56 col-span-1 md:col-span-3 flex justify-center gap-12">
          <div className="club-card">
            <div className="relative w-24 h-24 mx-auto mb-4 rounded-full shadow-bottom">
              <div className="club-card-bg"></div>
              <img src="/lit2.jpg" alt="Literature" className="w-full h-full rounded-full" />
            </div>
            <div className="text-lg font-semibold mb-2 club-name">
              <div className="container">
                <div className="row">
                  <div className="col-md-12 text-center">
                    <h3 className="animate-charcter">Literature</h3>
                  </div>
                </div>
              </div>
            </div>
            <div>Renewable energy, from sun and wind, fights climate change and spurs economic growth</div>
          </div>

          <div className="club-card">
            <div className="mx-56 relative w-24 h-24 mx-auto mb-4 rounded-full shadow-bottom">
              <div className="club-card-bg"></div>
              <img src="/d33.jpg" alt="Dance" className="w-full h-full rounded-full" />
            </div>
            <div className="text-lg font-semibold mb-2 club-name">
              <div className="container">
                <div className="row">
                  <div className="col-md-12 text-center">
                    <h3 className="animate-charcter">Dance</h3>
                  </div>
                </div>
              </div>
            </div>
            <div>Renewable energy, from sun and wind, fights climate change and spurs economic growth</div>
          </div>
        </div>
      </div>
    </div>
  );
}
