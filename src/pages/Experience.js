import React from 'react'
import Accordion from 'react-bootstrap/Accordion';

export default function Experience() {

    let data = [
        {
            job: "Eon via First Source",
            role: "Customer Service Representative",
            description: "Managed and updated customer information in company database, ensuring accuracy and data integrity. Created and maintained documentation for common customer issues. Collaborated with the team to identify and implement process improvements that increased efficiency and customer satisfaction",
            date: "2023-Present"
        },
        {
          job: "Birmingham Solihull Foundation Trust",
          role: "Healthcare Assistant",
          description: "Analyzed patients conditions to determine appropriate mental health interventions, while implementing effective solutions for managing patient crises. Collaborated with multidisciplinary team develop and implement patient care plans and communicated complex patient care information. Maintained high standards of data accuracy and documentation",
          date: "2023-Present"
      },
      {
        job: "Capita via Blue Arrow",
        role: "Screening Officer",
        description: "Reviewed large volumes of data to identify discrepancies and inconsistencies and inconsistencies. Leveraged specialized software and databases to manage and organize background check information. Conducted reguar audits of background check procedures to ensure high standards of accuracy and reliability",
        date: "2021-2021"
    },
    {
      job: "Queen Elizabeth Hospital - NHS",
      role: "Laboratory Assistant",
      description: "• Operated and maintained laboratory management systems. Executed quality control tests to ensure laboratory equipment and procedures met regulatory standards. Compiled and interpreted laboratory data ensuring accurate and timely results",
      date: "2021-2021"
  }
    ]

    return (
      <div>
      <h1>Experience</h1>
      <Accordion defaultActiveKey="0">
        {
            data.map((item, index) => (
                <Accordion.Item eventKey={index.toString()} key={index}>
                    <Accordion.Header>
                      <div style={{ display: 'flex', justifyContent: 'space-between', width: '100%' }}>
                        <h5>{item.job}</h5>
                        <h6>{item.date}</h6>
                      </div>
                    </Accordion.Header>
                    <Accordion.Body>
                        <strong>Job Role: </strong> {item.role}
                        <br />
                        {item.description}
                    </Accordion.Body>
                </Accordion.Item>
            ))
        }
      </Accordion>
    </div>
    );
    
} 

  

