import * as React from "react";
import { makeStyles, Typography } from "@material-ui/core";
import Box from "@material-ui/core/Box";
import OrangeButton from "components/OrangeButton";
import { brand } from "src/colors";
import { Container } from "next/app";

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
  buttonProjs: {
    fontSize: theme.typography.pxToRem(25),
    marginBottom: theme.spacing(4),
    width: "30rem",
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

const PastProjectsButton: React.FC<{}> = () => {
  const classes = useStyles();
  return (
    <Box className={classes.root}>
      <Container className={classes.container}>
        <Typography className={classes.column}>
          <OrangeButton
            variant="contained"
            href="/demoday/spring21"
            size="large"
            className={classes.buttonProjs}
          >
            Check out Spring 2021 Demo Day projects here!
          </OrangeButton>
        </Typography>
        <Typography className={classes.column}>
          <OrangeButton
            variant="contained"
            href="/demoday/fall20"
            size="large"
            className={classes.buttonProjs}
          >
            Check out Fall 2020 Demo Day projects here!
          </OrangeButton>
        </Typography>
        <Typography className={classes.column}>
          <OrangeButton
            variant="contained"
            href="/demoday/summer20"
            size="large"
            className={classes.buttonProjs}
          >
            Check out Summer 2020 Demo Day projects here!
          </OrangeButton>
        </Typography>
      </Container>
    </Box>
  );
};

export default PastProjectsButton;
