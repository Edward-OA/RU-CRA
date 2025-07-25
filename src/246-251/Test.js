import { useState } from 'react';

function SlowComponent() {
  // If this is too slow on your maching, reduce the `length`
  const words = Array.from({ length: 10_000 }, () => 'Hello');
  return (
    <ul>
      {words.map((word, i) => (
        <li key={i}>
          {i + 1}: {word}
        </li>
      ))}
    </ul>
  );
}

function Counter({ children }) {
  const [count, setCount] = useState(0);
  return (
    <div>
      <button onClick={() => setCount((c) => c + 1)}>Increase: {count}</button>
      {/* <SlowComponent /> */}
      {children}
    </div>
  );
}
export default function Test() {
  return (
    <div>
      <Counter>
        <h1>Slow counter?!?</h1>
        <SlowComponent />
      </Counter>
    </div>
  );
}
