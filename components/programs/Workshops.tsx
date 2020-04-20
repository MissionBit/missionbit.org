import * as React from "react";
import { useMemo } from "react";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import Paper from "@material-ui/core/Paper";
import { brand } from "../../src/colors";
import {
  ThemeOptions,
  makeStyles,
  ThemeProvider,
  createMuiTheme,
  useTheme,
  Theme,
} from "@material-ui/core/styles";
import Link from "@material-ui/core/Link";

const useStyles = makeStyles((theme) => ({
  root: {
    padding: theme.spacing(2, 0),
    textAlign: "center",
  },
  workshopHeading: {
    [theme.breakpoints.up("md")]: {
      display: "block",
    },
  },
  wrapper: {
    display: "flex",
    flexWrap: "wrap",
    alignItems: "center",
    justifyContent: "center",
    [theme.breakpoints.down("sm")]: {
      "& > h5": {
        fontSize: theme.typography.h6.fontSize,
      },
      "& > h6": {
        fontSize: theme.typography.body1.fontSize,
      },
    },
    [theme.breakpoints.up("md")]: {
      "& > h6": {
        flex: "1 0 50%",
        textAlign: "left",
      },
      "& > img": {
        flex: 1,
        marginLeft: theme.spacing(2),
      },
    },
    "& > *": {
      margin: theme.spacing(2, 0),
    },
    "& > h5": {
      flex: "1 0 100%",
      fontWeight: "bold",
    },
    "& > img": {
      maxWidth: "100%",
      maxHeight: "25vh",
      objectFit: "contain",
    },
  },
}));

const themeOverrides = (theme: Theme): ThemeOptions => ({
  palette: {
    type: "dark",
    background: {
      paper: brand.orange,
    },
    text: {
      primary: theme.palette.common.black,
    },
  },
  typography: {
    button: theme.typography.button,
  },
});

const Workshops: React.FC<{}> = () => {
  const classes = useStyles();
  const defaultTheme = useTheme();
  const theme = useMemo(() => createMuiTheme(themeOverrides(defaultTheme)), [
    defaultTheme,
  ]);
  return (
    <ThemeProvider theme={theme}>
      <Paper
        elevation={0}
        square
        className={classes.root}
        component="section"
        id="workshops"
      >
        <Container className={classes.wrapper}>
          <Typography variant="h5">
            In addition to our semester long classes, we also teach 90-minute
            workshops across the Bay Area.
          </Typography>
          <Typography variant="h6">
            <strong className={classes.workshopHeading}>
              Web Design Workshop:
            </strong>{" "}
            Spend 90 minutes creating your own portfolio and learning HTML, CSS,
            and Javascript.
          </Typography>
          <img
            src={require("../../public/images/program/workshops/workshops-1.jpg")}
            alt="Student at laptop"
          />
          <Typography variant="h6">
            <strong className={classes.workshopHeading}>
              Unity Game Design Workshop:
            </strong>{" "}
            Spend 90 minutes learning about gameplay, the Unity platform, and
            how to create your own game.
          </Typography>
          <img
            src={require("../../public/images/program/workshops/workshops-2.jpg")}
            alt="Student at laptop with mentor"
          />
          <Typography variant="h5">
            Do you work with 8th graders or high schoolers and want Mission Bit
            to come to your school site or community-based organization? Reach
            out to{" "}
            <Link href="mailto:cora@missionbit.org">cora@missionbit.org</Link>!
          </Typography>
        </Container>
      </Paper>
    </ThemeProvider>
  );
};

export default Workshops;
