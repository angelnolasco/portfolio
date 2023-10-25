import React from 'react';
import './Resume.css'; 

const Resume = () => {
  return (
    <div className="resume-container">
      <h1 className="resume-title">Resume</h1>
      <p className="resume-text">Click the button below to view my resume:</p>
      <a href="https://docs.google.com/document/d/12QlRHZpw_l-mtlq-Vk9wluUIhZG0YYmeI2icHR8tTUQ/edit?usp=sharing" className="resume-download" download>
        View Resume
      </a>
    </div>
  );
};

export default Resume;
