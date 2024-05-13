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
      height={500}
      width={500}
      loader={imageLoader}
      alt={card.alt}
      blurDataURL="/skeleton-img.svg"
    />
  );
};

const ImageLayout = ({ cards }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      className="relative mx-auto grid w-full max-w-7xl grid-cols-2  gap-4 px-10 pb-10 md:grid-cols-3"
    >
      {cards.map((card, i) => (
        <motion.div key={i} className={cn(card.className, "")}>
          <motion.div
            className={cn(card.className, "relative overflow-hidden")}
            layout
            whileHover={{ scale: 1.1 }}
            transition={{ type: "spring", stiffness: 400, damping: 17 }}
          >
            <BlurImage card={card} />
          </motion.div>
        </motion.div>
      ))}
    </motion.div>
  );
};

export default ImageLayout;
