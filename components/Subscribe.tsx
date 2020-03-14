import * as React from "react";
import { useMemo } from "react";
import {
  ThemeOptions,
  makeStyles,
  withStyles,
  ThemeProvider,
  createMuiTheme,
  useTheme,
  Theme
} from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Paper from "@material-ui/core/Paper";
import { brand } from "../src/colors";

const useStyles = makeStyles(theme => ({
  subscribe: {
    padding: theme.spacing(3)
  },
  field: {
    margin: `${theme.spacing(2)}px 0`,
    width: 340,
    maxWidth: "100%",
    "& > label": {
      fontWeight: "bold"
    }
  }
}));

const themeOverrides = (theme: Theme): ThemeOptions => ({
  palette: {
    type: "dark",
    background: {
      paper: brand.royal
    },
    primary: theme.palette.primary
  },
  typography: {
    button: theme.typography.button
  }
});

const SubscribeButton = withStyles(theme => ({
  outlinedPrimary: {
    color: theme.palette.primary.main,
    border: `2px solid ${theme.palette.primary.main}`,
    "&:hover": {
      border: `2px solid ${theme.palette.primary.main}`,
      backgroundColor: theme.palette.primary.main,
      color: theme.palette.text.primary
    }
  }
}))(Button);

const Subscribe: React.FC<{}> = () => {
  const classes = useStyles();
  const defaultTheme = useTheme();
  const theme = useMemo(() => createMuiTheme(themeOverrides(defaultTheme)), [
    defaultTheme
  ]);
  return (
    <ThemeProvider theme={theme}>
      <Paper
        square
        component="section"
        elevation={0}
        className={classes.subscribe}
        id="get-updates"
      >
        <Typography variant="h5">
          Stay up-to-date on Mission Bit news and events!
          <br />
          Subscribe to our mailing list below:
        </Typography>
        <form
          action="https://missionbit.us3.list-manage.com/subscribe/post?u=dca59ff0c46a6c1be0d20cf89&amp;id=ec36efa7f3"
          method="post"
          id="mc-embedded-subscribe-form"
          name="mc-embedded-subscribe-form"
          target="_blank"
          noValidate
        >
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
          <SubscribeButton
            variant="outlined"
            color="primary"
            size="large"
            type="submit"
          >
            Subscribe
          </SubscribeButton>
        </form>
      </Paper>
    </ThemeProvider>
  );
};

export default Subscribe;
