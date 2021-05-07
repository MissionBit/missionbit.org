import * as React from "react";
import SvgIcon, { SvgIconProps } from "@material-ui/core/SvgIcon";

const CarouselLeftIcon = (props: SvgIconProps): JSX.Element => (
  <SvgIcon viewBox="-50 -50 100 100" {...props}>
    <polyline
      stroke="currentColor"
      fill="none"
      strokeWidth="25%"
      strokeLinecap="round"
      strokeLinejoin="round"
      points="15,-30 -15,0 15,30"
    />
  </SvgIcon>
);

export default CarouselLeftIcon;
