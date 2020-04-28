import * as React from "react";
import Box from "@material-ui/core/Box";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";

const images = {
  community: require("../../public/images/about/values/community.svg"),
  love: require("../../public/images/about/values/love.svg"),
  accountability: require("../../public/images/about/values/accountability.svg"),
  socialJustice: require("../../public/images/about/values/social-justice.svg"),
  smartRisks: require("../../public/images/about/values/smart-risks.svg"),
};

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    justifyContent: "center",
    alignContent: "center",
    flexWrap: "wrap",
    margin: "0 auto",
    maxWidth: "90%",
    padding: theme.spacing(3, 0),
  },
  value: {
    flex: "1 0 180px",
    minWidth: 140,
    padding: theme.spacing(2),
    textAlign: "center",
    "& > h5": {
      margin: theme.spacing(1, 0),
    },
  },
  icon: {
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "contain",
    margin: "0 auto",
    maxWidth: 180,
    height: 140,
  },
}));

const Values: React.FC<{}> = () => {
  const classes = useStyles();

  const Value: React.FC<{
    title: React.ReactNode;
    src: string;
  }> = ({ title, src, children }) => (
    <div className={classes.value}>
      <div
        className={classes.icon}
        style={{ backgroundImage: `url(${src})` }}
      />
      <Typography variant="h5">{title}</Typography>
      <Typography variant="body1" component="div">
        {children}
      </Typography>
    </div>
  );

  return (
    <Container component="section" id="values">
      <Typography variant="h4" component="h2" align="center">
        Our Values
      </Typography>
      <Box className={classes.root}>
        <Value title="Community" src={images.community}>
          Cultivating a supportive environment of like-minded peers
        </Value>
        <Value title="Accountability" src={images.accountability}>
          Embracing the responsibility to inspire future generations
        </Value>
        <Value title="Love" src={images.love}>
          Practicing empathy, honesty, and openness
        </Value>
        <Value title="Social Justice" src={images.socialJustice}>
          Providing equal opportunities for the underrepresented &amp;
          under-resourced
        </Value>
        <Value title="Smart Risks" src={images.smartRisks}>
          Encouraging the pursuit of passions
        </Value>
      </Box>
    </Container>
  );
};

export default Values;
