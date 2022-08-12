import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Container, Row } from "react-bootstrap";
import DynamicOurService from "./DynamicOurService";

const OurService = () => {
  const [ourServices, setOurServices] = useState([]);
  useEffect(() => {
    const url = "http://localhost:5000/classes";
    fetch(url)
      .then((res) => res.json())
      .then((data) => setOurServices(data));
  }, []);
  return (
    <Container>
      <Row xs={1} md={3} lg={3} className="g-4 mt-5">
        {ourServices.map((getOurService) => (
          <DynamicOurService
            key={getOurService._id}
            ourService={getOurService}
          ></DynamicOurService>
        ))}
      </Row>
    </Container>
  );
};

export default OurService;
