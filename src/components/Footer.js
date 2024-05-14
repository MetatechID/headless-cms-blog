import Image from "next/image";
import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    // className="max-[628px]:footer"
    <footer>
      <div
        className="z-[50] flex flex-row items-baseline gap-2 bg-[#2B398D] bg-bottom px-5 pb-5 text-xs sm:bg-transparent sm:bg-[url(/footer-shape.svg)] sm:bg-center sm:px-10 lg:min-h-[24rem]"
        style={{
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          position: "relative",
        }}
      >
        <div className="flex-1 pt-[0.625rem] sm:mt-[30rem]">
          <p>jayaberanimaju.com &copy;2024. Supported by Metatech</p>
        </div>
        <div
          id="middlediv"
          className="flex flex-auto flex-col items-center justify-center self-center sm:mt-20"
        >
          <div className="w-[40%] sm:w-[16.6875rem]">
            <Image src="/logo.svg" width={287} height={161} />
          </div>
          <Link href={"#"}>
            <button className=" bg-primaryBlueColor w-39 flex flex-row items-center justify-center gap-3 rounded-lg px-8 py-2 text-sm font-normal text-white transition duration-200 hover:shadow-xl focus:ring-2 focus:ring-blue-400">
              <img src="/wa.svg" />
              Sahabat Rama
            </button>
          </Link>
          <p className="text-greyDark text-sm">
            Kritik & saran bisa hubungi nomer ini
          </p>
        </div>
        <div className="flex-1 pt-[0.625rem] text-right lg:mt-[30rem]">
          <p>rama@jayaberanimaju.com </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
