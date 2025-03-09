import { useEffect } from 'react';

function Timer({ dispatch, timeLeft }) {
  const mins = Math.floor(timeLeft / 60);
  const seconds = timeLeft % 60;
  useEffect(
    function () {
      const id = setInterval(function () {
        dispatch({ type: 'tick' });
      }, 1000);
      return () => clearInterval(id);
    },
    [dispatch]
  );
  return (
    <div className="timer">
      {mins < 10 && '0'}
      {mins}:{seconds}
      {seconds < 10 && '0'}
    </div>
  );
}

export default Timer;
