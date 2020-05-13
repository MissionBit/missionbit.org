import * as React from "react";
import SvgIcon, { SvgIconProps } from "@material-ui/core/SvgIcon";

const IconWidth = 908.81;
const IconHeight = 843.28;
const Scale = 100;
const IconScale = Scale / Math.max(IconWidth, IconHeight);
const viewBox = `${-0.5 * Scale} ${-0.5 * Scale} ${Scale} ${Scale}`;

const AsteriskIcon = (props: SvgIconProps) => (
  <SvgIcon viewBox={viewBox} {...props}>
    <InlineAsteriskIcon />
  </SvgIcon>
);

const AsteriskTransform = [
  `scale(${IconScale})`,
  `translate(${-0.5 * IconWidth} ${-0.5 * IconHeight})`,
].join(" ");

export const InlineAsteriskIcon = (props: React.SVGProps<SVGGElement>) => {
  const transform = [props.transform, AsteriskTransform]
    .filter((x) => x !== undefined)
    .join(" ");
  return (
    <g {...props} transform={transform}>
      <rect
        x="209.94"
        y="566.31"
        width="487"
        height="65.32"
        transform="translate(-235.83 897.76) rotate(-76.31)"
      />
      <polygon points="457.68 378.94 539.94 403.33 657.08 20.75 561.24 0 457.68 378.94" />
      <polygon points="482.18 361.86 501.87 424.13 908.81 301.88 868.71 217.9 482.18 361.86" />
      <polygon points="530.9 357.5 488.45 414.89 842.82 662.6 897.55 589.62 530.9 357.5" />
      <polygon points="97.3 113.4 59.35 165.94 476.76 407.24 473.2 340.11 97.3 113.4" />
      <polygon points="0 556.11 29.19 615.46 497.2 430.59 468.98 373.19 0 556.11" />
    </g>
  );
};

export default AsteriskIcon;
