import * as React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Box from "@material-ui/core/Box";
import { StripeSessionInfo } from "src/stripeSessionInfo";
import Typography from "@material-ui/core/Typography";
import Link from "@material-ui/core/Link";
import usdFormatter from "src/usdFormatter";
import { DONATE_EMAIL } from "src/emails";
import ReceiptPhotos from "./ReceiptPhotos";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "grid",
    gridTemplateAreas: `
      "photos receipt"
    `,
    gridTemplateColumns: "1fr 1fr",
    padding: theme.spacing(2),
  },
  receipt: {
    gridArea: "receipt",
    padding: theme.spacing(2),
  },
  photos: {
    gridArea: "photos",
  },
  heading: {
    textTransform: "uppercase",
  },
  subHeading: {
    marginTop: theme.spacing(4),
    textTransform: "uppercase",
  },
}));

const DonateResult: React.FC<{ sessionInfo: StripeSessionInfo }> = ({
  sessionInfo,
}) => {
  const classes = useStyles();
  const { amount, name, email, frequency, payment_method, id } = sessionInfo;
  return (
    <Container component="main" id="main" className={classes.root}>
      <ReceiptPhotos className={classes.photos} />
      <Box className={classes.receipt}>
        <Typography variant="h1" className={classes.heading}>
          Thank you
        </Typography>
        <Typography>
          Dear {name},<br />
          <br />
          We want to thank you for your generosity! You are a true champion of
          this work. We look forward to our continued growth and success here at
          Mission Bit.
          <br />
          <br />
          Best,
          <br />
          <br />
          Christina Ortega
          <br />
          CEO, Mission Bit
        </Typography>
        <Typography variant="h2" className={classes.subHeading}>
          Donation Receipt
        </Typography>
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
            href={`mailto:${DONATE_EMAIL}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            {DONATE_EMAIL}
          </a>
          .
        </Typography>
        <Typography>
          <Link href="/donate">Back to the donate page</Link>
        </Typography>
      </Box>
    </Container>
  );
};

export default DonateResult;
