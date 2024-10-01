import React from 'react'
import { Row, Col, Image } from "react-bootstrap";
import headshot from '../assets/headshot.jpg'

const AboutMe = () => {
  return (
    <Row className='pt-4 ps-5'> 
    <Col className='ps-5' >
    <p>
    Hi, I’m Danille, a software developer with a unique background in psychology and a passion for building intuitive, user-centered digital solutions. After earning my degree in Psychology, I developed a deep interest in how technology can enhance human experiences. This curiosity led me to pursue a diploma in Software Development, where I gained hands-on experience in modern programming languages and development frameworks.
    <br/>
    <br/>
    As I transition into a full-time career in software development, I’m focused on creating applications that are both functional and empathetic to users' needs. My psychological insights give me a unique perspective on user experience and behavior, allowing me to design software that is not only efficient but also mindful of how people interact with technology.
    <br/>
    <br/>
    I’m excited to combine my skills in problem-solving, critical thinking, and software development to tackle challenges in tech, and I’m always eager to learn and grow in this ever-evolving field.
    </p>
    </Col>
    <Col className='d-flex justify-content-start pe-4' >
    <Image src={headshot} 
    width={300} 
    height={400} 
    rounded alt="Headshot of m" 
    />
    </Col>
    </Row>
  )
}

export default AboutMe