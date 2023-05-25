import React from 'react';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import About from './components/About';
import Contact from './components/Contact';
import Project from './components/Projects';
import Testimonials from './components/Testimonials';
import Resume from './components/Resume';
import Home from './components/Home';


const App = () => {
  return (
    <div>
      <Navbar />
      <section id="home">
        <Home />
      </section>
       <section id="about">
        <About />
      </section>
      <section id="projects">
        <Project />
      </section>
      <section id="resume">
        <Resume />
      </section>
      <section id="contact">
        <Contact />
      </section>
      <section id="Testimonials">
        <Testimonials/>
      </section>
    </div>
  );
};

export default App;