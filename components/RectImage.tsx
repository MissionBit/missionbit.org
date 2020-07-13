import * as React from "react";

export interface RectImageGProps {
  transform?: React.SVGProps<SVGGElement>["transform"];
  width: number;
  height: number;
  src: string;
  srcSet?: string;
  srcSetWebP?: string;
  top: number;
  left: number;
  right: number;
  bottom: number;
  fill: string;
  desc: string;
}

export interface RectImageProps extends RectImageGProps {
  className?: string;
  id: string;
}

const RectImage: React.FC<RectImageProps> = ({ className, id, ...props }) => {
  const { desc, width, height, left, top, right, bottom } = props;
  const vLeft = Math.min(left, 0);
  const vTop = Math.min(top, 0);
  const viewW = width - vLeft + Math.max(right, 0);
  const viewH = height - vTop + Math.max(bottom, 0);
  const descId = `${id}-desc`;
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      viewBox={`${vLeft} ${vTop} ${viewW} ${viewH}`}
      className={className}
      role="img"
      aria-labelledby={descId}
    >
      <desc id={descId}>{desc}</desc>
      <RectImageG {...props} />
    </svg>
  );
};

export const RectImageG: React.FC<RectImageGProps> = ({
  width,
  height,
  transform,
  children,
  src,
  srcSet,
  srcSetWebP,
  fill,
  top,
  left,
  right,
  bottom,
  desc,
}) => {
  const rectW = width + right - left;
  const rectH = height + bottom - top;
  return (
    <g transform={transform}>
      <rect x={left} y={top} width={rectW} height={rectH} fill={fill} />
      <foreignObject width={width} height={height}>
        <picture>
          {srcSetWebP ? <source type="image/webp" srcSet={srcSetWebP} /> : null}
          <img
            src={src}
            srcSet={srcSet}
            alt={desc}
            width="100%"
            height="100%"
          />
        </picture>
      </foreignObject>
      {children}
    </g>
  );
};

export default RectImage;
