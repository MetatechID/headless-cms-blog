import React from "react";
import config from "@/config";
import SectionHeading from "../SectionHeading";
import { TabsLayout } from "../TabsLayout";
import ProgramContent from "@/components/ProgramContent";

const Program = ({ items = null }) => {
  let contentTabs = items !== null ? items.data : [];

  const tabs = contentTabs.map((item, idx) => {
    let images = item.attributes.imageThumbnails.map((image, idx) => {
      return {
        alt: image.alt,
        src: `${config.api}${image.thumbnail.data ? image.thumbnail.data.attributes.url : "#"}`,
        isFeatured: image.isFeatured,
        className: image.isFeatured ? "md:col-span-2" : "col-span-1",
      };
    });

    return {
      title: item.attributes.tag,
      value: item.attributes.tag,
      content: (
        <ProgramContent
          logo={item.attributes.logo}
          summary={item.attributes.summary}
          tujuan={item.attributes.tujuan}
          pencapaian={item.attributes.pencapaian}
          images={images}
          slug={item.attributes.slug}
        />
      ),
    };
  });

  return (
    <section
      id="program"
      className="container mb-28 bg-[url(/triangle-top-right.svg)] text-center sm:mb-40"
      style={{
        backgroundRepeat: "no-repeat",
        backgroundPosition: "top right",
      }}
    >
      <SectionHeading>
        <span className="text-primaryBlueColor">Rama</span> punya Program
      </SectionHeading>
      <TabsLayout itemTabs={tabs} />
    </section>
  );
};

export default Program;
