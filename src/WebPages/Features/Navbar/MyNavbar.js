import React from 'react';
import {Container, Navbar, Nav} from 'react-bootstrap'
import { Link } from 'react-router-dom';
import navimage from "../../../Images/navimg.png"
import useFirebase from '../../hooks/useFirebase';
import "./MyNavbar.css"
const MyNavbar = () => {
  const {user, logOut}= useFirebase();
    return (
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
        <Link to="/"> <img src={navimage} alt="" height="50" width="70" /> </Link>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <div className="navigationsLink">
            <Link to="/our-service">Our Services</Link>
            <Link to="/shop">Shop</Link>
            <Link to="/about">About Us</Link>
            </div>
          </Nav>
          <Nav>
          <div className="navigationsLink">
            <Link to="/blog">Our Blogs</Link>
            
              {user.email ? 
              <div className="ms-5 text-light">Hi, <span className="displayName">{user.displayName}</span>  <button className="ms-2 logOutButton" onClick={logOut}>LogOut</button></div> 
               
               : 
                <Link className="class-link" to="/login">
                  Login
                </Link>
              }
            </div>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    );
};

export default MyNavbar;