import React from 'react';
import Guess from '../Guess';

function GuessResults({ guessInfo }) {
  return (
    <div className='guess-results'>
      <Guess guessInfo={guessInfo} />
    </div>
  );
}

export default GuessResults;
