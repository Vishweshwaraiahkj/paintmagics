import React from "react";
import {
  Navbar,
  Nav,
  NavDropdown,
  Form,
  FormControl,
  Button
} from "react-bootstrap";

const NavBar = () => {
  return (
    <header className="App-header">
      <Navbar bg="dark" className="w-100" variant="dark" expand="lg">
        <Navbar.Brand href="#home">Paint Magics</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#link">About Us</Nav.Link>
            <Nav.Link href="#link2">Estimate Calculator</Nav.Link>
            <Nav.Link href="#link3">Services</Nav.Link>
            <Nav.Link href="#link4">Portfolio</Nav.Link>
            <Nav.Link href="#link5">How It Works</Nav.Link>
            <Nav.Link href="#link6">
              Painting Products Uses and benefits
            </Nav.Link>
            <Nav.Link href="#link7">Contact</Nav.Link>
            <NavDropdown
              className="d-none"
              title="Dropdown"
              id="basic-nav-dropdown"
            >
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
          <Form inline>
            <FormControl type="text" placeholder="Search" className="mr-sm-2" />
            <Button variant="outline-success">Search</Button>
          </Form>
        </Navbar.Collapse>
      </Navbar>
    </header>
  );
};

export default NavBar;
