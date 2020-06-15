import * as React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Landing from "./Landing";
import { StripeSessionInfo } from "src/stripeSessionInfo";
import Typography from "@material-ui/core/Typography";
import Link from "@material-ui/core/Link";

const useStyles = makeStyles((theme) => ({
  root: {
    padding: theme.spacing(2),
  },
}));

const usdFormatter = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
});

const DonateResult: React.FC<{ sessionInfo: StripeSessionInfo }> = ({
  sessionInfo,
}) => {
  const classes = useStyles();
  const { amount, email, frequency, payment_method, id } = sessionInfo;
  const donate_email = "donate@missionbit.org";
  return (
    <main id="main">
      <Landing />
      <Container className={classes.root}>
        <Typography variant="h2">Thank you!</Typography>
        <Typography>
          Your <strong>{usdFormatter.format(amount / 100)}</strong> {frequency}{" "}
          donation by {payment_method} has been collected and a receipt has been
          sent to:
          <br />
          {email}
          <br />
          <br />
          Transaction ID:
          <br />
          {id}
          <br />
          <br />
          If you have any questions about your {frequency} donation, contact us
          at{" "}
          <a
            href={`mailto:${donate_email}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            {donate_email}
          </a>
          .
        </Typography>
        <Typography>
          <Link href="/donate">Back to the donate page</Link>
        </Typography>
      </Container>
    </main>
  );
};

export default DonateResult;
