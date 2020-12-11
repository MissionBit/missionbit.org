import * as React from "react";
import Box from "@material-ui/core/Box";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import VioletButton from "components/VioletButton";
import { brand } from "src/colors";
import FlourishSeparator from "components/programs/FlourishSeparator";
import PastProjectsButton from "./PastProjectsButton";

const useStyles = makeStyles((theme) => ({
  root: {},
  container: {
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    gridGap: theme.spacing(4),
    padding: theme.spacing(4, 2),
    marginBottom: theme.spacing(4),
    [theme.breakpoints.down("xs")]: {
      gridTemplateColumns: "1fr",
    },
  },
  column: {
    fontWeight: theme.typography.fontWeightBold,
    color: brand.indigo,
    textAlign: "center",
    fontSize: theme.typography.pxToRem(70),
    [theme.breakpoints.down("sm")]: {
      fontSize: theme.typography.h3.fontSize,
    },
  },
  button: {
    fontSize: theme.typography.pxToRem(25),
    width: "12rem",
    [theme.breakpoints.down("sm")]: {
      width: "10rem",
    },
    [theme.breakpoints.between("xs", "sm")]: {
      fontSize: theme.typography.h6.fontSize,
    },
    [theme.breakpoints.down("xs")]: {
      fontSize: "1rem",
    },
  },
}));

const DemoDayFooter: React.FC<{}> = () => {
  const classes = useStyles();
  return (
    <Box component="section" id="agenda" className={classes.root}>
      <Container className={classes.container}>
        <Typography className={classes.column}>
          Like what you've seen here today?
          <br />
          <VioletButton
            variant="contained"
            href="/donate"
            target="_blank"
            size="large"
            className={classes.button}
          >
            Donate
          </VioletButton>
        </Typography>
        <Typography className={classes.column}>
          Want to register for Spring 2021?
          <br />
          <VioletButton
            variant="contained"
            href="/programs/courses"
            size="large"
            className={classes.button}
          >
            Apply
          </VioletButton>
        </Typography>
      </Container>
      <FlourishSeparator />
      <PastProjectsButton />
    </Box>
  );
};

export default DemoDayFooter;
