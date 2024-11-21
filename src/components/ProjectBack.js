import React from 'react';

const ProjectBack = ({ projectDescription, projectLinks, projectTechnologies, projectRole, handleClick }) => {
  return (
    <div onClick={handleClick}>
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
    </div>
  );
};

export default ProjectBack;
