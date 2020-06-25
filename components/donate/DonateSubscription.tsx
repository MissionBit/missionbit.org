import * as React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import CircularProgress from "@material-ui/core/CircularProgress";
import Landing from "./Landing";
import Typography from "@material-ui/core/Typography";
import Link from "@material-ui/core/Link";
import { Frequency } from "src/stripeHelpers";
import { useState, useCallback } from "react";
import usdFormatter from "src/usdFormatter";

const useStyles = makeStyles((theme) => ({
  root: {
    padding: theme.spacing(2),
  },
}));

export interface DonateSubscriptionProps {
  id: string;
  amount: number;
  frequency: Frequency;
  paymentMethod: string;
  nextCycle: string | null;
  name: string;
  email: string;
}

const DonateSubscription: React.FC<DonateSubscriptionProps> = ({
  id,
  amount,
  frequency,
  paymentMethod,
  nextCycle: initialNextCycle,
  name,
  email,
}) => {
  const classes = useStyles();
  const donateEmail = "donate@missionbit.org";
  const [nextCycle, setNextCycle] = useState<string | null>(initialNextCycle);
  const [loading, setLoading] = useState<boolean>(false);
  const handleSubmit = useCallback(
    async (event) => {
      event.preventDefault();
      setLoading(true);
      try {
        const result = await fetch("/api/cancel-subscription", {
          method: "POST",
          body: JSON.stringify({ id }),
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
        });
        if (result.ok) {
          setNextCycle(null);
        }
      } finally {
        setLoading(false);
      }
    },
    [id]
  );
  return (
    <main id="main">
      <Landing />
      <Container className={classes.root}>
        <Typography variant="h2">Manage Your Donation</Typography>
        <Typography>
          Your <strong>{usdFormatter.format(amount / 100)}</strong> {frequency}{" "}
          donation by {paymentMethod} is{" "}
          {nextCycle ? <>active and will renew on {nextCycle}.</> : "canceled."}{" "}
          The email we have on file is:
          <br />
          {email}
          <br />
          <br />
          Name:
          <br />
          {name}
          <br />
          Subscription ID:
          <br />
          {id}
          <br />
          <br />
          If you have any questions about your {frequency} donation, contact us
          at{" "}
          <a
            href={`mailto:${donateEmail}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            {donateEmail}
          </a>
          .
        </Typography>
        <Typography>
          <Link href="/donate">Back to the donate page</Link>
        </Typography>
        {nextCycle ? (
          <form onSubmit={handleSubmit}>
            <Typography>
              To change your payment method or contribution level, cancel your
              donation below and create a new one. If you would like to cancel
              your monthly donation,{" "}
              <Link component="button" type="submit" disabled={loading}>
                click here
              </Link>
              .
            </Typography>
            {loading && <CircularProgress />}
          </form>
        ) : null}
      </Container>
    </main>
  );
};

export default DonateSubscription;
