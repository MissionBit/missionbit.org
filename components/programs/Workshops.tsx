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
            We also teach 90-minute workshops across the Bay Area!
          </Typography>
          <Typography variant="h6">
            Create your own portfolio and learning HTML, CSS, and Javascript!
          </Typography>
          <Typography variant="h6">
            Learn about gameplay, the Unity platform, and how to create your own
            game!
          </Typography>
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
