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
import Proj8 from '../assets/project8.png';
import styles from '../styles/Projects.module.css';
import { Container } from 'react-bootstrap';
import ScrollAnimation from '../components/ScrollAnimation';
import { motion } from 'framer-motion';
import { Briefcase, Check } from 'react-bootstrap-icons';

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

  // Separate client projects (real freelance work)
  const clientProjects = [
    {
      name: 'LA4K Portfolio Website',
      image: Proj6,
      description: 'Programmed a website that showcases a portfolio of images and videos taken by a client',
      technologies: 'React, HTML, CSS',
      role: 'Front End Developer',
      isClientWork: true,
      clientName: 'LA4K Creative',
      clientProblem: 'Creative professional needed a modern portfolio to showcase their work and attract more clients',
      timeline: '2 weeks',
      results: 'Increased client inquiries by 40%, reduced page load time by 60%',
      projectValue: '£350',
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
      isClientWork: true,
      clientName: 'Solayulm',
      clientProblem: 'Sustainability blog needed to scale from 100 to 10,000 monthly visitors',
      timeline: '8 weeks',
      results: 'SEO improved by 85%, bounce rate decreased by 45%',
      projectValue: '£600',
      links: [
        { label: 'GitHub', url: 'https://github.com/DanilleH22/solayulm' },
        { label: 'Live Demo', url: 'https://solayulm.co.uk' },
      ],
    },
    {
      name: 'The SkinTech',
      image: Proj8,
      description: 'Created a profeesional website to show what the skincare brand does and help find clients ',
      technologies: 'HTML, Javascript, React, CSS, GSAP',
      role: 'Full Stack Developer',
      isClientWork: true,
      clientName: 'The SkinTech',
      clientProblem: 'Client needed ',
      timeline: '3 weeks',
      results: 'SEO improved by 85%, increase your market visibility and optimize client acquisition.',
      projectValue: '£300',
      links: [
        { label: 'Live Demo', url: 'https://skintech-website.webflow.io/' },
      ],
    },
  ];

  // Course/personal projects
  const courseProjects = [
    {
      name: 'Innoevent',
      image: Proj5,
      description: 'Programmed a website that shows upcoming events.',
      technologies: 'Django, HTML, CSS, React, PostgreSQL, Rest API',
      role: 'Full Stack Developer',
      isClientWork: false,
      projectType: 'Course Project',
      learningOutcome: 'Full-stack development with Django REST framework',
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
      isClientWork: false,
      projectType: 'Course Project',
      learningOutcome: 'Database design and user authentication',
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
      isClientWork: false,
      projectType: 'Course Project',
      learningOutcome: 'Responsive design and CSS Grid/Flexbox',
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
      isClientWork: false,
      projectType: 'Personal Project',
      learningOutcome: 'Game development with vanilla JavaScript',
      links: [
        { label: 'GitHub', url: 'https://github.com/DanilleH22/simpsons_smash' },
        { label: 'Live Demo', url: 'https://danilleh22.github.io/simpsons_smash/' },
      ],
    },
    {
      name: 'Which TV Character Are You?',
      image: Proj3,
      description: 'Coded Python-based game about which TV character you are. The game asks 5 questions and only does so for the TV show South Park.',
      technologies: 'Python',
      role: 'Python Developer',
      isClientWork: false,
      projectType: 'Course Project',
      learningOutcome: 'Python logic and user input handling',
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
            <span className="section-eyebrow">My Work</span>
          </div>
          
          <div className="stats-grid">
            <div className="stat-item">
              <div className="stat-number">{clientProjects.length}+</div>
              <div className="stat-label">Client Projects</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">{courseProjects.length}+</div>
              <div className="stat-label">Additional Projects</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">100%</div>
              <div className="stat-label">Client Satisfaction</div>
            </div>
          </div>
        </motion.div>

        {/* CLIENT PROJECTS SECTION - Featured */}
        <div className={styles.sectionDivider}>
          <div className={styles.sectionTitleWrapper}>
            <Briefcase className={styles.sectionIcon} />
            <h2 className={styles.sectionTitle}>Client Work</h2>
            <div className={styles.sectionLine}></div>
          </div>
          <p className={styles.sectionSubtitle}>
            Real projects delivered for actual clients — with measurable results
          </p>
        </div>

        <div className={styles.projectContainer}>
          {clientProjects.map((project, index) => (
            <div className={`${styles.projectCard} ${styles.clientCard}`} key={`client-${index}`} onClick={() => handleClick(`client-${index}`)}>
              <div className={styles.clientBadge}>
                <Briefcase /> Paid Client Project
              </div>
              <ReactCardFlip
                isFlipped={flippedIndex === `client-${index}`}
                flipDirection="horizontal"
              >
                <div className={styles.cardContent}>
                  <ProjectFront
                    projectName={project.name}
                    projectImage={project.image}
                  />
                </div>
                <div className={styles.cardContent}>
                  <ProjectBack
                    projectDescription={project.description}
                    projectTechnologies={project.technologies}
                    projectLinks={project.links}
                    projectRole={project.role}
                    projectTimeline={project.timeline}
                    projectResults={project.results}
                    projectProblem={project.clientProblem}
                  />
                </div>
              </ReactCardFlip>
            </div>
          ))}
        </div>

        {/* COURSE PROJECTS SECTION */}
        <div className={styles.sectionDivider}>
          <div className={styles.sectionTitleWrapper}>
            <Check className={styles.sectionIcon} />
            <h2 className={styles.sectionTitle}>Course & Personal Projects</h2>
            <div className={styles.sectionLine}></div>
          </div>
          <p className={styles.sectionSubtitle}>
            Projects built during my learning journey — demonstrating my technical range
          </p>
        </div>

        <div className={styles.projectContainer}>
          {courseProjects.map((project, index) => (
            <div className={`${styles.projectCard} ${styles.courseCard}`} key={`course-${index}`} onClick={() => handleClick(`course-${index}`)}>
              <div className={styles.courseBadge}>
                <Check /> {project.projectType}
              </div>
              <ReactCardFlip
                isFlipped={flippedIndex === `course-${index}`}
                flipDirection="horizontal"
              >
                <div className={styles.cardContent}>
                  <ProjectFront
                    projectName={project.name}
                    projectImage={project.image}
                  />
                </div>
                <div className={styles.cardContent}>
                  <div className={styles.backContent}>
                    <div className={styles.descriptionSection}>
                      <strong>What I Built:</strong>
                      <p>{project.description}</p>
                    </div>
                    <div className={styles.learningSection}>
                      <strong>📚 What I Learned:</strong>
                      <p>{project.learningOutcome}</p>
                    </div>
                    <div className={styles.roleSection}>
                      <strong>My Role:</strong>
                      <p>{project.role}</p>
                    </div>
                    <div className={styles.techSection}>
                      <strong>Tech Stack:</strong>
                      <div className={styles.techTags}>
                        {project.technologies.split(',').map((tech, i) => (
                          <span key={i} className={styles.techTag}>{tech.trim()}</span>
                        ))}
                      </div>
                    </div>
                    <div className={styles.linksSection}>
                      {project.links.map((link, linkIndex) => (
                        <a key={linkIndex} href={link.url} target="_blank" rel="noopener noreferrer" className={styles.projectLink}>
                          {link.label === 'GitHub' ? '📂' : '🔗'} {link.label}
                        </a>
                      ))}
                    </div>
                  </div>
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