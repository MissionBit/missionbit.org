import * as React from "react";
import { useMemo } from "react";
import {
  ThemeOptions,
  makeStyles,
  ThemeProvider,
  createMuiTheme,
  useTheme,
  Theme,
} from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Paper from "@material-ui/core/Paper";
import { brand } from "src/colors";
import SubscribeImage from "./SubscribeImage";

const useStyles = makeStyles((theme) => ({
  root: {
    "@media print": {
      display: "none",
    },
    padding: theme.spacing(3),
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    [theme.breakpoints.down("sm")]: {
      "& > form > h5": {
        fontSize: theme.typography.h6.fontSize,
      },
    },
  },
  field: {
    margin: theme.spacing(2, 0),
    width: 340,
    maxWidth: "100%",
    [theme.breakpoints.down("sm")]: {
      width: "100%",
    },
    "& > label": {
      fontWeight: theme.typography.fontWeightBold,
    },
  },
  photo: {
    width: "20vw",
    maxWidth: "288px",
    height: "auto",
    [theme.breakpoints.down("sm")]: {
      display: "none",
    },
  },
}));

const themeOverrides = (theme: Theme): ThemeOptions => ({
  ...theme,
  palette: {
    type: "dark",
    background: {
      paper: brand.indigo,
    },
    primary: theme.palette.primary,
  },
  typography: {
    fontFamily: theme.typography.fontFamily,
    button: theme.typography.button,
  },
});

const Subscribe: React.FC<{}> = () => {
  const classes = useStyles();
  const defaultTheme = useTheme();
  const theme = useMemo(() => createMuiTheme(themeOverrides(defaultTheme)), [
    defaultTheme,
  ]);
  return (
    <ThemeProvider theme={theme}>
      <Paper
        square
        component="section"
        elevation={0}
        className={classes.root}
        id="get-updates"
      >
        <SubscribeImage className={classes.photo} />
        <form
          action="https://missionbit.us3.list-manage.com/subscribe/post?u=dca59ff0c46a6c1be0d20cf89&amp;id=ec36efa7f3"
          method="post"
          id="mc-embedded-subscribe-form"
          name="mc-embedded-subscribe-form"
          target="_blank"
          noValidate
        >
          <Typography variant="h5">
            Stay up-to-date on Mission Bit news and events!
            <br />
            Subscribe to our mailing list below:
          </Typography>
          <TextField
            id="subscribe-email"
            name="EMAIL"
            label="Email"
            type="email"
            variant="outlined"
            className={classes.field}
            color="primary"
            required
          />
          {/* real people should not fill this in and expect good things - do not remove this or risk form bot signups */}
          <div style={{ position: "absolute", left: -5000 }} aria-hidden="true">
            <input
              type="text"
              name="b_dca59ff0c46a6c1be0d20cf89_ec36efa7f3"
              tabIndex={-1}
              defaultValue=""
            />
          </div>
          <br />
          <Button variant="outlined" color="primary" size="large" type="submit">
            Subscribe
          </Button>
        </form>
      </Paper>
    </ThemeProvider>
  );
};

export default Subscribe;
