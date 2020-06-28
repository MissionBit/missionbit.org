import * as React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Box from "@material-ui/core/Box";
import { StripeSessionInfo } from "src/stripeSessionInfo";
import Typography from "@material-ui/core/Typography";
import usdFormatter from "src/usdFormatter";
import { DONATE_EMAIL } from "src/emails";
import ReceiptPhotos from "./ReceiptPhotos";
import { LongDateTimeFormat } from "src/dates";
import { MAILING_ADDRESS, PHONE_NUMBER, EIN } from "src/orgInfo";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "grid",
    gridTemplateAreas: `
      "photos receipt"
    `,
    gridTemplateColumns: "1fr 2fr",
    padding: theme.spacing(2),
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
    textTransform: "uppercase",
    [theme.breakpoints.down("sm")]: {
      fontSize: theme.typography.pxToRem(40),
      marginBottom: theme.spacing(2),
    },
  },
  subHeading: {
    marginTop: theme.spacing(4),
    textTransform: "uppercase",
    [theme.breakpoints.down("sm")]: {
      fontSize: theme.typography.pxToRem(28),
      marginBottom: theme.spacing(2),
    },
  },
  dl: {
    fontSize: theme.typography.pxToRem(20),
    [theme.breakpoints.down("sm")]: {
      fontSize: theme.typography.pxToRem(16),
    },
    marginTop: theme.spacing(2),
    "& > dt": {
      [theme.breakpoints.up("sm")]: {
        display: "inline",
      },
    },
    "& > dd": {
      fontWeight: theme.typography.fontWeightMedium,
      marginLeft: "1rem",
      [theme.breakpoints.up("sm")]: {
        display: "inline",
        marginLeft: "0.25rem",
      },
    },
    "& > dd::after": {
      content: '""',
      display: "block",
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
          Donation Receipt
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
          <dt>Date Received</dt>
          <dd>{LongDateTimeFormat.format(created)}</dd>
          <dt>Transaction ID</dt>
          <dd>{id}</dd>
        </Typography>
        <Typography component="dl" className={classes.dl}>
          <dt>Organization Name</dt>
          <dd>Mission Bit</dd>
          <dt>Address</dt>
          <dd>{MAILING_ADDRESS}</dd>
          <dt>Phone Number</dt>
          <dd>{PHONE_NUMBER}</dd>
          <dt>Contact Email</dt>
          <dd>
            <a
              href={`mailto:${DONATE_EMAIL}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              {DONATE_EMAIL}
            </a>
          </dd>
          <dt>EIN</dt>
          <dd>{EIN}</dd>
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
