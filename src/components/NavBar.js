import React from 'react'
import { Row } from "react-bootstrap";
import { Col } from "react-bootstrap";
import danilleCv from '../assets/files/danilleCv.pdf'

const NavBar = () => {
  return (
    <Row className='pt-2'>
      <Col>
      <div className='d-flex justify-content-start'>
        <strong>Logo</strong></div>
      </Col>
      <Col>
    <div className='d-flex justify-content-end'>
      <a href={danilleCv} download="danilleCv" target='_blank' rel="noreferrer">
      <button>Resume</button></a>
    </div>
    </Col>
    </Row>
  )
}

export default NavBar