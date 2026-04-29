// src/components/Packages.jsx
import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Button, Modal, Form } from 'react-bootstrap';
import { Check, Star, Rocket, Crown, Clock, ChartLine, Code, Mobile, Database, MineCart, Envelope, CalendarAlt } from 'react-bootstrap-icons';
import styles from '../styles/Packages.module.css';
import styles2 from '../styles/ContactMe.module.css';
import ScrollAnimation from '../components/ScrollAnimation';
import { motion } from 'framer-motion';

const Packages = () => {
  const [showModal, setShowModal] = useState(false);
  const [selectedPackage, setSelectedPackage] = useState(null);

  const handleShowModal = (pkg) => {
    setSelectedPackage(pkg);
    setShowModal(true);
  };

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
Kind Regards,
${formData.name || 'Not provided'}

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

  const packages = [
    {
      name: "Essential",
      icon: <Star />,
      price: "£800",
      priceDetail: "one-time",
     最适合: "Small businesses, startups, portfolios",
      timeline: "1-2 weeks",
      features: [
        "Up to 5 pages",
        "Responsive design (mobile-friendly)",
        "Contact form integration",
        "Basic SEO setup",
        "Social media links",
        "Google Analytics setup",
        "1 round of revisions",
        "30 days of basic support"
      ],
      notIncluded: [
        "E-commerce functionality",
        "Custom animations",
        "Database integration"
      ],
      recommended: false,
      color: "#4ecdc4"
    },
    {
      name: "Professional",
      icon: <Rocket />,
      price: "£1,800",
      priceDetail: "one-time",
     最适合: "Growing businesses, blogs, e-commerce",
      timeline: "3-4 weeks",
      features: [
        "Up to 10 pages",
        "Responsive design (mobile-friendly)",
        "Advanced contact forms",
        "Complete SEO optimization",
        "Social media integration",
        "Google Analytics + Search Console",
        "2 rounds of revisions",
        "90 days of priority support",
        "Blog/CMS integration",
        "Email marketing setup",
        "Performance optimization",
        "SSL certificate setup",
        "E-Commerce Funcionability"
      ],
      notIncluded: [
        "Custom database architecture",
        "Advanced animations"
      ],
      recommended: true,
      color: "#ff6b6b"
    },
    {
      name: "Enterprise",
      icon: "Crown",
    //   <Crown />,
      price: "£3,500+",
      priceDetail: "custom quote",
     最适合: "Large companies, complex web apps",
      timeline: "6-8+ weeks",
      features: [
        "Unlimited pages",
        "Fully custom design",
        "Advanced database integration",
        "Custom API development",
        "User authentication system",
        "Payment gateway integration",
        "Advanced animations",
        "Unlimited revisions",
        "6 months priority support",
        "Performance optimization",
        "Security hardening",
        "CI/CD pipeline setup",
        "6 Months maintenance"
      ],
      notIncluded: [],
      recommended: false,
      color: "#ffd700"
    }
  ];

  const addOns = [
    { name: "Additional Page", price: "£150", icon: <Code /> },
    { name: "E-commerce Setup", price: "£500", icon: <i class="bi bi-minecart"></i> },
    { name: "Custom Animations", price: "£300", icon: <Rocket /> },
    { name: "Database Integration", price: "£400", icon: <Database /> },
    { name: "Maintenance Package (monthly)", price: "£150/mo", icon: <Clock /> }
  ];

  const process = [
    { step: "01", title: "Discovery Call", description: "30-min chat to understand your needs", icon: <i class="bi bi-calendar-check"></i> },
    { step: "02", title: "Proposal", description: "Detailed plan and timeline", icon: <i class="bi bi-bar-chart-line"></i> },
    { step: "03", title: "Design & Build", description: "Regular updates every 2-3 days", icon: <Code /> },
    { step: "04", title: "Launch", description: "Deployment and training", icon: <Rocket /> }
  ];

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6 }
    }
  };

  return (
    <>
      <Container fluid className={styles.packagesContainer}>
        <ScrollAnimation>
          <motion.div variants={itemVariants}>
            <div className={styles.sectionHeader}>
              <span className={styles.sectionEyebrow}>Pricing & Packages</span>
              <h2 className={styles.sectionTitle}>Choose the perfect plan for your project</h2>
              <p className={styles.sectionSubtitle}>
                Transparent pricing with no hidden fees — all projects include responsive design, SEO optimization, 
                and post-launch support
              </p>
            </div>

            {/* Packages Grid */}
            <div className={styles.packagesGrid}>
              {packages.map((pkg, index) => (
                <div 
                  key={index} 
                  className={`${styles.packageCard} ${pkg.recommended ? styles.recommended : ''}`}
                  style={{ '--package-color': pkg.color }}
                >
                  {pkg.recommended && (
                    <div className={styles.recommendedBadge}>
                      <Star /> Most Popular
                    </div>
                  )}
                  
                  <div className={styles.packageHeader}>
                    <div className={styles.packageIcon} style={{ color: pkg.color }}>
                      {pkg.icon}
                    </div>
                    <h3 className={styles.packageName}>{pkg.name}</h3>
                    <div className={styles.packagePrice}>
                      <span className={styles.price}>{pkg.price}</span>
                      <span className={styles.priceDetail}>/{pkg.priceDetail}</span>
                    </div>
                    <p className={styles.packageFor}>🎯 {pkg.最适合}</p>
                    <p className={styles.packageTimeline}>
                      <Clock /> {pkg.timeline}
                    </p>
                  </div>

                  <div className={styles.packageFeatures}>
                    <div className={styles.featuresList}>
                      <strong>What's included:</strong>
                      {pkg.features.map((feature, i) => (
                        <div key={i} className={styles.feature}>
                          <Check className={styles.checkIcon} />
                          <span>{feature}</span>
                        </div>
                      ))}
                    </div>

                    {pkg.notIncluded.length > 0 && (
                      <div className={styles.notIncluded}>
                        <strong>Not included:</strong>
                        {pkg.notIncluded.map((item, i) => (
                          <div key={i} className={styles.notIncludedItem}>
                            <span>• {item}</span>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>

                  <button 
                    className={styles.ctaButton}
                    onClick={() => handleShowModal(pkg)}
                    style={{ background: pkg.color }}
                  >
                    Get Started →
                  </button>
                </div>
              ))}
            </div>

            {/* Extra Services Section */}
            <div className={styles.addonsSection}>
              <h3 className={styles.addonsTitle}>Alternative Services</h3>
              <p className={styles.addonsSubtitle}>You may not need a custom website, we have custom templates available to choose from. Click the link below to view: </p>
              <div className={styles.addonsGridBtn}>
                <Button 
                className={styles.bookCallBtn}
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              >
                <Envelope /> Book Free Consultation
              </Button>
              </div>
            </div>

            {/* Add-ons Section */}
            <div className={styles.addonsSection}>
              <h3 className={styles.addonsTitle}>Popular Add-ons</h3>
              <p className={styles.addonsSubtitle}>Customize your package with these extras</p>
              <div className={styles.addonsGrid}>
                {addOns.map((addon, index) => (
                  <div key={index} className={styles.addonCard}>
                    <div className={styles.addonIcon}>{addon.icon}</div>
                    <div className={styles.addonInfo}>
                      <h4>{addon.name}</h4>
                      <span className={styles.addonPrice}>{addon.price}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Process Section */}
            <div className={styles.processSection}>
              <h3 className={styles.processTitle}>How It Works</h3>
              <div className={styles.processGrid}>
                {process.map((step, index) => (
                  <div key={index} className={styles.processStep}>
                    <div className={styles.stepNumber}>{step.step}</div>
                    <div className={styles.stepIcon}>{step.icon}</div>
                    <h4>{step.title}</h4>
                    <p>{step.description}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* FAQ Teasers */}
            <div className={styles.faqSection}>
              <h3>Frequently Asked Questions</h3>
              <Row className={styles.faqGrid}>
                <Col md={6}>
                  <div className={styles.faqItem}>
                    <strong>❓ Do you offer payment plans?</strong>
                    <p>Yes! 50% upfront, 50% upon completion. Enterprise clients can request custom payment schedules.</p>
                  </div>
                </Col>
                <Col md={6}>
                  <div className={styles.faqItem}>
                    <strong>❓ What happens after launch?</strong>
                    <p>30-90 days of free support included. Ongoing maintenance packages available separately.</p>
                  </div>
                </Col>
                <Col md={6}>
                  <div className={styles.faqItem}>
                    <strong>❓ Can I upgrade my package later?</strong>
                    <p>Absolutely! You can upgrade anytime with prorated pricing.</p>
                  </div>
                </Col>
                <Col md={6}>
                  <div className={styles.faqItem}>
                    <strong>❓ Do you offer refunds?</strong>
                    <p>100% satisfaction guaranteed or your money back within first 14 days.</p>
                  </div>
                </Col>
              </Row>
            </div>

            {/* Call to Action */}
            <div className={styles.finalCTA}>
              <h3>Not sure which package is right for you?</h3>
              <p>Let's hop on a quick 15-min discovery call — no obligation, just honest advice.</p>
              <Button 
                className={styles.bookCallBtn}
              onClick={() => setShowForm(!showForm)}
              
              >
                <Envelope /> Book Free Consultation
              </Button>
            </div>

            {/* NEW: Consultation Form (shows when button is clicked) */}
        {showForm && (
          <Row className={styles2.Row}>
            <Col xs={12} md={8} lg={6} className="mx-auto">
              <div className={styles2.formContainer}>
                <h3 className={styles2.formTitle}>Quick Questions</h3>
                <p className={styles2.formSubtitle}>Help me prepare for our call</p>
                
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
                      className={styles2.formInput}
                    />
                  </Form.Group>

                  <Form.Group className="mb-3">
                    <Form.Label>What type of project? *</Form.Label>
                    <Form.Select
                      name="projectType"
                      value={formData.projectType}
                      onChange={handleFormChange}
                      required
                      className={styles2.formInput}
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
                      className={styles2.formInput}
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
                      className={styles2.formInput}
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
                      className={styles2.formInput}
                    />
                  </Form.Group>

                  <div className={styles2.formButtons}>
                    <Button 
                      variant="secondary" 
                      onClick={() => setShowForm(false)}
                      className={styles2.cancelButton}
                    >
                      Cancel
                    </Button>
                    <Button 
                      variant="primary" 
                      type="submit"
                      className={styles2.submitButton}
                    >
                      Send Request →
                    </Button>
                  </div>
                </Form>
              </div>
            </Col>
          </Row>
        )}

          </motion.div>
        </ScrollAnimation>
      </Container>

      
    </>
  );
};

export default Packages;