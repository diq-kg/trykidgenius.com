import React from 'react';
import { graphql } from 'gatsby';

import Layout from '../components/layout';
import SEO from '../components/seo';
import PostPreview from '../components/blog/post-preview';

export default function Blog({ data }) {
  const {
    allMarkdownRemark: { edges },
  } = data;

  const title = 'KidGenius | Daycare center resources';
  const desc =
    'Check out our curated content for daycare centers especially written for childcare owners, parents, teachers and more.';
  return (
    <Layout>
      <SEO title={title} description={desc} />
      <div className="flex flex-col items-center">
        <h1 className="md:text-6xl text-3xl font-extrabold mt-8">KidGenius Blog</h1>
        <p className="text-gray-brand-light">
          All the latest KidGenius news straight from the team.
        </p>
        <div className="flex pt-4 lg:pt-8 pl-3 mt-4">
          <div className="flex flex-col">
            {edges.map((edge, key) => (
              <div className="pt-8 border border-gray-300 border-t-1 border-r-0 border-l-0 border-b-0">
                <PostPreview
                  key={key}
                  title={edge.node.frontmatter.title}
                  date={localDate(edge.node.frontmatter.date)}
                  fold={edge.node.excerpt}
                  url={edge.node.frontmatter.slug}
                />
              </div>
            ))}
          </div>
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
    allMarkdownRemark(limit: 10, sort: {order: DESC, fields: frontmatter___date}) {
      totalCount
      edges {
        node {
          frontmatter {
            author
            avatar
            date
            slug
            title
          }
          excerpt(pruneLength: 300)
          timeToRead
        }
      }
    }
  }
`;
