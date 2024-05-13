import Image from "next/image";
import React from "react";

const Footer = () => {
  // bg-[url(/footer-shape.svg)]
  // bg-[url(/triangle-blue-left-shape.svg)]

  return (
    <footer className="max-[628px]:footer">
      <div
        className="z-[50] flex items-baseline justify-between gap-2 bg-[#2B398D] bg-bottom px-5 pb-5 text-xs sm:bg-transparent sm:bg-[url(/footer-shape.svg)] sm:bg-center sm:px-10 lg:min-h-[24rem]"
        style={{
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          position: "relative",
        }}
      >
        <div className="pt-[0.625rem] sm:mt-[30rem]">
          <p>jayaberanimaju.com &copy;2024. Supported by Metatech</p>
        </div>
        <div className="pt-[0.625rem] lg:mt-[30rem]">
          <p>rama@jayaberanimaju.com </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
