import React, { useState } from 'react';

export default function CaptureInfoModal(props) {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [daycare, setDaycare] = useState('');

  function validateEmail(email) {
    const re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
  }

  function validated() {
    return (
      email.trim() && validateEmail(email) && name.trim() && daycare.trim()
    );
  }

  return (
    <div className="fixed bottom-0 inset-x-0 px-4 pb-6 sm:inset-0 sm:p-0 sm:flex sm:items-center sm:justify-center">
      <div className="fixed inset-0 transition-opacity" onClick={props.close}>
        <div className="absolute inset-0 bg-gray-500 opacity-75"></div>
      </div>
      <div
        className="bg-white rounded-lg px-4 pt-5 pb-4 overflow-hidden shadow-xl transform transition-all sm:p-6"
        role="dialog"
        aria-modal="true"
        aria-labelledby="modal-headline"
      >
        <div>
          <div className="mt-3 text-center sm:mt-5">
            <h3
              className="text-lg leading-6 text-gray-900"
              id="modal-headline"
            >
              Try Kidgenius with sample daycare setup
            </h3>
            <h4 className="pt-5"></h4>
            <div className="mt-2 flex flex-col text-gray-900">
              <div className="mt-6">
                <label htmlFor="name" className="sr-only">
                  Name (required)
                </label>
                <div className="relative rounded-md shadow-sm border-2 border-gray-400">
                  <input
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    id="name"
                    autocomplete={"off"}
                    className="form-input block w-full sm:text-sm leading-8 p-2 text-gray-700 rounded-md"
                    placeholder="Full name (required)"
                  />
                </div>
              </div>
              <div className="mt-8">
                <label htmlFor="email" className="sr-only">
                  Email (required)
                </label>
                <div className="relative rounded-md shadow-sm border-2 border-gray-400">
                  <input
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    id="email"
                    autocomplete={"off"}
                    className="form-input block w-full sm:text-sm leading-8 p-2 text-gray-700 rounded-md "
                    placeholder="Email (required)"
                  />
                </div>
              </div>
              <div className="mt-8">
                <label htmlFor="daycare" className="sr-only">
                  Daycare name (required)
                </label>
                <div className="relative rounded-md shadow-sm border-2 border-gray-400">
                  <input
                    id="daycare"
                    value={daycare}
                    onChange={(e) => {
                      setDaycare(e.target.value);
                    }}
                    autocomplete={"off"}
                    className="form-input block w-full sm:text-sm  leading-8 p-2 text-gray-700 rounded-md "
                    placeholder="Daycare (required)"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-5 sm:mt-6">
          <span className="flex w-full rounded-md shadow-sm">
            <button
              onClick={() =>
                props.confirm({
                  name,
                  email,
                  daycare,
                })
              }
              disabled={!validated()}
              type="button"
              className={`mt-6 inline-flex justify-center w-full rounded-md border border-transparent px-4 py-4 text-base leading-6 font-medium text-white shadow-sm transition ease-in-out duration-150 sm:text-sm sm:leading-5 ${
                validated() ? 'bg-brand-primary' : 'bg-gray-400'
              }`}
            >
              Access live demo
            </button>
          </span>
        </div>
      </div>
    </div>
  );
}
