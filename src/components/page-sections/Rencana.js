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
      className="container mx-5 mb-28 scroll-mt-28 bg-[url('/rencana-bg.svg')] bg-local text-center  leading-8 sm:mx-0 sm:mb-40 sm:min-h-[42.75rem]"
      style={{
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPositionY: "bottom",
      }}
    >
      <SectionHeading className="mt-5">
        <span className="text-secondaryBlue">Rencana</span>{" "}
        <span className="text-white">Rama</span>
      </SectionHeading>
      <div className="mx-auto justify-center text-center text-systemGrey sm:max-w-[40rem]">
        <div className="font-bold capitalize">Visi & Misi</div>

        <p className="text-base font-normal">{planSummary}</p>
      </div>
      <div className=" flex flex-col items-center justify-center sm:flex-row">
        <div className="flex-1 p-4 ">
          {contentLeft.length > 0 &&
            contentLeft.map((item, idx) => (
              <div
                key={`content-${idx}`}
                className="mx-5 flex flex-row py-10 text-left"
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

        <div className="order-first h-auto flex-none p-4 sm:order-none sm:w-[35rem]">
          <img
            src={`${config.api}${mediaContent?.data?.attributes.url}`}
            alt="Image"
            className="h-auto max-w-full"
          />
        </div>

        <div className=" flex-1 p-4">
          {contentRight.length > 0 &&
            contentRight.map((item, idx) => (
              <div
                key={`content-${idx}`}
                className="mx-5 flex flex-row py-10 text-left"
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
      </div>
    </section>
  );
};

export default Rencana;
