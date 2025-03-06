import React from 'react';
import GuessInput from '../GuessInput';
import GuessResults from '../GuessResults';

import { sample } from '../../utils';
import { WORDS } from '../../data';
import { checkGuess } from '../../game-helpers';

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  const [guessList, setGuessList] = React.useState([]);
  const [guessInfo, setGuessInfo] = React.useState([]);

  function updateGuessList(guess) {
    const nextGuessList = [...guessList];
    nextGuessList.push(guess);
    setGuessList(nextGuessList);
    getGuessInfo(nextGuessList);
  }

  // check status of letter
  // and create new array with word info
  function getGuessInfo(guessArr) {
    let guessStatus = guessArr.map((guess) => checkGuess(guess, answer));
    setGuessInfo(guessStatus);
  }

  return (
    <>
      <GuessResults guessInfo={guessInfo} />
      <GuessInput
        guessList={guessList}
        updateGuessList={updateGuessList}
      />
    </>
  );
}

export default Game;
