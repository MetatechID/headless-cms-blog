"use client";
import React from "react";
import ImageLayout from "@/components/ImageLayout";
import Link from "next/link";

const ProgramContent = ({
  logo,
  summary,
  tujuan,
  pencapaian,
  images,
  slug,
}) => {
  return (
    //
    <div className="shadow-black-500/50 relative m-4 flex flex-wrap gap-4 rounded-2xl bg-systemBackground p-6 text-left text-sm font-normal leading-6 text-[#000] shadow-lg sm:m-0 sm:h-full sm:w-full sm:flex-row sm:gap-0 sm:overflow-hidden md:text-sm">
      <div className="flex-0 relative flex flex-row flex-wrap gap-3 break-words text-left font-normal leading-6 sm:w-64 sm:max-w-[16rem] sm:flex-col">
        {/* <div>
          <h5>Logo</h5>
          {logo}
        </div> */}
        <div>
          <h5 className="font-bold">Descripsi Program</h5>
          <p>{summary}</p>
        </div>
        <div>
          <h5 className="font-bold">Tujuan</h5>
          {tujuan}
        </div>
        <div>
          <h5 className="font-bold">Indikator Keberhasilan</h5>
          {pencapaian}
        </div>
      </div>
      <div className="w-64 flex-auto">
        <ImageLayout cards={images} />
        <div className="mb-4 flex justify-end">
          <Link href={`/${slug}`}>
            <button className=" rounded-full bg-primaryBlueColor px-8 py-2 text-sm font-normal text-white transition duration-200 hover:shadow-xl focus:ring-2 focus:ring-blue-400">
              Lihat Selengkapnya
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProgramContent;
