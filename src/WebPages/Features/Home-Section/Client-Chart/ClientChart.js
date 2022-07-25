import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import CountUp from "react-countup";
import "./ClientChart.css";
const ClientChart = () => {
  return (
    <div>
      <Container>
        <Row>
          <Col>
            <div className="client-chart">
              <div className="experience">
               <h1><CountUp delay={2} end={30}/>+</h1>
                <p>YEARS OF EXPERIENCED</p>
              </div>
              <div className="trainers">
              <h1><CountUp delay={2} end={100}/>+</h1>
                <p>FITNESS TRAINERS</p>
              </div>
              <div className="equipments">
              <h1><CountUp delay={2} end={310}/>+</h1>
                <p>BEST EQUIPMENTS</p>
              </div>
              <div className="clients">
              <h1><CountUp delay={2} end={10}/>K+</h1>
                <p>SATISFIED CLIENTS</p>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default ClientChart;
