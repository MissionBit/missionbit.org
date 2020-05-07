import { withStyles } from "@material-ui/core/styles";
import MuiButton, { ButtonTypeMap } from "@material-ui/core/Button";
import { brand } from "../src/colors";
import { ExtendButtonBase } from "@material-ui/core/ButtonBase";

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
}))(MuiButton) as ExtendButtonBase<ButtonTypeMap>;

export default VioletButton;
