import * as React from "react";
import { brand } from "src/colors";
import { InlineAsteriskIcon } from "components/icons/Asterisk";
import {
  RectImageG,
  RectImageProps,
  rectImageViewBox,
  viewBoxString,
} from "components/RectImage";

const AsteriskCollage: React.FC<RectImageProps> = (props) => {
  const descId = `${props.id}-desc`;
  const rect = rectImageViewBox(props);
  const asteriskH = 38;
  const viewBox = {
    left: rect.left,
    top: rect.top - asteriskH,
    width: rect.width,
    height: rect.height + asteriskH,
  };

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      viewBox={viewBoxString(viewBox)}
      className={props.className}
      role="img"
      aria-labelledby={descId}
    >
      <desc id={descId}>{props.desc}</desc>
      <defs>
        <InlineAsteriskIcon
          id="asterisk"
          fill={brand.indigo}
          transform="scale(0.6966)"
        />
      </defs>
      <g>
        <RectImageG {...props}>
          <use xlinkHref="#asterisk" x={props.width - 2} y={props.height} />
          <use xlinkHref="#asterisk" x={0} y={0} transform="rotate(7)" />
        </RectImageG>
      </g>
    </svg>
  );
};

export default AsteriskCollage;
