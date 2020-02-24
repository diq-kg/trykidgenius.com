import React from 'react';

function Checkmark() {
  return (
    <svg className="w-5 h-5 fill-current" xmlns="http://www.w3.org/2000/svg">
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M10 0C4.48 0 0 4.48 0 10s4.48 10 10 10 10-4.48 10-10S15.52 0 10 0zM8 15l-5-4.799 1.41-1.353L8 12.284 15.59 5 17 6.363 8 15z"
      />
    </svg>
  );
}

export default Checkmark;
