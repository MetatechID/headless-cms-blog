"use client";

import { cn } from "@/utils/cn";
import { imageLoader } from "@/utils/imageLoader";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import React, { useState } from "react";

export const UserCard = ({ items, className }) => {
  let [hoveredIndex, setHoveredIndex] = useState(null);

  return (
    <div
      className={cn(
        "grid grid-cols-1 md:grid-cols-2  lg:grid-cols-3",
        className,
      )}
    >
      {items.map((item, idx) => (
        <div
          className="group relative block h-full w-full p-2"
          key={`idx-${idx}`}
          onMouseEnter={() => setHoveredIndex(idx)}
          onMouseLeave={() => setHoveredIndex(null)}
        >
          <AnimatePresence>
            {hoveredIndex === idx && (
              <motion.span
                className="dark:bg-palleteGreyLight/[0.8] absolute inset-0 block h-full w-full rounded-lg  bg-neutral-200"
                // rounded-3xl
                layoutId="hoverBackground"
                initial={{ opacity: 0 }}
                animate={{
                  opacity: 1,
                  transition: { duration: 0.15 },
                }}
                exit={{
                  opacity: 0,
                  transition: { duration: 0.15, delay: 0.2 },
                }}
              />
            )}
          </AnimatePresence>
          <Card>
            <CardDescription className="p-4 text-left text-base font-normal">
              {item.message}
            </CardDescription>
            {/* bg-palleteGreyLight */}
            <CardFooter className=" bg-palleteGreyLight flex flex-row gap-4 border-0 px-[1rem] py-[0.875rem]">
              <CardImage
                className="flex-none"
                imgSrc={item.src}
                alt={item.tag}
              />
              <CardTitle
                className="flex flex-grow flex-col gap-1 text-left"
                title={item.name}
                tag={item.tag}
              />
            </CardFooter>
          </Card>
        </div>
      ))}
    </div>
  );
};

export const Card = ({ className, children }) => {
  return (
    <div
      className={cn(
        "relative z-20 h-full w-full overflow-hidden rounded-2xl border-transparent bg-white group-hover:border-slate-700",
        // border dark:border-white/[0.2] bg-black
        className,
      )}
    >
      <div className="flex h-full flex-col justify-between">{children}</div>
    </div>
  );
};
export const CardTitle = ({ className, title, tag }) => {
  return (
    <div className={className}>
      <h4 className="text-primaryBlueColor text-lg font-bold capitalize tracking-wide">
        {title}
      </h4>
      <p className="text-sm font-normal text-[#7C7D83] ">{tag}</p>
    </div>
  );
};

export const CardDescription = ({ className, children }) => {
  return (
    <div className={cn(className)}>
      <p className={"text-sm leading-relaxed tracking-wide text-black"}>
        {children}
      </p>
    </div>
  );
};

export const CardImage = ({ imgSrc, alt }) => {
  return (
    <div className="relative h-16 w-16 flex-none">
      <Image
        src={imgSrc}
        alt={alt}
        fill={true}
        loader={imageLoader}
        className="aspect-square rounded-full object-cover"
      />
    </div>
  );
};

export const CardFooter = ({ className, children }) => {
  return <div className={cn(className)}>{children}</div>;
};
