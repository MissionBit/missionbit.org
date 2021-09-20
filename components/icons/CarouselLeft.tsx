import * as React from "react";
import { SvgIconProps } from "@material-ui/core/SvgIcon";
import { createSvgIcon } from "@material-ui/core";

const CarouselLeft = createSvgIcon(
  <polyline
    stroke="currentColor"
    fill="none"
    strokeWidth="25%"
    strokeLinecap="round"
    strokeLinejoin="round"
    points="15,-30 -15,0 15,30"
  />,
  "CarouselLeft"
);

const CarouselLeftIcon = (props: SvgIconProps): JSX.Element => (
  <CarouselLeft viewBox="-50 -50 100 100" {...props} />
);

export default CarouselLeftIcon;
