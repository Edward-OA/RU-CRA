import React from 'react';
import ReactDOM from 'react-dom/client';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

function App() {
  return (
    <div>
      <Avatar />
      <Intro />
      <SkillList />
    </div>
  );
}

function Avatar() {
  return (
    <div>
      <img src="./jonas.jpeg" alt="jonas" />
    </div>
  );
}

function Intro() {
  return (
    <div>
      <h1>Jonas Schmedtmann</h1>
      <p>
        Full-stack web developer and teacher at Udemy. When not coding or
        preparing a course, I like tomplay board games, to (cook and eat) or to
        just enjoy the Portuguese sun at the beach
      </p>
    </div>
  );
}

function SkillList() {
  return (
    <div>
      <ul>
        <li>HTML+CSS</li>
        <li>javaSCript </li>
        <li>Web Design</li>
        <li>Git and GitHub</li>
        <li> React </li>
        <li> Svelte</li>
      </ul>
    </div>
  );
}
