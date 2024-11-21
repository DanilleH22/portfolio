import React from 'react';

const ProjectBack = ({ projectDescription, projectLinks, projectTechnologies, projectRole, handleClick }) => {
  return (
    <div className="project-back">
      <p>{projectDescription}</p>
      <p>{projectRole}</p>
      <p>{projectTechnologies}</p>
      <div className="project-links">
        {projectLinks.map((link, index) => (
          <a
            key={index}
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            className="project-link"
          >
            {link.label}
          </a>
        ))}
      </div>
      <button onClick={handleClick} className="flip-button">
        Back to Front
      </button>
    </div>
  );
};

export default ProjectBack;
