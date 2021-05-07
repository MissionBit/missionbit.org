import * as React from "react";
import { makeStyles } from "@material-ui/core/styles";
import clsx from "clsx";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "grid",
    gridGap: theme.spacing(2),
    gridTemplateColumns: "repeat(3, 1fr)",
    [theme.breakpoints.down("xs")]: {
      gridTemplateColumns: "1fr",
      "& > *:nth-child(odd)": {
        display: "none",
      },
    },
  },
}));

const PHOTO_SIZES = {
  "": { width: 798, height: 532 },
  "@0.5x": { width: 272, height: 402 },
  "@0.25x": { width: 130, height: 208 },
} as const;

function loadPhoto(postfix: string, alt: string) {
  const SIZE_ORDER = ["@0.25x", "@0.5x", ""] as const;
  return {
    alt,
    webpSrcSet: SIZE_ORDER.map((k) => {
      const fn = require(/* webpackInclude: /\.jpg$/ */ `public/images/donate/donate-students-${postfix}${k}.jpg?webp`);
      return `${fn} ${PHOTO_SIZES[k].width}w`;
    }).join(","),
    jpgSrc: require(/* webpackInclude: /\.jpg$/ */ `public/images/donate/donate-students-${postfix}@0.5x.jpg`) as string,
    jpgSrcSet: SIZE_ORDER.map((k) => {
      const fn = require(/* webpackInclude: /\.jpg$/ */ `public/images/donate/donate-students-${postfix}${k}.jpg`);
      return `${fn} ${PHOTO_SIZES[k].width}w`;
    }).join(","),
  };
}

const PHOTOS = {
  "1": loadPhoto("1", "Students at Warriors workshop"),
  "2": loadPhoto("2", "Students at Demo Day"),
  "3": loadPhoto("3", "Students at Warriors workshop"),
} as const;

export const Photo: React.FC<{
  photo: keyof typeof PHOTOS;
  className?: string;
}> = ({ photo, className }) => {
  const { alt, webpSrcSet, jpgSrc, jpgSrcSet } = PHOTOS[photo];
  return (
    <picture className={className}>
      <source type="image/webp" srcSet={webpSrcSet} />
      <img
        src={jpgSrc}
        srcSet={jpgSrcSet}
        width="100%"
        height="100%"
        alt={alt}
      />
    </picture>
  );
};

export const PhotoFooter: React.FC<{ className?: string }> = ({
  className,
}) => {
  const classes = useStyles();
  return (
    <section className={clsx(className, classes.root)}>
      <Photo photo="1" />
      <Photo photo="2" />
      <Photo photo="3" />
    </section>
  );
};

export default PhotoFooter;
