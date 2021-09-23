import * as React from "react";
import { InlineAsteriskIcon } from "components/icons/Asterisk";
import Image from "next/image";

export const VolunteerImage = ({
  className,
  ...props
}: {
  className?: string;
  width?: number;
  height?: number;
}): JSX.Element => {
  const image = (
    <Image
      src={require("public/images/get-involved/demo-day-judges-1.jpg").default}
      alt=""
      {...props}
    />
  );
  return className ? <div className={className}>{image}</div> : image;
};

export const VolunteerCollage: React.FC<{ className?: string }> = ({
  className,
}) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    viewBox="821 803 822 754"
    className={className}
    role="img"
    aria-labelledby="volunteer-collage-desc"
  >
    <desc id="volunteer-collage-desc">
      Collage of demo day photos with volunteer judges
    </desc>
    <defs>
      <InlineAsteriskIcon id="asterisk" fill="#fff" transform="scale(1.1281)" />
    </defs>
    <rect x="1131" y="917" width="347" height="145" fill="#fff" />
    <foreignObject x="1166" y="949" width="368" height="479">
      <Image
        src={
          require("public/images/get-involved/demo-day-judges-2.jpg").default
        }
        alt=""
        width={368}
        height={479}
      />
    </foreignObject>
    <use xlinkHref="#asterisk" x={1166 + 368} y={949} />
    <rect x="1009" y="1299" width="347" height="145" fill="#fff" />
    <foreignObject x="885" y="1123" width="435" height="290.5">
      <VolunteerImage width={435} height={290.5} />
    </foreignObject>
    <use xlinkHref="#asterisk" x={885} y={1123 + 290.5} />
  </svg>
);

export default VolunteerCollage;
