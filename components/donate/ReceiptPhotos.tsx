import * as React from "react";
import { makeStyles } from "@material-ui/core/styles";
import clsx from "clsx";
import Image from "next/image";

const useStyles = makeStyles((theme) => ({
  root: {
    "@media print": {
      display: "none",
    },
    display: "flex",
    flexDirection: "column",
    margin: -theme.spacing(1, 0),
    overflow: "hidden",
    "& img": {
      height: "auto",
      objectFit: "contain",
      margin: theme.spacing(1, 0),
    },
  },
}));

function loadPhoto(postfix: string, alt: string) {
  return {
    alt,
    src: require(/* webpackInclude: /\.jpg$/ */ `public/images/donate/donate-receipt-${postfix}.jpg`)
      .default,
  };
}

const PHOTOS = {
  "1": loadPhoto("1", "Mission Bit Team"),
  "2": loadPhoto("2", "Students at Demo Day"),
  "3": loadPhoto("3", "Family at Demo Day"),
} as const;

export const Photo: React.FC<{
  photo: keyof typeof PHOTOS;
}> = ({ photo }) => {
  const { alt, src } = PHOTOS[photo];
  return <Image src={src} alt={alt} />;
};

export const ReceiptPhotos: React.FC<{ className?: string }> = ({
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

export default ReceiptPhotos;
