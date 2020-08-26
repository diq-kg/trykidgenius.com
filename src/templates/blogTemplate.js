import React from 'react';
import { graphql, Link } from 'gatsby';

import Layout from '../components/layout';

export default function Template({ data }) {
  const { markdownRemark } = data;
  const { frontmatter, html } = markdownRemark;
  const date = new Date(frontmatter.date);
  return (
    <Layout>
      <div className="flex flex-col pl-3 pt-10 items-center">
        <h3 className="text-gray-600 font-medium pb-2 sm:pb-6">
          {date.toDateString()}
        </h3>
        <h1 className="text-center max-w-3xl text-2xl sm:text-3xl md:text-4xl lg:text-5xl md:leading-none font-brand-bold pb-2 sm:pb-6">
          {frontmatter.title}
        </h1>
        <p>KG Team</p>
        <p>
          <a
            href="https://www.facebook.com/trykidgenius/"
            className="text-brand-primary"
          >
            @trykidgenius
          </a>
        </p>
        <div
          className="mt-10 pt-10 max-w-4xl border border-gray-400 border-t-1 border-b-0 border-l-0 border-r-0"
          dangerouslySetInnerHTML={{ __html: html }}
        />
        <div className="pt-10">
          <Link className="text-brand-primary" to="/blog">
            Back
          </Link>
        </div>
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
