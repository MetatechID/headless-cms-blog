"use client";
import React, { useState } from "react";
import {
  HoveredLink,
  Menu,
  MenuItem,
  ProductItem,
} from "@/components/ui/navbar-menu";
import { cn } from "@/utils/cn";

const Navbar = ({ className, menu }) => {
  const [active, setActive] = useState(null);
  return (
    <div
      className={cn("fixed top-10 inset-x-0 max-w-2xl mx-auto z-50", className)}
    >
      <Menu setActive={setActive}>
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
                          className="flex flex-col space-y-4 text-sm pb-3"
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
                        className="flex flex-col space-y-4 text-sm pb-3"
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
  );
};

export default Navbar;
