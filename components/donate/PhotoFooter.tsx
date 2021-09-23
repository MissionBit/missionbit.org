import * as React from "react";
import { makeStyles } from "@material-ui/core/styles";
import clsx from "clsx";
import Image from "next/image";

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

function loadPhoto(postfix: string, alt: string) {
  return {
    alt,
    src: require(/* webpackInclude: /\.jpg$/ */ `public/images/donate/donate-students-${postfix}.jpg`)
      .default,
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
  const { alt, src } = PHOTOS[photo];
  const image = <Image src={src} alt={alt} />;
  return className ? <div className={className}>{image}</div> : image;
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
