import * as React from "react";
import {
  makeStyles,
  ThemeProvider,
  createMuiTheme
} from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import BootstrapInput from "./BootstrapInput";

const useStyles = makeStyles(theme => ({
  subscribe: {
    width: "100%",
    backgroundColor: "#5CA989",
    padding: theme.spacing(3)
  },
  formControl: {
    margin: `${theme.spacing(2)}px 0`,
    "& > label": {
      fontWeight: "bold"
    }
  },
  heading: {
    color: theme.palette.common.white
  }
}));

const themeOverrides = {
  palette: {
    primary: {
      main: "#fff"
    }
  }
};

const Subscribe: React.FC<{}> = () => {
  const classes = useStyles();
  return (
    <section className={classes.subscribe} id="get-updates">
      <Typography variant="h5" className={classes.heading}>
        Stay up-to-date on Mission Bit news and events!
        <br />
        Subscribe to our mailing list below:
      </Typography>
      <ThemeProvider theme={theme => createMuiTheme(theme, themeOverrides)}>
        <form
          action="https://missionbit.us3.list-manage.com/subscribe/post?u=dca59ff0c46a6c1be0d20cf89&amp;id=ec36efa7f3"
          method="post"
          id="mc-embedded-subscribe-form"
          name="mc-embedded-subscribe-form"
          target="_blank"
          noValidate
        >
          <FormControl className={classes.formControl}>
            <InputLabel shrink htmlFor="subscribe-email">
              Email
            </InputLabel>
            <BootstrapInput
              id="subscribe-email"
              name="EMAIL"
              type="email"
              required
            />
          </FormControl>
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
          <Button variant="contained" color="secondary" type="submit">
            Subscribe
          </Button>
        </form>
      </ThemeProvider>
    </section>
  );
};

export default Subscribe;
