import React from 'react';


const ProjectFront = ({ projectName, projectImage, handleClick }) => {
  return (
    <div onClick={handleClick}>
      <h3>{projectName}</h3>
      <img src={projectImage} alt={`${projectName} thumbnail`} className={styles.projectPhoto} />
    </div>
  );
};

export default ProjectFront;

