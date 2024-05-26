"use client";
import React from "react";
import { motion } from "framer-motion";
import { cn } from "@/utils/cn";
import Image from "next/image";
import { imageLoader } from "@/utils/imageLoader";

const BlurImage = ({ card }) => {
  return (
    <Image
      src={`${card.src}`}
      height={180}
      width={1000}
      loader={imageLoader}
      alt={card.alt || "ig-feed"}
      blurDataURL="/skeleton-img.svg"
      className="aspect-video max-h-44 rounded-lg"
    />
  );
};

const ImageLayout = ({ cards }) => {
  const card = { ...cards };
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      // className="relative mx-auto h- grid w-full max-w-7xl grid-cols-2  gap-4 px-10 pb-10 sm:px-0 md:grid-cols-3"
      className="relative mx-auto w-full max-w-7xl gap-4 pb-10"
    >
      <motion.div className={cn(card.className, "w-full")}>
        <motion.div
          className={cn(card.className, "relative overflow-hidden")}
          layout
          whileHover={{ scale: 1.1 }}
          transition={{ type: "spring", stiffness: 400, damping: 17 }}
        >
          <BlurImage card={card} />
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default ImageLayout;
