import * as React from "react";
import Layout from "../components/Layout";
import { NextPage } from "next";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import Link from "@material-ui/core/Link";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    textAlign: "center",
    padding: theme.spacing(4, 0),
    "& > *": {
      margin: theme.spacing(4, 0),
    },
  },
}));

const Page: NextPage<{}> = () => (
  <Layout title="Mission Bit – 404 Not Found">
    <Container component="main" className={useStyles().root}>
      <Typography variant="h1">HTTP 404 Not Found</Typography>
      <Typography>
        Oh no! The link you were looking for doesn't appear to be here anymore.
      </Typography>
      <Typography variant="h3">
        <Link href="/">Check out our homepage</Link>
      </Typography>
    </Container>
  </Layout>
);

export default Page;
