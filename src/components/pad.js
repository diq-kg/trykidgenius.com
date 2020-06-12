import React from 'react';

function Pad(props) {
  return (
    <div
      className={`pt-2 pb-10 ${props.customStyles ? props.customStyles : ''}`}
    >
      {props.children}
    </div>
  );
}

export default Pad;
