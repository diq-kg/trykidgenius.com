import React from 'react';

import FB from './feature-icons/fb';
import Twitter from './feature-icons/twitter';
import LinkedIn from './feature-icons/linkedin';

export default function Footer() {
  return (
    <div className="flex justify-between items-center items-start p-2">
      <div className="flex flex-col lg:flex-row lg:items-baseline">
        <span className="font-title">KidGenius</span>
        <a href="#" className="pt-4 pb-2 lg:p-0 lg:pl-12 lg:pr-4 font-semibold">
          About Us
        </a>
        <a href="#" className="pt-2 pb-2 lg:p-0 lg:px-6 font-semibold">
          Privacy Policy
        </a>
        <a href="#" className="pt-2 pb-2 lg:p-0 lg:px-6 font-semibold">
          Terms of Use
        </a>
      </div>
      <div className="flex">
        <a href="#" className="px-2">
          <FB />
        </a>
        <a href="#" className="px-2">
          <Twitter />
        </a>
        <a href="#" className="px-2">
          <LinkedIn />
        </a>
      </div>
    </div>
  );
}
