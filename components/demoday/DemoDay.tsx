import * as React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Landing from "components/demoday/Landing";
import FlourishSeparator from "components/programs/FlourishSeparator";
// import Agenda from "./Agenda";
// import StudentSpeakers from "./StudentSpeakers";
// import JudgingCategories from "./JudgingCategories";
import StudentProjects from "./StudentProjects";
// import Judges from "./Judges";
import DemoDayFooter from "./DemoDayFooter";

const useStyles = makeStyles(() => ({
  root: {},
}));

const DemoDay: React.FC<{}> = () => {
  const classes = useStyles();
  return (
    <main id="main" className={classes.root}>
      <Landing />
      <FlourishSeparator />
      {/* <Agenda /> */}
      {/* <FlourishSeparator /> */}
      {/* <StudentSpeakers /> */}
      {/* <FlourishSeparator /> */}
      {/* <JudgingCategories /> */}
      {/* <FlourishSeparator /> */}
      {/* <Judges /> */}
      {/* <FlourishSeparator /> */}
      <StudentProjects />
      <FlourishSeparator />
      <DemoDayFooter />
    </main>
  );
};

export default DemoDay;
