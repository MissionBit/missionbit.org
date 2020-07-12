import * as React from "react";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";
import { TeamMemberProps } from "./TeamData";
import { brand } from "src/colors";
import RectImage from "components/RectImage";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "grid",
    gridGap: theme.spacing(2),
    gridTemplate: `
      "picture name"  min-content
      "picture title" min-content
      "picture bio"   1fr
      / 380px 1fr
    `,
    margin: theme.spacing(4, 0),
  },
  picture: {
    gridArea: "picture",
    "& > img": {
      width: "100%",
      height: "auto",
      objectFit: "contain",
    },
  },
  name: {
    gridArea: "name",
  },
  title: {
    gridArea: "title",
  },
  bio: {
    gridArea: "bio",
  },
}));

const Person: React.FC<TeamMemberProps> = ({ name, bio, image, title }) => {
  const classes = useStyles();
  return (
    <Box className={classes.root}>
      <RectImage
        width={300}
        height={300}
        left={31}
        right={25}
        top={33}
        bottom={20}
        id={`person-${name.replace(" ", "-")}`}
        desc={name}
        className={classes.picture}
        fill={brand.indigo}
        srcSetWebP={image.webp}
        src={image.jpg}
      />
      <Typography variant="h4">{name}</Typography>
      <Typography variant="h5">{title}</Typography>
      <Typography>{bio}</Typography>
    </Box>
  );
};

export default Person;
