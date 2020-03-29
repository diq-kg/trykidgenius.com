import React from 'react';

function PersonCard(props) {
  return (
    <div className="flex items-center text-left">
      <img
        className="inline-block mr-4 h-12 w-12 rounded-full"
        src={props.image}
        alt=""
      />
      <div>
        <p>{props.name}</p>
        <p className="text-gray-brand-light">{props.title}</p>
      </div>
    </div>
  );
}

export default PersonCard;
