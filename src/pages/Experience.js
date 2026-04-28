import { Container } from 'react-bootstrap';
import Col from 'react-bootstrap/Col';
import Nav from 'react-bootstrap/Nav';
import Row from 'react-bootstrap/Row';
import Tab from 'react-bootstrap/Tab';
import styles from "../styles/Experience.module.css";
import { useState, useEffect } from 'react';
import ScrollAnimation from '../components/ScrollAnimation';
import { Briefcase, Code, Star } from 'react-bootstrap-icons';;

function Experience() {

  // NEW: Freelance/Client work data (connects to your projects)
  const freelanceData = [
    {
      job: "The SkinTech",
      role: "Front End Developer (Freelance)",
      description: [
        "Built a custom portfolio website to showcase client's photography and videography work",
        "Implemented responsive design for optimal viewing across all devices",
        "Optimized images and assets to reduce page load time by 60%",
        "Integrated contact forms and gallery features for client inquiries",
        "Delivered project within 2-week timeline with 100% client satisfaction"
      ],
      date: "2026",
      projectLink: "https://skintech-website.webflow.io/",
      technologies: ["React", "HTML5", "CSS3", "Responsive Design"],
      result: "Increased client inquiries by 40%",
      isFreelance: true
    },
    {
      job: "LA4K",
      role: "Front End Developer (Freelance)",
      description: [
        "Built a custom portfolio website to showcase client's photography and videography work",
        "Implemented responsive design for optimal viewing across all devices",
        "Optimized images and assets to reduce page load time by 60%",
        "Integrated contact forms and gallery features for client inquiries",
        "Delivered project within 2-week timeline with 100% client satisfaction"
      ],
      date: "2026",
      projectLink: "https://la4k.co.uk",
      technologies: ["React", "HTML5", "CSS3", "Responsive Design"],
      result: "Increased client inquiries by 40%",
      isFreelance: true
    },
    {
      job: "Solayulm",
      role: "Full Stack Developer (Freelance)",
      description: [
        "Developed a sustainability-focused blog platform to scale from 100 to 10,000 monthly visitors",
        "Implemented SEO best practices improving search ranking by 85%",
        "Created responsive layouts and optimized performance across devices",
        "Built custom React components for dynamic content display",
        "Provided ongoing maintenance and feature updates post-launch"
      ],
      date: "2026",
      projectLink: "https://solayulm.co.uk",
      technologies: ["React", "HTML5", "CSS3", "SEO Optimization"],
      result: "Bounce rate decreased by 45%",
      isFreelance: true
    }
  ];

  // Your existing employment data
  let employmentData = [
    {
      job: "First Source",
      role: "Senior Analyst - Ops BI",
      description: [
        "Analyse operational and performance data to identify trends, inefficiencies, and improvement opportunities.",
        "Build and maintain reports and dashboards to track KPIs, SLAs, and operational performance.",
        "Interpret large datasets to support strategic and day-to-day decision-making.",
        "Partner with cross-functional stakeholders to understand business needs and deliver data-driven solutions.",
        "Ensure data accuracy, consistency, and reliability across reporting outputs.",
        "Use SQL and SQL Server Management Studio (SSMS) to query, filter, and analyse operational datasets.",
        "Identify inefficiencies and trends within operational data to support process improvement initiatives.",
        "Use Power Automate to streamline manual workflows and improve operational efficiency.",
      ],
      date: "Jun 2025 - Present",
      isFreelance: false
    },
    {
      job: "Eon via First Source",
      role: "Customer Service Representative",
      description: [
        "Managed and updated customer information in company database, ensuring accuracy and data integrity.",
        "Created and maintained documentation for common customer issues.",
        "Collaborated with the team to identify and implement process improvements that increased efficiency and customer satisfaction",
      ],
      date: "Nov 2023 - Jun 2025",
      isFreelance: false
    },
    {
      job: "Birmingham Solihull Foundation Trust",
      role: "Healthcare Assistant",
      description: [
        "Analyzed patients conditions to determine appropriate mental health interventions, while implementing effective solutions for managing patient crises.",
        "Collaborated with multidisciplinary team develop and implement patient care plans and communicated complex patient care information.",
        "Maintained high standards of data accuracy and documentation"
      ],
      date: "2023 - Present",
      isFreelance: false
    },
    {
      job: "Capita via Blue Arrow",
      role: "Screening Officer",
      description: [
        "Reviewed large volumes of data to identify discrepancies and inconsistencies.",
        "Leveraged specialized software and databases to manage and organize background check information.",
        "Conducted regular audits of background check procedures to ensure high standards of accuracy and reliability"
      ],
      date: "2021",
      isFreelance: false
    },
  ];

  // Combine freelance work FIRST, then employment
  let data = [...freelanceData, ...employmentData];
  
  const [isMobile, setIsMobile] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);

  // Check for mobile view
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  return (
    <Container fluid className={styles.Container}>
      <ScrollAnimation animationVariants={{
        hidden: { opacity: 0, x: -100 },
        visible: { opacity: 1, x: 0, transition: { duration: 1 } }
      }}>

         <h1 className={styles.JobHeader}>
                <strong className={styles.strongHeader}>Experience & Freelance Work</strong>
              </h1>

         {/* NEW: Summary stats for freelance work */}
              <div className={styles.freelanceSummary}>
                <div className={styles.summaryItem}>
                  <Briefcase className={styles.summaryIcon} />
                  <span>{freelanceData.length}+ Freelance Clients</span>
                </div>
                <div className={styles.summaryItem}>
                  <Code className={styles.summaryIcon} />
                  <span>100% Client Satisfaction</span>
                </div>
                <div className={styles.summaryItem}>
                  <Star className={styles.summaryIcon} />
                  <span>2-4 Week Delivery</span>
                </div>
              </div>

        <Tab.Container activeKey={activeIndex.toString()} onSelect={(k) => setActiveIndex(parseInt(k))}>
          <div className={styles.JobBox}>
            <Col style={{ backgroundColor: '#011117' }}>
             
              
             

              <Row className={`${styles.customRow} mt-3 align-items-start`}>
                {/* Larger Screens */}
                {!isMobile && (
                  <>
                    <Col lg={4} xs={12} className={styles.OuterJob}>
                      <Nav className={styles.Job}>
                        {data.map((item, index) => (
                          <Nav.Item
                            key={index}
                            className={`${styles.JobName} ${activeIndex === index ? styles.active : ''} ${item.isFreelance ? styles.freelanceJob : ''}`}
                            onClick={() => setActiveIndex(index)}
                          >
                            <Nav.Link eventKey={index.toString()} style={{ color: '#cfd8e8' }}>
                              {item.isFreelance && <Briefcase className={styles.navIcon} />}
                              {item.job}
                              {item.isFreelance && <span className={styles.freelanceBadge}>Freelance</span>}
                            </Nav.Link>
                          </Nav.Item>
                        ))}
                      </Nav>
                    </Col>
                    <Col lg={8} xs={12} className={styles.Description}>
                      <Tab.Content style={{ width: '100%', backgroundColor: '#011117' }}>
                        {data.map((item, index) => (
                          <Tab.Pane eventKey={index.toString()} key={index} className={styles.CustomPane}>
                            <div className={styles.roleHeader}>
                              <h5><strong>{item.role}</strong></h5>
                              {item.isFreelance && (
                                <a href={item.projectLink} target="_blank" rel="noopener noreferrer" className={styles.projectLink}>
                                  View Project →
                                </a>
                              )}
                            </div>
                            <p className={styles.date}>{item.date}</p>
                            
                            {/* Show technologies for freelance work */}
                            {item.technologies && (
                              <div className={styles.techStack}>
                                <strong>Tech Stack:</strong>
                                <div className={styles.techTags}>
                                  {item.technologies.map((tech, i) => (
                                    <span key={i} className={styles.techTag}>{tech}</span>
                                  ))}
                                </div>
                              </div>
                            )}

                            {/* Show result for freelance work */}
                            {item.result && (
                              <div className={styles.resultHighlight}>
                                <Star className={styles.resultIcon} />
                                <strong className={styles.resultIconStrong}>Key Result:</strong> {item.result}
                              </div>
                            )}
                            
                            <ul style={{ textAlign: 'left' }}>
                              {item.description.map((point, i) => (
                                <li key={i}>{point}</li>
                              ))}
                            </ul>
                          </Tab.Pane>
                        ))}
                      </Tab.Content>
                    </Col>
                  </>
                )}

                {/* Mobile Screens */}
                {isMobile && (
                  <Col xs={12} className={styles.TabContainer}>
                    <Nav variant="tabs" className="flex-column">
                      {data.map((item, index) => (
                        <Nav.Item
                          key={index}
                          className={`${styles.JobName} ${activeIndex === index ? styles.active : ''} ${item.isFreelance ? styles.freelanceJob : ''}`}
                          onClick={() => setActiveIndex(index)}
                        >
                          <Nav.Link eventKey={index.toString()}>
                            {item.isFreelance && <Briefcase />} {item.job}
                          </Nav.Link>
                        </Nav.Item>
                      ))}
                    </Nav>
                    <Tab.Content style={{ width: '100%' }}>
                      {data.map((item, index) => (
                        <Tab.Pane eventKey={index.toString()} key={index}>
                          <div className={styles.roleHeader}>
                            <h5><strong>{item.role}</strong></h5>
                            {item.isFreelance && (
                              <a href={item.projectLink} target="_blank" rel="noopener noreferrer" className={styles.projectLink}>
                                View Project →
                              </a>
                            )}
                          </div>
                          <p>{item.date}</p>
                          
                          {item.technologies && (
                            <div className={styles.techStack}>
                              <strong>Tech Stack:</strong>
                              <div className={styles.techTags}>
                                {item.technologies.map((tech, i) => (
                                  <span key={i} className={styles.techTag}>{tech}</span>
                                ))}
                              </div>
                            </div>
                          )}

                          {item.result && (
                            <div className={styles.resultHighlight}>
                              <strong>✨ Result:</strong> {item.result}
                            </div>
                          )}
                          
                          <ul>
                            {item.description.map((point, i) => (
                              <li key={i}>{point}</li>
                            ))}
                          </ul>
                        </Tab.Pane>
                      ))}
                    </Tab.Content>
                  </Col>
                )}
              </Row>
            </Col>
          </div>
        </Tab.Container>
      </ScrollAnimation>
    </Container>
  );
}

export default Experience;