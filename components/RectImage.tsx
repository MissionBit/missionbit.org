import * as React from "react";

export interface RectImageProps {
  className?: string;
  width: number;
  height: number;
  src: string;
  srcSet?: string;
  top: number;
  left: number;
  right: number;
  bottom: number;
  fill: string;
  desc: React.ReactNode;
  id: string;
}

const RectImage: React.FC<RectImageProps> = ({
  className,
  width,
  height,
  src,
  srcSet,
  fill,
  top,
  left,
  right,
  bottom,
  desc,
  id,
}) => {
  const viewW = width - Math.min(left, 0) + Math.max(right, 0);
  const viewH = height - Math.min(top, 0) + Math.max(bottom, 0);
  const rectW = width + right - left;
  const rectH = height + bottom - top;
  const descId = `${id}-desc`;
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      viewBox={`${left} ${top} ${viewW} ${viewH}`}
      className={className}
      role="img"
      aria-labelledby={descId}
    >
      <desc id={descId}>{desc}</desc>
      <rect x={left} y={top} width={rectW} height={rectH} fill={fill} />
      <foreignObject width={width} height={height}>
        <img src={src} srcSet={srcSet} width="100%" height="100%" />
      </foreignObject>
    </svg>
  );
};

export default RectImage;
