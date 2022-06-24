import React, { useState } from "react";
import '../styles/Header.scss'
import { useNavigate } from 'react-router-dom';
import { Container, Nav, Navbar, SplitButton, Dropdown } from "react-bootstrap";
import {UserAuth} from '../context/AuthContext';

const Header = ({setName}) => {
  const [showList, setShowList] = useState(false);
  const navigate = useNavigate();
  const {logOut, user} = UserAuth();
  
  const handleLogout = async (e) => {
    e.preventDefault();
    try{
      await logOut();
      navigate("/");
      console.log("Logged out");
    }catch(e) {
      console.log(e);
    }
    setName("")
  }

  const handleMenu = () => {
    if(user.email === "mokochii1108@gmail.com") {
      setShowList(true);
    }else{
      setShowList(false);
    }
  }

  const handleBookingList = () => {
    if(user.email === "mokochii1108@gmail.com") {
      navigate("/bookinglist");
    }
  }


  return (
    <Navbar bg="light" className="shadow p-3 mb-1 bg-white rounded header_container">
      <Container>
        <Navbar.Brand className="company_name" onClick={() => navigate("/")} style={{fontSize: "1.5rem"}}>
          <img
            alt="company logo"
            src="https://www.pinclipart.com/picdir/middle/491-4917260_canada-flag-images-clip-art.png"
            width="30"
            height="30"
            className="d-inline-block align-top mx-2"
          />
          CICCC Hotel
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" className="d-flex justify-content-end">
          <Nav onClick={handleMenu}>
          <SplitButton
            key="1"
            id={`dropdown-button-drop-start`}
            drop="start"
            variant="light"
            title={`Menu`}
          >
            <Dropdown.Item eventKey="1" onClick={() => navigate("/")}>Home</Dropdown.Item>
            <Dropdown.Item eventKey="2" onClick={() => navigate("/contact")}>Contact</Dropdown.Item>
            {showList ? <Dropdown.Item eventKey="5" onClick={handleBookingList}>BookingList</Dropdown.Item> : ""}
            <Dropdown.Item eventKey="3" onClick={() => navigate("/login")}>Login / SignIn</Dropdown.Item>
            <Dropdown.Item eventKey="4" onClick={handleLogout}>Logout</Dropdown.Item>
            
          </SplitButton>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
