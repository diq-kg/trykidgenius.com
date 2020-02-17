import React from 'react';

function Hero() {
  return (
    <div className="flex font-brand pt-8 pb-8 lg:h-hero">
      <div>
        <div>
          <h1 className="text-5xl leading-tight font-brand-bold pb-4">
            Manage and grow your daycare.
          </h1>
          <p className="text-lg pt-2 pb-4">
            KidGenius is a platform designed for daycares to track,
            <br className="hidden sm:block" />
            <span> </span>
            plan, report, and communicate — all in one place.
          </p>
          <div className="">
            <button className="w-32 h-12 mr-4 rounded bg-brand-primary">
              Get started
            </button>
            <button className="w-32 h-12 rounded border-2">Request demo</button>
          </div>
        </div>
      </div>
      <div className="hidden lg:block">
        <p>All my friends</p>
      </div>
    </div>
  );
}

export default Hero;
