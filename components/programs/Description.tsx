import * as React from "react";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Box from "@material-ui/core/Box";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    [theme.breakpoints.down("sm")]: {
      flexDirection: "column",
    },
  },
  copy: {
    marginBottom: theme.spacing(2),
    fontSize: theme.typography.pxToRem(24),
    [theme.breakpoints.down("sm")]: {
      fontSize: theme.typography.body1.fontSize,
    },
  },
  imageColumn: {
    display: "flex",
    alignItems: "center",
    flexBasis: "33%",
  },
  copyColumn: {
    flex: 1,
    marginLeft: theme.spacing(6),
    [theme.breakpoints.down("sm")]: {
      marginTop: theme.spacing(2),
      marginLeft: 0,
    },
  },
  photo: {
    width: "100%",
    "& > img": {
      width: "100%",
      maxHeight: "33vh",
      objectFit: "contain",
    },
  },
}));

const Description: React.FC<{}> = () => {
  const classes = useStyles();
  return (
    <Container component="section" id="description" className={classes.root}>
      <Box className={classes.imageColumn}>
        <picture className={classes.photo}>
          <source
            type="image/webp"
            srcSet={require("public/images/program/safia_jaleel.jpg?webp")}
          />
          <img
            alt="Mission Bit student"
            src={require("public/images/program/safia_jaleel.jpg")}
          />
        </picture>
      </Box>
      <Box className={classes.copyColumn}>
        <Typography className={classes.copy}>
          We offer our students a field trip to a Bay Area tech company, career
          and college advising related to the technology field, and an
          opportunity to showcase their group projects to a large community of
          supporters during our Demo Day event at the end of the term.
        </Typography>
        <Typography className={classes.copy}>
          Our program’s inclusive community fosters positive relationships
          between students, their peers, and our experienced classroom leaders.
          Mission Bit brings like-minded individuals together to form
          long-lasting meaningful connections and gives students all the tools
          they need to succeed in the tech industry.
        </Typography>
      </Box>
    </Container>
  );
};

export default Description;
