import React from 'react';
import FeatureCard from './feature-card';

function Features() {
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
