import React from 'react';
import styles from '../styles/Projects.module.css';


const ProjectFront = ({ projectName, projectImage, handleClick }) => {
  return (
    <div onClick={handleClick} className={styles.FrontCard}>
      <h3>{projectName}</h3>
      <img src={projectImage} alt={`${projectName} thumbnail`} className={styles.projectPhoto} />
    </div>
  );
};

export default ProjectFront;

