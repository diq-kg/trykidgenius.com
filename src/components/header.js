import { Link } from 'gatsby';
import PropTypes from 'prop-types';
import React, { useState } from 'react';

function Header({ siteTitle }) {
  const [isExpanded, toggleExpansion] = useState(false);

  function menuButton(show) {
    if (show) {
      return (
        <path
          fill-rule="evenodd"
          d="M18.278 16.864a1 1 0 0 1-1.414 1.414l-4.829-4.828-4.828 4.828a1 1 0 0 1-1.414-1.414l4.828-4.829-4.828-4.828a1 1 0 0 1 1.414-1.414l4.829 4.828 4.828-4.828a1 1 0 1 1 1.414 1.414l-4.828 4.829 4.828 4.828z"
        />
      );
    } else {
      return (
        <path
          fill-rule="evenodd"
          d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"
        />
      );
    }
  }

  return (
    <header
      class={`${
        isExpanded ? `` : `h-20`
      } font-brand md:flex md:justify-between md:items-center md:pr-3`}
    >
      <div className="flex h-20 items-center justify-between px-4 py-3 md:p0">
        <div className="flex items-center">
          <div className="w-8 h-8 rounded-lg bg-brand-primary"></div>
          <span className="text-3xl font-bold ml-2 font-title">KidGenius</span>
        </div>
        <div className="md:hidden">
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
        class={`${
          isExpanded ? 'block' : 'hidden'
        } px-2 pt-4 pb-4 text-gray-brand md:flex md:p0 md-h-auto`}
      >
        <a
          className="block font-semibold hover:bg-gray-300 rounded px-2 py-1 md:p0 md:px-4 md:pt-3"
          href="#"
        >
          Features
        </a>
        <a
          className="block font-semibold hover:bg-gray-300 rounded px-2 py-1 mt-1 md:mt-0 md:p0 md:px-4 md:ml-2 md:pt-3"
          href="#"
        >
          Pricing
        </a>
        <a
          className="block font-semibold hover:bg-gray-300 rounded px-2 py-1 mt-1 md:mt-0 md:ml-2 md:p0 md:px-4 md:pt-3"
          href="#"
        >
          Resources
        </a>
        <a
          className="block font-semibold hover:bg-gray-300 rounded px-2 py-1 mt-1 md:mt-0 md:ml-2 md:p0 md:px-4 md:pt-3"
          href="#"
        >
          FAQ
        </a>
        <button className="block w-32 h-12 border-2 bg-white font-semibold hover:bg-gray-300 rounded mt-2 ml-2 md:mt-0 md:ml-10">
          Login
        </button>
        <button className="block w-32 h-12 bg-brand-primary font-semibold hover:bg-gray-300 rounded mt-2 ml-2 md:mt-0 md:ml-4">
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

{
  /* <nav className="">
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
    </nav> */
}
