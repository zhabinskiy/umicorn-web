import Document, { Head, Main, NextScript } from "next/document";
import { ServerStyleSheet } from "styled-components";

export default class MyDocument extends Document {
  static getInitialProps({ renderPage }) {
    const sheet = new ServerStyleSheet();

    const page = renderPage(App => props =>
      sheet.collectStyles(<App {...props} />)
    );

    const styleTags = sheet.getStyleElement();

    return { ...page, styleTags };
  }

  render() {
    return (
      <html>
        <Head>
          <link rel="stylesheet" href="/static/css/main.css" />
          <link rel="stylesheet" href="/static/css/flexboxgrid.min.css" />
          <link rel="icon" href="/static/img/favicon.png" type="image/png" />
          <meta
            name="description"
            content="Umicorn is a team of UX product designers that help startups launch, achieve success and growth. Research, UX/UI Design, Audit, Design Consulting"
          />
          <meta property="og:title" content="Umicorn. UX Product Design" />
          <meta property="og:image" content="/static/img/umicorn-og@2x.png" />
          <meta property="og:image:width" content="2400" />
          <meta property="og:image:height" content="1260" />
          <meta
            property="og:description"
            content="We help startups launch, achieve success and growth. Research, UX/UI Design, Audit, Design Consulting"
          />
          {this.props.styleTags}
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </html>
    );
  }
}
