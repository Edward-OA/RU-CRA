import { useState } from 'react';

const messages = [
  'Learn React ⚛️',
  'Apply for jobs 💼',
  'Invest your new income 🤑',
];

export default function App() {
  const [step, setStep] = useState(1);
  // const [test] = useState({ name: 'Amobi' }); //bad practice
  const [test, setTest] = useState({ name: 'Amobi' });
  // fixed step number static (unlike useState)
  // const step = 1;
  function handlePrevious() {
    // alert('previous');
    if (step > 1) setStep(step - 1);
  }
  function handleNext() {
    // alert('next');
    if (step < 3) setStep(step + 1);
    // forcing state manually
    // step = step +1;
    // Mutating objects (bad practice)
    test.name='Fred';
        // Mutating objects (good practice)
        setTest({name: 'Fred'})
  }
  return (
    <div className="steps">
      <div className="numbers">
        <div className={step >= 1 ? 'active' : ''}>1</div>
        <div className={step >= 2 ? 'active' : ''}>2</div>
        <div className={step >= 3 ? 'active' : ''}>3</div>
      </div>
      <p className="message">
        Step {step}: {messages[step - 1]}
        {test.name}
      </p>
      <div className="buttons">
        <button
          style={{ backgroundColor: '#7950f2', color: '#fff' }}
          onClick={handlePrevious}
          // onMouseEnter={()=>alert('previous')}
          // onMouseEnter={function(){
          //   alert('previous')
          // }}
        >
          Previous
        </button>
        <button
          style={{ backgroundColor: '#7950f2', color: '#fff' }}
          onClick={handleNext}
        >
          Next
        </button>
      </div>
    </div>
  );
}
