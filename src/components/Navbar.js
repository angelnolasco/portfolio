import React from 'react';
import './Navbar.css'; 

const Navbar = () => {
  return (
    <div className="navbar">
      <a href="#home">
      <span className="home-icon" role="img" aria-label="Home">&#8962;</span>Home
      </a>
      <a href="#about">About</a>
      <a href="#projects">Projects</a>
      <a href='#resume'>Resume</a>
      <a href="#contact">Contact</a>
    </div>
  );
};


export default Navbar;
