import React from "react";
import { Container, Row, Col, ProgressBar } from "react-bootstrap";
import LastMonthChart from "../../Resources/AllCharts/LastMonthChart/LastMonthChart";
import LineChartTwo from "../../Resources/AllCharts/LineChart/LineChartTwo";
import RevenueChart from "../../Resources/AllCharts/RevenueChart/RevenueChart";
import SalesMonthChart from "../../Resources/AllCharts/SalesMonthChart/SalesMonthChart";
import Img from "../../../Images/Join/speedy.png";
import "./Reports.css";
import ReportChart from "../../Resources/AllCharts/ReportChart/ReportChart";
const Reports = () => {
  return (
    <div>
      <Container fluid>
        <Row>
          <Col xs={12} md={6} lg={6}>
            <Row className="g-2 mt-2">
              <Col xs={12} md={6}>
                <div className="sales-elements">
                  <div className="sales-content">
                    <h4 className="sales-amount">$874</h4>
                    <p className="sales-amount">sales last month</p>
                    <SalesMonthChart></SalesMonthChart>
                  </div>
                </div>
              </Col>
              <Col xs={12} md={6}>
                <div className="income-elements">
                  <div className="sales-content">
                    <h4 className="sales-amount">$1283</h4>
                    <p className="sales-amount">sales Income</p>
                    <LineChartTwo></LineChartTwo>
                  </div>
                </div>
              </Col>
            </Row>
            <Row className="g-2 mt-2">
              <Col xs={12} md={6}>
                <div className="lastMonth-elements">
                  <div className="sales-content">
                    <h4 className="sales-amount">$1286</h4>
                    <p className="sales-amount">Last Month Sales</p>
                    <LastMonthChart></LastMonthChart>
                  </div>
                </div>
              </Col>
              <Col xs={12} md={6}>
                <div className="revenue-elements">
                  <div className="sales-content">
                    <h4 className="sales-amount">$564</h4>
                    <p className="sales-amount">Total Revenue</p>
                    <RevenueChart></RevenueChart>
                  </div>
                </div>
              </Col>
            </Row>
          </Col>
          <Col xs={12} md={6} lg={6} className="mt-3">
            <div className="main-head">
              <div className="band-reports">
                <div className="logo-text">
                  <img src={Img} alt="" height="50" width="70" />
                  <h4>BANDWIDTH REPORTS</h4>
                </div>
                <div className="tab-button">
                  <div className="tabButtonOne">
                    <button className="tabbuttonOne me-3">Tab 1</button>
                    <button className="tabbuttonTwo me-3">Tab 2</button>
                  </div>
                </div>
              </div>
              <div className="report-chart mt-4">
                <ReportChart></ReportChart>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Reports;
