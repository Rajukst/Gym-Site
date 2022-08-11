import React from "react";
import { Card, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
const DynamicClass = ({ getClass }) => {
  const { _id, name, image, fee, description } = getClass;
  return (
    <div>
      <Col>
        <div className="containerss">
          <div className="rows">
            <div className="aaaaa">
              <div className="card border-0">
                <div className="card-bodys">
                  <div className="icon-button"></div>
                  <Link to={`/single-item/${_id}`}>
                    <img
                      src={image}
                      className="img-fluid p-1"
                      alt="Girl in a jacket"
                    />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Col>
    </div>
  );
};

export default DynamicClass;
