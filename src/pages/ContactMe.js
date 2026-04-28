import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useEffect, useState } from 'react';
import Danille_Hamilton from '../assets/files/Danille-Hamilton.pdf'
import { Container } from 'react-bootstrap';
import styles from '../styles/ContactMe.module.css'
import ScrollAnimation from '../components/ScrollAnimation';

export default function ContactMe() {
  const [isLoading, setLoading] = useState(false);
  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    projectType: '',
    budget: '',
    timeline: '',
    details: ''
  });

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

  const handleFormChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleConsultationSubmit = (e) => {
    e.preventDefault();
    
    // Create email content with consultation details
    const emailSubject = `Consultation Request - ${formData.projectType || 'New Project'}`;
    const emailBody = `
NEW CONSULTATION REQUEST

Name: ${formData.name || 'Not provided'}

Project Type: ${formData.projectType || 'Not specified'}

Budget Range: ${formData.budget || 'Not specified'}

Timeline: ${formData.timeline || 'Not specified'}

Project Details:
${formData.details || 'No details provided'}

---
This consultation request came from your portfolio website.
Please respond within 24 hours.
    `;
    
    // Open email with pre-filled template
    window.location.href = `mailto:hamiltonkdanille@hotmail.com?subject=${encodeURIComponent(emailSubject)}&body=${encodeURIComponent(emailBody)}`;
    
    // Reset form and hide it
    setFormData({
      name: '',
      projectType: '',
      budget: '',
      timeline: '',
      details: ''
    });
    setShowForm(false);
    setLoading(true);
    setTimeout(() => setLoading(false), 1000);
  };

  return (
    <Container className={styles.Container}>
      <ScrollAnimation className={styles.ContactMeCard}>
        <Row className={styles.Row}>
          <h1><strong>Contact Me</strong></h1>
          <p style={{ backgroundColor: "transparent"}}>I am always open to collaborating with people! Feel free to check me out on LinkedIn or Email.</p>
          <p style={{ backgroundColor: "transparent"}}>If you are a recruiter or employer, feel free to download my resume or email me!</p>
        </Row>
        
        <Row className={styles.Row}>
          {/* LinkedIn Button */}
          <Col xs={4} sm={4} md={4} className={`${styles.customCol} mb-2 d-flex justify-content-end p-0`}>
            <Button
              href="https://www.linkedin.com/in/danille-hamilton-971b29206"
              target="_blank"
              variant="outline-secondary"
              className={styles.contactButton}
            >
              LinkedIn
            </Button>
          </Col>

          {/* Email Button */}
          <Col xs={4} sm={4} md={4} className={`${styles.customCol}  mb-2 d-flex justify-content-center p-0`}>
            <Button
              variant="outline-secondary"
              disabled={isLoading}
              onClick={!isLoading ? handleClick : null}
              href="mailto:hamiltonkdanille@hotmail.com"
              className={styles.contactButton}
            >
              {isLoading ? 'Loading…' : 'Email me'}
            </Button>
          </Col>

          {/* Resume Download Button */}
          <Col xs={4} sm={4} md={4} className={`${styles.customCol}  mb-2 d-flex justify-content-start p-0`}>
            <Button
              href={Danille_Hamilton}
              download="Danille-Hamilton"
              target="_blank"
              rel="noreferrer"
              variant="outline-secondary"
              className={styles.contactButton}
            >
              Resume
            </Button>
          </Col>
        </Row>

        {/* NEW: Consultation Booking Button */}
        <Row className={styles.Row}>
          <Col xs={12} className={styles.ConsultationRow}>
            <Button
              variant="primary"
              onClick={() => setShowForm(!showForm)}
              className={styles.consultationButton}
            >
              📅 Book a Free Consultation
            </Button>
            <p className={styles.consultationNote}>
              15-min call to discuss your project — no obligation
            </p>
          </Col>
        </Row>

        {/* NEW: Consultation Form (shows when button is clicked) */}
        {showForm && (
          <Row className={styles.Row}>
            <Col xs={12} md={8} lg={6} className="mx-auto">
              <div className={styles.formContainer}>
                <h3 className={styles.formTitle}>Quick Questions</h3>
                <p className={styles.formSubtitle}>Help me prepare for our call</p>
                
                <Form onSubmit={handleConsultationSubmit}>
                  <Form.Group className="mb-3">
                    <Form.Label>Your Name *</Form.Label>
                    <Form.Control
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleFormChange}
                      placeholder="e.g., John Smith"
                      required
                      className={styles.formInput}
                    />
                  </Form.Group>

                  <Form.Group className="mb-3">
                    <Form.Label>What type of project? *</Form.Label>
                    <Form.Select
                      name="projectType"
                      value={formData.projectType}
                      onChange={handleFormChange}
                      required
                      className={styles.formInput}
                    >
                      <option value="">Select one...</option>
                      <option>Portfolio Website</option>
                      <option>Business Website</option>
                      <option>E-commerce Store</option>
                      <option>Web Application</option>
                      <option>Landing Page</option>
                      <option>Website Redesign</option>
                      <option>Other</option>
                    </Form.Select>
                  </Form.Group>

                  <Form.Group className="mb-3">
                    <Form.Label>Budget Range *</Form.Label>
                    <Form.Select
                      name="budget"
                      value={formData.budget}
                      onChange={handleFormChange}
                      required
                      className={styles.formInput}
                    >
                      <option value="">Select one...</option>
                      <option>£0 - £300</option>
                      <option>£300 - £600</option>
                      <option>£600 - £1,000</option>
                      <option>£1,000+</option>
                      <option>Not sure / Need advice</option>
                    </Form.Select>
                  </Form.Group>

                  <Form.Group className="mb-3">
                    <Form.Label>Expected Timeline *</Form.Label>
                    <Form.Select
                      name="timeline"
                      value={formData.timeline}
                      onChange={handleFormChange}
                      required
                      className={styles.formInput}
                    >
                      <option value="">Select one...</option>
                      <option>ASAP (within 2 weeks)</option>
                      <option>Within a month</option>
                      <option>1-3 months</option>
                      <option>3+ months</option>
                      <option>Just exploring</option>
                    </Form.Select>
                  </Form.Group>

                  <Form.Group className="mb-3">
                    <Form.Label>Tell me about your project *</Form.Label>
                    <Form.Control
                      as="textarea"
                      rows={3}
                      name="details"
                      value={formData.details}
                      onChange={handleFormChange}
                      placeholder="What are you looking to build? Any specific features or examples you like?"
                      required
                      className={styles.formInput}
                    />
                  </Form.Group>

                  <div className={styles.formButtons}>
                    <Button 
                      variant="secondary" 
                      onClick={() => setShowForm(false)}
                      className={styles.cancelButton}
                    >
                      Cancel
                    </Button>
                    <Button 
                      variant="primary" 
                      type="submit"
                      className={styles.submitButton}
                    >
                      Send Request →
                    </Button>
                  </div>
                </Form>
              </div>
            </Col>
          </Row>
        )}
      </ScrollAnimation>
    </Container>
  );
}