import * as React from "react";
import SvgIcon, { SvgIconProps } from "@material-ui/core/SvgIcon";

const PinIcon = (props: SvgIconProps) => (
  <SvgIcon viewBox="0 0 100 100" {...props}>
    <path
      d="M50,2.5c-18.1,0-32.8,14-32.8,31.2c0,7.1,2.5,13.9,7.1,19.3L50,83.8L75.8,53c4.6-5.4,7.1-12.3,7.1-19.3
	C82.8,16.5,68.1,2.5,50,2.5z M49.3,44c-6.5,0-11.8-5-11.8-11.2s5.3-11.2,11.8-11.2S61,26.6,61,32.8S55.8,44,49.3,44z"
    />
    <path
      d="M31.3,90.3h37.3c2,0,3.6,1.6,3.6,3.6l0,0c0,2-1.6,3.6-3.6,3.6H31.3c-2,0-3.6-1.6-3.6-3.6l0,0
	C27.8,91.9,29.4,90.3,31.3,90.3z"
    />
  </SvgIcon>
);

export default PinIcon;
