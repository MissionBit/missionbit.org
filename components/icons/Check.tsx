import * as React from "react";
import SvgIcon, { SvgIconProps } from "@material-ui/core/SvgIcon";

const CheckIcon = (props: SvgIconProps): JSX.Element => (
  <SvgIcon viewBox="0 0 100 100" {...props}>
    <g transform="translate(0,-952.36218)">
      <path
        d="M70.9,981.3c-1.6,0-3,0.7-4.1,1.8c-9.4,9.4-16.6,17.2-25.2,26l-8.7-7.4c-2.5-2.2-6.3-2-8.5,0.4
		c-2.2,2.5-2,6.3,0.4,8.5c0.1,0.1,0.2,0.2,0.3,0.2l13,11c2.4,2,5.9,1.9,8.1-0.3c10.8-10.8,18.5-19.4,29-30c2.4-2.3,2.4-6.1,0.1-8.5
		C74.2,981.9,72.6,981.3,70.9,981.3z"
      />
    </g>
  </SvgIcon>
);

export default CheckIcon;
