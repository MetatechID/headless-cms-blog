"use client";

import Image from "next/image";
import { Tabs } from "@/components/ui/tabs";
import ProgramContent from "@/components/ProgramContent";
import config from "@/config";

export function TabsLayout({ itemTabs }) {
  const configApi = config.api;
  const tabs = itemTabs.map((item, idx) => {
    let images = item.attributes.imageThumbnails.map((image, idx) => {
      console.log(
        "src::",
        `${configApi}${image.thumbnail.data.attributes.url}`,
      );
      console.log("api::", configApi);
      return {
        alt: image.alt,
        src: image.thumbnail.data.attributes.url,
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
    <div className="relative mx-auto my-10 flex h-[20rem] w-full max-w-6xl flex-col items-start justify-start  [perspective:1000px] sm:flex-row md:h-[40rem]">
      <Tabs tabs={tabs} />
    </div>
  );
}
