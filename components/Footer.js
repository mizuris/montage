/* eslint-disable @next/next/no-img-element */
import React from "react";
import styles from "../styles/Footer.module.css";
import { Row, Col, Button } from "react-bootstrap";
import { FaMapMarkerAlt } from "react-icons/fa";
import { HiPhone } from "react-icons/hi";
import { IoIosMail } from "react-icons/io";
import Link from "next/link";
import ContactBox from "./ContactBox";

function Footer() {
  return (
    <footer className={styles.footer}>
      <Row>
        <Col className="mb-4" lg={4} md={12}>
          <div className={styles.footerAbout}>
            <h4>Montage Sp. z o.o. – buduj swoją karierę zawodową!</h4>
            <p>
              Montage Spółka z Ograniczoną Odpowiedzialnością to firma budowlana
              zajmująca się eksportem usług budowlanych na teren Unii
              Europejskiej. Tworzymy wysoko wykwalifikowaną kardę.
            </p>
          </div>
          <Link href="/praca" passHref>
            <Button size="sm" variant="light">
              Dołącz do nas
            </Button>
          </Link>
        </Col>
        <Col className="mb-4" lg={4} md={12}>
          <ContactBox
            icon={<FaMapMarkerAlt />}
            text="Żnin 88-400, ul. Słoneczna 12, Polska"
          />
          <ContactBox icon={<HiPhone />} text="(+48) 508 346 323" />
          <ContactBox icon={<IoIosMail />} text="abpbud@wp.pl" />
        </Col>
        <Col lg={4} md={12} className="text-center">
          <div className={styles.footerNavigation}>
            <img
              src="/logo/logo-color.png"
              alt="Montage logo"
              className={styles.footerLogo}
            />
            <hr />
            <p className={styles.footerMenu}>
              <Link href="/">Strona główna</Link> |{" "}
              <Link href="/praca">Praca</Link> |{" "}
              <Link href="/kontakt">Kontakt</Link>
            </p>
          </div>
        </Col>
      </Row>
      <Row>
        <p className={styles.footerCopyright}>
          Montage Sp. z o.o. &copy; {new Date().getFullYear()} | Wszystkie prawa
          zastrzeżone.
        </p>
      </Row>
    </footer>
  );
}

export default Footer;
