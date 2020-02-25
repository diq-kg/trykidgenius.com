import React from 'react';

function PersonCard(props) {
  return (
    <div className="flex items-center text-left">
      <img
        className="w-10 h-10 mr-4 rounded-full"
        src={props.image}
        alt="this"
      />
      <div>
        <p>{props.name}</p>
        <p className="text-gray-brand-light">{props.title}</p>
      </div>
    </div>
  );
}

export default PersonCard;
