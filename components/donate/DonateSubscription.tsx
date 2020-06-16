import * as React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Landing from "./Landing";
import Typography from "@material-ui/core/Typography";
import Link from "@material-ui/core/Link";
import { Frequency } from "src/stripeHelpers";

const useStyles = makeStyles((theme) => ({
  root: {
    padding: theme.spacing(2),
  },
}));

const usdFormatter = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
});

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
  nextCycle,
  name,
  email,
}) => {
  const classes = useStyles();
  const donateEmail = "donate@missionbit.org";
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
          <form method="post">
            {" "}
            <Typography>
              To change your payment method or contribution level, cancel your
              donation below and create a new one. If you would like to cancel
              your monthly donation,{" "}
              <Link component="button" type="submit">
                click here
              </Link>
              .
            </Typography>
          </form>
        ) : null}
      </Container>
    </main>
  );
};

export default DonateSubscription;
