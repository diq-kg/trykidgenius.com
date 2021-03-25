import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import { StaticQuery, graphql } from 'gatsby';
import illustration from '../images/illustration.png';

function getKeywords(keywords, backup) {
  const _keywords = {
    name: 'keywords',
    content: ''
  };

  if (keywords && keywords.length) {
    _keywords.content = keywords;
  } else {
    _keywords.content = backup.join(', ');
  }

  return _keywords;
}

function SEO({ description, lang, meta, keywords, title, author, image, url }) {
  return (
    <StaticQuery
      query={detailsQuery}
      render={data => {
        return (
          <Helmet
            htmlAttributes={{
              lang
            }}
            title={title || data.site.siteMetadata.title}
            meta={[
              {
                name: `description`,
                content: description || data.site.siteMetadata.description
              },
              {
                property: `og:title`,
                content: title || data.site.siteMetadata.title
              },
              {
                property: `og:url`,
                content: url || data.site.siteMetadata.url
              },
              {
                property: `og:site_name`,
                content: data.site.siteMetadata.title
              },
              {
                property: `og:description`,
                content: description || data.site.siteMetadata.description
              },
              {
                property: `og:fb_appid`,
                content: data.site.siteMetadata.fbAppId
              },
              {
                property: `og:image`,
                content: image || illustration
              },
              {
                property: `og:type`,
                content: `website`
              },
              {
                name: `twitter:card`,
                content: `summary`
              },
              {
                name: `twitter:creator`,
                content: data.site.siteMetadata.twitter
              },
              {
                name: `twitter:title`,
                content: title || data.site.siteMetadata.title
              },
              { 
                name: `twitter:image`,
                content: image || illustration
              },
              {
                name: `twitter:description`,
                content: description || data.site.siteMetadata.description
              }
            ]
              .concat(getKeywords(keywords, data.site.siteMetadata.keywords))
              .concat(meta)}
          />
        );
      }}
    />
  );
}

SEO.defaultProps = {
  lang: `en`,
  meta: [],
  keywords: []
};

SEO.propTypes = {
  description: PropTypes.string,
  lang: PropTypes.string,
  meta: PropTypes.array,
  keywords: PropTypes.arrayOf(PropTypes.string),
  title: PropTypes.string.isRequired,
  author: PropTypes.string
};

export default SEO;

const detailsQuery = graphql`
  query DefaultSEOQuery {
    site {
      siteMetadata {
        title
        description
        author
        keywords
        url
        fbAppId
        twitter
      }
    }
  }
`;
