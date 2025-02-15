import React from 'react';
import { Navbar, Nav, NavDropdown, Container } from 'react-bootstrap';
import { Bell, Chat, PersonCircle } from 'react-bootstrap-icons'; // Icons from react-bootstrap-icons (optional)

const MyNavbar = () => {
  return (
    <Navbar bg="dark" variant="dark" expand="lg">
      <Container>
        {/* Right side Text */}
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto">
            <Nav.Link href="#">Right Text Here</Nav.Link>
          </Nav>
        </Navbar.Collapse>


        {/* Left side with Icons */}
        <Navbar.Brand>MyApp</Navbar.Brand>
        <Nav className="ml-auto">
          <Nav.Link href="#"><Bell size={24} className="text-light" /></Nav.Link>
          <Nav.Link href="#"><Chat size={24} className="text-light" /></Nav.Link>
          <NavDropdown title={<PersonCircle size={24} className="text-light" />} id="basic-nav-dropdown">
            <NavDropdown.Item href="#action/3.1">Profile</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.2">Log out</NavDropdown.Item>
          </NavDropdown>
        </Nav>


      </Container>
    </Navbar>
  );
};

export default MyNavbar;
