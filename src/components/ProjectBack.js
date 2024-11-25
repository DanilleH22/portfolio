import React from 'react';

const ProjectBack = ({ projectDescription, projectLinks, projectTechnologies, projectRole, handleClick }) => {
  return (
    <div onClick={handleClick}>
      <p>{projectDescription}</p>
      <p>{projectRole}</p>
      <p>{projectTechnologies}</p>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', marginTop: '10px' }}>
        {projectLinks.map((link, index) => (
          <a
            key={index}
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: '#007BFF', textDecoration: 'none', fontSize: '14px' }}
          >
            {link.label}
          </a>
        ))}
      </div>
    </div>
  );
};

export default ProjectBack;
