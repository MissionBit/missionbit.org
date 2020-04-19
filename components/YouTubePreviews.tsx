import * as React from "react";
import { makeStyles } from "@material-ui/core/styles";

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

const YouTubePreviews: React.FC<{}> = ({ children }) => {
  const classes = useStyles();
  return <div className={classes.root}>{children}</div>;
};

export default YouTubePreviews;
