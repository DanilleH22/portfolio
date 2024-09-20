import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';
import Row from 'react-bootstrap/Row';
import dj from '../assets/dj.png';
import python from '../assets/Postgresql.png';
import js from '../assets/js.webp';
import react from '../assets/react.png';
import postgresql from '../assets/Postgresql.png';
import node from '../assets/noode.jpg';
import html from '../assets/html.png';
import sql from '../assets/sql.png';

function Technologies() {
  return (
    <Container>
      {/* Parent Row for all sections */}
      <Row>

        {/* Technologies Column */}
        <Col md={4}>
          <h4 className="justify-content-md-center">Technologies</h4>
          <Row>
            <Col xs={3} md={4}>
              <Image src={html} width={50} height={50} rounded alt="HTML" />
            </Col>
            <Col xs={3} md={4}>
              <Image src={python} width={50} height={50} rounded alt="Python" />
            </Col>
            <Col xs={3} md={4}>
              <Image src={js} width={50} height={50} rounded alt="JavaScript" />
            </Col>
          </Row>
        </Col>

        {/* Frameworks and Libraries Column */}
        <Col md={4}>
          <h4 className="justify-content-md-center">Frameworks and Libraries</h4>
          <Row>
            <Col xs={3} md={4}>
              <Image src={react} width={50} height={50} rounded alt="React" />
            </Col>
            <Col xs={3} md={4}>
              <Image src={dj} width={50} height={50} rounded alt="Django" />
            </Col>
            <Col xs={3} md={4}>
              <Image src={node} width={100} height={50} rounded alt="Node.js" />
            </Col>
          </Row>
        </Col>

        {/* Databases Column */}
        <Col md={4}>
          <h4 className="justify-content-md-center">Databases</h4>
          <Row className="justify-content-md-center">
            <Col xs={3} md={4}>
              <Image src={postgresql} width={50} height={50} rounded alt="PostgreSQL" />
            </Col>
            <Col xs={3} md={4}>
              <Image src={sql} width={100} height={50} rounded alt="MySQL" />
            </Col>
          </Row>
        </Col>

      </Row>
    </Container>
  );
}

export default Technologies;
