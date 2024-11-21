import React, { useState } from 'react';
import ReactCardFlip from 'react-card-flip';
import ProjectFront from '../components/ProjectFront';
import ProjectBack from '../components/ProjectBack';
import Proj1 from '../assets/proj1.png';
import Proj2 from '../assets/proj2.png';
import Proj3 from '../assets/proj3.png';
import Proj4 from '../assets/proj4.png';
import Proj5 from '../assets/proj5.png';
import styles from '../styles/Projects.module.css';

const Projects = () => {
  const [flippedIndex, setFlippedIndex] = useState(null);

  const handleClick = (index) => {
    setFlippedIndex((prevIndex) => (prevIndex === index ? null : index));
  };

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
    <div className={styles.projectContainer}>
      {projects.map((project, index) => (
        <div className={styles.projectCard} key={index}>
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
        </div>
      ))}
    </div>
  );
  
};

export default Projects;
