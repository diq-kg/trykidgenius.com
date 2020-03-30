import React, { useState } from 'react';

export default function Faq(props) {
  const [openPanel, setPanel] = useState(null);

  const toggle = panel => {
    if (openPanel === panel) {
      setPanel(null);
    } else {
      setPanel(panel);
    }
  };

  return (
    <div id={props.id} className="bg-gray-50" x-data="{ openPanel: 1 }">
      <div className="max-w-screen-xl mx-auto py-12 px-4 sm:py-16 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-center text-heading leading-9 font-brand-bold sm:leading-10">
            Frequently asked questions
          </h2>
          <div className="mt-6 border-t-2 border-gray-200 pt-6">
            <dl>
              <div>
                <dt className="text-lg leading-7">
                  <button
                    onClick={() => toggle(0)}
                    className="text-left w-full flex justify-between items-start text-gray-400 focus:outline-none focus:text-gray-900"
                  >
                    <span className="font-medium text-gray-900">
                      What is KidGenius?
                    </span>
                    <span className="ml-6 h-7 flex items-center">
                      <svg
                        className={`h-6 w-6 transform ${
                          openPanel === 0 ? '-rotate-180' : ''
                        }`}
                        stroke="currentColor"
                        fill="none"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M19 9l-7 7-7-7"
                        />
                      </svg>
                    </span>
                  </button>
                </dt>
                <dd className={`mt-2 pr-12 ${openPanel === 0 ? '' : 'hidden'}`}>
                  <p className="text-base leading-6 text-gray-500">
                    KidGenius is a web app designed to help connect child care
                    providers and parents. Child care operators can keep track
                    of things like naps, activities, meals and more. Staff can
                    record notes and make requests of parents. They can even
                    take photos and share them instantly with parents.
                  </p>
                </dd>
              </div>
              <div className="mt-6 border-t border-gray-200 pt-6">
                <div>
                  <dt className="text-lg leading-7">
                    <button
                      onClick={() => toggle(1)}
                      className="text-left w-full flex justify-between items-start text-gray-400 focus:outline-none focus:text-gray-900"
                    >
                      <span className="font-medium text-gray-900">
                        Do I need to use every feature?
                      </span>
                      <span className="ml-6 h-7 flex items-center">
                        <svg
                          className={`h-6 w-6 transform ${
                            openPanel === 1 ? '-rotate-180' : ''
                          }`}
                          stroke="currentColor"
                          fill="none"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M19 9l-7 7-7-7"
                          />
                        </svg>
                      </span>
                    </button>
                  </dt>
                  <dd
                    className={`mt-2 pr-12 ${openPanel === 1 ? '' : 'hidden'}`}
                  >
                    <p className="text-base leading-6 text-gray-500">
                      No, centres and staff can choose what they would like to
                      use from the list of KidGenius features. For example, if
                      you don't want to use KidGenius to keep track of meals,
                      you don't need to. It's totally up to you!
                    </p>
                  </dd>
                </div>
              </div>
              <div className="mt-6 border-t border-gray-200 pt-6">
                <div>
                  <dt className="text-lg leading-7">
                    <button
                      onClick={() => toggle(2)}
                      className="text-left w-full flex justify-between items-start text-gray-400 focus:outline-none focus:text-gray-900"
                    >
                      <span className="font-medium text-gray-900">
                        Can KidGenius keep track of attendance?
                      </span>
                      <span className="ml-6 h-7 flex items-center">
                        <svg
                          className={`h-6 w-6 transform ${
                            openPanel === 2 ? '-rotate-180' : ''
                          }`}
                          stroke="currentColor"
                          fill="none"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M19 9l-7 7-7-7"
                          />
                        </svg>
                      </span>
                    </button>
                  </dt>
                  <dd
                    className={`mt-2 pr-12 ${openPanel === 2 ? '' : 'hidden'}`}
                  >
                    <p className="text-base leading-6 text-gray-500">
                      Of course - our attendance feature is awesome. You can
                      sign kids in and out of the site or even programs. You can
                      also keep track of who dropped the kid off or who picked
                      them up. Staff can pull attendance reports at all time.
                    </p>
                  </dd>
                </div>
              </div>
              <div className="mt-6 border-t border-gray-200 pt-6">
                <div>
                  <dt className="text-lg leading-7">
                    <button
                      onClick={() => toggle(3)}
                      className="text-left w-full flex justify-between items-start text-gray-400 focus:outline-none focus:text-gray-900"
                    >
                      <span className="font-medium text-gray-900">
                        I'm not super technical, can I still use KidGenius?
                      </span>
                      <span className="ml-6 h-7 flex items-center">
                        <svg
                          className={`h-6 w-6 transform ${
                            openPanel === 3 ? '-rotate-180' : ''
                          }`}
                          stroke="currentColor"
                          fill="none"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M19 9l-7 7-7-7"
                          />
                        </svg>
                      </span>
                    </button>
                  </dt>
                  <dd
                    className={`mt-2 pr-12 ${openPanel === 3 ? '' : 'hidden'}`}
                  >
                    <p className="text-base leading-6 text-gray-500">
                      Of course - we made the site with everyone in mind. We
                      made it easy to use but just in case we publish How-To
                      videos on our YouTube channel.
                    </p>
                  </dd>
                </div>
              </div>
              <div className="mt-6 border-t border-gray-200 pt-6">
                <div>
                  <dt className="text-lg leading-7">
                    <button
                      onClick={() => toggle(4)}
                      className="text-left w-full flex justify-between items-start text-gray-400 focus:outline-none focus:text-gray-900"
                    >
                      <span className="font-medium text-gray-900">
                        Do I need to sign up for a whole year?
                      </span>
                      <span className="ml-6 h-7 flex items-center">
                        <svg
                          className={`h-6 w-6 transform ${
                            openPanel === 4 ? '-rotate-180' : ''
                          }`}
                          stroke="currentColor"
                          fill="none"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M19 9l-7 7-7-7"
                          />
                        </svg>
                      </span>
                    </button>
                  </dt>
                  <dd
                    className={`mt-2 pr-12 ${openPanel === 4 ? '' : 'hidden'}`}
                  >
                    <p className="text-base leading-6 text-gray-500">
                      No. We hate having to sign contracts for software. So we
                      didn't make that a part of KidGenius. You can cancel at
                      anytime, we just ask for 30 days notice.
                    </p>
                  </dd>
                </div>
              </div>
              <div className="mt-6 border-t border-gray-200 pt-6">
                <div>
                  <dt className="text-lg leading-7">
                    <button
                      onClick={() => toggle(5)}
                      className="text-left w-full flex justify-between items-start text-gray-400 focus:outline-none focus:text-gray-900"
                    >
                      <span className="font-medium text-gray-900">
                        Can I get my data?
                      </span>
                      <span className="ml-6 h-7 flex items-center">
                        <svg
                          className={`h-6 w-6 transform ${
                            openPanel === 5 ? '-rotate-180' : ''
                          }`}
                          stroke="currentColor"
                          fill="none"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M19 9l-7 7-7-7"
                          />
                        </svg>
                      </span>
                    </button>
                  </dt>
                  <dd
                    className={`mt-2 pr-12 ${openPanel === 5 ? '' : 'hidden'}`}
                  >
                    <p className="text-base leading-6 text-gray-500">
                      Certainly, you can use the export buttons found throughout
                      the app to download the data. You can also email us and we
                      can help you out.
                    </p>
                  </dd>
                </div>
              </div>
            </dl>
          </div>
        </div>
      </div>
    </div>
  );
}
