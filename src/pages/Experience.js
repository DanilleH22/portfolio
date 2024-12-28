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
        const [isMobile, setIsMobile] = useState(false);
        const [activeIndex, setActiveIndex] = useState(null);

        return (
          <Container fluid style={{ width: '100%'}}>
            <ScrollAnimation animationVariants={{
    hidden: { opacity: 0, x: -100 },
    visible: { opacity: 1, x: 0, transition: { duration: 1 } }
  }}>
  
  <Tab.Container defaultActiveKey="0">
  
  <div className={styles.JobBox}>
    <Col>
  <h1 className={styles.JobHeader}><strong>Work Experience</strong></h1>
    <Row className="mt-3 align-items-start">
      {/* Larger Screens */}
      {!isMobile && (
        <>
          <Col lg={4} xs={12} className={styles.OuterJob}>
            <Nav className={styles.Job}>
              {data.map((item, index) => (
                <Nav.Item
                  key={index}
                  className={`${styles.JobName} ${activeIndex === index ? styles.active : ''}`}
                  onClick={() => setActiveIndex(index)}
                >
                  <Nav.Link eventKey={index.toString()} style={{ color: '#B8C6D9' }}>{item.job}</Nav.Link>
                </Nav.Item>
              ))}
            </Nav>
          </Col>
          <Col lg={8} xs={12} className={styles.Description}>
            <Tab.Content style={{ width: '100%' }}>
              {data.map((item, index) => (
                <Tab.Pane eventKey={index.toString()} key={index}>
                  <h5><strong>{item.role}</strong></h5>
                  <p>{item.date}</p>
                  <ul style={{ textAlign: 'left'}}>
                    {item.description.map((point, i) => <li key={i}>{point}</li>)}
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
              className={`${styles.JobName} ${activeIndex === index ? styles.active : ''}`}
              onClick={() => setActiveIndex(index)}
            >
                <Nav.Link eventKey={index.toString()}>{item.job}</Nav.Link>
                
              </Nav.Item>
            ))}
          </Nav>
          <Tab.Content style={{ width: '75%' }}>
            {data.map((item, index) => (
              <Tab.Pane eventKey={index.toString()} key={index}>
                <h5><strong>{item.role}</strong></h5>
                <p>{item.date}</p>
                <ul>
                  {item.description.map((point, i) => <li key={i}>{point}</li>)}
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
