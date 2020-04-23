import React, { useState } from 'react';

function DropDownLink(label, url) {
  return (
    <a
      href={url}
      className="block px-4 py-4 leading-5 hover:bg-gray-100 hover:text-gray-900 focus:outline-none focus:bg-gray-100 focus:text-gray-900"
    >
      {label}
    </a>
  );
}

function DropDown(props) {
  const [open, toggle] = useState(false);

  return (
    <div className="relative inline-block text-left z-40">
      <div>
        <span className="rounded-md shadow-sm">
          <button
            type="button"
            className="inline-flex justify-center rounded-md border-2 px-2 w-32 h-12 font-semibold bg-white hover:bg-gray-200 active:bg-gray-50 transition ease-in-out duration-150"
            onClick={() => toggle(!open)}
          >
            Login
            <svg
              className="-mr-1 ml-2 h-5 w-5"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path
                fill-rule="evenodd"
                d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                clip-rule="evenodd"
              />
            </svg>
          </button>
        </span>
      </div>

      <div
        className={`${
          open
            ? 'origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg'
            : 'hidden'
        }`}
      >
        <div className="rounded-md bg-white shadow-xs">
          <div className="py-1">
            {props.items.map((item) => DropDownLink(item.label, item.url))}
            {/* <form method="POST" action="#">
              <button
                type="submit"
                className="block w-full text-left px-4 py-2 text-sm leading-5 text-gray-700 hover:bg-gray-100 hover:text-gray-900 focus:outline-none focus:bg-gray-100 focus:text-gray-900"
              >
                Sign out
              </button>
            </form> */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default DropDown;
