 import React from 'react';
import './Skills.css';

const Skills = () => {
  const skillsData = [
    { name: "HTML/CSS", level: "90%" },
    { name: "JavaScript", level: "85%" },
    { name: "React JS", level: "80%" },
    { name: "MongoDB", level: "75%" },
    { name: "UI/UX Design", level: "85%" }
  ];

  return (
    <section id="skills" className="skills-section">
      <div className="container">
        <div className="section-title">
          <span className="subtitle">My Talents</span>
          <h2>Professional <span className="blue-text">Skills</span></h2>
        </div>

        <div className="skills-grid">
          {skillsData.map((skill, index) => (
            <div key={index} className="skill-item">
              <div className="skill-info">
                <span>{skill.name}</span>
                <span>{skill.level}</span>
              </div>
              <div className="skill-bar">
                <div className="skill-progress" style={{ width: skill.level }}></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;