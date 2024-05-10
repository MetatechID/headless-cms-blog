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
      className={cn(
        "fixed inset-x-0 top-10 z-50 ml-auto max-w-2xl ",
        className,
      )}
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
  );
};

export default Navbar;
