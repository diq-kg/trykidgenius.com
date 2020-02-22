import React from 'react';
import FeatureCard from './feature-card';
import Checklist from './feature-icons/checklist';

function Features() {
  const features = [
    {
      title: 'Attendance',
      desc:
        'Track attendance and generate monthly reports in one go - available for both kids and staff.',
      icon: <Checklist />
    }
  ];

  return (
    <div className="flex border-2 justify-center items-center flex-wrap">
      <h2 className="text-3xl text-center font-extrabold mb-4">
        Everything you need to manage in one place
      </h2>
      <FeatureCard />
    </div>
  );
}

export default Features;
