/* eslint-disable @next/next/no-img-element */
import React from "react";
import styles from "../styles/Footer.module.css";
import { Row, Col, Button } from "react-bootstrap";
import { FaMapMarkerAlt } from "react-icons/fa";
import { HiPhone } from "react-icons/hi";
import { IoIosMail } from "react-icons/io";
import Link from "next/link";

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
              Europejskiej. Tworzymy wysoko wykwalifikowaną kardę, tworząc wciąż
              rozwijający się zespół.
            </p>
          </div>
          <Button variant="light">Dołącz do nas</Button>
        </Col>
        <Col className="mb-4" lg={4} md={12}>
          <div className={styles.footerContact}>
            <div className={styles.footerIcon}>
              <FaMapMarkerAlt />
            </div>
            <p>
              <span>Żnin 88-400, ul. Słoneczna 12</span>, Polska
            </p>
          </div>
          <div className={styles.footerContact}>
            <div className={styles.footerIcon}>
              <HiPhone />
            </div>
            <p>
              <span>(+48) 508 346 323</span>
            </p>
          </div>
          <div className={styles.footerContact}>
            <div className={styles.footerIcon}>
              <IoIosMail />
            </div>
            <p>
              <span>abpbud@wp.pl</span>
            </p>
          </div>
        </Col>
        <Col lg={4} md={12} className="text-center">
          <div className={styles.footerNavigation}>
            <img
              src="/logo/logo-color.png"
              alt="#"
              className={styles.footerLogo}
            />
            <hr />
            <p className={styles.footerMenu}>
              <Link href="/">Strona główna</Link> |{" "}
              <Link href="/ofirmie">O firmie</Link> |
              <Link href="/praca">Praca</Link> |{" "}
              <Link href="/realizacje">Realizacje</Link> |
              <Link href="/kontakt">Kontakt</Link>
            </p>
          </div>
        </Col>
      </Row>
      <Row>
        <p className={styles.footerCopyright}>
          Montage Sp. z o.o. &copy; 2021 | Wszystkie prawa zastrzeżone.
        </p>
      </Row>
    </footer>
  );
}

export default Footer;
