import { ThemeOptions } from "@material-ui/core/styles";
import red from "@material-ui/core/colors/red";
import common from "@material-ui/core/colors/common";
import { brand } from "./colors";

const commonFontFamilies = [
  "-apple-system",
  "BlinkMacSystemFont",
  '"Segoe UI"',
  "Roboto",
  '"Helvetica Neue"',
  "Arial",
  "sans-serif",
  '"Apple Color Emoji"',
  '"Segoe UI Emoji"',
  '"Segoe UI Symbol"',
];

const baseFontFamily = ["Lato", ...commonFontFamilies].join(",");
const headerFontFamily = ["Poppins", ...commonFontFamilies].join(",");

const themeOptions: ThemeOptions = {
  palette: {
    primary: {
      main: brand.orange,
    },
    secondary: {
      main: brand.blue,
    },
    error: {
      main: red.A400,
    },
    background: {
      default: common.white,
    },
  },
  typography: {
    fontFamily: baseFontFamily,
    h1: { fontFamily: headerFontFamily },
    h2: { fontFamily: headerFontFamily },
    h3: { fontFamily: headerFontFamily },
    h4: { fontFamily: headerFontFamily },
    h5: { fontFamily: headerFontFamily },
    h6: { fontFamily: headerFontFamily },
    button: {
      textTransform: "inherit",
    },
  },
  overrides: {
    MuiButton: {
      outlinedPrimary: {
        color: brand.orange,
        border: `2px solid ${brand.orange}`,
        "&:hover": {
          border: `2px solid ${brand.orange}`,
          backgroundColor: brand.orange,
          color: common.white,
        },
      },
      outlinedSecondary: {
        color: brand.blue,
        border: `2px solid ${brand.blue}`,
        "&:hover": {
          border: `2px solid ${brand.blue}`,
          backgroundColor: brand.blue,
          color: common.white,
        },
      },
    },
  },
};

export default themeOptions;
