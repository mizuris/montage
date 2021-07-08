import Head from "next/head";
import Link from "next/link";
import { Container, Row, Col, Button } from "react-bootstrap";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Strona główna - Montage Sp. z o.o.</title>
        <meta
          name="description"
          content="Strona główna Motage Sp. z o.o. - firma budowlana"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Container className={styles.homeContainer} fluid>
        <Row>
          <Col className={styles.homeEmpty} sm={0} lg={6} />
          <Col className={styles.homeText} sm={12} lg={6}>
            <h1>Montage Sp. z o.o.</h1>
            <p>
              <strong>Zbuduj</strong> z nami coś <strong>wielkiego.</strong>{" "}
              Dołącz do naszej wykwalifikowanych specjalistów i zostań jednym z
              nich.
            </p>
            <Link href="/kontakt" passHref>
              <Button variant="light" size="lg">
                KONTAKT
              </Button>
            </Link>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
