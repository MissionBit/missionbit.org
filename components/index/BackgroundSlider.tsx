import * as React from "react";
import { makeStyles } from "@material-ui/core/styles";
import clsx from "clsx";

export interface BackgroundSliderProps {
  duration: number;
  className?: string;
}

const useStyles = makeStyles(() => ({
  root: {
    overflow: "hidden",
    whiteSpace: "nowrap"
  },
  "@keyframes slide": {
    from: {
      transform: "translate3d(0, 0, 0)"
    },
    to: {
      transform: "translate3d(-50%, 0, 0)"
    }
  },
  wrapper: {
    display: "inline-block",
    whiteSpace: "nowrap",
    overflow: "hidden",
    animationName: "$slide",
    animationIterationCount: "infinite",
    animationDuration: (props: BackgroundSliderProps) =>
      `${props.duration * 2}s`,
    animationTimingFunction: "linear",
    "& > div": {
      display: "inline-block"
    }
  }
}));

const BackgroundSlider: React.FC<BackgroundSliderProps> = props => {
  const { children, className } = props;
  const classes = useStyles(props);
  return (
    <div className={clsx(className, classes.root)}>
      <div className={classes.wrapper}>
        <div>{children}</div>
        <div>{children}</div>
      </div>
    </div>
  );
};

export default BackgroundSlider;
