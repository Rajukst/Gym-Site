import React from "react";
import { Container, Row, Col, ProgressBar } from "react-bootstrap";
import LastMonthChart from "../../Resources/AllCharts/LastMonthChart/LastMonthChart";
import LineChartTwo from "../../Resources/AllCharts/LineChart/LineChartTwo";
import RevenueChart from "../../Resources/AllCharts/RevenueChart/RevenueChart";
import SalesMonthChart from "../../Resources/AllCharts/SalesMonthChart/SalesMonthChart";
import "./Reports.css"
const Reports = () => {

  return (
    <div>
      <Container fluid>
        <Row>
          <Col xs={12} md={6} lg={6}>
            <Row className="g-2 mt-2">
              <Col xs={12} md={6}>
                <div className="all-elements">
                  <div className="sales-content">
                    <h4>$874</h4>
                    <p>sales last month</p>
                    <SalesMonthChart></SalesMonthChart>
                  </div>
                </div>
              </Col>
              <Col xs={12} md={6}>
                <div className="all-elements">
                  <div className="sales-content">
                    <h4>$1283</h4>
                    <p>sales Income</p>
                    <LineChartTwo></LineChartTwo>
                  </div>
                </div>
              </Col>
            </Row>
            <Row className="g-2 mt-2">
              <Col xs={12} md={6}>
                <div className="all-elements">
                  <div className="sales-content">
                    <h4>$1286</h4>
                    <p>Last Month Sales</p>
                    <LastMonthChart></LastMonthChart>
                  </div>
                </div>
              </Col>
              <Col xs={12} md={6}>
                <div className="all-elements">
                  <div className="sales-content">
                    <h4>$564</h4>
                    <p>Total Revenue</p>
                    <RevenueChart></RevenueChart>
                  </div>
                </div>
              </Col>
            </Row>
          </Col>
          <Col xs={12} md={6} lg={6}>

          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Reports;
