import React from 'react';
import { graphql, Link } from 'gatsby';
import ReactMarkdown from 'react-markdown'

import Layout from '../components/layout';
import SEO from '../components/seo';

export default function Template({ data }) {
  const { markdownRemark } = data;
  const { frontmatter, html, excerpt } = markdownRemark;
  console.log(frontmatter);
  const date = new Date(frontmatter.date);
  return (
    <Layout>
      <SEO
        url={`/blog/${frontmatter.slug}`}
        image={frontmatter.featuredImage ? frontmatter.featuredImage.publicURL : null}
        title={frontmatter.title}
        keywords={frontmatter.keywords || ''}
        description={
          frontmatter.description && frontmatter.description.length > 0
            ? frontmatter.description
            : excerpt
        }
      />
      <div className="flex flex-col pl-3 pt-10 items-center">
        <h3 className="text-gray-600 font-medium pb-2 sm:pb-6">
          {date.toDateString()}
        </h3>
        <h1 className="text-center max-w-5xl text-2xl sm:text-2xl md:text-3xl lg:text-4xl md:leading-none pb-2 sm:pb-6">
          {frontmatter.title}
        </h1>
        <p className="text-lg font-medium text-gray-700">
          <span className="text-sm">written by</span> {frontmatter.author}
        </p>
        {frontmatter.featuredImage && (
          <div className="mt-5 pt-5 max-w-4xl">
            <img src={frontmatter.featuredImage.publicURL} />
            <p className="mt-5 text-xs markdown text-gray-600">
              <ReactMarkdown>{frontmatter.featuredImageCaption}</ReactMarkdown>
            </p>
          </div>
        )}
        <div
          className="pt-6 max-w-4xl border border-gray-400 border-t-1 border-b-0 border-l-0 border-r-0 markdown"
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
      excerpt(pruneLength: 250)
      frontmatter {
        author
        date
        slug
        title
        keywords
        description
        featuredImageCaption
        featuredImage {
          publicURL
          absolutePath
          relativePath
        }
      }
    }
  }
`;
