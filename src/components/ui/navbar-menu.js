"use client";
import React, { useRef } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

const transition = {
  type: "spring",
  mass: 0.5,
  damping: 11.5,
  stiffness: 100,
  restDelta: 0.001,
  restSpeed: 0.001,
};

export const MenuItem = ({
  setActive,
  active = "",
  item = "",
  children,
  isSubMenu,
  href = "#",
  openNewTab = false,
}) => {
  return (
    <div onMouseEnter={() => setActive(item)} className="relative ">
      <HoveredLink openNewTab={openNewTab} href={href}>
        <motion.p
          transition={{ duration: 0.3 }}
          className="cursor-pointer text-black hover:opacity-[0.9] dark:text-white"
        >
          {item}
        </motion.p>
      </HoveredLink>
      {/* {active !== null && isSubMenu === true && (
        <motion.p
          transition={{ duration: 0.3 }}
          className="cursor-pointer text-black hover:opacity-[0.9] dark:text-white"
        >
          {item}
        </motion.p>
      )} */}
      {active !== null && isSubMenu === true && (
        <motion.div
          initial={{ opacity: 0, scale: 0.85, y: 10 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={transition}
        >
          {active === item && (
            <div className="absolute left-1/2 top-[calc(100%_+_1.2rem)] -translate-x-1/2 transform pt-4">
              <motion.div
                transition={transition}
                layoutId="active" // layoutId ensures smooth animation
                className="overflow-hidden rounded-2xl border border-black/[0.2] bg-white shadow-xl backdrop-blur-sm dark:border-white/[0.2] dark:bg-black"
              >
                <motion.div
                  layout // layout ensures smooth animation
                  className="h-full w-max p-4"
                >
                  {children}
                </motion.div>
              </motion.div>
            </div>
          )}
        </motion.div>
      )}
    </div>
  );
};

export const Menu = ({
  setActive = () => {},
  children,
  showBackground,
  isOpen,
}) => {
  const containerRef = useRef(null);
  return (
    <motion.nav
      initial={false}
      animate={isOpen ? "open" : "closed"}
      ref={containerRef}
      onMouseLeave={() => setActive(null)} // resets the state
      className={`boder border-transparent shadow-input sm:px-16 ${showBackground ? "dark:border-white/[0.2] dark:bg-black" : "dark:border-white/[0.2] dark:bg-[transparent]"} `}
    >
      {children}
    </motion.nav>
  );
};

export const ProductItem = ({
  title = "",
  description = "",
  href = "",
  src = "",
}) => {
  return (
    <Link href={href} className="flex space-x-2">
      <Image
        src={src}
        width={140}
        height={70}
        alt={title}
        className="flex-shrink-0 rounded-md shadow-2xl"
      />
      <div>
        <h4 className="mb-1 text-xl font-bold text-black dark:text-white">
          {title}
        </h4>
        <p className="max-w-[10rem] text-sm text-neutral-700 dark:text-neutral-300">
          {description}
        </p>
      </div>
    </Link>
  );
};

export const HoveredLink = ({ children, openNewTab, ...rest }) => {
  return (
    <Link
      {...rest}
      className="text-neutral-700 hover:text-black dark:text-neutral-200 "
      target={openNewTab ? "__blank" : ""}
    >
      {children}
    </Link>
  );
};
