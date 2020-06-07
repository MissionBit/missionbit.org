import * as React from "react";
import { makeStyles } from "@material-ui/core/styles";
import YouTubePreview from "./YouTubePreview";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "grid",
    gridGap: theme.spacing(2),
    gridAutoFlow: "dense",
    gridTemplateColumns: "repeat(auto-fit, minmax(280px, max-content))",
    justifyContent: "space-between",
    padding: theme.spacing(3),
    textAlign: "center",
    [theme.breakpoints.down("sm")]: {
      justifyContent: "space-around",
      padding: 0,
    },
  },
}));

const YouTubePreviews: React.FC<{
  values: React.ComponentProps<typeof YouTubePreview>[];
}> = ({ values }) => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      {values.map(({ id, title }) => (
        <YouTubePreview key={id} id={id} title={title} />
      ))}
    </div>
  );
};

export default YouTubePreviews;
