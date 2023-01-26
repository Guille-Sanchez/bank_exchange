import React from "react";
import BankLogo from "../../assets/Warba_Bank_Logo.png";
import "./styles.css";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
/* 
  Attribution to the Warba_Bank_Logo
  By Almjren - Own work, CC BY-SA 4.0, https://commons.wikimedia.org/w/index.php?curid=86117667
*/
function NavBar() {
  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <img src={BankLogo} className="logo" alt=" Warba_Bank_Logo" />
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#link">Link</Nav.Link>
            <NavDropdown title="More Information" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Locations</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Hours</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.3">Contact Us</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
