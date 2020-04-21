import * as React from "react";
import { makeStyles } from "@material-ui/core/styles";
import clsx from "clsx";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-evenly",
    [theme.breakpoints.down("sm")]: {
      flexDirection: "column",
      justifyContent: "center",
    },
  },
  photo: {
    display: "flex",
    flex: "1",
    maxWidth: "60%",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "contain",
    marginRight: theme.spacing(3),
    [theme.breakpoints.down("sm")]: {
      marginRight: 0,
      maxWidth: "initial",
      maxHeight: "calc(100vw * 0.667)",
      height: "calc(100vw * 0.667)",
      width: "100%",
    },
  },
  text: {
    ...theme.typography.h5,
    "& > p": {
      marginBottom: "1rem",
      "&:last-child": {
        marginBottom: "inherit",
      },
    },
    padding: theme.spacing(3),
    alignSelf: "center",
    [theme.breakpoints.down("sm")]: {
      fontSize: theme.typography.body1.fontSize,
      borderRadius: 0,
      margin: `auto 0`,
      padding: theme.spacing(3, 1),
      maxWidth: "initial",
    },
    position: "relative",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    maxWidth: "65%",
  },
}));

const PhotoText: React.FC<{ src: string; className?: string }> = ({
  children,
  src,
  className,
}) => {
  const classes = useStyles();
  return (
    <div className={clsx(classes.root, className)}>
      <div
        className={classes.photo}
        style={{ backgroundImage: `url("${src}")` }}
      />
      <div className={classes.text}>{children}</div>
    </div>
  );
};

export default PhotoText;
