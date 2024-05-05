import React from "react";
import AccordionImage from "@/components/AccordionImage";
import config from "@/config";

const MainBanner = ({ items }) => {
  const images = items.data.attributes.images.data.map((image) => {
    return `${config.api}${image.attributes.url}`;
  });
  return (
    <section id="home" className="scroll-mt-28">
      <AccordionImage title={items.data.attributes.title} images={images} />
    </section>
  );
};

export default MainBanner;
