import { NextPage } from "next";
import * as React from "react";
import { Layout, getStaticProps, LayoutStaticProps } from "components/Layout";
import Programs from "components/programs";
import LandingCareerPrep from "components/programs/LandingCareerPrep";
import DescriptionCareerPrep from "components/programs/DescriptionCareerPrep";

const Page: NextPage<LayoutStaticProps> = (props) => (
  <Layout
    {...props}
    title="Free coding classes for high school students - Mission Bit"
    description="Mission Bit offers a number of free coding courses for area high schoolers including online workshops, summer bootcamps, and programming classes."
  >
    <LandingCareerPrep />
    <DescriptionCareerPrep />
    <Programs sections={["tech-start"]} />
    <Programs sections={["career-prep"]} />
  </Layout>
);

export { getStaticProps };
export default Page;
