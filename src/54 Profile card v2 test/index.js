import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

const skills = [
  {
    skill: 'HTML+CSS',
    level: 'advanced',
    color: '#2662EA',
  },
  {
    skill: 'JavaScript',
    level: 'advanced',
    color: '#EFD81D',
  },
  {
    skill: 'Web Design',
    level: 'advanced',
    color: '#C3DCAF',
  },
  {
    skill: 'Git and GitHub',
    level: 'intermediate',
    color: '#E84F33',
  },
  {
    skill: 'React',
    level: 'advanced',
    color: '#60DAFB',
  },
  {
    skill: 'Svelte',
    level: 'beginner',
    color: '#FF3B00',
  },
];
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
      {skills.map((skill) => (
        <Skill skillObj={skill} />
      ))}

      {/* <Skill skill="React" emoji="👌" color="red" />
      <Skill skill="HTML+CSS" emoji="👌" color="blue" />
      <Skill skill="javaSCript" emoji="👌" color="maroon" />
      <Skill skill="Web Design" emoji="👌" color="orange" />
      <Skill skill="Git and GitHub" emoji="👌" color="purple" />
      <Skill skill="Svelte" emoji="👌" color="orangered" /> */}
    </div>
  );
}

function Skill({ skillObj }) {
  return (
    // <li >
    <div className="skill" style={{ backgroundColor: skillObj.color }}>
      <span>{skillObj.skill}</span>
      <span>{skillObj.level === 'advanced' ? <span>💪</span> : <span></span>}
      {skillObj.level === 'intermediate' ? <span>👍</span> : <span></span>}
      {skillObj.level === 'beginner' ? <span>👶</span> : <span></span>}</span>
    </div>
    // </li>
  );
}
