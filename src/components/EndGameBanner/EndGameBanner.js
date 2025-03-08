import React from 'react';

function EndGameBanner({ gameResult, guesses, answer }) {
  let banner;

  if (gameResult === 'happy') {
    banner = (
      <div className={`${gameResult} banner`}>
        <p>
          <strong>Congratulations!</strong> Got it in{' '}
          <strong>{guesses} guesses</strong>
        </p>
      </div>
    );
  } else if (gameResult === 'sad') {
    banner = (
      <div className={`${gameResult} banner`}>
        <p>
          Sorry, the correct answer is <strong>{answer}</strong>.
        </p>
      </div>
    );
  } else {
    banner = '';
  }

  return <>{banner}</>;
}

export default EndGameBanner;
