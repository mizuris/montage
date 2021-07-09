/* eslint-disable @next/next/no-img-element */
import React from "react";
import Head from "next/head";
import Link from "next/link";
import { Container, Row, Col, Button } from "react-bootstrap";
import styles from "../styles/Home.module.css";
import Header from "../components/Header";

export default function Home() {
  return (
    <main>
      <Head>
        <title>Strona główna - Montage Sp. z o.o.</title>
        <meta
          name="description"
          content="Strona główna Motage Sp. z o.o. - firma budowlana"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Container className={styles.topContainer} fluid>
        <Row className={styles.topText}>
          <h1>MONTAGE SP. Z O.O.</h1>
          <p>
            <strong>Zbuduj</strong> z nami coś <strong>wielkiego.</strong>{" "}
            Dołącz do naszej wykwalifikowanych specjalistów i zostań jednym z
            nich.
          </p>
          <Link href="/kontakt" passHref>
            <Button variant="success" size="lg">
              DOŁĄCZ DO NAS
            </Button>
          </Link>
        </Row>
        <div className={styles.topBackground} />
      </Container>
      <Row as="section" className={styles.homeSection}>
        <Col sm={{ order: "last" }} md={6} className={styles.homeTextSection}>
          <Header title="Montaż" />
          <p>
            Spółka wykonuje montaż elementów prefabrykowanych na budowach.
            Prefabrykaty żelbetowe to funkcjonalne i ekonomiczne rozwiązanie,
            chętnie wykorzystywane na budowach całego świata. Skracają czas
            wykonania robót budowlanych, gwarantują wysoką jakość i dokładność
            robót oraz trwałość i niezawodność budowanych obiektów.
          </p>
          <Button variant="success">NASZE REALIZACJE</Button>
        </Col>
        <Col sm={{ order: "first" }} md={6} className={styles.homeImageSection}>
          <img
            className={styles.sectionImage}
            src="/images/home-section-1.png"
            alt="Concrete construction with metal and metal cutters"
          />
        </Col>
      </Row>
      <hr />
      <Row as="section" className={styles.homeSection}>
        <Col
          sm={{ order: "last" }}
          md={{ order: "first" }}
          className={styles.homeTextSection}
        >
          <Header title="Kariera" />
          <p>
            Zatrudniamy specjalistów w każdej dziedzinie budownictwa. Oferujemy
            pracę w zgranym zespole, korzystając z narzędzi wysokiej klasy.
            Budujemy w Europie, głównie w Niemczech, zapewniając transport na
            miejsce wykonywanych prac.
          </p>
          <p>
            Jeśli nie posiadasz doświadczenia - pod czujnym okiem naszych
            specjalistów nauczysz się zawodu!
          </p>
          <p>
            Oferujemy <strong>wysokie zarobki</strong> - przekonaj się sam.
          </p>
          <Button variant="success">WIĘCEJ O PRACY</Button>
        </Col>
        <Col
          sm={{ order: "first" }}
          md={{ order: "last" }}
          className={styles.homeImageSection}
        >
          <img
            className={styles.sectionImage}
            src="/images/home-section-2.png"
            alt="Concrete construction with metal and metal cutters"
          />
        </Col>
      </Row>
    </main>
  );
}
