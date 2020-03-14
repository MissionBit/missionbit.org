import { ThemeOptions } from "@material-ui/core/styles";
import red from "@material-ui/core/colors/red";
import common from "@material-ui/core/colors/common";
import { brand } from "./colors";

const themeOptions: ThemeOptions = {
  palette: {
    primary: {
      main: brand.orange
    },
    secondary: {
      main: brand.blue
    },
    error: {
      main: red.A400
    },
    background: {
      default: common.white
    }
  },
  typography: {
    button: {
      textTransform: "inherit"
    }
  }
};

export default themeOptions;
