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
import defaultTheme from "../src/theme";

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

const theme = createMuiTheme(defaultTheme, {
  palette: {
    primary: {
      main: "#fff"
    }
  }
});

const Subscribe: React.FC<{}> = () => {
  const classes = useStyles();
  return (
    <section className={classes.subscribe} id="get-updates">
      <Typography variant="h5" className={classes.heading}>
        Stay up-to-date on Mission Bit news and events!
        <br />
        Subscribe to our mailing list below:
      </Typography>
      <ThemeProvider theme={theme}>
        <form>
          <FormControl className={classes.formControl}>
            <InputLabel shrink htmlFor="subscribe-email">
              Email
            </InputLabel>
            <BootstrapInput id="subscribe-email" name="email" type="email" />
          </FormControl>
          <br />
          <Button variant="contained" color="secondary">
            Subscribe
          </Button>
        </form>
      </ThemeProvider>
    </section>
  );
};

export default Subscribe;
