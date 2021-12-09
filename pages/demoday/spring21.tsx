import * as React from "react";
import StudentProjects from "components/demoday/past/Spring21StudentProjects";
import { makePastProjectsPage } from "components/demoday/past/PastProjectsPage";

export { getStaticProps } from "components/Layout";
export default makePastProjectsPage({
  period: "Spring 2021",
  projects: <StudentProjects />,
});
