/* eslint-disable @next/next/no-img-element */
import React from "react";
import Head from "next/head";
import { Col, Container, Row } from "react-bootstrap";
import Header from "../components/Header";
import styles from "../styles/Realizacje.module.css";

function Realizacje() {
  return (
    <main>
      <Head>
        <title>Realizacje - Montage Sp. z o.o.</title>
        <meta
          name="description"
          content="Galeria wykonywanych prac przez Motage Sp. z o.o. - firma budowlana"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Container className={styles.realizacjeTop} fluid>
        <Header title="Realizacje" />
        <div className={styles.realizacjeTopImage} />
      </Container>
      <Container>
        <Row>
          <Col sm={4}>
            <img
              data-source="Campanille Bydgoszcz"
              className={styles.realizacjeItem}
              src="/images/job1.jpg"
              alt=""
            />
          </Col>
          <Col sm={4}>
            <img
              data-source="Campanille Bydgoszcz"
              className={styles.realizacjeItem}
              src="/images/job2.jpg"
              alt=""
            />
          </Col>
          <Col sm={4}>
            <img
              data-source="Campanille Bydgoszcz"
              className={styles.realizacjeItem}
              src="/images/job3-vert.jpg"
              alt=""
            />
          </Col>
          <Col sm={12}>
            <img
              data-source="BMW Motors Bydgoszcz"
              className={styles.realizacjeItem}
              src="/images/job4.jpg"
              alt=""
            />
          </Col>
        </Row>
      </Container>
    </main>
  );
}

export default Realizacje;
