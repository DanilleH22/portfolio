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
      {/* My name */}
      <Col>
      <div className={styles.Name} >
        <b>Danille Hamilton</b></div>
      </Col>
      {/* Job role */}
      <Col>
      <div className={styles.JobRole}>
        <b>Senior Data Analyst | Full Stack Developer</b>
      </div>
      </Col>
      {/* Resume button */}
      <Col style={{ fontSize: '20px' }}>
    <div className={styles.Resume}>
      <a href={danilleCv} download="danilleCv" target='_blank' rel="noreferrer">
      <button><b>Resume</b></button></a>
    </div>
    </Col>
    
    </Row>
    </ScrollAnimation>
  )
}

export default NavBar