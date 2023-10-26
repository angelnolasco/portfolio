import React from 'react';
import './Projects.css';

const Projects = () => {
  const projects = [
    {
      title: 'Musician Discovery Tool',
      description: "Built with HTML, CSS & JavaScript (jQuery)",
      deployLink: 'https://angelnolasco.github.io/project-1/',
      repoLink: 'https://github.com/angelnolasco/project-1',
    },
    {
      title: 'FIGHT CLUB',
      description: "Built with EJS, CSS, JavaScript, MongoDB & Mongoose.",
      deployLink: 'https://angel-project-2.herokuapp.com/',
      repoLink: 'https://github.com/angelnolasco/project-2',
    },
    {
      title: 'HIKEHUB',
      description: "Built with HTML, MongoDB, Express.js, React, Node.js & CSS.",
      deployLink: 'https://timely-conkies-6ffe8a.netlify.app/',
      repoLink: 'https://github.com/angelnolasco/project-4-frontend',
    },
    {
      title: 'X-LIBRARY',
      description: "Built with Python-based Django Web Framework in collaboration with a team of talented and dedicated individuals.",
      deployLink: 'https://x-library.herokuapp.com/',  
      repoLink: 'https://github.com/angelnolasco/x-library',
    },
  ];

  return (
    <div className="project-container">
      <h1>Projects</h1>
      {projects.map((project, index) => (
        <div key={index} className="project">
          <h2 className="project-title">{project.title}</h2>
          <p className="project-description">{project.description}</p>
          {project.deployLink && (
            <a href={project.deployLink} className="project-button" target="_blank" rel="noopener noreferrer">
              Deploy
            </a>
          )}
          <a href={project.repoLink} className="project-button" target="_blank" rel="noopener noreferrer">
            Repository
          </a>
        </div>
      ))}
    </div>
  );
};

export default Projects;
