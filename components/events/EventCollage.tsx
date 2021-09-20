import * as React from "react";
import { InlineAsteriskIcon } from "components/icons/Asterisk";
import { RectImageG } from "components/RectImage";
import { brand } from "src/colors";
import { StaticImageImport } from "src/image";

export interface CollageImage {
  desc: string;
  image: StaticImageImport;
}

const MainEventImageG: React.FC<{
  image: CollageImage;
  transform?: React.SVGProps<SVGGElement>["transform"];
}> = ({ image, transform, children }) => (
  <RectImageG
    transform={transform}
    width={514.83}
    height={343.58}
    top={171.28}
    left={49.17}
    bottom={33.7}
    right={30.34}
    fill={brand.indigo}
    desc={image.desc}
    src={image.image}
  >
    {children}
  </RectImageG>
);

export const EventImage: React.FC<{
  className?: string;
  image: CollageImage;
}> = ({ className, image }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    viewBox="0 0 550 380"
    className={className}
    role="img"
    aria-labelledby="event-image-desc"
  >
    <desc id="event-image-desc">{image.desc}</desc>
    <MainEventImageG image={image} />
  </svg>
);

export const EventCollage: React.FC<{
  className?: string;
  topRightImage: CollageImage;
  bottomLeftImage: CollageImage;
}> = ({ className, topRightImage, bottomLeftImage }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    viewBox="0 0 1040 660"
    className={className}
    role="img"
    aria-labelledby="event-collage-desc"
  >
    <desc id="event-collage-desc">
      Collage of demo day photos with volunteer judges
    </desc>
    <defs>
      <InlineAsteriskIcon
        id="asterisk"
        fill={brand.indigo}
        transform="scale(1.1281)"
      />
    </defs>
    <g>
      <RectImageG
        transform="translate(389.22 33)"
        width={590.62}
        height={394.16}
        top={-32.95}
        left={133.68}
        bottom={-220.11}
        right={37.06}
        fill={brand.indigo}
        desc={topRightImage.desc}
        src={topRightImage.image}
      >
        <use xlinkHref="#asterisk" x={590.62} y={394.16} />
      </RectImageG>
      <MainEventImageG
        transform="translate(59.73 281.72)"
        image={bottomLeftImage}
      >
        <use xlinkHref="#asterisk" x={0} y={0} />
      </MainEventImageG>
    </g>
  </svg>
);

export default EventCollage;
