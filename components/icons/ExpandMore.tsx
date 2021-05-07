import * as React from "react";
import SvgIcon, { SvgIconProps } from "@material-ui/core/SvgIcon";

const ExpandMoreIcon = (props: SvgIconProps): JSX.Element => (
  <SvgIcon viewBox="-50 -50 100 100" {...props}>
    <polyline
      stroke="currentColor"
      fill="none"
      strokeWidth="18%"
      strokeLinecap="round"
      strokeLinejoin="round"
      points="-40,-18 0,18 40,-18"
    />
  </SvgIcon>
);

export default ExpandMoreIcon;
