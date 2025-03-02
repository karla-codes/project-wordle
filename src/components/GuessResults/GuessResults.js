import React from 'react';

function GuessResults({ guessList }) {
  return (
    <div className='guess-results'>
      {guessList.map((word) => (
        <p
          className='guess'
          key={Math.random()}>
          {word}
        </p>
      ))}
    </div>
  );
}

export default GuessResults;
