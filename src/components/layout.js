import React from 'react';
import PropTypes from 'prop-types';
import { StaticQuery, graphql } from 'gatsby';

import Header from '../components/header';
import Footer from '../components/footer';

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
        <div className="mx-auto max-w-screen-brand text-gray-brand font-brand mb-4">
          <Header />
          <div className="p-3 mb-12">{children}</div>
          <Footer />
          <div className="text-gray-brand-light ml-2">
            KidGenius © 2020, All rights reserved.
          </div>
        </div>
      )}
    />
  );
}

Layout.propTypes = {
  children: PropTypes.node.isRequired
};

export default Layout;
