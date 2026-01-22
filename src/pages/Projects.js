import React, { useState } from 'react';
import ReactCardFlip from 'react-card-flip';
import ProjectFront from '../components/ProjectFront';
import ProjectBack from '../components/ProjectBack';
import Proj1 from '../assets/project1.png';
import Proj2 from '../assets/project2.png';
import Proj3 from '../assets/project3.png';
import Proj4 from '../assets/project4.png';
import Proj5 from '../assets/project5.png';
import Proj6 from '../assets/project6.png';
import Proj7 from '../assets/project7.png';
import styles from '../styles/Projects.module.css';
import {Container } from 'react-bootstrap';
import ScrollAnimation from '../components/ScrollAnimation';
import { motion } from 'framer-motion';

const Projects = () => {
  const [flippedIndex, setFlippedIndex] = useState(null);

  const handleClick = (index) => {
    setFlippedIndex((prevIndex) => (prevIndex === index ? null : index));
  };
 const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6 }
    }
  };

  const projects = [
     {
      name: 'LA4K Portfolio Website',
      image: Proj6,
      description: 'Programmed a website that showcases a portfolio of images and videos taken by a client',
      technologies: 'React, HTML, CSS',
      role: 'Front End Developer',
      links: [
        { label: 'GitHub', url: 'https://github.com/DanilleH22/LA4K' },
        { label: 'Live Demo', url: 'https://la4k.co.uk' },
      ],
    },
    {
      name: 'Solayulm',
      image: Proj7,
      description: 'Programmed a website that is based on showing people how they can live life sustainably',
      technologies: 'HTML, React CSS',
      role: 'Full Stack Developer',
      links: [
        { label: 'GitHub', url: 'https://github.com/DanilleH22/solayulm' },
        { label: 'Live Demo', url: 'https://solayulm.co.uk' },
      ],
    },
    {
      name: 'Innoevent',
      image: Proj5,
      description: 'Programmed a website that shows upcoming events.',
      technologies: 'Django, HTML, CSS, React, PostgreSQL, Rest API',
      role: 'Full Stack Developer',
      links: [
        { label: 'GitHub', url: 'https://github.com/DanilleH22/innovevent?tab=readme-ov-file' },
        { label: 'Live Demo', url: 'https://innoevent-react-93e74f3a4351.herokuapp.com/' },
      ],
    },
    {
      name: 'Inkpad',
      image: Proj4,
      description: 'A Django-based website where you can read and write books.',
      technologies: 'Django, HTML, CSS, Javascript, PostgreSQL',
      role: 'Full Stack Developer',
      links: [
        { label: 'GitHub', url: 'https://github.com/DanilleH22/inkpad_book' },
        { label: 'Live Demo', url: 'https://github.com/DanilleH22/inkpad_book' },
      ],
    },
    {
      name: 'Eco Life Hub',
      image: Proj1,
      description: 'Programmed a website that is based on showing people how they can live life sustainably',
      technologies: 'HTML, CSS',
      role: 'Front End Developer',
      links: [
        { label: 'GitHub', url: 'https://github.com/DanilleH22/EcoLifeHub' },
        { label: 'Live Demo', url: 'https://danilleh22.github.io/EcoLifeHub/' },
      ],
    },
    {
      name: 'Simpson Smash',
      image: Proj2,
      description: 'Developed 2D game where you can hit a Simpson character in the face.',
      technologies: 'HTML5, CSS, and JavaScript',
      role: 'Full-stack Developer',
      links: [
        { label: 'GitHub', url: 'https://github.com/DanilleH22/simpsons_smash' },
        { label: 'Live Demo', url: 'https://danilleh22.github.io/simpsons_smash/' },
      ],
    },
    {
      name: 'Which TV character Are You?',
      image: Proj3,
      description: 'Coded Python-based game about which TV character you are. The game asks 5 questions and only does so for the TV show South Park.',
      technologies: 'Python',
      role: 'Python Developer',
      links: [
        { label: 'GitHub', url: 'https://github.com/DanilleH22/Which_tv_character_are_you' },
        { label: 'Live Demo', url: 'https://which-tv-character-are-you-86f095b68cfc.herokuapp.com/' },
      ],
    },
    
    
  ];

  return (
    <Container className={styles.Container}>
      <ScrollAnimation>
        <motion.div className="story-content" variants={itemVariants}>
              <div className="section-header">
                <span className="section-eyebrow">Projects I've completed</span>
                
              </div>
             
              <div className="stats-grid">
                <div className="stat-item">
                  <div className="stat-number">7+</div>
                  <div className="stat-label">Projects Completed</div>
                </div>
                <div className="stat-item">
                  <div className="stat-number">98%</div>
                  <div className="stat-label">Client Satisfaction</div>
                </div>
                <div className="stat-item">
                  <div className="stat-number">2+</div>
                  <div className="stat-label">Years of Experience</div>
                </div>
              </div>
            </motion.div>
    <div className={styles.projectContainer}>
      {projects.map((project, index) => (
        <div className={styles.projectCard} key={index} onClick={() => handleClick(index)}>
          <ReactCardFlip
            isFlipped={flippedIndex === index}
            flipDirection="horizontal"
          >
            {/* Front */}
            <div className={styles.cardContent}>
              <ProjectFront
                projectName={project.name}
                projectImage={project.image}
              />
            </div>

            {/* Back */}
            <div className={styles.cardContent}>
              <ProjectBack
                projectDescription={project.description}
                projectTechnologies={project.technologies}
                projectLinks={project.links}
                projectRole={project.role}
              />
              
            </div>
          </ReactCardFlip>
        </div>
      ))}
    </div>
    </ScrollAnimation>
    </Container>
  );
};

export default Projects;
