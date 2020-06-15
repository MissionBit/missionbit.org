import * as React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import clsx from "clsx";
import DonateCard from "./DonateCard";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";

const useStyles = makeStyles((theme) => ({
  root: {
    paddingTop: theme.spacing(4),
  },
  title: {},
  donateCard: {
    marginTop: theme.spacing(4),
  },
}));

async function loadStripePromise() {
  const stripePublishableKey = process.env.STRIPE_PK;
  if (stripePublishableKey === undefined) {
    throw new Error(
      `Missing ${
        process.env.STRIPE_PK_NAME ?? "STRIPE_PK"
      } configuration for Stripe`
    );
  }
  return await loadStripe(stripePublishableKey);
}

const stripePromise = loadStripePromise();

export const MakeAnOnlineGift: React.FC<{ className?: string }> = ({
  className,
}) => {
  const classes = useStyles();
  return (
    <Box component="section" className={clsx(classes.root, className)}>
      <Typography variant="h2" className={classes.title}>
        Make an Online Gift
      </Typography>
      <Elements stripe={stripePromise}>
        <DonateCard className={classes.donateCard} />
      </Elements>
    </Box>
  );
};

export default MakeAnOnlineGift;