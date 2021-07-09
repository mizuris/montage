import React from "react";
import Head from "next/head";
import {
  Container,
  Button,
  ButtonGroup,
  DropdownButton,
} from "react-bootstrap";
import Header from "../components/Header";
import styles from "../styles/Praca.module.css";
import WorkOfferTable from "../components/WorkOfferTable";
import { GrLinkBottom } from "react-icons/gr";
import WorkDropdownButton from "../components/WorkDropdownButton";

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
        <div className={styles.pracaTopImage} />
      </Container>
      <Container as="section" className="mt-4 mb-4">
        <Header title="O nas" />
        <p className="mt-4">
          W <strong>Montage</strong> wszyscy stanowią jeden team. Każdy może
          wnieść coś &quot;od siebie&quot;, by polepszyć pracę. Możesz dołączyć
          do naszego zespołu <strong>już dziś</strong>. Oferujemy{" "}
          <strong>wysokie zarobki</strong> i stabilną pracę w oparciu o umowę o
          pracę. Montage Sp. z o.o. daje możliwość{" "}
          <strong>ubezpieczenia</strong> pracowników i ich rodziny.
        </p>
        <p>
          Jesteś specjalistą w swojej dzienie? Masz doświadczenie w wykonywanej
          pracy? Czekamy właśnie na <strong>Ciebie!</strong>
        </p>
        <p>
          Jeśli nie masz doświadczenia i dopiero zaczynasz swoją karierę -
          znajdziemy dla Ciebie miejsce i wszystkieg <strong>nauczymy.</strong>{" "}
          Szukamy osób sumiennych i skupionych na pracy.
        </p>
        <Button variant="success" className="mb-3">
          Aplikuj
        </Button>
      </Container>

      <Container as="section" className="mt-4 mb-4">
        <Header title="Stanowiska" />
        <div className={styles.pracaJobsButtons}>
          <p>Aktualnie poszukujemy pracowników na stanowiska:</p>
          <WorkDropdownButton
            jobs={[
              "Murzarz",
              "Cieśla",
              "Ślusarz",
              "Monter el. żelbet.",
              "Stolarz",
              "Kosmetyk betonu",
              "Zbrojeniarz",
              "Malarz",
            ]}
          />
        </div>
        <WorkOfferTable
          id="1"
          title="Murarz"
          requirements={[
            "doświadczenie zawodowe w zakresie ogólnobudowlanym",
            "umiejętności murarskie i tynkarskie",
            "znajomość rysunków technicznych",
          ]}
        />
        <hr />
        <WorkOfferTable
          id="2"
          title="Cieśla"
          requirements={[
            "doświadczenie przy przygotowywaniu form",
            "umiejętności wycinania elementów i składania ich w całość",
          ]}
        />
        <hr />
        <WorkOfferTable
          id="3"
          title="Ślusarz"
          requirements={[
            "doświadczenie w robotach ślusarskich",
            "umiejętność spawania elektrycznego i gazowego",
            "umiejętność podstawowej obróbki metali",
            "umiejętność drobnych napraw i konserwacji narzędzi, form stalowych i urządzeń mechanicznych",
          ]}
        />
        <hr />
        <WorkOfferTable
          id="4"
          title="Monter elementów żelbetowych"
          requirements={[
            "doświadczenie zawodowe w zakresie ogólnobudowlanym",
            "umiejętność montażu elementów prefabrykowanych takich jak stropy, ściany, słupy, belki, schody, itp.",
            "umiejętność układania zbrojenia w szalunkach i betonowania",
          ]}
        />
        <hr />
        <WorkOfferTable
          id="5"
          title="Stolarz"
          requirements={[
            "doświadczenie zawodowe w pracach stolarskich",
            "umiejętność obróbki drewna oraz płyt sztalunkowych",
            "umiejętność budowy form derwnianych według rysunków technicznych",
            "umiejętność przebudowy form drewnianych na stołach montażowych",
          ]}
        />
        <hr />
        <WorkOfferTable
          id="6"
          title="Kosmetyk betonu"
          requirements={[
            "doświadczenie zawodowe w przygotowaniu elementów żelbetowych",
            "umiejętność szpachlowania, szlifowania, napraw uszkodzeń elementów żelbetowych",
            "znajomość technik obróbki powierzchni żelbetowych przy pomocy mas szpachlowych, żywic, etc.",
          ]}
        />
        <hr />
        <WorkOfferTable
          id="7"
          title="Zbrojeniarz"
          requirements={[
            "doświadczenie zawodowe w przygotowaniu zbrojeń",
            "umiejętność wiązania cęgami zbrojarskimi",
            "umiejętność czytania rysunków technicznych",
          ]}
        />
        <hr />
        <WorkOfferTable
          id="8"
          title="Malarz"
          requirements={[
            "doświadczenie zawodowe przy pracach malarskich",
            "umiejętność przygotowania powierzchni betonowych do malowania",
            "znajomość technik malarskich",
          ]}
        />
        <hr />
      </Container>
    </main>
  );
}

export default Praca;
