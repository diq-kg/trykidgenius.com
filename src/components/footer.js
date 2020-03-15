import React from 'react';
import { Link } from 'gatsby';

import FB from './feature-icons/fb';
import Twitter from './feature-icons/twitter';
import LinkedIn from './feature-icons/linkedin';

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
        <Link to="#" className="px-2">
          <FB />
        </Link>
        <Link to="#" className="px-2">
          <Twitter />
        </Link>
        <Link to="#" className="px-2">
          <LinkedIn />
        </Link>
      </div>
    </div>
  );
}
