import React from 'react';
import proj1 from '../assets/proj1.png';
import Image from 'react-bootstrap/Image';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';
import styles from "../styles/Projects.module.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons'

const Projects = () => {
  return (
    <Container fluid>
      <section id="projects">
        {/* Project Layout with Image and Card Side by Side */}
        <Row className="align-items-center">
          <Col width={500} height={400}>
            <Image src={proj1}  rounded alt="Project 1 EcoLifeHub" />
          </Col>
          <Col >
            <Card style={{ width: '30rem', height: '30rem' }}>
              <Card.Body className='project-body'>
                <Card.Title className='project-title'>EcoLifeHub</Card.Title>
                <Card.Subtitle className="mb-2 text-muted project-subtitle">Front-end Developer</Card.Subtitle>
                <Card.Text className='project-text'>
                  Some quick example text to build on the card title and make up the bulk of the card's content.
                </Card.Text>
                <Card.Text className={styles.projectTechnology}>HTML</Card.Text>
                <Card.Text className={styles.projectTechnology}>CSS</Card.Text>
                

                {/* GitHub Link */}
                <Card.Link className={styles.projectLink} href="https://github.com/DanilleH22/EcoLifeHub" target="_blank" aria-label="GitHub Link">
                  <FontAwesomeIcon icon={faGithub} style={{ color: 'blue' }} />
                </Card.Link>

                {/* Live Project Link */}
                <Card.Link className={styles.projectLink} href="https://danilleh22.github.io/EcoLifeHub/" target="_blank" aria-label="Live Link">
                <FontAwesomeIcon icon={faArrowUpRightFromSquare} style={{ color: 'blue' }} />
                </Card.Link>
                
                
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </section>
    </Container>
  );
};

export default Projects;

