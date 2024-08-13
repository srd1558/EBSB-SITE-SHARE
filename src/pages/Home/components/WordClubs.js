// WordClubs.js
import React from 'react';
import './WordClubs.css';

const WordClubs = () => {
  const text = 'DRAMA';
  const letters = text.split('');

  return (
    <div className="animated-text-container">
      <p className="animated-text">
        {letters.map((letter, index) => (
          <span key={index} className="letter" data-letter={letter}>
            {letter}
          </span>
        ))}
      </p>
      <p className="sky-blue-club">
        {text}
      </p>
    </div>
  );
};

export default WordClubs;
