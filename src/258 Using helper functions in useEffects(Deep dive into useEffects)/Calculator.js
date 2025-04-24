import { memo, useEffect, useState } from 'react';
import clickSound from './ClickSound.m4a';

function Calculator({ workouts, allowSound }) {
  const [number, setNumber] = useState(workouts.at(0).numExercises);
  const [sets, setSets] = useState(3);
  const [speed, setSpeed] = useState(90);
  const [durationBreak, setDurationBreak] = useState(5);
  const [duration, setDuration] = useState(0);

  // const duration = (number * sets * speed) / 60 + (sets - 1) * durationBreak;
  useEffect(() => {
    setDuration((number * sets * speed) / 60 + (sets - 1) * durationBreak);
  }, [number, sets, durationBreak, speed]);

  useEffect(() => {
    const playSound = function () {
      if (!allowSound) return;
      const sound = new Audio(clickSound);
      // sound.play();
      document.addEventListener('click', () => sound.play(), { once: true });
    };
    playSound();
  }, [allowSound, duration]);
  //though this is the best use case for the useEffect hook it
  //causes the calculator to render twice is there is a state update
  // once when the state is updated and second when the effect runs
  // since it doesn't run on mount but when the state is updatted
  //
  //
  const mins = Math.floor(duration);
  const seconds = (duration - mins) * 60;

  function handleInc() {
    setDuration((duration) => Math.floor(duration + 1)); //math.floor so we can take care of
    // half minutes such as 50:30 round down forst with math.floor
  }
  function handleDec() {
    setDuration((duration) => (duration > 0 ? Math.ceil(duration - 1) : 0)); //math.floor so we can take care of
    // half minutes such as 50:30 round down forst with math.floor
  }

  return (
    <>
      <form>
        <div>
          <label>Type of workout</label>
          <select value={number} onChange={(e) => setNumber(+e.target.value)}>
            {workouts.map((workout) => (
              <option value={workout.numExercises} key={workout.name}>
                {workout.name} ({workout.numExercises} exercises)
              </option>
            ))}
          </select>
        </div>
        <div>
          <label>How many sets?</label>
          <input
            type="range"
            min="1"
            max="5"
            value={sets}
            onChange={(e) => {
              setSets(e.target.value);
              // onChange={(e) => {
              //   setSets(e.target.value);
              //   playSound();
            }}
          />
          <span>{sets}</span>
        </div>
        <div>
          <label>How fast are you?</label>
          <input
            type="range"
            min="30"
            max="180"
            step="30"
            value={speed}
            onChange={(e) => setSpeed(e.target.value)}
          />
          <span>{speed} sec/exercise</span>
        </div>
        <div>
          <label>Break length</label>
          <input
            type="range"
            min="1"
            max="10"
            value={durationBreak}
            onChange={(e) => setDurationBreak(e.target.value)}
          />
          <span>{durationBreak} minutes/break</span>
        </div>
      </form>
      <section>
        <button onClick={handleDec}>–</button>
        <p>
          {mins < 10 && '0'}
          {mins}:{seconds < 10 && '0'}
          {seconds}
        </p>
        <button onClick={handleInc}>+</button>
      </section>
    </>
  );
}

export default memo(Calculator);
