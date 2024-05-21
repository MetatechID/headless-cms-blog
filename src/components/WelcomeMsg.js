"use client";
import Image from "next/image";
import { redirect } from "next/navigation";
import React, { useEffect, useState } from "react";

const WelcomeMsg = () => {
  const [show, setShow] = useState(true);

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
      className={`${show ? "visible" : "hidden"} fixed left-0 right-0 top-0 z-[999] flex h-[calc(100%-1rem)] max-h-full w-full items-center justify-center overflow-y-auto overscroll-contain bg-slate-500/35 sm:inset-0`}
    >
      <div className="relative m-4 max-h-full w-full max-w-2xl p-4">
        <button
          type="button"
          className="mb-1 ms-auto flex h-8 w-8 items-center justify-center rounded-full bg-white object-right text-sm text-black hover:bg-gray-200 hover:text-gray-900 dark:hover:bg-gray-600 dark:hover:text-white"
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
        <div className="relative rounded-lg bg-primaryBlueColor/80 bg-[url(/bg-modal.jpg)] bg-cover bg-center bg-blend-soft-light shadow">
          <div className="flex items-center justify-between rounded-t p-4 dark:border-gray-600 md:p-5">
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
              Welcome Sahabat Rama
            </h3>
            <Image
              src="/logo-warna.png"
              width={222}
              height={93}
              style={{ objectFit: "contain" }}
              alt="rama logo with color"
            />
          </div>
          {/* Modal body */}
          <div className="flex flex-col gap-4 space-y-4 p-4 sm:flex-row md:p-5">
            <div className="basis-3/5">
              <p className="text-base leading-relaxed text-systemGrey">
                As a young entrepreneur driven by a passion for empowerment, I
                founded company with a clear mission: to cultivate a culture of
                excellence, innovation, and inclusivity. My leadership
                philosophy is anchored in empathy, integrity, and vision, aiming
                to inspire and mentor others to reach their full potential.
                Berani Maju dengan nurani - untuk diri sendiri, bisnis,
                komunitas ,dan bangsa Indonesia - bersama HIPMI Jaya
              </p>
            </div>
            <div className="flex basis-2/5 flex-wrap content-between">
              {/* <div className="flex w-full flex-col gap-12"> */}
              <Image src="/sign.png" width={500} height={500} alt="rama-sign" />
              <div>
                <p className="text-lg font-bold">
                  SUPPORT & PARTICIPATION FORM
                </p>
                <button
                  type="button"
                  onClick={(e) => {
                    // e.preventDefault();
                    window.open("http://bit.ly/jayaberanimaju", "_blank");
                  }}
                  className="flex flex-row rounded-md bg-white p-1 text-center text-base text-black"
                >
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M19 3H14.82C14.4 1.84 13.3 1 12 1C10.7 1 9.6 1.84 9.18 3H5C3.9 3 3 3.9 3 5V19C3 20.1 3.9 21 5 21H19C20.1 21 21 20.1 21 19V5C21 3.9 20.1 3 19 3ZM12 3C12.55 3 13 3.45 13 4C13 4.55 12.55 5 12 5C11.45 5 11 4.55 11 4C11 3.45 11.45 3 12 3ZM10 17L6 13L7.41 11.59L10 14.17L16.59 7.58L18 9L10 17Z"
                      fill="#2B398D"
                    />
                  </svg>
                  <span>KLIK #JAYABERANIMAJU</span>
                </button>
              </div>
              {/* </div> */}
            </div>
          </div>
          {/* Modal footer */}
          <div className="flex items-center rounded-b border-t border-gray-200 p-4 dark:border-gray-600 md:p-5">
            <Image
              src={"/modal-footer.png"}
              width={1000}
              height={500}
              style={{ objectFit: "cover" }}
              alt="berani maju footer"
            />
            {/* <button
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
            </button> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default WelcomeMsg;
