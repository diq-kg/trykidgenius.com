import React from 'react';
import { graphql } from 'gatsby';

import Layout from '../components/layout';

export default function Template({ data }) {
  const { markdownRemark } = data;
  const { frontmatter, html } = markdownRemark;
  return (
    <Layout>
      <div className="flex flex-col pl-3">
        <h1 className="text-2xl font-brand-bold">{frontmatter.title}</h1>
        <h3 className="font-semibold">{frontmatter.date}</h3>
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
        date(formatString: "MMMM DD, YYYY")
        slug
        title
      }
    }
  }
`;
