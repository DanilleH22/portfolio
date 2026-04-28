// src/components/Packages.jsx
import React, { useState } from 'react';
import { Container, Row, Col, Button, Modal } from 'react-bootstrap';
import { Check, Star, Rocket, Crown, Clock, ChartLine, Code, Mobile, Database, MineCart, Envelope, CalendarAlt } from 'react-bootstrap-icons';
import styles from '../styles/Packages.module.css';
import ScrollAnimation from '../components/ScrollAnimation';
import { motion } from 'framer-motion';

const Packages = () => {
  const [showModal, setShowModal] = useState(false);
  const [selectedPackage, setSelectedPackage] = useState(null);

  const handleShowModal = (pkg) => {
    setSelectedPackage(pkg);
    setShowModal(true);
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
              <div className={styles.addonsGrid}>
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
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              >
                <Envelope /> Book Free Consultation
              </Button>
            </div>
          </motion.div>
        </ScrollAnimation>
      </Container>

      {/* Quote Request Modal */}
      <Modal show={showModal} onHide={() => setShowModal(false)} centered className={styles.quoteModal}>
        <Modal.Header closeButton className={styles.modalHeader}>
          <Modal.Title>Request a Quote for {selectedPackage?.name}</Modal.Title>
        </Modal.Header>
        <Modal.Body className={styles.modalBody}>
          <form>
            <input type="text" placeholder="Your Name" className={styles.modalInput} />
            <input type="email" placeholder="Your Email" className={styles.modalInput} />
            <input type="tel" placeholder="Phone (optional)" className={styles.modalInput} />
            <textarea placeholder="Tell me about your project..." rows="4" className={styles.modalTextarea}></textarea>
            <button className={styles.submitBtn}>Send Request →</button>
          </form>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default Packages;