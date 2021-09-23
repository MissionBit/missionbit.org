import * as React from "react";
import Typography from "@material-ui/core/Typography";
import Image from "next/image";
import SupporterData, { SupporterDataProps } from "./SupporterData";
import { makeStyles } from "@material-ui/core/styles";
import BackgroundSlider from "./index/BackgroundSlider";
import { StaticImageImport } from "src/image";

const Logo: React.FC<{
  alt: string;
  logo: StaticImageImport;
}> = ({ alt, logo }) => {
  const scale = 150 / Math.max(logo.width, logo.height);
  return (
    <Image
      src={logo}
      alt={alt}
      objectFit="contain"
      width={logo.width * scale}
      height={logo.height * scale}
      layout="fixed"
    />
  );
};

const useStyles = makeStyles((theme) => ({
  root: {
    padding: theme.spacing(4, 0),
  },
  supporters: {
    display: "flex",
    alignItems: "center",
    "& a": {
      margin: theme.spacing(0, 3),
    },
  },
  heading: {
    marginBottom: "1rem",
  },
}));

const Supporter: React.FC<SupporterDataProps> = ({ logo, title, href }) => {
  return (
    <a href={href} target="_blank" rel="noopener noreferrer" title={title}>
      <Logo logo={logo} alt={title} />
    </a>
  );
};

const Supporters: React.FC<{}> = () => {
  const classes = useStyles();
  return (
    <section id="supporters" className={classes.root}>
      <Typography
        variant="h4"
        component="h2"
        align="center"
        className={classes.heading}
      >
        Our supporters
      </Typography>
      <BackgroundSlider duration={40}>
        <div className={classes.supporters}>
          {SupporterData.map((props) => (
            <Supporter key={props.logo.src} {...props} />
          ))}
        </div>
      </BackgroundSlider>
    </section>
  );
};

export default Supporters;
