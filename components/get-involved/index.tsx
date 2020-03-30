import * as React from "react";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";
import { makeStyles } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";
import Faq from "./Faq";
import Volunteers from "./Volunteers";

const useStyles = makeStyles((theme) => ({
  root: {
    "& > section": {
      marginTop: theme.spacing(2),
      marginBottom: theme.spacing(2),
      "&:first-child": {
        marginTop: 0,
      },
    },
  },
  heading: {
    margin: theme.spacing(2, 0),
    textAlign: "center",
  },
  landing: {
    padding: theme.spacing(3),
    background:
      "transparent linear-gradient(180deg, #2881D0 0%, #1B98A2 39%, #FFFFFF 100%) 0% 0% no-repeat padding-box",
    "& > h1": {
      marginBottom: theme.spacing(3),
      fontWeight: "bold",
      color: theme.palette.common.white,
    },
  },
  grid: {
    "& > div > img": {
      maxWidth: "100%",
    },
  },
}));

const Main: React.FC<{}> = () => {
  const classes = useStyles();
  return (
    <main id="main" className={classes.root}>
      <Box id="landing" component="section" className={classes.landing}>
        <Typography variant="h2" component="h1" align="center">
          Get Involved
        </Typography>
        <Grid container className={classes.grid} spacing={3}>
          <Grid item xs={4}>
            <img src="/images/program/miguel_yanez.jpg" />
          </Grid>
          <Grid item xs={4}>
            <img src="/images/program/nathan_powell.jpg" />
          </Grid>
          <Grid item xs={4}>
            <img src="/images/program/safia_jaleel.jpg" />
          </Grid>
        </Grid>
      </Box>
      <Container component="section" id="description">
        <Typography>
          Let's work together! Discover how you can make an impact in your
          community to empower the next generation of innovators. Use your
          talents to help us diversify the tech industry.
        </Typography>
        <Typography>
          Your donation to Mission Bit helps educate and equip students to
          pursue opportunities in tech. Your donation will help us:
          <br />
          1. Reach more students with our free programs
          <br />
          2. Find and train Facilitators and Teachers for our Semester Courses
          and Summer Bootcamps
          <br />
          3. Create a world-class curriculum for our classrooms
          <br />
          4. Diversify the tech industry
          <br />
        </Typography>
      </Container>
      <Container component="section" id="give">
        <Typography variant="h4" className={classes.heading}>
          Ways to Give
        </Typography>
      </Container>
      <Volunteers />
      <Faq />
    </main>
  );
};

export default Main;
