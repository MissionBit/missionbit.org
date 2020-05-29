import * as React from "react";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import { MediumDateFormat } from "src/dates";
import EventCollage, { CollageImage } from "./EventCollage";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "grid",
    gridGap: theme.spacing(1, 4),
    gridTemplateAreas: `
      "titleDate         collage"
      "descriptionButton collage"
    `,
    gridTemplate: "min-content 1fr / 520px 1fr",
  },
  titleDate: { gridArea: "titleDate" },
  descriptionButton: { gridArea: "descriptionButton" },
  collage: { gridArea: "collage" },
  button: {
    marginTop: theme.spacing(4),
    fontSize: theme.typography.pxToRem(28),
    fontWeight: theme.typography.fontWeightBold,
  },
  title: {},
  date: {
    marginTop: theme.spacing(2),
    fontSize: theme.typography.pxToRem(40),
  },
  description: {
    marginTop: theme.spacing(1),
    fontSize: theme.typography.pxToRem(26),
    fontWeight: theme.typography.fontWeightMedium,
  },
}));

export interface FeaturedEvent {
  date: number;
  href: string;
  title: string;
  topRightImage: CollageImage;
  bottomLeftImage: CollageImage;
  linkTitle: React.ReactNode;
  description: React.ReactNode;
}

export const Featured: React.FC<FeaturedEvent> = ({
  date,
  href,
  title,
  description,
  linkTitle,
  topRightImage,
  bottomLeftImage,
}) => {
  const classes = useStyles();
  return (
    <Box className={classes.root}>
      <Box className={classes.titleDate}>
        <Typography className={classes.title} variant="h2">
          {title}
        </Typography>
        <Typography className={classes.date} variant="h3">
          {MediumDateFormat.format(date)}
        </Typography>
      </Box>
      <Box className={classes.descriptionButton}>
        <Typography className={classes.description}>{description}</Typography>
        <Button
          className={classes.button}
          href={href}
          size="large"
          variant="outlined"
          color="secondary"
        >
          {linkTitle}
        </Button>
      </Box>
      <EventCollage
        className={classes.collage}
        topRightImage={topRightImage}
        bottomLeftImage={bottomLeftImage}
      />
    </Box>
  );
};

export default Featured;
