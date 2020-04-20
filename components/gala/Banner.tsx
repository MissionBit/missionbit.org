import * as React from "react";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  root: {
    background: `url(${require("../../public/images/gala/2020-poster-save-the-date.jpg")}) no-repeat center/100%`,
    width: "100%",
    height: 0,
    overflow: "hidden",
    margin: 0,
    // 3:1 aspect ratio
    padding: "33.33% 0 0",
  },
});

const Banner: React.FC<{}> = () => <div className={useStyles().root} />;

export default Banner;
