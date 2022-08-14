import React, { useEffect, useState } from 'react';
import "./PriceAndPackage.css"
import { Row, Container, Col } from 'react-bootstrap';
import DynamicPackage from './DynamicPackage';
const PricingAndPackage = () => {

    return (
        <div>
            <p className="mt-4">OUR PRICING</p>
            <h1 className="pricePackage">PRICING & <span className="package-span">PACKAGES</span></h1>
            <Container>
      <Row>
        <Col>1 of 2</Col>
        <Col>2 of 2</Col>
        <Col>2 of 2</Col>
      </Row>
    </Container>
        </div>
    );
};

export default PricingAndPackage;