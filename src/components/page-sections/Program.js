import React from "react";
import config from "@/config";
import SectionHeading from "../SectionHeading";
import { TabsLayout } from "../TabsLayout";
import ProgramContent from "@/components/ProgramContent";

const Program = ({ items = null }) => {
  let contentTabs = items !== null ? items.data : [];

  const tabs = contentTabs.map((item, idx) => {
    let image = {
      alt: item.attributes.imageThumbnails.alt,
      src: `${config.api}${item.attributes.imageThumbnails ? item.attributes.imageThumbnails.thumbnail.data.attributes.url : "#"}`,
      className: "",
    };

    return {
      title: item.attributes.tag,
      value: item.attributes.tag,
      content: (
        <ProgramContent
          logo={item.attributes.logo}
          summary={item.attributes.summary}
          tujuan={item.attributes.tujuan}
          pencapaian={item.attributes.pencapaian}
          images={image}
          slug={item.attributes.slug}
        />
      ),
    };
  });

  return (
    <section
      id="program"
      className="container bg-[url(/triangle-top-right.svg)] text-center"
      style={{
        backgroundRepeat: "no-repeat",
        backgroundPosition: "top right",
      }}
    >
      <SectionHeading className="my-8">
        <span className="sm:text-systemRed font-bold text-primaryBlueColor">
          JAYA
        </span>
        be
        <span className="sm:text-systemRed font-bold text-primaryBlueColor">
          RA
        </span>
        ni
        <span className="sm:text-systemRed font-bold text-primaryBlueColor">
          MA
        </span>
        ju Program
      </SectionHeading>
      <TabsLayout itemTabs={tabs} />
    </section>
  );
};

export default Program;
