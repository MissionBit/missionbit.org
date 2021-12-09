import { NextPage } from "next";
import * as React from "react";
import { Layout, LayoutStaticProps } from "components/Layout";
import oneLine from "src/oneLine";
import PastProjectsLanding from "components/demoday/past/PastProjectsLanding";

export interface PastProjectsTemplateProps {
  period: string;
  projects: JSX.Element;
}

export function makePastProjectsPage({
  period,
  projects,
}: PastProjectsTemplateProps): NextPage<LayoutStaticProps> {
  const title = `${period} Demo Day - Mission Bit`;
  const description = oneLine`
  ${period} Demo Day is a culminating showcase where our students display
  their amazing projects to our community of supporters!`;
  return function PastProjectsPage(props: LayoutStaticProps) {
    return (
      <Layout
        {...props}
        headerClassName=""
        footerClassName=""
        title={title}
        description={description}
      >
        <PastProjectsLanding period={period} />
        {projects}
      </Layout>
    );
  };
}
