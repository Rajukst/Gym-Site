import React from "react";
import "./Registration.css";
import registerImage from "../../../Images/login.png";
import { Container, Row, Col } from "react-bootstrap";
const Registration = () => {
  const registerOnSubmit = (e) => {
    e.preventDefault();
    alert("register Button Clicked");
    e.target.reset();
  };
  const registerOnChange = (e) => {
    
  };
  return (
    <div className="login">
      <Container fluid>
        <Row>
          <Col xs={12} md={4} lg={4}>
            <img className="img-fluid mt-5" src={registerImage} alt="" />
          </Col>
          <Col xs={12} md={8} lg={8}>
            <div className="login-div">
              <h1>User Registration </h1>
              <div className="login-continer">
                <form onSubmit={registerOnSubmit}>
                  <br />
                  <br />
                  <input
                    type="text"
                    name="name"
                    id=""
                    onChange={registerOnChange}
                    placeholder="Your Name"
                    required
                  />
                  <br />
                  <br />
                  <input
                    type="email"
                    name="email"
                    id=""
                    onChange={registerOnChange}
                    placeholder="Your Email"
                    required
                  />
                  <br />
                  <br />
                  <input
                    type="number"
                    name="mobile"
                    id=""
                    onChange={registerOnChange}
                    placeholder="Your Mobile No"
                    required
                  />
                  <br />
                  <br />
                  <input
                    type="password"
                    name="password"
                    id=""
                    onChange={registerOnChange}
                    placeholder="Password"
                    required
                  />
                  <br />
                  <br />
                  <input
                    type="password"
                    name="password2"
                    id=""
                    onChange={registerOnChange}
                    placeholder="Re-type Password"
                    required
                  />
                  <br />
                  <br />
                  <br />
                  <div>
                    <div>
                      <button className="submitButton" type="submit">
                        Register
                      </button>
                    </div>
                    <div className="outhers-login mt-5">
                      <div className="sign-other">
                        <h3>Also Sign Up With</h3>
                      </div>
                      <div className="display-login">
                        <div className="google">
                          <abbr title="Google Sign In">
                            <button>
                              <i className="fa-brands fa-google fa-3x googlesIcon"></i>
                            </button>
                          </abbr>
                        </div>
                        <div className="facebooks">
                          <abbr title="Facebook Sign In">
                            <button>
                              <i className="fa-brands fa-facebook-f fa-3x facebookIcon"></i>
                            </button>
                          </abbr>
                        </div>
                        <div className="githubs">
                          <abbr title="Github Sign In">
                            <button>
                              <i class="fa-brands fa-github fa-3x githubIcon"></i>
                            </button>
                          </abbr>
                        </div>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Registration;
