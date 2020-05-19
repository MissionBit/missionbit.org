import * as React from "react";
import { InlineAsteriskIcon } from "components/icons/Asterisk";

export const VolunteerImage: React.FC<{
  className?: string;
}> = ({ className }) => (
  <picture className={className}>
    {/* 338.68 x 226.18 */}
    <source
      type="image/webp"
      srcSet={[
        `${require("public/images/get-involved/demo-day-judges-1@0.5x.jpg?webp")} 338w`,
        `${require("public/images/get-involved/demo-day-judges-1.jpg?webp")} 681w`,
      ].join(",")}
    />
    <img
      src={require("public/images/get-involved/demo-day-judges-1@0.5x.jpg")}
      srcSet={[
        `${require("public/images/get-involved/demo-day-judges-1@0.5x.jpg")} 338w`,
        `${require("public/images/get-involved/demo-day-judges-1.jpg")} 681w`,
      ].join(",")}
      width="100%"
      height="100%"
      alt=""
    />
  </picture>
);

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
      <picture>
        {/* 286.52 x 372.94 */}
        <source
          type="image/webp"
          srcSet={[
            `${require("public/images/get-involved/demo-day-judges-2@0.5x.jpg?webp")} 292w`,
            `${require("public/images/get-involved/demo-day-judges-2.jpg?webp")} 581w`,
          ].join(",")}
        />
        <img
          src={require("public/images/get-involved/demo-day-judges-2@0.5x.jpg")}
          srcSet={[
            `${require("public/images/get-involved/demo-day-judges-2@0.5x.jpg")} 292w`,
            `${require("public/images/get-involved/demo-day-judges-2.jpg")} 581w`,
          ].join(",")}
          width="100%"
          height="100%"
          alt=""
        />
      </picture>
    </foreignObject>
    <use xlinkHref="#asterisk" x={1166 + 368} y={949} />
    <rect x="1009" y="1299" width="347" height="145" fill="#fff" />
    <foreignObject x="885" y="1123" width="435" height="290.5">
      <VolunteerImage />
    </foreignObject>
    <use xlinkHref="#asterisk" x={885} y={1123 + 290.5} />
  </svg>
);

export default VolunteerCollage;
