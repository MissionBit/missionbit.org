import * as React from "react";
import { withStyles } from "@material-ui/core/styles";
import MuiButton, { ButtonProps } from "@material-ui/core/Button";
import { brand } from "../src/colors";

const color = brand.violet;

export const VioletButton = withStyles((theme) => ({
  outlined: {
    color,
    border: `2px solid ${color}`,
    "&:hover": {
      border: `2px solid ${color}`,
      backgroundColor: color,
      color: theme.palette.common.white,
    },
  },
}))((props: ButtonProps) => <MuiButton variant="outlined" {...props} />);

export default VioletButton;
