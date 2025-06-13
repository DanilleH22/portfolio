import React from 'react';
import styles from '../styles/Projects.module.css'

const ProjectBack = ({ projectDescription, projectLinks, projectTechnologies, projectRole, handleClick }) => {
  return (
    <div onClick={handleClick} className={styles.BackCard}>
      <p>{projectDescription}</p>
      <p><strong>Role: </strong>{projectRole}</p>
      <p><strong>Technology:</strong> {projectTechnologies}</p>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '5px', marginTop: '10px', backgroundColor: '#88B4E6' }}>
        {projectLinks.map((link, index) => (
          <a
            key={index}
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            style={{ textDecoration: 'none', fontSize: '14px' }}
          >
            {link.label}
          </a>
        ))}
      </div>
    </div>
  );
};

export default ProjectBack;
