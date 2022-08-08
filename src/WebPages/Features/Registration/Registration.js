import React, { useState } from "react";
import "./Registration.css";
import registerImage from "../../../Images/login.png";
import { Container, Row, Col } from "react-bootstrap";
import Swal from "sweetalert2";
import {useNavigate} from 'react-router-dom'
import useFirebase from "../../hooks/useFirebase";
const Registration = () => {
  const [register, setRegister]= useState({})
  const { user, registerUser, isLoading, authError } = useFirebase()
  let navigate = useNavigate();

  const registerOnSubmit = (e) => {
    e.preventDefault();
    if(register.password !== register.password2){
      Swal.fire({
        position: 'center',
        icon: 'error',
        title: "Password Don't Match !! Try again",
        showConfirmButton: false,
        timer: 1500
      })
      registerUser(register.email, register.password, register.name, navigate);
      console.log(navigate)
    }
    else{
      Swal.fire({
        position: 'center',
        icon: 'success',
        title: "Registration Completed Successfully",
        showConfirmButton: false,
        timer: 1500
      })
    }
  e.target.reset()
  };
  const registerOnChange = (e) => {
    const nameField = e.target.name;
    const fieldValue = e.target.value;
    const newData = { ...register };
    newData[nameField] = fieldValue;
    setRegister(newData);
    console.log(newData);
  };
  return (
    <div className="login">
      <Container fluid>
        <Row>
          <Col xs={12} md={4} lg={4}>
            <img className="img-fluid mt-5" src={registerImage} alt="" />
          </Col>
          <Col xs={12} md={8} lg={8}>
            <div className="registration-div">
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
                      <button className="registerButton" type="submit">
                        Register
                      </button>
                    </div>
                  </div>
                </form>
                <div className="outhers-login mt-5">
                      <div className="sign-other">
                        <h3>Also Sign Up With</h3>
                      </div>
                      <div className="display-login">
                        <div className="google-div">
                          <abbr title="Google Sign In">
                            <button>
                              <i className="fa-brands fa-google fa-3x googlesIconRegister"></i>
                            </button>
                          </abbr>
                        </div>
                        <div className="facebooks-div">
                          <abbr title="Facebook Sign In">
                            <button>
                              <i className="fa-brands fa-facebook-f fa-3x facebookIconRegister"></i>
                            </button>
                          </abbr>
                        </div>
                        <div className="github-div">
                          <abbr title="Github Sign In">
                            <button>
                              <i className="fa-brands fa-github fa-3x githubIconRegister"></i>
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

export default Registration;
