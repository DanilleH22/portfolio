import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import { useEffect, useState } from 'react';
import danilleCv from '../assets/files/danilleCv.pdf'
import { Container } from 'react-bootstrap';
import styles from '../styles/ContactMe.module.css'

export default function ContactMe() {
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    function simulateNetworkRequest() {
      return new Promise((resolve) => setTimeout(resolve, 2000));
    }

    if (isLoading) {
      simulateNetworkRequest().then(() => {
        setLoading(false);
      });
    }
  }, [isLoading]);

  const handleClick = () => setLoading(true);

  return (
    <Container fluid style={{ width: '75%'}}>
      <div className={styles.ContactMeCard}>
      <Row className="pt-3 mb-3 mt-3 text-center">
        <h1>Contact Me</h1>
        <p>I am always open to collaborating with people! Feel free to check me out on LinkedIn or Email.</p>
        <p>If you are a recruiter or employer, feel free to download my resume or email me!</p>
      </Row>

      <Row className="d-flex justify-content-center mb-3">
        {/* LinkedIn Button */}
        <Col xs={4} md={4} className="mb-2 d-flex justify-content-center">
          <Button
            href="https://www.linkedin.com/in/danille-hamilton-971b29206"
            target="_blank"
            variant="outline-secondary"
            className="w-100"
          >
            LinkedIn
          </Button>
        </Col>

        {/* Email Button */}
        <Col xs={4} md={4} className="mb-2 d-flex justify-content-center">
          <Button
            variant="outline-secondary"
            disabled={isLoading}
            onClick={!isLoading ? handleClick : null}
            href="mailto:hamiltonkdanille@hotmail.com"
            className="w-100"
          >
            {isLoading ? 'Loading…' : 'Email me'}
          </Button>
        </Col>

        {/* Resume Download Button */}
        <Col xs={4} md={4} className="mb-2 d-flex justify-content-center">
          <Button
            href={danilleCv}
            download="danilleCv"
            target="_blank"
            rel="noreferrer"
            variant="outline-secondary"
            className="w-100"
          >
            Resume
          </Button>
        </Col>
      </Row>
      </div>
    </Container>
  );
}
