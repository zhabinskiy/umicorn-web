import Head from "next/head";

export default ({ title }) => (
  <Head>
    <title>{title ? `Umicorn | ${title}` : "Umicorn"}</title>
  </Head>
);
