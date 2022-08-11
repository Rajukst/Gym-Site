import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Container, Row, Col, ProgressBar } from "react-bootstrap";
import "./OrderSold.css";
const OrderSold = () => {
  const [course, setCourse]= useState([])
  useEffect(()=>{
    const url= 'http://localhost:5000/classes'
    fetch(url)
    .then(res=>res.json())
    .then(data=>setCourse(data))
  },[])
  return (
    <div>
      <Container fluid>
        <Row className="g-2">
          <Col xs={12} md={4} lg={4}>
            <div className="total-order">
              <div className="order-text">
                <div className="text">
                  <h5>Total Course</h5>
                  <p>Last year expencess</p>
                </div>
                <div className="numaric-number">
                  <h3 className="orders">{course.length}</h3>
                </div>
              </div>
              <div className="progresses ps-2 pe-2">
              <ProgressBar now={90} />
              </div>
              <div className="growth">
                <p>Growth</p>
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
                  <h3 className="revenue">$3M</h3>
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
                  <h3 className="followers">45,9%</h3>
                </div>
              </div>
              <div className="progresses ps-2 pe-2">
              <ProgressBar variant="success" now={40} />
              </div>
              <div className="growth">
                <p>Progress</p>
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
