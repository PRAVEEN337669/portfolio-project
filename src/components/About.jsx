 import React from 'react';
import './About.css';
import myphoto from '../assets/my.jpeg'; 

const About = () => {
  return (
    <section className="about-section" id="about">
      <div className="about-container">
               <div className="about-image">
          <div className="about-img-card">
            <img src={myphoto} alt="Praveen About" />
            <div className="experience-badge">
              <span>Fresh</span>
              <p>Graduate</p>
            </div>
          </div>
        </div>

       
        <div className="about-content">
          <span className="section-subtitle">My Biography</span>
          <h2 className="section-title">Who is <span className="highlight">Praveen?</span></h2>
          <p className="about-text">
            I am a <b>BBA Graduate</b> who found a passion for technology. Currently, I am evolving into a 
            <b> Full Stack Developer</b>. I love creating visually stunning web interfaces and 
            solving complex problems with modern technologies.
          </p>
          
          <div className="about-info-grid">
            <div className="info-item">
              <strong>Name:</strong> <span>Praveen</span>
            </div>
            <div className="info-item">
              <strong>Education:</strong> <span>BBA Graduate</span>
            </div>
            <div className="info-item">
              <strong>Location:</strong> <span>Nagapattinam, India</span>
            </div>
            <div className="info-item">
              <strong>Interest:</strong> <span>UI/UX & Web Dev</span>
            </div>
          </div>

          <a href="#contact" className="btn-main">Contact Me</a>
        </div>
      </div>
    </section>
  );
};

export default About;