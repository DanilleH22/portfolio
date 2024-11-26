import React from 'react'
import { Row } from "react-bootstrap";
import { Col } from "react-bootstrap";
import danilleCv from '../assets/files/danilleCv.pdf'
import ScrollAnimation from '../components/ScrollAnimation';
import styles from '../styles/Portfolio.module.css'

const NavBar = () => {
  return (
    <ScrollAnimation>
    <Row className='pt-2' style={{ fontSize: '25px' }}>
      
      <Col>
      <div className={styles.Name} >
        <strong>Danille Hamilton</strong></div>
      </Col>
      <Col>
      <div>
        <strong>Junior Software Developer</strong>
      </div>
      </Col>
      <Col style={{ fontSize: '20px' }}>
    <div className={styles.Resume}>
      <a href={danilleCv} download="danilleCv" target='_blank' rel="noreferrer">
      <button><strong>Resume</strong></button></a>
    </div>
    </Col>
    
    </Row>
    </ScrollAnimation>
  )
}

export default NavBar