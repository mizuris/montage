/* eslint-disable @next/next/no-img-element */
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Navbar, Nav } from "react-bootstrap";
import styles from "../styles/Navigation.module.css";
import { HiPhone } from "react-icons/hi";

function Navigation() {
  const [navExpanded, setNavExpanded] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [background, setBackground] = useState(false);

  useEffect(() => {
    document.addEventListener("scroll", () => {
      let scrolled = document.scrollingElement.scrollTop;
      if (scrolled >= 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    });
  }, []);

  return (
    <Navbar
      className={`${styles.navbarFlex} ${navExpanded ? styles.expanded : ""}`}
      variant="dark"
      expand="lg"
      fixed="top"
      expanded={navExpanded}
      onToggle={() => setNavExpanded(!navExpanded)}
    >
      <Navbar.Brand href="/">
        <img
          src="/logo/logo-color.png"
          alt="Montage logo"
          className={styles.navbarBrand}
        />
      </Navbar.Brand>
      <Navbar.Toggle onClick={() => setBackground(navExpanded)} />
      <Navbar.Collapse>
        <Nav onSelect={() => setNavExpanded(false)} className={styles.navLinks}>
          <Link href="/" passHref>
            <Nav.Link>Strona główna</Nav.Link>
          </Link>
          <Link href="/praca" passHref>
            <Nav.Link>Praca</Nav.Link>
          </Link>
          <Link href="/realizacje" passHref>
            <Nav.Link>Realizacje</Nav.Link>
          </Link>
          <Link href="/kontakt" passHref>
            <Nav.Link>
              <HiPhone /> Kontakt
            </Nav.Link>
          </Link>
        </Nav>
      </Navbar.Collapse>
      <div
        className={`${styles.navbarBackground} ${
          isScrolled ? styles.navbarScrolled : styles.navbardDefault
        }`}
      />
    </Navbar>
  );
}

export default Navigation;
