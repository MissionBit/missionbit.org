import * as React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Landing from "components/demoday/Landing";
import FlourishSeparator from "components/programs/FlourishSeparator";

const useStyles = makeStyles(() => ({
  root: {},
}));

const Placeholder: React.FC<{}> = () => <section />;

const Agenda = Placeholder;
const StudentSpeakers = Placeholder;
const JudgingCategories = Placeholder;
const Judges = Placeholder;
const StudentProjects = Placeholder;
const DemoDayFooter = Placeholder;

const DemoDay: React.FC<{}> = () => {
  const classes = useStyles();
  return (
    <main id="main" className={classes.root}>
      <Landing />
      <FlourishSeparator />
      <Agenda />
      <FlourishSeparator />
      <StudentSpeakers />
      <FlourishSeparator />
      <JudgingCategories />
      <FlourishSeparator />
      <Judges />
      <FlourishSeparator />
      <StudentProjects />
      <FlourishSeparator />
      <DemoDayFooter />
    </main>
  );
};

export default DemoDay;
