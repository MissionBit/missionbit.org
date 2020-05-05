import * as React from "react";
import Box from "@material-ui/core/Box";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import AsteriskIcon from "./AsteriskIcon";
import { makeStyles } from "@material-ui/core/styles";
import { brand } from "../../src/colors";

const useStyles = makeStyles((theme) => ({
  root: {
    padding: theme.spacing(0, 2),
    backgroundColor: brand.indigo,
    color: theme.palette.common.white,
    textAlign: "center",
    marginBottom: "3rem",
    [theme.breakpoints.down("sm")]: {
      padding: 0,
    },
  },
  copy: {
    fontWeight: theme.typography.fontWeightLight,
    [theme.breakpoints.down("sm")]: {
      fontSize: theme.typography.h6.fontSize,
    },
  },
  flourish: {
    display: "block",
    margin: `${theme.spacing(4)}px auto`,
    color: brand.orange,
    fontSize: "2rem",
    [theme.breakpoints.down("sm")]: {
      fontSize: "1rem",
      margin: `${theme.spacing(2)}px auto`,
    },
  },
}));

const MissionStatement: React.FC<{}> = () => {
  const classes = useStyles();
  return (
    <Box component="section" id="mission" className={classes.root}>
      <Container>
        <AsteriskIcon className={classes.flourish} />
        <Typography variant="h4" className={classes.copy}>
          Mission Bit is dedicated to inspiring and empowering students to
          unlock their full potential. We build professional pathways for under
          resourced high school youth across the SF Bay Area by making computer
          science more accessible through our free project-based courses.
        </Typography>
        <AsteriskIcon className={classes.flourish} />
      </Container>
    </Box>
  );
};

export default MissionStatement;
