import React from 'react';
import { NUM_OF_GUESSES_ALLOWED } from '../../constants';

function GuessInput({ guessList, updateGuessList, gameOver }) {
  const [input, setInput] = React.useState('');

  function checkMinMaxLength(word) {
    if (word.length === 5) {
      if (guessList.length >= NUM_OF_GUESSES_ALLOWED) {
        console.log('Max guesses reached');
        return;
      } else {
        updateGuessList(word);
      }
    } else {
      console.log('Word must have exactly 5 letters!');
      return;
    }
  }

  function handleSubmit(e) {
    e.preventDefault();
    checkMinMaxLength(input);
    setInput('');
  }

  return (
    <form
      className='guess-input-wrapper'
      onSubmit={handleSubmit}>
      <label htmlFor='guess-input'>Enter Guess</label>
      <input
        required
        minLength={5}
        maxLength={5}
        pattern='[a-zA-Z]{5}'
        title='Must be a 5 letter word'
        id='guess-input'
        type='text'
        value={input}
        disabled={gameOver ? true : false}
        onChange={(e) => setInput(e.target.value.toUpperCase())}
      />
    </form>
  );
}

export default GuessInput;
