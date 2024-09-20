import React from 'react'
import Row from 'react-bootstrap/Row';


export default function ContactMe() {

    let data = [
        {
            email: "hamiltonkdanille@hotmail.com",
            linkedin: "www.linkedin.com/in/danille-hamilton-971b29206",
            
        }
       
    ]

    return (
      <div>
      <h1 className='heading'>Contact Me</h1>
        {
            data.map((item, index) => (
                <Row eventKey={index.toString()} key={index}>
                    <p>
                        <strong> Email: </strong> {item.email}
                    </p>
<a href="www.linkedin.com/in/danille-hamilton-971b29206"> LinkedIn </a>
                    
                </Row>
            ))
        }
    </div>
    );
    
} 
