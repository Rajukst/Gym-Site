import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import PieChart from "../Resources/AllCharts/PieChartCustomer/PieChart";
import Visitors from "../Resources/AllCharts/Visitors/Visitors";
import "./Customers.css"
const Customers = () => {
  return (
    <div>
      <Container fluid>
        <Row className="g-2 mt-2">
          <Col xs={12} md={6} lg={6} >
         <div className="visitors">
         <Visitors></Visitors>
         </div>
          </Col>
          <Col xs={12} md={6} lg={6}>
            <div className="visitors">
            <PieChart></PieChart>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Customers;
