import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import styles from '../styles/Technologies.module.css';
import Row from 'react-bootstrap/Row';
import ScrollAnimation from '../components/ScrollAnimation';

function Technologies() {
  return (
    <Container className={styles.Container}>
      <ScrollAnimation animationVariants={{
    hidden: { opacity: 0, x: -100 },
    visible: { opacity: 1, x: 0, transition: { duration: 1 } }
  }}>
        <Row className={styles.TechBox}>
          
          <h2 className={styles.SectionTitle}>Technologies & Tools</h2>
          <p className={styles.IntroText}>
            Throughout my journey as a software developer, I've worked with a diverse range of technologies:
          </p>
          
          {/* Languages */}
          <Col md={3} xs={6} className={styles.TechnologiesCol}>
            <div className={styles.CategoryCard}>
              <h6 className={styles.CategoryTitle}>Languages</h6>
              <ul className={styles.TechnologiesList}>
                <li>HTML</li>
                <li>CSS</li>
                <li>Python</li>
                <li>JavaScript</li>
                <li>SQL</li>
              </ul>
            </div>
          </Col>

          {/* Frameworks */}
          <Col md={3} xs={6} className={styles.TechnologiesCol}>
            <div className={styles.CategoryCard}>
              <h6 className={styles.CategoryTitle}>Frameworks</h6>
              <ul className={styles.TechnologiesList}>
                <li>React</li>
                <li>Bootstrap</li>
                <li>Django</li>
                <li>Flask</li>
                <li>Node.js</li>
              </ul>
            </div>
          </Col>

          {/* APIs & Tools */}
          <Col md={3} xs={6} className={styles.TechnologiesCol}>
            <div className={styles.CategoryCard}>
              <h6 className={styles.CategoryTitle}>APIs & Tools</h6>
              <ul className={styles.TechnologiesList}>
                <li>Git</li>
                <li>RESTful APIs</li>
              </ul>
            </div>
          </Col>

          {/* Dev Environments */}
          <Col md={3} xs={6} className={styles.TechnologiesCol}>
            <div className={styles.CategoryCard}>
              <h6 className={styles.CategoryTitle}>Environments</h6>
              <ul className={styles.TechnologiesList}>
                <li>GitHub</li>
                <li>Xcode</li>
                <li>VS Code</li>
              </ul>
            </div>
          </Col>
        </Row>
      </ScrollAnimation>
    </Container>
  );
}

export default Technologies;