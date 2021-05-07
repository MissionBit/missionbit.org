import * as React from "react";
import { withStyles } from "@material-ui/core/styles";
import BaseTypography, { TypographyProps } from "@material-ui/core/Typography";

const Typography = withStyles((theme) => ({
  root: {
    fontSize: theme.typography.pxToRem(48),
    [theme.breakpoints.down("sm")]: {
      padding: theme.spacing(0, 4),
      fontSize: theme.typography.pxToRem(36),
      lineHeight: 1.5,
      textAlign: "center",
    },
  },
}))(BaseTypography);

export const SectionHeading: React.FC<
  Omit<TypographyProps<"h2">, "component" | "variant">
> = (props) => <Typography {...props} variant="h2" />;

export default SectionHeading;
