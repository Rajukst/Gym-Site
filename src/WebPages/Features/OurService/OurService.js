import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Container, Row } from "react-bootstrap";
import useFirebase from "../../hooks/useFirebase";
import CustomSpinner from "../CustomSpinner/CustomSpinner";
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
    
    <Container fluid>
    {ourServices.length===0 && <CustomSpinner></CustomSpinner>}
      <Row xs={1} md={4} lg={4} className="g-4 mt-5">
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
