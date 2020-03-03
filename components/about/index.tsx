import * as React from "react";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import TeamData, { TeamMemberProps } from "./TeamData";
/*
import Team from "./Team";
import Supporters from "./Supporters";
*/

const useStyles = makeStyles(theme => ({
  aboutContainer: {
    padding: "20px"
  },
  valuesContainer: {
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
    listStyleType: "none",
    paddingLeft: 0,
    "& > li": {
      margin: "1em",
      paddingLeft: "2.5em",
      background: 'url("/images/missionbit-bw-bullet.svg") no-repeat left top'
    }
  }
}));

const Value: React.FC<{
  title: React.ReactNode;
  src: string;
}> = ({ title, src, children }) => {
  return (
    <Grid item>
      <img src={src} />
      <Typography variant="h5">{title}</Typography>
      {children}
    </Grid>
  );
};

const TeamMember: React.FC<TeamMemberProps<string>> = ({
  name,
  title,
  image
}) => (
  <Grid item>
    <img
      src={`/images/about/team/${image}`}
      style={{ maxWidth: "10vw", borderRadius: "50%" }}
    />
    <Typography variant="h5">{name}</Typography>
    <Typography variant="h6">{title}</Typography>
  </Grid>
);

const Main: React.FC<{}> = () => {
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
        <Grid
          container
          justify="center"
          alignItems="center"
          className={classes.valuesContainer}
        >
          <Value title="Community" src="/images/about/values-community.svg">
            Cultivating a supportive environment of like-minded peers
          </Value>
          <Value
            title="Social Justice"
            src="/images/about/values-social-justice.svg"
          >
            Embracing the responsibility to inspire future generations
          </Value>
          <Value
            title="Accountability"
            src="/images/about/values-accountability.svg"
          >
            Providing equal opportunities for the underrepresented &amp;
            under-resourced
          </Value>
          <Value title="Smart Risks" src="/images/about/values-smart-risks.svg">
            Encouraging the pursuit of passions
          </Value>
          <Value title="Love" src="/images/about/values-love.svg">
            Practicing empathy, honesty, and openness
          </Value>
        </Grid>
      </section>
      <section id="team">
        <Typography variant="h4" component="h2" align="center">
          Our Team
        </Typography>
        {TeamData.map(({ section, members }, idx) => (
          <React.Fragment key={section}>
            {idx === 0 ? null : (
              <Typography variant="h5" component="h3" align="center">
                {section}
              </Typography>
            )}
            <Grid container>
              {members.map(({ name, title, image }) => (
                <TeamMember
                  key={name}
                  name={name}
                  title={title}
                  image={image}
                />
              ))}
            </Grid>
          </React.Fragment>
        ))}
      </section>
      <section id="jobs">
        <Typography variant="h4" component="h2" align="center">
          Job Openings
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
