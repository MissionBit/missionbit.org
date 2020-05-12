import { withStyles } from "@material-ui/core/styles";
import MuiButton, { ButtonTypeMap } from "@material-ui/core/Button";
import { brand } from "src/colors";
import { ExtendButtonBase } from "@material-ui/core/ButtonBase";
import buttonStyles from "src/buttonStyles";

export const VioletButton = withStyles(buttonStyles(brand.violet))(
  MuiButton
) as ExtendButtonBase<ButtonTypeMap>;

export default VioletButton;
