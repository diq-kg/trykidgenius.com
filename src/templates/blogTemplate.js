import React from 'react';
import { graphql } from 'gatsby';

import Layout from '../components/layout';

export default function Template({ data }) {
  const { markdownRemark } = data;
  const { frontmatter, html } = markdownRemark;
  const date = new Date(frontmatter.date);
  return (
    <Layout>
      <div className="flex flex-col pl-3 pt-10">
        <h1 className="text-4xl font-brand">{frontmatter.title}</h1>
        <h3 className="font-semibold">{date.toDateString()}</h3>
        <div className="pt-4" dangerouslySetInnerHTML={{ __html: html }} />
      </div>
    </Layout>
  );
}

export const pageQuery = graphql`
  query($slug: String!) {
    markdownRemark(frontmatter: { slug: { eq: $slug } }) {
      html
      frontmatter {
        date
        slug
        title
      }
    }
  }
`;
