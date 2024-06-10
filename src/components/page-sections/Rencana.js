import React from "react";
import SectionHeading from "../SectionHeading";
import config from "@/config";
import Image from "next/image";

const Rencana = ({ items = null }) => {
  let contentLeft = items !== null ? items.data.attributes.leftContent : [];
  let contentRight = items !== null ? items.data.attributes.rightContent : [];
  let mediaContent = items !== null ? items.data.attributes.mediaContent : null;
  let planSummary = items !== null ? items.data.attributes.planSummary : "";

  return (
    <section
      id="rencana"
      className="container mx-5 scroll-mt-28 bg-[url('/rencana-bg.svg')] bg-local text-center leading-8 sm:mx-0 sm:min-h-[42.75rem]"
      style={{
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPositionY: "bottom",
      }}
    >
      <SectionHeading className="mt-5 !text-white">Visi & Misi</SectionHeading>
      <div className="mx-auto justify-center text-center text-systemGrey sm:max-w-[40rem]">
        <div className=" capitalize text-palleteGreyLight">Rencana Rama</div>

        <p className="text-base font-normal">{planSummary}</p>
      </div>
      <div className="flex flex-col items-center justify-center">
        <div className="flex w-full flex-col p-4 sm:flex-row">
          {contentLeft.length > 0 &&
            contentLeft.map((item, idx) => (
              <div
                key={`content-${idx}`}
                className="mx-5 flex flex-row py-5 text-left sm:w-1/3 sm:py-10"
              >
                <div className="mr-4 flex-shrink-0 sm:w-16">
                  <Image
                    width={63}
                    height={63}
                    src={`${config.api}${item.icon.data.attributes.url}`}
                    alt="icon"
                  />
                </div>
                <div>
                  <p className="text-systemGrey">{item.summary}</p>
                </div>
              </div>
            ))}
        </div>
        <div className="mb-10 flex h-auto items-center justify-center p-4 sm:w-[35rem]">
          <img
            src={`${config.api}${mediaContent?.data?.attributes.url}`}
            alt="Image"
            className="h-auto max-w-full"
          />
        </div>
      </div>
    </section>
  );
};

export default Rencana;
