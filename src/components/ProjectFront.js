import React from 'react';


const ProjectFront = ({ projectName, projectImage, handleClick }) => {
  return (
    <div className="project-front">
      <h3>{projectName}</h3>
      <img src={projectImage} alt={`${projectName} thumbnail`} className="project-image" />
      <p>Click below to learn more</p>
      <button onClick={handleClick} className="flip-button">
        View Details
      </button>
    </div>
  );
};

export default ProjectFront;

