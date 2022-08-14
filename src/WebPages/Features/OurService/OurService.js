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
    <>
      <div className="banner">
        <h1 className="gymServices pt-5">Gym Services</h1>
      </div>

      <Container>
        {ourServices.length === 0 && <CustomSpinner></CustomSpinner>}
        <Row xs={1} md={3} lg={3} className="g-4 m-5">
          {ourServices.map((getOurService) => (
            <DynamicOurService
              key={getOurService._id}
              ourService={getOurService}
            ></DynamicOurService>
          ))}
        </Row>
      </Container>
      <h3 className="mt-5">
        With Fitness Club Gyms all over the world, each facility offers <br />{" "}
        services unique to the area & needs of its members.{" "}
      </h3>
      <p>
        Below are some of the services & features found at Powerhouse Gyms
        worldwide. <br /> For services available in your area, please visit our
        locations page to find your gym’s unique offerings.{" "}
      </p>
    </>
  );
};

export default OurService;
