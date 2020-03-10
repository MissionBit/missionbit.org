import * as React from "react";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import TeamData, { TeamMemberProps } from "./TeamData";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
  container: {
    display: "grid",
    gridGap: theme.spacing(2),
    gridAutoFlow: "dense",
    gridTemplateColumns: "repeat(auto-fit, 180px)",
    justifyContent: "space-between",
    padding: theme.spacing(3),
    textAlign: "center",
    "& > div > img": {
      minWidth: "100px",
      maxWidth: "150px",
      borderRadius: "50%"
    },
    [theme.breakpoints.down("sm")]: {
      justifyContent: "space-around",
      padding: 0,
      gridTemplateColumns: "repeat(auto-fit, 160px)"
    }
  }
}));

const Team: React.FC<{}> = () => {
  const classes = useStyles();

  const TeamMember: React.FC<TeamMemberProps<string>> = ({
    name,
    title,
    image
  }) => (
    <div>
      <img src={`/images/about/team/${image}`} />
      <Typography variant="h5">{name}</Typography>
      <Typography variant="body1">{title}</Typography>
    </div>
  );

  return (
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
          <Box className={classes.container}>
            {members.map(({ name, title, image }) => (
              <TeamMember key={name} name={name} title={title} image={image} />
            ))}
          </Box>
        </React.Fragment>
      ))}
    </section>
  );
};

export default Team;
