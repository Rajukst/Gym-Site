import React from 'react';
import {Container, Navbar, Nav} from 'react-bootstrap'
import { Link } from 'react-router-dom';
const MyNavbar = () => {
    return (
        <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">Navbar</Navbar.Brand>
          <Nav className="me-auto">
            <Link to="/login">Login</Link>
            <Link to="/register">Registration</Link>
          </Nav>
        </Container>
      </Navbar>
    );
};

export default MyNavbar;