import * as React from "react";
import SvgIcon, { SvgIconProps } from "@material-ui/core/SvgIcon";

const FormatQuoteIcon = (props: SvgIconProps) => (
  <SvgIcon viewBox="0 0 18 18" {...props}>
    <path d="M9.66,7.45A2.55,2.55,0,0,1,11,4.13c2.17-.74,3.47,0,3.82,1.22.8,2.66-1.09,7.6-2.59,8.82l-1.54-.77L12.5,8.78S10.15,9.17,9.66,7.45Zm-6.5,0A2.54,2.54,0,0,1,4.49,4.13c2.17-.74,3.46,0,3.85,1.22C9.11,8,7.22,13,5.71,14.17L4.17,13.4,6,8.78S3.65,9.17,3.16,7.45Z" />
  </SvgIcon>
);

export default FormatQuoteIcon;
