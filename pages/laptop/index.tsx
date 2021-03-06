import { NextPage } from "next";
import * as React from "react";
import { Layout, getStaticProps, LayoutStaticProps } from "components/Layout";
import { useRouter } from "next/router";
import Container from "@material-ui/core/Container";
import Head from "next/head";

const QRCodeInfo: React.FC<{}> = () => {
  const { query } = useRouter();
  return (
    <Container component="main">
      <h3>
        <b>Name: </b>
        {query.name}
      </h3>
      <h3>
        <b>Serial Number: </b>
        {query.serno}
      </h3>
      <h3>
        <b>Model: </b>
        {query.model}
      </h3>
      <h3>
        <b>RAM: </b>
        {query.ram}
      </h3>
      <h3>
        <b>CPU: </b>
        {query.cpu}
      </h3>
      <h3>
        <b>CPU Speed: </b>
        {query.cpu_speed}
      </h3>
    </Container>
  );
};

const Page: NextPage<LayoutStaticProps> = (props) => (
  <Layout {...props} title="Mission Bit – Laptop">
    <Head>
      <meta name="robots" content="noindex" />
    </Head>
    <QRCodeInfo />
  </Layout>
);

export { getStaticProps };
export default Page;
