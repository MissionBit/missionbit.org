import * as React from "react";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import Supporters from "../Supporters";
import Box from "@material-ui/core/Box";

const useStyles = makeStyles(theme => ({
  landing: {
    padding: theme.spacing(3),
    background:
      "transparent linear-gradient(180deg, #2881D0 0%, #1B98A2 39%, #FFFFFF 100%) 0% 0% no-repeat padding-box",
    "& > h1": {
      marginBottom: theme.spacing(3),
      fontWeight: "bold",
      color: theme.palette.common.white
    }
  },
  grid: {
    "& > div > img": {
      maxWidth: "100%"
    }
  }
}));

const Main: React.FC<{}> = () => {
  const classes = useStyles();
  return (
    <main id="main">
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
      <section id="description">
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
      </section>
      <section id="give">
        <Typography>Ways to Give</Typography>
      </section>
      <section id="volunteers">
        <Typography>Our Volunteers</Typography>
      </section>
      <section id="faq">
        <Typography>Volunteer FAQ</Typography>
      </section>
      <section id="showcase">
        <Typography>
          Games and websites created by Mission Bit students:
        </Typography>
      </section>
      <Supporters />
    </main>
  );
};

export default Main;
