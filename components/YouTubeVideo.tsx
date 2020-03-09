import * as React from "react";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  root: {
    position: "relative",
    overflow: "hidden",
    // 16x9
    paddingTop: "56.25%",
    width: "100%",
    "& > iframe": {
      position: "absolute",
      top: 0,
      left: 0,
      width: "100%",
      height: "100%",
      border: 0
    }
  }
})

const YouTubeVideo: React.FC<{ id: string }> = ({ id }) => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <iframe
        src={`https://www.youtube-nocookie.com/embed/${id}?rel=0&modestbranding=1`}
        frameBorder="0"
        allow="autoplay; encrypted-media"
        allowFullScreen
      />
    </div>
  );
};

export default YouTubeVideo;
