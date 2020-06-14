import * as React from "react";
import SvgIcon, { SvgIconProps } from "@material-ui/core/SvgIcon";

const ArrowRightIcon = (props: SvgIconProps) => (
  <SvgIcon viewBox="-50 -50 100 100" {...props}>
    <g
      stroke="currentColor"
      fill="none"
      strokeWidth="15%"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <polyline points="-7,-20 15,0 -7,20" />
      <polyline points="-30,-0 7,0" />
    </g>
  </SvgIcon>
);

export default ArrowRightIcon;
