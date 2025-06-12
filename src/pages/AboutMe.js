import React from 'react';
import { Row, Col, Image, Container } from "react-bootstrap";
import headshot from '../assets/headshot.jpg';
import styles from '../styles/AboutMe.module.css';
import ScrollAnimation from '../components/ScrollAnimation';

const AboutMe = () => {
  return (
    <Container className={styles.Container}>
      <ScrollAnimation className={styles.AboutMeCard}>
        <Row className={styles.Row}>
          {/* Text Column */}
          <Col md={6} className={styles.TextColumn}>
            <h2 className={styles.Title}>About Me</h2>
            <p className={styles.Paragraph}>
            Hi, I’m Danille, a software developer with a unique background in psychology and a passion for building intuitive, user-centered digital solutions. After earning my degree in Psychology, I developed a deep interest in how technology can enhance human experiences. This curiosity led me to pursue a diploma in Software Development, where I gained hands-on experience in modern programming languages and development frameworks.
              <br/><br/>
              As I transition into a full-time career in software development, I’m focused on creating applications that are both functional and empathetic to users' needs. My psychological insights give me a unique perspective on user experience and behavior, allowing me to design software that is not only efficient but also mindful of how people interact with technology.
              <br/><br/>
              I’m excited to combine my skills in problem-solving, critical thinking, and software development to tackle challenges in tech, and I’m always eager to learn and grow in this ever-evolving field.
            </p>
          </Col>
          
          {/* Image Column */}
          <Col md={6} className={styles.ImageColumn}>
            <Image 
              src={headshot} 
              className={styles.Headshot}
              alt="Headshot of Danille" 
            />
          </Col>
        </Row>
      </ScrollAnimation>
    </Container>
  );
};

export default AboutMe;