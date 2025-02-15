import React from 'react';
import { Navbar, Nav, NavDropdown, Container } from 'react-bootstrap';
import { Bell, Chat, List } from 'react-bootstrap-icons'; // Icons from react-bootstrap-icons
import './nav.css'; // Import custom CSS

const NewNavbar = () => {
  return (
    <Navbar bg="dark" variant="dark" expand="lg">
      <Container>
        {/* Brand on the left */}
        <Navbar.Brand>MyApp</Navbar.Brand>

        {/* Toggle button for mobile (hamburger menu) */}
        <Navbar.Toggle aria-controls="basic-navbar-nav">
          <List size={24} className="text-light" /> {/* Hamburger icon */}
        </Navbar.Toggle>

        {/* Icons on the right */}
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link href="#">
              <Bell size={24} className="text-light" /> {/* Notification icon */}
            </Nav.Link>
            <Nav.Link href="#">
              <Chat size={24} className="text-light" /> {/* Message icon */}
            </Nav.Link>
            <NavDropdown
              title={<List size={24} className="text-light" />}
              id="basic-nav-dropdown"
              align="end" // Align dropdown to the right
            >
              <NavDropdown.Item href="#action/3.1">Profile</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Log out</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NewNavbar;