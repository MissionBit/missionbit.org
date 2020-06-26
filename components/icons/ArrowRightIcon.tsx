import * as React from "react";
import SvgIcon, { SvgIconProps } from "@material-ui/core/SvgIcon";

const ArrowRightIcon = (props: SvgIconProps) => (
  <SvgIcon viewBox="-50 -50 100 100" {...props}>
    <polyline
      points="-7,-20 15,0 -7,20 15,0 -30,0"
      stroke="currentColor"
      fill="none"
      strokeWidth="15%"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </SvgIcon>
);

export default ArrowRightIcon;
