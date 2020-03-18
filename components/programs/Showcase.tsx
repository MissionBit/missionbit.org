import * as React from "react";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles(theme => ({
  root: {
    "& > h4": {
      margin: theme.spacing(2, 0),
      textAlign: "center"
    },
    "& img": {
      maxWidth: "100%",
      height: "auto",
      objectFit: "contain"
    }
  }
}));

interface StudentProjectProps {
  href: string;
  imageUrl: string;
  title: string;
}

const StudentProjects: StudentProjectProps[] = [
  {
    href: "https://showcase.missionbit.org/2013/group-projects/video-game/",
    imageUrl: "/images/showcase/dinosaur-game.png",
    title: "Dinosaur Game"
  },
  {
    href:
      "https://showcase.missionbit.org/2014/spring/group-projects/operation-peach/",
    imageUrl: "/images/showcase/peach-game.png",
    title: "Operation Peach"
  },
  {
    href:
      "https://showcase.missionbit.org/2014/spring/group-projects/veggie-jump/",
    imageUrl: "/images/showcase/jump-game.png",
    title: "Veggie Jump"
  }
];

const StudentProject: React.FC<StudentProjectProps> = ({
  href,
  imageUrl,
  title
}) => (
  <Grid item xs={4}>
    <Button href={href} title={title} target="_blank" rel="noopener">
      <img src={imageUrl} alt={`${title} screenshot`} />
    </Button>
  </Grid>
);

const Showcase: React.FC<{}> = () => {
  const classes = useStyles();
  return (
    <Container component="section" id="showcase" className={classes.root}>
      <Typography variant="h4">
        Games and websites created by Mission Bit students
      </Typography>
      <Grid container spacing={3}>
        {StudentProjects.map(props => (
          <StudentProject key={props.href} {...props} />
        ))}
      </Grid>
    </Container>
  );
};

export default Showcase;