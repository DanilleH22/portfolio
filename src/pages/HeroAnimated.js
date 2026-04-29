// HeroAnimated.jsx
import { useState, useEffect } from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { ArrowRight, Github, Linkedin, Mailbox } from 'react-bootstrap-icons';
import styles from '../styles/Portfolio.module.css';

function HeroAnimated() {
  const [displayText, setDisplayText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

    const [scrolled, setScrolled] = useState(false);
  const [expanded, setExpanded] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setExpanded(false); 
    }
  };
  
  const phrases = [
    'freelance developer',
    'React expert',
    'problem solver',
    'tech partner'
  ];
  
  useEffect(() => {
    const currentPhrase = phrases[currentIndex % phrases.length];
    
    const timer = setTimeout(() => {
      if (!isDeleting) {
        // Typing
        if (displayText.length < currentPhrase.length) {
          setDisplayText(currentPhrase.slice(0, displayText.length + 1));
        } else {
          // Wait 2 seconds then start deleting
          setTimeout(() => setIsDeleting(true), 2000);
        }
      } else {
        // Deleting
        if (displayText.length > 0) {
          setDisplayText(currentPhrase.slice(0, displayText.length - 1));
        } else {
          setIsDeleting(false);
          setCurrentIndex((prev) => prev + 1);
        }
      }
    }, 100);
    
    return () => clearTimeout(timer);
  }, [displayText, isDeleting, currentIndex]);
  
  return (
    <div className={styles.heroAnimated}>
      {/* Animated background shapes */}
      <div className={styles.shape1}></div>
      <div className={styles.shape2}></div>
      <div className={styles.shape3}></div>
      <div className={styles.shape4}></div>
      
      <Container className={styles.heroContainer}>
        <Row className="align-items-center min-vh-100">
          <Col lg={7} className="text-center text-lg-start">
            <div className={styles.badge + ' fade-in-up'}>
              <span className={styles.pulse}>●</span> Available for work
            </div>
            
            <h1 className={styles.glitchTitle}>
              Hi, I'm Danille 👋
            </h1>
            
            <h2 className={styles.typewriterWrapper}>
              I'm a{' '}
              <span className={styles.typewriter}>
                {displayText}
                <span className={styles.cursor}>|</span>
              </span>
            </h2>
            
            <p className={styles.heroDescription}>
              I turn complex problems into elegant, high-performance web applications.
              Let's build something amazing together.
            </p>
            
            <div className={styles.buttonGroup}>
              <Button className={styles.primaryBtnAnimated} onClick={() => scrollToSection('projects')}>
                View Projects <ArrowRight className={styles.btnIcon} /> 
              </Button>
              <Button variant="outline-light" className={styles.secondaryBtnAnimated} onClick={() => scrollToSection('contact')}>
                Let's Talk
              </Button>
            </div>
            
            <div className={styles.socialLinks}>
              <a href="#" className={styles.socialIcon}><Github /></a>
              <a href="#" className={styles.socialIcon}><Linkedin /></a>
              <a href="#" className={styles.socialIcon}><Mailbox /></a>
            </div>
          </Col>
          
          <Col lg={5} className="d-none d-lg-block">
            <div className={styles.codeCard}>
              <div className={styles.codeHeader}>
                <span className={styles.dotRed}></span>
                <span className={styles.dotYellow}></span>
                <span className={styles.dotGreen}></span>
              </div>
              <div className={styles.codeContent}>
                <pre>
                  <code>{`const developer = {
  name: "Danille",
  skills: ["React", "Node", "Python"],
  passion: "creating impact",
  availability: true
};

// Let's build together! 🚀`}</code>
                </pre>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default HeroAnimated;