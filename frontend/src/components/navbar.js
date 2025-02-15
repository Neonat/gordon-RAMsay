import React from 'react';
import { Navbar, Nav, NavDropdown, Button, Container} from 'react-bootstrap';
import { Link } from 'react-router-dom'

function NewNavBar() {
    return (
        <Navbar expand="lg" className="bg-body-tertiary">
        <Container>
          {/* Navbar Brand on the left */}
          <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
  
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            {/* Navbar Items on the right */}
            <Nav className="ms-auto">
              <Nav.Link href="#home">
                
              </Nav.Link>
              <Nav.Link href="#link">Link</Nav.Link>
              <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">
                  Another action
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">
                  Separated link
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    );
  }
  
  export default NewNavBar;