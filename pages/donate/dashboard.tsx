import { NextPage, GetServerSideProps } from "next";
import React, { useEffect, useState } from "react";
import {
  Layout,
  getLayoutStaticProps,
  LayoutStaticProps,
} from "components/Layout";
import Head from "next/head";
import Error404 from "pages/404";

import usdFormatter from "src/usdFormatter";
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

const useStyles = makeStyles({
  table: {},
  hide: { display: "none" },
});

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

const DonateDashboard: React.FC<BalanceTransactionBatch> = (initialBatch) => {
  const [batch, setBatch] = useState(initialBatch);
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
        const json = await res.json();
        if (!mounted) {
          return;
        }
        setBatch(mergeBatch(batch, json));
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
  return (
    <>
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
              <TableCell>Name</TableCell>
              <TableCell>Time</TableCell>
            </TableRow>
            <TableRow>
              <TableCell />
              <TableCell align="right">
                {usdFormatter.format(
                  0.01 *
                    transactions.reduce((amount, txn) => amount + txn.amount, 0)
                )}
              </TableCell>
              <TableCell>TOTAL</TableCell>
              <TableCell />
              <TableCell>{DateTimeFormat.format(pollTime * 1000)}</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {transactions.map((txn, i) => (
              <TableRow key={txn.id}>
                <TableCell align="right">{transactions.length - i}</TableCell>
                <TableCell component="th" scope="row" align="right">
                  {usdFormatter.format(0.01 * txn.amount)}
                </TableCell>
                <TableCell>
                  {txn.subscription ? <em>Monthly</em> : "Once"}
                </TableCell>
                <TableCell>{txn.name}</TableCell>
                <TableCell>
                  {DateTimeFormat.format(txn.created * 1000)}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
};

const Page: NextPage<PageProps> = ({ batch, ...props }) => {
  const classes = useStyles();
  if (batch === undefined) {
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
        <DonateDashboard {...batch} />
      </Layout>
    );
  }
};

export const getServerSideProps: GetServerSideProps<PageProps> = async () => {
  if (typeof window !== "undefined") {
    throw new Error("Must be called server-side");
  }
  const layoutProps = await getLayoutStaticProps();
  return {
    props: {
      ...layoutProps,
      batch: await getBalanceTransactions(),
    },
  };
};

export default Page;
