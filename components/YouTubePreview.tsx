import * as React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import Link from "@material-ui/core/Link";
import YouTubeIcon from "@material-ui/icons/YouTube";
import PlayArrowIcon from "@material-ui/icons/PlayArrow";

const useStyles = makeStyles((theme) => {
  const width = 300;
  const padding = theme.spacing(2);
  const imgWidth = 300 - 2 * padding;
  const imgHeight = (720 / 1280) * imgWidth;

  return {
    root: {
      display: "inline-flex",
      flexDirection: "column",
      padding,
      width,
      alignItems: "center",
      "&:hover $overlay": {
        opacity: "100%",
        "&$youTube": {
          color: "red",
        },
        "&$playArrow": {
          color: theme.palette.common.white,
        },
      },
    },
    title: {
      marginTop: theme.spacing(2),
    },
    img: {
      width: imgWidth,
      height: imgHeight,
      maxWidth: "100%",
    },
    overlay: {
      position: "absolute",
      left: "50%",
      top: "50%",
      transform: "translate(-50%, -50%)",
      opacity: "80%",
      transition: theme.transitions.easing.easeIn,
    },
    youTube: {
      fontSize: "3rem",
      color: theme.palette.common.white,
    },
    playArrow: {
      fontSize: "1.455rem",
      color: theme.palette.common.black,
    },
    wrapper: {
      position: "relative",
    },
  };
});

const YouTubePreview: React.FC<{ id: string }> = ({ id, children }) => {
  const classes = useStyles();
  return (
    <Link
      href={`https://www.youtube.com/watch?v=${id}`}
      target="_blank"
      rel="noopener noreferrer"
      className={classes.root}
    >
      <Box className={classes.wrapper}>
        <img
          src={`https://i3.ytimg.com/vi/${id}/maxresdefault.jpg`}
          className={classes.img}
        />
        <YouTubeIcon className={`${classes.overlay} ${classes.youTube}`} />
        <PlayArrowIcon className={`${classes.overlay} ${classes.playArrow}`} />
      </Box>
      <Typography variant="h5" className={classes.title}>
        {children}
      </Typography>
    </Link>
  );
};

export default YouTubePreview;
