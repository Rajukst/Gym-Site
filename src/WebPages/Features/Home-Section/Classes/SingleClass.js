import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Link, useParams } from "react-router-dom";
import "aos/dist/aos.css";
import AOS from "aos";
import { Container, Row, Col } from "react-bootstrap";
import "./SingleClass.css";
const SingleClass = () => {
  AOS.init();
  let { userId } = useParams();
  const [classes, setClasses] = useState({});
  useEffect(() => {
    const url = `http://localhost:5000/place-order/${userId}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setClasses(data));
  }, []);
  return (
    <Container>
      <h1 className="mt-3 mb-5">
        Showing <span className="names">{classes.name}</span> with Details:
      </h1>
      <Row>
        <Col className="my-col">
          <div
            data-aos="flip-left"
            data-aos-easing="ease-out-cubic"
            data-aos-duration="3000"
          >
            <img src={classes.image} alt="" />
          </div>
        </Col>
        <Col className="my-col">
          <div className="my-class">
            <div data-aos="fade-up" data-aos-duration="3000">
              <h2>
                Course <span>Details</span>
              </h2>
            </div>
            <div data-aos="fade-up" data-aos-duration="3000">
              <h3>Class Fee: ${classes.fee}</h3>
            </div>
            <div data-aos="fade-up" data-aos-duration="3000">
              <p>Info: {classes.description}</p>
            </div>
            <div className="tips">
              <h4>Tips</h4>
              <p>{classes.tips}</p>
            </div>
            <div className="tips">
              <h4>Muscles Work</h4>
              <p>{classes.atvantage}</p>
            </div>
          </div>
          <div
            data-aos="fade-down"
            data-aos-easing="linear"
            data-aos-duration="1500"
          >
           <Link to="/our-service"> <button class="purchaseButton" role="button">
              <span class="text"><i className="fa-solid fa-arrow-left-long "></i> Back</span>
            </button></Link>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default SingleClass;
