import * as React from "react";
import Typography from "@material-ui/core/Typography";
import SupporterData, { SupporterDataProps } from "./SupporterData";
import { makeStyles } from "@material-ui/core/styles";
import BackgroundSlider from "./index/BackgroundSlider";

const Logo: React.FC<{ alt: string; logo: string }> = ({ alt, logo }) => {
  if (logo.endsWith(".svg")) {
    return (
      <img src={require(`../public/images/supporters/${logo}`)} alt={alt} />
    );
  }
  const [
    src,
    src2x,
  ] = require(`../public/images/supporters/${logo}?resize&size[]=150&size[]=300`).images.map(
    (image: { path: string; height: number; width: number }) => image.path
  );
  return <img src={src} alt={alt} srcSet={`${src}, ${src2x} 2x`} />;
};

const useStyles = makeStyles((theme) => ({
  root: {
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
    <section id="supporters">
      <Typography
        variant="h4"
        component="h2"
        align="center"
        className={classes.heading}
      >
        Our supporters
      </Typography>
      <BackgroundSlider duration={40}>
        <div className={classes.root}>
          {SupporterData.map((props) => (
            <Supporter key={props.logo} {...props} />
          ))}
        </div>
      </BackgroundSlider>
    </section>
  );
};

export default Supporters;
