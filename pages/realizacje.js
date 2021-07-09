/* eslint-disable @next/next/no-img-element */
import React from "react";
import Head from "next/head";
import { Col, Container, Row } from "react-bootstrap";
import Header from "../components/Header";
import styles from "../styles/Realizacje.module.css";

function Realizacje() {
  return (
    <main className="building ">
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
        <Row className="mt-5 mb-5 pb-5 pt-5">
          <Header title="Strona w budowie" />
        </Row>
      </Container>
    </main>
  );
}

export default Realizacje;
