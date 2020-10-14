import * as React from "react";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";
import { SpeakerProps } from "./SpeakerData";
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
    [theme.breakpoints.down("sm")]: {
      gridTemplate: `
      "picture name"  min-content
      "picture title" min-content
      "bio bio"   1fr
      / 200px 1fr
    `,
    },
    [theme.breakpoints.down("xs")]: {
      gridTemplate: `
      "picture"
      "name"
      "title"
      "bio"
      / 1fr
    `,
    },
  },
  picture: {
    gridArea: "picture",
    width: "100%",
    height: "auto",
    objectFit: "contain",
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

const Person: React.FC<SpeakerProps> = ({
  id,
  name,
  bio,
  image,
  title,
  type,
}) => {
  const classes = useStyles();
  return (
    <Box className={classes.root} id={id}>
      <RectImage
        width={300}
        height={300 * 1.296}
        left={31}
        right={25}
        top={33}
        bottom={20}
        id={`person-${name.replace(" ", "-")}`}
        desc={name}
        className={classes.picture}
        fill={brand.lightOrange}
        srcSet={image.srcSet}
        srcSetWebP={image.webp}
        src={image.jpg}
      />
      <Typography variant="h4" className={classes.name}>
        {type}: {name}
      </Typography>
      <Typography variant="h5" className={classes.title}>
        {title}
      </Typography>
      <Typography className={classes.bio}>{bio}</Typography>
    </Box>
  );
};

export default Person;
