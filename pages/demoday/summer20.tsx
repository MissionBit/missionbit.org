import * as React from "react";
import StudentProjects from "components/demoday/past/Summer20StudentProjects";
import { makePastProjectsPage } from "components/demoday/past/PastProjectsPage";

export { getStaticProps } from "components/Layout";
export default makePastProjectsPage({
  period: "Summer 2020",
  projects: <StudentProjects />,
});
