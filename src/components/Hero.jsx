 import React from 'react';
import './Hero.css';
import myphoto from '../assets/my.jpeg'; 

const Hero = () => {
  return (
    <section id="hero" className="hero-section">
      <div className="container hero-container">
        
        <div className="hero-content">
          <span className="welcome-tag">I AM DEVELOPER</span>
          <h1>Creative <span className="blue-text">Design</span> and Web</h1>
          <p className="hero-description">
            Hi, I'm <strong>Praveen</strong>, a passionate Full Stack Developer with a background in 
            Business Administration (BBA). I specialize in crafting user-friendly 
            applications using HTML, CSS, JavaScript, React.js, and MongoDB.
          </p>
          <div className="hero-btns">
            <a href="/M.PRAVEEN.my-resume.pdf" download className="btn-main">Download My CV</a>
          </div>
        </div>

        <div className="hero-image-wrapper">
          <div className="bg-shape-circle"></div>
          <img src={myphoto} alt="Praveen Portfolio" className="hero-profile-img" />
        </div>

      </div> 
     </section>
  );
};

export default Hero;
