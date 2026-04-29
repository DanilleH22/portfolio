import React, { useState, useEffect } from 'react';
import { Navbar, Nav, Container, Button } from 'react-bootstrap';
import { Briefcase, Laptop, Code, Envelope, FiletypePdf, PersonBadge, Calendar} from 'react-bootstrap-icons';
import styles from '../styles/Portfolio.module.css';
import danilleCv from '../assets/files/danilleCv.pdf';

const NavBar = () => {
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

  const handleConsultationClick = () => {
    // Try to find the consultation button in ContactMe section
    const consultationBtn = document.querySelector('.consultation-button-class');
    if (consultationBtn) {
      consultationBtn.scrollIntoView({ behavior: 'smooth' });
      consultationBtn.click();
    } else {
      // Fallback to contact section
      scrollToSection('contact');
    }
    setExpanded(false);
  };


  

  return (
    <Navbar 
      expand="lg" 
      fixed="top" 
      className={`${styles.navbar} ${scrolled ? styles.scrolled : ''}`}
      expanded={expanded}
      onToggle={() => setExpanded(!expanded)}
    >
      <Container fluid="md">
        <Navbar.Brand href="#home" className={styles.brand} onClick={() => scrollToSection('home')}>
          <span className={styles.brandName}>Danille Hamilton</span>
          <span className={styles.brandTag}>Freelance Developer</span>
        </Navbar.Brand>
        
        <Navbar.Toggle aria-controls="basic-navbar-nav" className={styles.toggle} />
        
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link 
              onClick={() => scrollToSection('projects')} 
              className={styles.navLink}
            >
              <Laptop className={styles.navIcon} /> Work
            </Nav.Link>
            
            <Nav.Link 
              onClick={() => scrollToSection('packages')} 
              className={`${styles.navLink} ${styles.pricingLink}`}
            >
              <Briefcase className={styles.navIcon} /> Pricing
            </Nav.Link>
            
            <Nav.Link 
              onClick={() => scrollToSection('technologies')} 
              className={styles.navLink}
            >
              <Code className={styles.navIcon} /> Skills
            </Nav.Link>
            
            <Nav.Link 
              onClick={() => scrollToSection('experience')} 
              className={styles.navLink}
            >
              <PersonBadge className={styles.navIcon} /> Experience
            </Nav.Link>
            
            {/* Resume Button (Downloads file) */}
            <Nav.Link 
              href={danilleCv}
              download
              className={styles.navLink}
              target="_blank"
              rel="noreferrer"
            >
              
              <FiletypePdf className={styles.navIcon} /> Full Resume
            </Nav.Link>
            
            {/* CTA Button - Most important for freelancing */}
            <Button 
              className={styles.ctaButton}
              onClick={handleConsultationClick}
            >
              <Calendar className={styles.ctaIcon} /> Free Consultation
            </Button>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;