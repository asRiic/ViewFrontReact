import React, { Component, Fragment } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Nav, NavDropdown, Navbar } from "react-bootstrap";

export default class NavbarHome extends Component {
  render() {
    return (
      <Fragment>
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
          <Navbar.Brand href="/home/:id">Dashboard</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse
            className="justify-content-end"
            id="responsive-navbar-nav"
          >
            <Nav>
              <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">
                  Another action
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">
                  Something
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">
                  Separated link
                </NavDropdown.Item>
              </NavDropdown>
              <Nav.Link href="#features">Features</Nav.Link>
              <Nav.Link href="/">Salir</Nav.Link>
            </Nav>
            {/*<Nav></Nav>*/}
          </Navbar.Collapse>
        </Navbar>
      </Fragment>
    );
  }
}
