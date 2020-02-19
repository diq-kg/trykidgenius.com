import React from 'react';

import Checklist from './feature-icons/checklist';

function FeatureCard(props) {
  return (
    <div className="w-64 h-64 border-2">
      <div className="flex justify-center items-center">
        <div className="w-16 h-16 text-brand-primary bg-brand-secondary flex justify-center items-center rounded-full inline-block">
          <Checklist />
        </div>
      </div>
      <h3 className="text-xl text-center font-bold pt-4 pb-2">
        Atttendance Tracking
      </h3>
      <p className="text-base text-gray-brand-light">
        Track attendance and generate monthly reports in one go - available for
        both kids and staff.
      </p>
    </div>
  );
}

export default FeatureCard;
