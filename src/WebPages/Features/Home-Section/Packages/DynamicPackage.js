import React from 'react';
import { Card, Col } from 'react-bootstrap';
const DynamicPackage = ({ getClass}) => {
  const {_id, name, image, fee, description}= getClass;
    return (
        <Col>
        <Card>
         <p>{name}</p>
          <Card.Body>
          <Card.Img variant="top" src={image} />
            <Card.Title></Card.Title>
            <Card.Text>
              This is a longer card with supporting text below as a natural
              lead-in to additional content. This content is a little bit
              longer.
            </Card.Text>
          </Card.Body>
        </Card>
      </Col>
    );
};

export default DynamicPackage;