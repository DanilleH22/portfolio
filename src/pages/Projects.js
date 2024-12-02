import React, { useState } from 'react';
import ReactCardFlip from 'react-card-flip';
import ProjectFront from '../components/ProjectFront';
import ProjectBack from '../components/ProjectBack';
import Proj1 from '../assets/project1.png';
import Proj2 from '../assets/project2.png';
import Proj3 from '../assets/project3.png';
import Proj4 from '../assets/project4.png';
import Proj5 from '../assets/project5.png';
import styles from '../styles/Projects.module.css';
import { motion, AnimatePresence } from "framer-motion";
import ScrollAnimation from '../components/ScrollAnimation';

const Projects = () => {
  const [flippedIndex, setFlippedIndex] = useState(null);
  const [selectedProject, setSelectedProject] = useState(null); // Modal state

  const handleClick = (index) => {
    setFlippedIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  const openModal = (project) => setSelectedProject(project);
  const closeModal = () => setSelectedProject(null);
  
  const projects = [
    {
      name: 'Eco Life Hub',
      image: Proj1,
      description: 'Programmed a website that is based on showing people how they can live life sustainably',
      technologies: 'HMTL, CSS',
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
  ];

  return (
    <>
      {/* Project Cards */}
      <ScrollAnimation className={styles.projectContainer}>
        {projects.map((project, index) => (
          <motion.div
            whileHover={{ scale: 1.05 }}
            className={styles.projectCard}
            key={index}
            onClick={() => openModal(project)} // Open modal on click
          >
            <ReactCardFlip
              isFlipped={flippedIndex === index}
              flipDirection="horizontal"
            >
              {/* Front */}
              <div>
                <ProjectFront
                  projectName={project.name}
                  projectImage={project.image}
                  handleClick={() => handleClick(index)}
                />
              </div>

              {/* Back */}
              <div>
                <ProjectBack
                  projectDescription={project.description}
                  projectTechnologies={project.technologies}
                  projectLinks={project.links}
                  projectRole={project.role}
                  handleClick={() => handleClick(index)}
                />
              </div>
            </ReactCardFlip>
          </motion.div>
        ))}
      </ScrollAnimation>

      {/* Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            className={styles.modal}
            layout
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.3 }}
          >
            <div className={styles.modalContent}>
              <h2>{selectedProject.name}</h2>
              <img src={selectedProject.image} alt={selectedProject.name} />
              <p>{selectedProject.description}</p>
              <p><strong>Technologies:</strong> {selectedProject.technologies}</p>
              <p><strong>Role:</strong> {selectedProject.role}</p>
              <div>
                {selectedProject.links.map((link, idx) => (
                  <a key={idx} href={link.url} target="_blank" rel="noopener noreferrer">
                    {link.label}
                  </a>
                ))}
              </div>
              <button onClick={closeModal}>Close</button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Projects;
