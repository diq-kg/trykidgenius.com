import React from 'react';

import TeacherIllustration from './teacherIllustration';

function Blob(props) {
  return (
    <svg
      className={`${props.customStyles}`}
      width="467"
      height="438"
      viewBox="0 0 467 438"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M277.352 436.954C154.094 424.421 52.0726 334.113 7.36981 219C-37.3329 103.887 130.974 5.8284 252.198 0.210408C373.421 -5.40758 467 102.297 467 224.974C467 347.651 400.611 449.487 277.352 436.954Z"
        fill="#EEFBF6"
      />
    </svg>
  );
}

function Hero() {
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
              <button className="w-40 h-12 mr-4 rounded bg-brand-primary">
                Get Started
              </button>
              <button className="w-40 h-12 rounded border-2">
                Request Demo
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
