import * as React from "react";
import Typography from "@material-ui/core/Typography";
import SupporterData, { SupporterDataProps } from "./SupporterData";
import { makeStyles } from "@material-ui/core/styles";
import BackgroundSlider from "./index/BackgroundSlider";

const Logo: React.FC<{
  alt: string;
  logo: { src: string; srcSet?: string };
}> = ({ alt, logo }) => {
  return <img {...logo} alt={alt} />;
};

const useStyles = makeStyles((theme) => ({
  root: {
    padding: theme.spacing(4, 0),
  },
  supporters: {
    display: "flex",
    alignItems: "center",
    "& img": {
      margin: theme.spacing(0, 3),
      maxWidth: 150,
      maxHeight: 150,
      objectFit: "contain",
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
