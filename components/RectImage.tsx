import * as React from "react";

export interface RectImageGDimensions {
  readonly width: number;
  readonly height: number;
  readonly top: number;
  readonly left: number;
  readonly right: number;
  readonly bottom: number;
}

export interface RectImageGProps extends RectImageGDimensions {
  readonly transform?: React.SVGProps<SVGGElement>["transform"];
  readonly src: string;
  readonly srcSet?: string;
  readonly srcSetWebP?: string;
  readonly fill: string;
  readonly desc: string;
}

export interface RectImageProps extends RectImageGProps {
  readonly className?: string;
  readonly id: string;
}

const RectImage: React.FC<RectImageProps> = ({ className, id, ...props }) => {
  const descId = `${id}-desc`;
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      viewBox={viewBoxString(rectImageViewBox(props))}
      className={className}
      role="img"
      aria-labelledby={descId}
    >
      <desc id={descId}>{props.desc}</desc>
      <RectImageG {...props} />
    </svg>
  );
};

export interface SvgViewBox {
  readonly left: number;
  readonly top: number;
  readonly width: number;
  readonly height: number;
}

export function viewBoxString({
  left,
  top,
  width,
  height,
}: SvgViewBox): string {
  return `${left} ${top} ${width} ${height}`;
}

export function rectImageViewBox({
  left,
  top,
  right,
  bottom,
  width,
  height,
}: RectImageGDimensions): SvgViewBox {
  const vLeft = Math.min(left, 0);
  const vTop = Math.min(top, 0);
  const viewW = width - vLeft + Math.max(right, 0);
  const viewH = height - vTop + Math.max(bottom, 0);
  return { left: vLeft, top: vTop, width: viewW, height: viewH };
}

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
