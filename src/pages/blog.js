import React from 'react';
import { graphql } from 'gatsby';

import Layout from '../components/layout';
import SEO from '../components/seo';
import PostPreview from '../components/blog/post-preview';

export default function Blog({ data }) {
  const {
    allMarkdownRemark: { edges }
  } = data;

  return (
    <Layout>
      <SEO title="Blog - Try KidGenius" />
      <div className="flex pt-16 pl-3">
        <div className="flex flex-col">
          {edges.map((edge, key) => (
            <PostPreview
              key={key}
              title={edge.node.frontmatter.title}
              date={localDate(edge.node.frontmatter.date)}
              fold={edge.node.excerpt}
              url={edge.node.frontmatter.slug}
            />
          ))}
        </div>
      </div>
    </Layout>
  );
}

function localDate(_date) {
  const date = new Date(_date);
  return date.toDateString();
}

export const pageQuery = graphql`
  query MyQuery {
    allMarkdownRemark(limit: 10) {
      totalCount
      edges {
        node {
          html
          frontmatter {
            author
            avatar
            date
            slug
            title
          }
          excerpt
          timeToRead
        }
      }
    }
  }
`;
