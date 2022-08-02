import React from "react";
import { Container, Row, Col, ProgressBar } from "react-bootstrap";
import "./OrderSold.css";
const OrderSold = () => {
  return (
    <div>
      <Container fluid>
        <Row className="g-2">
          <Col xs={12} md={4} lg={4}>
            <div className="total-order">
              <div className="order-text">
                <div className="text">
                  <h5>Total Order</h5>
                  <p>Last year expencess</p>
                </div>
                <div className="numaric-number">
                  <h3>1896</h3>
                </div>
              </div>
              <div className="progresses ps-2 pe-2">
              <ProgressBar now={90} />
              </div>
              <div className="growth">
                <p>YoY Growth</p>
                <p>100%</p>
              </div>
            </div>
          </Col>
          <Col xs={12} md={4} lg={4}>
          <div className="total-order">
              <div className="order-text">
                <div className="text">
                  <h5>Product Sold</h5>
                  <p>Revenue Streams</p>
                </div>
                <div className="numaric-number">
                  <h3>$3M</h3>
                </div>
              </div>
              <div className="progresses ps-2 pe-2">
              <ProgressBar variant="danger" now={80} />
              </div>
              <div className="growth">
                <p>Sales</p>
                <p>100%</p>
              </div>
            </div>
          </Col>
          <Col xs={12} md={4} lg={4}>
          <div className="total-order">
              <div className="order-text">
                <div className="text">
                  <h5>Followers</h5>
                  <p>People Interested</p>
                </div>
                <div className="numaric-number">
                  <h3>45,9%</h3>
                </div>
              </div>
              <div className="progresses ps-2 pe-2">
              <ProgressBar variant="success" now={40} />
              </div>
              <div className="growth">
                <p>Twitter Progress</p>
                <p>100%</p>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default OrderSold;
