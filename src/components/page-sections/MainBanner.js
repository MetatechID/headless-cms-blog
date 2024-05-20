import React from "react";
import config from "@/config";
import Carousel from "@/components/Carousel";

const MainBanner = ({ items }) => {
  const images =
    items !== null
      ? items.data.attributes.images.data.map((image) => {
          return `${config.api}${image.attributes.url}`;
        })
      : [];
  return (
    <section id="home" className="w-full scroll-mt-28">
      {images.length > 0 ? (
        <Carousel title={items.data.attributes.title} images={images} />
      ) : null}
    </section>
  );
};

export default MainBanner;
