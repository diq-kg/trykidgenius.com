import React from 'react';

import TeacherIllustration from './teacherIllustration';
import { register, demo } from './urls';

function Hero() {
  function getStarted() {
    window.location.href = register;
  }

  function tryDemo() {
    window.location.href = demo;
  }

  return (
    <div className="flex justify-center items-center w-auto">
      <div className="flex font-brand lg:h-hero lg:justify-between lg:items-center lg:w-5/6">
        <div>
          <div className="relative">
            <h1 className="text-5xl leading-tight font-brand-bold pb-4">
              Manage and grow
              <br className="hidden sm:block" /> your daycare
            </h1>
            <p className="text-lg pt-2 pb-4">
              KidGenius is a platform designed for daycares to track,
              <br className="hidden sm:block" /> plan, report, and communicate —
              all in one place.
            </p>
            <div className="">
              <button
                onClick={getStarted}
                className="w-40 h-12 mr-4 text-white font-bold rounded bg-brand-primary transition duration-150 ease-in-out hover:shadow-md"
              >
               Start free trial
              </button>
              <button
                onClick={tryDemo}
                className="w-40 h-12 rounded border-2 transition duration-150 ease-in-out hover:shadow-md"
              >
                Try demo account
              </button>
            </div>
          </div>
        </div>
        <div className="hidden lg:block">
          <TeacherIllustration></TeacherIllustration>
        </div>
      </div>
    </div>
  );
}

export default Hero;
