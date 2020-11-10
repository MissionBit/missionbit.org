import { NextPage, GetServerSideProps } from "next";
import React, { useEffect, useState } from "react";
import {
  Layout,
  getLayoutStaticProps,
  LayoutStaticProps,
} from "components/Layout";
import Head from "next/head";
import Error404 from "pages/404";
import dayjs from "dayjs";
import usdFormatter from "src/usdFormatter";
import getBalanceTransactions, {
  BalanceTransactionBatch,
} from "src/stripeBalanceTransactions";

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
  useEffect(() => {
    let mounted = true;
    (async () => {
      await new Promise((res) => {
        setTimeout(res, 5000);
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
    <div>
      <span>
        Total:{" "}
        {usdFormatter.format(
          0.01 * transactions.reduce((sum, txn) => sum + txn.amount, 0)
        )}{" "}
        {dayjs(pollTime * 1000).format()}
      </span>
      <ul>
        {transactions.map((txn) => (
          <li key={txn.id}>
            {usdFormatter.format(0.01 * txn.amount)}
            {txn.subscription ? " MONTHLY! " : " "}
            {txn.name} {dayjs(txn.created * 1000).format()}
          </li>
        ))}
      </ul>
    </div>
  );
};

const Page: NextPage<PageProps> = ({ batch, ...props }) =>
  batch === undefined ? (
    <Error404 {...props} />
  ) : (
    <Layout {...props} title="Mission Bit – Donation Dashboard">
      <Head>
        <meta name="robots" content="noindex" />
      </Head>
      <DonateDashboard {...batch} />
    </Layout>
  );

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
