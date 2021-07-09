import Document, { Html, Head, Main, NextScript } from "next/document";

export default class MyDocument extends Document {
  render() {
    return (
      <Html lang="pl">
        <Head>
          <meta
            name="description"
            content="Montage to firma budowlana wykonująca budowy na terenie całej Unii Europejskiej, głównie w Niemczech."
          />
          <meta
            itemProp="description"
            content="Montage to firma budowlana wykonująca budowy na terenie całej Unii Europejskiej, głównie w Niemczech."
          />
          <meta name="robots" content="index, follow" />
          <meta name="ROBOTS" content="ALL" />
          <meta
            name="keywords"
            content="budownictwo, budowa, budynki, buildings, renovations, wykończenia, montage, Polska, Niemcy, Europa"
          />
          <meta property="og:url" content="http://www.montage.com.pl/" />
          <meta property="og:title" content="Montage Sp. z o.o." />
          <meta
            property="og:description"
            content="ontage to firma budowlana wykonująca budowy na terenie całej Unii Europejskiej, głównie w Niemczech. Firma z polskim kapitałem i wieloletnim doświadczeniem."
          />
          <link rel="icon" href="/favicon.ico" />
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link
            rel="preconnect"
            href="https://fonts.gstatic.com"
            crossoOrigin
          />
          <link
            href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap"
            rel="stylesheet"
          />
          <link
            rel="stylesheet"
            href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.0/css/bootstrap.min.css"
            integrity="sha384-9gVQ4dYFwwWSjIDZnLEWnxCjeSWFphJiwGPXr1jddIhOegiu1FwO5qRGvFXOdJZ4"
            crossOrigin="anonymous"
          />
        </Head>
        <body>
          <Main />
        </body>
        <NextScript />
      </Html>
    );
  }
}
