import * as React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Box from "@material-ui/core/Box";
import { StripeSessionInfo } from "src/stripeSessionInfo";
import Typography from "@material-ui/core/Typography";
import usdFormatter from "src/usdFormatter";
import { DONATE_EMAIL } from "src/emails";
import ReceiptPhotos from "./ReceiptPhotos";
import { LongDateFormat } from "src/dates";
import { PHONE_NUMBER, EIN, MAILING_ADDRESS } from "src/orgInfo";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "grid",
    gridTemplateAreas: `
      "photos receipt"
    `,
    gridTemplateColumns: "1fr 2fr",
    padding: theme.spacing(2),
    "@media print": {
      gridTemplateColumns: "1fr",
      gridTemplateAreas: `"receipt"`,
    },
    [theme.breakpoints.down("xs")]: {
      gridTemplateColumns: "1fr",
      gridGap: theme.spacing(4),
      gridTemplateAreas: `
        "receipt"
        "photos"
      `,
      padding: theme.spacing(0, 0, 2, 0),
    },
  },
  receipt: {
    gridArea: "receipt",
    padding: theme.spacing(0, 2),
  },
  photos: {
    gridArea: "photos",
  },
  heading: {
    [theme.breakpoints.down("sm")]: {
      fontSize: theme.typography.pxToRem(40),
      marginBottom: theme.spacing(2),
    },
  },
  subHeading: {
    marginTop: theme.spacing(4),
    [theme.breakpoints.down("sm")]: {
      fontSize: theme.typography.pxToRem(28),
      marginBottom: theme.spacing(2),
    },
  },
  orgInfo: {
    marginTop: theme.spacing(4),
    fontStyle: "inherit",
  },
  dl: {
    "@media print": {
      display: "grid",
      gridTemplateColumns: "max-content auto",
      "& > dt": {
        gridColumnStart: 1,
      },
      "& > dd": {
        gridColumnStart: 2,
        marginLeft: "1rem",
      },
    },
    [theme.breakpoints.up("md")]: {
      display: "grid",
      gridTemplateColumns: "max-content auto",
      "& > dt": {
        gridColumnStart: 1,
      },
      "& > dd": {
        gridColumnStart: 2,
        marginLeft: "1rem",
      },
    },
    fontSize: theme.typography.pxToRem(20),
    [theme.breakpoints.down("sm")]: {
      fontSize: theme.typography.pxToRem(16),
    },
    marginTop: theme.spacing(2),
    "& > dd": {
      fontWeight: theme.typography.fontWeightMedium,
    },
    "& > dt::after": {
      content: `": "`,
    },
  },
  body: {
    marginTop: theme.spacing(2),
  },
}));

const DonateResult: React.FC<{ sessionInfo: StripeSessionInfo }> = ({
  sessionInfo,
}) => {
  const classes = useStyles();
  const {
    amount,
    name,
    email,
    frequency,
    payment_method,
    created,
    id,
    subscriptionId,
  } = sessionInfo;
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
          Donation receipt
        </Typography>
        <Typography component="dl" className={classes.dl}>
          <dt>Donor Name</dt>
          <dd>{name}</dd>
          <dt>Donor Email</dt>
          <dd>{email}</dd>
          <dt>Contribution ({frequency})</dt>
          <dd>{usdFormatter.format(amount / 100)} USD</dd>
          <dt>Payment Method</dt>
          <dd>{payment_method}</dd>
          <dt>Charge Date</dt>
          <dd>{LongDateFormat.format(created * 1000)}</dd>
          {subscriptionId ? (
            <>
              <dt>Subscription ID</dt>
              <dd>
                <a href={`/donate/subscriptions/${subscriptionId}`}>
                  {subscriptionId}
                </a>
              </dd>
            </>
          ) : null}
          <dt>Transaction ID</dt>
          <dd>{id}</dd>
        </Typography>
        <Typography component="address" className={classes.orgInfo}>
          Mission Bit
          <br />
          Tax ID: {EIN}
          <br />
          {MAILING_ADDRESS}
          <br />
          {PHONE_NUMBER}
          <br />
          <a
            href={`mailto:${DONATE_EMAIL}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            {DONATE_EMAIL}
          </a>
          <br />
        </Typography>
        <Typography className={classes.body}>
          Mission Bit is a 501(c)(3) nonprofit organization. Your contribution
          is tax-deductible to the extent allowed by law. No goods or services
          were provided in exchange for your generous financial donation. Thank
          you.
        </Typography>
      </Box>
    </Container>
  );
};

export default DonateResult;
