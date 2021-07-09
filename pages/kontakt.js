import React from "react";
import Head from "next/head";
import { Container, Row, Col } from "react-bootstrap";
import Header from "../components/Header";
import styles from "../styles/Kontakt.module.css";

function kontakt() {
  return (
    <main>
      <Head>
        <title>Kontakt - Montage Sp. z o.o.</title>
        <meta
          name="description"
          content="Kontakt - Motage Sp. z o.o. - firma budowlana"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Container fluid className={styles.kontaktTop}>
        <Header title="Kontakt" />
        <div className={styles.kontaktTopImage} />
      </Container>
      <Container className="mt-4 mb-4">
        <Row>
          <Header title="Kontakt" />
          <Col sm={6}>
            <p>
              Wysyłając zgłoszenie rekrutacyjne do ADAMSKI Sp. z o.o.
              (Pracodawca, administrator danych), zgadzasz się na przetwarzanie
              przez Pracodawcę Twoich danych osobowych zawartych w zgłoszeniu
              rekrutacyjnym w celu prowadzenia rekrutacji na stanowisko wskazane
              w ogłoszeniu.
            </p>
          </Col>
          <Col sm={6}>
            <p>
              Twoje dane osobowe wskazane w Kodeksie pracy lub w innych ustawach
              szczegółowych (według wymogów ogłoszenia), przetwarzamy w oparciu
              o przepisy prawa i ich podanie jest konieczne do wzięcia udziału w
              rekrutacji. Pozostałe dane osobowe (np. wizerunek) przetwarzamy na
              podstawie Twojej dobrowolnej zgody, którą wyraziłaś/eś wysyłając
              nam swoje zgłoszenie rekrutacyjne i ich podanie nie ma wpływu na
              możliwość udziału w rekrutacji.
            </p>
          </Col>
        </Row>
      </Container>
    </main>
  );
}

export default kontakt;
