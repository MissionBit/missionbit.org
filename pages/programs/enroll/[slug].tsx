import { NextPage, GetStaticProps, GetStaticPaths } from "next";
import * as React from "react";
import {
  Layout,
  getStaticProps as getLayoutStaticProps,
  LayoutStaticProps,
} from "components/Layout";
import EnrollInstance from "components/programs/EnrollInstance";
import {
  SpringClassInstances,
  SummerClassInstances,
} from "components/programs/ClassInstanceData";

interface EnrollProps extends LayoutStaticProps {
  slug: string;
}

const Page: NextPage<EnrollProps> = ({ slug, ...props }) => {
  const signupUrl = `https://www.tfaforms.com/${slug}`;
  const instance = [...SpringClassInstances, ...SummerClassInstances].find(
    (inst) => inst.signupUrl === signupUrl
  )!;
  return (
    <Layout
      {...props}
      title={`Mission Bit – Enroll in ${instance.course.title}`}
    >
      <EnrollInstance instance={instance} />
    </Layout>
  );
};

export const getStaticProps: GetStaticProps = async (ctx) => {
  const rval = await getLayoutStaticProps(ctx);
  return { ...rval, props: { ...rval.props, slug: ctx.params!.slug } };
};

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = [...SpringClassInstances, ...SummerClassInstances].map(
    (inst) => ({
      params: { slug: inst.signupUrl.replace("https://www.tfaforms.com/", "") },
    })
  );
  return { paths, fallback: false };
};

export default Page;
