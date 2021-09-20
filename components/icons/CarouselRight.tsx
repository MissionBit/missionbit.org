import * as React from "react";
import { SvgIconProps } from "@material-ui/core/SvgIcon";
import { createSvgIcon } from "@material-ui/core";

const CarouselRight = createSvgIcon(
  <polyline
    stroke="currentColor"
    fill="none"
    strokeWidth="25%"
    strokeLinecap="round"
    strokeLinejoin="round"
    points="-15,-30 15,0 -15,30"
  />,
  "CarouselRight"
);

const CarouselRightIcon = (props: SvgIconProps): JSX.Element => (
  <CarouselRight viewBox="-50 -50 100 100" {...props} />
);

export default CarouselRightIcon;
