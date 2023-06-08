import React from 'react';
import './Resume.css'; 

const Resume = () => {
  return (
    <div className="resume-container">
      <h1 className="resume-title">Resume</h1>
      <p className="resume-text">Click the button below to veiw my resume:</p>
      <a href="https://docs.google.com/document/d/183VracxWVLWlBCPTd1J1hrOmPzOOwWjR2Vjx1ADjqSw/edit#" className="resume-download" download>
        Veiw Resume
      </a>
    </div>
  );
};

export default Resume;
