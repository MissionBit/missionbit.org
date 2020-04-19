import * as React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import Link from "@material-ui/core/Link";
import YouTubeIcon from "@material-ui/icons/YouTube";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "inline-flex",
    flexDirection: "column",
    padding: theme.spacing(2),
    width: 300,
    alignItems: "center",
    "&:hover $overlay": {
      color: "red",
    },
  },
  title: {
    marginTop: theme.spacing(2),
  },
  img: {
    maxWidth: "100%",
    height: "auto",
  },
  overlay: {
    position: "absolute",
    right: theme.spacing(1),
    bottom: theme.spacing(1),
    color: theme.palette.common.white,
  },
  wrapper: {
    position: "relative",
  },
}));

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
        <YouTubeIcon className={classes.overlay} />
      </Box>
      <Typography variant="h4" className={classes.title}>
        {children}
      </Typography>
    </Link>
  );
};

export default YouTubePreview;
