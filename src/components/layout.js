import React from 'react';
import PropTypes from 'prop-types';
import { StaticQuery, graphql } from 'gatsby';

import heroImg from '../images/hero.png';
import Header from '../components/header';

function Layout({ children }) {
  return (
    <StaticQuery
      query={graphql`
        query SiteTitleQuery {
          site {
            siteMetadata {
              title
              github
              blog
            }
          }
        }
      `}
      render={data => (
        <body>
          <Header />
          {children}
        </body>
      )}
    />
  );
}

Layout.propTypes = {
  children: PropTypes.node.isRequired
};

export default Layout;
