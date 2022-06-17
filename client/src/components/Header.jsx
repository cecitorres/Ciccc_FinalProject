import React from "react";
import '../styles/Header.scss'
import { Container, Nav, Navbar, SplitButton, Dropdown } from "react-bootstrap";

const Header = () => {
  return (
    <Navbar bg="light" className="shadow p-3 mb-2 bg-white rounded header_container">
      <Container>
        <Navbar.Brand className="company_name">
          <img
            alt="company logo"
            src="https://www.pinclipart.com/picdir/middle/491-4917260_canada-flag-images-clip-art.png"
            width="30"
            height="30"
            className="d-inline-block align-top"
          />
          Vancouver Hotel
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" className="d-flex justify-content-end">
          <Nav>
          <SplitButton
            key="1"
            id={`dropdown-button-drop-start`}
            drop="start"
            variant="light"
            title={`Menu`}
          >
            <Dropdown.Item eventKey="1">Guest Room</Dropdown.Item>
            <Dropdown.Item eventKey="2">Contact</Dropdown.Item>
            <Dropdown.Item eventKey="3">Logi / SognIn</Dropdown.Item>
          </SplitButton>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
