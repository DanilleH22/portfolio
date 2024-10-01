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
      <Row className='pt-5'>

        {/* Technologies Column */}
        <Col md={4}>
          <h4 className="justify-content-md-center">Technologies</h4>
          <Row>
            <Col xs={3} md={4}>
              <Image src={html} width={40} height={40} rounded alt="HTML" />
            </Col>
            <Col xs={3} md={4}>
              <Image src={python} width={40} height={40} rounded alt="Python" />
            </Col>
            <Col xs={3} md={4}>
              <Image src={js} width={40} height={40} rounded alt="JavaScript" />
            </Col>
          </Row>
        </Col>

        {/* Frameworks and Libraries Column */}
        <Col md={4}>
          <h4 className="justify-content-md-center">Frameworks and Libraries</h4>
          <Row>
            <Col xs={3} md={4}>
              <Image src={react} width={40} height={40} rounded alt="React" />
            </Col>
            <Col xs={3} md={4}>
              <Image src={dj} width={40} height={40} rounded alt="Django" />
            </Col>
            <Col xs={3} md={4}>
              <Image src={node} width={40} height={40} rounded alt="Node.js" />
            </Col>
          </Row>
        </Col>

        {/* Databases Column */}
        <Col md={4}>
          <h4 className="justify-content-md-center">Databases</h4>
          <Row className="justify-content-md-center">
            <Col xs={3} md={4}>
              <Image src={postgresql} width={40} height={40} rounded alt="PostgreSQL" />
            </Col>
            <Col xs={3} md={4}>
              <Image src={sql} width={40} height={40} rounded alt="MySQL" />
            </Col>
          </Row>
        </Col>

      </Row>
    </Container>
  );
}

export default Technologies;
