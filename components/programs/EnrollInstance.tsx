import * as React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { ClassOrWorkshopInstance } from "./ClassInstanceData";
import useScript from "react-script-hook";

const useStyles = makeStyles(() => ({
  root: {
    display: "flex",
    "& > iframe": {
      width: "100%",
    },
  },
}));

const EnrollInstance: React.FC<{ instance: ClassOrWorkshopInstance }> = ({
  instance,
}) => {
  const classes = useStyles();
  useScript({ src: "//tfaforms.com/js/iframe_resize_helper.js" });
  return (
    <main id="main" className={classes.root}>
      <iframe
        title="Registration form"
        src={instance.signupUrl}
        height="1700"
        width="100%"
        frameBorder="0"
      />
    </main>
  );
};

export default EnrollInstance;
