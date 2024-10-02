import { Container } from 'react-bootstrap';
import Col from 'react-bootstrap/Col';
import Nav from 'react-bootstrap/Nav';
import Row from 'react-bootstrap/Row';
import Tab from 'react-bootstrap/Tab';

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

  return (
    <Container className='p-5'>
      <Tab.Container  defaultActiveKey="0">
        <Row className="mt-3">
          <Col sm={4}>
            <Nav variant="outline-secondary" className="flex-column flex-row-reverse">
              {data.map((item, index) => (
                <Nav.Item key={index}>
                  <Nav.Link eventKey={index.toString()}>{item.job}</Nav.Link>
                </Nav.Item>
              ))}
            </Nav>
          </Col>
          <Col sm={8}>
            <Tab.Content style={{ width: '80%' }}>
              {data.map((item, index) => (
                <Tab.Pane eventKey={index.toString()} key={index} >
                  <h5 className='d-flex justify-content-start ps-4'>{item.role}</h5>
                  <p className='d-flex justify-content-start ps-4'>{item.date}</p>
                  <ul style={{ listStyleType: 'circle', textAlign: 'left' }}> 
                    {item.description.map((point, i) => (
                      <li key={i}>{point}</li>
                    ))}
                  </ul>
                  
                </Tab.Pane>
              ))}
            </Tab.Content>
          </Col>
        </Row>
      </Tab.Container>
    </Container>
  );
}

export default Experience;
