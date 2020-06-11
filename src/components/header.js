import { Link } from "gatsby";
import PropTypes from "prop-types";
import React, { useState } from "react";
import Dropdown from "./dropdown";
import logo from "../images/logo.svg";

function Header({ siteTitle }) {
  const [isExpanded, toggleExpansion] = useState(false);

  const dropDownItemsLogin = [
    {
      label: "Provider Login",
      url: "https://app.trykidgenius.com/",
    },
    {
      label: "Parents Login",
      url: "https://parents.trykidgenius.com/",
    },
  ];

  const dropDownItemsSignUp = [
    {
      label: "Provider Sign Up",
      url: "https://app.trykidgenius.com/account/new",
    },
    {
      label: "Parents Sign Up",
      url: "https://parents.trykidgenius.com/parent/new",
    },
  ];

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
    window.location.href = "https://kidgenius.daycareiq.com/session/new";
  }

  function signUp() {
    window.location.href =
      "https://kidgenius.daycareiq.com/account/new?from=kidgenius_home_page_button";
  }

  return (
    <header
      className={`${
        isExpanded ? `` : `h-20`
      } font-brand shadow-sm lg:flex lg:justify-between lg:items-center lg:pr-3`}
    >
      <div className="flex h-20 items-center justify-between px-4 py-3 lg:p0">
        <div className="flex items-center">
          <Link to="/" className="text-3xl font-bold ml-2 font-title">
            <img src={logo} alt="KidGenius"></img>
          </Link>
        </div>
        <div className="sm:hidden flex">
          <span className="mr-2">
            <Dropdown title="Login" items={dropDownItemsLogin}></Dropdown>
          </span>
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
          isExpanded ? "block" : "hidden"
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
        <a
          href="/#faq"
          className="block font-semibold hover:bg-gray-300 rounded px-2 py-1 mt-1 lg:mt-0 lg:ml-2 lg:p0 lg:px-4 lg:pt-3"
        >
          FAQ
        </a>
        <span className="hidden lg:block ml-2">
          <Dropdown title="Login" items={dropDownItemsLogin}></Dropdown>
        </span>
        <span className="hidden sm:block ml-2">
          <Dropdown
            title="Sign Up"
            className=" bg-brand-primary text-white font-semibold"
            items={dropDownItemsSignUp}
          ></Dropdown>
        </span>
      </div>
    </header>
  );
}

Header.propTypes = {
  siteTitle: PropTypes.string,
};

Header.defaultProps = {
  siteTitle: ``,
};

export default Header;
