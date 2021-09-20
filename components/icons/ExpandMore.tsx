import * as React from "react";
import { SvgIconProps } from "@material-ui/core/SvgIcon";
import { createSvgIcon } from "@material-ui/core";

const ExpandMore = createSvgIcon(
  <polyline
    stroke="currentColor"
    fill="none"
    strokeWidth="18%"
    strokeLinecap="round"
    strokeLinejoin="round"
    points="-40,-18 0,18 40,-18"
  />,
  "ExpandMore"
);

const ExpandMoreIcon = (props: SvgIconProps): JSX.Element => (
  <ExpandMore viewBox="-50 -50 100 100" {...props} />
);

export default ExpandMoreIcon;
