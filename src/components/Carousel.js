"use client";
import { motion } from "framer-motion";
import React from "react";
import { ImagesSlider } from "@/components/ui/images-slider";

const Carousel = ({ title, images }) => {
  return (
    <ImagesSlider
      className="h-auto min-h-[23rem] sm:min-h-[40rem] "
      images={images}
      overlay={false}
    >
      <motion.div
        initial={{
          opacity: 0,
          x: -80,
        }}
        animate={{
          opacity: 1,
          x: 0,
        }}
        transition={{
          duration: 0.6,
        }}
        className="z-50 flex flex-col items-center justify-center"
      ></motion.div>
    </ImagesSlider>
  );
};

export default Carousel;
