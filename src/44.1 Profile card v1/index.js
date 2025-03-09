import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

function App() {
  return (
    <div className="card">
      <Avatar />
      <div className="data">
        <Intro />
        <SkillList />
      </div>
    </div>
  );
}

function Avatar() {
  return (
    <div>
      <img className="avatar" src="./jonas.jpeg" alt="jonas" />
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
    <div className="skill-list">
      <Skill skill="React" emoji="👌" color="red" />
      <Skill skill="HTML+CSS" emoji="👌" color="blue" />
      <Skill skill="javaSCript" emoji="👌" color="maroon" />
      <Skill skill="Web Design" emoji="👌" color="orange" />
      <Skill skill="Git and GitHub" emoji="👌" color="purple" />
      <Skill skill="Svelte" emoji="👌" color="orangered" />
    </div>
  );
}

function Skill(props) {
  return (
    <div className="skill" style={{ backgroundColor: props.color }}>
      <span>{props.skill}</span>
      <span>{props.emoji}</span>
    </div>
  );
}
