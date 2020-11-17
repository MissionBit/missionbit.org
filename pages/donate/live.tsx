import { NextPage, GetServerSideProps } from "next";
import React, { useEffect, useMemo, useRef, useState } from "react";
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

import getBalanceModifications, {
  BalanceModifications,
} from "src/googleBalanceModifications";

import Box from "@material-ui/core/Box";

import fundraisingGoal from "src/fundraisingGoal";
import Typography from "@material-ui/core/Typography";
import { useElapsedTime } from "use-elapsed-time";
import { LinearProgress } from "@material-ui/core";

const usdFormatter = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
  maximumFractionDigits: 0,
  minimumFractionDigits: 0,
});

function easeOutCubic(t: number, b: number, c: number, d: number): number {
  const x = t / d - 1;
  return c * (x * x * x + 1) + b;
}

function dollars(cents: number) {
  return usdFormatter.format(Math.floor(0.01 * cents));
}

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: "#f2c46f",
    display: "grid",
    height: "100vh",
    maxHeight: "var(--document-height, 100vh)",
    gridTemplateColumns: "2fr 1fr",
    gridTemplateAreas: `
      "goal donors"
    `,
  },
  donateBanner: {
    position: "absolute",
    bottom: theme.spacing(4),
    boxShadow: "0px 0px 15px 5px rgba(230, 157, 21, 0.5)",
    backgroundColor: "#fff",
    opacity: 0.9,
    padding: theme.spacing(4, 2),
    width: "100%",
  },
  donateBannerText: {
    animation: `4s ${theme.transitions.easing.easeInOut} infinite $pulse`,
  },
  progressWrapper: {
    border: "1px solid #dedede",
    borderRadius: "0.5rem",
  },
  progressText: {
    fontSize: theme.typography.h4.fontSize,
  },
  progress: {
    width: "100%",
    borderRadius: "0.5rem",
    border: "2px solid #fff",
    height: theme.spacing(3),
  },
  "@keyframes pulse": {
    "0%": {
      transform: "scale(1)",
    },
    "60%": {
      transform: "scale(1)",
    },
    "80%": {
      transform: "scale(1.05)",
    },
    "100%": {
      transform: "scale(1)",
    },
  },
  donors: {
    gridArea: "donors",
  },
  goal: {
    gridArea: "goal",
    padding: theme.spacing(4, 2),
  },
  hide: { display: "none" },
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

const LiveDashboard: React.FC<DashboardProps> = (initial) => {
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

  const total = batch.transactions.reduce(
    (amount, txn) => amount + txn.amount,
    modifications.transactions.reduce((amount, txn) => amount + txn.amount, 0)
  );
  const donors = useMemo(() => {
    return batch.transactions.map((txn) => ({
      name: txn.name ?? "Anonymous",
      created: txn.created,
      amount: txn.amount,
    }));
  }, [batch.transactions]);
  return (
    <Box className={classes.root}>
      <Goal goalCents={fundraisingGoal.goalDollars * 100} totalCents={total} />
      <Donors transactions={donors} />
      <DonateBanner />
    </Box>
  );
};

interface CommonTransaction {
  name: string;
  amount: number;
  created: number;
}

const Goal: React.FC<{
  readonly goalCents: number;
  readonly totalCents: number;
}> = ({ totalCents, goalCents }) => {
  const classes = useStyles();
  const prev = useRef({ goalCents, totalCents: 0 });
  const { totalCents: prevTotal, goalCents: prevGoal } = prev.current;
  const duration = 6;
  const { elapsedTime } = useElapsedTime(
    goalCents !== prevGoal || totalCents !== prevTotal,
    { duration, autoResetKey: `${goalCents}/${totalCents}` }
  );
  const total = easeOutCubic(
    elapsedTime,
    prevTotal,
    totalCents - prevTotal,
    duration
  );
  const goal = easeOutCubic(
    elapsedTime,
    prevGoal,
    goalCents - prevGoal,
    duration
  );
  return (
    <Box
      display="flex"
      alignItems="center"
      flexDirection="column"
      justifyContent="center"
      className={classes.goal}
    >
      <Box>
        <Typography className={classes.progressText}>
          <strong>{dollars(total)}</strong> of {dollars(goal)}
        </Typography>
      </Box>
      <Box
        display="flex"
        alignItems="center"
        width="100%"
        className={classes.progressWrapper}
      >
        <LinearProgress
          className={classes.progress}
          color="primary"
          variant="determinate"
          value={100 * (total / goal)}
        />
      </Box>
    </Box>
  );
};

const Donors: React.FC<{
  readonly transactions: readonly CommonTransaction[];
}> = ({ transactions }) => {
  const classes = useStyles();
  return (
    <Box className={classes.donors}>
      {transactions.map(({ name, amount, created }) => (
        <Box key={`${name}-${amount}-${created}`}>
          {name} {dollars(amount)} {created}
        </Box>
      ))}
    </Box>
  );
};

const DonateBanner: React.FC<{}> = () => {
  const classes = useStyles();
  return (
    <Box className={classes.donateBanner}>
      <Typography
        align="center"
        variant="h1"
        className={classes.donateBannerText}
      >
        donate.missionbit.org
      </Typography>
    </Box>
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
        requireDocumentSize={true}
        headerClassName={classes.hide}
        footerClassName={classes.hide}
        title={fundraisingGoal.name}
      >
        <Head>
          <meta name="robots" content="noindex" />
        </Head>
        <LiveDashboard batch={batch} modifications={modifications} />
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
