import React from 'react';

function Quotes() {
  return (
    <div className="flex flex-col justify-start items-center">
      <h2 className="text-4xl font-brand-bold text-center">
        Loved by both staff and parents
      </h2>
      <div className="flex flex-col lg:flex-row mt-10 justify-center text-center">
        <div className="flex flex-col mb-8 lg:mb-0 lg:mx-4 justify-between items-start w-quotex h-quotey px-2 pt-4 pb-10 shadow-lg rounded-md">
          <p className="text-left text-lg">
            "It is an excellent way to keep in communication with the teachers
            and caregivers. I can receive daily reports of my child's school
            activities through a single channel"
          </p>
          <button>hi</button>
        </div>
        <div className="flex flex-col mb-8 lg:mb-0 lg:mx-4 justify-between items-start w-quotex h-quotey px-2 pt-4 pb-10 shadow-lg rounded-md">
          <p className="text-left text-lg">
            "It is an excellent way to keep in communication with the teachers
            and caregivers. I can receive daily reports of my child's school
            activities through a single channel"
          </p>
          <button>hi</button>
        </div>
        <div className="flex flex-col lg:mx-4 justify-between items-start w-quotex h-quotey px-2 pt-4 pb-10 shadow-lg rounded-md">
          <p className="text-left text-lg">
            "It is an excellent way to keep in communication with the teachers
            and caregivers. I can receive daily reports of my child's school
            activities through a single channel"
          </p>
          <button>hi</button>
        </div>
      </div>
    </div>
  );
}

export default Quotes;
