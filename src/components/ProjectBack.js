// ProjectBack.jsx - Updated version
import React from 'react';
// import { FaGithub, FaExternalLinkAlt, FaClock, FaChartLine, FaExclamationTriangle } from 'react-icons';
import { Github, Alt, Clock, Arrows, Exclamation } from 'react-bootstrap-icons';
import styles from '../styles/Projects.module.css';

const ProjectBack = ({ 
  projectDescription, 
  projectTechnologies, 
  projectLinks, 
  projectRole,
  projectTimeline,
  projectResults,
  projectProblem 
}) => {
  return (
    <div className={styles.BackCard}>
      <div className={styles.backContent}>
        {/* Client Problem - NEW */}
        {projectProblem && (
          <div className={styles.problemSection}>
            <Exclamation className={styles.problemIcon} />
            <strong>Client Challenge:</strong>
            <p>{projectProblem}</p>
          </div>
        )}

        {/* Description */}
        <div className={styles.descriptionSection}>
          <strong>Solution:</strong>
          <p>{projectDescription}</p>
        </div>

        {/* Results - NEW */}
        {projectResults && (
          <div className={styles.resultsSection}>
            <Arrows className={styles.resultsIcon} />
            <strong>Results Delivered:</strong>
            <p>{projectResults}</p>
          </div>
        )}

        {/* Timeline - NEW */}
        {projectTimeline && (
          <div className={styles.timelineSection}>
            <Clock className={styles.timelineIcon} />
            <strong>Timeline:</strong>
            <span> {projectTimeline}</span>
          </div>
        )}

        {/* Role */}
        <div className={styles.roleSection}>
          <strong>My Role:</strong>
          <p>{projectRole}</p>
        </div>

        {/* Technologies */}
        <div className={styles.techSection}>
          <strong>Tech Stack:</strong>
          <div className={styles.techTags}>
            {projectTechnologies.split(',').map((tech, i) => (
              <span key={i} className={styles.techTag}>{tech.trim()}</span>
            ))}
          </div>
        </div>

        {/* Links */}
        <div className={styles.linksSection}>
          {projectLinks.map((link, linkIndex) => (
            <a 
              key={linkIndex} 
              href={link.url} 
              target="_blank" 
              rel="noopener noreferrer"
              className={styles.projectLink}
            >
              {link.label === 'GitHub' ? <Github /> : <Alt />}
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectBack;