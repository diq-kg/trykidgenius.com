import React from 'react';
import Checkmark from './feature-icons/checkmark';

function Pricing() {
  return (
    <div className="flex flex-col justify-center items-center">
      <h2 className="text-3xl text-center font-extrabold">
        One simple pricing plan, no surprises
      </h2>
      <p className="pt-4 pb-10">
        Have questions?{' '}
        <a href="#" className="font-bold text-brand-primary">
          Let's chat
        </a>
      </p>
      <div className="flex flex-col justify-start items-center text-center mx-1 my-4 p-5 bg-brand-secondary sm:w-pricecard">
        <div className="flex justify-start items-baseline">
          <span className="text-6xl">$1</span>
          <p>/month per child</p>
        </div>
        <p>Everything you need to manage and grow your daycare.</p>
        <p className="p-2">Start free for 30 days!</p>
        <hr className="h-1 w-full mt-5 mb-4" />
        <div className="flex flex-col">
          <div className="flex py-2">
            <span className="text-brand-primary mr-2">
              <Checkmark />
            </span>
            <p className="font-bold">Child and staff attendance features</p>
          </div>
          <div className="flex py-2">
            <span className="text-brand-primary mr-2">
              <Checkmark />
            </span>
            <p className="font-bold">Unlimited staff accounts</p>
          </div>
          <div className="flex py-2">
            <span className="text-brand-primary mr-2">
              <Checkmark />
            </span>
            <p className="font-bold">Unlimited event history</p>
          </div>
          <div className="flex py-2">
            <span className="text-brand-primary mr-2">
              <Checkmark />
            </span>
            <p className="font-bold">Monthly staff attandance reports</p>
          </div>
          <div className="flex py-2">
            <span className="text-brand-primary mr-2">
              <Checkmark />
            </span>
            <p className="font-bold">Monthly child attandance reports</p>
          </div>
        </div>
        <button className="w-full h-12 mt-6 rounded text-white bg-brand-primary">
          Start free trail
        </button>
        <p className="text-gray-brand-light text-sm pt-5">
          No credit card required!
        </p>
      </div>
    </div>
  );
}

export default Pricing;
