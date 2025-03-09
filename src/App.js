import React from 'react';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Projects from './pages/Projects';
import Skills from './pages/Skills';
import Footer from './components/Footer';
import Experience from './pages/Experience';
import "./index.css"

const App = () => {
  return (
    <>
      <Navbar />
      
      <div id="home">
        <Home />
      </div>
      <div id="projects">
        <Projects />
      </div>
      <div id="experience">
        <Experience />
      </div>
      <div id="skills">
        <Skills />
      </div>
      
      <Footer />
    </>
  );
};

export default App;
