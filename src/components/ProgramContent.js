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
    // <div className="shadow-black-500/50 relative m-4 flex flex-wrap gap-4 rounded-2xl bg-systemBackground p-6 text-left text-sm font-normal leading-6 text-[#000] shadow-lg sm:m-0 sm:h-full sm:w-full sm:flex-row sm:gap-0 sm:overflow-hidden md:text-sm">
    <div className="shadow-black-500/50 relative flex flex-wrap gap-4 rounded-2xl bg-systemBackground p-4 text-left text-sm font-normal leading-6 text-[#000] shadow-lg">
      <div className="w-full flex-auto">
        <ImageLayout cards={images} />
      </div>
      <div className="flex flex-col flex-wrap sm:flex-row">
        <div className="mb-5 break-words sm:w-3/5">
          <h5 className="font-bold">Deskripsi Program</h5>
          <div dangerouslySetInnerHTML={{ __html: summary }}></div>
        </div>
        <div className="mb-5 break-words sm:w-2/5">
          <div>
            <h5 className="font-bold">Tujuan</h5>
            <div dangerouslySetInnerHTML={{ __html: tujuan }}></div>
          </div>
        </div>
        <div className="order-last mb-5 w-3/5 sm:order-none">
          <Link href={`/${slug}`}>
            <button className=" rounded-full bg-primaryBlueColor px-8 py-2 text-sm font-normal text-white transition duration-200 hover:shadow-xl focus:ring-2 focus:ring-blue-400">
              Lihat Selengkapnya
            </button>
          </Link>
        </div>
        <div className="mb-5 break-words sm:w-2/5">
          <h5 className="font-bold">Indikator Keberhasilan</h5>
          <div dangerouslySetInnerHTML={{ __html: pencapaian }}></div>
        </div>
      </div>
    </div>
  );
};

export default ProgramContent;
