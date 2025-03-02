import React from 'react';

function GuessInput({ updateGuessList }) {
  const [input, setInput] = React.useState('');

  function checkMinMaxLength(word) {
    if (word.length === 5) {
      // if word if 5 letters, update state
      updateGuessList(word);
      console.log(input);
    } else {
      console.log('Word must have exactly 5 letters!');
      return;
    }
  }

  return (
    <form
      className='guess-input-wrapper'
      onSubmit={(e) => {
        e.preventDefault();
        checkMinMaxLength(input);
        setInput('');
      }}>
      <label htmlFor='guess-input'>Enter Guess</label>
      <input
        id='guess-input'
        type='text'
        value={input}
        onChange={(e) => setInput(e.target.value.toUpperCase())}
      />
    </form>
  );
}

export default GuessInput;
