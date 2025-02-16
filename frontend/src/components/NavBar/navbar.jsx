import React from 'react';
import { Navbar, Nav, NavDropdown, Container } from 'react-bootstrap';
import { Bell, Chat, List } from 'react-bootstrap-icons'; // Icons from react-bootstrap-icons
import { useNavigate } from "react-router-dom";
import './nav.css'; // Import custom CSSimport { NavDropdown } from "react-bootstrap";

const NewNavbar = () => {
  const navigate = useNavigate();

  return (
    <Navbar expand="lg" style={{ backgroundColor: "#FF9F1C" }}>
      <Container>
        {/* Brand with logo */}
        <Navbar.Brand href="/" style={{ color: "white", fontWeight: "bold", display: "flex", alignItems: "center" }}>
      <img
        src="frontend/assets/forkicon.jpeg"  // Change this to your actual logo path
        alt="Kitchen Copilot Logo"
        width="40"  // Adjust the size as needed
        height="40"
        className="d-inline-block align-top"
      />{" "}
    </Navbar.Brand>
        {/* Brand on the left */}
        <Navbar.Brand>Kitchen Copilot</Navbar.Brand>

        {/* Toggle button for mobile (hamburger menu) */}
        <Navbar.Toggle aria-controls="basic-navbar-nav" className="custom-toggle">
          <List size={24} className="text-dark" /> {/* Hamburger icon */}
        </Navbar.Toggle>

        {/* Icons on the right */}
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link href="#">
              <Bell size={24} className="text-dark" /> {/* Notification icon */}
            </Nav.Link>
            <Nav.Link href="#">
              <Chat size={24} className="text-dark" /> {/* Message icon */}
            </Nav.Link>
            <NavDropdown
              title={<List size={24} className="text-dark" />}
              id="basic-nav-dropdown"
              align="end" // Align dropdown to the right
            >
              <NavDropdown.Item href="#action/3.1">Profile</NavDropdown.Item>
              <NavDropdown.Item as="button" onClick={() => navigate ("/textinput")}>Talk to RAMsay</NavDropdown.Item>
              <NavDropdown.Item as="button" onClick={() => navigate ("/ingredientspage")}>My List</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.4">Log out</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NewNavbar;