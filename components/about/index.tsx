import * as React from "react";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
/*
import AboutUs from "./AboutUs";
import Values from "./Values";
import Team from "./Team";
import Supporters from "./Supporters";
*/

const useStyles = makeStyles(theme => ({
  aboutContainer: {
    padding: "20px"
  },
  team: {
    "& > img": {
      display: "block",
      width: "100%",
      height: "auto"
    }
  },
  ul: {
    ...theme.typography.body1,
    listStyle: "none",
    paddingLeft: 0,
    "& > li": {
      margin: "1em"
    }
  }
}));

const Main: React.SFC<{}> = () => {
  const classes = useStyles();
  return (
    <main id="main">
      <section id="about">
        <Typography variant="h4" component="h1" align="center">
          About Us
        </Typography>
        <Grid
          container
          spacing={3}
          justify="center"
          alignItems="center"
          className={classes.aboutContainer}
        >
          <Grid item xs={12} md={6} className={classes.team}>
            <img
              src="/images/about/full-team.jpg"
              width="2048"
              height="1073"
              alt="Mission Bit Team"
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <ul className={classes.ul}>
              <li>
                Mission Bit provides free, interactive courses at local high
                schools, where students of all backgrounds can unlock their
                entrepreneurial potential; learning, growing, and collaborating
                with their peers while creating original games, websites &amp;
                mobile apps.
              </li>
              <li>
                We believe that newly empowered tech innovators who reflect our
                diversity, will develop solutions that serve our whole
                community, while becoming the future leaders of the global
                technology revolution.
              </li>
              <li>
                Mission Bit provides free semester-long project-based coding
                courses to high school students from underserved and
                underrepresented communities. We offer students career and
                college advising related to the field of technology, field trips
                to tech companies, and an opportunity to showcase their group
                projects to a community of supporters during our Demo Day event.
                Our program’s inclusive community fosters positive relationships
                between students, their peers, and our experienced classroom
                leaders. Mission Bit brings like-minded individuals together to
                form long-lasting meaningful connections and gives students the
                tools they need to succeed in the tech industry.
              </li>
            </ul>
          </Grid>
        </Grid>
      </section>
      <section id="values">
        <Typography variant="h4" component="h2" align="center">
          Our Values
        </Typography>
      </section>
      <section id="team">
        <Typography variant="h4" component="h2" align="center">
          Our Team
        </Typography>
      </section>
      <section id="supporters">
        <Typography variant="h4" component="h2" align="center">
          Our Supporters
        </Typography>
      </section>
    </main>
  );
};

export default Main;
