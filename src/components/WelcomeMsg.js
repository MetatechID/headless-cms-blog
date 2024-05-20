"use client";
import { redirect } from "next/navigation";
import React, { useEffect, useState } from "react";

const WelcomeMsg = () => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const showModal = setTimeout(() => {
      setShow(true);
    }, 1000);

    return () => clearTimeout(showModal);
  }, []);

  return (
    <div
      id="default-modal"
      tabIndex="-1"
      aria-hidden="true"
      className={`${show ? "visible" : "hidden"} fixed  left-0 right-0 top-0 z-50 flex h-[calc(100%-1rem)] max-h-full w-full items-center justify-center overflow-y-auto overflow-x-hidden sm:inset-0`}
    >
      <div className="relative max-h-full w-full p-4 sm:max-w-2xl">
        <div className="relative rounded-lg bg-white shadow dark:bg-gray-700">
          <div className="flex items-center justify-between rounded-t border-b p-4 dark:border-gray-600 md:p-5">
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
              Welcome Sahabat Rama
            </h3>
            <button
              type="button"
              className="ms-auto inline-flex h-8 w-8 items-center justify-center rounded-lg bg-transparent text-sm text-gray-400 hover:bg-gray-200 hover:text-gray-900 dark:hover:bg-gray-600 dark:hover:text-white"
              data-modal-hide="default-modal"
              onClick={() => setShow(false)}
            >
              <svg
                className="h-3 w-3"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 14 14"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                />
              </svg>
              <span className="sr-only">Close modal</span>
            </button>
          </div>
          {/* Modal body */}
          <div className="space-y-4 p-4 md:p-5">
            <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
              Lorem ex mollit minim irure do reprehenderit velit ipsum et. Do
              cupidatat labore elit elit nulla magna quis veniam dolore nisi
              veniam sint pariatur excepteur. Velit minim Lorem adipisicing amet
              ullamco est consequat cillum commodo occaecat. Minim voluptate
              velit voluptate laborum sint excepteur non tempor laboris
              consectetur adipisicing.
            </p>
            <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
              Qui labore ut nulla officia do mollit adipisicing occaecat
              excepteur elit.
            </p>
          </div>
          {/* Modal footer */}
          <div className="flex items-center rounded-b border-t border-gray-200 p-4 dark:border-gray-600 md:p-5">
            <button
              onClick={() => {
                window.open("http://bit.ly/jayaberanimaju", "_blank");
                setShow(false);
              }}
              data-modal-hide="default-modal"
              type="button"
              className="rounded-lg bg-blue-700 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Register
            </button>
            <button
              onClick={() => setShow(false)}
              data-modal-hide="default-modal"
              type="button"
              className="ms-3 rounded-lg border border-gray-200 bg-white px-5 py-2.5 text-sm font-medium text-gray-900 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:outline-none focus:ring-4 focus:ring-gray-100 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white dark:focus:ring-gray-700"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
    // <div
    //   id="info-popup"
    //   tabindex="-1"
    //   className="h-modal visible fixed left-0 right-0 top-0 z-50 w-full overflow-y-auto overflow-x-hidden md:inset-0 md:h-full"
    // >
    //   <div className="relative h-full w-full max-w-lg p-4 md:h-auto">
    //     <div className="relative rounded-lg bg-white p-4 shadow dark:bg-gray-800 md:p-8">
    //       <div className="mb-4 text-sm font-light text-gray-500 dark:text-gray-400">
    //         <h3 className="mb-3 text-2xl font-bold text-gray-900 dark:text-white">
    //           Privacy info
    //         </h3>
    //         <p>
    //           The backup created with this export functionnality may contain
    //           some sensitive data. We suggest you to save this archive in a
    //           securised location.
    //         </p>
    //       </div>
    //       <div className="items-center justify-between space-y-4 pt-0 sm:flex sm:space-y-0">
    //         <a
    //           href="#"
    //           className="text-primary-600 dark:text-primary-500 font-medium hover:underline"
    //         >
    //           Learn more about privacy
    //         </a>
    //         <div className="items-center space-y-4 sm:flex sm:space-x-4 sm:space-y-0">
    //           <button
    //             id="close-modal"
    //             type="button"
    //             className="focus:ring-primary-300 w-full rounded-lg border border-gray-200 bg-white px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-900 focus:z-10 focus:outline-none focus:ring-4 dark:border-gray-500 dark:bg-gray-700 dark:text-gray-300 dark:hover:bg-gray-600 dark:hover:text-white dark:focus:ring-gray-600 sm:w-auto"
    //           >
    //             Cancel
    //           </button>
    //           <button
    //             id="confirm-button"
    //             type="button"
    //             className="bg-primary-700 hover:bg-primary-800 focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800 w-full rounded-lg px-4 py-2 text-center text-sm font-medium text-white focus:outline-none focus:ring-4 sm:w-auto"
    //           >
    //             Confirm
    //           </button>
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    // </div>
  );
};

export default WelcomeMsg;
