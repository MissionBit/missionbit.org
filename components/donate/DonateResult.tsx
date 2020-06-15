import * as React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Landing from "./Landing";
import { StripeSessionInfo } from "src/stripeSessionInfo";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles((theme) => ({
  root: {
    padding: theme.spacing(2),
  },
}));

const DonateResult: React.FC<{ sessionInfo: StripeSessionInfo }> = ({
  sessionInfo,
}) => {
  const classes = useStyles();
  return (
    <main id="main">
      <Landing />
      <Container className={classes.root}>
        <Typography component="pre">
          {JSON.stringify(sessionInfo, undefined, 4)}
        </Typography>
      </Container>
    </main>
  );
};

export default DonateResult;
