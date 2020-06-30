import * as React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import CircularProgress from "@material-ui/core/CircularProgress";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import Typography from "@material-ui/core/Typography";
import Link from "@material-ui/core/Link";
import Landing from "./Landing";
import { Frequency } from "src/stripeHelpers";
import { useState, useCallback } from "react";
import usdFormatter from "src/usdFormatter";
import { DONATE_EMAIL } from "src/emails";
import { ShortDateFormat } from "src/dates";

const useStyles = makeStyles((theme) => ({
  root: {
    padding: theme.spacing(2),
  },
  info: {
    marginTop: theme.spacing(2),
  },
  receiptHeading: {
    marginTop: theme.spacing(2),
  },
  receipts: {
    marginTop: theme.spacing(1),
  },
  cancelLink: {
    ...theme.typography.body1,
    verticalAlign: "bottom",
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
  paidInvoices: DonateSubscriptionInvoice[];
}

export interface DonateSubscriptionInvoice {
  id: string;
  amount: number;
  created: number;
}

const DonateSubscription: React.FC<DonateSubscriptionProps> = ({
  id,
  amount,
  frequency,
  paymentMethod,
  nextCycle: initialNextCycle,
  name,
  email,
  paidInvoices,
}) => {
  const classes = useStyles();
  const [nextCycle, setNextCycle] = useState<string | null>(initialNextCycle);
  const [open, setOpen] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);
  const handleSubmit = useCallback((event) => {
    event.preventDefault();
    setOpen(true);
  }, []);
  const handleClose = useCallback((event) => {
    event.preventDefault();
    setOpen(false);
  }, []);
  const handleConfirm = useCallback(
    async (event) => {
      event.preventDefault();
      setOpen(true);
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
        setOpen(false);
      }
    },
    [id]
  );
  return (
    <main id="main">
      <Landing />
      <Container className={classes.root}>
        <Typography variant="h2">Manage Your Donation</Typography>
        <Typography className={classes.info}>
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
            href={`mailto:${DONATE_EMAIL}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            {DONATE_EMAIL}
          </a>
          .
        </Typography>
        <Typography
          variant="h6"
          color="textSecondary"
          className={classes.receiptHeading}
        >
          Receipts:
        </Typography>
        <ul className={classes.receipts}>
          {paidInvoices.map(({ id, amount, created }) => (
            <Typography component="li" key={id}>
              <a href={`/donate/receipts/${id}`}>
                {ShortDateFormat.format(created * 1000)}
              </a>{" "}
              {usdFormatter.format(amount / 100)}
            </Typography>
          ))}
        </ul>
        {nextCycle ? (
          <form onSubmit={handleSubmit}>
            <Typography>
              To change your payment method or contribution level, cancel your
              donation and create a new one. If you would like to cancel your
              monthly donation,{" "}
              <Link
                component="button"
                type="submit"
                color="textPrimary"
                underline="always"
                className={classes.cancelLink}
                disabled={loading}
              >
                click here
              </Link>
              .
            </Typography>
            {loading && <CircularProgress />}
          </form>
        ) : null}
      </Container>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">Confirm Cancellation</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            If you confirm and end your recurring donation now, you will not be
            charged again.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="secondary" disabled={loading}>
            Not Now
          </Button>
          <Button onClick={handleConfirm} color="secondary" disabled={loading}>
            Confirm {loading && <CircularProgress color="secondary" />}
          </Button>
        </DialogActions>
      </Dialog>
    </main>
  );
};

export default DonateSubscription;
