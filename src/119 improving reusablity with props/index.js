import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
// import './style.css';
// import App from './App';
import StarRating from './115 Building a Reusable Star Rating Component/StarRating';

function Test() {
  const [starNumRating, setStarNumRating] = useState(0);
  return (
    <div>
      <StarRating color="blue" size={48} onSetRating={setStarNumRating}/>
      <p>This movie was rated {starNumRating} stars</p>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <App /> */}
    <StarRating
      maxRating={5}
      messages={['Terrible', 'Bad', 'Okay', 'Good', 'Amazing']}
      defaultRating={0}
    />
    <StarRating
      maxRating={5}
      color="red"
      size={48}
      className="test"
      messages={['Terrible', 'Bad', 'Okay', 'Good', 'Amazing']}
    />
    <Test />
  </React.StrictMode>
);
