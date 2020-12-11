import { NextPage } from "next";
import * as React from "react";
import { Layout, getStaticProps, LayoutStaticProps } from "components/Layout";
import Programs from "components/programs";
import Landing from "components/programs/Landing";
import Description from "components/programs/Description";
import Faq from "components/programs/Faq";
import CommunityWorkshops from "components/programs/CommunityWorkshops";
import Showcase from "components/Showcase";
import Supporters from "components/Supporters";

const Page: NextPage<LayoutStaticProps> = (props) => (
  <Layout
    {...props}
    title="Free coding classes for high school students - Mission Bit"
    description="Mission Bit offers a number of free coding courses for area high schoolers including online workshops, summer bootcamps, and programming classes."
  >
    <Landing />
    <Description />
    <Programs sections={["courses"]} />
    <Faq />
    <CommunityWorkshops />
    <Showcase />
    <Supporters />
  </Layout>
);

export { getStaticProps };
export default Page;
