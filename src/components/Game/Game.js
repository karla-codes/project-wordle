import React from 'react';
import GuessInput from '../GuessInput';
import GuessResults from '../GuessResults';
import EndGameBanner from '../EndGameBanner';

import { sample } from '../../utils';
import { WORDS } from '../../data';
import { checkGuess } from '../../game-helpers';
import { NUM_OF_GUESSES_ALLOWED } from '../../constants';

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  const [guessList, setGuessList] = React.useState([]);
  const [guessInfo, setGuessInfo] = React.useState([]);
  const [gameResult, setGameResult] = React.useState('');
  const [gameOver, setGameOver] = React.useState(false);

  function updateGuessList(guess) {
    const nextGuessList = [...guessList];
    nextGuessList.push(guess);
    setGuessList(nextGuessList);
    getGuessInfo(nextGuessList);
    checkGameStatus(nextGuessList);
  }

  // check status of letter
  // and create new array with word info
  function getGuessInfo(guessArr) {
    let guessStatus = guessArr.map((guess) => checkGuess(guess, answer));
    setGuessInfo(guessStatus);
  }

  // checks if game is over and returns corresponding class names
  // for endgame banner
  function checkGameStatus(currentGuesses) {
    let totalGuesses = currentGuesses.length;

    // check for correct answer and update gameResult
    if (totalGuesses <= NUM_OF_GUESSES_ALLOWED) {
      currentGuesses.forEach((guess, i) => {
        if (guess === answer) {
          setGameResult('happy');
          setGameOver(true);
        } else {
          if (i === NUM_OF_GUESSES_ALLOWED - 1) {
            setGameResult('sad');
            setGameOver(true);
          }
        }
      });
    }
  }

  return (
    <>
      <GuessResults guessInfo={guessInfo} />
      <GuessInput
        guessList={guessList}
        updateGuessList={updateGuessList}
        gameOver={gameOver}
      />
      <EndGameBanner
        gameResult={gameResult}
        guesses={guessList.length}
        answer={answer}
      />
    </>
  );
}

export default Game;
