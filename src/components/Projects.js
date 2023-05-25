import React from 'react';
import './Projects.css';

const Projects = () => {
  const projects = [
    {
      title: 'Musician Discovery Tool',
      description: "Built with HTML, CSS & JavaScript (jQuery)",
      link: 'https://github.com/angelnolasco/project-1'
    },
    {
      title: 'FIGHT CLUB',
      description: "Built with EJS, CSS, JavaScript, MongoDB & Mongoose.",
      link: 'https://github.com/angelnolasco/project-2'
    },
    {
      title: 'HIKEHUB',
      description: "Built with HTML, MongoDB, Express.js, React, Node.js & CSS.",
      link:'https://github.com/angelnolasco/project-4-frontend'
    },
    {
      title: 'X-LIBRARY',
      description: "Built with Python-based & Django Web Framework.",
      link: 'https://github.com/angelnolasco/x-library'
    }
  ];

  return (
    <div className="project-container">
      <h1>Projects</h1>
      {projects.map((project, index) => (
        <div key={index} className="project">
          <h2 className="project-title">{project.title}</h2>
          <p className="project-description">{project.description}</p>
          <a href={project.link} className="project-link" target="_blank" rel="noopener noreferrer">
            {project.link}
          </a>
        </div>
      ))}
    </div>
  );
};

export default Projects;
