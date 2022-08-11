import React, { useState, useEffect } from "react";
import "./Classes.css";
import { Row } from "react-bootstrap";
import DynamicClass from "./DynamicClass";
import { Link } from "react-router-dom";
const Classes = () => {
  const [classes, setClasses] = useState([]);
  useEffect(() => {
    const url = "http://localhost:5000/classes";
    fetch(url)
      .then((res) => res.json())
      .then((data) => setClasses(data));
  }, []);
  return (
    <div>
      <p className="our-class mt-4">OUR CLASSES</p>
      <h1>
        GG WORKOUT <span className="class-span">CLASSES</span>
      </h1>
      <Row xs={12} md={2} lg={4} className="m-1">
        {classes.slice(1, 5).map((singleClass) => (
          <DynamicClass
            key={singleClass._id}
            getClass={singleClass}
          ></DynamicClass>
        ))}
      </Row>

     <div className="seeMoreLink">
     <Link to="/service"> <p className="moreClass">
        <span className="seeSpan">See</span> More Classes
      </p></Link>
     </div>
    </div>
  );
};

export default Classes;
