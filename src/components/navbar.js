"use client";
import React, { useEffect, useState } from "react";
import {
  HoveredLink,
  Menu,
  MenuItem,
  ProductItem,
} from "@/components/ui/navbar-menu";
import { cn } from "@/utils/cn";
import Image from "next/image";
import { motion } from "framer-motion";

const Navbar = ({ className, menu }) => {
  const TOP_OFFSET = 800;
  const [active, setActive] = useState(null);
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

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
      className={cn(
        "fixed inset-x-0 z-50 ml-auto flex justify-between",
        className,
      )}
    >
      <div
        className={`flex-1  pl-10 ${showBackground ? "bg-black" : "bg-transparent"}`}
      >
        {showBackground ? (
          <Image
            src={"/logo_2.png"}
            objectFit="contain"
            objectPosition="left"
            fill={true}
            style={{ inset: "0 40px" }}
            className="p-2"
            alt="logo"
          />
        ) : (
          <Image width={231} height={129} src={"/logo.svg"} alt="logo_2" />
        )}
      </div>
      <div className="flex-auto">
        <Menu setActive={setActive} showBackground={showBackground}>
          {menu.map((item, idx) => {
            return (
              <MenuItem
                key={`menu-${idx}`}
                setActive={setActive}
                active={active}
                item={item.name}
                isSubMenu={item.subMenu ? true : false}
                href={item.href}
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
                          className="flex flex-col space-y-4 pb-3 text-sm"
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
        </Menu>
      </div>
    </motion.div>
  );
};

export default Navbar;
