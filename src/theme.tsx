import { createMuiTheme } from "@material-ui/core/styles";
import red from "@material-ui/core/colors/red";

// Create a theme instance.
const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#F67510"
    },
    secondary: {
      main: "#0058A6"
    },
    error: {
      main: red.A400
    },
    background: {
      default: "#fff"
    }
  }
});

export default theme;
