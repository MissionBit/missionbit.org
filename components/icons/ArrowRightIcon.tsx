import * as React from "react";
import SvgIcon, { SvgIconProps } from "@material-ui/core/SvgIcon";

const scale = 100;

const lineWidth = 0.65;
const arrowWidth = 0.3;
const arrowHeight = 0.5;

const xMax = 0.5 * lineWidth;
const xMid = xMax - arrowWidth;
const yMax = 0.5 * arrowHeight;

function p(x: number, y: number): string {
  return `${scale * x},${scale * y}`;
}

const points = [
  p(-xMax, 0),
  p(xMax, 0),
  p(xMid, -yMax),
  p(xMax, 0),
  p(xMid, yMax),
].join(" ");

const ArrowRightIcon = (props: SvgIconProps): JSX.Element => (
  <SvgIcon viewBox="-50 -50 100 100" {...props}>
    <polyline
      points={points}
      stroke="currentColor"
      fill="none"
      strokeWidth="18%"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </SvgIcon>
);

export default ArrowRightIcon;
