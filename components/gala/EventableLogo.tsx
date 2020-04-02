import * as React from "react";
import SvgIcon, { SvgIconProps } from "@material-ui/core/SvgIcon";

const EventableLogo = (props: SvgIconProps) => (
  <SvgIcon viewBox="0 0 20 19.037" {...props}>
    <path
      d="M17.374,0H2.627C1.178,0,0,1.178,0,2.627v13.784c0,1.448,1.178,2.626,2.627,2.626h14.747
      c1.448,0,2.626-1.178,2.626-2.626V2.627C20,1.178,18.822,0,17.374,0z M18.592,15.666c0,1.083-0.877,1.96-1.959,1.96H3.367
      c-1.082,0-1.959-0.878-1.959-1.96V7.068c0-1.083,0.877-1.96,1.959-1.96h13.266c1.082,0,1.959,0.877,1.959,1.96V15.666z"
    />
    <path
      d="M9.332,11.936L7.364,9.967l-1.65,1.65l3.618,3.616h0l5.753-5.754c-0.34-0.724-0.814-1.367-1.396-1.9
      L9.332,11.936z"
    />
  </SvgIcon>
);

export default EventableLogo;
