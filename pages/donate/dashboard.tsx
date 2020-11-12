import { NextPage, GetServerSideProps } from "next";
import React, { useEffect, useState } from "react";
import {
  Layout,
  getLayoutStaticProps,
  LayoutStaticProps,
} from "components/Layout";
import Head from "next/head";
import Error404 from "pages/404";

import getBalanceTransactions, {
  BalanceTransactionBatch,
} from "src/stripeBalanceTransactions";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import getBalanceModifications, {
  BalanceModifications,
} from "src/googleBalanceModifications";
import Button from "@material-ui/core/Button";
import Box from "@material-ui/core/Box";
import Container from "@material-ui/core/Container";
import Link from "@material-ui/core/Link";

const usdFormatter = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
  maximumFractionDigits: 0,
  minimumFractionDigits: 0,
});

function dollars(cents: number) {
  return usdFormatter.format(Math.floor(0.01 * cents));
}

const useStyles = makeStyles((theme) => ({
  table: {},
  hide: { display: "none" },
  actions: {
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    gridGap: theme.spacing(1),
    padding: theme.spacing(1, 0),
  },
}));

export const DateTimeFormat = new Intl.DateTimeFormat("en-US", {
  timeZone: "America/Los_Angeles",
  year: "numeric",
  month: "long",
  day: "numeric",
  hour: "numeric",
  minute: "numeric",
  second: "numeric",
  hour12: false,
});

interface PageProps extends LayoutStaticProps {
  readonly batch?: BalanceTransactionBatch;
  readonly modifications?: BalanceModifications;
}

function mergeBatch(
  current: BalanceTransactionBatch,
  update: BalanceTransactionBatch
): BalanceTransactionBatch {
  const ids = new Set<string>(update.transactions.map((txn) => txn.id));
  const transactions = [
    ...update.transactions,
    ...current.transactions.filter((txn) => !ids.has(txn.id)),
  ];
  return { ...update, transactions };
}

interface DashboardProps {
  readonly batch: BalanceTransactionBatch;
  readonly modifications: BalanceModifications;
}

const GIVE_LIVELY_ADMIN_URL =
  "https://members.givelively.org/campaigns/4th-annual-gala-090dbc48-9624-44cf-ae2f-a802a511393b/basic_information";

const DonateDashboard: React.FC<DashboardProps> = (initial) => {
  const [batch, setBatch] = useState(initial.batch);
  const [modifications, setModifications] = useState(initial.modifications);
  const [errors, setErrors] = useState(0);
  const classes = useStyles();
  useEffect(() => {
    let mounted = true;
    (async () => {
      await new Promise((res) => {
        setTimeout(res, 10 * 1000);
      });
      try {
        const res = await fetch(
          `/api/balance-transactions?created=${batch.created}`
        );
        if (!mounted) {
          return;
        }
        const json: DashboardProps = await res.json();
        if (!mounted) {
          return;
        }
        setBatch(mergeBatch(batch, json.batch));
        setModifications(json.modifications);
      } catch (error) {
        console.error(error);
        setErrors(errors + 1);
      }
    })();
    return () => {
      mounted = false;
    };
  }, [batch, errors]);

  const { pollTime, transactions } = batch;
  const modificationTotal = modifications.transactions.reduce(
    (amount, txn) => amount + txn.amount,
    0
  );
  return (
    <Container>
      <Box className={classes.actions}>
        <Button
          target="_blank"
          variant="contained"
          color="primary"
          rel="noopener noreferrer"
          href={GIVE_LIVELY_ADMIN_URL}
        >
          Give Lively Admin
        </Button>
        <Button
          target="_blank"
          variant="contained"
          color="secondary"
          rel="noopener noreferrer"
          href="https://docs.google.com/spreadsheets/d/1dZgjF3SJXtO-4cC4M92y0ubvoQHs5GF5tjoj-OQtwl4/edit#gid=30309931"
        >
          Adjustments Spreadsheet
        </Button>
      </Box>
      <TableContainer component={Paper}>
        <Table
          className={classes.table}
          size="small"
          aria-label="Donation table"
        >
          <TableHead>
            <TableRow>
              <TableCell />
              <TableCell align="right">Amount</TableCell>
              <TableCell>Frequency</TableCell>
              <TableCell>Type</TableCell>
              <TableCell>Name</TableCell>
              <TableCell>Time</TableCell>
            </TableRow>
            <TableRow>
              <TableCell />
              <TableCell align="right">
                {dollars(
                  transactions.reduce(
                    (amount, txn) => amount + txn.amount,
                    modificationTotal
                  )
                )}
              </TableCell>
              <TableCell colSpan={4}>
                Total as of {DateTimeFormat.format(pollTime * 1000)}
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell />
              <TableCell align="right">
                {dollars(
                  transactions.reduce(
                    (amount, txn) =>
                      amount + (txn.type === "give-lively" ? 0 : txn.amount),
                    modificationTotal
                  )
                )}
              </TableCell>
              <TableCell colSpan={4}>
                <Link
                  href={GIVE_LIVELY_ADMIN_URL}
                  target="_blank"
                  color="secondary"
                  rel="noopener noreferrer"
                >
                  GiveLively Adjustment: "Amount raised from other sources"
                </Link>
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {transactions.map((txn, i) => (
              <TableRow key={txn.id}>
                <TableCell align="right">{transactions.length - i}</TableCell>
                <TableCell component="th" scope="row" align="right">
                  {dollars(txn.amount)}
                </TableCell>
                <TableCell>
                  {txn.subscription ? <em>Monthly</em> : "Once"}
                </TableCell>
                <TableCell>{txn.type}</TableCell>
                <TableCell>{txn.name}</TableCell>
                <TableCell>
                  {DateTimeFormat.format(txn.created * 1000)}
                </TableCell>
              </TableRow>
            ))}
            {modifications.transactions.map((txn, i) => (
              <TableRow key={i}>
                <TableCell align="right">{i}</TableCell>
                <TableCell component="th" scope="row" align="right">
                  {dollars(txn.amount)}
                </TableCell>
                <TableCell />
                <TableCell>Adjustment</TableCell>
                <TableCell>{txn.name}</TableCell>
                <TableCell>
                  {DateTimeFormat.format(modifications.pollTime * 1000)}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Container>
  );
};

const Page: NextPage<PageProps> = ({ batch, modifications, ...props }) => {
  const classes = useStyles();
  if (batch === undefined || modifications === undefined) {
    return <Error404 {...props} />;
  } else {
    return (
      <Layout
        {...props}
        headerClassName={classes.hide}
        footerClassName={classes.hide}
        title="Mission Bit – Donation Dashboard"
      >
        <Head>
          <meta name="robots" content="noindex" />
        </Head>
        <DonateDashboard batch={batch} modifications={modifications} />
      </Layout>
    );
  }
};

export const getServerSideProps: GetServerSideProps<PageProps> = async () => {
  if (typeof window !== "undefined") {
    throw new Error("Must be called server-side");
  }
  const [layoutProps, batch, modifications] = await Promise.all([
    getLayoutStaticProps(),
    getBalanceTransactions(),
    getBalanceModifications(),
  ]);
  return {
    props: {
      ...layoutProps,
      batch,
      modifications,
    },
  };
};

export default Page;
