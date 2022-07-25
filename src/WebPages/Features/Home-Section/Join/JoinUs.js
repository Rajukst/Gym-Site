import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./JoinUs.css";
import joinPhoto from "../../../../Images/Join/cartoon.png";
import joinPhotoTwo from "../../../../Images/Join/cartoon1.jpg";
import joinPhotoThree from "../../../../Images/Join/cartoon2.jpg";
import "aos/dist/aos.css";
import AOS from "aos";
const JoinUs = () => {
  AOS.init();
  return (
    <div>
      <div data-aos="fade-up" data-aos-duration="3000">
        <p className="mt-5 join-now">
          JOIN US <span className="join-span">NOW</span>
        </p>
      </div>
      <div data-aos="fade-up" data-aos-duration="3000">
      <h1>JOIN US OUR FREE WORKOUT</h1>
        <h1>
          TRAINING WITH <span className="join-span">GG</span>
        </h1>
      </div>     
        <Container>
          <Row>
            <Col className="join-column">
            <div className="first-row">
                <img
                  className="join-details"
                  src={joinPhotoThree}
                  alt=""
                  width="150"
                  height="150"
                />
                <h3 className="mt-3">FREE FITNESS TRAINING</h3>
                <p className="join-description">
                  A small river named Duden flows by their place and supplies it
                  with the necessary regelialia. It is a paradisematic country,
                  in which roasted parts of sentences fly into your mouth.
                </p>
              </div>
       
            </Col>
            <Col>
              <div className="first-row">
                <img
                  className="join-details"
                  src={joinPhotoTwo}
                  alt=""
                  width="150"
                  height="150"
                />
                <div data-aos="zoom-in" data-aos-duration="3000">
                <h3 className="mt-3">TONS OF CARDIO & STRENGTH</h3>
                </div>
                <p className="join-description">
                  A small river named Duden flows by their place and supplies it
                  with the necessary regelialia. It is a paradisematic country,
                  in which roasted parts of sentences fly into your mouth.
                </p>
              </div>
            </Col>
            <Col className="join-columnTwo">
              <div className="first-row">
                <img
                  className="join-details"
                  src={joinPhoto}
                  alt=""
                  width="150"
                  height="150"
                />
                <div data-aos="zoom-in" data-aos-duration="3000">
                <h3 className="mt-3">NO COMMENTMENT MEMBERSHIPS</h3>
                </div>
                <p className="join-description">
                  A small river named Duden flows by their place and supplies it
                  with the necessary regelialia. It is a paradisematic country,
                  in which roasted parts of sentences fly into your mouth.
                </p>
              </div>
            </Col>
          </Row>
        </Container>
   
    </div>
  );
};

export default JoinUs;
