import { NextPage } from "next";
import * as React from "react";
import { Layout, getStaticProps, LayoutStaticProps } from "components/Layout";
import Programs from "components/programs";
import LandingWorkshops from "components/programs/LandingWorkshops";
import FaqWorkshops from "components/programs/FaqWorkshops";
import CommunityWorkshops from "components/programs/CommunityWorkshops";
import Showcase from "components/Showcase";
import Supporters from "components/Supporters";
import FlourishSeparator from "components/programs/FlourishSeparator";

const Page: NextPage<LayoutStaticProps> = (props) => (
  <Layout
    {...props}
    title="Free coding classes for high school students - Mission Bit"
    description="Mission Bit offers a number of free coding courses for area high schoolers including online workshops, summer bootcamps, and programming classes."
  >
    <LandingWorkshops />
    <Programs sections={["week-of-code"]} />
    <FlourishSeparator />
    <FaqWorkshops />
    <CommunityWorkshops />
    <Showcase />
    <Supporters />
  </Layout>
);

export { getStaticProps };
export default Page;
