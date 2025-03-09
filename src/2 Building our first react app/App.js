// import { useState } from 'react';

// export default function App() {
//   const [advice, setAdvice] = useState('');
//   const [count, setCount] = useState(0);

//   async function getAdvice() {
//     const res = await fetch('https://api.adviceslip.com/advice');
//     const data = await res.json();
//     setAdvice(data.slip.advice);
//     setCount(function (c) {
//       return c + 1;
//     });
//   }
//   return (
//     <div>
//       <h1>{advice}</h1>
//       <button onClick={getAdvice}>Get advice</button>
//       <p>
//         You have read <strong>{count}</strong> pieces of advice
//       </p>
//     </div>
//   );
// }

import { useState, useEffect } from 'react';

export default function App() {
  const [advice, setAdvice] = useState('');
  const [count, setCount] = useState(0);

  async function getAdvice() {
    const res = await fetch('https://api.adviceslip.com/advice');
    const data = await res.json();
    setAdvice(data.slip.advice);
    setCount(function (c) {
      return c + 1;
    });
  }

  useEffect(() => {
    getAdvice();
  }, []);

  return (
    <div>
      <h1>{advice}</h1>
      <button onClick={getAdvice}>Get advice</button>
      <Message count={count} />
    </div>
  );
}

function Message(props) {
  return (
    <p>
      You have read <strong>{props.count}</strong> pieces of advice
    </p>
  );
}
