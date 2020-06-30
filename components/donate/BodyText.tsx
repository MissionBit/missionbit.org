import { withStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";

export const BodyText = withStyles((theme) => ({
  root: {
    [theme.breakpoints.up("md")]: {
      fontSize: theme.typography.pxToRem(24),
    },
  },
}))(Typography);

export default BodyText;
