import React from "react";
import { Link } from "react-router-dom";
import { Navbar, Nav, Container, NavDropdown } from "react-bootstrap";

function NewNavBar() {
  return (
    <Navbar bg="light" expand="lg">
      <Container>
        {/* Navbar Brand on the left */}
        <Navbar.Brand as={Link} to="/">
          React-Bootstrap
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          {/* Navbar Items on the right */}
          <Nav className="ms-auto">
            {/* Dropdown Menu */}
            <NavDropdown title="Menu" id="basic-nav-dropdown">
              <NavDropdown.Item as={Link} to="/">
                Home
              </NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/login">
                Login
              </NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/form">
                Form
              </NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/create-account">
                Create Account
              </NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/ingredients">
                IngredientList
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NewNavBar;


