import React from 'react';

import Checklist from './feature-icons/checklist';

function FeatureCard(props) {
  return (
    <div className="border-2">
      <div className="w-16 h-16 text-brand-primary bg-brand-secondary flex justify-center items-center rounded-full inline-block">
        <Checklist />
      </div>
      <h3 className="text-xl font-bold">Atttendance Tracking</h3>
      <p>Track attendance etc..</p>
    </div>
  );
}

export default FeatureCard;
