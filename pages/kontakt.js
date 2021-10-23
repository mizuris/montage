import React from "react";
import Head from "next/head";
import { Container, Button } from "react-bootstrap";
import Header from "../components/Header";
import styles from "../styles/Kontakt.module.css";
import { TiBusinessCard } from "react-icons/ti";
import { FaMapMarkerAlt } from "react-icons/fa";
import { HiPhone } from "react-icons/hi";
import { IoIosMail } from "react-icons/io";
import { GrCreditCard } from "react-icons/gr";
import ContactBox from "../components/ContactBox";
import MailToButton from "../components/MailToButton";

function Kontakt() {
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

      <Container as="section" className="mt-4 mb-4">
        <Header title="Dane" />
        <ContactBox icon={<TiBusinessCard />} text="Montage Sp. z o.o." />
        <ContactBox
          icon={<GrCreditCard />}
          text="NIP: PL562-180-69-14, REGON: 364802068"
        />
        <ContactBox
          icon={<FaMapMarkerAlt />}
          text="ul. Słoneczna 12, 88-400 Żnin, Polska"
        />
        <ContactBox icon={<HiPhone />} text="(+48) 508 346 323" />
        <ContactBox icon={<IoIosMail />} text="abpbud@wp.pl" />
      </Container>

      <Container as="section" className="mb-4">
        <Header title="Rekrutacje" />
        <p>
          Wysyłając zgłoszenie rekrutacyjne do Montage Sp. z o.o. (Pracodawca,
          administrator danych), zgadzasz się na przetwarzanie przez Pracodawcę
          Twoich danych osobowych zawartych w zgłoszeniu rekrutacyjnym w celu
          prowadzenia rekrutacji na stanowisko wskazane w ogłoszeniu.
        </p>
        <p>
          Wyślij swoje zgłoszenie i załącz CV w załączniku:{" "}
          <MailToButton
            email="abpbud@wp.pl"
            subject="Zgłoszenie kandydatury"
            body="Dzień dobry, przesyłam zgłoszenie swojej kandydatury przez stronę www.montage-com.pl. Moje CV załączam w załączniku."
          />
        </p>
      </Container>
    </main>
  );
}

export default Kontakt;
