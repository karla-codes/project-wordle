import React from 'react';
import { range } from '../../utils';
import { NUM_OF_GUESSES_ALLOWED } from '../../constants';

function Guess({ guessInfo }) {
  function displayGuessList() {
    let grid = guessInfo.map((guess) => {
      return (
        <p
          className='guess'
          key={Math.random()}>
          {guess.map((item) => (
            <span
              className={`cell ${item.status}`}
              key={Math.random()}>
              {item.letter}
            </span>
          ))}
        </p>
      );
    });

    if (grid.length < NUM_OF_GUESSES_ALLOWED) {
      let remainingGuesses = NUM_OF_GUESSES_ALLOWED - grid.length;
      let rowsNeeded = range(0, remainingGuesses).map(() => (
        <p
          className='guess'
          key={Math.random()}>
          {range(0, 5).map(() => (
            <span
              className='cell'
              key={Math.random()}></span>
          ))}
        </p>
      ));

      grid.push(rowsNeeded);
    }

    return grid;
  }

  return <div className='guess-results'>{displayGuessList()}</div>;
}

export default Guess;
