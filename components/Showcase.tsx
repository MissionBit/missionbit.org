import * as React from "react";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import { StaticImageImport } from "src/image";
import Image from "next/image";

const useStyles = makeStyles((theme) => ({
  root: {
    "& > h4": {
      margin: theme.spacing(2, 0),
      textAlign: "center",
      [theme.breakpoints.down("sm")]: {
        fontSize: theme.typography.h5.fontSize,
      },
    },
    "& img": {
      maxWidth: "100%",
      height: "auto",
      objectFit: "contain",
    },
  },
}));

interface StudentProjectProps {
  href: string;
  image: StaticImageImport;
  title: string;
}

const StudentProjects: StudentProjectProps[] = [
  {
    href: "https://showcase.missionbit.org/2013/group-projects/video-game/",
    image: require("public/images/showcase/dinosaur-game.png").default,
    title: "Dinosaur Game",
  },
  {
    href: "https://showcase.missionbit.org/2014/spring/group-projects/operation-peach/",
    image: require("public/images/showcase/peach-game.png").default,
    title: "Operation Peach",
  },
  {
    href: "https://showcase.missionbit.org/2014/spring/group-projects/veggie-jump/",
    image: require("public/images/showcase/jump-game.png").default,
    title: "Veggie Jump",
  },
];

const StudentProject: React.FC<StudentProjectProps> = ({
  href,
  image,
  title,
}) => (
  <Grid item xs={4}>
    <Button href={href} title={title} target="_blank" rel="noopener noreferrer">
      <Image src={image} alt={`${title} screenshot`} />
    </Button>
  </Grid>
);

const Showcase: React.FC<{}> = () => {
  const classes = useStyles();
  return (
    <Container component="section" id="showcase" className={classes.root}>
      <Typography variant="h4">
        Games and websites created by Mission Bit students
        <br></br>
        <br></br>
        <Button
          href="https://www.missionbit.org/demoday"
          size="large"
          variant="outlined"
          color="primary"
          target="_blank"
          rel="noopener noreferrer"
        >
          Check out previous Demo Day Projects
        </Button>
      </Typography>

      <Grid container spacing={3}>
        {StudentProjects.map((props) => (
          <StudentProject key={props.href} {...props} />
        ))}
      </Grid>
    </Container>
  );
};

export default Showcase;
