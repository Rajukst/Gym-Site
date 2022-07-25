import React from "react";
import { Container, Col, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import IntroPhoto from "../../../../Images/photo.png";
import "aos/dist/aos.css";
import AOS from "aos";
import "./Intro.css";
const Intro = () => {
  AOS.init();
  return (
    <div>
      <Container>
        <Row>
          <Col>
            <div className="image-profile">
              <div data-aos="fade-up" data-aos-duration="3000">
                <img
                  className="img-fluid intro-image"
                  src={IntroPhoto}
                  alt=""
                />
              </div>
            </div>
          </Col>
          <Col>
            <div data-aos="fade-up" data-aos-duration="3000">
              <div className="intro">
                <article className="mt-5 Info ">INFORMATION ABOUT US</article>
                <div className="about">
                  <p className="Introduction">
                    G.G A <span className="crossfit">CROSSFIT</span> WORKOUT
                    TRAINING CENTER
                  </p>
                  <div className="description">
                    <p>
                      Far far away, behind the word mountains, far from the
                      countries Vokalia and Consonantia, there live the blind
                      texts. Separated they live in Bookmarksgrove right at the
                      coast of the Semantics, a large language ocean.
                    </p>
                  </div>
                  <div className="description-link mt-3">
                    <div className="arrow-key me-4">
                      <i className="fa-solid fa-arrow-right-long"></i>
                    </div>
                    <div className="des-link">
                      <Link className="my-link" to="/men">
                        MEN FITNESS AND WORKOUT
                      </Link>
                    </div>
                  </div>
                  <div className="description-link mt-3">
                    <div className="arrow-key me-4">
                      <i className="fa-solid fa-arrow-right-long"></i>
                    </div>
                    <div className="des-link">
                      <Link className="my-link" to="/men">
                        WOMEN FITNESS AND WORKOUT
                      </Link>
                    </div>
                  </div>
                  <div className="description-link mt-3">
                    <div className="arrow-key me-4">
                      <i className="fa-solid fa-arrow-right-long"></i>
                    </div>
                    <div className="des-link">
                      <Link className="my-link" to="/men">
                        PERSONAL TRAININGS
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Intro;
