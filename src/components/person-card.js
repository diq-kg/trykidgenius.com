import React from 'react';

function PersonCard(props) {
  return (
    <div className="flex items-center text-left">
      { props.image }
      <div>
        <p>{props.name}</p>
        <p className="text-gray-brand-light">{props.title}</p>
      </div>
    </div>
  );
}


export default PersonCard;
