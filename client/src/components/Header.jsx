import React from "react";
import '../styles/Header.scss'
import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";

const Header = () => {
  return (
    <Navbar bg="light" className="shadow p-3 mb-2 bg-white rounded header_container">
      <Container>
        <Navbar.Brand className="company_name">
          <img
            alt="company logo"
            src="http://assets.stickpng.com/images/580b585b2edbce24c47b27f3.png"
            width="40"
            height="30"
            className="d-inline-block align-top"
          />
          Vancouver Hotel
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" className="d-flex justify-content-end">
          <Nav>
            <NavDropdown title="Menu" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Guest Room</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Contact</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">
                Login / Sign In
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
