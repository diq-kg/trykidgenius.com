import { Link } from 'gatsby';
import PropTypes from 'prop-types';
import React, { useState } from 'react';

function Header({ siteTitle }) {
  const [isExpanded, toggleExpansion] = useState(false);

  return (
    <nav className="h-20 p-4 text-gray-brand bg-gray-700">
      <div className="flex items-center justify-between">
        <div className="flex items-center">
          <div className="w-8 h-8 rounded-lg bg-brand-primary"></div>
          <span className="text-3xl font-bold ml-2 font-title"> KidGenius</span>
        </div>

        <button
          className="block md:hidden border border-white flex items-center px-3 py-2 rounded text-gray-brand"
          onClick={() => toggleExpansion(!isExpanded)}
        >
          <svg
            className="fill-current h-6 w-6"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <title>Menu</title>
            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
          </svg>
        </button>
      </div>
      <div
        className={`${
          isExpanded ? `block` : `hidden`
        } md:block md:flex md:items-center w-full md:w-auto`}
      >
        <div className="text-sm text-gray-brand">
          <Link
            to="/"
            className="block mt-4 md:inline-block md:mt-0 mr-6 no-underline"
          >
            Home
          </Link>

          <Link
            to="/about"
            className="block md:inline-block mt-4 md:mt-0 mr-6 no-underline"
          >
            About
          </Link>

          <Link
            to="/contact"
            className="block md:inline-block mt-4 md:mt-0 no-underline"
          >
            Contact
          </Link>
        </div>
      </div>
    </nav>
  );
}

Header.propTypes = {
  siteTitle: PropTypes.string
};

Header.defaultProps = {
  siteTitle: ``
};

export default Header;
