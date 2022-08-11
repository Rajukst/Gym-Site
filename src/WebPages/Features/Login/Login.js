import React, { useState } from "react";
import { Container, Row, Col, Alert } from "react-bootstrap";
import Swal from "sweetalert2";
import loginImage from "../../../Images/register.png";
import useFirebase from "../../hooks/useFirebase";
import "./Login.css";
const Login = () => {
  const [signInUser, setSignInUser] = useState({});
  const { user, loginUser, signWithGoogle, isLoading, authError } =
    useFirebase();

  const handleFormSubmit = (e) => {
    e.preventDefault();
    loginUser(signInUser.email, signInUser.password);
    e.target.reset();
  };

  const handleOnBlur = (e) => {
    const nameField = e.target.name;
    const fieldValue = e.target.value;
    const newData = { ...signInUser };
    newData[nameField] = fieldValue;
    setSignInUser(newData);
  };

  return (
    <div className="login">
      <Container fluid>
        <Row>
          <Col xs={12} md={4} lg={4}>
            <img
              className="img-fluid mt-5"
              src={loginImage}
              alt="login image"
            />
          </Col>
          <Col xs={12} md={8} lg={8}>
            <div className="login-div">
              <h1>User login </h1>
              <div className="login-continer">
                <form onSubmit={handleFormSubmit}>
                  <br />
                  <br />
                  <input
                    type="email"
                    name="email"
                    id=""
                    onChange={handleOnBlur}
                    placeholder="Your Email"
                    required
                  />
                  <br />
                  <br />
                  <input
                    type="password"
                    name="password"
                    id=""
                    onChange={handleOnBlur}
                    placeholder="Password"
                    required
                  />
                  <br />
                  <br />
                  <br />
                  <div>
                    <div>
                      <button className="submitButton" type="submit">
                        Login
                      </button>
                    </div>
                  </div>
                </form>
       
                <div className="outhers-login mt-5">
                  <div className="sign-other">
                    <h3>Also Sign In With</h3>
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
                          <i className="fa-brands fa-github fa-3x githubIcon"></i>
                        </button>
                      </abbr>
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

export default Login;
