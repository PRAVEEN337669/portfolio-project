import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero'; 
import Services from './components/Services'; 
import Skills from './components/skills';
import Projects from "./components/projects";
import About from './components/About';
import Contact from './components/Contact';
 
function App() {
  return (
    <div className="App">
      <Navbar/>
       <Hero />
      <Services />
      <Skills/>
      <Projects/>
       <About/>
        <Contact/>
      <footer style={{ textAlign: 'center', padding: '20px', color: '#888' }}>
        © 2026 Praveen | Portfolio
      </footer>
    </div>
  );
}

export default App;