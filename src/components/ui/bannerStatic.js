"use client";
import React, { useEffect, useRef, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { imageLoader } from "@/utils/imageLoader";

export const BannerStatic = ({
  src = "",
  showGradient = false,
  title,
  badge,
}) => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    if (window && window.innerWidth < 768) {
      setIsMobile(true);
    }
  }, []);

  const scaleX = useTransform(
    scrollYProgress,
    [0, 0.3],
    [1.2, isMobile ? 1 : 1.5],
  );
  const scaleY = useTransform(
    scrollYProgress,
    [0, 0.3],
    [0.6, isMobile ? 1 : 1.5],
  );
  const translate = useTransform(scrollYProgress, [0, 1], [0, 1500]);
  const rotate = useTransform(scrollYProgress, [0.1, 0.12, 0.3], [-28, -28, 0]);
  const textTransform = useTransform(scrollYProgress, [0, 0.3], [0, 100]);
  const textOpacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);

  return (
    <div
      ref={ref}
      className="flex flex-shrink-0 scale-[0.35] transform flex-col items-center justify-start py-0 sm:scale-50  md:scale-100 md:py-40"
    >
      <Lid
        src={src}
        scaleX={scaleX}
        scaleY={scaleY}
        rotate={rotate}
        translate={translate}
      />
    </div>
  );
};

export const Lid = ({
  scaleX = 10,
  scaleY = 10,
  rotate = 1,
  translate = 1,
  src = "",
}) => {
  return (
    <div className="relative ">
      <motion.div
        style={{
          transformStyle: "preserve-3d",
          transformOrigin: "top",
        }}
        className="relative min-h-[43.75rem] w-[54.5rem] rounded-2xl bg-[#010101] p-2"
      >
        <Image
          loader={imageLoader}
          src={src || ""}
          alt="banner"
          fill={true}
          className="inset-0 rounded-lg object-center"
        />
      </motion.div>
    </div>
  );
};
