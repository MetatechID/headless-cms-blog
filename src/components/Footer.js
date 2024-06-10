import {
  IconBrandInstagram,
  IconBrandYoutubeFilled,
} from "@tabler/icons-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    // className="max-[628px]:footer"
    <footer>
      <div
        className="z-[50] flex flex-col items-baseline gap-2 bg-[#2B398D] bg-bottom px-5 pb-5 text-xs sm:flex-row sm:bg-transparent sm:bg-[url(/footer-shape.svg)] sm:bg-center sm:px-10 lg:min-h-[24rem]"
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
          className="order-first flex flex-auto flex-col items-center justify-center self-center sm:order-none sm:mt-20"
        >
          <div className="w-[40%] sm:w-[16.6875rem]">
            <Image src="/logo.svg" width={287} height={161} alt="logo" />
          </div>
          <div className="flex items-center gap-3">
            <p className="text-systemGrey">ikuti kami : </p>
            <Link href="#">
              <IconBrandInstagram color="black" />
            </Link>
            <Link href="#">
              <IconBrandYoutubeFilled color="#D81D09" />
            </Link>
            <Link href="#">
              <button className="flex flex-row items-center justify-center gap-3 rounded-lg bg-white px-4 py-2 text-sm font-normal text-black transition duration-200 hover:shadow-xl focus:ring-2 focus:ring-blue-400">
                <img src="/wa.svg" />
                Support Rama
              </button>
            </Link>
          </div>
          {/* <p className="text-sm text-greyDark">
            Kritik & saran bisa hubungi nomer ini
          </p> */}
        </div>
        <div className="flex-1 pt-[0.625rem] text-right lg:mt-[30rem]">
          <p>rama@jayaberanimaju.com </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
