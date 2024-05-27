"use client";
import React, { useEffect, useState } from "react";
import {
  HoveredLink,
  Menu,
  MenuItem,
  ProductItem,
} from "@/components/ui/navbar-menu";
import Image from "next/image";
import { motion, useCycle } from "framer-motion";

const Navbar = ({ className, menu }) => {
  const TOP_OFFSET = 800;
  const [active, setActive] = useState(null);
  const [isOpen, setIsOpen] = useCycle(false, true);
  const [showBackground, setShowBackground] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY >= TOP_OFFSET) {
        setShowBackground(true);
      } else {
        setShowBackground(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <Menu setActive={setActive} showBackground={showBackground} isOpen={isOpen}>
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className={`flex flex-col sm:flex-row ${isOpen ? "flex-col" : ""} items-center justify-between`}
      >
        <div
          className={`flex-shrink-0  sm:w-[14.4375rem] ${showBackground ? "relative hidden bg-black sm:flex" : "hidden h-20 bg-transparent sm:flex sm:h-[8.0625rem]"}`}
        >
          {showBackground ? (
            <Image
              src={"/logo_2.png"}
              width={116}
              height={80}
              className="py-3"
              alt="logo_2"
            />
          ) : (
            <Image width={231} height={129} src={"/logo.svg"} alt="logo" />
          )}
        </div>
        <div className="block self-end p-3 sm:hidden">
          <button
            className="text-white focus:outline-none"
            onClick={toggleNavbar}
          >
            <svg width="23" height="23" viewBox="0 0 23 23">
              <Path
                variants={{
                  closed: { d: "M 2 2.5 L 20 2.5" },
                  open: { d: "M 3 16.5 L 17 2.5" },
                }}
              />
              <Path
                d="M 2 9.423 L 20 9.423"
                variants={{
                  closed: { opacity: 1 },
                  open: { opacity: 0 },
                }}
                transition={{ duration: 0.1 }}
              />
              <Path
                variants={{
                  closed: { d: "M 2 16.346 L 20 16.346" },
                  open: { d: "M 3 2.5 L 17 16.346" },
                }}
              />
            </svg>
          </button>
        </div>
        <div
          className={`sm:flex ${isOpen ? "flex flex-col gap-3 pb-3 text-center" : "hidden"} sm:items-center sm:space-x-6`}
        >
          {menu.map((item, idx) => {
            return (
              <MenuItem
                key={`menu-${idx}`}
                setActive={setActive}
                active={active}
                item={item.name}
                isSubMenu={item.subMenu ? true : false}
                href={item.href}
                openNewTab={item.openNewTab}
              >
                {item.subMenu
                  ? item.subMenu.map((subItem, subIdx) => {
                      if (item.isDetail) {
                        return (
                          <div
                            key={`submenu-${subIdx}`}
                            className="flex flex-col space-y-4 pb-3 text-sm"
                          >
                            <ProductItem
                              title={subItem.title}
                              href={subItem.href}
                              src={subItem.src}
                              description={subItem.description}
                            />
                          </div>
                        );
                      }
                      return (
                        <div
                          key={`submenu-${subIdx}`}
                          className="space-y-4 pb-3 text-sm"
                        >
                          <HoveredLink href={subItem.href}>
                            {subItem.name}
                          </HoveredLink>
                        </div>
                      );
                    })
                  : null}
              </MenuItem>
            );
          })}
        </div>
      </motion.div>
    </Menu>
  );
};

const Path = (props) => {
  return (
    <motion.path
      fill="none"
      strokeWidth="3"
      stroke="hsl(0, 0%, 100%)"
      strokeLinecap="round"
      {...props}
    />
  );
};

export default Navbar;
