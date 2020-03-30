import React from 'react';
import { Link } from 'gatsby';

import FB from './feature-icons/fb';
import Twitter from './feature-icons/twitter';

export default function Footer() {
  return (
    <div className="flex justify-between items-center items-start p-2">
      <div className="flex flex-col lg:flex-row lg:items-baseline">
        <span className="font-title">KidGenius</span>
        <Link
          to="/aboutus"
          className="pt-4 pb-2 lg:p-0 lg:pl-12 lg:pr-4 font-semibold"
        >
          About Us
        </Link>
        <Link to="/privacy" className="pt-2 pb-2 lg:p-0 lg:px-6 font-semibold">
          Privacy Policy
        </Link>
        <Link to="/terms" className="pt-2 pb-2 lg:p-0 lg:px-6 font-semibold">
          Terms of Service
        </Link>
      </div>
      <div className="flex">
        <a href="https://www.facebook.com/daycareiq/" className="px-2">
          <FB />
        </a>
        <a href="https://twitter.com/Daycareiq" className="px-2">
          <Twitter />
        </a>
      </div>
    </div>
  );
}
