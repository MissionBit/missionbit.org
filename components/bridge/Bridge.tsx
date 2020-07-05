import * as React from "react";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";
import TeamData from "./TeamData";
import VioletButton from "components/VioletButton";

const useStyles = makeStyles((theme) => ({
  root: {},
  section: {
    margin: theme.spacing(4, 0),
  },
  team: {},
  button: {},
}));

const Bridge: React.FC<{}> = () => {
  const classes = useStyles();
  return (
    <main id="main" className={classes.root}>
      <Container component="section" id="intro">
        <Typography variant="h1">Bridging the Youth Tech Divide</Typography>
      </Container>
      <Container component="section" id="register">
        <VioletButton
          href="https://www.tfaforms.com/4835468"
          target="_blank"
          rel="noopener noreferrer"
          variant="contained"
          size="large"
          className={classes.button}
        >
          Register
        </VioletButton>
      </Container>
      {TeamData.map(({ section, members }) => (
        <Container
          component="section"
          id={section.toLowerCase().replace(" ", "-")}
          key={section}
        >
          <Typography variant="h2">{section}</Typography>
          <Box className={classes.team}>
            {members.map(({ name, bio, image, title }, i) => (
              <Box key={i}>
                <picture>
                  <source type="image/webp" srcSet={image.webp} />
                  <img alt={name} src={image.jpg} />
                </picture>
                <Typography variant="h3">{name}</Typography>
                <Typography variant="h4">{title}</Typography>
                <Typography>{bio}</Typography>
              </Box>
            ))}
          </Box>
        </Container>
      ))}
    </main>
  );
};

export default Bridge;
