import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import { useEffect, useState } from 'react';

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
    <Row >
      
        <h1>Contact Me</h1>
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
        <Col className='d-flex justify-content-start'>
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
    
    </Row>
  );
}
