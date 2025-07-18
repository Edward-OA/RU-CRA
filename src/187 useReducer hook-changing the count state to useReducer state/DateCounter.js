import { useReducer, useState } from 'react';
//
//

function reducer(state, action) {
  console.log(state, action);
  // return state + action;
  // if (action.type === 'inc') return state + action.payload;
  // if (action.type === 'dec') return state - action.payload;
  // if (action.type === 'setCount') return action.payload;
  //
  //in this first case there is no need for a payload cos its just to increase and decrease
  //
  if (action.type === 'inc') return state + 1;
  if (action.type === 'dec') return state - 1;
  if (action.type === 'setCount') return action.payload;
}
//reducer function takes as arguements the 'current state' which is 0 and an 'action' which (1) in the dispatch
//dispatch() becomes the action in the reducer
//

function DateCounter() {
  // const [count, setCount] = useState(0);
  const [count, dispatch] = useReducer(reducer, 0); //The dispatch is also used to update
  // the state but it works in a different way
  //
  const [step, setStep] = useState(1);

  // This mutates the date object.
  const date = new Date();
  date.setDate(date.getDate() + count);

  const dec = function () {
    // dispatch({ type: 'dec', payload: -1 });
    //
    dispatch({ type: 'dec' });
    //
    // setCount((count) => count - 1);
    //
    // setCount((count) => count - step);
  };

  const inc = function () {
    // dispatch({ type: 'inc', payload: +1 });
    //
    dispatch({ type: 'inc' });
    //
    // setCount((count) => count + 1);
    //
    // setCount((count) => count + step);
  };

  const defineCount = function (e) {
    dispatch({ type: 'setCount', payload: Number(e.target.value) });
    // setCount(Number(e.target.value));
  };

  const defineStep = function (e) {
    setStep(Number(e.target.value));
  };

  const reset = function () {
    // setCount(0);
    setStep(1);
  };

  return (
    <div className="counter">
      <div>
        <input
          type="range"
          min="0"
          max="10"
          value={step}
          onChange={defineStep}
        />
        <span>{step}</span>
      </div>

      <div>
        <button onClick={dec}>-</button>
        <input value={count} onChange={defineCount} />
        <button onClick={inc}>+</button>
      </div>

      <p>{date.toDateString()}</p>

      <div>
        <button onClick={reset}>Reset</button>
      </div>
    </div>
  );
}
export default DateCounter;
