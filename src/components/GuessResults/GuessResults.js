import React from 'react';
import Guess from '../Guess/Guess';

function GuessResults({ guessList }) {
  return <Guess guessList={guessList} />;
}

export default GuessResults;
