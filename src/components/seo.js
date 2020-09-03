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

function SEO({ description, lang, meta, keywords, title, author }) {
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
            titleTemplate={`%s | ${data.site.siteMetadata.title}`}
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
                content: data.site.siteMetadata.url
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
                content: illustration
              },
              {
                property: `og:type`,
                content: `website`
              },
              {
                name: `twitter:card`,
                content: `summary_large_image`
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
                name: `twitter:image:src`,
                content: illustration
              },
              {
                name: `twitter:image:width`,
                content: '1092'
              },
              {
                name: `twitter:image:height`,
                content: '1018'
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

/*
<meta property="og:title" content="KidGenius - Home" />
<meta property="og:url" content="https://kidgenius.daycareiq.com/" />
<meta property="og:site_name" content="KidGenius" />
<meta property="og:image" content="https://kidgenius.daycareiq.com/images/daycareiq_logo.png" />
<meta property="og:description" content="KidGenius is the easy way to manage a daycare.">
<meta property="fb:app_id" content="773103229471525" />
<meta name="twitter:card" content="summary">
<meta name="twitter:site" content="@daycareiq">
<meta name="twitter:creator" content="@daycareiq"></meta>
*/

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
