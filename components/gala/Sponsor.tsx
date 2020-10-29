import * as React from "react";
import { SponsorData } from "./SponsorData";

const Sponsor: React.FC<SponsorData> = ({ href, title, logo }) => {
  const picture = (
    <picture title={title}>
      {logo.webpSrcSet ? (
        <source type="image/webp" srcSet={logo.webpSrcSet} />
      ) : null}
      <img
        src={logo.src}
        width={logo.width}
        height={logo.height}
        srcSet={logo.srcSet}
        alt={`${title} logo`}
      />
    </picture>
  );
  return href === null ? (
    picture
  ) : (
    <a href={href} target="_blank" rel="noopener noreferrer" title={title}>
      {picture}
    </a>
  );
};

export default Sponsor;
