import {
  createStyles,
  Theme,
  WithStyles,
  withStyles,
} from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import PinIcon from "components/icons/Pin";
import * as React from "react";
import { brand } from "src/colors";
// import BuyGalaTicket from "./BuyGalaTicket";
import { galaStartEnd } from "./GalaDates";

const styles = (theme: Theme) =>
  createStyles({
    buyTicket: {
      marginTop: theme.spacing(2),
    },
    pin: {
      color: brand.violet,
      position: "relative",
      top: 4,
    },
    heading: {
      [theme.breakpoints.down("sm")]: {
        fontSize: theme.typography.h4.fontSize,
        fontWeight: theme.typography.h6.fontWeight,
      },
    },
    date: {
      fontSize: "1.25rem",
      [theme.breakpoints.down("sm")]: {
        fontSize: "1.25rem",
        fontWeight: theme.typography.h6.fontWeight,
      },
    },
  });

export const GalaCTA = withStyles(styles)(
  (props: WithStyles<typeof styles> & { heading?: React.ReactNode }) => {
    const { classes, heading = "Get Your Ticket" } = props;
    const { date, time } = galaStartEnd();
    return (
      <>
        <Typography
          component="h2"
          variant="h3"
          align="center"
          className={classes.heading}
        >
          {heading}
        </Typography>
        <Typography variant="body1" align="center" className={classes.date}>
          {date}
          <br />
          {time}
          <br />
          <PinIcon className={classes.pin} /> TBD
          <br />
          <br />
          More details coming soon!
          {/* <BuyGalaTicket className={classes.buyTicket} /> */}
        </Typography>
      </>
    );
  }
);
