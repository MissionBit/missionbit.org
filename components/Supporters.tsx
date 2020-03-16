import * as React from "react";
import Typography from "@material-ui/core/Typography";
import SupporterData, { SupporterDataProps } from "./SupporterData";
import { makeStyles } from "@material-ui/core/styles";
import BackgroundSlider from "./index/BackgroundSlider";

const useStyles = makeStyles(theme => ({
  root: {
    display: "flex",
    alignItems: "center",
    "& img": {
      margin: `0 ${theme.spacing(3)}px`,
      maxWidth: 150,
      maxHeight: 150,
      objectFit: "contain"
    }
  },
  heading: {
    marginBottom: "1rem"
  }
}));

const Supporter: React.FC<SupporterDataProps> = ({ logo, title, href }) => (
  <a href={href} target="_blank" rel="noopener noreferrer" title={title}>
    <img src={`/images/supporters/${logo}`} alt={title} />
  </a>
);

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
          {SupporterData.map(props => (
            <Supporter key={props.logo} {...props} />
          ))}
        </div>
      </BackgroundSlider>
    </section>
  );
};

export default Supporters;
