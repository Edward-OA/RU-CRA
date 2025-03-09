import { useState } from 'react';

export default function App() {
  return (
    <div className="App">
      <Counter />
    </div>
  );
}
function Counter() {
  const [count, setCount] = useState(0);
  const [step, setStep] = useState(1);

  function handleChange(e) {
    setStep(Number(e.target.value)); //the onchange event listener can be taken
    // care of in 3 ways either this way by declaring the function and  calling it directly
    // 2. it can be don as shown in setCount or method 3
  }
  function handleReset() {
    setCount(0);
    setStep(1);
  }
  // const handlechange2 = (e) => setCount(e.target.value); //method 3
  // onChange={handlechange2} //method 3 === for the input fragment <input/>
  const date = new Date('june 27, 2027');
  date.setDate(date.getDate() + count);

  return (
    <>
      <div>
        <input
          type="range"
          min="0"
          max="10"
          value={step}
          onChange={handleChange}
        />
        {/* <button onClick={() => setStep((s) => s - 1)}>-</button> */}
        <span>Step:{step}</span>
        {/* <button onClick={() => setStep((s) => s + 1)}>+</button> */}
      </div>
      <div>
        <button onClick={() => setCount((c) => c - step)}>-</button>
        {/* <span>count:{count}</span> */}
        <input
          type="text"
          value={count}
          onChange={(e) => setCount(Number(e.target.value))} //method 2
        />
        <button onClick={() => setCount((c) => c + step)}>+</button>
      </div>
      <p>
        <span>
          {count === 0
            ? 'Today is '
            : count > 0
            ? `${count} day from now is `
            : `${Math.abs(count)} days ago was `}
        </span>
        <span>{date.toDateString()}</span>{' '}
      </p>
     {(count !== 0 || step !==1) ? (<div>
        <button onClick={handleReset}>Reset</button>
      </div>): null}
    </>
  );
}
