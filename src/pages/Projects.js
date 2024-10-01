import React from 'react';
import proj1 from '../assets/proj1.png';
import Image from 'react-bootstrap/Image';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';
import styles from "../styles/Projects.module.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons';

const Projects = () => {
  return (
    <Container fluid>
      <section className={styles.projects}>
        <Row className={styles.projectRow}>
          {/* Image Column */}
          <Col className={styles.Images}>
            <Image src={proj1} className={styles.imageSpecific} rounded alt="EcoLifeHub" />
          </Col>
          {/* Card Column */}
          <Col className={styles.projectBody}>
            <Card className={styles.projectCard}>
              <Card.Body>
                <Card.Title style={{ textAlign: 'left' }}>EcoLifeHub</Card.Title>
                <Card.Subtitle className="mb-2 text-muted" style={{ textAlign: 'left' }}>Front-end Developer</Card.Subtitle>
                <Card.Text>
                  Some quick example text to build on the card title and make up the bulk of the card's content.
                </Card.Text>
                <Card.Text className={styles.projectTechnology} id={styles.projectTechnology1}>HTML</Card.Text>
                <Card.Text className={styles.projectTechnology}>CSS</Card.Text>

                <br />

                {/* GitHub Link */}
                <Card.Link href="https://github.com/DanilleH22/EcoLifeHub" className={styles.projectLink} target="_blank" aria-label="GitHub Link">
                  <FontAwesomeIcon icon={faGithub} />
                </Card.Link>

                {/* Live Project Link */}
                <Card.Link href="https://danilleh22.github.io/EcoLifeHub/" className={styles.projectLink} target="_blank" aria-label="Live Link">
                  <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
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
