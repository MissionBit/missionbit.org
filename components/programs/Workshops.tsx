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
  Theme
} from "@material-ui/core/styles";
import Link from "@material-ui/core/Link";

const useStyles = makeStyles(theme => ({
  root: {
    padding: `${theme.spacing(2)}px 0`,
    textAlign: "center"
  },
  wrapper: {
    "& > *": {
      margin: `${theme.spacing(2)}px 0`
    },
    "& > h5": {
      fontWeight: "bold"
    },
    "& > img": {
      maxWidth: "100%",
      maxHeight: "25vh",
      objectFit: "contain"
    }
  }
}));

const themeOverrides = (theme: Theme): ThemeOptions => ({
  palette: {
    type: "dark",
    background: {
      paper: brand.orange
    },
    text: {
      primary: theme.palette.common.black
    }
  },
  typography: {
    button: theme.typography.button
  }
});

const Workshops: React.FC<{}> = () => {
  const classes = useStyles();
  const defaultTheme = useTheme();
  const theme = useMemo(() => createMuiTheme(themeOverrides(defaultTheme)), [
    defaultTheme
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
            <strong>Web Design Workshop:</strong> Spend 90 minutes creating your
            own portfolio and learning HTML, CSS, and Javascript.
          </Typography>
          <img
            src="images/program/workshops/workshops-1.jpg"
            alt="Student at laptop"
          />
          <Typography variant="h6">
            <strong>Unity Game Design Workshop:</strong> Spend 90 minutes
            learning about gameplay, the Unity platform, and how to create your
            own game.
          </Typography>
          <img
            src="images/program/workshops/workshops-2.jpg"
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
