import React from "react";
import Link from "next/link";
import { Navbar, Nav, NavDropdown } from "react-bootstrap";
import styles from "../styles/Navigation.module.css";

function Navigation() {
  return (
    <Navbar
      className={styles.navbarFlex}
      fixed="top"
      bg="dark"
      variant="dark"
      expand="lg"
    >
      <Navbar.Brand href="/">Montage</Navbar.Brand>
      <div>
        <Navbar.Toggle aria-controls="navbar-nav" />
        <Navbar.Collapse id="navbar-nav">
          <Nav>
            <Link href="/" passHref>
              <Nav.Link>Strona główna</Nav.Link>
            </Link>
            <Link href="/ofirmie" passHref>
              <Nav.Link>O firmie</Nav.Link>
            </Link>
            <Link href="/realizacje" passHref>
              <Nav.Link>Realizacje</Nav.Link>
            </Link>
            <NavDropdown title="Praca" id="nav-dropdown">
              <NavDropdown.Item href="#">Pozycja 1</NavDropdown.Item>
              <NavDropdown.Item href="#">Pozycja 2</NavDropdown.Item>
              <NavDropdown.Item href="#">Pozycja 3</NavDropdown.Item>
              <NavDropdown.Item href="#">Pozycja 4</NavDropdown.Item>
              <NavDropdown.Item href="#">Pozycja 5</NavDropdown.Item>
              <NavDropdown.Item href="#">Pozycja 6</NavDropdown.Item>
            </NavDropdown>
            <Link href="/kontakt" passHref>
              <Nav.Link>Kontakt</Nav.Link>
            </Link>
          </Nav>
        </Navbar.Collapse>
      </div>
    </Navbar>
  );
}

export default Navigation;
