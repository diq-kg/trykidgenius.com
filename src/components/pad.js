import React from 'react';

function Pad(props) {
  return (
    <div
      className={`pt-8 pb-8 ${props.customStyles ? props.customStyles : ''}`}
    >
      {props.children}
    </div>
  );
}

export default Pad;
