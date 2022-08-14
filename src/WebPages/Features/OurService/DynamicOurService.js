import React from 'react';
import { Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import "./DynamicService.css"
const DynamicOurService = ({ourService}) => {
    const { _id, name, image, fee, description } = ourService;
    return (
      <>
        <Col>
        <div className="containerss">
          <div className="rows">
            <div className="aaaaa">
              <div className="card border-0">
                <div className="card-bodys">
                  <div className="icon-button"></div>
                  <Link to={`/services/${_id}`}>
                    <img
                      src={image}
                      className="img-fluid p-1 hoverImgage"
                      alt="Girl in a jacket"
                    />
                  </Link>
                  <div className="descriptions">
                    <h4>{name}</h4>
                    <p>{description.slice(0,100)}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Col>
      </>
    );
};

export default DynamicOurService;