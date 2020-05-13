import * as React from "react";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";
import Container from "@material-ui/core/Container";
import { brand } from "src/colors";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "grid",
    gridGap: theme.spacing(2),
    gridTemplateColumns: "2fr 3fr",
    gridTemplateRows: "auto",
    gridTemplateAreas: `
      "photo name"
      "photo title"
      "photo quote"
    `,
    [theme.breakpoints.down("xs")]: {
      gridTemplateColumns: "1fr",
      gridTemplateAreas: `
        "name"
        "title"
        "photo"
        "quote"
      `,
    },
  },
  name: {
    gridArea: "name",
    textAlign: "center",
    fontSize: theme.typography.pxToRem(53),
    [theme.breakpoints.between("xs", "sm")]: {
      fontSize: theme.typography.h3.fontSize,
    },
    [theme.breakpoints.down("xs")]: {
      fontSize: theme.typography.h4.fontSize,
    },
  },
  title: {
    gridArea: "title",
    textAlign: "center",
    fontSize: theme.typography.pxToRem(35),
    [theme.breakpoints.down("xs")]: {
      fontSize: theme.typography.pxToRem(24),
    },
  },
  quote: {
    gridArea: "quote",
    fontSize: theme.typography.pxToRem(35),
    [theme.breakpoints.down("sm")]: {
      fontSize: theme.typography.h6.fontSize,
    },
    [theme.breakpoints.down("xs")]: {
      fontSize: theme.typography.pxToRem(14),
    },
  },
  imageWrapper: {
    gridArea: "photo",
    display: "flex",
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    position: "relative",
    [theme.breakpoints.down("xs")]: {
      padding: theme.spacing(3, 0, 0, 3),
      "&:before": {
        position: "absolute",
        content: '""',
        left: 0,
        top: 0,
        right: theme.spacing(4),
        bottom: theme.spacing(3),
        backgroundColor: brand.indigo,
      },
    },
  },
  image: {
    position: "relative",
    width: "100%",
    maxWidth: "100%",
    height: "auto",
    objectFit: "contain",
  },
}));

const Volunteers: React.FC<{}> = () => {
  const classes = useStyles();
  return (
    <Container
      id="volunteer-testimonial"
      component="section"
      className={classes.root}
    >
      <Box className={classes.imageWrapper}>
        <img
          src={require("public/images/get-involved/indya-dodson@0.5x.jpg")}
          srcSet={[
            `${require("public/images/get-involved/indya-dodson.jpg")} 1000w`,
            `${require("public/images/get-involved/indya-dodson@0.5x.jpg")}`,
          ].join(",")}
          className={classes.image}
        />
      </Box>
      <Typography variant="h2" component="h1" className={classes.name}>
        Indya Dodson
      </Typography>
      <Typography variant="body1" className={classes.title}>
        Mission Bit Volunteer
      </Typography>
      <Typography component="blockquote" className={classes.quote}>
        “I’ve been so fortunate to move to Silicon Valley and give back to
        students who are just like me at Mission Bit. I’m grateful for every
        opportunity and want to continue to guide and inspire the next
        generation of engineers.”
      </Typography>
    </Container>
  );
};

export default Volunteers;
