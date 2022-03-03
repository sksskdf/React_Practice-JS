import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <Navbar bg="dark" variant="dark">
      <Container fluid>
        <Link to="/" className="navbar-brand">
          <img
            alt=""
            src="/logo192.png"
            width="30"
            height="30"
            className="d-inline-block align-top"
            style={{
              marginRight: '7px',
              marginLeft: '4vw',
            }}
          />
          React.js-SpringBoot
        </Link>
        <Nav className="me-auto">
          <Link to="/login" className="text-right nav-link">
            로그인
          </Link>
        </Nav>
      </Container>
    </Navbar>
  );
};

export default Header;
