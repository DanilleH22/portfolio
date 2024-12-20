import { Container } from 'react-bootstrap';
import Col from 'react-bootstrap/Col';
import Nav from 'react-bootstrap/Nav';
import Row from 'react-bootstrap/Row';
import Tab from 'react-bootstrap/Tab';
import styles from "../styles/Experience.module.css";
import { useState } from 'react';
import ScrollAnimation from '../components/ScrollAnimation';

function Experience() {

  let data = [
            {
                job: "Eon via First Source",
                role: "Customer Service Representative",
                description: [
                  "Managed and updated customer information in company database, ensuring accuracy and data integrity." ,
                  "Created and maintained documentation for common customer issues.",
                  "Collaborated with the team to identify and implement process improvements that increased efficiency and customer satisfaction",
                ],
                date: "2023-Present"
            },
            {
              job: "Birmingham Solihull Foundation Trust",
              role: "Healthcare Assistant",
              description: [
                "Analyzed patients conditions to determine appropriate mental health interventions, while implementing effective solutions for managing patient crises." ,
                "Collaborated with multidisciplinary team develop and implement patient care plans and communicated complex patient care information.", 
                "Maintained high standards of data accuracy and documentation"
              ],
              date: "2023-Present"
          },
          {
            job: "Capita via Blue Arrow",
            role: "Screening Officer",
            description: [
              "Reviewed large volumes of data to identify discrepancies and inconsistencies and inconsistencies.", 
              "Leveraged specialized software and databases to manage and organize background check information.", 
              "Conducted reguar audits of background check procedures to ensure high standards of accuracy and reliability"
            ],
            date: "2021-2021"
        },
        {
          job: "Queen Elizabeth Hospital - NHS",
          role: "Laboratory Assistant",
          description: [
            "Operated and maintained laboratory management systems.", 
            "Executed quality control tests to ensure laboratory equipment and procedures met regulatory standards.",
            "Compiled and interpreted laboratory data ensuring accurate and timely results",
          ],
          date: "2021-2021"
      }
        ]

        const [activeIndex, setActiveIndex] = useState(null);

        return (
          <Container fluid style={{ maxWidth: '1000px' }}>
            <ScrollAnimation animationVariants={{
    hidden: { opacity: 0, x: -100 },
    visible: { opacity: 1, x: 0, transition: { duration: 1 } }
  }}>
  
            <Tab.Container defaultActiveKey="0">
            <h1 className={styles.JobHeader}><strong>Work Experience</strong></h1>
              <div className={styles.JobBox}>
              <Row className="mt-3 align-items-start">
                {/* Left Column with Job List */}
                <Col lg={4} xs={12} className={styles.OuterJob}>
                  <Nav className={styles.Job}>
                    {data.map((item, index) => (
                      <Nav.Item
                      key={index}
                      className={`${styles.JobName} ${activeIndex === index ? styles.active : ''}`}
                      style={{ marginBottom: '5px' }} 
                      onClick={() => setActiveIndex(index)}
                    >                    
                        <Nav.Link eventKey={index.toString()} className='text-start' style={{ color: '#B8C6D9' }}>
                          {item.job}
                        </Nav.Link>
                      </Nav.Item>
                    ))}
                  </Nav>
                </Col>
      
                {/* Right Column with Job Details */}
                <Col lg={8} xs={12} className={styles.Description}>
                  <Tab.Content style={{ width: '100%' }}>
                    {data.map((item, index) => (
                      <Tab.Pane eventKey={index.toString()} key={index}>
                        <h5 className='d-flex justify-content-start ps-4'>
                          <strong>{item.role}</strong>
                        </h5>
                        <p className='d-flex justify-content-start ps-4'>{item.date}</p>
                        <ul style={{ listStyleType: 'circle', textAlign: 'left', color: '#B8C6D9' }}>
                          {item.description.map((point, i) => (
                            <li key={i}>{point}</li>
                          ))}
                        </ul>
                      </Tab.Pane>
                    ))}
                  </Tab.Content>
                </Col>
              </Row>
              </div>
            </Tab.Container>
            </ScrollAnimation>
          </Container>
        );
      }

export default Experience;
