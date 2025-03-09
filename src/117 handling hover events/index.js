import React from 'react';
import ReactDOM from 'react-dom/client';
// import './style.css';
// import App from './App';
import StarRating from './115 Building a Reusable Star Rating Component/StarRating';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <App /> */}
    <StarRating maxRating={5}/>
   
  </React.StrictMode>
);
