import * as React from "react";
import Typography from "@material-ui/core/Typography";
import SupporterData, { SupporterDataProps } from "./SupporterData";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles(theme => ({
  root: {
    display: "grid",
    width: "100%",
    gridGap: theme.spacing(2),
    gridTemplateColumns: "repeat(auto-fit, minmax(100px, 1fr))",
    padding: theme.spacing(3)
  }
}));

const Supporter: React.FC<SupporterDataProps> = ({ name, title, href }) => (
  <Button href={href} target="_blank" title={title} data-name={name}>
    {title}
  </Button>
);

const Supporters: React.FC<{}> = () => {
  const classes = useStyles();
  return (
    <section id="supporters">
      <Typography variant="h4" component="h2" align="center">
        Our supporters
      </Typography>
      <div className={classes.root}>
        {SupporterData.map(({ name, title, href }) => (
          <Supporter name={name} title={title} href={href} key={name} />
        ))}
      </div>
    </section>
  );
};

export default Supporters;
