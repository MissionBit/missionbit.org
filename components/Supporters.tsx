import * as React from "react";
import Typography from "@material-ui/core/Typography";
import SupporterData, { SupporterDataProps } from "./SupporterData";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
  root: {
    display: "grid",
    gridGap: theme.spacing(2),
    gridTemplateColumns: "repeat(auto-fit, minmax(150px, 1fr))",
    alignItems: "center",
    width: "100%",
    padding: theme.spacing(3),
    textAlign: "center",
    "& img": {
      maxWidth: 150,
      maxHeight: 150,
      objectFit: "contain"
    }
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
      <Typography variant="h4" component="h2" align="center">
        Our supporters
      </Typography>
      <div className={classes.root}>
        {SupporterData.map(props => (
          <Supporter key={props.logo} {...props} />
        ))}
      </div>
    </section>
  );
};

export default Supporters;
