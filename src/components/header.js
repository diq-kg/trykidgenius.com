import { Link } from 'gatsby';
import PropTypes from 'prop-types';
import React, { useState } from 'react';

function Header({ siteTitle }) {
  const [isExpanded, toggleExpansion] = useState(false);

  function menuButton(show) {
    if (show) {
      return (
        <path d="M18.278 16.864a1 1 0 0 1-1.414 1.414l-4.829-4.828-4.828 4.828a1 1 0 0 1-1.414-1.414l4.828-4.829-4.828-4.828a1 1 0 0 1 1.414-1.414l4.829 4.828 4.828-4.828a1 1 0 1 1 1.414 1.414l-4.828 4.829 4.828 4.828z" />
      );
    } else {
      return (
        <path d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z" />
      );
    }
  }

  function login() {
    window.location.href = 'https://kidgenius.daycareiq.com/session/new';
  }

  function signUp() {
    window.location.href =
      'https://kidgenius.daycareiq.com/account/new?from=kidgenius_home_page_button';
  }

  return (
    <header
      className={`${
        isExpanded ? `` : `h-20`
      } font-brand shadow-sm lg:flex lg:justify-between lg:items-center lg:pr-3`}
    >
      <div className="flex h-20 items-center justify-between px-4 py-3 lg:p0">
        <div className="flex items-center">
          <div className="w-8 h-8 rounded-lg bg-brand-primary"></div>
          <Link to="/" className="text-3xl font-bold ml-2 font-title">
            KidGenius
          </Link>
        </div>
        <div className="lg:hidden flex">
          <button
            onClick={login}
            className="block w-20 h-12 border-2 mr-2 bg-white font-semibold hover:bg-gray-300 rounded"
          >
            Login
          </button>
          <button
            className="block text-gray-brand hover:text-gray-700 focus:text-gray-700 focus:outline-none"
            onClick={() => toggleExpansion(!isExpanded)}
          >
            <svg className="h-8 w-8 fill-current" viewBox="0 0 24 24">
              <title>Menu</title>
              {menuButton(isExpanded)}
            </svg>
          </button>
        </div>
      </div>
      <div
        className={`${
          isExpanded ? 'block' : 'hidden'
        } px-2 pt-4 pb-4 text-gray-brand lg:flex lg:p0`}
      >
        <a
          className="block font-semibold hover:bg-gray-300 rounded px-2 py-1 lg:p0 lg:px-4 lg:pt-3"
          href="/#features"
        >
          Features
        </a>
        <a
          className="block font-semibold hover:bg-gray-300 rounded px-2 py-1 mt-1 lg:mt-0 lg:p0 lg:px-4 lg:ml-2 lg:pt-3"
          href="/#pricing"
        >
          Pricing
        </a>
        {/* <a
          className="block font-semibold hover:bg-gray-300 rounded px-2 py-1 mt-1 lg:mt-0 lg:ml-2 lg:p0 lg:px-4 lg:pt-3"
          href="#"
        >
          Resources
        </a> */}
        <a
          href="/#faq"
          className="block font-semibold hover:bg-gray-300 rounded px-2 py-1 mt-1 lg:mt-0 lg:ml-2 lg:p0 lg:px-4 lg:pt-3"
        >
          FAQ
        </a>
        <Link
          className="block font-semibold hover:bg-gray-300 rounded px-2 py-1 mt-1 lg:mt-0 lg:ml-2 lg:p0 lg:px-4 lg:pt-3"
          to="/aboutus"
        >
          About Us
        </Link>
        <button
          onClick={login}
          className="block w-32 h-12 border-2 bg-white font-semibold hover:bg-gray-300 rounded mt-2 ml-2 lg:mt-0 lg:ml-10"
        >
          Login
        </button>
        <button
          onClick={signUp}
          className="block w-32 h-12 bg-brand-primary text-white font-semibold hover:bg-gray-300 rounded mt-2 ml-2 lg:mt-0 lg:ml-4"
        >
          Sign Up
        </button>
      </div>
    </header>
  );
}

Header.propTypes = {
  siteTitle: PropTypes.string
};

Header.defaultProps = {
  siteTitle: ``
};

export default Header;
