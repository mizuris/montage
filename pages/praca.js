import React from "react";
import Head from "next/head";
import { Container } from "react-bootstrap";
import styles from "../styles/Praca.module.css";
import Header from "../components/Header";

function Praca() {
  return (
    <main>
      <Head>
        <title>Praca - Montage Sp. z o.o.</title>
        <meta
          name="description"
          content="Ofert pracy Motage Sp. z o.o. - firma budowlana"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Container fluid className={styles.pracaTop}>
        <Header title="Praca" />
        <div className={styles.pracaTopImg} />
      </Container>
      <Container className="mt-4 mb-4">
        <Header title="Zatrudniamy" />
        <p>
          Wysyłając zgłoszenie rekrutacyjne do ADAMSKI Sp. z o.o. (Pracodawca,
          administrator danych), zgadzasz się na przetwarzanie przez Pracodawcę
          Twoich danych osobowych zawartych w zgłoszeniu rekrutacyjnym w celu
          prowadzenia rekrutacji na stanowisko wskazane w ogłoszeniu.
        </p>
        <p>
          Twoje dane osobowe wskazane w Kodeksie pracy lub w innych ustawach
          szczegółowych (według wymogów ogłoszenia), przetwarzamy w oparciu o
          przepisy prawa i ich podanie jest konieczne do wzięcia udziału w
          rekrutacji. Pozostałe dane osobowe (np. wizerunek) przetwarzamy na
          podstawie Twojej dobrowolnej zgody, którą wyraziłaś/eś wysyłając nam
          swoje zgłoszenie rekrutacyjne i ich podanie nie ma wpływu na możliwość
          udziału w rekrutacji.
        </p>
      </Container>
    </main>
  );
}

export default Praca;
