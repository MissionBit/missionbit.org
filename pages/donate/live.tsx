import { NextPage, GetServerSideProps } from "next";
import React, {
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";
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
import { lighten, makeStyles } from "@material-ui/core/styles";

import getBalanceModifications, {
  BalanceModifications,
} from "src/googleBalanceModifications";

import Box from "@material-ui/core/Box";

import Typography from "@material-ui/core/Typography";
import { useElapsedTime } from "use-elapsed-time";
import LinearProgress from "@material-ui/core/LinearProgress";
import Paper from "@material-ui/core/Paper";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import Collapse from "@material-ui/core/Collapse";
import Link from "@material-ui/core/Link";
import Image from "next/image";

dayjs.extend(relativeTime);

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
    backgroundColor: "#c3a3cc",
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
    boxShadow: "0px 0px 15px 5px rgba(195, 163, 204, 0.5)",
    backgroundColor: "#fff",
    opacity: 0.9,
    padding: theme.spacing(4, 2),
    width: "100%",
  },
  donateBannerText: {
    animation: `4s ${theme.transitions.easing.easeInOut} infinite $pulse`,
  },
  donorBubble: {
    display: "grid",
    padding: theme.spacing(2),
    margin: theme.spacing(2),
    gridAutoColumns: "auto",
    gridTemplateAreas: `
      "name amount"
      "time amount"
    `,
  },
  donorAmount: {
    gridArea: "amount",
    textAlign: "right",
    alignSelf: "center",
  },
  donorName: {
    gridArea: "name",
  },
  donorTime: {
    gridArea: "time",
  },
  progressWrapper: {
    border: "1px solid #dedede",
    borderRadius: "0.5rem",
  },
  progressText: {
    fontSize: theme.typography.h4.fontSize,
    flex: 1,
    marginRight: "1rem",
  },
  donorCount: {
    textAlign: "right",
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
    overflow: "hidden",
  },
  goal: {
    gridArea: "goal",
    padding: theme.spacing(4, 2),
  },
  logo: {
    objectFit: "contain",
    marginBottom: theme.spacing(2),
  },
  hide: { display: "none" },
  barColorPrimary: {
    backgroundColor: "#5A6AC9",
  },
  colorPrimary: {
    backgroundColor: lighten("#5A6AC9", 0.6),
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

function addSimulatedTransaction(
  batch: BalanceTransactionBatch
): BalanceTransactionBatch {
  const created = dayjs().unix();
  const item = {
    ...(batch.transactions[
      Math.floor(Math.random() * batch.transactions.length)
    ] ?? {
      name: "Anonymous",
      amount: 100 * (1 + Math.floor(100 * Math.random())),
      subscription: false,
      type: "direct",
    }),
    id: `fake-${created}`,
    created,
  };
  return {
    ...batch,
    pollTime: created,
    transactions: [item, ...batch.transactions],
  };
}

interface DashboardProps {
  readonly batch: BalanceTransactionBatch;
  readonly modifications: BalanceModifications;
  readonly simulate: boolean;
}

const LiveDashboard: React.FC<DashboardProps> = (initial) => {
  const [batch, setBatch] = useState(initial.batch);
  const [modifications, setModifications] = useState(initial.modifications);
  const [simulate, setSimulate] = useState(false);
  const [errors, setErrors] = useState(0);
  const classes = useStyles();
  const batchTransactions = useMemo(() => {
    const ignored = new Set(
      modifications.ignoredTransactions.map((ignored) => ignored.id)
    );
    return batch.transactions.filter((txn) => !ignored.has(txn.id));
  }, [batch.transactions, modifications.ignoredTransactions]);

  useEffect(() => {
    let mounted = true;
    (async () => {
      await new Promise((res) => setTimeout(res, 10 * 1000));
      if (!mounted) {
        return;
      }
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
  useEffect(() => {
    if (!simulate) {
      return;
    }
    const interval = setInterval(() => setBatch(addSimulatedTransaction), 1000);
    return () => clearInterval(interval);
  }, [simulate]);
  const toggleSimulate = useCallback(() => {
    setSimulate((simulate) => initial.simulate && !simulate);
  }, [initial.simulate, setSimulate]);
  const total = batchTransactions.reduce(
    (amount, txn) => amount + txn.amount,
    modifications.transactions.reduce((amount, txn) => amount + txn.amount, 0)
  );
  const donors = useMemo(() => {
    const donors: CommonTransaction[] = [];
    for (const txn of batchTransactions) {
      donors.push({
        name: txn.name ?? "Anonymous",
        created: txn.created,
        amount: txn.amount,
      });
    }
    for (const txn of modifications.transactions) {
      donors.push({
        name: txn.name ?? "Anonymous",
        created: txn.created,
        amount: txn.amount,
      });
    }
    donors.sort((a, b) => b.created - a.created);
    return donors;
  }, [batchTransactions, modifications.transactions]);
  return (
    <Box className={classes.root} onClick={toggleSimulate}>
      <Goal
        goalCents={modifications.goalCents}
        totalCents={total}
        donorCount={
          batchTransactions.length + modifications.transactions.length
        }
      />
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

interface GoalValues {
  readonly totalCents: number;
  readonly goalCents: number;
}

function easeGoal(
  elapsedTime: number,
  duration: number,
  start: GoalValues,
  goal: GoalValues
): GoalValues {
  return {
    totalCents: easeOutCubic(
      elapsedTime,
      start.totalCents,
      goal.totalCents - start.totalCents,
      duration
    ),
    goalCents: easeOutCubic(
      elapsedTime,
      start.goalCents,
      goal.goalCents - start.goalCents,
      duration
    ),
  };
}

function goalEq(a: GoalValues, b: GoalValues): boolean {
  return a.goalCents === b.goalCents && a.totalCents === b.totalCents;
}

function useAnimatedGoal(goal: GoalValues): GoalValues {
  const prevGoalRef = useRef(goal);
  const startGoalRef = useRef({ ...goal, totalCents: 0 });
  const animGoalRef = useRef(startGoalRef.current);
  const duration = 6;
  const { elapsedTime, reset } = useElapsedTime({
    isPlaying: !goalEq(goal, startGoalRef.current),
    duration,
  });
  useEffect(() => {
    reset();
  }, [reset, goal.goalCents, goal.totalCents]);
  const didReset = !goalEq(prevGoalRef.current, goal);
  if (didReset) {
    prevGoalRef.current = goal;
    startGoalRef.current = animGoalRef.current;
  } else if (elapsedTime >= duration) {
    startGoalRef.current = goal;
  }
  animGoalRef.current = easeGoal(
    elapsedTime,
    duration,
    startGoalRef.current,
    prevGoalRef.current
  );
  return animGoalRef.current;
}

const Goal: React.FC<{
  readonly goalCents: number;
  readonly totalCents: number;
  readonly donorCount: number;
}> = ({ donorCount, ...goalValues }) => {
  const classes = useStyles();
  const { goalCents, totalCents } = useAnimatedGoal(goalValues);
  return (
    <Box
      display="flex"
      alignItems="center"
      flexDirection="column"
      justifyContent="center"
      className={classes.goal}
    >
      <Image
        src={require("public/images/missionbit-logo-horizontal.svg").default}
        alt="Mission Bit logo"
        className={classes.logo}
      />
      <Box display="flex" width="100%">
        <Typography className={classes.progressText}>
          <strong>{dollars(totalCents)}</strong> of {dollars(goalCents)}
        </Typography>
        <Typography className={classes.donorCount}>
          {donorCount} Donors
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
          classes={{
            colorPrimary: classes.colorPrimary,
            barColorPrimary: classes.barColorPrimary,
          }}
          color="primary"
          variant="determinate"
          value={Math.min(100, 100 * (totalCents / goalCents))}
        />
      </Box>
    </Box>
  );
};

const Donors: React.FC<{
  readonly transactions: readonly CommonTransaction[];
}> = ({ transactions }) => {
  const classes = useStyles();
  const [now, setNow] = useState(dayjs);
  const [appear, setAppear] = useState(false);
  useEffect(() => {
    setAppear(true);
  }, []);
  useEffect(() => {
    const interval = setInterval(() => setNow(dayjs()), 30 * 1000);
    return () => clearInterval(interval);
  }, []);
  useEffect(() => setNow(dayjs()), [transactions]);
  return (
    <Box className={classes.donors}>
      {transactions.slice(0, 15).map(({ name, amount, created }) => (
        <Collapse
          key={`${name}-${amount}-${created}`}
          timeout={300}
          appear={appear}
          in={true}
        >
          <Paper elevation={2} square={false} className={classes.donorBubble}>
            <Typography className={classes.donorName}>{name}</Typography>
            <Typography className={classes.donorAmount}>
              {dollars(amount)}
            </Typography>
            <Typography className={classes.donorTime}>
              {dayjs(1000 * created).from(now)}
            </Typography>
          </Paper>
        </Collapse>
      ))}
    </Box>
  );
};

const DonateBanner: React.FC<{}> = () => {
  const classes = useStyles();
  return (
    <Link href="/donate" className={classes.donateBanner}>
      <Typography
        align="center"
        variant="h1"
        className={classes.donateBannerText}
      >
        donate.missionbit.org
      </Typography>
    </Link>
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
        title={modifications.goalName}
      >
        <Head>
          <meta name="robots" content="noindex" />
        </Head>
        <LiveDashboard
          batch={batch}
          modifications={modifications}
          simulate={false}
        />
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
