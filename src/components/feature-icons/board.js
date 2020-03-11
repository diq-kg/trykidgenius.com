import React from 'react';

function Board() {
  return (
    <svg
      width="22"
      height="18"
      className="fill-current"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M19.735.265H2.265A2.18 2.18 0 00.093 2.45L.082 15.551a2.19 2.19 0 002.183 2.184h17.47a2.19 2.19 0 002.183-2.184V2.449A2.19 2.19 0 0019.735.265zm-5.46 15.286H2.265v-4.367h12.01v4.367zm0-5.46H2.265V5.726h12.01v4.367zm5.46 5.46h-4.368V5.725h4.367v9.826z" />
    </svg>
  );
}

export default Board;
