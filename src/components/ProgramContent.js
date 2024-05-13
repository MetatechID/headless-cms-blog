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
    <div className="bg-systemBackground shadow-black-500/50 relative flex rounded-2xl p-10 text-sm font-bold text-[#000] shadow-lg sm:h-full sm:w-full sm:overflow-hidden md:text-sm">
      <div className="flex max-w-[10rem] flex-1 flex-col gap-10 break-words text-left font-normal leading-6 sm:w-64 sm:max-w-[16rem]">
        <div>
          <h5>Logo</h5>
          {logo}
        </div>
        <div>
          <h5>Descripsi Program</h5>
          <p>{summary}</p>
        </div>
        <div>
          <h5>Tujuan</h5>
          {tujuan}
        </div>
        <div>
          <h5>Pencapaian</h5>
          {pencapaian}
        </div>
      </div>
      <div className="w-64 flex-auto">
        <ImageLayout cards={images} />
        <div className="mb-4 flex justify-end">
          <Link href={`/${slug}`}>
            <button className=" bg-primaryBlueColor rounded-full px-8 py-2 text-sm font-normal text-white transition duration-200 hover:shadow-xl focus:ring-2 focus:ring-blue-400">
              Lihat Selengkapnya
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProgramContent;
