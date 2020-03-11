import React from 'react';

function FeatureCard(props) {
  return (
    <div className="w-64 h-56 sm:w-card inline-block">
      <div className="flex justify-center items-center sm:justify-start">
        <div className="w-16 h-16 text-brand-primary bg-brand-secondary flex justify-center items-center rounded-full inline-block">
          {props.icon}
        </div>
      </div>
      <h3 className="text-xl text-center sm:text-left font-bold pt-4 pb-2">
        {props.title}
      </h3>
      <p className="text-base text-gray-brand-light">{props.desc}</p>
    </div>
  );
}

export default FeatureCard;
