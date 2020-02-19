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
        <div className="mx-auto max-w-screen-brand text-gray-brand font-brand">
          <Header />
          <div className="p-3">{children}</div>
        </div>
      )}
    />
  );
}

Layout.propTypes = {
  children: PropTypes.node.isRequired
};

export default Layout;
