import * as React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Landing from "./Landing";
import Typography from "@material-ui/core/Typography";
import Link from "@material-ui/core/Link";
import { DONATE_EMAIL } from "src/emails";

const useStyles = makeStyles((theme) => ({
  root: {
    padding: theme.spacing(2),
  },
}));

const DonateCancel: React.FC<{}> = () => {
  const classes = useStyles();
  return (
    <main id="main">
      <Landing />
      <Container className={classes.root}>
        <Typography variant="h2">Donation canceled</Typography>
        <Typography>
          Your donation has been canceled. If you have any questions about
          donations, contact us at{" "}
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
      </Container>
    </main>
  );
};

export default DonateCancel;
