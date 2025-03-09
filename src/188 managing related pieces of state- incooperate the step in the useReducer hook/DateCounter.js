import { useReducer } from 'react';
//
const initialState = { count: 0, step: 1 };
//
function reducer(state, action) {
  console.log(state, action);

  switch (action.type) {
    case 'dec':
      return { ...state, count: state.count - state.step };
    case 'inc':
      return { ...state, count: state.count + state.step };
    case 'setCount':
      return { ...state, count: action.payload };
    case 'setStep':
      return { ...state, step: action.payload };
    case 'reset':
      // return { count: 0, step: 1 }; //can be used if the "initialstste" was not in the root location
      return initialState;
    default:
      throw new Error('Unknown action');
  }
  //
  // if (action.type === 'inc') return state + 1;
  // if (action.type === 'dec') return state - 1;
  // if (action.type === 'setCount') return action.payload;
}

function DateCounter() {
  //usually the use reducer is used for ststes with objects not
  // with a single value as those are easier to manage
  //
  //const [count,setCount]=useState(0)
  // const [step, setStep] = useState(1);
  const initialState = { count: 0, step: 1 };
  const [state, dispatch] = useReducer(reducer, initialState);

  const { count, step } = state;

  const date = new Date();
  date.setDate(date.getDate() + count);

  const dec = function () {
    dispatch({ type: 'dec' });
  };

  const inc = function () {
    dispatch({ type: 'inc' });
  };

  const defineCount = function (e) {
    dispatch({ type: 'setCount', payload: Number(e.target.value) });
  };

  const defineStep = function (e) {
    dispatch({ type: 'setStep', payload: Number(e.target.value) });
  };

  const reset = function () {
    dispatch({ type: 'reset' });
    // setStep(1);
    // setCount(0)
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
