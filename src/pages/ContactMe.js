import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import { useEffect, useState } from 'react';
import danilleCv from '../assets/files/danilleCv.pdf'
import { Container } from 'react-bootstrap';

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
    <Container>
    <Row className='pt-3 mb-3' >
      
        <h1>Contact Me</h1>
        <p>I am always open to collaborating with people! Feel free to check me out on LinkedIn or Email.</p>
        <br/>
        <p>If you are a recruiter or employer, feel free to download my resume or email me!</p>
        <Col className='d-flex justify-content-end'>
          <div>
            <Button
              href="https://www.linkedin.com/in/danille-hamilton-971b29206"
              target="_blank"
              variant="outline-secondary"
            >
              LinkedIn
            </Button>
          </div>
        </Col>
        <Col className='d-flex justify-content-center'>
          <div>
            <Button
              variant="outline-secondary"
              disabled={isLoading}
              onClick={!isLoading ? handleClick : null}
              href="mailto:hamiltonkdanille@hotmail.com"
            >
              {isLoading ? 'Loading…' : 'Email me'}
            </Button>
          </div>
        </Col>
        <Col className='d-flex justify-content-start'>
        <Button href={danilleCv} download="danilleCv" target='_blank' rel="noreferrer" variant="outline-secondary">
        Resume</Button>
      </Col>
    
    
    </Row>
    </Container>
  );
}
