import * as React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";
import clsx from "clsx";
import DonateCard, { DonatePrefill } from "./DonateCard";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import SectionHeading from "./SectionHeading";

import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles((theme) => ({
  root: {
    paddingTop: theme.spacing(4),
  },
  donateCard: {
    marginTop: theme.spacing(4),
  },
  supportSummary: {
    [theme.breakpoints.up("md")]: {
      display: "none",
    },
    padding: theme.spacing(2),
    textAlign: "center",
  },
}));

async function loadStripePromise() {
  const stripePublishableKey = process.env.STRIPE_PK;
  if (stripePublishableKey === undefined) {
    throw new Error(
      `Missing STRIPE_PK${
        process.env.STRIPE_KEY_POSTFIX ?? ""
      } configuration for Stripe`
    );
  }
  return await loadStripe(stripePublishableKey);
}

const stripePromise = loadStripePromise();

export const MakeAnOnlineGift: React.FC<{
  className?: string;
  prefill?: DonatePrefill;
}> = ({ className, prefill }) => {
  const classes = useStyles();
  return (
    <Box component="section" className={clsx(classes.root, className)}>
      <SectionHeading>Make an online gift</SectionHeading>
      <Typography variant="body1" className={classes.supportSummary}>
        Join us in narrowing the digital divide by making a gift today to ensure
        that our students continue to have access to our educational experiences
        and our incredible community.
      </Typography>
      <Elements stripe={stripePromise}>
        <DonateCard className={classes.donateCard} prefill={prefill} />
      </Elements>
    </Box>
  );
};

export default MakeAnOnlineGift;
