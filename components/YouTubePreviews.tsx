import * as React from "react";
import YouTubePreview from "./YouTubePreview";
import GridCarousel from "./GridCarousel";

const YouTubePreviews: React.FC<{
  values: React.ComponentProps<typeof YouTubePreview>[];
}> = ({ values }) => {
  return (
    <GridCarousel>
      {values.map(({ id, title }) => (
        <YouTubePreview key={id} id={id} title={title} />
      ))}
    </GridCarousel>
  );
};

export default YouTubePreviews;
