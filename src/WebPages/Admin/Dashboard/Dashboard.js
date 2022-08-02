import React from "react";
import "./Dashboard.css";
import { Container, Row, Col } from "react-bootstrap";
import OrderSold from "../../Assets/OrderSoldFollower/OrderSold";
import Reports from "../../Assets/Reports/Reports";
const Dashboard = () => {
  return (
    <div>
      <Container fluid>
        <Row>
          <Col xs={12} md={2} lg={2}>
          <h2>This is Left</h2>
          </Col>
          <Col xs={12} md={10} lg={10}>
          <h1>This is Right</h1>
          <OrderSold></OrderSold>
          <Reports></Reports>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Dashboard;
