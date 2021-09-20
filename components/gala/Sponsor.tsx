import * as React from "react";
import { SponsorData } from "./SponsorData";
import Image from "next/image";
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles({
  wrapper: {
    position: "relative",
  },
});

const Sponsor: React.FC<SponsorData> = ({ href, title, logo }) => {
  const classes = useStyles();
  const picture = <Image src={logo} alt={`${title} logo`} layout="fill" />;
  return href === null ? (
    <div className={classes.wrapper}>{picture}</div>
  ) : (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      title={title}
      className={classes.wrapper}
    >
      {picture}
    </a>
  );
};

export default Sponsor;
