import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import styles from '../styles/Technologies.module.css';
import Row from 'react-bootstrap/Row';

function Technologies() {
  return (
    <Container style={{ width: '75%'}} >
      <Row className='text-center' >
        <h4>Technologies & Tools</h4>
        <p xs={8} className='d-flex justify-content-center'>Throughout my journey as a software developer, I have worked with a diverse range of technologies, frameworks, and tools. Below are some of the key ones that I regularly use in my projects:</p>
        <Col md={3} xs={6} className={styles.TechnologiesListCol}>
        <h6> Languages:</h6>
        <div className='d-flex justify-content-start'>
        <ul className={styles.TechnologiesList}>
          <li>
            HTML
          </li>
          <li>CSS</li>
          <li>Python</li>
          <li>JavaScript</li>
          <li>SQL</li>
        </ul>
        </div>
        </Col>
        <Col md={3} xs={6} className={styles.TechnologiesListCol}>
        <h6>Frameworks & Libraries</h6>
        <div className='d-flex justify-content-start'>
        <ul className={styles.TechnologiesList}>
          <li>React</li>
          <li>Bootstrap</li>
          <li>Django</li>
          <li>Flask</li>
          <li>Node.js</li>
        </ul>
        </div>
        </Col>
        <Col md={3} xs={6} className={styles.TechnologiesListCol}>
        <h6>APIs & Tools</h6>
        <div className='d-flex justify-content-start'>
        <ul className={styles.TechnologiesList}>
          <li>Git</li>
          <li>RESTful APIs</li>
        </ul>
        </div>
        </Col>
        <Col md={3} xs={6} className={styles.TechnologiesListCol}>
          <h6>Development Environments</h6>
          <div className='d-flex justify-content-start'>
          <ul className={styles.TechnologiesList}>
            <li>GitHub</li>
            <li>Xcode</li>
            <li>Visual Studio</li>
          </ul>
          </div>
        </Col>

      </Row>
    </Container>
  );
}

export default Technologies;
