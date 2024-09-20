import React from 'react'
import Accordion from 'react-bootstrap/Accordion';

export default function MyAccordion() {

    let data = [
        {
            name: "EcoLifeHub",
            description: "Lorem ipsum"
        },
        {
            name: "Simpsons Smash",
            description: "Lorem ipsum"
        },
        {
            name: "Which Tv Character Are You?",
            description: "Lorem ipsum"
        },
        {
            name: "Inkpad",
            description: "Lorem ipsum"
        },
        {
            name: "Innovevent",
            description: "Lorem ipsum"
        },
    ]

    return (
        <div>
          <h1> Projects </h1>
        <Accordion defaultActiveKey="0">
            {
                data.map((item, index) => (
                    <Accordion.Item eventKey={index.toString()} key={index}>
                        <Accordion.Header>{item.name}</Accordion.Header>
                        <Accordion.Body>
                            {item.description}
                        </Accordion.Body>
                    </Accordion.Item>
                ))
            }
        </Accordion>
        </div>
    );
    
} 

  

